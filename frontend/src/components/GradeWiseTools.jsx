import React, { useState } from 'react';

const GradeWiseTools = () => {
  const [activeView, setActiveView] = useState('cards'); // 'cards', 'timeline', 'table'
  const [expandedGrade, setExpandedGrade] = useState(null);

  const gradeTools = [
    {
      grade: "Class 1",
      icon: "🔰",
      title: "FOUNDATION STARTER",
      category: "Beginner",
      level: 1,
      tools: [
        { name: "Windows 10", type: "os", essential: true },
        { name: "MS Paint", type: "creative", essential: true },
        { name: "Notepad", type: "productivity", essential: true },
        { name: "PictoBlox Junior Blocks", type: "programming", essential: true },
        { name: "Quarky Robot", type: "hardware", essential: true }
      ],
      description: "Introduction to basic computing and visual programming",
      color: "from-blue-500 to-cyan-500",
      skills: ["Mouse Control", "Basic Shapes", "Simple Commands"]
    },
    {
      grade: "Class 2", 
      icon: "🚀",
      title: "CREATIVE EXPLORER",
      category: "Beginner",
      level: 2,
      tools: [
        { name: "Windows 10", type: "os", essential: true },
        { name: "Tux Paint", type: "creative", essential: true },
        { name: "Notepad", type: "productivity", essential: true },
        { name: "PictoBlox Junior Blocks", type: "programming", essential: true },
        { name: "Quarky Robot", type: "hardware", essential: true }
      ],
      description: "Enhanced creativity tools and basic robotics",
      color: "from-green-500 to-emerald-500",
      skills: ["Digital Art", "Pattern Recognition", "Block Sequencing"]
    },
    {
      grade: "Class 3",
      icon: "🎯",
      title: "DIGITAL BUILDER",
      category: "Intermediate",
      level: 3,
      tools: [
        { name: "Windows 10", type: "os", essential: true },
        { name: "MS Paint", type: "creative", essential: false },
        { name: "Tux Paint", type: "creative", essential: true },
        { name: "Notepad", type: "productivity", essential: true },
        { name: "Word", type: "office", essential: true },
        { name: "Excel", type: "office", essential: true },
        { name: "PictoBlox Blocks Cooling", type: "programming", essential: true },
        { name: "Quarky Robot", type: "hardware", essential: true }
      ],
      description: "Office tools introduction and advanced block programming",
      color: "from-purple-500 to-pink-500",
      skills: ["Document Creation", "Spreadsheet Basics", "Logical Thinking"]
    },
    {
      grade: "Class 4",
      icon: "🌟",
      title: "CODE INNOVATOR", 
      category: "Intermediate",
      level: 4,
      tools: [
        { name: "Windows 11", type: "os", essential: true },
        { name: "Scratch Programming", type: "programming", essential: true },
        { name: "Word", type: "office", essential: true },
        { name: "Excel", type: "office", essential: true },
        { name: "PictoBlox Advanced Blocks", type: "programming", essential: true },
        { name: "Quarky Robot Pro", type: "hardware", essential: true }
      ],
      description: "Professional tools and advanced visual programming",
      color: "from-orange-500 to-red-500",
      skills: ["Game Development", "Data Organization", "Problem Solving"]
    },
    {
      grade: "Class 5",
      icon: "⚡",
      title: "AI PIONEER",
      category: "Advanced",
      level: 5,
      tools: [
        { name: "Windows 11", type: "os", essential: true },
        { name: "Python Turtle", type: "programming", essential: true },
        { name: "PowerPoint", type: "office", essential: true },
        { name: "PictoBlox AI Blocks", type: "programming", essential: true },
        { name: "Quarky AI Robot", type: "hardware", essential: true }
      ],
      description: "Introduction to AI concepts and text-based programming",
      color: "from-indigo-500 to-blue-500",
      skills: ["Python Basics", "AI Concepts", "Presentation Skills"]
    },
    {
      grade: "Class 6",
      icon: "🔬",
      title: "TECH SCIENTIST",
      category: "Advanced",
      level: 6,
      tools: [
        { name: "Windows 11", type: "os", essential: true },
        { name: "Python IDLE", type: "programming", essential: true },
        { name: "Google Docs", type: "collaboration", essential: true },
        { name: "PictoBlox Python Mode", type: "programming", essential: true },
        { name: "Advanced Robotics Kit", type: "hardware", essential: true }
      ],
      description: "Professional development tools and advanced robotics",
      color: "from-teal-500 to-green-500",
      skills: ["Python Programming", "Cloud Collaboration", "Hardware Integration"]
    }
  ];

  const toolTypeColors = {
    os: "bg-blue-100 text-blue-800",
    creative: "bg-purple-100 text-purple-800",
    productivity: "bg-green-100 text-green-800",
    programming: "bg-orange-100 text-orange-800",
    hardware: "bg-red-100 text-red-800",
    office: "bg-indigo-100 text-indigo-800",
    collaboration: "bg-teal-100 text-teal-800"
  };

  const ViewToggle = () => (
    <div className="flex justify-center mb-8">
      <div className="bg-white rounded-2xl shadow-lg p-2 flex gap-2">
        {[
          { id: 'cards', label: 'Cards', icon: '🃏' },
          { id: 'timeline', label: 'Timeline', icon: '📅' },
          { id: 'table', label: 'Table', icon: '📊' }
        ].map((view) => (
          <button
            key={view.id}
            onClick={() => setActiveView(view.id)}
            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
              activeView === view.id 
                ? 'bg-linear-to-r from-[#0b234a] to-[#E22213] text-white shadow-lg' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <span>{view.icon}</span>
            {view.label}
          </button>
        ))}
      </div>
    </div>
  );

  const ToolCard = ({ grade, index }) => (
    <div 
      className={`bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group cursor-pointer ${
        expandedGrade === index ? 'ring-2 ring-blue-500' : ''
      }`}
      onClick={() => setExpandedGrade(expandedGrade === index ? null : index)}
    >
      {/* Header with Gradient */}
      <div className={`bg-linear-to-r ${grade.color} p-6 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{grade.icon}</span>
              <div>
                <h3 className="text-xl font-bold">{grade.grade}</h3>
                <p className="text-white/80 text-sm">{grade.category}</p>
              </div>
            </div>
            <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-bold">
              Level {grade.level}
            </span>
          </div>
          <h4 className="text-lg font-semibold opacity-90">{grade.title}</h4>
          <p className="text-sm opacity-80 mt-1">{grade.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Skills */}
        <div className="mb-4">
          <h5 className="font-bold text-gray-700 mb-2">Skills Developed:</h5>
          <div className="flex flex-wrap gap-2">
            {grade.skills.map((skill, skillIndex) => (
              <span 
                key={skillIndex}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools List */}
        <div className="space-y-3">
          <h5 className="font-bold text-gray-700 mb-2">Tools & Software:</h5>
          {grade.tools.slice(0, expandedGrade === index ? grade.tools.length : 4).map((tool, toolIndex) => (
            <div 
              key={toolIndex}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-linear-to-r hover:from-gray-100 hover:to-white transition-all duration-300 group-hover:shadow-md"
            >
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full bg-linear-to-r ${grade.color} mr-3`}></div>
                <span className="text-gray-800 font-medium text-sm">{tool.name}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${toolTypeColors[tool.type]}`}>
                {tool.type}
              </span>
            </div>
          ))}
        </div>

        {grade.tools.length > 4 && (
          <button 
            className="w-full mt-4 py-2 text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setExpandedGrade(expandedGrade === index ? null : index);
            }}
          >
            {expandedGrade === index ? 'Show Less' : `Show ${grade.tools.length - 4} More Tools`}
          </button>
        )}

        {/* Progress Indicator */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Learning Progress</span>
            <span className="font-bold">Level {grade.level}/6</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full bg-linear-to-r ${grade.color} transition-all duration-1000`}
              style={{ width: `${(grade.level / 6) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );

  const TimelineView = () => (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-[#0b234a] to-[#E22213] hidden md:block"></div>
      
      {gradeTools.map((grade, index) => (
        <div 
          key={index}
          className={`flex flex-col md:flex-row items-center mb-12 ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          {/* Content */}
          <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-4 md:mb-0`}>
            <ToolCard grade={grade} index={index} />
          </div>

          {/* Timeline Dot */}
          <div className="hidden md:flex relative w-2/12 justify-center">
            <div className={`w-8 h-8 rounded-full bg-linear-to-r ${grade.color} border-4 border-white shadow-lg z-10`}></div>
          </div>

          {/* Empty Space for Desktop */}
          <div className="hidden md:block w-5/12"></div>
        </div>
      ))}
    </div>
  );

  const TableView = () => (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
      <div className="bg-linear-to-r from-[#0b234a] to-[#E22213] p-6 text-white">
        <h3 className="text-2xl font-bold text-center">Comprehensive Tools Overview</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left font-bold text-gray-900">Grade & Level</th>
              <th className="px-6 py-4 text-left font-bold text-gray-900">Core Tools</th>
              <th className="px-6 py-4 text-left font-bold text-gray-900">Tool Types</th>
              <th className="px-6 py-4 text-left font-bold text-gray-900">Skills Focus</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {gradeTools.map((grade, index) => (
              <tr 
                key={index} 
                className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                onClick={() => setExpandedGrade(expandedGrade === index ? null : index)}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{grade.icon}</span>
                    <div>
                      <div className="font-bold text-gray-900">{grade.grade}</div>
                      <div className="text-sm text-gray-600">{grade.title}</div>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold text-white bg-linear-to-r ${grade.color}`}>
                        Level {grade.level}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    {grade.tools.filter(tool => tool.essential).map((tool, toolIndex) => (
                      <div key={toolIndex} className="text-sm text-gray-700 flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-linear-to-r ${grade.color}`}></div>
                        {tool.name}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {[...new Set(grade.tools.map(tool => tool.type))].map((type, typeIndex) => (
                      <span 
                        key={typeIndex}
                        className={`px-2 py-1 rounded-full text-xs font-bold ${toolTypeColors[type]}`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-600 space-y-1">
                    {grade.skills.slice(0, 2).map((skill, skillIndex) => (
                      <div key={skillIndex}>• {skill}</div>
                    ))}
                    {grade.skills.length > 2 && (
                      <div className="text-blue-600 font-medium">
                        +{grade.skills.length - 2} more
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-linear-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#0b234a] to-[#E22213] bg-clip-text text-transparent mb-6">
            Progressive Learning Pathway
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully curated technology stack that grows with students' capabilities from foundation to advanced AI concepts
          </p>
        </div>

        {/* View Toggle */}
        <ViewToggle />

        {/* Content based on active view */}
        {activeView === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gradeTools.map((grade, index) => (
              <ToolCard key={index} grade={grade} index={index} />
            ))}
          </div>
        )}

        {activeView === 'timeline' && <TimelineView />}

        {activeView === 'table' && <TableView />}

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-[#0b234a] mb-2">{gradeTools.length}</div>
            <div className="text-gray-600">Grade Levels</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-[#E22213] mb-2">
              {gradeTools.reduce((acc, grade) => acc + grade.tools.length, 0)}
            </div>
            <div className="text-gray-600">Total Tools</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-[#0b234a] mb-2">6+</div>
            <div className="text-gray-600">Skill Categories</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-[#E22213] mb-2">100%</div>
            <div className="text-gray-600">Progressive Learning</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GradeWiseTools;