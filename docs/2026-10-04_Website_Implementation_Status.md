# Website Phase 1 implementation status

Implemented locally October 4, 2026. Not published.

- Shared contact configuration: `web/lib/site.ts`. Dispatch is confirmed as (702) 788-2727; all shared call links use `tel:+17027882727`, including the customer confirmation email and structured data.
- Shared dumpster rates: `web/lib/dumpsters.ts`. Home and size-page cards, contact sidebar, FAQ, and structured offers use confirmed $425/$525 pricing, 7/14-day rentals, and 4/6 included tons. Cards disclose extension rates, $85/ton overage, and the 5% fee plus tax.
- Removed Austin's personal phone from site source and confirmation email; removed SMS links and texting language. Mobile bar has Call to Book and Quote.
- Removed lowboy and heavy-debris marketing, unused dimensions, and capacity claims. Retained only the legacy `#lowboy` anchor for bookmarks.
- Used clean existing construction/renovation images as a temporary fallback. Original phone-bearing images are archived under `web/old_sswsco_imgs/`, outside public assets. No AI retouch performed.
- Size cards retain Get a Quote pending the explicit client decision in the plan. Quote email recipient remains unchanged pending routing confirmation.
- FAQ uses conservative material guidance pending the exact production Overwatch invoice terms. No production database access or Overwatch changes performed.

## Before publishing

1. Dispatch number is configured; verify dialing on a real mobile device.
2. Confirm public fee disclosures and size-card call-button change. Situational fee FAQ awaits approval.
3. Obtain the exact prohibited-material list from Overwatch Settings; resolve heavy materials for the 40 yard.
4. Confirm quote routing, update the production environment if approved, and verify a real submission and customer confirmation.
5. Complete mobile/desktop visual checks, screenshots, and Google's Rich Results Test.
6. Deploy only after the above release dependencies are resolved. Online booking remains Phase 2 and needs the decisions listed in the plan.

Validation: production build passed; lint passed. Source scan contains none of the removed phone/SMS/rental/capacity copy; only the intentional legacy anchor retains “lowboy.” Browser visual and real email delivery verification remain outstanding.
