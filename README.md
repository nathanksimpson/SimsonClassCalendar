# Class Calendar Planner

A single-page web app for planning class terms: lessons, books-by-month, holidays/events, compression, and print summaries. Data is stored in the browser (`localStorage`) unless you use the separate **Calendar App - Multi User** build with a sync server.

## How to run

1. Open the project folder on a computer that can read the files (local disk or network share).
2. **Recommended:** serve the folder with a simple local web server (avoids `file://` limits for Korean holiday import):
   - Python: `python -m http.server 8080` then visit `http://localhost:8080`
   - VS Code / Cursor: “Live Server” extension
3. Open `index.html` in the browser if you only need offline editing without Korean holiday fetch.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page layout and modals |
| `app.js` | Application logic |
| `js/schedule-core.js` | Lesson-group / compression helpers (also tested in Node) |
| `js/utils.js` | Shared escape/date helpers |
| `styles.css` | Styles |
| `SCHEMA.md` | Export JSON shape |
| `Example Calendars/` | Sample exports |

## Backup

Use **Export** in the app before major changes or imports. Import replaces all data in this browser after confirmation.

## Tests

```bash
node tests/schedule-migrate.test.mjs
node --check app.js
```

## Related

- `homework-import-standard.md` — separate homework import spec (not wired into this app).
- `Calendar App - Multi User/` — team sync variant on the same NAS tree.
