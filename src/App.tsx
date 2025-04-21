import React from 'react';
import { Github, Linkedin, Mail, Phone, FileText, BookOpen, Headphones, PenTool } from 'lucide-react';

function App() {
  const projects = [
    {
      title: 'Food Delivery Website',
      description: 'A full-stack food delivery platform with real-time order tracking and payment integration.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=500',
    },
    {
      title: 'Amazon clone',
      description: 'E-commerce platform with user authentication, product catalog, and shopping cart functionality.',
      technologies: ['React.js', 'Firebase', 'Stripe', 'Material-UI'],
      image: 'https://images.unsplash.com/photo-1565461133566-e35e9e120d5f?auto=format&fit=crop&q=80&w=500',
    },
    {
      title: 'Calculator',
      description: 'Interactive calculator application with advanced mathematical operations and history tracking.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
      image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=500',
    },
    {
      title: 'Employee management system',
      description: 'Comprehensive system for managing employee data, attendance, and performance tracking.',
      technologies: ['React.js', 'Node.js', 'MySQL', 'Express.js'],
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=500',
    },
    {
      title: 'E-commerce Website',
      description: 'Feature-rich online shopping platform with product management and order processing.',
      technologies: ['React.js', 'Redux', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=500',
    },
  ];

  const certifications = [
    {
      title: 'Python 3 Programming',
      provider: 'Coursera',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=500',
      icon: <FileText className="text-blue-600" size={24} />,
    },
    {
      title: 'JavaScript',
      provider: 'Infosys Springboard',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=500',
      icon: <FileText className="text-blue-600" size={24} />,
    },
    {
      title: 'Node.js',
      provider: 'Infosys Springboard',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=500',
      icon: <FileText className="text-blue-600" size={24} />,
    },
    {
      title: 'React.js',
      provider: 'Infosys Springboard',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=500',
      icon: <FileText className="text-blue-600" size={24} />,
    },
    {
      title: 'React Native',
      provider: 'Infosys Springboard',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=500',
      icon: <FileText className="text-blue-600" size={24} />,
    },
    {
      title: 'Basic C-Sharp Programming',
      provider: 'Infosys Springboard',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=500',
      icon: <FileText className="text-blue-600" size={24} />,
    },
    {
      title: 'Empower Lives with Technology',
      provider: 'Infosys Springboard',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=500',
      icon: <FileText className="text-blue-600" size={24} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <img
              src="/Image.png"
              alt="Jyoti Sharma"
              className="w-48 h-48 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Jyoti Sharma</h1>
              <p className="text-xl md:text-2xl mb-6">Mern Stack Developer</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:8847219249" className="flex items-center gap-2 hover:text-blue-200">
                  <Phone size={20} /> +91 8847219249
                </a>
                <a href="mailto:jyotisharma6672@gmail.com" className="flex items-center gap-2 hover:text-blue-200">
                  <Mail size={20} /> jyotisharma6672@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/jyoti-sharma-5175042b9/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-200">
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a href="https://github.com/JyotiSharma72" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-200">
                  <Github size={20} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Professional Summary</h2>
          <p className="text-gray-600 leading-relaxed">
            A highly motivated and detail-oriented Mern Stack Developer with expertise in React.js, Node.js, and MySQL.
            Passionate about developing scalable web applications and improving user experiences through innovative
            solutions. Strong problem-solving and analytical skills with a keen interest in learning new technologies.
            Looking for an opportunity to contribute my technical skills and grow in a dynamic development
            environment.
          </p>
        </section>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Programming Skills</h2>
            <div className="space-y-2">
              <p className="text-gray-600">• C++</p>
              <p className="text-gray-600">• JavaScript</p>
              <p className="text-gray-600">• Python</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Interpersonal Skills</h2>
            <div className="space-y-2">
              <p className="text-gray-600">• Teamwork</p>
              <p className="text-gray-600">• Decision making</p>
              <p className="text-gray-600">• Self-awareness</p>
            </div>
          </section>
        </div>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div key={cert.title} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {cert.icon}
                    <h3 className="text-lg font-semibold text-gray-800">{cert.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Issued by {cert.provider}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages & Interests */}
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Languages</h2>
            <div className="space-y-2 text-gray-600">
              <p>• English</p>
              <p>• Hindi</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Interests & Hobbies</h2>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <PenTool size={20} /> Writing
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <BookOpen size={20} /> Reading
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Headphones size={20} /> Listening
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Jyoti Sharma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;