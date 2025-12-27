import { useState } from 'react';
import { BookOpen, ClipboardCheck, MessageSquare, Library, Home, Award, AlertCircle, CheckCircle, XCircle, HelpCircle } from 'lucide-react';

function DEATSToolkit() {
  const [currentPage, setCurrentPage] = useState('role-selection');
  const [userRole, setUserRole] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState<any>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [feedbackData, setFeedbackData] = useState<any>(null);
  const [completedStages, setCompletedStages] = useState({
    visitedDashboard: false,
    readEducation: false,
    completedQuiz: false,
    viewedResources: false,
    viewedChecklist: false
  });

  const handleRoleSelection = (role:any) => {
    setUserRole(role);
    setCurrentPage('dashboard');
    setCompletedStages(prev => ({ ...prev, visitedDashboard: true }));
  };

  const calculateProgress = () => {
    const stages = Object.values(completedStages);
    const completed = stages.filter(Boolean).length;
    const total = stages.length;
    const percentage = (completed / total) * 100;
    return { completed, total, percentage };
  };

  const getProgressStage = () => {
    const { completed, total } = calculateProgress();
    
    if (completed === 0) return { stage: 'Getting Started', color: 'gray', message: 'Begin your learning journey' };
    if (completed === 1) return { stage: 'Exploring', color: 'blue', message: 'Continue exploring the toolkit' };
    if (completed === 2) return { stage: 'Learning', color: 'indigo', message: 'Making good progress' };
    if (completed === 3) return { stage: 'Progressing', color: 'purple', message: 'You are doing great!' };
    if (completed === 4) return { stage: 'Almost Complete', color: 'orange', message: 'Just one more step!' };
    if (completed === total) return { stage: 'Completed', color: 'green', message: 'Well done! All stages completed' };
    
    return { stage: 'In Progress', color: 'blue', message: 'Keep going!' };
  };

  const renderRoleSelection = () =>{
console.log('in role selection')
return    (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-white opacity-10 rounded-full -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white opacity-10 rounded-full -bottom-48 -right-48 animate-pulse"></div>
          <div className="absolute w-64 h-64 bg-white opacity-5 rounded-full top-1/4 right-1/4 animate-pulse"></div>
        </div>
  
        <div className="max-w-6xl w-full relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full p-6 shadow-2xl">
                <BookOpen size={64} className="text-white" />
              </div>
            </div>
            <h1 className="text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
              Welcome to DEATS
            </h1>
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-6 max-w-3xl mx-auto mb-4">
              <p className="text-3xl font-bold text-white mb-2">Digital Ethical AI Toolkit for Students</p>
              <p className="text-xl text-black">Your Guide to Responsible AI Use in Academia</p>
            </div>
            <p className="text-lg text-white font-medium">
              Learn, Assess, and Succeed with Academic Integrity
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="group">
              <button
                onClick={() => handleRoleSelection('student')}
                className="w-full bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                      <BookOpen size={40} className="text-white" />
                    </div>
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">
                      STUDENT
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    I am a Student
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    Learn how to use AI ethically, assess your practices, and access resources to maintain academic integrity throughout your studies.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 mb-4">
                    <p className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                      <CheckCircle size={20} className="text-blue-600" />
                      What You Will Get:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Personalized Dashboard:</strong> Track your learning progress</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Self-Assessment Quiz:</strong> Evaluate your AI usage practices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Educational Resources:</strong> Learn responsible AI principles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Practical Checklists:</strong> Step-by-step AI usage guidelines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Instant Feedback:</strong> Get personalized recommendations</span>
                      </li>
                    </ul>
                  </div>
  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 italic">Click to start your journey</span>
                    <div className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold group-hover:bg-blue-700 transition-colors flex items-center gap-2">
                      Enter as Student
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
  
            <div className="group">
              <button
                onClick={() => handleRoleSelection('instructor')}
                className="w-full bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                      <Award size={40} className="text-white" />
                    </div>
                    <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold">
                      INSTRUCTOR
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                    I am an Instructor
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    Access teaching resources, understand student AI use patterns, and promote ethical AI practices in your classroom and institution.
                  </p>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-5 mb-4">
                    <p className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                      <Award size={20} className="text-purple-600" />
                      What You Will Get:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span><strong>Teaching Dashboard:</strong> Overview of student support tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span><strong>Policy Guidelines:</strong> Framework for AI use policies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span><strong>Student Support Resources:</strong> Materials to share with students</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span><strong>Assessment Tools:</strong> Guide for fair evaluation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span><strong>Best Practices:</strong> Strategies for promoting integrity</span>
                      </li>
                    </ul>
                  </div>
  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 italic">Click to access resources</span>
                    <div className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold group-hover:bg-purple-700 transition-colors flex items-center gap-2">
                      Enter as Instructor
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
  
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4 text-center">Why Choose DEATS?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl">🎯</span>
                </div>
                <h4 className="font-semibold mb-2">Evidence-Based</h4>
                <p className="text-sm text-black">Built on research from leading academics and institutions</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl">⚡</span>
                </div>
                <h4 className="font-semibold mb-2">Interactive Learning</h4>
                <p className="text-sm text-black">Engaging modules with instant feedback and guidance</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h4 className="font-semibold mb-2">Protect Your Integrity</h4>
                <p className="text-sm text-black">Stay compliant while leveraging AI technology</p>
              </div>
            </div>
          </div>
  
          <div className="text-center mt-8 text-white text-sm">
            <p className="opacity-90">
              Research Project: University of the West of England (UWE Bristol)
            </p>
            <p className="opacity-75 mt-1">
              MSc Information Technology - Ethical AI in Academic Work
            </p>
          </div>
        </div>
      </div>
    );
  } 

  const renderStudentDashboard = () => {
    const progress = calculateProgress();
    const progressStage = getProgressStage();
    
    const stageColorClasses:any = {
      gray: 'bg-gray-100 text-gray-700',
      blue: 'bg-blue-100 text-blue-700',
      indigo: 'bg-indigo-100 text-indigo-700',
      purple: 'bg-purple-100 text-purple-700',
      orange: 'bg-orange-100 text-orange-700',
      green: 'bg-green-100 text-green-700'
    };
    
    return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Welcome, Student!</h1>
        <p className="text-xl text-blue-100">Your journey to ethical AI use starts here</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Your Progress</h3>
            <CheckCircle className="text-green-500" size={24} />
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-semibold text-gray-700">Learning Journey</p>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${stageColorClasses[progressStage.color]}`}>
                  {progressStage.stage}
                </span>
              </div>
              <div className="bg-gray-200 rounded-full h-3 mb-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progress.percentage}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-600">{progress.completed} of {progress.total} stages completed</p>
            </div>
            
            <div className="pt-3 border-t">
              <p className="text-xs font-semibold text-gray-700 mb-2">Completed Stages:</p>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs">
                  {completedStages.visitedDashboard ? (
                    <CheckCircle size={14} className="text-green-500" />
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-300"></div>
                  )}
                  <span className={completedStages.visitedDashboard ? 'text-green-700 font-medium' : 'text-gray-500'}>
                    Dashboard Introduction
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  {completedStages.readEducation ? (
                    <CheckCircle size={14} className="text-green-500" />
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-300"></div>
                  )}
                  <span className={completedStages.readEducation ? 'text-green-700 font-medium' : 'text-gray-500'}>
                    Educational Module
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  {completedStages.completedQuiz ? (
                    <CheckCircle size={14} className="text-green-500" />
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-300"></div>
                  )}
                  <span className={completedStages.completedQuiz ? 'text-green-700 font-medium' : 'text-gray-500'}>
                    Self-Assessment Quiz
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  {completedStages.viewedResources ? (
                    <CheckCircle size={14} className="text-green-500" />
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-300"></div>
                  )}
                  <span className={completedStages.viewedResources ? 'text-green-700 font-medium' : 'text-gray-500'}>
                    Resource Hub
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  {completedStages.viewedChecklist ? (
                    <CheckCircle size={14} className="text-green-500" />
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-300"></div>
                  )}
                  <span className={completedStages.viewedChecklist ? 'text-green-700 font-medium' : 'text-gray-500'}>
                    Practical Checklist
                  </span>
                </div>
              </div>
            </div>
            
            <div className="pt-3">
              <p className="text-xs text-gray-600 italic">{progressStage.message}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Learning Status</h3>
            <BookOpen className="text-blue-500" size={24} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">Current Stage</p>
              <span className="text-sm font-semibold text-blue-700">{progressStage.stage}</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">Quiz Status</p>
              <span className={`text-sm font-semibold ${quizSubmitted ? 'text-green-700' : 'text-gray-500'}`}>
                {quizSubmitted ? 'Completed' : 'Not Started'}
              </span>
            </div>
            {quizSubmitted && feedbackData && (
              <div className="pt-2 border-t mt-2">
                <p className="text-xs text-gray-600 mb-1">Your Assessment Level:</p>
                <p className={`text-sm font-semibold ${
                  feedbackData.color === 'green' ? 'text-green-700' :
                  feedbackData.color === 'blue' ? 'text-blue-700' :
                  feedbackData.color === 'orange' ? 'text-orange-700' :
                  'text-red-700'
                }`}>
                  {feedbackData.level}
                </p>
                <p className="text-xs text-gray-600 mt-1">Score: {feedbackData.percentage.toFixed(0)}%</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Next Step</h3>
            <AlertCircle className="text-purple-500" size={24} />
          </div>
          <div className="space-y-3">
            {!completedStages.readEducation && (
              <button
                onClick={() => setCurrentPage('education')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Start Learning
              </button>
            )}
            {completedStages.readEducation && !completedStages.completedQuiz && (
              <button
                onClick={() => setCurrentPage('quiz')}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Take Assessment
              </button>
            )}
            {completedStages.completedQuiz && !completedStages.viewedResources && (
              <button
                onClick={() => setCurrentPage('resources')}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
              >
                View Resources
              </button>
            )}
            {completedStages.viewedResources && progress.percentage === 100 && (
              <div className="text-center">
                <CheckCircle className="text-green-500 mx-auto mb-2" size={48} />
                <p className="text-sm font-semibold text-green-700">All Stages Complete!</p>
                <p className="text-xs text-gray-600 mt-1">You are ready to use AI ethically</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
          <AlertCircle className="text-amber-600" />
          Before You Start Your Work: Understanding Responsible AI
        </h3>
        <p className="text-gray-700 mb-4">
          This toolkit is designed to guide you on the ethical use of AI before you begin any academic work. Understanding responsible AI is crucial for your academic success and integrity.
        </p>
        <p className="text-gray-700 font-semibold">
          Take time to learn about AI ethics, the challenges students face, and how DEATS can help you navigate AI use responsibly.
        </p>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-300 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
          <BookOpen className="text-indigo-600" />
          Learning Module: Understanding AI Ethics in Academia
        </h3>
        <p className="text-gray-700 mb-4">
          This section will help you understand the ethical landscape of AI in education and why this research matters.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-red-800">1. What Are the Ethical Issues of AI in Academic Work?</h3>
        <p className="text-gray-700 mb-4">
          Using AI in education raises several critical ethical concerns that affect students, instructors, and the entire academic community:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-semibold text-red-800 mb-2">Academic Integrity Issues</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Plagiarism:</strong> Submitting AI-generated content as original work</li>
              <li>• <strong>Dishonesty:</strong> Not disclosing AI assistance when required</li>
              <li>• <strong>Misrepresentation:</strong> Claiming understanding you do not have</li>
              <li>• <strong>Cheating:</strong> Using AI in prohibited assessments or exams</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-semibold text-orange-800 mb-2">Learning and Development Issues</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Skill erosion:</strong> Not developing critical thinking abilities</li>
              <li>• <strong>Surface learning:</strong> Missing deep understanding of subjects</li>
              <li>• <strong>Dependence:</strong> Becoming reliant on AI instead of own abilities</li>
              <li>• <strong>Competence gaps:</strong> Graduating without necessary skills</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-800 mb-2">Fairness and Equity Issues</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Unequal access:</strong> Not all students can afford premium AI tools</li>
              <li>• <strong>Unfair advantages:</strong> Some students use AI while others do not</li>
              <li>• <strong>Assessment validity:</strong> Grades no longer reflect true ability</li>
              <li>• <strong>Digital divide:</strong> Technology access disparities</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-800 mb-2">Trust and Transparency Issues</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Hidden use:</strong> Students not being transparent about AI</li>
              <li>• <strong>Unclear policies:</strong> Confusion about what is allowed</li>
              <li>• <strong>Trust breakdown:</strong> Instructors doubting student work authenticity</li>
              <li>• <strong>False accusations:</strong> AI detectors flagging innocent students</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-blue-800">2. Who Has Identified These Ethical Issues?</h3>
        <p className="text-gray-700 mb-4">
          These ethical concerns are not just opinions - they have been identified and documented by leading researchers, educators, and academic institutions worldwide:
        </p>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Academic Researchers</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Adams et al. (2023):</strong> Identified ethical principles for AI in K-12 education, highlighting integrity concerns</li>
              <li>• <strong>Nguyen et al. (2023):</strong> Documented the blurred lines between academic dishonesty and ethical AI usage</li>
              <li>• <strong>Khatri and Karki (2023):</strong> Raised concerns about AI's impact on academic integrity in higher education</li>
              <li>• <strong>Bulut et al. (2024):</strong> Explored ethical challenges in educational measurement with AI</li>
              <li>• <strong>Akgun and Greenhow (2022):</strong> Addressed ethical challenges of AI in educational settings</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Educational Institutions</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>UK Universities:</strong> Russell Group and other institutions have developed AI use policies</li>
              <li>• <strong>Quality Assurance Agency (QAA):</strong> Issued guidance on AI and academic integrity</li>
              <li>• <strong>Universities UK:</strong> Published frameworks for responsible AI adoption</li>
              <li>• <strong>Individual universities:</strong> University of the West of England (UWE), Oxford, Cambridge have all recognized these issues</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">Professional Bodies and Organizations</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>International Center for Academic Integrity:</strong> Documented AI-related integrity challenges</li>
              <li>• <strong>UNESCO:</strong> Published reports on ethical AI in education</li>
              <li>• <strong>Academic integrity organizations:</strong> Worldwide recognition of AI ethical concerns</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-purple-800">3. Why Are These Issues Important? What Problems Do They Create?</h3>
        
        <div className="bg-purple-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-purple-800 mb-2">These ethical issues matter because they affect:</h4>
        </div>

        <div className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded">
            <h4 className="font-semibold text-red-800 mb-2">Individual Students</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Academic careers:</strong> Risk of failing, suspension, or expulsion for misconduct</li>
              <li>• <strong>Skill development:</strong> Missing out on learning critical competencies for future careers</li>
              <li>• <strong>Professional readiness:</strong> Graduating without the abilities employers expect</li>
              <li>• <strong>Personal integrity:</strong> Compromising your own values and ethical standards</li>
              <li>• <strong>Mental health:</strong> Anxiety about being caught, stress from deception</li>
            </ul>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded">
            <h4 className="font-semibold text-orange-800 mb-2">The Academic Community</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Trust erosion:</strong> Instructors losing confidence in student work authenticity</li>
              <li>• <strong>Assessment validity:</strong> Grades no longer accurately measuring student ability</li>
              <li>• <strong>Educational quality:</strong> Undermining the value and credibility of degrees</li>
              <li>• <strong>Unfair competition:</strong> Honest students disadvantaged compared to AI users</li>
              <li>• <strong>Resource waste:</strong> Time spent investigating misconduct instead of teaching</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">Society and Professions</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Professional competence:</strong> Graduates lacking skills to perform their jobs safely and effectively</li>
              <li>• <strong>Public trust:</strong> Erosion of confidence in university qualifications</li>
              <li>• <strong>Economic impact:</strong> Workforce lacking necessary skills for innovation and productivity</li>
              <li>• <strong>Ethical culture:</strong> Normalizing dishonesty and shortcuts in professional practice</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-green-800 mb-2">The False Positive Problem</h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>A Critical Issue:</strong> Some students complete their work entirely without AI, but AI detection tools like Turnitin still flag their work as AI-generated.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Wrongful accusations:</strong> Honest students facing misconduct charges</li>
              <li>• <strong>Stress and anxiety:</strong> Fear of being falsely accused despite doing nothing wrong</li>
              <li>• <strong>Unfair burden:</strong> Having to prove innocence rather than being presumed innocent</li>
              <li>• <strong>Trust damage:</strong> Students feeling their integrity is not respected</li>
              <li>• <strong>ESL students:</strong> Non-native English speakers particularly vulnerable to false flags</li>
            </ul>
            <p className="text-sm text-green-800 font-semibold mt-2">
              This is why clear education about responsible AI use is essential - to protect both those who use AI ethically and those who do not use it at all.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-indigo-800">4. Who Has Found Solutions? The DEATS Approach</h3>
        
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg mb-4">
          <h4 className="text-lg font-bold text-indigo-900 mb-3">Research-Based Solution Framework</h4>
          <p className="text-gray-800 font-semibold mb-2">
            This research addresses the ethical AI problem through a structured approach:
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-300">
            <h4 className="font-semibold text-blue-900 mb-3 text-lg">WHO is solving this problem?</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-blue-800 mb-1">Primary Stakeholders:</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• <strong>Students:</strong> Learning to use AI ethically and responsibly</li>
                  <li>• <strong>Lecturers/Instructors:</strong> Guiding students and setting clear expectations</li>
                  <li>• <strong>Universities:</strong> Developing policies and support systems</li>
                  <li>• <strong>Researchers:</strong> Creating evidence-based solutions like DEATS</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg border-2 border-purple-300">
            <h4 className="font-semibold text-purple-900 mb-3 text-lg">WHERE is this solution being implemented?</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-purple-800 mb-1">Location and Context:</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• <strong>UK Universities:</strong> Focus on higher education institutions across the United Kingdom</li>
                  <li>• <strong>Postgraduate level:</strong> Targeting masters and doctoral students</li>
                  <li>• <strong>Online platform:</strong> Web-based toolkit accessible anytime, anywhere</li>
                  <li>• <strong>University of the West of England (UWE):</strong> Primary research and development institution</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
            <h4 className="font-semibold text-green-900 mb-3 text-lg">HOW does DEATS solve the problem?</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-green-800 mb-2">Through Design and Evaluation:</p>
                <ul className="text-sm text-gray-700 space-y-2 ml-4">
                  <li>
                    <strong className="text-green-700">1. Educational Module:</strong>
                    <p className="ml-4 mt-1">Teaching ethical principles, scenarios, and decision-making frameworks</p>
                  </li>
                  <li>
                    <strong className="text-green-700">2. Self-Assessment Tool:</strong>
                    <p className="ml-4 mt-1">Helping students evaluate their own AI practices and receive personalized feedback</p>
                  </li>
                  <li>
                    <strong className="text-green-700">3. Resource Hub:</strong>
                    <p className="ml-4 mt-1">Providing practical checklists, guidelines, and examples</p>
                  </li>
                  <li>
                    <strong className="text-green-700">4. Interactive Dashboard:</strong>
                    <p className="ml-4 mt-1">Guiding students BEFORE they start work, not after misconduct occurs</p>
                  </li>
                  <li>
                    <strong className="text-green-700">5. Evaluation Through Research:</strong>
                    <p className="ml-4 mt-1">Pilot study with postgraduate students, focus groups, and interviews to assess effectiveness</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg border-2 border-orange-300">
            <h4 className="font-semibold text-orange-900 mb-3 text-lg">WHY is DEATS needed? The Research Purpose</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-orange-800 mb-2">Primary Objectives:</p>
                <ul className="text-sm text-gray-700 space-y-2 ml-4">
                  <li>
                    <strong className="text-orange-700">Promote Academic Integrity:</strong>
                    <p className="ml-4 mt-1">Helping students understand and maintain honesty in their academic work while using modern tools</p>
                  </li>
                  <li>
                    <strong className="text-orange-700">Ensure Policy Alignment:</strong>
                    <p className="ml-4 mt-1">Bridging the gap between institutional policies and student understanding</p>
                  </li>
                  <li>
                    <strong className="text-orange-700">Support Ethical Innovation:</strong>
                    <p className="ml-4 mt-1">Enabling students to benefit from AI technology without compromising their learning or integrity</p>
                  </li>
                  <li>
                    <strong className="text-orange-700">Prevent Misconduct:</strong>
                    <p className="ml-4 mt-1">Educating students proactively rather than punishing them reactively</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-300 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
          <AlertCircle className="text-red-600" size={28} />
          WHY THIS RESEARCH IS CRITICALLY IMPORTANT
        </h3>
        
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h4 className="font-semibold text-red-800 mb-3 text-lg">The False Positive Crisis</h4>
            <p className="text-gray-700 mb-3">
              One of the most urgent reasons this research exists is to address a serious problem affecting innocent students:
            </p>
            
            <div className="bg-red-50 p-4 rounded-lg mb-3 border-l-4 border-red-500">
              <p className="font-semibold text-red-800 mb-2">The Problem:</p>
              <p className="text-gray-700 mb-2">
                Many students complete their assignments entirely on their own, without using any AI tools whatsoever. However, when their work is checked through AI detection apps like Turnitin, it still gets flagged as AI-generated.
              </p>
              <p className="text-red-700 font-semibold">
                This creates a nightmare scenario where honest students face academic misconduct accusations despite doing nothing wrong.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-red-200">
              <p className="font-semibold text-red-800 mb-2">Why This Happens:</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• AI detectors are imperfect and produce false positives regularly</li>
                <li>• Students with strong formal writing skills may be flagged</li>
                <li>• Non-native English speakers using formal language are particularly vulnerable</li>
                <li>• High-achieving students with polished writing get suspected</li>
                <li>• The technology cannot definitively prove AI use or authorship</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <h4 className="font-semibold text-indigo-800 mb-3 text-lg">How DEATS Helps Solve This Problem</h4>
            
            <div className="space-y-3">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="font-semibold text-indigo-800 mb-2">For Students Who Use AI Ethically:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Learn proper documentation and disclosure methods</li>
                  <li>• Understand how to use AI transparently</li>
                  <li>• Know when and how to acknowledge AI assistance</li>
                  <li>• Build confidence in defending their ethical practices</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-800 mb-2">For Students Who Do Not Use AI:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Understand why they might be falsely flagged</li>
                  <li>• Learn how to demonstrate their authentic authorship</li>
                  <li>• Know their rights if wrongly accused</li>
                  <li>• Have evidence of engaging with ethical AI education</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-800 mb-2">For Instructors:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Understand the limitations of AI detection tools</li>
                  <li>• Learn fair investigation procedures</li>
                  <li>• Access resources to guide students proactively</li>
                  <li>• Reduce false accusations and student distress</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <h4 className="font-semibold text-purple-800 mb-3 text-lg">The Bigger Picture: Building a Digital Toolkit</h4>
            <p className="text-gray-700 mb-3">
              DEATS is more than just rules and warnings. It is a comprehensive digital toolkit designed to:
            </p>
            
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-purple-50 p-3 rounded">
                <p className="font-semibold text-purple-700 text-sm mb-1">Teach</p>
                <p className="text-xs text-gray-700">Provide education on ethical AI principles and academic integrity</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="font-semibold text-blue-700 text-sm mb-1">Support</p>
                <p className="text-xs text-gray-700">Offer practical guidance and resources when students need them</p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <p className="font-semibold text-green-700 text-sm mb-1">Guide</p>
                <p className="text-xs text-gray-700">Help students make ethical decisions about AI usage</p>
              </div>
              <div className="bg-orange-50 p-3 rounded">
                <p className="font-semibold text-orange-700 text-sm mb-1">Protect</p>
                <p className="text-xs text-gray-700">Shield innocent students from false accusations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-indigo-800">Types of AI Systems Available to Students</h3>
        <p className="text-gray-700 mb-4">
          Many AI tools are now available for academic work. Understanding what they do and their limitations is essential for responsible use.
        </p>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">1. Generative AI Writing Tools</h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Examples:</strong> ChatGPT, Claude, Google Gemini, Microsoft Copilot, Jasper
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>What they do:</strong> Generate text, answer questions, write essays, create summaries, explain concepts, draft emails
            </p>
            <p className="text-sm text-gray-700">
              <strong>Common academic uses:</strong> Brainstorming ideas, outlining essays, explaining difficult concepts, getting writing suggestions
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-green-800 mb-2">2. AI Code Assistants</h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Examples:</strong> GitHub Copilot, TabNine, Replit AI, Amazon CodeWhisperer
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>What they do:</strong> Suggest code completions, generate code from comments, debug errors, explain code functionality
            </p>
            <p className="text-sm text-gray-700">
              <strong>Common academic uses:</strong> Learning syntax, debugging assignments, understanding code examples, optimizing algorithms
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
            <h4 className="font-semibold text-purple-800 mb-2">3. Grammar and Writing Enhancement Tools</h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Examples:</strong> Grammarly, ProWritingAid, QuillBot, Wordtune, Hemingway Editor
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>What they do:</strong> Check grammar and spelling, suggest style improvements, paraphrase text, enhance clarity
            </p>
            <p className="text-sm text-gray-700">
              <strong>Common academic uses:</strong> Proofreading, improving sentence structure, checking for clarity, fixing grammar errors
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded">
            <h4 className="font-semibold text-orange-800 mb-2">4. Research and Summarization Tools</h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Examples:</strong> Elicit, Consensus, Semantic Scholar, Scholarcy, SciSpace
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>What they do:</strong> Search academic papers, summarize research articles, extract key findings, answer research questions
            </p>
            <p className="text-sm text-gray-700">
              <strong>Common academic uses:</strong> Literature reviews, finding relevant papers, understanding research quickly, identifying key studies
            </p>
          </div>

          <div className="border-l-4 border-pink-500 pl-4 bg-pink-50 p-4 rounded">
            <h4 className="font-semibold text-pink-800 mb-2">5. Translation and Language Tools</h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Examples:</strong> DeepL, Google Translate, Microsoft Translator
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>What they do:</strong> Translate between languages, help with language learning, convert academic texts
            </p>
            <p className="text-sm text-gray-700">
              <strong>Common academic uses:</strong> Reading foreign language papers, improving language skills, understanding international sources
            </p>
          </div>

          <div className="border-l-4 border-teal-500 pl-4 bg-teal-50 p-4 rounded">
            <h4 className="font-semibold text-teal-800 mb-2">6. Presentation and Visual Tools</h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Examples:</strong> Beautiful.ai, Gamma, Canva AI, Tome, DALL-E, Midjourney
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>What they do:</strong> Generate presentations, create images, design visuals, make diagrams
            </p>
            <p className="text-sm text-gray-700">
              <strong>Common academic uses:</strong> Creating presentation slides, generating diagrams, designing posters, visualizing data
            </p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
          <AlertCircle className="text-red-600" />
          Risks and Challenges of AI Systems
        </h3>
        <p className="text-gray-700 mb-4">
          While AI tools can be helpful, they come with significant risks that can affect your academic work and integrity. You must be aware of these risks to use AI responsibly.
        </p>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-2 border-red-200">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
              <XCircle className="text-red-600" size={20} />
              1. Hallucinations and Inaccurate Information
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>The Risk:</strong> AI systems often generate false information that sounds convincing. They can invent facts, create fake citations, and provide incorrect data.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Real Examples:</strong>
            </p>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>• ChatGPT inventing non-existent research papers with realistic titles and authors</li>
              <li>• AI generating fake statistics or historical dates that seem plausible</li>
              <li>• Creating citations with wrong page numbers, DOIs, or publication years</li>
              <li>• Providing outdated information as if it were current</li>
            </ul>
            <p className="text-sm text-red-700 font-semibold mt-2">
              Impact on your work: Submitting work with fake references or false information is academic misconduct, even if unintentional.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border-2 border-red-200">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
              <XCircle className="text-red-600" size={20} />
              2. Bias and Discrimination
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>The Risk:</strong> AI systems are trained on internet data that contains biases. They can reproduce stereotypes, discriminatory views, and unbalanced perspectives.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Real Examples:</strong>
            </p>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>• Gender biases in career recommendations or role descriptions</li>
              <li>• Cultural stereotypes in examples or case studies</li>
              <li>• Western-centric perspectives ignoring global viewpoints</li>
              <li>• Underrepresentation of minority perspectives in generated content</li>
            </ul>
            <p className="text-sm text-red-700 font-semibold mt-2">
              Impact on your work: Using biased AI content can result in discriminatory arguments and academically weak analysis.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border-2 border-red-200">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
              <XCircle className="text-red-600" size={20} />
              3. Plagiarism and Academic Misconduct
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>The Risk:</strong> Using AI-generated content without proper acknowledgment constitutes plagiarism. AI may also reproduce copyrighted material.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Real Examples:</strong>
            </p>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>• Submitting AI-written essays as original work</li>
              <li>• Using AI-generated code without attribution in programming assignments</li>
              <li>• AI reproducing paragraphs from published sources without citation</li>
              <li>• Paraphrasing AI content and claiming it as your own thinking</li>
            </ul>
            <p className="text-sm text-red-700 font-semibold mt-2">
              Impact on your work: Academic misconduct charges, failing grades, or expulsion from your program.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border-2 border-red-200">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
              <XCircle className="text-red-600" size={20} />
              4. Shallow Understanding and Learning Loss
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>The Risk:</strong> Over-relying on AI prevents you from developing critical thinking, research skills, and deep understanding of subjects.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Real Examples:</strong>
            </p>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>• Students unable to perform tasks without AI assistance in exams</li>
              <li>• Lack of analytical skills development from AI-generated arguments</li>
              <li>• Missing foundational knowledge because AI did the learning work</li>
              <li>• Inability to explain or defend work in presentations or vivas</li>
            </ul>
            <p className="text-sm text-red-700 font-semibold mt-2">
              Impact on your work: Poor performance in assessments that cannot use AI, and gaps in professional competence.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border-2 border-red-200">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
              <XCircle className="text-red-600" size={20} />
              5. Privacy and Data Security Issues
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>The Risk:</strong> Information you share with AI tools may be stored, used for training, or exposed in data breaches.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Real Examples:</strong>
            </p>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>• Personal data from conversations used to train AI models</li>
              <li>• Confidential research information exposed through AI queries</li>
              <li>• University email addresses and student information collected</li>
              <li>• Draft work potentially visible to other users in data leaks</li>
            </ul>
            <p className="text-sm text-red-700 font-semibold mt-2">
              Impact on your work: Never input confidential, personal, or sensitive information into AI tools.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border-2 border-red-200">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
              <XCircle className="text-red-600" size={20} />
              6. Lack of Critical Analysis
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>The Risk:</strong> AI provides generic, surface-level analysis without the depth, nuance, or critical thinking expected in academic work.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Real Examples:</strong>
            </p>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>• AI-generated essays lack original insights or critical arguments</li>
              <li>• Generic conclusions without specific evidence from course materials</li>
              <li>• Missing connections to theoretical frameworks taught in class</li>
              <li>• Superficial analysis that fails to meet academic standards</li>
            </ul>
            <p className="text-sm text-red-700 font-semibold mt-2">
              Impact on your work: Lower grades due to lack of depth, originality, and critical engagement with content.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border-2 border-red-200">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
              <XCircle className="text-red-600" size={20} />
              7. Detection and Academic Consequences
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>The Risk:</strong> Universities use AI detection tools, and instructors can identify AI-generated work through various means.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Real Examples:</strong>
            </p>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>• Turnitin AI detection flagging suspicious submissions</li>
              <li>• Inconsistent writing style compared to previous work</li>
              <li>• Generic content that does not match assignment requirements</li>
              <li>• Inability to explain work during academic integrity interviews</li>
            </ul>
            <p className="text-sm text-red-700 font-semibold mt-2">
              Impact on your work: Academic misconduct investigations, grade penalties, or program dismissal.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border-2 border-red-200">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
              <XCircle className="text-red-600" size={20} />
              8. Dependence and Skill Degradation
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>The Risk:</strong> Regular AI use can create psychological dependence and erode your natural problem-solving abilities.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Real Examples:</strong>
            </p>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>• Feeling unable to start work without AI assistance</li>
              <li>• Anxiety about completing tasks independently</li>
              <li>• Declining writing quality when AI is not available</li>
              <li>• Loss of confidence in your own abilities and judgment</li>
            </ul>
            <p className="text-sm text-red-700 font-semibold mt-2">
              Impact on your work: Long-term damage to academic and professional competence.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg border-2 border-red-400">
          <h4 className="font-semibold text-red-800 mb-2">How to Mitigate These Risks</h4>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• <strong>Always verify</strong> AI-generated information with credible academic sources</li>
            <li>• <strong>Use AI as a tool,</strong> not a replacement for your own thinking and learning</li>
            <li>• <strong>Disclose AI use</strong> transparently according to your institution's policy</li>
            <li>• <strong>Check for bias</strong> and critically evaluate all AI outputs</li>
            <li>• <strong>Develop your skills</strong> first, then use AI to enhance, not replace them</li>
            <li>• <strong>Never input sensitive</strong> or confidential information into AI systems</li>
            <li>• <strong>Add your own analysis,</strong> insights, and course-specific knowledge</li>
            <li>• <strong>Keep AI use limited</strong> to appropriate tasks like brainstorming and proofreading</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">What is Responsible AI?</h3>
          <div className="space-y-3 text-gray-700">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">Definition</h4>
              <p className="text-sm">
                Responsible AI means using artificial intelligence tools in ways that are ethical, transparent, and aligned with academic integrity principles. It involves being honest about AI use and ensuring that AI enhances rather than replaces your learning.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">Key Principles</h4>
              <ul className="text-sm space-y-1">
                <li>• Transparency about AI usage</li>
                <li>• Maintaining intellectual ownership</li>
                <li>• Verifying AI-generated information</li>
                <li>• Using AI to support, not replace, learning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-green-800">What is Academic Honesty?</h3>
          <div className="space-y-3 text-gray-700">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">Core Values</h4>
              <p className="text-sm">
                Academic honesty means producing work that genuinely represents your own understanding, effort, and learning. It requires integrity in all aspects of your academic work, including proper attribution of sources and honest representation of your capabilities.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">With AI Tools</h4>
              <p className="text-sm">
                When using AI tools, academic honesty means disclosing their use, ensuring you understand and can defend all work you submit, and following your institution's policies on AI assistance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-purple-800">What Does Good AI Use Mean?</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
              <CheckCircle size={20} className="text-green-600" />
              Good AI Use
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Using AI to brainstorm and generate ideas</li>
              <li>• Getting help understanding complex concepts</li>
              <li>• Checking grammar and improving clarity</li>
              <li>• Debugging code with explanations</li>
              <li>• Creating study materials and practice questions</li>
              <li>• Always disclosing AI assistance appropriately</li>
            </ul>
          </div>

          <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <XCircle size={20} className="text-red-600" />
              Poor AI Use
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Submitting AI-generated work as your own</li>
              <li>• Using AI without disclosure or citation</li>
              <li>• Relying on AI instead of developing skills</li>
              <li>• Using AI during prohibited assessments</li>
              <li>• Accepting AI output without verification</li>
              <li>• Bypassing learning objectives with AI shortcuts</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
          <AlertCircle className="text-red-600" />
          Warning: Signs You May Be Using Too Much AI
        </h3>
        <p className="text-gray-700 mb-4">
          Watch for these warning signs that indicate you might be over-relying on AI:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2">Academic Warning Signs</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• You cannot explain your work without AI help</li>
              <li>• Your writing style suddenly changes between assignments</li>
              <li>• You are using AI for every step of the writing process</li>
              <li>• You feel dependent on AI to complete basic tasks</li>
              <li>• Your work contains information you did not verify</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2">Learning Impact Signs</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• You are not developing the required skills</li>
              <li>• You struggle with in-class activities without AI</li>
              <li>• You cannot defend your arguments in discussions</li>
              <li>• You avoid challenging tasks that build competence</li>
              <li>• Your understanding is shallow or superficial</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-white rounded-lg border-2 border-red-300">
          <p className="font-semibold text-red-800 mb-2">If you recognize these signs:</p>
          <p className="text-sm text-gray-700">
            Take a step back and reassess your AI use. Consider meeting with your instructor or academic advisor to discuss appropriate AI boundaries. Remember: the goal is to enhance your learning, not to replace it.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
          <HelpCircle className="text-blue-600" />
          Understanding Your University AI Instructions
        </h3>
        <p className="text-gray-700 mb-4">
          Many students find university AI policies confusing. Here is how to understand and follow them:
        </p>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">Common Types of AI Policies</h4>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <span className="font-bold text-green-600">Permitted:</span>
                <span>AI use is allowed with proper disclosure and citation</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-amber-600">Limited:</span>
                <span>AI can be used for specific tasks only (e.g., brainstorming, grammar checking)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-red-600">Prohibited:</span>
                <span>No AI use allowed for this assessment</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">How to Clarify Confusing Instructions</h4>
            <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
              <li>Read the assignment brief carefully and highlight AI-related statements</li>
              <li>Check your module handbook for the AI policy</li>
              <li>Review your university general academic integrity policy</li>
              <li>If still unclear, email your instructor with specific questions</li>
              <li>Attend office hours to discuss AI use for your specific assignment</li>
              <li>Document any guidance you receive for future reference</li>
            </ol>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">Key Questions to Ask Your Instructor</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Can I use AI for brainstorming and idea generation?</li>
              <li>• Is it acceptable to use AI for grammar and spelling checks?</li>
              <li>• How should I cite or acknowledge AI assistance?</li>
              <li>• What specific AI tools are permitted or prohibited?</li>
              <li>• Can I use AI to help understand difficult concepts?</li>
              <li>• What percentage of AI assistance is considered appropriate?</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-300">
        <h3 className="text-xl font-bold text-green-800 mb-3">Ready to Begin?</h3>
        <p className="text-gray-700 mb-4">
          Now that you understand responsible AI use, academic honesty, and your university's policies, explore the toolkit modules:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <button
            onClick={() => setCurrentPage('education')}
            className="bg-white hover:bg-blue-50 p-4 rounded-lg border-2 border-blue-300 transition"
          >
            <BookOpen className="text-blue-600 mx-auto mb-2" size={32} />
            <p className="font-semibold text-blue-800">Learn More</p>
            <p className="text-xs text-gray-600">Educational Module</p>
          </button>
          <button
            onClick={() => setCurrentPage('quiz')}
            className="bg-white hover:bg-green-50 p-4 rounded-lg border-2 border-green-300 transition"
          >
            <ClipboardCheck className="text-green-600 mx-auto mb-2" size={32} />
            <p className="font-semibold text-green-800">Assess Yourself</p>
            <p className="text-xs text-gray-600">Take the Quiz</p>
          </button>
          <button
            onClick={() => setCurrentPage('resources')}
            className="bg-white hover:bg-purple-50 p-4 rounded-lg border-2 border-purple-300 transition"
          >
            <Library className="text-purple-600 mx-auto mb-2" size={32} />
            <p className="font-semibold text-purple-800">Get Resources</p>
            <p className="text-xs text-gray-600">Guidelines and Tools</p>
          </button>
        </div>
      </div>
    </div>
  );
};

  const renderInstructorDashboard = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Welcome, Instructor!</h1>
        <p className="text-xl text-purple-100">Supporting ethical AI use in your classroom</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Teaching Resources</h3>
          <p className="text-sm text-gray-600 mb-4">Access materials to help guide students</p>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition">
            View Resources
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Policy Guidelines</h3>
          <p className="text-sm text-gray-600 mb-4">Create clear AI use policies</p>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition">
            View Guidelines
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Assessment Tools</h3>
          <p className="text-sm text-gray-600 mb-4">Tools for evaluating student work</p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
            View Tools
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-purple-800">Key Instructor Responsibilities</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-purple-700 mb-3">Setting Clear Expectations</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Define acceptable and unacceptable AI use for each assessment</li>
              <li>• Provide examples of appropriate AI integration</li>
              <li>• Explain how students should cite AI assistance</li>
              <li>• Communicate consequences of policy violations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-700 mb-3">Supporting Students</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Make AI policies clear and accessible</li>
              <li>• Be available to answer questions about AI use</li>
              <li>• Provide guidance on ethical AI practices</li>
              <li>• Direct students to DEATS and similar resources</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Recommended Actions</h3>
        <ol className="space-y-2 text-gray-700 list-decimal list-inside">
          <li>Share DEATS with your students at the start of each module</li>
          <li>Include AI use policies in your assignment briefs</li>
          <li>Encourage students to complete the self-assessment quiz</li>
          <li>Use the resources section as teaching materials</li>
          <li>Foster open dialogue about responsible AI use in your classroom</li>
        </ol>
      </div>
    </div>
  );

  const quizQuestions = [
    {
      id: 1,
      category: "AI Usage",
      question: "Do you use AI tools for your academic work?",
      options: [
        { value: "yes_regularly", text: "Yes, I use AI tools regularly for my assignments", score: 2 },
        { value: "yes_sometimes", text: "Yes, I use AI tools occasionally", score: 2 },
        { value: "yes_rarely", text: "Yes, but very rarely", score: 2 },
        { value: "no", text: "No, I do not use AI tools", score: 1 }
      ]
    },
    {
      id: 2,
      category: "Policy Awareness",
      question: "How familiar are you with your university's AI usage policy?",
      options: [
        { value: "very_familiar", text: "Very familiar - I have read and understand it completely", score: 3 },
        { value: "somewhat_familiar", text: "Somewhat familiar - I know the basics", score: 2 },
        { value: "not_very_familiar", text: "Not very familiar - I have heard about it but not read it", score: 1 },
        { value: "not_familiar", text: "Not familiar at all - I do not know if there is a policy", score: 0 }
      ]
    },
    {
      id: 3,
      category: "Ethical Confidence",
      question: "Are you confident that you are using AI ethically in your academic work?",
      options: [
        { value: "very_confident", text: "Very confident - I always follow ethical guidelines", score: 3 },
        { value: "somewhat_confident", text: "Somewhat confident - I try my best but sometimes unsure", score: 2 },
        { value: "not_confident", text: "Not very confident - I am often unsure what is ethical", score: 1 },
        { value: "uncertain", text: "I do not know what ethical AI use means", score: 0 }
      ]
    },
    {
      id: 4,
      category: "Academic Honesty Understanding",
      question: "Do you understand what academic honesty means in the context of AI use?",
      options: [
        { value: "yes_clearly", text: "Yes, I clearly understand academic honesty with AI", score: 3 },
        { value: "yes_mostly", text: "Yes, I understand most aspects but have some questions", score: 2 },
        { value: "partially", text: "Partially - I understand academic honesty but not how it relates to AI", score: 1 },
        { value: "no", text: "No, I am not sure what academic honesty means", score: 0 }
      ]
    },
    {
      id: 5,
      category: "Responsible AI Understanding",
      question: "Do you understand what responsible AI use means?",
      options: [
        { value: "yes_completely", text: "Yes, I completely understand responsible AI principles", score: 3 },
        { value: "yes_generally", text: "Yes, I have a general understanding", score: 2 },
        { value: "somewhat", text: "Somewhat - I have heard the term but am not sure of specifics", score: 1 },
        { value: "no", text: "No, I do not know what responsible AI means", score: 0 }
      ]
    },
    {
      id: 6,
      category: "Writing Assistance",
      question: "How do you currently use AI tools like ChatGPT for essay writing?",
      options: [
        { value: "generate", text: "I use AI to generate entire essays or large sections", score: 0 },
        { value: "ideas", text: "I use AI to brainstorm ideas and create outlines", score: 2 },
        { value: "refine", text: "I write first, then use AI to refine grammar and clarity", score: 3 },
        { value: "none", text: "I do not use AI for writing", score: 3 }
      ]
    },
    {
      id: 7,
      category: "Research & Analysis",
      question: "When using AI for research, do you verify the information provided?",
      options: [
        { value: "never", text: "I rarely verify AI-generated information", score: 0 },
        { value: "sometimes", text: "I sometimes check important facts", score: 1 },
        { value: "always", text: "I always verify information against credible sources", score: 3 },
        { value: "notuse", text: "I do not use AI for research", score: 2 }
      ]
    },
    {
      id: 8,
      category: "Citation & Attribution",
      question: "How do you acknowledge AI assistance in your academic work?",
      options: [
        { value: "never", text: "I do not disclose AI use", score: 0 },
        { value: "sometimes", text: "I disclose only when asked or required", score: 1 },
        { value: "always", text: "I always acknowledge AI assistance appropriately", score: 3 },
        { value: "unclear", text: "I am unsure how to cite AI tools", score: 1 }
      ]
    },
    {
      id: 9,
      category: "Code Development",
      question: "If you use AI for coding assignments, how do you approach it?",
      options: [
        { value: "copy", text: "I copy AI-generated code directly without modification", score: 0 },
        { value: "understand", text: "I use AI suggestions but ensure I understand the code", score: 3 },
        { value: "debug", text: "I only use AI for debugging and optimization", score: 3 },
        { value: "notapply", text: "Not applicable to my studies", score: 2 }
      ]
    },
    {
      id: 10,
      category: "Critical Thinking",
      question: "How do you approach AI-generated content critically?",
      options: [
        { value: "trust", text: "I generally trust AI outputs as accurate", score: 0 },
        { value: "question", text: "I question and evaluate AI suggestions", score: 3 },
        { value: "compare", text: "I compare AI outputs with multiple sources", score: 3 },
        { value: "unsure", text: "I am not sure how to evaluate AI content", score: 1 }
      ]
    },
    {
      id: 11,
      category: "Learning Objectives",
      question: "Does AI use help or hinder your learning goals?",
      options: [
        { value: "shortcut", text: "I mainly use AI to complete work faster", score: 0 },
        { value: "learn", text: "I use AI as a learning tool to understand concepts better", score: 3 },
        { value: "mixed", text: "Sometimes it helps, sometimes it is a shortcut", score: 1 },
        { value: "reflect", text: "I regularly reflect on whether AI enhances my learning", score: 3 }
      ]
    },
    {
      id: 12,
      category: "Transparency",
      question: "Would you be comfortable discussing your AI usage with your instructor?",
      options: [
        { value: "no", text: "No, I prefer to keep it private", score: 0 },
        { value: "depends", text: "It depends on the assignment", score: 1 },
        { value: "yes", text: "Yes, I am transparent about appropriate AI use", score: 3 },
        { value: "unsure", text: "I am unsure what is appropriate to share", score: 1 }
      ]
    }
  ];

  const calculateScore = () => {
    let totalScore = 0;
    let maxScore = quizQuestions.length * 3;
    
    Object.keys(quizAnswers).forEach(questionId => {
      const question:any = quizQuestions.find(q => q.id === parseInt(questionId));
      const selectedOption = question.options.find((opt:any) => opt.value === quizAnswers[questionId]);
      if (selectedOption) {
        totalScore += selectedOption.score;
      }
    });

    const percentage = (totalScore / maxScore) * 100;
    return { totalScore, maxScore, percentage };
  };

  const generateFeedback = () => {
    const { percentage } = calculateScore();
    
    let level, message, recommendations, color;
    
    if (percentage >= 80) {
      level = "Exemplary Ethical AI Practice";
      color = "green";
      message = "You demonstrate strong ethical awareness and responsible AI use. You understand the importance of academic integrity and use AI as a supportive tool rather than a replacement for your own learning.";
      recommendations = [
        "Continue to stay updated on institutional AI policies",
        "Consider mentoring peers on ethical AI use",
        "Share your best practices in study groups",
        "Explore advanced ways AI can enhance your learning"
      ];
    } else if (percentage >= 60) {
      level = "Good Practice with Room for Growth";
      color = "blue";
      message = "You are on the right track with ethical AI use, but there are areas where you can strengthen your approach to ensure full compliance with academic integrity standards.";
      recommendations = [
        "Review your institution's AI policy in detail",
        "Always verify AI-generated information with credible sources",
        "Develop a consistent citation method for AI assistance",
        "Reflect on whether AI use enhances or replaces your learning",
        "Seek clarification from instructors when uncertain"
      ];
    } else if (percentage >= 40) {
      level = "Developing Awareness - Action Needed";
      color = "orange";
      message = "Your current AI practices may conflict with academic integrity standards. It is important to reassess how you are using AI tools to ensure ethical and responsible use.";
      recommendations = [
        "PRIORITY: Read your institution's AI and academic integrity policy",
        "Meet with your instructor or academic advisor to discuss appropriate AI use",
        "Practice using AI for brainstorming and refinement, not content generation",
        "Always acknowledge AI assistance in your work",
        "Develop critical evaluation skills for AI-generated content",
        "Consider the learning objectives of each assignment before using AI"
      ];
    } else {
      level = "High Risk - Immediate Action Required";
      color = "red";
      message = "Your current AI usage patterns pose significant risks to your academic integrity. Urgent changes are needed to avoid potential academic misconduct charges.";
      recommendations = [
        "URGENT: Schedule a meeting with your academic advisor immediately",
        "Thoroughly review academic misconduct policies",
        "Temporarily limit AI use until you understand appropriate boundaries",
        "Focus on developing your own skills rather than relying on AI outputs",
        "Seek support from academic skills centers or writing workshops",
        "Be completely transparent with instructors about past AI use if needed",
        "Remember: AI should support, not replace, your learning process"
      ];
    }

    return { level, message, recommendations, color, percentage };
  };

  const handleQuizSubmit = () => {
    if (Object.keys(quizAnswers).length === quizQuestions.length) {
      const feedback = generateFeedback();
      setFeedbackData(feedback);
      setQuizSubmitted(true);
      setCompletedStages(prev => ({ ...prev, completedQuiz: true }));
    } else {
      alert("Please answer all questions before submitting.");
    }
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setFeedbackData(null);
  };

  const renderEducation = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Educational Module: Ethical AI Use in Academia</h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Core Principles of Ethical AI Use</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded">
            <h4 className="font-semibold text-blue-700 mb-2">1. Transparency and Honesty</h4>
            <p className="text-gray-700">Always disclose when and how you have used AI tools in your academic work. Transparency builds trust and demonstrates integrity.</p>
          </div>
          <div className="bg-white p-4 rounded">
            <h4 className="font-semibold text-blue-700 mb-2">2. Intellectual Contribution</h4>
            <p className="text-gray-700">Your work should reflect your own understanding and analysis. AI should support, not replace, your intellectual effort.</p>
          </div>
          <div className="bg-white p-4 rounded">
            <h4 className="font-semibold text-blue-700 mb-2">3. Critical Evaluation</h4>
            <p className="text-gray-700">AI can produce errors, biases, and outdated information. Always verify and critically assess AI-generated content.</p>
          </div>
          <div className="bg-white p-4 rounded">
            <h4 className="font-semibold text-blue-700 mb-2">4. Learning-Centered Approach</h4>
            <p className="text-gray-700">Use AI to enhance your learning, not to bypass it. Consider whether AI use helps you achieve the learning objectives.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Scenario-Based Learning</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-green-500 pl-4">
            <div className="flex items-start gap-2 mb-2">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
              <h4 className="font-semibold text-green-700">Acceptable Use: Essay Brainstorming</h4>
            </div>
            <p className="text-gray-700 mb-2"><strong>Scenario:</strong> Sarah uses ChatGPT to generate topic ideas for her literature essay. She reviews the suggestions, selects one that interests her, and conducts her own research to develop her argument.</p>
            <p className="text-green-600 font-medium">Why it is ethical: Sarah uses AI as a brainstorming tool while maintaining ownership of her research and analysis.</p>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <div className="flex items-start gap-2 mb-2">
              <XCircle className="text-red-500 mt-1 flex-shrink-0" />
              <h4 className="font-semibold text-red-700">Unacceptable Use: Direct Submission</h4>
            </div>
            <p className="text-gray-700 mb-2"><strong>Scenario:</strong> James asks ChatGPT to write his entire essay on climate change. He makes minor edits and submits it as his own work without disclosure.</p>
            <p className="text-red-600 font-medium">Why it is unethical: This constitutes plagiarism and academic misconduct. James has not demonstrated his own understanding or met the learning objectives.</p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <div className="flex items-start gap-2 mb-2">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
              <h4 className="font-semibold text-green-700">Acceptable Use: Code Learning</h4>
            </div>
            <p className="text-gray-700 mb-2"><strong>Scenario:</strong> Maria is learning Python and uses GitHub Copilot for syntax suggestions. She reviews each suggestion, ensures she understands it, and adapts the code to her specific problem.</p>
            <p className="text-green-600 font-medium">Why it is ethical: Maria uses AI as a learning aid while developing genuine understanding and programming skills.</p>
          </div>

          <div className="border-l-4 border-amber-500 pl-4">
            <div className="flex items-start gap-2 mb-2">
              <HelpCircle className="text-amber-500 mt-1 flex-shrink-0" />
              <h4 className="font-semibold text-amber-700">Gray Area: Editing Assistance</h4>
            </div>
            <p className="text-gray-700 mb-2"><strong>Scenario:</strong> Alex writes his essay completely independently, then uses Grammarly AI to improve grammar and sentence structure.</p>
            <p className="text-amber-600 font-medium">Context-dependent: This may be acceptable if properly disclosed and if institutional policy allows editing tools. Check with your instructor.</p>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Understanding the Gray Areas</h3>
        <p className="text-gray-700 mb-4">Not all AI use is clearly ethical or unethical. Consider these factors:</p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span><strong>Assignment objectives:</strong> What skills is the assignment designed to assess?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span><strong>Institutional policy:</strong> What does your university explicitly allow or prohibit?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span><strong>Instructor guidance:</strong> Has your instructor provided specific guidelines?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span><strong>Disclosure:</strong> Can you comfortably explain your AI use to your instructor?</span>
          </li>
        </ul>
        <div className="mt-4 p-4 bg-white rounded">
          <p className="font-semibold text-purple-700">When in doubt: Ask your instructor before using AI tools.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3">The Learning Test</h3>
        <p className="text-gray-700 mb-4">Before using AI for any academic task, ask yourself:</p>
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 rounded">
            <p className="font-medium text-blue-800 mb-2">Will this AI use help me learn and understand the material better?</p>
            <p className="text-gray-600 text-sm">If yes, it is likely appropriate. If no, reconsider.</p>
          </div>
          <div className="p-4 bg-blue-50 rounded">
            <p className="font-medium text-blue-800 mb-2">Am I using AI to bypass learning or to enhance it?</p>
            <p className="text-gray-600 text-sm">Enhancing is ethical; bypassing is not.</p>
          </div>
          <div className="p-4 bg-blue-50 rounded">
            <p className="font-medium text-blue-800 mb-2">Can I explain and defend the work as my own?</p>
            <p className="text-gray-600 text-sm">If you cannot explain it, you have not truly learned it.</p>
          </div>
          <div className="p-4 bg-blue-50 rounded">
            <p className="font-medium text-blue-800 mb-2">Am I being transparent about my AI use?</p>
            <p className="text-gray-600 text-sm">Honesty is fundamental to academic integrity.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuiz = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Self-Assessment Quiz</h2>
      
      {!quizSubmitted ? (
        <>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Evaluate Your Current AI Practices</h3>
            <p className="text-gray-700">
              This confidential self-assessment will help you understand your current approach to AI use in academic work. Answer honestly to receive personalized feedback and recommendations.
            </p>
          </div>

          <div className="space-y-6">
            {quizQuestions.map((q, index) => (
              <div key={q.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-purple-600 uppercase">{q.category}</span>
                  <h3 className="text-lg font-semibold text-gray-800 mt-1">
                    {index + 1}. {q.question}
                  </h3>
                </div>
                <div className="space-y-3">
                  {q.options.map((option) => (
                    <label 
                      key={option.value}
                      className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition ${
                        quizAnswers[q.id] === option.value 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={option.value}
                        checked={quizAnswers[q.id] === option.value}
                        onChange={(e) => setQuizAnswers({...quizAnswers, [q.id]: e.target.value})}
                        className="mt-1 mr-3"
                      />
                      <span className="text-gray-700">{option.text}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleQuizSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              Submit Assessment
            </button>
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <div className={`bg-gray-50 border-l-4 ${
            feedbackData.color === 'green' ? 'border-green-500' :
            feedbackData.color === 'blue' ? 'border-blue-500' :
            feedbackData.color === 'orange' ? 'border-orange-500' :
            'border-red-500'
          } p-6 rounded-lg`}>
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
              {feedbackData.color === 'green' && <CheckCircle className="text-green-600" />}
              {feedbackData.color === 'blue' && <AlertCircle className="text-blue-600" />}
              {feedbackData.color === 'orange' && <AlertCircle className="text-orange-600" />}
              {feedbackData.color === 'red' && <XCircle className="text-red-600" />}
              Your Assessment Result
            </h3>
            <p className="text-xl font-semibold mb-2">{feedbackData.level}</p>
            <p className="text-lg mb-4">Score: {feedbackData.percentage.toFixed(0)}%</p>
            <p className="text-gray-700">{feedbackData.message}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MessageSquare className="text-blue-600" />
              Personalized Recommendations
            </h3>
            <ul className="space-y-3">
              {feedbackData.recommendations.map((rec:any, index:number) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                  <span className={`font-bold ${
                    rec.includes('URGENT') || rec.includes('PRIORITY') ? 'text-red-600' : 'text-blue-600'
                  }`}>
                    {index + 1}.
                  </span>
                  <span className="text-gray-700">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Next Steps</h3>
            <p className="text-gray-700 mb-4">
              Use the recommendations above to improve your ethical AI practices. Consider reviewing the Educational Module and Resource Hub for additional guidance.
            </p>
            <div className="flex gap-4">
              <button
                onClick={resetQuiz}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition"
              >
                Retake Assessment
              </button>
              <button
                onClick={() => setCurrentPage('resources')}
                className="bg-white hover:bg-gray-100 text-purple-600 font-semibold px-6 py-2 rounded-lg border-2 border-purple-600 transition"
              >
                View Resources
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderResources = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Resource Hub</h2>

      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-2">Guidelines, Examples and Decision Tools</h3>
        <p className="text-purple-100">Comprehensive resources to support ethical AI use in your academic journey</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <ClipboardCheck className="text-green-600" />
          Practical Checklist: Using AI in Academic Writing
        </h3>
        <p className="text-gray-700 mb-4">
          Follow this comprehensive checklist to ensure ethical and responsible AI use throughout your writing process:
        </p>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded">
            <h4 className="font-semibold text-blue-800 mb-3">1. Before Writing</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Understand the assignment: What is required? What is the learning outcome?</li>
              <li>• Know the AI rules for your course (permitted, limited, or prohibited use)</li>
              <li>• Generate your own ideas first - AI should support, not replace, your thinking</li>
              <li>• Prepare your research sources (lectures, readings, articles) before prompting AI</li>
              <li>• Avoid entering personal or confidential information into any AI tool</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
            <h4 className="font-semibold text-purple-800 mb-3">2. Using AI for Planning and Structure</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Use AI to brainstorm ideas, not to write the full answer</li>
              <li>• Ask AI for help creating essay outlines or topic breakdowns, then adapt them</li>
              <li>• Use AI to clarify confusing concepts before writing</li>
              <li>• Keep control of the structure - DO NOT copy AI outlines blindly</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-green-800 mb-3">3. Using AI for Draft Writing</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Ask AI to explain concepts, not write paragraphs for you</li>
              <li>• If using AI-generated paragraphs, always rewrite them in your own words and voice</li>
              <li>• Add your own arguments, examples, and course-related knowledge</li>
              <li>• Replace generic AI examples with real academic sources or class materials</li>
              <li>• Ensure claims made by AI are accurate and properly referenced</li>
            </ul>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded">
            <h4 className="font-semibold text-orange-800 mb-3">4. Checking AI Output</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Verify all facts using textbooks, journal articles, or reputable academic sources</li>
              <li>• Check citations: AI often invents (hallucinates) references - confirm they exist</li>
              <li>• Evaluate the depth of analysis - AI often produces shallow explanations</li>
              <li>• Remove repetitive or overly formal sentences typical of AI</li>
              <li>• Ensure the writing matches your academic level, style, and previous work</li>
            </ul>
          </div>

          <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-4 rounded">
            <h4 className="font-semibold text-indigo-800 mb-3">5. Writing the Final Draft</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Write the final assignment in your own words, using AI as support only</li>
              <li>• Integrate your own critical thinking, interpretation, and discussion</li>
              <li>• Insert credible, real academic references - not AI-generated fabrications</li>
              <li>• Make sure the writing flows logically and naturally</li>
              <li>• Check your tone - AI often writes too formally or too perfectly</li>
            </ul>
          </div>

          <div className="border-l-4 border-teal-500 pl-4 bg-teal-50 p-4 rounded">
            <h4 className="font-semibold text-teal-800 mb-3">6. Proofreading and Editing with AI</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• AI can be used for grammar checking, clarity, and rewriting for coherence</li>
              <li>• Ensure all edits support your own voice - keep it consistent</li>
              <li>• Use AI to help simplify complex sentences or improve structure</li>
              <li>• Do NOT let AI rewrite your whole assignment; revise only as needed</li>
            </ul>
          </div>

          <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded">
            <h4 className="font-semibold text-red-800 mb-3">7. Ethical and Integrity Requirements</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Do not present AI-generated text as your own without permission</li>
              <li>• Acknowledge AI assistance if required (e.g., AI was used for grammar correction)</li>
              <li>• Do not use AI to create fake references, false data, or fabricated evidence</li>
              <li>• Do not use AI to complete restricted or exam-based assessments</li>
              <li>• Ensure the final work is 100% understandable and defendable by you</li>
            </ul>
          </div>

          <div className="border-l-4 border-gray-500 pl-4 bg-gray-50 p-4 rounded">
            <h4 className="font-semibold text-gray-800 mb-3">8. Final Self-Check</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Can I explain every argument in this assignment without AI?</li>
              <li>• Does the writing sound like me?</li>
              <li>• Have I added my own critical insights?</li>
              <li>• Have I checked for plagiarism or similarity scores?</li>
              <li>• Am I following my institution's AI use policy?</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <AlertCircle className="text-blue-600" />
          Important: Understanding AI Detection Tools
        </h3>
        <div className="space-y-3 text-gray-700">
          <p className="font-semibold text-blue-800">
            AI-detection scores (e.g., Turnitin AI probability) are NOT evidence of misconduct.
          </p>
          <p>They are indicators, not proof. Universities worldwide instruct staff not to penalize students solely based on AI scores because:</p>
          <ul className="space-y-1 ml-4 text-sm">
            <li>• AI detectors produce false positives</li>
            <li>• They cannot confirm authorship</li>
            <li>• They only analyze writing style, not intent</li>
            <li>• They do not detect many forms of AI assistance</li>
          </ul>
          <p className="text-sm bg-white p-3 rounded mt-3">
            If you are flagged by an AI detector but used AI ethically (or did not use it at all), do not panic. Be prepared to explain your writing process, provide drafts if available, and discuss your work with your instructor. Responsible educators understand that these tools are imperfect.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="text-blue-600" />
          Citation Guidelines for AI Tools
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">How to Cite AI Assistance</h4>
            <p className="text-gray-700 mb-3">Different citation styles have emerging guidelines for AI tools. Here are general principles:</p>
            <div className="space-y-2 text-sm">
              <div className="bg-white p-3 rounded">
                <p className="font-semibold mb-1">In-text acknowledgment example:</p>
                <p className="text-gray-600">I used ChatGPT (OpenAI, 2024) to brainstorm initial topic ideas for this essay. All research, analysis, and writing are my own.</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold mb-1">Methods section (for research papers):</p>
                <p className="text-gray-600">ChatGPT (GPT-4, OpenAI) was used to assist with code debugging. All code was written by the author and verified for accuracy.</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-amber-50 rounded">
            <h4 className="font-semibold text-amber-800 mb-2">What to Disclose</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• The specific AI tool used (e.g., ChatGPT-4, GitHub Copilot)</li>
              <li>• How you used it (brainstorming, editing, code assistance)</li>
              <li>• The extent of use (minor suggestions vs. substantial assistance)</li>
              <li>• Any directly used AI-generated content</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <AlertCircle className="text-amber-600" />
          When in Doubt - Ask!
        </h3>
        <p className="text-gray-700">
          If you are unsure whether your planned AI use is appropriate, the best course of action is to ask your instructor before proceeding. Most educators appreciate proactive questions about academic integrity and will provide clear guidance for your specific situation.
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {currentPage === 'role-selection' && renderRoleSelection()}
      
      {currentPage !== 'role-selection' && (
        <>
          <nav className="bg-white shadow-md mb-6">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-blue-600">DEATS</span>
                  <span className="text-sm text-gray-500">Digital Ethical AI Toolkit</span>
                  {userRole && (
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      userRole === 'student' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                    }`}>
                      {userRole === 'student' ? 'Student' : 'Instructor'}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex space-x-1">
                    <button
                      onClick={() => setCurrentPage('dashboard')}
                      className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${
                        currentPage === 'dashboard' 
                          ? 'bg-blue-100 text-blue-700 font-semibold' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Home size={18} />
                      <span className="hidden sm:inline">Dashboard</span>
                    </button>
                    {userRole === 'student' && (
                      <>
                        <button
                          onClick={() => setCurrentPage('education')}
                          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${
                            currentPage === 'education' 
                              ? 'bg-blue-100 text-blue-700 font-semibold' 
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <BookOpen size={18} />
                          <span className="hidden sm:inline">Learn</span>
                        </button>
                        <button
                          onClick={() => setCurrentPage('quiz')}
                          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${
                            currentPage === 'quiz' 
                              ? 'bg-blue-100 text-blue-700 font-semibold' 
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <ClipboardCheck size={18} />
                          <span className="hidden sm:inline">Quiz</span>
                        </button>
                        <button
                          onClick={() => setCurrentPage('resources')}
                          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${
                            currentPage === 'resources' 
                              ? 'bg-blue-100 text-blue-700 font-semibold' 
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <Library size={18} />
                          <span className="hidden sm:inline">Resources</span>
                        </button>
                      </>
                    )}
                  </div>
          <button
            onClick={() => {
              setUserRole(null);
              setCurrentPage('role-selection');
              setQuizAnswers({});
              setQuizSubmitted(false);
              setFeedbackData(null);
              setCompletedStages({
                visitedDashboard: false,
                readEducation: false,
                completedQuiz: false,
                viewedResources: false,
                viewedChecklist: false
              });
            }}
            className="text-sm text-gray-600 hover:text-gray-800 underline"
          >
            Switch Role
          </button>
                </div>
              </div>
            </div>
          </nav>

          <div className="max-w-7xl mx-auto px-4 pb-8">
            {currentPage === 'dashboard' && userRole === 'student' && renderStudentDashboard()}
            {currentPage === 'dashboard' && userRole === 'instructor' && renderInstructorDashboard()}
            {currentPage === 'education' && userRole === 'student' && renderEducation()}
            {currentPage === 'quiz' && userRole === 'student' && renderQuiz()}
            {currentPage === 'resources' && userRole === 'student' && renderResources()}
          </div>

          <footer className="bg-white border-t mt-12 py-6">
            <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
              <p className="text-sm mb-2">
                <strong>DEATS</strong> - Digital Ethical AI Toolkit for Students
              </p>
              <p className="text-xs text-gray-500">
                Research Project: Ethical Implications of AI in Academic Work Among UK Students
              </p>
              <p className="text-xs text-gray-500 mt-1">
                MSc Information Technology - Newcastle University
              </p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
export default DEATSToolkit