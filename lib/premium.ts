/** Full Fhemt Premium price with no promo code applied — matches the
 * backend's own default (fhemt.premium.base-price-mad), which is the real
 * source of truth actually charged at submission. This is only a display
 * default; the discounted price (if a promo code is used) always comes
 * back from the backend's own request response, never computed here. */
export const PREMIUM_BASE_PRICE = 199;
