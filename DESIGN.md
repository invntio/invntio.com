---
name: Invntio
description: A one-person software studio presented as a release record of what is built, what is live, and on what terms.
colors:
  green: "#2cac7b"
  green-deep: "#155c40"
  green-deeper: "#0f4a33"
  green-ink: "#1c7a55"
  green-wash: "#e6f4ee"
  ground: "#f6f7f5"
  surface: "#ffffff"
  ink: "#15181c"
  ink-2: "#4a4f57"
  ink-3: "#686d75"
  rule: "#e2e4e0"
  rule-strong: "#c9ccc6"
  danger: "#b3261e"
  danger-wash: "#fbeceb"
  ground-dark: "#0f1214"
  surface-dark: "#171b1e"
  ink-dark: "#e9ece6"
  ink-2-dark: "#b3b9b1"
  ink-3-dark: "#8c938b"
  rule-dark: "#262b2f"
  rule-strong-dark: "#3a4045"
  green-ink-dark: "#4fc998"
  green-wash-dark: "#13301f"
  green-hover-dark: "#3cc28e"
  on-accent-dark: "#07120d"
  danger-dark: "#ff8a80"
  danger-wash-dark: "#3a1614"
  grid-line-dark: "rgb(233 236 230 / 0.035)"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.9vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.4rem + 1.8vw, 2.75rem)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.1rem + 0.9vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title-small:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "normal"
  code:
    fontFamily: "ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
rounded:
  control: "6px"
  node: "50%"
spacing:
  gutter: "clamp(1rem, 0.4rem + 2.6vw, 2.5rem)"
  section: "clamp(5rem, 3.5rem + 6vw, 9rem)"
  section-head: "clamp(2rem, 1.5rem + 2vw, 3.5rem)"
  max-width: "76rem"
components:
  button-primary:
    backgroundColor: "{colors.green-deep}"
    textColor: "{colors.surface}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.375rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.green-deeper}"
    textColor: "{colors.surface}"
  button-primary-compact:
    backgroundColor: "{colors.green-deep}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "0.5rem 1rem"
    height: "2.5rem"
  button-quiet:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.375rem"
    height: "3rem"
  button-primary-dark:
    backgroundColor: "{colors.green}"
    textColor: "{colors.on-accent-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.375rem"
    height: "3rem"
  button-primary-dark-hover:
    backgroundColor: "{colors.green-hover-dark}"
    textColor: "{colors.on-accent-dark}"
  button-primary-consent:
    backgroundColor: "{colors.green-deep}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "0.5rem 1.125rem"
    height: "2.75rem"
  theme-toggle:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.control}"
    size: "2.5rem"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.7rem 0.875rem"
    height: "3rem"
  nav-link:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
  process-node:
    backgroundColor: "{colors.green-deep}"
    textColor: "{colors.surface}"
    rounded: "{rounded.node}"
    size: "2.25rem"
  process-node-dark:
    backgroundColor: "{colors.green}"
    textColor: "{colors.on-accent-dark}"
    rounded: "{rounded.node}"
    size: "2.25rem"
  tooltip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.control}"
    padding: "0.4rem 0.6rem"
    width: "max-content"
  consent-bar:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink-2}"
    padding: "1.125rem 0"
  status-success:
    backgroundColor: "{colors.green-wash}"
    textColor: "{colors.green-deep}"
    rounded: "{rounded.control}"
    padding: "0.875rem 1rem"
  status-error:
    backgroundColor: "{colors.danger-wash}"
    textColor: "{colors.danger}"
    rounded: "{rounded.control}"
    padding: "0.875rem 1rem"
---

# Design System: Invntio

## Overview

**Creative North Star: "The Release Record"**

Invntio reads like a changelog and a deploy status board, not a pitch. Every surface is a ledger: an ink rule opens a panel, hairlines separate its rows, and a small set of authored marks says what state each row is in. The page is flat. One family of type sets everything, flush left on a 7/5 split grid, and a single committed jump in scale (the display headline) carries the hierarchy.

