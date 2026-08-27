---
name: Industrial Excellence
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#404945'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#707975'
  outline-variant: '#bfc9c4'
  surface-tint: '#2e6858'
  primary: '#003529'
  on-primary: '#ffffff'
  primary-container: '#0b4d3e'
  on-primary-container: '#82bda9'
  inverse-primary: '#97d3be'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#630007'
  on-tertiary: '#ffffff'
  tertiary-container: '#8d000e'
  on-tertiary-container: '#ff9289'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b2efda'
  primary-fixed-dim: '#97d3be'
  on-primary-fixed: '#002018'
  on-primary-fixed-variant: '#105041'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb3ac'
  on-tertiary-fixed: '#410003'
  on-tertiary-fixed-variant: '#930010'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The design system is engineered to reflect the precision and reliability of high-end steel manufacturing. The aesthetic is **Corporate Modern** with a slight **Industrial Minimalist** edge. It targets B2B stakeholders, architects, and commercial kitchen planners who value structural integrity and professional order.

The visual narrative relies on a sense of "engineered clarity"—utilizing high-quality imagery of brushed stainless steel, clean geometric arrangements, and a focus on durability. The interface should feel as sturdy and well-crafted as the steel products themselves.

## Colors

The palette is anchored by **Deep Industrial Green**, a color that evokes stability and growth while distinguishing the brand from standard blue-heavy corporate competitors. 

- **Primary (#0B4D3E):** Used for structural navigation, primary actions, and brand presence.
- **Secondary (#FFFFFF):** The primary canvas color, ensuring a premium, clean feel.
- **Accent (#D32F2F):** Reserved strictly for alerts, live indicators, or high-priority CTAs to maintain professional restraint.
- **Neutral/Text (#1A1A1A):** Used for high-contrast typography and iconography.
- **Surface (#F5F7F7):** Applied to section backgrounds and input fields to provide subtle depth without clutter.

## Typography

This design system utilizes **Plus Jakarta Sans** exclusively to maintain a cohesive, modern, and highly legible presence. 

Headlines are bold and tight to mimic the authoritative nature of engineering blueprints. Body text uses generous line-height for readability in technical contexts. Labels and small metadata should use the `label-md` style with slight tracking (letter spacing) to improve scanning speed on technical data tables or spec sheets.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop (12 columns, 1200px max-width) to ensure content remains centered and prestigious. 

- **Desktop:** 24px gutters with 80px side margins.
- **Mobile:** 16px gutters with 20px side margins.
- **Vertical Rhythm:** Utilize a strict 8px base unit. Sections should be separated by large vertical gaps (120px) to allow the "premium" nature of the brand to breathe.

## Elevation & Depth

Depth is conveyed through a combination of **Tonal Layers** and **Ambient Shadows**. 

1. **Surface 0 (Background):** Pure White (#FFFFFF).
2. **Surface 1 (Containers):** Light Neutral Gray (#F5F7F7) with no shadow.
3. **Elevated (Cards):** White background with a 1px border (#E0E0E0) and a soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.05)).
4. **Active (Interaction):** When a user interacts with a card, the shadow should slightly deepen to (0px 8px 30px rgba(0,0,0,0.08)) to indicate tangibility.

## Shapes

The shape language balances industrial precision with modern accessibility. A standard **12px (0.75rem)** radius is applied to all primary containers, cards, and input fields. 

- **Buttons:** 12px rounded corners.
- **Product Cards:** 12px rounded corners with overflow hidden for images.
- **Badges/Chips:** Fully rounded (pill-shaped) to contrast against the structured grid.

## Components

### Navigation
The header uses a white background with a 1px bottom border. The logo is left-aligned, navigation links use `label-md` weight in the center, and the "Get a Quote" button is a primary industrial green button on the right.

### Buttons
- **Primary:** Background #0B4D3E, Text #FFFFFF. No border.
- **Secondary:** Transparent background, 1px Border #0B4D3E, Text #0B4D3E.
- **Action:** Text-only with an arrow icon for "Read More" links.

### Product Cards
Cards feature a 1:1 aspect ratio image at the top, followed by a 24px padding area containing a `headline-sm` title and a short `body-md` description. The entire card uses the 12px radius and a soft shadow.

### Inputs
Text fields use the #F5F7F7 surface color with a 1px light gray border. On focus, the border transitions to #0B4D3E.

### Iconography
Icons should be thin-line (1.5pt stroke), geometric, and strictly monolinear to match the engineering-focused aesthetic. Avoid filled icons unless used for active states.