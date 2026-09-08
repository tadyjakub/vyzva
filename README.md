# vyzva

Pokutový lístek pro rodinnou výzvu (spánek, cvičení, sladké). Statická stránka
(`index.html`) + Netlify Function (`netlify/functions/data.mjs`), která přes
[Netlify Blobs](https://docs.netlify.com/blobs/overview/) ukládá data sdíleně
pro všechny, kdo na stránku přistupují — takže rodina vidí stejná data bez
ohledu na zařízení/prohlížeč.

## Nasazení na Netlify

1. Nahraj repo na GitHub (nebo použij `netlify deploy` z CLI).
2. V Netlify: **Add new site → Import an existing project** a vyber repo.
   Build settings se načtou z `netlify.toml` (publish `.`, functions
   `netlify/functions`) — není potřeba build command.
3. Netlify Blobs fungují automaticky bez dalšího nastavování (žádný token
   ani DB navíc netřeba).
4. Po nasazení se stránka ukládá/načítá přes `/.netlify/functions/data`.

### Lokální test

```
netlify dev
```

(Vyžaduje Netlify CLI: `npm i -g netlify-cli`.)
