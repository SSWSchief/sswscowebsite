# Silver State Waste Solutions — Website Update Plan

**Date:** October 4, 2026 (revision 3: pricing confirmed, Overwatch phone stays, booking feeds Overwatch, tonnage-only cards)
**Client:** Austin Marshall, Silver State Waste Solutions (sswsco.com)
**Prepared by:** Tehron Porter
**Source:** Phone call with Austin, Oct 4, 2026; internal data from the SSWSCO Overwatch app (`clients/sswscoapp`)
**Status:** Plan ready. Phase 1 can be staged now; dispatch number confirmed as (702) 788-2727; remaining release checks are tracked in the implementation status.

---

## 1. Call notes (as written)

> take austins number off website put dispatch on, change pricing on website, eventually do book online. blue button can still be call now to book that links to dispatch to call. done with 400 number. standard 20 yd 425 and 40 yd 525.

> on 20 yd they say low boys on website they aren't lowboy. we allow up to 4 tons. take off heavy debris etc.

Also from the call: **take Austin's number off the photos.**

### Confirmed since the call
- **(702) 460-0726 is Austin's personal cell.** It comes off the website completely. Dispatch is the only number on the site.
- **Dispatch can't receive texts.** Every "Text" button and every "Call / Text" label is removed.
- **$425 is the public 20 yard price.** The $400 on the binder sheet was a one-time friends-and-family rate for one job.
- **Size cards show tonnage only.** Remove the "what it holds" capacity lines.
- **Overwatch keeps Austin's cell.** Overwatch is internal, so no phone change there.
- **Online booking (Phase 2) feeds Overwatch.**
- **Dispatch number:** **(702) 788-2727**, confirmed by Tehron.

---

## 2. What Austin asked for

| # | Request | Phase |
|---|---------|-------|
| 1 | Remove Austin's personal number, (702) 460-0726, from the whole website | 1 |
| 2 | Use the **dispatch number** as the only phone number (call only, no text) | 1 |
| 3 | Change the blue call buttons to **"Call Now to Book"**, linking to dispatch | 1 |
| 4 | Show pricing: **20 yard $425** and **40 yard $525** (standard) | 1 |
| 5 | The 20 yard is **not a lowboy**. Remove "lowboy" everywhere | 1 |
| 6 | The 20 yard allows **up to 4 tons** | 1 |
| 7 | Remove **heavy debris** (concrete, dirt, asphalt, rock, etc.) from the 20 yard copy | 1 |
| 8 | Remove Austin's number from the **photos** | 1 |
| 9 | Add **online booking** later | 2 |

---

## 3. Internal data from Overwatch (the ops app)

Overwatch (`clients/sswscoapp`) has newer business data than the website. Sources: `docs/billing-assumptions.md`, which transcribes the SSWS Binder rate sheet, page 1, and the billing and tax code.

### 3.1 Rate sheet

| | 20 Yard | 40 Yard |
|---|---|---|
| Base rental (public) | **$425** | **$525** |
| Included rental period | **7 days** | **14 days** |
| Included weight | **4 tons** | **6 tons** |
| Additional tonnage | $85/ton | $85/ton |
| Additional days | $25/day | $30/day |
| Delivery / pickup | Included | Included |
| Fuel / environmental fee | 5% | 5% |

The binder sheet lists the 20 yard at $400. That was a one-time friends-and-family rate, not the public price.

**Other fees:** dry run $125 · relocation/swap $75 · prohibited material $250 · overweight/overload $85/ton.

**Sales tax:** 8.375% (Clark County) on every invoice line. LVB Services confirmed this on Oct 2 and Austin set it on Oct 3.

### 3.2 Contact and operations details
- **Dispatch email:** `Dispatch@sswsco.com` is the default dispatch inbox in Overwatch (`src/lib/email/resend.ts`).
- **Customer-facing sender:** `notifications@sswsco.com`
- **Container sizes in Overwatch:** 10, 20, 30, 40 yard. Only the 20 and 40 are priced on the rate sheet, so the website stays at **20 and 40 only**.
- **Prohibited materials list:** stored in Overwatch → Settings as the invoice rental terms, and printed on every Stripe invoice. The text is in the production database, not the repo.

