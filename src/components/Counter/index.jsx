import "./counter.css";

export function Counter({ doneCount, totalCount }) {
  return (
    <section className="daily-progress">
      <p>Hoje: {doneCount} de {totalCount}</p>
      <progress value={doneCount} max={totalCount}></progress>
    </section>
  );
}
