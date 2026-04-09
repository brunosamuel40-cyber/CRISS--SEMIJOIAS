# 💜 CRISSÁ — Conversor ZPL → PDF

Conversor de etiquetas ZPL para PDF, personalizado para a loja **Crissá · Dorama & Semijoias**.  
Sem mensalidade. Sem limites. Hospede no seu próprio domínio.

---

## 🚀 Deploy no Vercel — Passo a Passo

### Pré-requisitos (todos gratuitos)
- Conta no [GitHub](https://github.com) (grátis)
- Conta no [Vercel](https://vercel.com) (grátis)
- [GitHub Desktop](https://desktop.github.com) (opcional, mais fácil)

---

### Passo 1 — Prepare a pasta do projeto

Você deve ter estes arquivos:
```
crissa-zpl/
├── api/
│   └── convert.js
├── public/
│   └── index.html
├── package.json
├── vercel.json
└── README.md
```

---

### Passo 2 — Suba para o GitHub

**Opção A — GitHub Desktop (mais fácil):**
1. Abra o GitHub Desktop
2. Clique em `File → Add Local Repository`
3. Selecione a pasta `crissa-zpl`
4. Clique em `Publish repository` → marque como **público**
5. Clique em `Publish`

**Opção B — Terminal:**
```bash
cd crissa-zpl
git init
git add .
git commit -m "Crissá ZPL Converter"
git remote add origin https://github.com/SEU_USUARIO/crissa-zpl.git
git push -u origin main
```

---

### Passo 3 — Deploy no Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login com o GitHub
2. Clique em **"Add New → Project"**
3. Selecione o repositório `crissa-zpl`
4. Clique em **"Deploy"** (sem alterar nada!)
5. Aguarde ~1 minuto ⏳

✅ **Pronto!** Seu site estará em:  
`https://crissa-zpl.vercel.app`

---

### Passo 4 — (Opcional) Domínio próprio

No painel do Vercel:
1. Vá em **Settings → Domains**
2. Digite seu domínio (ex: `etiquetas.crissa.com.br`)
3. Siga as instruções para apontar o DNS

---

## 🖨 Como usar o conversor

1. **Cole o ZPL** ou carregue o arquivo `.txt` da Shopee
2. Configure o tamanho (padrão: 100×150mm)
3. Clique em **"Gerar prévia"**
4. Clique em **"Baixar PDF"**
5. Abra o PDF e imprima na sua impressora térmica! ✨

---

## ⚙️ Como a conversão funciona

O app usa a [Labelary API](https://labelary.com/service.html) — uma API **gratuita e open-source** para converter ZPL em imagem PNG, sem limites comerciais.

O frontend em HTML puro chama essa API diretamente e monta o PDF no navegador usando a biblioteca [jsPDF](https://github.com/parallax/jsPDF).

---

## 📦 Tecnologias

| Componente | Tecnologia |
|---|---|
| Frontend | HTML + CSS + JavaScript puro |
| Conversão ZPL→PNG | Labelary API (gratuita) |
| Geração PDF | jsPDF (client-side) |
| Hospedagem | Vercel (gratuito) |

---

Feito com 💜 para a **CRISSÁ · Dorama & Semijoias** — Americana, SP
