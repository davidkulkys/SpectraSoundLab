# SpectraSoundLab - API Contracts

## Gemini 1.5 Flash - Interprete
**Input:** projectDraft + imagem base64 + video + audio
**Prompt fixo:**
"Você é produtor musical sênior. Receba briefing: {briefing}, genre: {genre}, bpm: {bpm}, mood: {mood}, key: {key}. Analise imagem/video/audio se houver. Retorne APENAS JSON válido com: interpreted_mood (3 palavras), music_prompt (30 palavras em inglês, estilo Stable Audio: 'lo-fi 85bpm A minor rhodes vinyl crackle soft drums...'), negative_prompt, structure array ['intro 8 bars'...], lyrics_prompt se hasLyrics true"

## Stable Audio 2.5
POST https://api.stability.ai/v2beta/audio/stable-audio-2/text-to-audio
Headers: Authorization: Bearer STABILITY_API_KEY
Body: { prompt: music_prompt, negative_prompt, duration: 60, steps: 100 }
Response: { id } -> polling GET /v2beta/audio/stable-audio-2/{id} até audio_url

## ElevenLabs Music (opcional para voz)
Para quando hasLyrics true
