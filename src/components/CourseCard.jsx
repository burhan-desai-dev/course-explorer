// Har level ka apna rang. Object use karna if/else se saaf hota hai:
// levelStyles["Beginner"] -> "bg-green-100 text-green-700"
const levelStyles = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-amber-100 text-amber-700",
  Advanced: "bg-red-100 text-red-700",
};

// Props:
// course       -> ek course ka object
// isSaved      -> true/false: kya ye course saved hai
// onToggleSave -> parent ka function, save/unsave karne ke liye
function CourseCard({ course, isSaved, onToggleSave }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 p-5 flex flex-col">
      {/* Upar: level badge aur save (heart) button */}
      <div className="flex items-start justify-between">
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${levelStyles[course.level]}`}
        >
          {course.level}
        </span>

        {/* Conditional rendering: saved ho to bhara dil (♥), warna khali (♡) */}
        <button
          onClick={() => onToggleSave(course.id)}
          className="text-2xl text-pink-500 hover:scale-110 transition-transform"
          title={isSaved ? "Remove from saved" : "Save course"}
        >
          {isSaved ? "♥" : "♡"}
        </button>
      </div>

      <h3 className="text-lg font-bold text-gray-800 mt-3">{course.title}</h3>
      <p className="text-sm text-gray-500 mt-1">by {course.instructor}</p>

      {/* Neeche: category, duration aur rating. mt-auto isay card ke bottom par rakhta hai */}
      <div className="flex items-center justify-between text-sm text-gray-600 mt-auto pt-4">
        <span>📚 {course.category}</span>
        <span>⏱ {course.hours}h</span>
        <span>⭐ {course.rating}</span>
      </div>
    </div>
  );
}

export default CourseCard;