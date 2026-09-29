export type Genre = 'lo-fi' | 'indie-pop' | 'mpb-moderna' | 'trap' | 'phonk' | 'cinematic' | 'eletronica' | 'bossa';
export type MusicalKey = 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | 'B';
export type Scale = 'maior' | 'menor' | 'dorian' | 'mixolydian';
export type Mood = 'nostalgico' | 'euforico' | 'sombrio' | 'alegre' | 'melancolico' | 'energetico';

export interface Project {
  id: string;
  userId: string;
  briefing: string;
  genre: Genre;
  bpm: number;
  key: MusicalKey;
  scale: Scale;
  mood: Mood;
  energy: number;
  instruments: string[];
  duration: '30s' | '60s' | '90s' | '120s' | '180s' | 'full';
  structure: 'intro-verse-chorus' | 'loop' | 'build-drop' | 'a-b-a';
  hasLyrics: boolean;
  lyricsTheme?: string;
  lyricsLang?: 'pt-BR' | 'en' | 'es';
  voice?: 'feminina-suave' | 'masculina-grave' | 'masculina-falsete' | 'coral';
  imageUrl?: string;
  videoUrl?: string;
  audioUrl?: string;
  createdAt: any;
}

export interface Generation {
  id: string;
  projectId: string;
  promptJson: {
    interpreted_mood: string;
    music_prompt: string;
    negative_prompt: string;
    structure: string[];
    lyrics_prompt?: string;
  };
  audioUrl?: string;
  stems?: {
    drums?: string;
    bass?: string;
    melody?: string;
    vocal?: string;
  };
  status: 'generating' | 'ready' | 'error';
  createdAt: any;
}