Density is moderate and the tone is matter-of-fact. Content is laid out as registers and ruled lists (live products, services, what a plan includes, the four engagement stages, contact details) so that a visitor can scan what is real without decoration getting in the way. The brand green is scarce because it is a signal. It is the dot of the wordmark, carried into the type as the tittle on every "i" in a heading and the period that closes a section title, and it is the live state: a product that answered at deploy time, progress along the process rail, the build that is running now.

The record has two printings. By day it is a near-white technical sheet. At night ("technical sheet at night") it is the same sheet as a blueprint: a dark ground with a faint 24px grid, light ink, and the same rules, marks and layout. The theme follows the system preference until the visitor chooses, and the choice is remembered. On paper it is always black ink on white.

The world rejects the centered gradient hero, blurred colour blobs and the icon-card grid. Depth, containers and emphasis come from rules and type, never from boxes or shadows.

**Key Characteristics:**
- A flat ground (near-white by day, near-black blueprint by night) with ink text and hairline rules; no cards and no drop shadows.
- Panels open with a 1px ink top rule; rows are divided by 1px hairlines.
- Schibsted Grotesk only, with a large display step and quiet everything else.
- Three authored SVG state marks (live, included, excluded) as the whole state vocabulary.
- Brand green is the wordmark's dot and the live signal: tittles, closing periods, the live mark, the rail, the build dot.
- Motion is sparse and one-shot: rows print in once, the rail fills once, the hero's closing dot bursts once. All of it is removed under reduced motion.

## Colors

A cool neutral palette with one green that stands for "live" and for the wordmark's dot, a darker green family for actions and interaction, and a second, night set of the same roles.

### Primary
- **Live Green** (green): the brand green, identical in both themes. It is the live mark (a solid dot with a 20% halo), the fill line of the process rail, the `::selection` background, the tittle on every "i" in a display or headline heading, the closing period on section titles and the footer slogan, the hero's closing dot and its sparkle burst, the 6px build dot in the footer, and the 6px dot beside the active entry in the legal table of contents. At night it is also the primary action fill (see below).
- **Release Green** (green-deep): the daytime action colour (buttons, the header CTA, the consent Accept button) and the filled process nodes, with white text. It darkens to **Deep Release Green** (green-deeper) on hover. At night the action role moves to Live Green with **Night Label** (on-accent-dark) text and a brighter **Night Hover Green** (green-hover-dark) on hover, because Release Green sinks into the dark ground.
- **Signal Ink Green** (green-ink, green-ink-dark at night): the interaction tone. It is used for the focus outline, input focus border, caret and accent colour, legal-page links, the plan link in services, and the domain link in a live register row when that row is engaged.
- **Green Wash** (green-wash, green-wash-dark at night): the tint behind the input focus halo and the success message.

### Neutral
- **Ground** (ground / ground-dark): the page background everywhere, including behind every panel, the consent bar and the mobile menu. It is also the per-scheme theme colour and the translucent sticky header fill.
- **Blueprint Grid** (grid-line-dark): 1px lines on a 24px square grid, drawn on the body background in the dark theme only. By day the grid token is transparent.
- **Surface** (surface / surface-dark): used only as the fill of form inputs and quiet buttons, and as the hover fill of a register row.
- **Ink** (ink / ink-dark): headings, primary text, the top rule of every panel, the included mark, service icons, and the fill of the status tooltip.
- **Ink 2** (ink-2 / ink-2-dark): body copy under headings, ledes, nav links, the theme toggle icon, consent text and descriptions.
- **Ink 3** (ink-3 / ink-3-dark): metadata such as captions, notes, the footer slogan and build line, placeholders, the excluded mark, inactive table-of-contents entries and list markers.
- **Hairline** (rule / rule-dark): the 1px rule between rows, and the header border once the page has scrolled.
- **Strong Hairline** (rule-strong / rule-strong-dark): input, quiet-button and theme-toggle borders, and the unfilled process track.
- **Danger** (danger / danger-dark) / **Danger Wash** (danger-wash / danger-wash-dark): invalid field borders and the error message only.

