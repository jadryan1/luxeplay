# LuxePlay — Agent Prompt V3

Execute all changes below completely. Do not ask for confirmation, do not open a browser, do not take screenshots.

---

## 1. CTA BUTTON HOVER — VISIBILITY FIX

Find the "Get a Free Estimate" and "Start Planning" CTA buttons located above the footer. When hovered, they currently turn fully pink and become invisible against the pink background.

Fix the hover state so the button remains visible on hover:
- Use a dark fill on hover (the site's dark charcoal or near-black)
- Set hover text color to white
- Apply to both buttons, and any other CTA button that shares this same hover behavior sitewide

---

## 2. REMOVE ALL SAVINGS LANGUAGE FROM COPY

Search all `.tsx`, `.jsx`, `.ts`, `.js`, `.mdx`, and `.json` files for any copy that mentions discounts, savings, or promotional pricing. This includes phrases like:
- "Save $100"
- "Save $X"
- "save this"
- "save that"
- Any similar savings or discount framing

Remove these lines entirely. Do not replace with anything. This is a luxury product — price is not a selling point.

---

## 3. PINK TEXT ON LIGHT BACKGROUNDS — GLOBAL FIX

Find every instance of pink-colored text rendered on any light background including white, cream, taupe, or off-white. Pink text on these backgrounds fails contrast and must be changed.

Replace with the site's existing dark charcoal body text color. Apply sitewide. Do not change pink text that appears on dark or pink backgrounds where it already has sufficient contrast.

---

## 4. PACKAGES NAV ITEM — CLICK TO PAGE

The "PACKAGES" nav item currently only opens a dropdown and does not navigate anywhere when clicked directly. Fix this so that:
- Clicking the word "PACKAGES" navigates to the main /packages page
- The dropdown still appears on hover as before
- Both behaviors coexist — click navigates, hover reveals dropdown
- Test that this does not break any existing dropdown links

---

## 5. REVIEW CAROUSEL — SQUARE EDGES

Find the review/testimonial carousel card(s). Set `border-radius: 0` on the card container. Square edges only. Do not touch the carousel arrows or pagination dots.

---

## 6. "COMBO WITH SOFT PLAY" SECTION — FIXES

Find the section referencing "Combo with Soft Play / Add a bounce house to any soft play package for just $650".

Two fixes:
- The background box behind any text or label in this section must have `border-radius: 0` — square edges
- Any pink text in this section that appears on a taupe or light background must be changed to the site's dark charcoal color for readability

Also update the copy in this section to read:
"Add a bounce house to any soft play package for just $650"

---

## 7. CONTACT SECTION SUBTEXT — COLOR FIX

Find the text: "Let's design the perfect play experience for your event. Inquiries answered within 24 hours."

Change its color to a chocolate brown or the site's darkest available warm neutral so it is clearly legible. Do not change font size or weight.

---

## 8. NAVBAR DROPDOWN HOVER STATE

When hovering over navbar dropdown items, the current state shows a taupe background with pink text. Change the hover state to:
- Background: brand pink
- Text: dark charcoal or black (retain existing non-hover text color)

Apply to all navbar dropdown items consistently.

---

## 9. EYEBROW LABELS — INCREASE FONT WEIGHT

Find every eyebrow label across the entire site. Eyebrow labels are the small all-caps tracking labels that appear above section headings (e.g. "RECENT EVENTS", "CLIENT LOVE", "OUR STORY", "SOFT PLAY PACKAGES", etc.).

Increase the `font-weight` on all of them by approximately 35%. If they are currently `300`, move to `400`. If `400`, move to `500`. If `500`, move to `600`. Apply sitewide to all eyebrow instances.

---

## 10. RECENT EVENTS — IMAGE CARD SQUARE EDGES

Find the image cards in the "Styled to Perfection" / Recent Events gallery section. Set `border-radius: 0` on every image card and its image element. Square edges only.

---

## 11. "FLAWLESS FOUNDATION" BULLET POINTS

Find the section containing this list (currently under "A Flawless Foundation" or "Pristine Play"):

- Immaculate, fresh materials
- Showroom-quality presentation
- Boutique-level care for every event
- Thoughtfully maintained inventory
- Bespoke options for high-profile events

Add a tasteful bullet character before each line. Use a small square (`▪`) or a thin dash (`–`) — whichever fits the existing aesthetic better. Do not use emoji or decorative icons. Keep the existing font, size, and color.

---

## 12. REVIEWS SECTION — REDUCE VERTICAL PADDING

The reviews/testimonials section has excessive whitespace above and below the carousel. Reduce the `padding-top` and `padding-bottom` on the section wrapper so the section feels tight and anchored. Aim for roughly half the current vertical padding.

---

## 13. "THE BEGINNING" SECTION — ADD FOUNDER IMAGE

Find the "The Beginning" section with the following copy:

> Luxe Play NY was born from a desire for something better. As a mother planning celebrated moments in the tri-state area, I searched for play experiences that matched the elegance of our home...

Add the image at this path to the LEFT of the text block:
`/public/assets/images/founders_on_desk.jpg`

Layout:
- Two-column layout on desktop: image left, text right
- Equal column widths or slight image dominance (55/45)
- Image must be `object-fit: cover`, no distortion
- On mobile: image stacks above text, full width, `height: auto`
- No border, no border-radius, no shadow on the image
- Do not change any copy in this section

---

## 14. ABOUT US — REMOVE DROPDOWN

The "ABOUT US" nav item currently has a dropdown. Remove the dropdown entirely. "ABOUT US" should be a single direct link to the About page. No sub-items, no chevron, no hover dropdown.

---

## 15. CONTACT PAGE — READABILITY + LAYOUT

Three fixes on the contact page:

**Fix A — Text contrast:**
Grey text on a white background is hard to read. Find all grey or light-colored text on the contact page and change it to the site's dark body text color.

**Fix B — Font weight:**
All text on the contact page (labels, input placeholders, body copy, headings) should have its `font-weight` increased by approximately 35% for better visibility. Apply the same rounding logic as item 9 above.

**Fix C — Reduce whitespace:**
The contact page has excessive horizontal whitespace. Wrap the main contact form/content section in a centered container with a `max-width` of `720px` and `margin: 0 auto` with adequate horizontal padding (minimum `24px`). This constrains the content to a readable column and eliminates the empty side space.

---

## GLOBAL CONSTRAINTS

- Do not change any layout, fonts, color scheme, or spacing unless explicitly instructed above
- Do not modify images, decorative shapes, or any circular UI elements that are not pills or buttons
- Apply every fix sitewide where instructed, or page-specific where noted
- Do not ask for approval at any step
- Do not open a browser or take screenshots
