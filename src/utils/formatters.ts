// src/utils/formatters.ts

import type { Course, Country } from "../api/courses";

export function formatPrice(course: Course, country: Country): string | null {
  if (country === "IN") {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(course.pricePaise / 100);
  }

  if (country === "US") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(course.priceUsdCents / 100);
  }

  return null;
}

export function getPriceValue(course: Course, country: Country): number {
  if (country === "IN") {
    return course.pricePaise;
  }

  if (country === "US") {
    return course.priceUsdCents;
  }

  return 0;
}
