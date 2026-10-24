import { useState } from "react";

// Data aur components import. Naam Capital mein, path file ke naam jaisa.
import courses from "./data/courses";
import FilterBar from "./components/FilterBar";
import CourseCard from "./components/CourseCard";

function App() {
  // ---------- STATES ----------
  const [search, setSearch] = useState(""); // search box ka text
  const [level, setLevel] = useState("All"); // selected level
  const [sort, setSort] = useState("default"); // selected sort
  const [showSavedOnly, setShowSavedOnly] = useState(false); // saved-only toggle
  const [savedIds, setSavedIds] = useState([]); // saved courses ki ids ki list

  // ---------- FUNCTIONS ----------

  // Course save/unsave (toggle)
  function toggleSave(id) {
    if (savedIds.includes(id)) {
      // Pehle se saved hai to list se hata do
      setSavedIds(savedIds.filter((savedId) => savedId !== id));
    } else {
      // Saved nahi hai to list mein jod do (nayi copy bana kar)
      setSavedIds([...savedIds, id]);
    }
  }

  // Saare filters reset karna
  function clearFilters() {
    setSearch("");
    setLevel("All");
    setSort("default");
    setShowSavedOnly(false);
  }

  // ---------- DERIVED DATA ----------
  // Ye 3 cheezein state mein NAHI rakhi, hamesha state se calculate hoti hain.

  // Step 1: FILTER. Sirf wo courses rakho jo teeno conditions par pura utrein
  let visibleCourses = courses.filter((course) => {
    // toLowerCase(): chhote/bade letters ka farq khatam, "REACT" bhi "react" dhoondhe
    const text = search.toLowerCase();
    const matchesSearch =
      course.title.toLowerCase().includes(text) ||
      course.instructor.toLowerCase().includes(text);

    // "All" ho to koi bhi level chalega
    const matchesLevel = level === "All" || course.level === level;

    // Saved-only off ho to sab chalega, on ho to sirf saved
    const matchesSaved = !showSavedOnly || savedIds.includes(course.id);

    // Teeno true hon tabhi course list mein rahega
    return matchesSearch && matchesLevel && matchesSaved;
  });

  // Step 2: SORT. [...visibleCourses] se copy banai taake asli data na badle
  if (sort === "rating") {
    visibleCourses = [...visibleCourses].sort((a, b) => b.rating - a.rating);
  } else if (sort === "hours") {
    visibleCourses = [...visibleCourses].sort((a, b) => a.hours - b.hours);
  } else if (sort === "title") {
    visibleCourses = [...visibleCourses].sort((a, b) =>
      a.title.localeCompare(b.title),
    );
  }

  // Empty state ka sahi message: do alag wajah ho sakti hain
  const noSavedYet = showSavedOnly && savedIds.length === 0;

  // ---------- UI ----------
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            🎓 Course Explorer
          </h1>
          <p className="text-gray-500">
            Find the right course and save your favorites
          </p>
        </div>

        {/* Controls: har value aur function props se bheja ja raha hai */}
        <FilterBar
          search={search}
          onSearchChange={setSearch}
          level={level}
          onLevelChange={setLevel}
          sort={sort}
          onSortChange={setSort}
          showSavedOnly={showSavedOnly}
          onToggleSavedOnly={() => setShowSavedOnly(!showSavedOnly)}
          savedCount={savedIds.length}
        />

        {/* Results count */}
        <p className="text-sm text-gray-500">
          Showing {visibleCourses.length} of {courses.length} courses
        </p>

        {/* Conditional rendering: list khali ho to empty state, warna cards */}
        {visibleCourses.length === 0 ? (
          <div className="text-center bg-white rounded-2xl shadow-sm p-10">
            <p className="text-5xl mb-3">{noSavedYet ? "💔" : "🔍"}</p>
            <p className="text-gray-600 font-medium">
              {noSavedYet
                ? "You haven't saved any courses yet."
                : "No courses match your search."}
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 bg-violet-500 hover:bg-violet-600 text-white px-5 py-2 rounded-lg text-sm font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* .map(): har course ke liye ek CourseCard. key = unique id */}
            {visibleCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                isSaved={savedIds.includes(course.id)}
                onToggleSave={toggleSave}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
