# PROMPTS


This file records the prompts used during the development of the Snuffers prototype, in the order in which they were used. Each entry includes the prompt, what came back, and what changed next and why.

---

## Prompt 1 — Google Stitch: Initial Design

### Prompt

GOAL:

Design the front end of a sophisticated, modern dog-fashion shopping experience called "Snuffers" for dog owners who want their dogs to look stylish while remaining comfortable, with genuinely inclusive sizing for dogs of different breeds, shapes, and sizes.

[PASTE THE EXACT PROMPT 1 TEXT HERE]

### What came back

Google Stitch generated the initial Snuffers concept with a sophisticated editorial dog-fashion direction, two main screens, inclusive sizing, a product catalogue, and a product detail experience.

### What changed next and why

The initial design was visually strong but introduced more luxury/atelier-style content and extra marketplace-style elements. I refined the concept into a more focused two-screen journey centred on the core user job.

---

## Prompt 2 — Google Stitch: Revision

### Prompt

Refine this existing Snuffers design while preserving the current visual identity, typography, photography, colour palette, editorial fashion aesthetic, product-card styling, and overall sophistication.

Do NOT redesign the website from scratch.

Preserve the core user job:

A dog owner opens Snuffers to find a stylish outfit that will actually fit their dog.

Keep the experience focused on two screens:

1. Discover / Shop
2. Product Detail

Keep clothing as the primary category, with Shoes and Treats as secondary categories.

Remove unnecessary marketplace-style content, including accessory/harness sections, "Paired Atelier Pieces", and extra bespoke/atelier storytelling.

Keep custom outfits only as a small promotional section from S$150. Do not create a custom-order workflow.

Remove the search feature completely.

Keep the core interactions:
- Chest-girth input
- Category filtering
- Budget filtering
- Product catalogue
- Product cards
- Inclusive sizing
- Product detail
- Size matching
- Size-chart highlighting
- Colour selection
- Size selection
- Add to Bag
- Favourite
- Back navigation

Keep the sophisticated editorial photography and overall polished visual identity.

Do not add new screens or new features.

### What came back

The refined Stitch design preserved the editorial visual identity while focusing the experience on the chest-girth-to-product-to-bag journey and reducing unnecessary sections and workflows.

### What changed next and why

The two selected screens were exported from Google Stitch to Google AI Studio so that the design could be turned into a functional frontend prototype.

---

## Prompt 3 — Google AI Studio: Initial Build

### Prompt

Build me an app with screens that look like this. You can hotlink images from the html

### What came back

Google AI Studio generated an initial functional version of the app, but it changed parts of the layout and visual hierarchy and used generic or unrelated imagery instead of maintaining the intended product-focused design.

### What changed next and why

I kept the existing AI Studio project instead of rebuilding it from scratch and issued a focused correction prompt to bring the catalogue, product scope, sizing, and interaction requirements back in line with the intended Snuffers concept.

---

## Prompt 4 — Google AI Studio: Catalogue and Scope Refinement

### Prompt

Make a focused refinement of the existing Snuffers app.

IMPORTANT: Do NOT redesign, restyle, or rebuild the interface. Preserve the current visual design, layout, typography, colours, photography, branding, product-card style, chest-girth finder, inclusive sizing presentation, and overall visual hierarchy.

Only make the following corrections:

1. PRODUCT CATALOGUE

The final catalogue must contain exactly 18 fictional products:
- 12 dog clothing products
- 3 dog shoe products
- 3 dog treat products

Do NOT remove or replace the existing clothing or treat products.

Restore exactly 3 fictional dog-shoe products as a small secondary category.

Add the category filters:

All / Summer / Winter / Occasion / Shoes / Treats

Shoes must NOT become a major focus of the app.

Change the catalogue count to:

"18 Designs"

All product prices must be in Singapore dollars using S$.

1. REMOVE SEARCH

Remove the search bar completely.

There must be NO search feature anywhere in the app.

1. PRODUCT DATA

Keep all product data fictional and local.

Keep product data in one separate local data file.

Do not use:
- external APIs
- databases
- scraping
- live data
- external services
- Gemini API calls
- API keys

1. INCLUSIVE SIZING

Preserve the existing inclusive sizing concept.

For clothing and shoe products, provide at least four named size options where appropriate, with:
- chest girth range in cm
- back-length range in cm

Use fit types such as:

Petite / Standard / Long-Body / Broad-Chest

The chest-girth finder must continue to filter products based on whether at least one available size covers the entered chest measurement.

1. PRODUCT DETAIL

Preserve the existing Product Detail screen.

When a user enters a chest measurement and opens a product, the size-chart row matching that measurement must be visibly highlighted.

The user must be able to:
- select a size
- select a colour where applicable
- add the product to the bag
- see the bag count increase to 1
- return to the catalogue

Do not add checkout, payment, order processing, login, or accounts.

