---
name: Election Education System
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
  on-surface-variant: '#3d4943'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6d7a73'
  outline-variant: '#bccac1'
  surface-tint: '#006c4e'
  primary: '#00694c'
  on-primary: '#ffffff'
  primary-container: '#008560'
  on-primary-container: '#f5fff7'
  inverse-primary: '#68dbae'
  secondary: '#086b53'
  on-secondary: '#ffffff'
  secondary-container: '#a0f3d4'
  on-secondary-container: '#167159'
  tertiary: '#4e605b'
  on-tertiary: '#ffffff'
  tertiary-container: '#667873'
  on-tertiary-container: '#f4fffa'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#86f8c9'
  primary-fixed-dim: '#68dbae'
  on-primary-fixed: '#002115'
  on-primary-fixed-variant: '#00513a'
  secondary-fixed: '#a0f3d4'
  secondary-fixed-dim: '#84d6b9'
  on-secondary-fixed: '#002117'
  on-secondary-fixed-variant: '#00513e'
  tertiary-fixed: '#d3e7e0'
  tertiary-fixed-dim: '#b7cbc4'
  on-tertiary-fixed: '#0d1f1b'
  on-tertiary-fixed-variant: '#394a45'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  h1:
    fontFamily: DM Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: DM Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: DM Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The design system is anchored in the principles of civic clarity and institutional transparency. The target audience includes a broad demographic of voters, educators, and students who require high-density information presented with zero friction. The aesthetic movement is **Minimalism** blended with **Corporate Modern**, prioritizing functional elegance over decorative flair. 

The visual language communicates authority and neutrality through a restricted color palette and rigid structural alignment. By eschewing gradients and shadows in favor of flat fills and precise linework, the system evokes the reliability of a high-quality government resource or a prestigious academic institution. Every element is designed to foster trust and ensure that complex procedural information is digestible and accessible.

## Colors

The color strategy utilizes a "Teal-Green" spectrum to represent growth, balance, and stability—departure from traditional red-and-blue political palettes to maintain non-partisan neutrality. 

- **Primary Accent (#1D9E75):** Used for primary actions, active navigation states, and critical information callouts.
- **Dark Accent (#0F6E56):** Reserved for deep-tier navigation, hover states of primary elements, and high-contrast text.
- **Light Fills (#E1F5EE):** Employed for section backgrounds, secondary button states, and "soft" highlights to group related content without creating visual heavy lifting.
- **Neutrals:** A range of slate-grays is used for body text and 1px borders to ensure the white background remains the dominant breathing space.

## Typography

Typography in this design system is optimized for long-form reading and quick data scanning. 

**DM Sans** is utilized for all headings to provide a modern, geometric character that feels approachable yet professional. High-level headers (H1, H2) use tighter letter spacing to maintain visual impact.

**Inter** serves as the workhorse for all body copy, labels, and UI elements. Known for its exceptional legibility at small sizes, it ensures that instructional text is accessible to all users. A generous line-height of 1.6 is applied to body text to prevent "line-skipping" during deep reading of election laws or processes.

## Layout & Spacing

The system employs a **fixed grid** approach for desktop views, centering content within a 1200px container to ensure optimal line lengths for educational content. On mobile, the layout transitions to a fluid model with 16px side margins.

Spacing follows an 8px base grid to maintain mathematical harmony. Information is organized into distinct logical blocks using "Container-Large" (48px) margins to separate major topics, while internal card components use "Medium" (16px) or "Large" (24px) padding to ensure content does not feel cramped. This generous use of whitespace reinforces the "Clean and Minimal" visual style.

## Elevation & Depth

This design system rejects the use of drop shadows and blurs to maintain a "Flat" and "Institutional" feel. Depth is communicated exclusively through **Low-contrast outlines** and **Tonal layering**.

- **Level 0 (Base):** The primary background is pure White (#FFFFFF).
- **Level 1 (Sub-sectioning):** Use the Light Fill (#E1F5EE) for large layout sections or to distinguish the sidebar from the main content.
- **Level 2 (Interactive/Containers):** Components like cards use a 1px solid border (#E2E8F0) to create a "container" effect against the white background.
- **Active State:** When an element is selected or focused, the border color transitions to the Primary Accent (#1D9E75) and may increase to 2px to denote importance without adding a shadow.

## Shapes

The shape language is defined by a consistent **12px border radius** across all primary components. This specific radius strikes a balance between the clinical sharp corners of traditional government documents and the overly friendly, bubbly aesthetic of consumer apps. 

- **Cards & Modals:** 12px radius.
- **Buttons & Inputs:** 8px radius (slightly sharper to denote interactivity).
- **Icons:** Use a 2px stroke weight with slightly rounded caps to match the typography's soften edges.
- **Status Indicators:** Use "Pill" shapes (full radius) for tags/chips to distinguish them from actionable buttons.

## Components

### Buttons
- **Primary:** Solid #1D9E75 background, White text, 8px radius. No shadow.
- **Secondary:** Transparent background, #1D9E75 1px border and text.
- **Ghost:** No border, #1D9E75 text, Light Fill (#E1F5EE) on hover.

### Cards
- **Educational Card:** White background, 1px #E2E8F0 border, 12px border-radius. Padding is 24px.
- **Active Card:** Same as above but with a 2px #1D9E75 border to indicate selection in a quiz or process flow.

### Form Elements
- **Input Fields:** 1px #E2E8F0 border, White background, 8px radius. Focus state uses a 2px #1D9E75 border.
- **Checkboxes/Radios:** Square (rounded 4px) for checkboxes, circular for radios. Uses #1D9E75 for the checked state.

### Specialized Educational Components
- **Step Indicator:** A vertical or horizontal line in #E1F5EE with nodes that turn #1D9E75 upon completion.
- **Info Callout:** A card with a #E1F5EE background and a 4px left-border of #1D9E75, used for highlighting key election dates or legal warnings.
- **Progress Bar:** #E1F5EE track with a solid #1D9E75 fill, 12px height, fully rounded.