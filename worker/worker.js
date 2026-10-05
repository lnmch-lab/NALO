// Backend Nalo : reçoit une photo, demande à Claude d'identifier l'objet
// et de le traduire en vietnamien, renvoie le résultat au frontend.
//
// Secret requis (jamais dans ce fichier) : ANTHROPIC_API_KEY
// À définir avec : wrangler secret put ANTHROPIC_API_KEY

const ANTHROPIC_MODEL = "claude-haiku-4-5-20251001";

const CATEGORIES = ["cuisine", "maison", "nature", "ville", "vêtement", "nourriture", "autre"];

const SYSTEM_PROMPT = `Tu identifies l'objet principal sur une photo pour une appli d'apprentissage du vietnamien.
Réponds UNIQUEMENT avec un objet JSON valide, sans texte avant ni après, exactement sous cette forme :
{"objet_fr": "...", "objet_vn": "...", "prononciation": "...", "categorie": "..."}

Règles :
- "objet_fr" : nom simple de l'objet en français, singulier, minuscule.
- "objet_vn" : traduction en vietnamien de cet objet (mot courant).
- "prononciation" : approximation phonétique simple, lisible par un francophone (pas d'API).
- "categorie" : une valeur parmi ${CATEGORIES.join(", ")}.`;

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin || "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function jsonResponse(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });
}

function extractJson(text) {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("Pas de JSON trouvé dans la réponse du modèle");
  return JSON.parse(match[0]);
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    if (request.method !== "POST") {
      return jsonResponse({ error: "Méthode non supportée" }, 405, origin);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: "Corps de requête JSON invalide" }, 400, origin);
    }

    const { image, mediaType } = body;
    if (!image || !mediaType) {
      return jsonResponse({ error: "Champs 'image' et 'mediaType' requis" }, 400, origin);
    }

    if (!env.ANTHROPIC_API_KEY) {
      return jsonResponse({ error: "Clé API non configurée sur le serveur" }, 500, origin);
    }

    try {
      const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: ANTHROPIC_MODEL,
          max_tokens: 300,
          system: SYSTEM_PROMPT,
          messages: [
            {
              role: "user",
              content: [
                { type: "image", source: { type: "base64", media_type: mediaType, data: image } },
                { type: "text", text: "Identifie l'objet principal de cette photo." },
              ],
            },
          ],
        }),
      });

      if (!anthropicRes.ok) {
        const errText = await anthropicRes.text();
        return jsonResponse({ error: "Erreur API Anthropic", detail: errText }, 502, origin);
      }

      const anthropicData = await anthropicRes.json();
      const text = anthropicData.content?.[0]?.text || "";
      const card = extractJson(text);

      return jsonResponse(card, 200, origin);
    } catch (err) {
      return jsonResponse({ error: "Erreur serveur", detail: String(err) }, 500, origin);
    }
  },
};
