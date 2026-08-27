---
name: Industrial Excellence
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3e4a3e'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6e7a6d'
  outline-variant: '#bdcabb'
  surface-tint: '#006d32'
  primary: '#006b31'
  on-primary: '#ffffff'
  primary-container: '#00873f'
  on-primary-container: '#f7fff3'
  inverse-primary: '#6cdd88'
  secondary: '#5e5d66'
  on-secondary: '#ffffff'
  secondary-container: '#e4e1eb'
  on-secondary-container: '#64636c'
  tertiary: '#595d5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#717574'
  on-tertiary-container: '#fafdfb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#89faa2'
  primary-fixed-dim: '#6cdd88'
  on-primary-fixed: '#00210b'
  on-primary-fixed-variant: '#005224'
  secondary-fixed: '#e4e1eb'
  secondary-fixed-dim: '#c7c5ce'
  on-secondary-fixed: '#1b1b22'
  on-secondary-fixed-variant: '#46464e'
  tertiary-fixed: '#e0e3e1'
  tertiary-fixed-dim: '#c4c7c5'
  on-tertiary-fixed: '#181c1b'
  on-tertiary-fixed-variant: '#434846'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system embodies a philosophy of "Precision Engineering." It is tailored for high-stakes industrial environments, logistics, and enterprise resource planning where clarity, speed of cognition, and perceived stability are paramount. 

The aesthetic is **Corporate Modern with a Technical Edge**. It utilizes a structured, systematic approach to white space and a rigid adherence to alignment, evoking the feeling of a well-oiled machine. It avoids unnecessary decoration, focusing instead on functional aesthetics—sharp typography, deliberate color application, and a sense of architectural balance that inspires trust in data integrity.

## Colors
The palette is anchored by a vibrant, professional green (`#139348`), symbolizing operational health, growth, and "go-state" efficiency. This primary color is used for key actions and critical status indicators.

- **Primary:** `#139348` (Vibrant Green) - Used for primary buttons, active states, and success indicators.
- **Secondary:** `#27272E` (Deep Charcoal) - Used for headers, sidebars, and strong text to provide grounding contrast.
- **Tertiary:** `#F4F7F5` (Cool Ash) - A subtle, tinted neutral for large background areas and container grouping.
- **Neutral:** A refined scale of slate grays is used for borders, secondary text, and iconography to maintain a professional, utilitarian atmosphere.

## Typography
The typography strategy prioritizes legibility and technical precision. 

- **Headlines:** Use **Hanken Grotesk**. Its contemporary, sharp geometry feels engineered and forward-thinking.
- **Body:** Use **Inter**. This provides a highly legible, neutral base for dense data and long-form instructional text.
- **Technical Labels:** Use **JetBrains Mono**. This monospaced font is reserved for data values, serial numbers, timestamps, and status tags, reinforcing the industrial, "built" nature of the interface.

All type scales follow a strict 4px baseline grid to ensure vertical rhythm.

## Layout & Spacing
The layout uses a **fixed-fluid hybrid grid**. On desktop, content is contained within a 12-column grid with a maximum width of 1440px to prevent excessive eye-travel.

- **Rhythm:** An 8px linear scale governs all padding and margins.
- **Desktop:** 12 columns, 24px gutters, 40px outer margins.
- **Tablet:** 8 columns, 16px gutters, 24px outer margins.
- **Mobile:** 4 columns, 16px gutters, 16px outer margins.

Whitespace is used strategically to group related industrial processes. Dense data views (tables/grids) may compress to a 4px "Compact" rhythm, while marketing or onboarding flows use the 8px "Standard" rhythm.

## Elevation & Depth
This design system avoids heavy shadows in favor of **Tonal Layers and Low-Contrast Outlines**. 

- **Surface Levels:** Depth is communicated by shifting background values. The base floor is Tertiary (`#F4F7F5`). Components like cards and panels sit on top using a pure White (`#FFFFFF`) surface.
- **Outlines:** Instead of shadows, use 1px solid borders in a light neutral gray (`#E2E8F0`) to define object boundaries.
- **Active Elevation:** Only use shadows for "floating" elements like modals or dropdowns. These shadows should be extremely diffused: `0px 10px 30px rgba(0, 0, 0, 0.05)`.
- **Interaction:** Hover states are indicated by a subtle darkening of the surface or a 2px Primary Green left-edge accent.

## Shapes
In line with the "Industrial Excellence" theme, shapes are disciplined and semi-geometric. 

- **Standard Elements:** Use "Soft" (4px / 0.25rem) corner radii for buttons, inputs, and cards. This provides a professional look that is approachable but remains structured.
- **Status Indicators:** Chips and tags use the same 4px radius; avoid full pill shapes to maintain the architectural, rectangular grid-feel.
- **Iconography:** Icons should be stroke-based (2px weight) with slight rounding to match the UI elements.

## Components
- **Buttons:** Primary buttons use a solid Primary Green (`#139348`) background with white text. Secondary buttons use a Deep Charcoal outline. All buttons have a height of 40px or 48px to ensure a substantial touch/click target.
- **Input Fields:** Use a 1px neutral border with a white background. On focus, the border transitions to 2px Primary Green. Labels always use the `label-md` JetBrains Mono style for a technical feel.
- **Cards:** Cards are white with a 1px border. No shadows. Use a 4px Primary Green top-border to indicate "Active" or "Critical" items.
- **Status Chips:** Use low-saturation backgrounds of the primary color (e.g., 10% opacity) with high-saturation text to denote status without overwhelming the user.
- **Data Tables:** High-density rows with 1px horizontal separators. Header cells use Secondary Deep Charcoal text with the `label-sm` font for maximum clarity.
- **Progress Indicators:** Use the Primary Green for all "Work in Progress" and "Complete" states to reinforce the brand identity.