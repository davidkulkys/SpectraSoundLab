# SpectraSoundLab - Arquitetura

## 3 Camadas

1. **CAPTURE (Frontend - app/page.tsx)**
   - Tabs: Texto, Imagem (moodboard), Vídeo (20s), Áudio (humming)
   - Grid de parâmetros: genre, bpm 60-180, key, scale, mood, energy 1-10, instruments[], duration, structure, hasLyrics, lyricsTheme, voice
   - State: projectDraft (tipo Project)

2. **INTERPRET (Function /functions/interpret.ts + /lib/gemini.ts)**
   - Recebe projectDraft + arquivos
   - Chama Gemini 1.5 Flash com prompt fixo (ver 06-PROMPT-ENGINE.md)
   - Retorna JSON: {interpreted_mood, music_prompt (30 palavras EN para Stable Audio), negative_prompt, structure[], lyrics_prompt}

3. **GENERATE (Function /functions/generate.ts)**
   - Recebe music_prompt
   - Chama Stable Audio API POST /v2/generation
   - Salva em Firestore `generations` com status generating
   - Polling a cada 5s até audioUrl pronto
   - Retorna audioUrl + stems

4. **PLAYER + LIBRARY**
   - Player.tsx com 3 estados: empty, loading (waveform animada), ready (play, download WAV/MP3/Stems, Variação, Estender 30s)
   - Rota /library lista generations do user

## Regra de Ouro
NUNCA reescreva arquivo com build verde. Apenas edite o que a etapa permite.
