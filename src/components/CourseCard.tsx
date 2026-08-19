// src/components/CourseCard.tsx

import type { Course, Country } from "../api/courses";

import { formatPrice } from "../utils/formatters";

type Props = {
  course: Course;
  country: Country;
  index: number;
  radius: number;
};

export default function CourseCard({ course, country, index, radius }: Props) {
  const variants = ["white", "dark", "purple", "white", "yellow", "dark"];

  const variant = variants[index % variants.length];

  const price = formatPrice(course, country);

  return (
    <article
      className={`course-card ${variant}`}
      style={
        {
          "--radius": `${radius}px`,
          animationDelay: `${index * 70}ms`,
        } as React.CSSProperties
      }
    >
      <div className="card-top">
        <span className="category-pill">{course.mainCategory}</span>

        {course.refundable && (
          <span className="refund-pill">
            <span />
            Refundable
          </span>
        )}
      </div>

      <div className="card-main">
        <div className="course-type">{course.courseType}</div>

        <h3>{course.courseName}</h3>

        <p>{course.description}</p>
      </div>

      <div className="card-meta">
        <span>{course.shortCourse}</span>

        <span className="meta-dot">•</span>

        <span>{course.courseCode}</span>
      </div>

      <div className="card-footer">
        <div>
          {price ? <strong>{price}</strong> : <small>Price unavailable</small>}
        </div>

        <button
          type="button"
          className="round-arrow"
          aria-label={`Open ${course.courseName}`}
        >
          ↗
        </button>
      </div>
    </article>
  );
}
