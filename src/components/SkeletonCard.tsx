// src/components/SkeletonCard.tsx

export default function SkeletonCard() {
  return (
    <div className="sk-card">
      <div className="sk sk-pill" />

      <div className="sk sk-title" />

      <div className="sk sk-line" />

      <div className="sk sk-line short" />

      <div className="sk-bottom">
        <div className="sk sk-price" />
        <div className="sk sk-circle" />
      </div>
    </div>
  );
}
