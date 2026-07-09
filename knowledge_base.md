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
- **CSS Properties Syntax**: Recognizing valid syntax for backgrounds (avoiding `solid` inside background shorthand values) and local fonts (wrapping paths with spaces in quotes `url("...")` rather than using backslash escapes).
- **Class Selector Case Sensitivity**: Debugging mismatches between HTML classes and CSS class selectors (e.g. `.Heading` matching `class="Heading"` but not `.heading`).
- **Flexbox Mastery (Flexbox Froggy Completed)**: Full understanding of flex layouts, including alignment (`justify-content`, `align-items`, `align-self`, `align-content`), directions and wrapping (`flex-direction`, `flex-wrap`, `flex-flow`), and item ordering (`order`).

### Task 2: Reload Designs Landing Page (Completed)
**Concepts Mastered:**
- **Relative vs Absolute Positioning**: Learning how `position: relative` on a parent (like `#hero-section`) anchors its absolutely positioned children (`position: absolute;`).
- **Margin Collapse**: Understanding how a child element's `margin-top` can collapse with its parent, pushing the entire parent container down, and how to avoid it.
- **Centering Absolutely Positioned Elements**: Mastering the `left: 50%; transform: translateX(-50%);` technique for perfect horizontal centering.
- **Advanced Flexbox Alignment**: Deepening flex knowledge with `justify-content` (Main Axis) and `align-items` (Cross Axis), and understanding when to use each based on container height.
- **Viewport Units vs Percentages**: Learning the critical difference between `100vh` (100% of the screen height) and `100%` (100% of the parent container's height).
- **Text Styling & Inline Elements**: Using `<span>` tags to isolate and style specific words in a sentence without breaking the layout, and using `-webkit-text-stroke` to create hollow text effects.

## Next Steps / Goals
- **Version Control:** Learn how to initialize a Git repository from scratch, add/commit files, link to a remote GitHub repository, and push code manually.
- Move on to Task 3!

---
*Note to Agent: Always read this file before assisting the user to understand their current skill level, and append new concepts/progress here after each major learning milestone.*
*CRITICAL RULE: Only add concepts to the knowledge base if the USER actually learned and executed them. Do NOT add tasks, setups, or deployments that were completely done by the AI agent on the user's behalf.*
*PROJECT DEPLOYMENT RULE: When adding a new assignment/project to the GitHub repository and updating the Next.js Dashboard (`projects.json`), always ensure that all HTML image and font paths in the project use RELATIVE paths (e.g., `./Images/img.png` instead of `/Images/img.png` or `/Project_Name/Images/...`). This is strictly required so that Vercel can serve the nested static assets properly without breaking the image links.*

### Task 3: A2 & A3 Multiple Landing Pages & Layouts (Completed)
**Concepts Mastered:**
- **Complex Layouts with Absolute Positioning**: Built multiple diverse landing pages (Gunaforycter Restaurant, Insect Landing Page) utilizing precise absolute positioning for grid-like effects and overlapping elements.
- **Dark Mode & Themed Designs**: Created heavily themed layouts (Squid Games, Shinsei Village) focusing on dark UI principles and thematic typography.
- **Grid Layout Patterns**: Explored structured grid-like page structures for artwork display and content organization.
- **Project Structure & Relative Asset Linking**: Mastered keeping font and image paths relative (e.g., ./assets/img.png) within project folders so they can seamlessly integrate and be served from static asset folders (Next.js /public/assignments/...) for Vercel deployment.
