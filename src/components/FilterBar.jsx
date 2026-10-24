// Ye lists component ke BAHAR hain kyunke ye kabhi badalti nahi.
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

// Sort ke options: value (code ke liye) aur label (user ko dikhane ke liye)
const sortOptions = [
  { value: "default", label: "Default" },
  { value: "rating", label: "Top Rated" },
  { value: "hours", label: "Shortest First" },
  { value: "title", label: "Title (A-Z)" },
];

// Ye component sirf controls dikhata hai. Saari state parent (App) mein hai,
// ye sirf props se values leta hai aur functions se parent ko batata hai.
function FilterBar({
  search,
  onSearchChange,
  level,
  onLevelChange,
  sort,
  onSortChange,
  showSavedOnly,
  onToggleSavedOnly,
  savedCount,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
      {/* Search box: controlled input (value + onChange) */}
      <input
        type="text"
        placeholder="Search by course or instructor..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
      />

      {/* Level ke buttons: .map() se har level ka ek button */}
      <div className="flex flex-wrap gap-2">
        {levels.map((name) => (
          <button
            key={name}
            onClick={() => onLevelChange(name)}
            // Conditional styling: selected level ko violet rang, baaqi ko grey
            className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
              level === name
                ? "bg-violet-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Sort dropdown aur Saved toggle ek line mein */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              Sort: {option.label}
            </option>
          ))}
        </select>

        {/* Saved only toggle button */}
        <button
          onClick={onToggleSavedOnly}
          className={`px-4 py-1 rounded-full text-sm font-medium border transition-colors ${
            showSavedOnly
              ? "bg-pink-500 text-white border-pink-500"
              : "bg-white text-pink-500 border-pink-300 hover:bg-pink-50"
          }`}
        >
          ♥ Saved ({savedCount})
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
