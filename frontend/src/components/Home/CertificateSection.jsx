import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { 
  Trophy, 
  Zap, 
  Monitor, 
  Rocket, 
  Users, 
  Target, 
  Award,
  Share2,
  Printer,
  X,
  Clock,
  Lightbulb,
  BookOpen,
  Medal,
  Star,
  BadgeCheck
} from 'lucide-react';

export default function CertificateSection() {
  const navigate = useNavigate();
  const [showCertificate, setShowCertificate] = useState(false);
  const [selectedCertType, setSelectedCertType] = useState('hackathon'); // 'hackathon' or 'course'

  // Hackathon winners data
  const hackathonWinners = [
    { id: 1, name: "Team Innovators", position: "🥇 1st Prize", project: "AI Healthcare App", date: "Dec 2024" },
    { id: 2, name: "Code Warriors", position: "🥈 2nd Prize", project: "FinTech Solution", date: "Nov 2024" },
    { id: 3, name: "Tech Titans", position: "🥉 3rd Prize", project: "Eco-Tracker", date: "Oct 2024" },
  ];

  const hackathonSkills = ["Problem Solving", "Team Collaboration", "Innovation", "Time Management", "Presentation"];

  return (
    <>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#0b234a',
            color: '#fff',
            border: '1px solid #E22213',
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: '#fff',
            },
          },
        }}
      />
      
      <section className="w-full py-16 px-4 bg-linear-to-br from-[#0b234a] via-[#0b234a]/90 to-[#E22213] relative overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Floating Certificate Icons with Hackathon Theme */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#0b234a]/20 rounded-lg rotate-12 animate-float flex items-center justify-center">
          <Trophy className="w-10 h-10 text-white/60" />
        </div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-orange-500/20 rounded-lg -rotate-6 animate-float-delayed flex items-center justify-center">
          <Zap className="w-8 h-8 text-white/60" />
        </div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#E22213]/20 rounded-lg rotate-45 animate-float-slow flex items-center justify-center">
          <Monitor className="w-12 h-12 text-white/60" />
        </div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-[#0b234a]/20 rounded-lg -rotate-12 animate-float flex items-center justify-center">
          <Rocket className="w-6 h-6 text-white/60" />
        </div>
        
        {/* Main Content */}
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Text Content - Updated for Hackathon Focus */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="mb-4">
                <span className="inline-flex items-center px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-3 gap-2">
                  <Trophy className="w-4 h-4" />
                  Hackathon Winners Special
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Win Hackathons & Earn 
                <span className="bg-linear-to-r from-orange-500 to-[#E22213] bg-clip-text text-transparent"> Exclusive Certificates</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl">
                Compete in exciting hackathons, showcase your skills, and earn prestigious certificates that stand out to employers worldwide.
              </p>
              
              {/* Hackathon Stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Medal className="w-6 h-6 text-orange-400" />
                  <div>
                    <div className="font-bold text-white">50+</div>
                    <div className="text-sm text-orange-200">Hackathons</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Users className="w-6 h-6 text-orange-400" />
                  <div>
                    <div className="font-bold text-white">2,000+</div>
                    <div className="text-sm text-orange-200">Participants</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Target className="w-6 h-6 text-orange-400" />
                  <div>
                    <div className="font-bold text-white">100+</div>
                    <div className="text-sm text-orange-200">Projects Built</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => navigate('/hackathons')} className="px-8 py-4 bg-linear-to-r from-orange-500 to-[#E22213] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-orange-400 hover:to-[#E22213]/90 flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5" />
                  <span>Join Next Hackathon</span>
                </button>
              
              </div>
              
              {/* Trust Indicators - Updated for Hackathons */}
              <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start items-center">
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-8 h-8 bg-[#0b234a] rounded-full flex items-center justify-center">
                    <Medal className="w-4 h-4 text-white" />
                  </div>
                  <span>Competition Winning</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-8 h-8 bg-[#E22213] rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span>Real-World Projects</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span>Team Collaboration</span>
                </div>
              </div>
            </div>
            
            {/* Certificate Visual - Hackathon Edition */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* Hackathon Winner Badge */}
                <div className="absolute -top-6 -right-6 z-20">
                  <div className="bg-linear-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    WINNER
                  </div>
                </div>
                
                {/* Main Certificate Card */}
                <div 
                  onClick={() => {
                    setSelectedCertType('hackathon');
                    setShowCertificate(true);
                  }}
                  className="bg-white rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer hover:scale-105"
                >
                  <div className="border-4 border-[#0b234a] rounded-xl p-6 text-center">
                    
                    {/* Certificate Header */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-linear-to-r from-[#0b234a] to-[#E22213] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Trophy className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Hackathon Winner</h3>
                      <p className="text-gray-600">First Prize - Innovation Challenge</p>
                    </div>
                    
                    {/* Winner Name */}
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-gray-800">Team Innovators</h4>
                      <p className="text-gray-500 text-sm">Project: AI Healthcare App</p>
                    </div>
                    
                    {/* Skills Badges */}
                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                      <span className="px-3 py-1 bg-[#0b234a]/10 text-[#0b234a] rounded-full text-sm font-medium flex items-center gap-1">
                        <Lightbulb className="w-3 h-3" />
                        Innovation
                      </span>
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-700 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Problem Solving
                      </span>
                      <span className="px-3 py-1 bg-[#E22213]/10 text-[#E22213] rounded-full text-sm font-medium flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        Teamwork
                      </span>
                    </div>
                    
                    {/* Issuer */}
                    <div className="border-t pt-4">
                      <p className="text-gray-500 text-sm mb-2">Awarded by</p>
                      <p className="font-semibold text-gray-900">Aaklan It Solutions PVT. LTD.</p>
                      <p className="text-sm text-gray-500 mt-1">December 2024 Hackathon</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full shadow-lg animate-bounce flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#E22213] rounded-full shadow-lg animate-bounce delay-1000 flex items-center justify-center">
                  <Lightbulb className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Upcoming Hackathon Section */}
        <div className="mt-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
              <Trophy className="w-6 h-6" />
              Previous Hackathon Winners
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hackathonWinners.map((winner) => (
                <div key={winner.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-orange-500 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-linear-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{winner.name}</h4>
                      <p className="text-orange-200 text-sm">{winner.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-200 mb-2">{winner.project}</p>
                  <p className="text-gray-400 text-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {winner.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(12deg); }
            50% { transform: translateY(-20px) rotate(12deg); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px) rotate(-6deg); }
            50% { transform: translateY(-15px) rotate(-6deg); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(45deg); }
            50% { transform: translateY(-10px) rotate(45deg); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 8s ease-in-out infinite;
          }
          .animate-float-slow {
            animation: float-slow 10s ease-in-out infinite;
          }

          /* Print styles for certificate */
          @media print {
            body * {
              visibility: hidden;
            }
            .certificate-modal * {
              visibility: visible;
            }
            .certificate-modal {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
            .modal-actions, .close-btn {
              display: none !important;
            }
          }
        `}</style>
      </section>


    </>
  );
}