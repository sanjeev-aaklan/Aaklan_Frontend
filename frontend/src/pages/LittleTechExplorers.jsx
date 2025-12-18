import React from 'react'

const LittleTechExplorers = () => {
  const books = [
    {
      id: 1,
      grade: "Grade 1",
      title: "Little Tech Explorers - Grade 1",
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=500&fit=crop",
      description: "Introduction to basic computing concepts, mouse skills, and simple digital art",
      chapters: 12,
      pages: 96,
      skills: ["Mouse Control", "Basic Shapes", "Digital Drawing"],
      color: "#0B234A"
    },
    {
      id: 2,
      grade: "Grade 2",
      title: "Little Tech Explorers - Grade 2",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop",
      description: "Basic keyboard skills, introduction to coding concepts through games",
      chapters: 15,
      pages: 112,
      skills: ["Keyboard Skills", "Simple Algorithms", "Block Coding"],
      color: "#EA8E0A"
    },
    {
      id: 3,
      grade: "Grade 3",
      title: "Little Tech Explorers - Grade 3",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=500&fit=crop",
      description: "Introduction to Scratch programming, digital storytelling, and animations",
      chapters: 18,
      pages: 128,
      skills: ["Scratch Basics", "Animation", "Storytelling"],
      color: "#0B234A"
    },
    {
      id: 4,
      grade: "Grade 4",
      title: "Little Tech Explorers - Grade 4",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      description: "Advanced Scratch projects, introduction to web design concepts",
      chapters: 20,
      pages: 144,
      skills: ["Game Development", "HTML Basics", "CSS Introduction"],
      color: "#EA8E0A"
    },
    {
      id: 5,
      grade: "Grade 5",
      title: "Little Tech Explorers - Grade 5",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop",
      description: "Python programming basics, robotics concepts, and app development",
      chapters: 22,
      pages: 160,
      skills: ["Python Basics", "Robotics", "App Design"],
      color: "#E22213"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div 
          className="rounded-2xl p-8 mb-12 text-center shadow-xl"
          style={{ 
            background: 'linear-gradient(135deg, #0B234A 0%, #1a3a6c 100%)',
            borderBottom: '6px solid #EA8E0A'
          }}
        >
          <h1 
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
            style={{ color: '#EA8E0A' }}
          >
            Little Tech Explorers
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto">
            Interactive technology curriculum for young learners from Grade 1 to Grade 5
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {books.map((book) => (
            <div 
              key={book.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Grade Badge */}
              <div 
                className="px-4 py-2 text-center font-bold text-lg"
                style={{ backgroundColor: book.color, color: 'white' }}
              >
                {book.grade}
              </div>

              {/* Book Image */}
              <div className="p-6">
                <div className="relative overflow-hidden rounded-lg mb-4 shadow-md">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundColor: book.color }}
                  />
                </div>

                {/* Book Title */}
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ color: '#0B234A' }}
                >
                  {book.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {book.description}
                </p>

                {/* Specifications */}
                <div className="mb-4 p-3 rounded-lg bg-gray-50">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Chapters:</span>
                    <span className="font-semibold" style={{ color: '#0B234A' }}>
                      {book.chapters}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pages:</span>
                    <span className="font-semibold" style={{ color: '#0B234A' }}>
                      {book.pages}
                    </span>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: '#E22213' }}>
                    Key Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {book.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs rounded-full font-medium"
                        style={{
                          backgroundColor: `${book.color}15`,
                          color: book.color,
                          border: `1px solid ${book.color}30`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Details Button */}
              <div className="p-4 border-t border-gray-100">
                <button 
                  className="w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: '#EA8E0A',
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0B234A';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#EA8E0A';
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#0B234A' }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#EA8E0A' }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E22213' }} />
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Each book in the Little Tech Explorers series is designed to build upon previous knowledge,
            creating a comprehensive technology education journey from basic digital literacy to
            introductory programming concepts.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LittleTechExplorers