# SpectraSoundLab v3 - Arquitetura Fábrica

## Fluxo Fábrica

1. **FÁBRICA (app/factory/page.tsx)**
   - UI: Escolhe estilo, quantidade (ex: 200 lo-fi), BPM range, duração padrão (120s)
   - Botão "Gerar Lote"

2. **MOTOR DUPLO com prioridade custo (lib/factory-router.ts)**
   - Motor A GRÁTIS PRIMEIRO (via OpenRouter / Teamorouter):
     - ace-step/ace-step-1.5:free (MIT, chinês, custo 0)
     - yue/yue-7b:free
     - mubert/mubert-api (royalty-free comercial)
   - Motor B PAGO (fallback se A falhar):
     - stability/stable-audio-2.5

3. **ARMAZENAMENTO**
   - Firebase Storage ou S3 local:
     /music-base/
       /lo-fi/ssl-lofi-001.mp3 + ssl-lofi-001.json
       /mpb-moderna/ssl-mpb-001.mp3 + json
   - Cada .json é certificado ECAD-free: model, prompt, hash, generated_at, license

4. **DISTRIBUIÇÃO**
   - Outro App (SpectraPlayer) lista pastas e permite download. Não gera.

Regra de ouro: Sempre gerar .mp3 + .json irmão. Nunca gerar sem certificado.
