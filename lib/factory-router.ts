// SpectraSoundLab - Motor Duplo com Prioridade Grátis
// Tenta modelos chineses gratuitos via OpenRouter primeiro, só cai pro pago se falhar

type RouterResult = { audioUrl: string; modelUsed: string; isFree: boolean };

export async function generateWithFreeFirst(prompt: string, duration = 120): Promise<RouterResult> {
  const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY;
  const STABILITY_KEY = process.env.STABILITY_API_KEY;

  const freeModels = [
    'ace-step/ace-step-1.5:free', // Chinês MIT, custo 0, ideal para base ECAD-free
    'yue/yue-7b:free',
    'mubert/mubert-api' // royalty-free comercial
  ];

  // 1. MOTOR A - GRÁTIS
  for (const model of freeModels) {
    try {
      console.log(`[Factory] Tentando Motor A grátis: ${model}`);
      const res = await fetch('https://openrouter.ai/api/v1/audio/generations', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENROUTER_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://spectrasoundlab.com',
        },
        body: JSON.stringify({
          model,
          prompt: `${prompt}, original composition, no copyrighted melody, royalty-free`,
          duration,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        return { audioUrl: data.audio_url || data.url, modelUsed: model, isFree: true };
      }
    } catch (e) {
      console.warn(`Motor A ${model} falhou, tentando próximo...`);
    }
  }

  // 2. MOTOR B - PAGO (fallback)
  console.log('[Factory] Motor A falhou, usando Motor B pago: Stable Audio 2.5');
  const res = await fetch('https://api.stability.ai/v2beta/audio/stable-audio-2/text-to-audio', {
    method: 'POST',
    headers: { Authorization: `Bearer ${STABILITY_KEY}` },
    body: JSON.stringify({ prompt, duration, steps: 80 }),
  });
  const data = await res.json();
  // polling simplificado
  return { audioUrl: data.audio_url, modelUsed: 'stable-audio-2.5', isFree: false };
}
