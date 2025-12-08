import { useState, useEffect } from 'react';
import { BookOpen, Pencil, MessageCircle, Target, Eye, Users, GraduationCap, Heart, Star, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [remoteModalOpen, setRemoteModalOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen || remoteModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, remoteModalOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMobileMenu();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#" className="flex items-center">
              <img
                src="/cpy-tbec4-removebg-preview.png"
                alt="TBEC Logo"
                className="h-14 w-auto hover:scale-105 transition-transform duration-200"
              />
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="text-blue-900 hover:text-cyan-500 font-medium transition">About</a>
              <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="text-blue-900 hover:text-cyan-500 font-medium transition">Services</a>
              <a href="#why-us" onClick={(e) => handleSmoothScroll(e, 'why-us')} className="text-blue-900 hover:text-cyan-500 font-medium transition">Why TBEC</a>
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="text-blue-900 hover:text-cyan-500 font-medium transition">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="hidden sm:block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105">
                Get Started
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-xl hover:shadow-lg transition transform hover:scale-105"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-900 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-orange-400 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>

        <div className="relative h-full flex flex-col p-8">
          {/* Close Button */}
          <button
            onClick={closeMobileMenu}
            className="absolute top-6 right-6 bg-white/20 backdrop-blur text-white p-3 rounded-xl hover:bg-white/30 transition"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="mb-12 mt-8">
            <img
              src="/cpy-tbec4-removebg-preview.png"
              alt="TBEC Logo"
              className="h-20 w-auto"
            />
          </div>

          {/* Menu Links */}
          <nav className="flex-1 flex flex-col space-y-2">
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="flex items-center space-x-4 bg-white/10 backdrop-blur text-white px-6 py-4 rounded-2xl hover:bg-white/20 transition transform hover:scale-105 active:scale-95"
            >
              <Heart className="w-6 h-6" />
              <span className="text-xl font-semibold">About Us</span>
            </a>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, 'services')}
              className="flex items-center space-x-4 bg-white/10 backdrop-blur text-white px-6 py-4 rounded-2xl hover:bg-white/20 transition transform hover:scale-105 active:scale-95"
            >
              <GraduationCap className="w-6 h-6" />
              <span className="text-xl font-semibold">Services</span>
            </a>
            <a
              href="#why-us"
              onClick={(e) => handleSmoothScroll(e, 'why-us')}
              className="flex items-center space-x-4 bg-white/10 backdrop-blur text-white px-6 py-4 rounded-2xl hover:bg-white/20 transition transform hover:scale-105 active:scale-95"
            >
              <Star className="w-6 h-6" />
              <span className="text-xl font-semibold">Why TBEC</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="flex items-center space-x-4 bg-white/10 backdrop-blur text-white px-6 py-4 rounded-2xl hover:bg-white/20 transition transform hover:scale-105 active:scale-95"
            >
              <Phone className="w-6 h-6" />
              <span className="text-xl font-semibold">Contact</span>
            </a>
          </nav>

          {/* Get Started Button */}
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-5 rounded-2xl text-xl font-bold text-center hover:shadow-2xl transition transform hover:scale-105 active:scale-95 mt-8"
          >
            Get Started Today
          </a>

          {/* Age Range Display */}
          <div className="bg-white/10 backdrop-blur text-white px-6 py-4 rounded-2xl text-center mt-4">
            <p className="text-sm font-semibold opacity-90">Serving Ages</p>
            <p className="text-3xl font-bold">3 - 6 Years</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-orange-50">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-400 rounded-full opacity-20 animate-pulse delay-300"></div>
        <div className="absolute top-40 left-1/4 w-24 h-24 bg-yellow-400 rounded-full opacity-15"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-blue-900">Little Minds,</span>
                <br />
                <span className="text-orange-500">Big Possibilities</span>
              </h1>
              <p className="text-xl text-blue-800 leading-relaxed text-left md:text-justify">
                Building a strong foundation through fun and learning for children ages 3-6 years old
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition transform hover:scale-105">
                  Enroll Now
                </a>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="bg-white text-blue-900 border-2 border-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-900 hover:text-white transition transform hover:scale-105">
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-30 blur-3xl"></div>
              <img
                src="/tbec1.jpg"
                alt="Happy child reading"
                className="relative rounded-3xl shadow-2xl w-full hover:scale-105 transition duration-300"
              />
              <div className="absolute -bottom-6 -left-6 bg-cyan-500 text-white p-4 rounded-2xl shadow-xl">
                <Star className="w-8 h-8 fill-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Teacher Alice */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/tbec3.jpg"
                alt="Teacher Alice and students"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -top-6 -right-6 bg-yellow-400 p-6 rounded-2xl shadow-xl">
                <Heart className="w-10 h-10 text-white fill-white" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Meet Our Director
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
                Teacher Alice Salami
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-left md:text-justify">
                A passionate educator with nearly a decade of experience, Teacher Alice has dedicated her life to helping children overcome learning challenges. Her journey began when she discovered that many pupils struggled with reading, writing, and speech impediments despite attending expensive schools.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-left md:text-justify">
                This discovery sparked a special calling in her spirit—to provide real solutions for children between the ages of 3 and 6 years old. TBEC was born from this mission.
              </p>
              <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-lg">
                <p className="text-blue-900 font-semibold italic">
                  "I am committed to ensuring that the cognitive, affective, and psychomotor capabilities of every child are skillfully shepherded, leading to all-round excellent educational performance."
                </p>
                <p className="text-cyan-700 font-medium mt-2">- Teacher Alice Salami</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Challenges We Solve
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-left md:text-justify">
              TBEC specializes in helping children overcome these common learning obstacles
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:scale-105">
              <div className="bg-gradient-to-br from-orange-400 to-red-400 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Reading Difficulties</h3>
              <p className="text-gray-700 leading-relaxed text-left md:text-justify">
                We help children develop strong reading skills through proven methods and personalized attention, building confidence one word at a time.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:scale-105">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-400 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <Pencil className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Writing Challenges</h3>
              <p className="text-gray-700 leading-relaxed text-left md:text-justify">
                Our specialized techniques help children master writing skills, from proper grip to confident expression of their thoughts on paper.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:scale-105">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Speech Impediment</h3>
              <p className="text-gray-700 leading-relaxed text-left md:text-justify">
                We provide supportive environments and expert guidance to help children overcome speech challenges and communicate clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 to-cyan-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-900 p-4 rounded-2xl flex-shrink-0">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-900 mb-4">
                    Vision Statement
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed text-left md:text-justify">
                    We are on assignment to ensure that the Cognitive, Affective and Psychomotor capabilities of every child between the ages 3-6 years old are skillfully sharpened thereby leading to all-round excellent educational performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-900 p-4 rounded-2xl flex-shrink-0">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-900 mb-4">
                    Mission Statement
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed text-left md:text-justify">
                    We are committed to employing current educational methodology in the dissemination of quality knowledge to our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-left md:text-justify">
              We offer flexible options to meet your child's unique needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-10 shadow-xl border-2 border-orange-200 hover:shadow-2xl transition transform hover:scale-105">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Private Consultation</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left md:text-justify">
                One-on-one sessions tailored to your child's specific challenges. Get personalized attention and customized learning plans that target reading, writing, or speech difficulties.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Individual assessment and progress tracking
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Flexible scheduling for busy parents
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Direct communication with Teacher Alice
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-10 shadow-xl border-2 border-cyan-200 hover:shadow-2xl transition transform hover:scale-105">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">School Enrollment</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left md:text-justify">
                Full immersion in our specialized educational environment. Join our community of learners where every child receives the attention they deserve in a fun, nurturing setting.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  Structured learning programs
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  Small class sizes for maximum attention
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  Proven educational methodologies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TBEC */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-yellow-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-300 rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Why Choose TBEC?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-left md:text-justify">
              TBEC is your best shot for securing your child's educational excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <img
                src="/tbec3.jpg"
                alt="Student with learning materials"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-3xl shadow-xl">
                <div className="flex items-center space-x-2 text-white">
                  <Star className="w-6 h-6 fill-white" />
                  <span className="font-bold text-xl">Excellence</span>
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <h4 className="text-xl font-bold text-blue-900 mb-2">Nearly a Decade of Experience</h4>
                <p className="text-gray-700 text-left md:text-justify">Teacher Alice brings years of expertise in early childhood education and special needs learning.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <h4 className="text-xl font-bold text-blue-900 mb-2">Proven Methods</h4>
                <p className="text-gray-700 text-left md:text-justify">We employ recent and proven educational methods designed specifically for children ages 3-6.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <h4 className="text-xl font-bold text-blue-900 mb-2">Holistic Development</h4>
                <p className="text-gray-700 text-left md:text-justify">We focus on cognitive, affective, and psychomotor development for well-rounded growth.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <h4 className="text-xl font-bold text-blue-900 mb-2">More Than Just a School</h4>
                <p className="text-gray-700 text-left md:text-justify">TBEC is an institution where young lives are shepherded to secure their excellence for the future.</p>
              </div>
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl p-6 shadow-xl">
                <p className="text-xl font-bold mb-2">You have nothing to fear!</p>
                <p className="text-lg">TBEC is your best shot for your child's success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto text-left md:text-justify">
              Reach out to us today. We're ready to meet you at the very point of your need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <a href="tel:07064567059" className="bg-cyan-500 p-3 rounded-xl hover:bg-cyan-600 transition-colors cursor-pointer">
                      <Phone className="w-6 h-6" />
                    </a>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <div className="text-blue-100">
                        <p>07064567059</p>
                        <p>07062409018</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-500 p-3 rounded-xl">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-blue-100">info@tbec.edu</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-500 p-3 rounded-xl flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold mb-2">Location</p>
                      <p className="text-blue-100 mb-3 leading-relaxed">
                        We run a fully remote system, physical classes can be arranged when necessary
                      </p>
                      <button
                        onClick={() => setRemoteModalOpen(true)}
                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition transform hover:scale-105"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4">Ages We Serve</h3>
                <p className="text-3xl font-bold mb-2">3 - 6 Years Old</p>
                <p className="text-lg">Specialized early childhood education</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none text-gray-900"
                    placeholder="Parent/Guardian Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none text-gray-900"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none text-gray-900"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none text-gray-900"
                    placeholder="Tell us about your child's needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Learning Modal */}
      {remoteModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
            onClick={() => setRemoteModalOpen(false)}
          />
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <div
                className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full mx-auto transform transition-all duration-300 animate-in"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setRemoteModalOpen(false)}
                  className="absolute top-6 right-6 bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-xl transition-colors z-10"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Modal Header */}
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-8 rounded-t-3xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-white/20 backdrop-blur p-3 rounded-xl">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">Our Remote Learning Strategy</h3>
                      <p className="text-blue-100 text-lg">Bringing Excellence to Your Doorstep</p>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                  {/* Introduction */}
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-l-4 border-orange-500 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-blue-900 mb-3">Why Remote Learning at TBEC?</h4>
                    <p className="text-gray-700 leading-relaxed text-left md:text-justify">
                      At TBEC, we understand that quality education should be accessible to every child, regardless of location. Our remote learning system is specifically designed to provide the same level of personalized attention and educational excellence that you'd expect from traditional classroom settings.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-blue-900">How Our Remote System Works</h4>

                    <div className="bg-white border-2 border-cyan-200 rounded-xl p-5 hover:shadow-lg transition">
                      <div className="flex items-start space-x-4">
                        <div className="bg-cyan-500 p-2 rounded-lg flex-shrink-0">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h5 className="font-bold text-blue-900 mb-2">One-on-One Video Sessions</h5>
                          <p className="text-gray-700 text-left md:text-justify">
                            Each child receives dedicated attention through live video sessions with Teacher Alice. This personalized approach ensures that your child's specific learning challenges are addressed effectively.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border-2 border-blue-200 rounded-xl p-5 hover:shadow-lg transition">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h5 className="font-bold text-blue-900 mb-2">Customized Learning Plans</h5>
                          <p className="text-gray-700 text-left md:text-justify">
                            We create tailored learning programs that target your child's unique needs—whether it's reading difficulties, writing challenges, or speech impediments. Progress is tracked and plans are adjusted to ensure continuous improvement.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border-2 border-orange-200 rounded-xl p-5 hover:shadow-lg transition">
                      <div className="flex items-start space-x-4">
                        <div className="bg-orange-500 p-2 rounded-lg flex-shrink-0">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h5 className="font-bold text-blue-900 mb-2">Interactive Learning Materials</h5>
                          <p className="text-gray-700 text-left md:text-justify">
                            We provide engaging digital resources and activities that make learning fun and effective. Parents receive guidance on how to support their child's learning journey at home.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border-2 border-yellow-200 rounded-xl p-5 hover:shadow-lg transition">
                      <div className="flex items-start space-x-4">
                        <div className="bg-yellow-500 p-2 rounded-lg flex-shrink-0">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h5 className="font-bold text-blue-900 mb-2">Flexible Scheduling</h5>
                          <p className="text-gray-700 text-left md:text-justify">
                            Our remote system allows for flexible scheduling that fits into your family's routine, making it easier to balance education with other commitments without compromising on quality.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Business Alignment */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-blue-900 mb-3">Why This Aligns With Our Mission</h4>
                    <p className="text-gray-700 leading-relaxed mb-3 text-left md:text-justify">
                      Our remote learning strategy perfectly aligns with TBEC's mission to ensure that every child between the ages of 3-6 receives the attention they need to excel. By operating remotely, we can:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-left md:text-justify">Reach more families who might not have access to quality specialized education in their area</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-left md:text-justify">Provide consistent, focused attention that addresses each child's cognitive, affective, and psychomotor development</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-left md:text-justify">Maintain the same high standards of educational excellence regardless of physical location</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-left md:text-justify">Keep costs accessible while delivering premium educational services</span>
                      </li>
                    </ul>
                  </div>

                  {/* Physical Classes Note */}
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-xl">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-xl font-bold mb-3">Interested in Physical Classes?</h4>
                        <p className="leading-relaxed mb-4 text-left md:text-justify">
                          While we primarily operate remotely to maximize accessibility and flexibility, we understand that some families prefer in-person instruction. Physical classes can be arranged on a case-by-case basis to meet your specific needs.
                        </p>
                        <p className="font-semibold mb-3">
                          To inquire about physical class arrangements:
                        </p>
                        <a
                          href="#contact"
                          onClick={(e) => {
                            handleSmoothScroll(e, 'contact');
                            setRemoteModalOpen(false);
                          }}
                          className="inline-block bg-white text-orange-600 px-6 py-3 rounded-xl font-bold hover:shadow-xl transition transform hover:scale-105"
                        >
                          Send Us a Message
                        </a>
                        <p className="text-sm mt-3 text-orange-100">
                          Fill in your details using our contact form below, and we'll reach out to discuss how we can accommodate your preferences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="bg-gray-50 p-6 rounded-b-3xl flex justify-end">
                  <button
                    onClick={() => setRemoteModalOpen(false)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition transform hover:scale-105"
                  >
                    Got It!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="/cpy-tbec4-removebg-preview.png"
                alt="TBEC Logo"
                className="h-12 w-auto mb-4"
              />
              <p className="text-blue-200 mb-2 font-semibold">The Balanced Educational Citadel</p>
              <p className="text-blue-300 text-sm text-left md:text-justify">
                Securing excellence in young children between the ages of 3-6 years old
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="hover:text-cyan-400 transition">About Us</a></li>
                <li><a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="hover:text-cyan-400 transition">Services</a></li>
                <li><a href="#why-us" onClick={(e) => handleSmoothScroll(e, 'why-us')} className="hover:text-cyan-400 transition">Why TBEC</a></li>
                <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="hover:text-cyan-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Our Focus</h4>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Reading Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Pencil className="w-4 h-4 text-yellow-400" />
                  <span>Writing Skills</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-orange-400" />
                  <span>Speech Therapy</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center text-blue-300">
            <p>&copy; {new Date().getFullYear()} The Balanced Educational Citadel (TBEC). All rights reserved.</p>
            <p className="mt-2 text-sm">Empowering young minds for a brighter future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
