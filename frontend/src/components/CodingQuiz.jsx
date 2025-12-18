export default function CodingQuiz() {
  const categories = [
    { title: "Web Development", topics: 3, icon: "💻", color: "bg-blue-600" },
    { title: "Python", topics: 3, icon: "🐍", color: "bg-cyan-500" },
    { title: "Scratch", topics: 1, icon: "🧩", color: "bg-green-500" },
    { title: "Code.org", topics: 1, icon: "🌐", color: "bg-teal-500" },
    { title: "MIT (App & Game Development)", topics: 1, icon: "📱", color: "bg-yellow-500" },
    { title: "Computer Basic", topics: 2, icon: "🖥️", color: "bg-pink-500" },
    { title: "MS Office", topics: 1, icon: "📄", color: "bg-red-500" },
    { title: "Data Science", topics: 1, icon: "🤖", color: "bg-purple-600" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-16">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Coding Quiz For Kids</h1>
          <p className="text-gray-600 mt-3">
            Collection of interactive coding quiz for kids to assess and acquire computer science knowledge.
          </p>
        </div>

      
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, i) => (
            <div
              key={i}
              className={`${category.color} text-white p-6 rounded-xl shadow hover:-translate-y-1 transition cursor-pointer`}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h2 className="text-xl font-semibold">{category.title}</h2>
              <p className="text-sm mt-1">({category.topics}) Topics</p>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
