# SiriShortcutsWebUI

Static Shortcuts web views hosted on GitHub Pages.

## DateTime Picker
Open:
https://crawforb.github.io/SiriShortcutsWebUI/apps/datetime/?cb=UI%20DateTime%20Picker

## Tailwind Color Picker
Select from the complete Tailwind 2.0 color palette with all shades (50-900).

Open:
https://crawforb.github.io/SiriShortcutsWebUI/apps/pickers/color.html?cb=UI%20Color%20Picker

Features:
- All 20 Tailwind 2.0 color families (Slate, Gray, Zinc, Neutral, Stone, Red, Orange, Amber, Yellow, Lime, Green, Emerald, Teal, Cyan, Sky, Blue, Indigo, Violet, Purple, Fuchsia, Pink, Rose)
- All 10 shades per color (50, 100, 200, 300, 400, 500, 600, 700, 800, 900)
- Search functionality for quick color lookup
- Returns hex, RGB, and Tailwind class name
- Visual preview with automatic contrast detection

## Theme / Background variables

The project uses CSS custom properties for theming. The main background variable is `--bg`.
`--bg` is a solid color: `#323232` for dark mode and `#F2F2F2` for light mode.
The `--app-bg` variable was removed — backgrounds now use `--bg` directly.
- To force a theme in the app, set `data-theme` on the `html` element, for example:

```js
// force light theme
document.documentElement.setAttribute('data-theme', 'light');

// clear and use system preference
document.documentElement.removeAttribute('data-theme');
```

The `apps/` pages were updated to use `--bg` instead of `--app-bg`.
