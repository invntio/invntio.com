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

Invntio reads like a changelog and a deploy status board, not a pitch. Every surface is a ledger: an ink rule opens a panel, hairlines separate its rows, and a small set of authored marks says what state each row is in. The page is near-white and flat. One family of type sets everything, flush left on a 7/5 split grid, and a single committed jump in scale (the display headline) carries the hierarchy.

Density is moderate and the tone is matter-of-fact. Content is laid out as registers and ruled lists (live products, services, what a plan includes, the four engagement stages, contact details) so that a visitor can scan what is real without decoration getting in the way. The brand green is scarce because it is a signal. When it appears, something is live or something is moving along the process rail.

The world rejects the centered gradient hero, blurred colour blobs and the icon-card grid. Depth, containers and emphasis come from rules and type, never from boxes or shadows.

**Key Characteristics:**
- Near-white ground with ink text and hairline rules; no cards and no drop shadows.
- Panels open with a 1px ink top rule; rows are divided by 1px hairlines.
- Schibsted Grotesk only, with a large display step and quiet everything else.
- Three authored SVG state marks (live, included, excluded) as the whole state vocabulary.
- Brand green is limited to the live mark, the process rail and text selection.
- One authored motion: the process rail fills as it scrolls into view.

## Colors

A cool near-white and ink palette with one green that stands for "live" and a darker green family for actions and interaction.

### Primary
- **Live Green** (green): the brand green. It is used in exactly three places: the live mark (a solid dot with a 20% halo), the fill line of the process rail, and the `::selection` background. It is never used for text, buttons, icons or decoration.
- **Release Green** (green-deep): the primary action colour (buttons, the header CTA) and the filled process nodes. It replaces Live Green on actions because white text on it passes WCAG AA. It darkens to **Deep Release Green** (green-deeper) on hover.
- **Signal Ink Green** (green-ink): the interaction tone. It is used for the focus outline, input focus border, caret and accent colour, legal-page links, and the domain link in a live register row when that row is engaged.
- **Green Wash** (green-wash): the pale tint behind the input focus halo and the success message.

### Neutral
- **Ground** (ground): the page background everywhere, including behind every panel. It is also the theme colour and the translucent sticky header fill.
- **Surface White** (surface): used only as the fill of form inputs and quiet buttons, and as the hover fill of a register row.
- **Ink** (ink): headings, primary text, the top rule of every panel, and service icons.
- **Ink 2** (ink-2): body copy under headings, ledes, nav links and descriptions.
- **Ink 3** (ink-3): metadata such as captions, notes, the location line, placeholders, the excluded mark and list markers.
- **Hairline** (rule): the 1px rule between rows, and the header border once the page has scrolled.
- **Strong Hairline** (rule-strong): input and quiet-button borders, and the unfilled process rail.
- **Danger** (danger) / **Danger Wash** (danger-wash): invalid field borders and the error message only.

