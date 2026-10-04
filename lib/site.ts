// Confirmed dispatch number; public website calls only.
const dispatchNumber: string = "+17027882727";
export const DISPATCH = {
  e164: dispatchNumber || undefined,
  display: dispatchNumber ? `(${dispatchNumber.slice(2, 5)}) ${dispatchNumber.slice(5, 8)}-${dispatchNumber.slice(8)}` : "Dispatch number pending",
  tel: dispatchNumber ? `tel:${dispatchNumber}` : "/contact",
};
export const DISPATCH_EMAIL = "dispatch@sswsco.com";
export const CONTACT_EMAIL = "info@sswsco.com";