### 3.3 How this differs from the current website

| Topic | Website says | Overwatch / rate sheet says |
|-------|--------------|------------------------------|
| Rental period | "7–10 day rental" for both sizes | **20 yd: 7 days · 40 yd: 14 days** |
| 40 yd weight | "Holds up to 8 tons" + "6 tons included" | **6 tons included** (no 8-ton max on the sheet) |
| 20 yd weight | "For heavy debris — concrete, dirt, asphalt" + "Included tonnage — contact us to confirm" | **4 tons included** |
| Extensions | "additional daily fee" | **$25/day (20 yd) · $30/day (40 yd)** |
| Overage | "billed beyond that" | **$85/ton** |
| Extra charges | About page: "**No hidden fees**." FAQ: "The only variable is if you exceed the included weight limit." | **5% fuel/environmental fee + 8.375% sales tax** on every invoice, plus situational fees |

The last row is the biggest problem. The site promises no hidden fees, but every invoice adds 5% plus tax. Phase 1 discloses these next to the prices, so the "Honest Pricing" claim holds up.

---

## 4. What the site does now

I reviewed the live site at www.sswsco.com (Vercel) and the source in `web/`. The live site matches the local code.

### 4.1 Phone number
- Austin's (702) 460-0726 is hard-coded in **about 30 places across 20 files**. There is no single setting to change it.
- It appears in visible text, `tel:` links, an `sms:` link, page meta descriptions (Google search snippets), the LocalBusiness schema (`lib/schema.ts`), and the customer confirmation email sent after a quote request.
- Buttons say **"Call / Text Us"** or **"Call / Text (702) 460-0726"**. The mobile bottom bar has separate **Call** and **Text** buttons.

### 4.2 Pricing
- **No prices are shown anywhere on the site.**
- The FAQ says the 20 yard is *"priced by weight, not volume."* This conflicts with a flat $425 price.

### 4.3 20 yard "lowboy"
The 20 yard is labeled and described as a lowboy across the site:
- Name: "20 Yard Lowboy" (size cards, nav dropdown, contact sidebar, quote form dropdown, schema)
- Dimensions: `app/dumpster-sizes/page.tsx` defines `dims: "8' W × 14' L × 2' H (low profile)"`, which are lowboy dimensions. The 40 yd entry has `"8' W × 22' L × 8' H"`. **Neither is shown on the page.** The `dims` field is defined but never displayed. The only dimension a visitor sees is "low side walls (2 feet)" in FAQ #1.
- Capacity: "For heavy debris — concrete, dirt, asphalt"
- Ideal For: Concrete & Dirt, Asphalt & Gravel, Rock & Fill Material, Heavy Dense Debris, Ground-Level Loading
- Note: "The lowboy's low walls make it easy to load heavy materials by hand…"
- FAQ #1: "heavy-debris specialist — low side walls (2 feet)…"
- The page anchor is `#lowboy`

### 4.4 Photos that show Austin's number
I checked every image in `web/public/images/`. **Two** of them show 702-460-0726:

| Image | Where the number is | Used on |
|-------|---------------------|---------|
| `trucks-on-strip.png` | On the side of the lead container, the lead truck door, and the second truck door | **Home hero** background, **About** page fleet photo |
| `dumpster-20yard.webp` | Large, across the side of the 20 yard container | **Home** size preview, **Dumpster Sizes** 20 yd card, **About** page job-site photo |

These images do **not** show a number: `dumpster-40yard.png`, `truck-door.webp`, `residential-hero.png`, `home-renovation.png`, `construction-site.png`, `roofing-project.png`, `commercial-cleanout.png`, `logo.png`.

The slogan on the `dumpster-20yard.webp` container also appears to read "BUILT FOR JOBS **TANT** STOP". Fix this during the retouch.

