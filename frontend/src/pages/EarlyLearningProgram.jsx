import React from 'react'

const EarlyLearningProgram = () => {
  const programs = [
    {
      id: 1,
      grade: "Nursery",
      title: "Early Tech Starters - Nursery",
      ageGroup: "3-4 Years",
      image: "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?w=400&h=500&fit=crop",
      description: "Introduction to digital devices through interactive touch-based activities and colorful digital interfaces",
      modules: 8,
      activities: 40,
      duration: "8 months",
      learningOutcomes: [
        "Touch screen navigation",
        "Color and shape recognition",
        "Basic cause and effect"
      ],
      color: "#0B234A"
    },
    {
      id: 2,
      grade: "LKG",
      title: "Digital Discovery - LKG",
      ageGroup: "4-5 Years",
      image: "https://images.unsplash.com/photo-1516627145497-ae69578c5a32?w=400&h=500&fit=crop",
      description: "Developing fine motor skills through digital drawing and introduction to educational apps",
      modules: 10,
      activities: 60,
      duration: "10 months",
      learningOutcomes: [
        "Basic digital art",
        "Simple puzzle solving",
        "Audio-visual coordination"
      ],
      color: "#EA8E0A"
    },
    {
      id: 3,
      grade: "UKG",
      title: "Tech Foundation - UKG",
      ageGroup: "5-6 Years",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=500&fit=crop",
      description: "Introduction to basic computer operations, educational games, and simple digital storytelling",
      modules: 12,
      activities: 80,
      duration: "12 months",
      learningOutcomes: [
        "Mouse and keyboard basics",
        "Digital story creation",
        "Pattern recognition"
      ],
      color: "#E22213"
    }
  ]

  const features = [
    {
      icon: "🎨",
      title: "Interactive Learning",
      description: "Hands-on digital activities designed for young minds",
      color: "#0B234A"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Parent-Child Activities",
      description: "Special activities for learning together at home",
      color: "#EA8E0A"
    },
    {
      icon: "📱",
      title: "Age-Appropriate Apps",
      description: "Curated educational apps and digital tools",
      color: "#E22213"
    },
    {
      icon: "🏆",
      title: "Progress Tracking",
      description: "Regular assessment and milestone celebrations",
      color: "#0B234A"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-red-50 p-4 md:p-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #0B234A 0%, #EA8E0A 50%, #E22213 100%)',
              opacity: 0.9
            }}
          />
          <div className="relative p-8 md:p-12 text-center">
            <h1 
              className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
              style={{ color: 'white' }}
            >
              Early Learning Program
            </h1>
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
                <span className="text-xl font-semibold text-white">Nursery</span>
              </div>
              <div className="text-2xl text-white">→</div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
                <span className="text-xl font-semibold text-white">LKG</span>
              </div>
              <div className="text-2xl text-white">→</div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
                <span className="text-xl font-semibold text-white">UKG</span>
              </div>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A progressive digital literacy program designed specifically for preschool learners
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#0B234A' }}>
            Program Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4"
                style={{ borderTopColor: feature.color }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: feature.color }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {programs.map((program) => (
            <div 
              key={program.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Grade Header */}
              <div 
                className="px-6 py-4 relative"
                style={{ backgroundColor: program.color }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{program.grade}</h2>
                    <p className="text-white/80">Age: {program.ageGroup}</p>
                  </div>
                  <div className="text-white text-3xl">
                    {program.id === 1 ? "🌸" : program.id === 2 ? "🌼" : "🌺"}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Image */}
                <div className="mb-6">
                  <div className="relative overflow-hidden rounded-lg shadow-md">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{ backgroundColor: program.color }}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0B234A' }}>
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {program.description}
                </p>

                {/* Program Details */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 rounded-lg bg-gray-50">
                    <div className="text-lg font-bold" style={{ color: program.color }}>
                      {program.modules}
                    </div>
                    <div className="text-xs text-gray-500">Modules</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-gray-50">
                    <div className="text-lg font-bold" style={{ color: program.color }}>
                      {program.activities}
                    </div>
                    <div className="text-xs text-gray-500">Activities</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-gray-50">
                    <div className="text-lg font-bold" style={{ color: program.color }}>
                      {program.duration}
                    </div>
                    <div className="text-xs text-gray-500">Duration</div>
                  </div>
                </div>

                {/* Learning Outcomes */}
                <div>
                  <h4 className="font-bold mb-3" style={{ color: '#E22213' }}>
                    Learning Outcomes:
                  </h4>
                  <ul className="space-y-2">
                    {program.learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: program.color }}
                          />
                        </div>
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button 
                  className="w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                  style={{
                    backgroundColor: program.color,
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Explore {program.grade} Program
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Age Progression Chart */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#0B234A' }}>
            Learning Journey Progression
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-#0B234A via-#EA8E0A to-#E22213 transform -translate-y-1/2" />
            
            {/* Milestones */}
            <div className="relative flex justify-between items-center">
              {programs.map((program, index) => (
                <div key={program.id} className="text-center z-10">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl border-4 border-white"
                    style={{ backgroundColor: program.color }}
                  >
                    <span className="text-2xl font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: program.color }}>
                    {program.grade}
                  </h3>
                  <p className="text-sm text-gray-600">{program.ageGroup}</p>
                </div>
              ))}
            </div>

            {/* Progress Labels */}
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-semibold mb-2" style={{ color: '#0B234A' }}>
                  Foundation Building
                </h4>
                <p className="text-sm text-gray-600">
                  Basic digital exposure and sensory development
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🚀</div>
                <h4 className="font-semibold mb-2" style={{ color: '#EA8E0A' }}>
                  Skill Development
                </h4>
                <p className="text-sm text-gray-600">
                  Motor skills and logical thinking enhancement
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎓</div>
                <h4 className="font-semibold mb-2" style={{ color: '#E22213' }}>
                  School Readiness
                </h4>
                <p className="text-sm text-gray-600">
                  Prepared for formal tech education in Grade 1
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="rounded-3xl p-8 md:p-12 text-center shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #0B234A 0%, #1a3a6c 100%)',
            border: '4px solid #EA8E0A'
          }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Start Your Child's Digital Journey
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of parents who have helped their children build a strong foundation in technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: '#EA8E0A',
                color: 'white'
              }}
            >
              Download Brochure
            </button>
            <button 
              className="px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300 hover:bg-white/10"
              style={{
                borderColor: '#E22213',
                color: 'white'
              }}
            >
              Schedule Demo Class
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarlyLearningProgram