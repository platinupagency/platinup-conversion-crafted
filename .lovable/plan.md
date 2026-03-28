

## Problem Analysis

Both "nejvýdělečnějších" and "Spolupracovali jsme s" use the same `text-gold` class (`hsl(42 45% 55%)`). The CSS color is identical. There are no parent opacity, filter, or overlay issues — the ClientsSection has `bg-background` (solid white) and `z-10`.

The difference is **purely optical**: small, thin text (`text-sm font-bold uppercase tracking-widest`) renders visually lighter than large, heavy text (`text-5xl font-extrabold`). This is a well-known typographic phenomenon — at small sizes with wide letter-spacing, the same color appears washed out because there's less ink-to-whitespace ratio.

## Solution

Since the reference is "nejvýdělečnějších" (large bold text), the small heading needs a **compensating darker/more saturated gold** to appear perceptually identical.

### Change in `ClientsSection.tsx`

Replace `text-gold` with an inline style using a darker gold: `hsl(42, 50%, 42%)` — lower lightness (42% vs 55%) and slightly higher saturation. This compensates for the optical thinning at small sizes.

```tsx
<p 
  className="relative z-20 text-sm font-bold uppercase tracking-widest mb-10 font-display"
  style={{ color: 'hsl(42, 50%, 42%)' }}
>
```

This is the standard typographic approach: small text needs a darker shade of the same hue to *look* the same as larger text in that color.

