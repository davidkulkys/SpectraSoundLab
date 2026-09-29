'use client';
import { useState } from 'react';

export default function FactoryPage() {
  const [genre, setGenre] = useState('lo-fi');
  const [qty, setQty] = useState(10);
  const [logs, setLogs] = useState<string[]>([]);

  const startBatch = async () => {
    setLogs([`[Factory] Iniciando lote: ${qty} faixas de ${genre} com motor free-first...`]);
    // Aqui chamaria /api/factory/generate
    // Por enquanto simula log
    for (let i = 1; i <= qty; i++) {
      setTimeout(() => {
        setLogs(prev => [...prev, `[${genre}] ssl-${genre}-${String(i).padStart(3,'0')}.mp3 + .json gerado via ace-step:free (custo R$0)`]);
      }, i * 800);
    }
  };

  return (
    <main style={{ padding: 40, maxWidth: 900, fontFamily: 'Inter, sans-serif' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>SpectraSoundLab - Fábrica v3</h1>
      <p style={{ color: '#666', marginTop: 8 }}>Gera base musical por pasta de estilo. Motor duplo: grátis primeiro via OpenRouter.</p>

      <div style={{ marginTop: 24, padding: 24, background: '#F5F5F5', borderRadius: 16, display: 'flex', gap: 16 }}>
        <select value={genre} onChange={e => setGenre(e.target.value)} style={{ padding: 12, borderRadius: 8 }}>
          <option>lo-fi</option><option>mpb-moderna</option><option>bossa</option><option>phonk</option><option>cinematic</option><option>eletronica</option>
        </select>
        <input type="number" value={qty} onChange={e => setQty(Number(e.target.value))} style={{ padding: 12, borderRadius: 8, width: 100 }} />
        <button onClick={startBatch} style={{ padding: '12px 24px', background: '#111', color: '#fff', borderRadius: 8 }}>Gerar Lote</button>
      </div>

      <div style={{ marginTop: 24, background: '#111', color: '#0f0', padding: 16, borderRadius: 12, minHeight: 200, fontFamily: 'monospace', fontSize: 12 }}>
        {logs.map((l, i) => <div key={i}>{l}</div>)}
        {logs.length === 0 && <div>Logs da fábrica aparecerão aqui...</div>}
      </div>

      <div style={{ marginTop: 24, fontSize: 12, color: '#666' }}>
        Estrutura gerada: /music-base/{genre}/ssl-{genre}-001.mp3 + .json (certificado ECAD-free)
      </div>
    </main>
  );
}
