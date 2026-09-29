# SpectraSoundLab - Data Model

## Firestore

### projects
```ts
{
  id: string
  userId: string
  briefing: string
  genre: 'lo-fi' | 'indie-pop' | 'mpb-moderna' | 'trap' | 'phonk' | 'cinematic' | 'eletronica' | 'bossa'
  bpm: number // 60-180
  key: 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | 'B'
  scale: 'maior' | 'menor' | 'dorian' | 'mixolydian'
  mood: 'nostalgico' | 'euforico' | 'sombrio' | 'alegre' | 'melancolico' | 'energetico'
  energy: number // 1-10
  instruments: string[] // piano, rhodes, synth-analogico, 808, strings, guitarra, voz
  duration: '30s' | '60s' | '90s' | '120s' | '180s' | 'full'
  structure: 'intro-verse-chorus' | 'loop' | 'build-drop' | 'a-b-a'
  hasLyrics: boolean
  lyricsTheme?: string
  lyricsLang?: 'pt-BR' | 'en' | 'es'
  voice?: 'feminina-suave' | 'masculina-grave' | 'masculina-falsete' | 'coral'
  imageUrl?: string
  videoUrl?: string
  audioUrl?: string
  createdAt: Timestamp
}
```

### generations
```ts
{
  id: string
  projectId: string
  promptJson: { interpreted_mood, music_prompt, negative_prompt, structure, lyrics_prompt }
  audioUrl?: string
  stems?: { drums, bass, melody, vocal }
  status: 'generating' | 'ready' | 'error'
  createdAt: Timestamp
}
```
