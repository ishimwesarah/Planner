const durations = ["All", "Daily", "Weekly", "Monthly", "Yearly"];

// eslint-disable-next-line react/prop-types
export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="filter-bar">
      {durations.map((d) => (
        <button
          key={d}
          className={filter === d ? "active" : ""}
          onClick={() => setFilter(d)}
        >
          {d}
        </button>
      ))}
    </div>
  );
}