---

## 5. Phase 1 — Detailed changes

### 5.1 Put contact info and dumpster data in shared files (do this first)

**`web/lib/site.ts`** holds the dispatch number and contact details in one place:

```ts
export const DISPATCH = {
  display: "(702) XXX-XXXX",   // ← replace when Austin sends it
  tel: "tel:+1702XXXXXXX",
  e164: "+1702XXXXXXX",        // schema.org
};
export const DISPATCH_EMAIL = "dispatch@sswsco.com"; // confirm (5.7)
```

**`web/lib/dumpsters.ts`** holds price, rental days, tons, and overage/extension rates for both sizes, using the rate sheet values from Section 3.1. The home page preview and the Dumpster Sizes page both read from it. They are copy-pasted duplicates today and could drift apart again.

Then point every hard-coded phone reference at `site.ts`. After that, swapping in the dispatch number is a one-line change.

I can do all of this now with a placeholder and leave it unpublished. When the number arrives, I fill in `site.ts`, run QA, and deploy.

### 5.2 Replace Austin's number with dispatch: every location

Dispatch is **call only**, so every `sms:` link is removed and every "Call / Text" or "call or text" becomes "Call" or "call".

| File | Line(s) | What it is | Change |
|------|---------|------------|--------|
| `components/layout/Header.tsx` | 36–40 | Top bar number | Dispatch number, labeled "Dispatch" |
| `components/layout/Header.tsx` | 166–170 | Mobile menu "Call / Text Us" | **Call Now to Book** → dispatch |
| `components/layout/MobileStickyBar.tsx` | 9–13 | Mobile **Call** button | **Call to Book** → dispatch |
| `components/layout/MobileStickyBar.tsx` | 15–21 | Mobile **Text** button (`sms:`) | **Remove.** Change the bar to 2 columns (`grid-cols-2`): Call to Book + Quote |
| `components/layout/Footer.tsx` | 108–112 | Footer phone | Dispatch |
| `components/sections/HeroHome.tsx` | 37–41 | **Home hero blue button** "Call / Text Us" | **Call Now to Book** → dispatch |
| `components/sections/CTABand.tsx` | 38–42 | "Call (702) 460-0726" (on every page) | "Call Now to Book" + dispatch number |
| `components/sections/CTABand.tsx` | 11 | Default subline "Call or text us today…" | "Call dispatch today…" |
| `components/sections/DumpsterSizePreview.tsx` | 109–112 | "Call / Text Us" | **Call Now to Book** |
| `components/sections/FAQ.tsx` | 53–54 | "Call or text us at…" | "Call dispatch at…" |
| `components/sections/FAQ.tsx` | answers | "call or text us before your pickup date" and similar | "call dispatch…" |
| `components/sections/HowItWorks.tsx` | 7–8 | Step 1 "Call or Text Us" | "Call Dispatch". Step text: "Call to get pricing and pick your size." |
| `components/ui/QuoteForm.tsx` | 51 | Error message | Dispatch number |
| `components/ui/QuoteForm.tsx` | 65–67 | Success message "call or text us at…" | "call dispatch at…" + dispatch number |
| `components/ui/QuoteForm.tsx` | 100 | Phone field **placeholder** shows Austin's number | Generic placeholder, e.g. `(702) 555-0123` |
| `components/ui/QuoteForm.tsx` | 211–213 | "or call/text us at…" | "or call dispatch at…" + dispatch number |
| `app/about/page.tsx` | 60–64 | **About hero blue button** "Call / Text Us" | **Call Now to Book** |
| `app/residential/page.tsx` | 12, 55–59 | Meta description + **hero blue button** | Dispatch / **Call Now to Book** |
| `app/commercial/page.tsx` | 12, 77–81 | Meta description + **hero blue button** | Dispatch / **Call Now to Book** |
| `app/dumpster-sizes/page.tsx` | 11, 165–169 | Meta + "Call / Text (702) 460-0726" | Dispatch / **Call Now to Book** |
| `app/dumpster-sizes/page.tsx` | 185 | CTA subline "call or text us today!" | "call dispatch today!" |
| `app/residential/page.tsx` | 123 | CTA subline "Call or text us today…" | "Call dispatch today…" |
| `app/commercial/page.tsx` | 198 | CTA subline "Call or text us today." | "Call dispatch today." |
| `app/contact/page.tsx` | 9, 46–49 | Meta, hero "Call or text us at…" | "Call dispatch at…" |
| `app/contact/page.tsx` | 76–82 | "Phone / Text" contact card | Label **"Dispatch"**, dispatch number |
| `app/not-found.tsx` | 32–36 | 404 page "Call / Text Us" button | **Call Now to Book** → dispatch |
| `app/page.tsx` | 15 | Home meta "Call or text (702) 460-0726" | "Call dispatch at …" |
| `app/layout.tsx` | 28 | Site-wide meta "Call or text (702) 460-0726" | "Call dispatch at …" |
| `lib/schema.ts` | 9 | Schema `telephone` (Google uses this) | Dispatch, E.164 format |
| `app/api/quote/route.ts` | 37–39 | Quote confirmation email: "call or text us directly" + number | "call dispatch directly" + dispatch |

