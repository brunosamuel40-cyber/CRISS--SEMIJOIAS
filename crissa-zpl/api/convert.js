// api/convert.js — Crissá ZPL → PDF Converter
// Usa a Labelary API (gratuita, sem limite de uso comercial)

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { zpl, dpi = 8, width = 4, height = 6 } = req.body;

    if (!zpl || typeof zpl !== 'string') {
      return res.status(400).json({ error: 'ZPL inválido ou ausente' });
    }

    // Separar múltiplas etiquetas por ^XA...^XZ
    const labels = splitLabels(zpl);
    if (labels.length === 0) {
      return res.status(400).json({ error: 'Nenhum bloco ^XA...^XZ encontrado' });
    }

    // Converter cada etiqueta via Labelary (retorna PNG)
    const pngBuffers = [];
    for (const label of labels) {
      const url = `https://api.labelary.com/v1/printers/${dpi}dpmm/labels/${width}x${height}/0/`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'image/png',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: label,
      });

      if (!response.ok) {
        throw new Error(`Labelary retornou ${response.status}: ${await response.text()}`);
      }

      const buffer = await response.arrayBuffer();
      pngBuffers.push(Buffer.from(buffer));
    }

    // Retornar as imagens como JSON base64
    const images = pngBuffers.map(buf => buf.toString('base64'));
    return res.status(200).json({
      success: true,
      count: images.length,
      images,
      width,
      height,
    });

  } catch (err) {
    console.error('Erro na conversão:', err);
    return res.status(500).json({ error: err.message || 'Erro interno no servidor' });
  }
}

function splitLabels(zpl) {
  const matches = zpl.match(/\^XA[\s\S]*?\^XZ/gi);
  return matches ? matches.map(s => s.trim()) : [];
}
