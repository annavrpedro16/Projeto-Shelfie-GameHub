// 4.5 → "4,5"
export const formatRating = (rating) => rating.toFixed(1).replace(".", ",");

// 4.5 → "★★★★★" e 3.2 → "★★★☆☆"
export const stars = (rating) =>
  "★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating));
