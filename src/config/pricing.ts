// Single source of truth for website pricing.
// Change a number here and every page that shows it follows.
// Last updated: October 29, 2026

export const pricing = {
  // A real, working review copy before any money changes hands.
  mockup: 'Free',

  // The pages themselves, designed and built.
  pages: '$250 to $500',

  // The "starting at" number used in guide copy.
  entry: '$250',

  // Fixed-price add-ons, scoped once you have seen the mockup.
  forms: 'From $500',

  // Custom app work: a content manager, a backend, an internal tool.
  // Most land inside appRange and are quoted fixed once scoped.
  app: 'From $2,500',
  appRange: '$2,500 to $6,000',

  // Moving an existing site (WordPress and similar) is quoted per project.
  // No two migrations carry the same content, so there is no useful list price.
  migration: 'Quoted after a conversation',

  // Yearly care: keeps it running and patched. Custom code needs more
  // upkeep than static pages do, so it carries its own number.
  care: '$100/year',
  careApp: '$400/year',

  // As-needed updates, billed in 30-minute increments.
  hourly: '$95/hour',
};
