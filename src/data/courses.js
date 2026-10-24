// Ye hamara "fake database" hai: courses ki list (array of objects).
// Asli apps mein ye data server/API se aata hai (Week 5 mein seekhenge).
// Data ko alag file mein rakhne se App.jsx saaf rehta hai.

const courses = [
  {
    id: 1,
    title: "HTML & CSS Basics",
    instructor: "Ayesha Khan",
    level: "Beginner",
    category: "Web",
    hours: 8,
    rating: 4.6,
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    instructor: "Ali Raza",
    level: "Beginner",
    category: "Web",
    hours: 14,
    rating: 4.8,
  },
  {
    id: 3,
    title: "React for Beginners",
    instructor: "Sara Ahmed",
    level: "Intermediate",
    category: "Web",
    hours: 12,
    rating: 4.7,
  },
  {
    id: 4,
    title: "Advanced React Patterns",
    instructor: "Hamza Malik",
    level: "Advanced",
    category: "Web",
    hours: 10,
    rating: 4.5,
  },
  {
    id: 5,
    title: "Python Fundamentals",
    instructor: "Bilal Hussain",
    level: "Beginner",
    category: "Programming",
    hours: 16,
    rating: 4.9,
  },
  {
    id: 6,
    title: "Data Structures in Python",
    instructor: "Noor Fatima",
    level: "Intermediate",
    category: "Programming",
    hours: 20,
    rating: 4.4,
  },
  {
    id: 7,
    title: "SQL & Databases",
    instructor: "Usman Tariq",
    level: "Intermediate",
    category: "Data",
    hours: 9,
    rating: 4.6,
  },
  {
    id: 8,
    title: "Machine Learning Intro",
    instructor: "Dr. Zainab Ali",
    level: "Advanced",
    category: "Data",
    hours: 24,
    rating: 4.3,
  },
  {
    id: 9,
    title: "UI/UX Design Basics",
    instructor: "Hira Sheikh",
    level: "Beginner",
    category: "Design",
    hours: 7,
    rating: 4.2,
  },
  {
    id: 10,
    title: "Tailwind CSS Mastery",
    instructor: "Ali Raza",
    level: "Intermediate",
    category: "Web",
    hours: 6,
    rating: 4.7,
  },
];

// export default: taake dusri files is data ko import kar sakein
export default courses;
