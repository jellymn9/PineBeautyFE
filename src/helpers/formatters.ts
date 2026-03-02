export const formatPrice = (price: number, currency = "EUR") => {
  return Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: currency,
  }).format(price);
};

export const toLower = <T extends string>(value: T): T =>
  value.toLowerCase() as T;

export const toLowercaseArray = <T extends string>(arr: T[]): Array<T> =>
  arr.map((item) => toLower(item));

export const getImagePath = (
  URLBase: string,
  name: string,
  size: string,
  format: string,
) => `${URLBase}/${name}_${size}.${format}`;