**Verify:**
- `grep -rn "460" web/app web/components web/lib` returns nothing.
- `grep -rniE "sms:|text us|call / text|call or text" web/app web/components` returns nothing.

### 5.3 "Call Now to Book" button standard

Every **solid blue** primary call button becomes:

- **Label:** `Call Now to Book` (phone icon kept)
- **Link:** `tel:` dispatch
- **Style:** unchanged (current `bg-ssws-blue` style)

Outlined/secondary buttons stay **"Get a Quote"** and link to `/contact`. The quote form stays live as the fallback for people who don't want to call.

**Size cards:** The blue button on each size card currently reads "Get a Quote" and links to `/contact`. Now that prices are shown, I recommend:
- Blue button: **Call Now to Book**, linking to dispatch
- Small text link underneath: "or request a quote online →"

*(Needs Austin's OK. See Section 10.)*

### 5.4 Pricing

**Size card layout (both the home page preview and the Dumpster Sizes page):**

```
20 YARD
$425
⚖ 4 tons included
📅 7-day rental
🚚 Delivery & pickup included
───────────────────
Extra days: $25/day · Over 4 tons: $85/ton
Plus 5% fuel/environmental fee and sales tax.
```

```
40 YARD
$525
⚖ 6 tons included
📅 14-day rental
🚚 Delivery & pickup included
───────────────────
Extra days: $30/day · Over 6 tons: $85/ton
Plus 5% fuel/environmental fee and sales tax.
```

**Tonnage only, per Austin.** The current **capacity line** (the `Weight` icon row) is removed from both cards:
- 20 yd: "For heavy debris — concrete, dirt, asphalt" (and "For heavy debris" in the home preview)
- 40 yd: "Holds up to 8 tons"

Each card's weight row becomes just **"4 tons included"** / **"6 tons included"**. In code, drop the `capacity` field from the dumpster data and render `includedTons` with the `Scale` icon.

How much fine print to show is Austin's call (Section 10). I recommend at least the **"Plus 5% fuel/environmental fee and sales tax"** line. Without it, a $425 customer gets an invoice of about $483 ($425 + 5% = $446.25, plus 8.375% tax), which contradicts "No hidden fees" on the About page.

**Pricing changes across the site:**

1. **Size cards:** `app/dumpster-sizes/page.tsx` and `components/sections/DumpsterSizePreview.tsx`. Render price + terms from `lib/dumpsters.ts`.
   - 20 yd rental line: "7-10 day rental included" → **"7-day rental"**
   - 40 yd rental line: "7-10 day rental included" → **"14-day rental"**
   - Capacity lines removed; tonnage lines read "4 tons included" / "6 tons included" (see above)
2. **Contact page sidebar** (`app/contact/page.tsx:129`): "20 Yard — $425" / "40 Yard — $525"
3. **FAQ** (`components/sections/FAQ.tsx`):
   - **Q1:** remove "priced by weight, not volume" (rewritten in 5.5)
   - **New: "How much does a dumpster rental cost?"** "20 yard: $425, with a 7-day rental and 4 tons included. 40 yard: $525, with a 14-day rental and 6 tons included. Delivery and pickup are included. A 5% fuel/environmental fee and Clark County sales tax apply."
   - **"How long is the rental period?"** "7 days for the 20 yard, 14 days for the 40 yard."
   - **"Can I extend my rental?"** add "$25/day for the 20 yard, $30/day for the 40 yard."
   - **"Is delivery and pickup included?"** keep "Yes", but replace "The only variable is if you exceed the included weight limit" with the real list: overage $85/ton, extra days, 5% fuel/environmental fee, and sales tax.
   - **New: "Are there any other fees?"** "Dry run (we can't deliver or pick up because the spot is blocked): $125. Relocating the container on site: $75. Prohibited materials found in the load: $250." *(Austin confirms he wants these public.)*
4. **About page** (`app/about/page.tsx:27–28`): "Honest Pricing — No hidden fees." Keep it **only if** the fee line goes on the cards. Otherwise reword to "Upfront pricing. We tell you every charge before we drop the can."
5. **Schema** (`lib/schema.ts`): add `price: "425"` / `"525"`, `priceCurrency: "USD"` to each Offer. Change `priceRange` `"$$"` → `"$425–$525"`.
6. **Meta descriptions** for Home and Dumpster Sizes: "20 yard dumpsters from $425, 40 yard from $525" for search snippets.

### 5.5 20 yard: remove "lowboy" and heavy debris

**New 20 yard card content (draft):**

| Field | Current | New |
|-------|---------|-----|
| Name | 20 Yard Lowboy | **20 Yard** |
| Anchor/id | `#lowboy` | `#20-yard` |
| Price | — | **$425** |
| `dims` field (not displayed) | 8' W × 14' L × 2' H (low profile) | **Delete** from the data. Also delete the unused 40 yd `dims`. |
| Capacity line | For heavy debris — concrete, dirt, asphalt | **Removed** (tonnage only) |
| Tonnage line | Included tonnage — contact us to confirm | **4 tons included** |
| Rental line | 7-10 day rental included | **7-day rental** |
| Fine print | — | Extra days $25/day · Over 4 tons $85/ton · Plus 5% fuel/environmental fee and sales tax |
| Ideal For | Concrete & Dirt, Asphalt & Gravel, Rock & Fill, Heavy Dense Debris, Ground-Level Loading, Home Cleanouts | **Home Cleanouts, Garage & Estate Cleanouts, Kitchen/Bath Remodels, Small Roofing Jobs, Yard Waste, Small Construction Projects** |
| Note | "The lowboy's low walls make it easy to load heavy materials by hand…" | "Not for concrete, dirt, rock, or other heavy materials." |
| Image alt text | "…20 yard lowboy dumpster" | "…20 yard roll-off dumpster" |

**Every other place "lowboy" or heavy-debris copy appears:**

| File | Line | Change |
|------|------|--------|
| `components/layout/Header.tsx` | 15 | Nav dropdown "20 Yard Lowboy" → "20 Yard", href `#20-yard` |
| `components/sections/DumpsterSizePreview.tsx` | 7–13, 36, 58 | Name, capacity, idealFor, href, subtitle ("from heavy debris to…"), alt |
| `app/dumpster-sizes/page.tsx` | 11, 16–31, 63, 89–92 | Meta, card data, hero copy ("From heavy debris…"), alt |
| `components/sections/FAQ.tsx` | 8–9 | Rewrite Q1 as **"Which size do I need: 20 yard or 40 yard?"** "The 20 yard ($425, 7 days, 4 tons included) fits most home cleanouts, remodels, and small jobs. The 40 yard ($525, 14 days, 6 tons included) is for large construction, demolition, and commercial cleanouts. Neither is for concrete, dirt, or rock. Not sure? Call dispatch." |
| `components/sections/HowItWorks.tsx` | 14 | "20 yard lowboy or 40 yard" → "20 yard or 40 yard" |
| `app/contact/page.tsx` | 129 | "20 Yard Lowboy" → "20 Yard — $425" |
| `components/ui/QuoteForm.tsx` | 12 | Dropdown "20 Yard Lowboy" → "20 Yard" |
| `components/ui/QuoteForm.tsx` | 21 | Remove project type **"Heavy Debris (Concrete / Dirt)"** |
| `app/commercial/page.tsx` | 24 | "heavy debris from demolition projects with our lowboy and 40 yard" → "demolition debris with our 20 and 40 yard containers" |
| `app/page.tsx` | 15 | Meta: "20 yard lowboy and 40 yard" → "20 yard and 40 yard" |
| `lib/schema.ts` | 34 | "20 Yard Lowboy Dumpster Rental" → "20 Yard Dumpster Rental" |

**FAQ "What can I put in a dumpster?":** replace the current list with the **prohibited materials list from Overwatch → Settings → invoice rental terms**. Customers then see the same list printed on their invoice. Add a line saying prohibited materials carry a $250 fee. Make sure concrete, dirt, rock, and asphalt are on the list, or on a "call dispatch first" list, depending on Austin's answer.

**Old `#lowboy` links:** add an empty `<span id="lowboy" />` above the 20 yard card so old links and bookmarks still scroll to the right place.

### 5.6 Remove Austin's number from photos

| Image | Plan |
|-------|------|
| `trucks-on-strip.png` (Home hero + About) | **Retouch:** remove "702-460-0726" from the lead container side and both truck doors. Keep the logo and "SSWSCO.COM". Use AI inpainting / Photoshop Generative Fill on the original 1536×1024 file. |
| `dumpster-20yard.webp` (3 places) | **Retouch:** remove the large "702-460-0726" from the container side. Fill with the navy wrap color, or move "SSWSCO.COM" up into that space. Fix the "TANT" slogan typo at the same time. |

Rules:
- **Don't put the dispatch number on any photo.** Numbers baked into images can't be updated without editing the image again. Phone numbers belong in page text only.
- Keep the original files in `old_sswsco_imgs/` and save the edited files under **new filenames** (e.g. `trucks-on-strip-v2.png`, `dumpster-20yard-v2.webp`). New filenames make Vercel and browsers fetch the new image instead of serving a cached copy.
- After the retouch, zoom in to 200% on each image and confirm no digits are left, including the smaller truck-door text.
- **Fallback if a retouch looks bad:** use `dumpster-40yard.png` or `construction-site.png` for the 20 yard card and `truck-door.webp` for the About fleet photo. None of these show a number.

### 5.7 Quote form routing

The website quote form sends to `QUOTE_EMAIL_TO`, which defaults to **`info@sswsco.com`** (`web/app/api/quote/route.ts`, `.env.example`). Overwatch sends dispatch mail to **`Dispatch@sswsco.com`**. If dispatch is booking jobs now, web quote requests should go to them.

**Recommendation:** set `QUOTE_EMAIL_TO=dispatch@sswsco.com` in Vercel, or send to both addresses. Confirm with Austin.

### 5.8 Overwatch: no change

**Decision (Tehron, Oct 4):** Overwatch is internal, so Austin's cell stays in its company phone setting (`company_settings.phone`). This plan changes the public website only.

FYI, not a blocker: Overwatch prints that company phone on a few things customers receive:
- **Job confirmation emails**: "…or call …" (`src/lib/job-confirmations/email.ts`)
- **The confirm/change page** (`src/app/confirm/[token]/page.tsx`)
- **Stripe invoices**

If Austin ever wants customers calling dispatch from those too, it's a single field in Overwatch Settings. No code change is needed.

### 5.9 Off-site items for Austin

- **Google Business Profile:** change the primary phone to dispatch. Google checks that name, address, and phone match across listings, and a mismatch can lower map ranking.
- **Facebook / Yelp / Nextdoor / other listings:** same.
- **Truck and container wraps** show his personal cell in large print, and customers will keep calling it. Options:
  - Short term: a voicemail or auto-reply on his cell that gives the dispatch number
  - Long term: vinyl decals with the dispatch number over the old number on each wrap

---

## 6. Phase 2 — Online booking (later)

**Confirmed:** online booking feeds **Overwatch**. Dispatch already runs on it, so there's no third-party booking tool and no entering jobs twice.

**Overwatch already has most of the parts:**
- Job creation with service type (Delivery, Pick-Up, Swap, Dump & Return), size, address, and schedule
- A price list table (`price_list`) dispatch maintains
- **Job confirmation emails** with Confirm / Request-a-change links (added Oct 1)
- **Stripe invoicing** with the 8.375% sales tax set up
- A dispatch email inbox and push notifications

**Proposed flow:**
1. Customer picks size, delivery date, address, placement notes, and contact info on sswsco.com/book
2. The website posts the request to a new Overwatch endpoint, which creates a **booking request** that dispatch must approve. It does not go straight onto a driver's schedule.
3. Dispatch gets a push notification and email, then approves, adjusts, or declines the request
4. On approval, Overwatch's existing confirmation email goes to the customer
5. Payment uses Overwatch's existing Stripe invoicing. Optionally, a Stripe Checkout deposit at booking.

**Decisions needed before building:**
- Pay at booking, deposit, or invoice after (Overwatch billing docs list prepay vs net terms as unanswered)
- Same-day cutoff time, delivery windows, blackout dates
- Service area ZIP list and any distance surcharges
- Street placement / permit handling
- Cancellation and reschedule policy

**Build notes:**
- **One source of prices.** Overwatch's `price_list` should hold the public standard rates (20 yd $425 / 40 yd $525). Booked jobs then price correctly, and later the website can read its prices from Overwatch instead of `lib/dumpsters.ts`. Check that the 20 yd Delivery entry is $425 in production, not the $400 friends-and-family rate.
- **Sizes.** Overwatch supports 10/20/30/40 yard; the booking form offers **20 and 40 only**.
- **Booking requests need dispatch approval.** Overwatch's job statuses are pending → en_route → arrived → complete / cancelled. A web booking should arrive as a separate **request**, either a new table or a flag, so it never lands on a driver's board before dispatch approves it.
- **Endpoint security.** The public endpoint needs rate limiting, bot protection (e.g. Cloudflare Turnstile), and server-side validation. Never expose Overwatch's Supabase keys to the website.

---

## 7. Order of work

| Step | Task | Blocked on |
|------|------|------------|
| 1 | Create `lib/site.ts` + `lib/dumpsters.ts`; replace all hard-coded phone references and remove all text/SMS wording (placeholder number) | — |
| 2 | Pricing display, tonnage-only cards, rental terms, FAQ rewrite, schema (5.4) | Austin: how much fine print to show |
| 3 | Lowboy and heavy-debris copy changes; delete unused `dims` (5.5) | — |
| 4 | Copy the prohibited materials list from Overwatch Settings into the FAQ | — |
| 5 | "Call Now to Book" buttons (5.3) | Austin: OK on size-card button change |
| 6 | Retouch the two photos (5.6) | — |
| 7 | Put the dispatch number in `lib/site.ts` | **Austin: dispatch number** |
| 8 | QA (Section 8) | — |
| 9 | Deploy to Vercel. Same day: update `QUOTE_EMAIL_TO` in Vercel (5.7) | — |
| 10 | Send Austin before/after screenshots | — |
| 11 | Austin updates Google Business Profile, listings, and his cell's voicemail (5.9) | Austin |
| 12 | Phase 2 scoping: online booking into Overwatch (Section 6 decisions) | Austin: payment, cutoffs, service area, policies |

Steps 1–6 can be done and previewed now. Only step 7 waits on the dispatch number.

---

## 8. QA checklist before deploy

- [ ] `grep -rn "460" web/app web/components web/lib` returns nothing
- [ ] `grep -rniE "sms:|text us|call / text|call or text" web/app web/components` returns nothing
- [ ] `grep -rni "lowboy" web/app web/components web/lib` returns nothing (except the `#lowboy` redirect span)
- [ ] `grep -rniE "concrete|dirt|asphalt|heavy" web/app web/components` shows only intentional "not allowed" wording
- [ ] `grep -rn "7-10\|7–10\|8 tons\|Holds up to\|dims" web/app web/components` returns nothing
- [ ] Each size card shows one weight row ("4 tons included" / "6 tons included") and no capacity row
- [ ] Every `tel:` link dials dispatch on a real phone (iPhone and Android)
- [ ] Mobile sticky bar shows 2 buttons (Call to Book + Quote); no Text button
- [ ] Prices and terms match Section 3.1 on: Home preview cards, Dumpster Sizes cards, Contact sidebar, FAQ, schema
- [ ] Both retouched photos show no number at 200% zoom
- [ ] Submit a website quote form → it reaches dispatch's inbox; the confirmation email shows the dispatch number and says "call", not "call or text"
- [ ] `npm run build` and `npm run lint` pass
- [ ] Run the Home page through Google's Rich Results Test → LocalBusiness telephone = dispatch, Offers show prices
- [ ] Spot-check every page at mobile width (375px) and desktop

---

## 9. Other issues found during the review (not from the call; bring up with Austin)

- **Social links are placeholders.** The footer Facebook and Instagram icons link to `facebook.com` and `instagram.com`, not SSWS's pages. Get the real URLs or remove the icons.
- **About page "Team Photo" is still a placeholder box.** Ask Austin for a real team or truck photo.
- **Hero photo shows casino branding** (Bellagio, Aria, Caesars, Cosmopolitan signage in `trucks-on-strip.png`). It's AI-generated imagery with real trademarks. Low risk, but consider swapping it for a real fleet photo eventually.

---

## 10. Questions for Austin

**Resolved:**
- ~~Can dispatch receive texts?~~ **No.** Call only.
- ~~Does "done with the 400 number" mean 460-0726 comes off completely?~~ **Yes.** It's Austin's personal cell.
- ~~Rental days, tonnage, overage, and extension rates?~~ **From the Overwatch rate sheet** (Section 3.1).
- ~~20 yard price: $400 or $425?~~ **$425 public.** $400 was a one-time friends-and-family rate.
- ~~20 yard dimensions?~~ **Not needed.** Not in any Overwatch or project file, and the website never displays dimensions. Cards show tonnage only. The unused `dims` data gets deleted.
- ~~Does Overwatch's phone need to change?~~ **No.** It's internal.
- ~~Where does online booking go?~~ **Into Overwatch.**

**Still open:**
1. **Dispatch number:** **(702) 788-2727** *(resolved)*
2. **Fine print:** OK to show on the website the 5% fuel/environmental fee, sales tax, $85/ton overage, extra-day rates, and the dry run / relocation / prohibited material fees? (Recommended: yes, at least the 5% + tax line.)
3. Does SSWS take **any** heavy debris (concrete/dirt/rock) in any container, or none? This decides whether those items go on the prohibited list or a "call dispatch first" list.
4. OK to change the blue **size-card buttons** from "Get a Quote" to **"Call Now to Book"**?
5. Photos: OK to **digitally remove** the number (recommended), or would he rather send new photos?
6. Should **website quote requests** go to `dispatch@sswsco.com` instead of `info@sswsco.com`?
7. Will he update **Google Business Profile** and set a voicemail on his cell that gives the dispatch number? Any plan for the **truck wraps**?
8. *(Phase 2)* Online booking: pay at booking / deposit / invoice after, same-day cutoff, service-area ZIPs, cancellation policy.
