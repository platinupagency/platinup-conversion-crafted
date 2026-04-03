

## Plan: Lazy loading stránek + optimalizace Google Fonts

### 1. Přesun Google Fonts do `index.html` s preconnect + preload
**Soubor: `index.html`** — přidat do `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

**Soubor: `src/index.css`** — odstranit řádek 1 (`@import url(...)`)

### 2. Lazy loading podstránek v `App.tsx`
- Nahradit statické importy `Terms` a `Showcase` za `React.lazy()`
- Obalit `<Routes>` do `<Suspense>` s jednoduchým fallbackem (spinner nebo prázdný div)

```tsx
const Terms = lazy(() => import("./pages/Terms.tsx"));
const Showcase = lazy(() => import("./pages/Showcase.tsx"));
```

Tím se kód těchto stránek stáhne až když uživatel na ně přejde, což zrychlí úvodní načtení hlavní stránky.

