---
name: Cyber-Minimalist Developer
colors:
  surface: '#0e150e'
  surface-dim: '#0e150e'
  surface-bright: '#333b33'
  surface-container-lowest: '#091009'
  surface-container-low: '#161d16'
  surface-container: '#1a221a'
  surface-container-high: '#242c24'
  surface-container-highest: '#2f372e'
  on-surface: '#dce5d9'
  on-surface-variant: '#bccbb9'
  inverse-surface: '#dce5d9'
  inverse-on-surface: '#2a322a'
  outline: '#869585'
  outline-variant: '#3d4a3d'
  surface-tint: '#4ae176'
  primary: '#4be277'
  on-primary: '#003915'
  primary-container: '#22c55e'
  on-primary-container: '#004b1e'
  inverse-primary: '#006e2f'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b4b4'
  tertiary: '#ffb5ab'
  on-tertiary: '#60130d'
  tertiary-container: '#ff8b7c'
  on-tertiary-container: '#76231b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6bff8f'
  primary-fixed-dim: '#4ae176'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005321'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4a9'
  on-tertiary-fixed: '#410001'
  on-tertiary-fixed-variant: '#7f2a21'
  background: '#0e150e'
  on-background: '#dce5d9'
  surface-variant: '#2f372e'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '450'
    lineHeight: '1.5'
  label-xs:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 128px
---

## Brand & Style

This design system is engineered for the high-end software engineer portfolio, blending technical precision with modern minimalist aesthetics. The brand personality is "The Architect"—disciplined, innovative, and deeply rooted in code culture. 

The visual style utilizes a **Cyber-Minimalist** approach:
- **Terminal Aesthetics:** Subtle references to IDEs and command-line interfaces through monospaced accents and window-control motifs.
- **Grid-Centricity:** Layouts are grounded by a visible or implied underlying grid, utilizing subtle scanlines or dot-matrix overlays to create a "digital canvas" feel.
- **Atmospheric Depth:** A pure dark-mode environment that uses tonal layering and neon-infused accents to guide user attention without overwhelming the content.
- **High-Tech Utility:** Functionality is placed at the forefront, using sharp lines, precise spacing, and intentional use of motion that mimics data processing or terminal typing.

## Colors

The palette is strictly optimized for deep-dark environments to reduce eye strain and emphasize code-like clarity.

- **Primary (Cyber Lime):** Used exclusively for interactive states, primary CTAs, and critical syntax highlighting in terminal blocks. It represents "execution" and "success."
- **Backgrounds:** A pure black (#0A0A0A) base provides the void, while the surface container (#161616) creates logical grouping for cards and sections.
- **Neutrals:** Grays are pulled from the Zinc scale to maintain a cool, technical temperature. Borders are kept subtle to ensure the UI feels expansive rather than boxed-in.
- **Overlays:** Use a 2% opacity white for hover states on dark surfaces to create a "backlit" effect.

## Typography

The typography system relies on the intersection of geometric sans-serifs and high-utility monospaced fonts.

- **Geist Sans:** The primary workhorse for headlines and body text. Its technical, almost-monospaced proportions at large scales fit the developer aesthetic perfectly.
- **JetBrains Mono:** Reserved for "Metadata" and "Action" roles. Use this for tags, code snippets, button labels, and small captions to evoke the feeling of a code editor.
- **Hierarchy:** Maintain high contrast between display sizes and body sizes. Large headings should use tight letter spacing for an impactful, editorial look.

## Layout & Spacing

The layout follows a **Fluid Technical Grid** model.

- **Grid:** Use a 12-column grid for desktop. For "Techy" authenticity, include an optional background layer consisting of a subtle 24px dot-grid or faint vertical lines aligned to the columns.
- **Rhythm:** Spacing is based on a 4px base unit. Section vertical spacing should be generous (80px - 128px) to provide the "professional whitespace" requested.
- **Terminal Blocks:** These components should intentionally break the standard container padding to touch the edges of the screen on mobile, mimicking a full-screen terminal session.
- **Mobile Reflow:** On mobile, 12 columns collapse to 4. Margin density increases to ensure readability.

## Elevation & Depth

This system avoids traditional soft shadows in favor of **Tonal Layering** and **Luminous Outlines**:

- **Tier 1 (Base):** #0A0A0A - The main background.
- **Tier 2 (Surface):** #161616 - Card backgrounds and navigation bars.
- **Tier 3 (Pop-over):** #27272A - Tooltips and dropdowns.
- **Luminescence:** Instead of shadows, use a 1px solid border (#27272A) on cards. On hover, this border can transition to the Primary color or a brighter gray to signify focus.
- **Glassmorphism:** Use sparingly for navigation bars. Apply a `blur(12px)` and a semi-transparent background (#0A0A0A at 80% opacity) to maintain legibility over moving content.

## Shapes

The shape language is "Soft-Industrial."

- **Base Radius:** 4px (Soft). This provides enough curvature to feel modern and premium without losing the rigid, technical feel of an IDE.
- **Interactive Elements:** Buttons and Input fields should strictly follow the 4px radius.
- **Chips/Tags:** Can utilize a higher radius (up to 100px) to differentiate them as discrete "pills" of information against the rectangular card structure.
- **Terminal Controls:** Use perfect circles for the "Window Controls" (Red/Yellow/Green) found in the header of code blocks.

## Components

### Terminal Block
The signature component. A #161616 container with a header bar featuring three colored dots (circles). Text inside must be **JetBrains Mono**. Use the primary color for the command prompt (`>`).

### Project Cards
Low-profile surfaces with a 1px border. Titles in **Geist Bold**. Include a "Status" indicator in the top right using a small primary-colored pulse animation for "Live" projects.

### Skill Chips
Small, monospaced labels with a subtle border and no background fill. On hover, they should fill with a 10% opacity version of the primary color.

### Action Buttons
- **Primary:** Solid background in Primary color, text in black for maximum contrast.
- **Secondary:** Transparent background with a 1px border of the Primary color.
- **Ghost:** Monospaced text with an underline that appears only on hover.

### Input Fields
Darker than the surface (#0D0D0D) with a subtle bottom-border only, mimicking a terminal prompt. Focus state should trigger a full-border highlight in the primary color.