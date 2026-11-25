# Image licences

Every third-party image on this site needs a verifiable licence recorded here before
it goes live. If an image is not listed, it does not ship.

## Sourcing rules

1. Prefer **CC0 / public domain** from a source that publishes a permanent, linkable
   record of the licence (Wikimedia Commons, Openverse). A memory of "it was on a
   free site" is not a record.
2. **Avoid recognisable faces.** A free licence generally does not cover a person's
   likeness without a model release, so scenes, objects and workspaces are the safer
   choice for decorative imagery.
3. **Avoid other companies' branding** in frame. Crop it out or pick another shot.
4. Record the row below at download time: file, source page, creator, licence, date.
5. Keep the original download alongside the record.

## Licensed third-party images

All sourced from Wikimedia Commons, which carries the licence tag, upload history and,
for imports, an archived copy of the original source page. All CC0 1.0
(https://creativecommons.org/publicdomain/zero/1.0/). No people in frame in any of them.

| File | Used on | Commons source | Creator | Original | Added |
|---|---|---|---|---|---|
| `public/hero-office.jpg` | `/` hero | [LOOM office workspaces](https://commons.wikimedia.org/wiki/File:LOOM_office_workspaces.jpg) | Loominade | 4032x3024 | 2026-11-15 |
| `public/photo-break-meeting.jpg` | `/` band | [Minimalist meeting room](https://commons.wikimedia.org/wiki/File:Minimalist_meeting_room_(Unsplash).jpg) | Breather | 5695x3797 | 2026-11-15 |
| `public/photo-break-laptop-desk.jpg` | `/website-design/` | [Laptop on a desk](https://commons.wikimedia.org/wiki/File:Laptop_on_a_desk_(Unsplash).jpg) | Aleksi Tappura | 4928x3264 | 2026-11-15 |
| `public/photo-break-desk-setup.jpg` | `/work/` | [Overhead desktop workspace](https://commons.wikimedia.org/wiki/File:Overhead_desktop_workspace_(Unsplash).jpg) | Jeff Sheldon | 5438x3494 | 2026-11-15 |
| `public/photo-break-meeting-room.jpg` | `/consulting/` | [Quiet meeting room](https://commons.wikimedia.org/wiki/File:Quiet_meeting_room_(Unsplash).jpg) | Breather | 5345x3563 | 2026-11-15 |

Each file ships as a crop sized to the slot it fills, so `object-cover` does not have to
discard most of the frame:

- hero: 1200x900 (4:3)
- tall bands (`h-96`): 2000x420
- short bands (`h-64`): 2000x300

The `hero-office.jpg` crop deliberately excludes the "LOOM" wall text from the original.

## Canva compositions

These share cards were composed in Canva from its own content library. Where a card
combines photographic elements, note the element source in Canva alongside the design
so the record travels with the file. Graphics-only cards are listed under Own work.

| File | Composition |
|---|---|
| `og-google-voice.png` | Photographic, includes people |
| `og-website-not-found.png` | Photographic, includes people |
| `og-website-cost.png` | Photographic scene plus device mockup |
| `og-long-weekend.png` | Photographic background plus device mockup |
| `og-website-or-facebook.png` | Photographic background plus device mockup |
| `og-ai-recommendations.png` | Device mockups over a composed background |
| `og-handle-customers.png` | Composite with photographic elements |

Derived thumbnails in `public/thumbs/` come from these same files.

## Own work

| File | Note |
|---|---|
| `public/william-mau-headshot.jpg` | Own photo |
| `public/favicon-*.png`, `public/apple-touch-icon.png`, `public/mau-consulting-favicon-*.png` | Own brand assets |
| `public/og-home.jpg`, `og-ai-agent-scoped.png`, `og-image-converter.png`, `og-qr-generator.png` | Own artwork, graphics only |
| `public/chart-ai-routing.png` | Own artwork |
| `public/salesforce-admin-badge.png` | Salesforce certification badge, issued to William |
| `public/portfolio/*` | Client logos, shown with the client's permission |