### Named Rules
**The Live Signal Rule.** Live Green is a dot or a line: the wordmark's dot as it recurs in type (tittles, closing periods, the hero sparkle), a live or current state (live mark, build dot, active table-of-contents dot), rail progress, and selection. At night it also fills the primary action. It is never a background wash, a border, an icon colour or running text.

**The Accent Action Rule.** Anything the visitor presses as a primary action takes the accent fill: Release Green with white text by day, Live Green with Night Label text at night. Both pairings pass WCAG AA; never pair Live Green with white text.

**The Ink Icon Rule.** Pictograms, the included mark and list bullets are Ink or Ink 3. Green dots appear only where they mean live or current.

**The Two Printings Rule.** Dark is the same sheet, not a different design. Every role has a night value; layout, rules, marks, type and motion do not change between themes. The blueprint grid is the only thing the night adds.

## Typography

**Display Font:** Schibsted Grotesk Variable (with ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Schibsted Grotesk Variable (same stack)
**Code:** the system monospace (ui-monospace, SF Mono, Menlo), for literal code only

**Character:** This is a newsroom grotesk with a firm, slightly condensed voice. At 700 with tight tracking it reads like a headline. At 400 it reads like a plain record. The variable weight axis carries every level of hierarchy, using 400, 500, 600, 650 and 700.

### Hierarchy
- **Display** (700, 2.5rem to 4.75rem fluid, 1.02, -0.035em): the hero headline, legal-page titles and the 404 title. It is capped at 14 to 18ch so it breaks into a deliberate block.
- **Headline** (650, 1.875rem to 2.75rem fluid, 1.08, -0.025em): section titles in the left column of a section head, each closed by a green period.
- **Title** (600, 1.375rem to 1.75rem fluid): service names, the plans heading and legal section headings.
- **Title Small** (650, 1.125rem, -0.01em): process stage names and live register product names.
- **Lede** (400, 1.125rem, 1.6, Ink 2): section-head descriptions (max 38ch), the hero lede (max 50ch) and about statements (max 54ch).
- **Body** (400, 1rem, 1.6): running text. Legal prose is set at max 68ch in Ink 2.
- **Label** (600 or 500, 0.875rem, sentence case): form labels, plan column heads, nav links (500), footer column heads, captions and metadata (400, Ink 3).
- **Code** (400, 0.8125rem footer / 0.85em inline): the commit hash in the footer build line and inline code in legal prose. Figures in the build line and 404 status are tabular.

### Named Rules
**The One Family Rule.** Schibsted Grotesk sets every word. Hierarchy comes from weight, size and ink level, never from a second typeface. The only exception is literal code (a commit hash, an inline identifier), which is set in the system monospace because it is code, not voice.

**The Committed Scale Rule.** Display is the only oversized step. Everything below Headline stays within 0.875 to 1.75rem, so the jump to the headline reads as a decision. The micro sizes (0.75 to 0.8125rem) are reserved for the status tooltip, register kind tags and code.

**The Sentence Case Rule.** Labels, headings and buttons use sentence case with normal tracking. There are no uppercase tracked labels.

**The Tittle Rule.** Every "i" in a display or headline heading (and the plans title) carries a green tittle. The real glyph is recoloured with a hard two-tone text fill: Live Green above 33.5% of the line box and Ink below, measured to fall in Schibsted Grotesk's gap between dot and stem. The stop is hard, so it reads as a coloured dot, never as gradient text. Section titles also close on a green period. In print the tittle reverts to plain ink. Do not reuse the technique for any other effect.

## Layout

Everything sits in a centred 76rem wrap with fluid side gutters (1rem to 2.5rem). Sections are separated by a large fluid vertical rhythm (5rem to 9rem) and have no bottom padding. The next section's ink rule does the separating.

The grid logic is an asymmetric 7/5 split. The hero (headline and actions on the left, live register on the right), every section head (title left, lede right, bottom-aligned) and the about block all use `7fr 5fr`. Other ruled layouts use proportional fractions of the same 12-column idea: services rows `1.5rem 4fr 5fr 3fr`, plans `5fr 7fr`, contact `4fr 8fr`, legal pages `3fr 8fr` with a sticky table of contents, and the footer `5fr 2fr 3fr 2fr`. Alignment is always flush left. Only the tech stack column right-aligns, at wide widths. The 404 page is a single flush-left column.

Responsive behaviour collapses the splits to a single column. Section heads, services, plans, process and contact collapse at 900px, the hero and legal pages at 1000px, and the header switches to a menu toggle below 860px. The process rail runs vertically on narrow screens and horizontally in four columns from 900px up.

The consent bar is fixed to the bottom edge, full width, with its content in the same wrap. In print the layout drops to one column: 10.5pt/1.5 body, page margins of 18mm 16mm 20mm, headings kept with their next block, and paragraphs, list items and table rows never split.

## Elevation & Depth

The system is flat in both themes. No surface is raised and there are no drop shadows. Depth and grouping come from rules: a 1px ink rule opens a panel and 1px hairlines divide its rows, all drawn directly on the ground. At night the blueprint grid sits on the ground behind everything; it is texture, not a layer. The only box-shadow values in the build are functional. One is the 3px Green Wash focus halo on form fields. The other is a 1px inset outline on process nodes before the rail lights them. The sticky header is ground at 92% opacity with a light backdrop blur, so content passes under it without a visible edge until the page scrolls and a hairline appears. The status tooltip is the one small filled box, an ink chip that rises 4px into place.

### Named Rules
**The Ruled Panel Rule.** There are no cards. A panel is an ink top rule and hairline row dividers on the page ground, with no fill, border box or shadow. Form inputs and quiet buttons are the one surface fill, because a field has to look like a field. The consent bar follows the same rule: ground fill, ink top rule.

**The Flat-Hover Rule.** Hover states change fill, border or ink colour. Nothing lifts or casts a shadow. The only movement on press is the 1px nudge of a button.

**The Paper Rule.** Print is always black ink on white paper, whatever the screen theme. Site chrome (nav, theme and menu buttons, consent bar, legal tabs and table of contents, footer navigation and links) is hidden, the header becomes static with a black rule under the wordmark, and every reveal is shown. Green marks print in Signal Ink Green so they survive on paper.

## Shapes

The world is rectilinear. Rules run the full width of their column. The only rounding is a small 6px corner on things that can be pressed or typed into (buttons, inputs, the theme toggle, the hover fill of a register row, status messages, the status tooltip and the skip link) and full circles for the process nodes, the live mark, the build dot and the table-of-contents dot. Panels, sections and lists have no corners because they have no boxes.

### State marks
The state vocabulary is three authored 16px SVG marks, sized at 1em so they sit on the text line:
- **Live**: a solid Live Green dot (r4) inside a 20% Live Green halo (r7). It is static.
- **Included**: an Ink round-capped check stroked at 1.75.
- **Excluded**: an open Ink 3 ring stroked at 1.5.

Each mark means the same thing on every surface. In the live register the excluded ring also means "did not answer at deploy time", and the 404 page uses it to say the page is not live. Unicode glyphs never stand in for them.

## Components

### Buttons
Buttons are solid, compact and plain.
- **Shape:** gently squared corners (6px), minimum height 3rem, weight 600, sentence case, with an optional trailing 18px stroked arrow.
- **Primary:** the accent fill (Release Green with white text by day, Live Green with Night Label text at night). It takes the hover shade on hover and nudges down 1px on press (180ms, ease-out).
- **Compact primary:** the header CTA uses the same colours at 2.5rem height and label size. The consent bar's buttons are 2.75rem at label size.
- **Quiet:** Surface fill with a Strong Hairline border that turns Ink on hover. It is used for secondary actions such as WhatsApp, Decline and the Spanish link on the 404 page.
- **Focus:** a 2px Signal Ink Green outline, offset 3px.
- **Disabled / sending:** 60% opacity with the progress cursor.

### Inputs / Fields
- **Style:** Surface fill, 1px Strong Hairline border, 6px corners, 3rem minimum height (8rem for textareas). Labels sit above the field at 0.875rem/600, and optional fields carry a regular-weight Ink 3 "(optional)".
- **Hover:** the border darkens to Ink 3.
- **Focus:** the border turns Signal Ink Green and gains a 3px Green Wash halo (this replaces the outline).
- **Error:** after a submit attempt, invalid fields take a Danger border.
- **Select:** native appearance removed, with a 16px stroked chevron in Ink 3 on the right.
- **Status message:** a 6px-rounded wash block, Green Wash with Release Green text for success and Danger Wash with Danger text for errors.

### Navigation
- **Header:** sticky, translucent ground, 4.25rem tall. The wordmark sits left. Nav links are 0.875rem/500 in Ink 2 and turn Ink on hover. The EN/ES switch shows the active language in Ink/600. Then the theme toggle, then a compact primary CTA at the far right. A hairline appears under the header once the page scrolls.
- **Theme toggle:** a 2.5rem square with a Strong Hairline border and 6px corners, no fill, Ink 2 icon; icon and border turn Ink on hover. The icon is one authored SVG that morphs: by day a sun (a disc and eight short rays); at night a masked bite slides in, the disc grows and the rays rotate and fold away into a crescent moon (500ms transform, 300ms fade, ease-out).
- **Mobile (below 860px):** a two-line toggle that rotates into an X opens a full-width dropdown on ground (fade plus 0.5rem slide, 200ms). Its links are 1.125rem Ink rows divided by hairlines; the language switch, theme toggle and CTA share the last row.
- **Legal tabs:** Ink 3 links. The current document is Ink/600 with a 1px Ink underline rule.
- **Legal table of contents:** a sticky Ink 3 list beside the prose from 1000px. It follows the reading position: the section whose heading last crossed 30% of the viewport (or the last one at the page bottom) turns Ink/500, and a 6px Live Green dot scales in beside it (250ms).

### Theme switch
Switching themes spreads the new theme as a circle from the toggle button to the farthest corner (View Transitions, 650ms, ease-out clip-path on the new snapshot). Without View Transitions support or with reduced motion, the theme simply swaps. On first paint the theme is resolved before render from the stored choice, else the system preference.

### Live Register (signature)
This is the ruled "Live now" list in the hero. An ink top rule sits over a head row (the live mark, the title and an Ink 3 caption), followed by one hairline-divided row per product. Each row shows a status mark, the name in Title Small with an Ink 3 kind tag, a one-line description and the domain. The status is decided at build time: the live mark if the product's site answered, the excluded ring if it did not. Engaging the row shows a status tooltip (the HTTP status and check date) after a 350ms delay. On wide hover-capable screens the domain stays Ink 3 until the row is hovered or focused. Then it turns Signal Ink Green, the row takes a Surface fill, and the arrow shifts 2px toward its corner.

### Status Tooltip
An Ink chip with Ground text (0.75rem/500, 1.35 line height, 6px corners, max 17rem) above the mark it describes. It fades in and rises 4px (180ms) and never carries a shadow or arrow.

### Process Rail (signature)
This shows four stages on one rail. Each stage has a 2.25rem circular node filled with the accent and a tabular numeral, a Title Small name and an Ink 2 description. One continuous 1px Strong Hairline track runs from the first node's centre to the last, vertical on small screens and horizontal from 900px. When the rail enters view, a 2px Live Green line fills the whole track once (1400ms, ease-in-out, after 150ms), and the nodes light in sequence from an unlit ground outline to the accent fill (350ms each, 420ms apart). The fill is time-based, not scroll-linked. Without motion the rail is shown filled.

### Scroll Reveal
Section heads, service rows, plans, register rows, the rail, contact details and the form print in once as they enter view: a 14px rise with a fade (700ms, ease-out), staggered 70ms per step within a group. It runs only when the page marks itself as reveal-capable (IntersectionObserver present, motion allowed); a 2.5s safety net removes it if the script fails, and print shows everything.

### Hero Sparkle (signature)
The hero headline ends on a Live Green period. Twelve small four-point Live Green stars burst out of it in a fan (1.6s, ease-out, staggered, two pulses) when the page loads, and replay when the headline is hovered (at most every 1.8s). It is removed entirely under reduced motion. This is the only decorative motion and it belongs only to the hero's closing dot.

### Ruled Lists
Services, plan checklists, about points, contact details, footer columns and legal tables all use the same construction. An ink rule sits above the group and hairlines divide the items. Service rows lead with a 24px stroked Ink pictogram (1.5 stroke). Checklist rows lead with an included or excluded mark. Legal tables use an Ink header rule and hairline rows, and collapse to stacked rows below 700px.

### Footer
An ink top rule, then the wordmark with the slogan in Ink 3 closed by a green period, and ruled link columns in Ink 2. The base row, under a hairline, carries the copyright, the build line and the language link, all in Ink 3: a 6px Live Green dot, the version (v plus the build date) and the short commit in code type, with the full deploy time as its title.

### Consent Bar
A fixed bottom bar on the page ground with a 1px Ink top rule. Ink 2 text at label size (max 62ch) with a link to the privacy page sits left; Decline (quiet) and Accept (primary) sit right. Analytics load only after Accept; the choice is stored and can be reopened from the footer.

### 404 Page
"This page isn't live." The excluded mark with a tabular "404 · Not live" readout in Ink 3, the display title closed by a green period, the explanation in both languages as ledes, and a primary (English home) and quiet (Spanish home) button. The readout is this page's state, stated with the mark; it is not a label pattern for other headings.

## Do's and Don'ts

### Do:
- **Do** open every panel with a 1px Ink top rule and divide its rows with 1px Hairline on the page ground, in both themes.
- **Do** use the accent fill for every primary action: Release Green (#155c40) with white text by day, Live Green with Night Label text at night.
- **Do** express state with the three authored marks (live, included, excluded) and keep their meanings fixed across surfaces.
- **Do** give every role a night value and keep layout, type, rules and marks identical between themes.
- **Do** set the green tittle on every "i" of display and headline headings with the hard 33.5% split, and close section titles with a green period.
- **Do** keep icons and list markers in Ink or Ink 3.
- **Do** set every level in Schibsted Grotesk, and let the fluid display step (700, -0.035em) be the only oversized type.
- **Do** build layouts on the asymmetric 7/5 split, flush left, and collapse to one column at 900 to 1000px.
- **Do** make motion one-shot and remove it under reduced motion: reveal once, fill the rail once, burst the hero dot on load and hover only.
- **Do** print black ink on white with the chrome hidden, whatever the screen theme.

### Don't:
- **Don't** use cards: no filled, bordered or shadowed containers for content. Inputs and quiet buttons are the only surface fills; the tooltip is the only ink chip.
- **Don't** use Live Green as a background wash, border, icon colour or running text, and never put white text on it.
- **Don't** add drop shadows or hover lifts. The only shadows allowed are the input focus halo and the unlit node outline.
- **Don't** use gradient text. The tittle's hard two-tone split is the one sanctioned text fill, and only for the "i" dot.
- **Don't** substitute Unicode glyphs (●, ✓, ○, ↗) or icon-font characters for the authored state marks and arrows.
- **Don't** animate the live mark, loop any animation, or tie motion to scroll position. Hover and focus transitions (150 to 220ms, ease-out) are state feedback, not motion design.
- **Don't** show the blueprint grid by day or add other textures to the ground.
- **Don't** build a centred gradient hero, blurred blob backgrounds or an icon-card grid.
- **Don't** use uppercase tracked labels or small kicker text above headings.
