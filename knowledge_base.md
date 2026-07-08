# My Learning Knowledge Base & Progress Tracker

## Current Progress & Concepts Learned
### Task 1: Pixel-Perfect CSS Card Layout (Completed)
**Concepts Mastered:**
- **Two-Column Layouts**: Using percentage widths (`60%` / `40%`) and `position: absolute` to create split-screen designs.
- **CSS Box Model**: Applying `border: 20px solid white;` and `border-radius` to create a seamless card effect across two distinct `div` containers.
- **Absolute Positioning & Centering**: Using `left`, `top`, and advanced techniques like `transform: translate(-50%, -50%)` to perfectly center an overlapping image (Pikachu) on a coordinate boundary.
- **Custom Typography**: Importing local fonts (`.otf` files) using `@font-face` and applying different weights (Regular, Bold, Black).
- **Typography Detailing**: Understanding how `letter-spacing` creates premium subtitles (e.g., "POKEMON GEN 1") and how `line-height` creates breathing room in paragraphs.
- **Creative Workarounds**: Building pagination dots using standard `div` blocks and `border-radius: 50%` without relying on Flexbox. Creating custom dashes using HTML entities (`&mdash;&mdash;`).

### CSS Troubleshooting & Flexbox Basics (Completed)
**Concepts Mastered:**
- **Live Server Selector Quirks**: Understanding how injected `<script>` tags affect `:nth-last-child()` selectors, and how to use `:nth-last-of-type()` or wrapper containers to resolve this.
- **ID Resolution**: Debugging mismatches between HTML IDs (`id="class1"`) and CSS selectors (`#child1`).
- **CSS Properties Syntax**: Recognizing valid syntax for backgrounds (avoiding `solid` inside background shorthand values).
- **Flexbox Mastery (Flexbox Froggy Completed)**: Full understanding of flex layouts, including alignment (`justify-content`, `align-items`, `align-self`, `align-content`), directions and wrapping (`flex-direction`, `flex-wrap`, `flex-flow`), and item ordering (`order`).

### Mobile Responsiveness & UI Optimization
**Concepts Mastered:**
- **Mobile Responsiveness & UI Optimization**: Mastered media queries (`@media`), manipulating viewport widths (`vw`), adjusting absolute positioning per breakpoint, and understanding how `100dvh` handles dynamic mobile browser address bars better than `100vh`.
- **Advanced Animations & Performance**: Learned how to implement cinematic page transitions and smooth element load-ins using `framer-motion` (`motion.div`, `motion.img`). Discovered how CSS `blur()` filters can severely impact mobile GPU performance and how to avoid loading-glitches for large background images by applying initial opacity fades.
- **Next.js App Router Architecture**: Successfully integrated custom Favicons (`.ico`, `.png`) and Web Manifests using the Next.js 13+ `layout.tsx` Metadata API, ensuring cross-platform icon support.
- **Media Queries**: Using `@media (max-width: 768px)` to apply specific styles (like scaling down absolute positioned images and adjusting `left`/`top` offsets) for mobile screens in standard CSS.
- **Tailwind Responsive Design**: Utilizing Tailwind's responsive prefixes (`sm:`, `md:`) to adjust flex directions (`flex-col sm:flex-row`), padding (`px-6 md:px-10`), and text overflow handling (`break-all`, `truncate`) to ensure components like headers and contact links scale gracefully on small screens.

## Next Steps / Goals
- **Version Control:** Learn how to initialize a Git repository from scratch, add/commit files, link to a remote GitHub repository, and push code manually.
- **Advanced Flexbox:** Dive deeper into Flexbox properties (flex-direction, flex-wrap, flex-grow, flex-shrink, and gap) to create more responsive designs.
- Move on to Task 2!

---
*Note to Agent: Always read this file before assisting the user to understand their current skill level, and append new concepts/progress here after each major learning milestone.*
