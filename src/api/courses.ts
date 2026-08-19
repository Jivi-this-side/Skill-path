// src/api/courses.ts

export const BASE_URL = "https://syncsphere-hiv6.onrender.com";

export const COURSE_API = `${BASE_URL}/assignment/course-data/`;

export const COUNTRY_API = `${BASE_URL}/assignment/country-code/`;

export type Course = {
  courseName: string;
  courseCode: string;
  description: string;
  mainCategory: string;
  shortCourse: string;
  courseType: string;
  pricePaise: number;
  priceUsdCents: number;
  mangoId: string;
  refundable: boolean;
};

export type Country = "IN" | "US" | null;

export type CourseDataResult = {
  courses: Course[];
  country: Country;
  countryError: boolean;
};

export async function fetchCourses(): Promise<Course[]> {
  const response = await fetch(COURSE_API, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Course API failed with status ${response.status}`);
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Invalid course API response");
  }

  return data;
}

export async function fetchCountry(): Promise<{
  country: Country;
  countryError: boolean;
}> {
  try {
    const response = await fetch(COUNTRY_API, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return {
        country: null,
        countryError: true,
      };
    }

    const data = await response.json();

    if (data.country_code === "IN" || data.country_code === "US") {
      return {
        country: data.country_code,
        countryError: false,
      };
    }

    return {
      country: null,
      countryError: true,
    };
  } catch {
    return {
      country: null,
      countryError: true,
    };
  }
}

export async function fetchCourseData(): Promise<CourseDataResult> {
  const [courses, countryResult] = await Promise.all([
    fetchCourses(),
    fetchCountry(),
  ]);

  return {
    courses,
    country: countryResult.country,
    countryError: countryResult.countryError,
  };
}
