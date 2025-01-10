export const formatPrice = (price: number, currency = "EUR") => {
  return Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: currency,
  }).format(price);
};
