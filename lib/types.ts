export type Genre = 'lo-fi' | 'mpb-moderna' | 'bossa' | 'phonk' | 'cinematic' | 'eletronica' | 'trap' | 'indie-pop';
export type MusicalKey = 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | 'B';

export interface TrackMetadata {
  id: string; // ex: ssl-lofi-001
  genre: Genre;
  bpm: number;
  key?: string;
  duration: number;
  prompt: string;
  model: string; // ex: ace-step/ace-step-1.5:free
  license: string; // royalty-free, ECAD-free
  filePath: string; // /music-base/lo-fi/ssl-lofi-001.mp3
  jsonPath: string;
  hash: string;
  generatedAt: string;
  owner: string;
}

export interface FactoryBatch {
  id: string;
  genre: Genre;
  totalRequested: number;
  totalGenerated: number;
  status: 'running' | 'done' | 'error';
  costMode: 'free-first';
  createdAt: any;
}