### Named Rules
**The Live Signal Rule.** Live Green (#2cac7b) marks only three things: live state, progress along the process rail, and selected text. If it appears anywhere else, it is decoration and must go.

**The AA Action Rule.** Anything the visitor presses is filled with Release Green (green-deep) and has white text. Live Green never carries text.

**The Ink Icon Rule.** Icons and list markers are Ink or Ink 3. Green belongs to marks and the rail, not to pictograms.

## Typography

**Display Font:** Schibsted Grotesk Variable (with ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Schibsted Grotesk Variable (same stack)

**Character:** This is a newsroom grotesk with a firm, slightly condensed voice. At 700 with tight tracking it reads like a headline. At 400 it reads like a plain record. The variable weight axis carries every level of hierarchy, using 400, 500, 600, 650 and 700.

### Hierarchy
- **Display** (700, 2.5rem to 4.75rem fluid, 1.02, -0.035em): the hero headline and legal-page titles only. It is capped at 14 to 18ch so it breaks into a deliberate block.
- **Headline** (650, 1.875rem to 2.75rem fluid, 1.08, -0.025em): section titles in the left column of a section head.
- **Title** (600, 1.375rem to 1.75rem fluid): service names, the plans heading and legal section headings.
- **Title Small** (650, 1.125rem, -0.01em): process stage names and live register product names.
- **Lede** (400, 1.125rem, 1.6, Ink 2): section-head descriptions (max 38ch), the hero lede (max 50ch) and about statements (max 54ch).
- **Body** (400, 1rem, 1.6): running text. Legal prose is set at max 68ch in Ink 2.
- **Label** (600 or 500, 0.875rem, sentence case): form labels, plan column heads, nav links (500), footer column heads, captions and metadata (400, Ink 3).

### Named Rules
**The One Family Rule.** Schibsted Grotesk sets every word. Hierarchy comes from weight, size and ink level, never from a second typeface.

**The Committed Scale Rule.** Display is the only oversized step. Everything below Headline stays within 0.875 to 1.75rem, so the jump to the headline reads as a decision.

**The Sentence Case Rule.** Labels, headings and buttons use sentence case with normal tracking. There are no uppercase tracked labels.

## Layout

Everything sits in a centred 76rem wrap with fluid side gutters (1rem to 2.5rem). Sections are separated by a large fluid vertical rhythm (5rem to 9rem) and have no bottom padding. The next section's ink rule does the separating.

The grid logic is an asymmetric 7/5 split. The hero (headline and actions on the left, live register on the right, bottom-aligned), every section head (title left, lede right, bottom-aligned) and the about block all use `7fr 5fr`. Other ruled layouts use proportional fractions of the same 12-column idea: services rows `1.5rem 4fr 5fr 3fr`, plans `5fr 7fr`, contact `4fr 8fr`, legal pages `3fr 8fr` with a sticky table of contents, and the footer `5fr 2fr 3fr 2fr`. Alignment is always flush left. Only the tech stack column right-aligns, at wide widths.

Responsive behaviour collapses the splits to a single column. Section heads, services, plans, process and contact collapse at 900px, the hero and legal pages at 1000px, and the header switches to a menu toggle below 860px. The process rail runs vertically on narrow screens and horizontally in four columns from 900px up.

## Elevation & Depth

The system is flat. No surface is raised and there are no drop shadows. Depth and grouping come from rules: a 1px ink rule opens a panel and 1px hairlines divide its rows, all drawn directly on the ground. The only box-shadow values in the build are functional. One is the 3px Green Wash focus halo on form fields. The other is a 1px inset outline on process nodes in their unlit keyframe. The sticky header is ground at 92% opacity with a light backdrop blur, so content passes under it without a visible edge until the page scrolls and a hairline appears.

### Named Rules
**The Ruled Panel Rule.** There are no cards. A panel is an ink top rule and hairline row dividers on the page ground, with no fill, border box or shadow. Form inputs are the one white fill, because a field has to look like a field.

**The Flat-Hover Rule.** Hover states change fill, border or ink colour. Nothing lifts or casts a shadow. The only movement on press is the 1px nudge of a button.

## Shapes

The world is rectilinear. Rules run the full width of their column. The only rounding is a small 6px corner on things that can be pressed or typed into (buttons, inputs, the hover fill of a register row, status messages and the skip link) and full circles for the process nodes and the live mark. Panels, sections and lists have no corners because they have no boxes.

### State marks
The state vocabulary is three authored 16px SVG marks, sized at 1em so they sit on the text line:
- **Live**: a solid Live Green dot (r4) inside a 20% Live Green halo (r7). It is static.
- **Included**: a round-capped check stroked at 1.75.
- **Excluded**: an open Ink 3 ring stroked at 1.5.

Each mark means the same thing on every surface. Unicode glyphs never stand in for them.

## Components

### Buttons
Buttons are solid, compact and plain.
- **Shape:** gently squared corners (6px), minimum height 3rem, weight 600, sentence case, with an optional trailing 18px stroked arrow.
- **Primary:** Release Green fill with white text. It darkens to Deep Release Green on hover and nudges down 1px on press (180ms, ease-out).
- **Compact primary:** the header CTA uses the same colours at 2.5rem height and label size.
- **Quiet:** Surface White fill with a Strong Hairline border that turns Ink on hover. It is used for secondary actions such as WhatsApp.
- **Focus:** a 2px Signal Ink Green outline, offset 3px.
- **Disabled / sending:** 60% opacity with the progress cursor.

### Inputs / Fields
- **Style:** Surface White fill, 1px Strong Hairline border, 6px corners, 3rem minimum height (8rem for textareas). Labels sit above the field at 0.875rem/600, and optional fields carry a regular-weight Ink 3 "(optional)".
- **Hover:** the border darkens to Ink 3.
- **Focus:** the border turns Signal Ink Green and gains a 3px Green Wash halo (this replaces the outline).
- **Error:** after a submit attempt, invalid fields take a Danger border.
- **Select:** native appearance removed, with a 16px stroked chevron in Ink 3 on the right.
- **Status message:** a 6px-rounded wash block, Green Wash with Release Green text for success and Danger Wash with Danger text for errors.

### Navigation
- **Header:** sticky, translucent ground, 4.25rem tall. The wordmark sits left. Nav links are 0.875rem/500 in Ink 2 and turn Ink on hover. The EN/ES switch shows the active language in Ink/600. A compact primary CTA sits at the far right. A hairline appears under the header once the page scrolls.
- **Mobile (below 860px):** a two-line toggle that rotates into an X opens a full-width dropdown on ground (fade plus 0.5rem slide, 200ms). Its links are 1.125rem Ink rows divided by hairlines.
- **Legal tabs:** Ink 3 links. The current document is Ink/600 with a 1px Ink underline rule.

### Live Register (signature)
This is the ruled "Live now" list in the hero. An ink top rule sits over a head row (the live mark, the title and an Ink 3 caption), followed by one hairline-divided row per live product. Each row shows the live mark, the name in Title Small with an Ink 3 kind tag, a one-line description and the domain. On wide hover-capable screens the domain stays Ink 3 until the row is hovered or focused. Then it turns Signal Ink Green, the row takes a Surface White fill, and the arrow shifts 2px toward its corner.

### Process Rail (signature)
This shows four stages on one rail. Each stage has a 2.25rem Release Green circular node with a tabular white numeral, a Title Small name and an Ink 2 description. A 1px Strong Hairline links consecutive nodes. On top of it, a 2px Live Green line fills stage by stage as the rail scrolls through view, and each node lights from an unlit outline to Release Green just before its segment. This is the only authored motion in the system. It uses a scroll-driven `view()` timeline. Without support, or with reduced motion, the rail is shown already filled. The rail is vertical on small screens and horizontal from 900px.

### Ruled Lists
Services, plan checklists, about points, contact details, footer columns and legal tables all use the same construction. An ink rule sits above the group and hairlines divide the items. Service rows lead with a 24px stroked Ink pictogram (1.5 stroke). Checklist rows lead with an included or excluded mark. Legal tables use an Ink header rule and hairline rows, and collapse to stacked rows below 700px.

## Do's and Don'ts

### Do:
- **Do** open every panel with a 1px Ink top rule and divide its rows with 1px Hairline (#e2e4e0) on the page ground.
- **Do** use Release Green (#155c40) with white text for every primary action.
- **Do** express state with the three authored marks (live, included, excluded) and keep their meanings fixed across surfaces.
- **Do** keep icons and list markers in Ink or Ink 3.
- **Do** set every level in Schibsted Grotesk, and let the fluid display step (700, -0.035em) be the only oversized type.
- **Do** build layouts on the asymmetric 7/5 split, flush left, and collapse to one column at 900 to 1000px.
- **Do** keep the live mark static and let the process rail fill be the one authored motion, shown filled under reduced motion.

### Don't:
- **Don't** use cards: no filled, bordered or shadowed containers for content. Inputs and quiet buttons are the only white fills.
- **Don't** use Live Green (#2cac7b) for text, buttons, icons, backgrounds or decoration. It is reserved for the live mark, the process rail and selection.
- **Don't** add drop shadows or hover lifts. The only shadows allowed are the input focus halo and the unlit node outline.
- **Don't** substitute Unicode glyphs (●, ✓, ○) or icon-font characters for the authored state marks.
- **Don't** animate the live mark or add entrance animations. Hover and focus transitions (150 to 220ms, ease-out) are state feedback, not motion design.
- **Don't** build a centred gradient hero, blurred blob backgrounds or an icon-card grid.
- **Don't** use uppercase tracked labels or small kicker text above headings.
