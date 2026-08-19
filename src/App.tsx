// src/App.tsx

import { useCallback, useEffect, useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CourseCard from "./components/CourseCard";
import SkeletonCard from "./components/SkeletonCard";
import Footer from "./components/Footer";

import { fetchCourseData, type Course, type Country } from "./api/courses";

import { getPriceValue } from "./utils/formatters";

import "./App.css";

export default function App() {
  const [courses, setCourses] = useState<Course[]>([]);

  const [country, setCountry] = useState<Country>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const [countryError, setCountryError] = useState(false);

  const [search, setSearch] = useState("");

  const [sort, setSort] = useState<"default" | "low" | "high">("default");

  const [retry, setRetry] = useState(0);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(false);
    setCountryError(false);

    try {
      const result = await fetchCourseData();

      setCourses(result.courses);
      setCountry(result.country);
      setCountryError(result.countryError);
    } catch {
      setError(true);
      setCourses([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData, retry]);

  const visibleCourses = useMemo(() => {
    let result = [...courses];

    const query = search.trim().toLowerCase();

    if (query) {
      result = result.filter(
        (course) =>
          course.courseName.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.mainCategory.toLowerCase().includes(query) ||
          course.shortCourse.toLowerCase().includes(query) ||
          course.courseCode.toLowerCase().includes(query)
      );
    }

    if (sort !== "default") {
      result.sort((a, b) => {
        const aPrice = getPriceValue(a, country);

        const bPrice = getPriceValue(b, country);

        return sort === "low" ? aPrice - bPrice : bPrice - aPrice;
      });
    }

    return result;
  }, [courses, search, sort, country]);

  return (
    <div id="top" className="skillpath">
      <Navbar />

      <main>
        <Hero />

        <section id="courses" className="courses-section">
          <div className="section-heading">
            <div>
              <div className="section-label">EXPLORE</div>

              <h2>Your courses.</h2>
            </div>

            <p>
              Learn less theory.
              <br />
              Build more things.
            </p>
          </div>

          <div className="controls">
            <div className="search-box">
              <span aria-hidden="true">⌕</span>

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search courses"
                aria-label="Search courses"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <div className="sort-buttons">
              <button
                type="button"
                className={sort === "default" ? "active" : ""}
                onClick={() => setSort("default")}
              >
                Latest
              </button>

              <button
                type="button"
                className={sort === "low" ? "active" : ""}
                onClick={() => setSort("low")}
              >
                Low → High
              </button>

              <button
                type="button"
                className={sort === "high" ? "active" : ""}
                onClick={() => setSort("high")}
              >
                High → Low
              </button>
            </div>
          </div>

          {countryError && (
            <div className="country-warning">
              <span>!</span>

              <p>
                Courses loaded, but we couldn't determine your region. Prices
                are temporarily unavailable.
              </p>
            </div>
          )}

          {loading && (
            <div className="course-grid">
              {Array.from({
                length: 6,
              }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          )}

          {!loading && error && (
            <div className="state-box">
              <div className="state-icon">!</div>

              <h3>Courses couldn't load.</h3>

              <p>The course service isn't responding right now.</p>

              <button
                type="button"
                className="retry-button"
                onClick={() => setRetry((value) => value + 1)}
              >
                Try again ↗
              </button>
            </div>
          )}

          {!loading && !error && visibleCourses.length === 0 && (
            <div className="state-box">
              <div className="state-icon">∅</div>

              <h3>No courses found.</h3>

              <p>Try a different search.</p>

              <button
                type="button"
                className="retry-button"
                onClick={() => setSearch("")}
              >
                Clear search
              </button>
            </div>
          )}

          {!loading && !error && visibleCourses.length > 0 && (
            <div className="course-grid">
              {visibleCourses.map((course, index) => (
                <CourseCard
                  key={course.mangoId || course.courseCode}
                  course={course}
                  country={country}
                  index={index}
                  radius={28}
                />
              ))}
            </div>
          )}
        </section>

        <section id="about" className="about-section">
          <div className="about-card">
            <div className="about-small">SKILLPATH</div>

            <h2>
              Don't just
              <br />
              <span>consume.</span>
              <br />
              Start Creating.
            </h2>

            <div className="about-bottom">
              <p>Skills become useful when you actually use them.</p>

              <a href="#courses">Explore courses ↗</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