1. CUSTOM OUTFITS

Keep custom outfits only as a small promotional section:

"Custom outfits for special occasions from S$150."

It may mention occasions such as birthdays, weddings, or celebrations.

Do NOT create a custom-order workflow, separate custom-order screen, payment flow, or enquiry system.

1. BRAND LANGUAGE

Keep the positioning:

"Chic. Comfortable. Affordable. Inclusive."

Reduce overly luxury/couture wording.

Remove or replace phrases such as:
- Haute Canine Couture
- Atelier Concierge
- Singapore Atelier
- Bespoke Commission Atelier
- Haute canine couture

The brand should feel stylish, modern, approachable and attainable for all dog owners.

1. SCREEN SCOPE

Keep only the existing two-screen concept:

2. Discover / Shop
3. Product Detail

Do not add additional screens.

1. DO NOT ADD FEATURES

Do not add:
- search
- login
- accounts
- checkout
- payment
- order processing
- database
- backend
- external APIs
- Gemini API functionality
- live data
- scraping
- additional workflows

This is a frontend-only prototype using invented local data.

1. FINAL VERIFICATION

Before finishing, verify that:
- exactly 18 products exist
- exactly 12 are clothing
- exactly 3 are shoes
- exactly 3 are treats
- the Shoes category exists but remains secondary
- the search bar is completely removed
- the existing visual design is preserved
- no prohibited backend/API functionality was introduced

Do not make any other changes.

### What came back

The app was refined to contain exactly 18 products: 12 clothing products, 3 shoe products, and 3 treat products. The search bar was removed, the category structure was corrected, the inclusive sizing and two-screen flow were preserved, and the brand language was made more approachable.

### What changed next and why

The three shoe products still used clothing-style sizing, so I issued one small correction to make their sizing appropriate for footwear without changing the rest of the design.

---

## Prompt 5 — Google AI Studio: Shoe Sizing Correction

### Prompt

Make one small correction only to the three existing dog-shoe products.

Keep their current:
- images
- names
- prices
- product-card design
- descriptions
- visual styling
- placement in the catalogue

Do NOT redesign anything.

For the three shoe products, change the sizing presentation from clothing-style sizing to paw-based footwear sizing.

Use four fictional paw sizes for each shoe:
- Petite
- Standard
- Wide
- XL

For each size, show an invented paw-width range in cm and paw-length range in cm.

Example:

Petite — Paw width 3.0–3.5 cm · Paw length 3.5–4.5 cm

Standard — Paw width 3.6–4.2 cm · Paw length 4.6–5.5 cm

Wide — Paw width 4.3–5.0 cm · Paw length 5.6–6.5 cm

XL — Paw width 5.1–6.0 cm · Paw length 6.6–7.5 cm

Keep the clothing products' existing chest-girth and back-length sizing unchanged.

Do not add any new screens, search, checkout, backend, API, or other features.

### What came back

The three shoe products retained their existing images, names, prices, descriptions, card styling, and catalogue placement. Their sizing was changed to paw-based sizing using Petite, Standard, Wide, and XL options with fictional paw-width and paw-length ranges.

### What changed next and why

No further design changes were made. I tested the category filters, chest-girth filtering, product-detail navigation, matching-size highlighting, size and colour selection, and Add to Bag interaction. The final interface was kept unchanged after testing.
## Prompt 1

Please help me add a simple live weather feature to my existing Snuffers app.

I want to use Singapore's public NEA/data.gov.sg 2-hour weather forecast API:

[https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast](https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast)

I tested the API directly in my browser and it returned a successful response. The response includes an area called "City", and the forecast for City was:

> "area": "City",  
> "forecast": "Partly Cloudy (Night)"

Please inspect my existing project first and make the smallest changes necessary.

### What I want:

1. Add a server-side weather endpoint at `/api/weather`.
2. The server-side function should call the NEA weather API and retrieve the forecast for "City".
3. The browser should call `/api/weather` rather than calling the NEA API directly.
4. Display the live weather condition somewhere appropriate in the existing Snuffers interface without redesigning the website.
5. Handle loading, no-data, and API failure/unreachable states with clear messages.
6. Add the required `/api/health` endpoint.
7. Cache the weather response for about 30 minutes, since the source updates every 30 minutes.
8. Credit NEA/data.gov.sg where appropriate.
9. Do not add an API key, because this public endpoint does not require one.
10. Do not add new npm packages, a database, or login/authentication.
11. Keep the existing Snuffers design and functionality unchanged as much as possible.

The project already has `"type": "module"` in package.json, so please keep that.

Before making changes, tell me which files you plan to create or modify and why. Then make the changes.

**Result:** The agent implemented the live weather integration, but it incorrectly created a `server.ts` backend and added weather-based dog-walking/outing recommendation.


---

## Prompt 2

Please make a correction to the implementation you just created.

