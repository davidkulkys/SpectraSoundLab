# SpectraSoundLab v3 - Fábrica

Fábrica que gera base musical por estilo para estabelecimentos comerciais (ECAD-free).

## Como funciona
- app/factory -> gera em lote
- lib/factory-router.ts -> tenta ACE-Step free via OpenRouter primeiro, fallback Stable Audio pago
- Saída: /music-base/{genre}/mp3 + json certificado

## Rodar
npm install
npm run dev -> abre /factory
