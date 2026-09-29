# Data Model v3

## Firestore collections

### factory_batches
{
  id: string,
  genre: string,
  totalRequested: number,
  totalGenerated: number,
  status: 'running' | 'done' | 'error',
  costMode: 'free-first',
  createdAt: Timestamp
}

### tracks (opcional, para indexar a base)
{
  id: "ssl-lofi-001",
  genre: "lo-fi",
  bpm: 85,
  key: "A minor",
  duration: 120,
  filePath: "/music-base/lo-fi/ssl-lofi-001.mp3",
  jsonPath: "/music-base/lo-fi/ssl-lofi-001.json",
  model: "ace-step-1.5:free",
  license: "royalty-free, ECAD-free, commercial use",
  hash: "sha256...",
  generatedAt: Timestamp
}

## Estrutura de pastas Storage

/music-base/{genre}/{id}.mp3
/music-base/{genre}/{id}.json

JSON exemplo:
{
  "id": "ssl-lofi-001",
  "genre": "lo-fi",
  "bpm": 85,
  "prompt": "royalty-free lo-fi 85bpm A minor rhodes vinyl crackle, original composition",
  "model": "ace-step/ace-step-1.5:free",
  "license": "royalty-free, ECAD-free, commercial use allowed, no author rights",
  "generated_at": "2026-09-29T12:00:00Z",
  "hash": "abc123...",
  "owner": "SpectraSoundLab"
}