I want to keep the live weather feature, but I need it to follow the project requirements more strictly.

1. Do NOT create or use `server.ts` for this backend.
2. Create a root-level `"api"` folder beside package.json.
3. Put the weather backend function in:
   `api/weather.js`
4. Put the health endpoint in:
   `api/health.js`
5. The frontend should continue calling `/api/weather`. The browser must not call the NEA API directly.
6. Keep the existing Snuffers UI and the simple weather condition display.
7. Remove the "canine walk suggestion", "outing suggestion", or any other weather-based recommendation. I only need the live weather condition for this problem set.
8. Keep the NEA/data.gov.sg attribution.
9. Keep the 30-minute caching.
10. Do not add new npm packages, databases, authentication, or API keys.
11. Keep `"type": "module"` in package.json.

Please inspect the changes you just made and revise them rather than rebuilding the whole application.

Before making the correction, tell me exactly which files you will create, modify, or remove.

**Result:** The agent corrected the implementation by removing the recommendation and moving the backend to the required root-level `api/weather.js` and `api/health.js` serverless functions, while keeping the live weather display, attribution, and 30-minute cache.


---

## Prompt 3

I have reviewed your previous changes against the Problem Set 2 instructions. Do not publish, deploy, or push anything.

Make ONLY these corrections. Do not make any other changes to the existing product.

### 1. HEALTH ENDPOINT

Fix `api/health.js` so it satisfies the Problem Set 2 requirement that `/api/health` reports:

- `keyConfigured`
- whether the upstream answered
- the upstream HTTP status
- `checkedAt`

It must never print or expose any credential.

IMPORTANT: The selected weather service is the Singapore NEA/data.gov.sg weather API and it requires NO API key or signup. Do not invent a credential or environment variable. Represent that fact honestly in the health response rather than creating a fake secret requirement.

The health endpoint should actually check the weather upstream and report its HTTP status. Do not merely return `{ status: "ok" }` without checking the upstream.

### 2. REMOVE THE VITE API MIDDLEWARE

Remove the custom `"api-endpoints"` middleware that was added to `vite.config.ts` solely to make `/api/weather` and `/api/health` work in the AI Studio preview.

Do NOT create or invent a custom server.

Do NOT add `server.ts`.

Keep the normal existing Vite configuration otherwise unchanged.

The required serverless functions must remain:

- `/api/weather.js`
- `/api/health.js`

Both must be in the project-root `api/` directory, alongside package.json.

### 3. PACKAGE.JSON

Keep `"type": "module"`.

Restore the existing package scripts unless a change is strictly necessary for the original project to run.

Do not add any npm packages.

### 4. WEATHER FUNCTION

Keep `api/weather.js` using exactly this upstream:

[https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast](https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast)

It must:

- call the upstream from the server-side function, not from browser code
- find the forecast area `"City"`
- read the forecast from `data.items[0].forecasts` by matching `area === "City"`
- return only the weather fields the screen actually needs
- check `response.ok` before reading the response body
- return the upstream status and a clear one-line reason for non-2xx responses
- keep the 30-minute cache because the assignment states this weather source updates every 30 minutes and the shared campus network has a rate limit

### 5. FRONT END

Keep the existing Snuffers design and functionality.

The live weather condition should be displayed from `/api/weather`.

Do NOT add dog-walking advice, outfit recommendations, or any other recommendation logic. A recommendation is a Type B claim and is not part of this Problem Set.

The screen must have four distinct user-visible states required by the assignment:

- loading
- empty data
- upstream refused
- upstream unreachable

Use four different clear sentences, not just one generic error or spinner.

### 6. ATTRIBUTION

Keep the footer credit for the live weather data source.

Do not change anything unrelated to these corrections.

**Result:** The agent made the required backend corrections- the Vite API middleware and custom-server approach were removed, the health endpoint was updated to check the actual weather upstream, and the weather function was aligned with the required City forecast and four distinct user-visible states.


---

## Prompt 4

In `api/health.js`, the response currently reports `keyConfigured: true` because the NEA/data.gov.sg weather API requires no API key.

That is incorrect. This weather service requires NO credential.

Fix only this issue:

Do not invent an API key or environment variable.

Do not claim that a key is configured.

Keep the required `keyConfigured` field, but set it to false because no credential is configured/required for this service.

Keep the actual upstream check.

Keep `upstreamAnswered`, `upstreamStatus`, and `checkedAt`.

Never expose any credential.

Do not change `api/weather.js`.

Do not change the frontend.

Do not change `vite.config.ts`.

Do not add packages.

Do not add `server.ts`.

Do not publish or push anything.

**Result:** The agent corrected `api/health.js` so that `keyConfigured` is `false` because the NEA/data.gov.sg weather API requires no credential, while keeping the actual upstream check, `upstreamAnswered`, `upstreamStatus`, and `checkedAt`.
