// Single source of truth for website pricing.
// Change a number here and every page that shows it follows.
// Last updated: October 28, 2026

export const pricing = {
  // A real, working review copy before any money changes hands.
  mockup: 'Free',

  // The pages themselves, designed and built.
  pages: '$250 to $500',

  // The "starting at" number used in guide copy.
  entry: '$250',

  // Fixed-price add-ons, scoped once you have seen the mockup.
  forms: 'From $500',
  cms: 'From $750',

  // Moving an existing site (WordPress and similar) is quoted per project.
  // No two migrations carry the same content, so there is no useful list price.
  migration: 'Quoted after a conversation',

  // Optional yearly care: keeps the lights on and patched.
  care: '$100/year',

  // As-needed updates, billed in 30-minute increments.
  hourly: '$95/hour',
};
