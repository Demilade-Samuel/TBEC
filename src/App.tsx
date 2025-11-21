import { useState } from 'react';
import { BookOpen, Pencil, MessageCircle, Target, Eye, Users, GraduationCap, Heart, Star, Phone, Mail, MapPin } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 text-3xl font-bold">
                <span className="text-orange-500">T</span>
                <span className="text-yellow-500">B</span>
                <span className="text-cyan-500">E</span>
                <span className="text-blue-900">C</span>
              </div>
              <div className="hidden md:block">
                <p className="text-blue-900 font-semibold text-sm">The Balanced</p>
                <p className="text-blue-900 font-semibold text-sm">Educational Citadel</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-blue-900 hover:text-cyan-500 font-medium transition">About</a>
              <a href="#services" className="text-blue-900 hover:text-cyan-500 font-medium transition">Services</a>
              <a href="#why-us" className="text-blue-900 hover:text-cyan-500 font-medium transition">Why TBEC</a>
              <a href="#contact" className="text-blue-900 hover:text-cyan-500 font-medium transition">Contact</a>
            </div>
            <a href="#contact" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105">
              Get Started
            </a>
          </div>
        </div>
      </nav>

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
              <p className="text-xl text-blue-800 leading-relaxed">
                Building a strong foundation through fun and learning for children ages 3-6 years old
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition transform hover:scale-105">
                  Enroll Now
                </a>
                <a href="#about" className="bg-white text-blue-900 border-2 border-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-900 hover:text-white transition transform hover:scale-105">
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
              <p className="text-lg text-gray-700 leading-relaxed">
                A passionate educator with nearly a decade of experience, Teacher Alice has dedicated her life to helping children overcome learning challenges. Her journey began when she discovered that many pupils struggled with reading, writing, and speech impediments despite attending expensive schools.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This discovery sparked a special calling in her spirit—to provide real solutions for children between the ages of 3 and 6 years old. TBEC was born from this mission.
              </p>
              <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-lg">
                <p className="text-blue-900 font-semibold italic">
                  "I am committed to ensuring that the cognitive, affective, and psychomotor capabilities of every child are skillfully shepherded, leading to all-round excellent academic performance."
                </p>
                <p className="text-cyan-700 font-medium mt-2">- Teacher Alice Salami</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges We Address */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Challenges We Address
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              TBEC specializes in helping children overcome these common learning obstacles
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:scale-105">
              <div className="bg-gradient-to-br from-orange-400 to-red-400 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Reading Difficulties</h3>
              <p className="text-gray-700 leading-relaxed">
                We help children develop strong reading skills through proven methods and personalized attention, building confidence one word at a time.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:scale-105">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-400 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <Pencil className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Writing Challenges</h3>
              <p className="text-gray-700 leading-relaxed">
                Our specialized techniques help children master writing skills, from proper grip to confident expression of their thoughts on paper.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:scale-105">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Speech Impediment</h3>
              <p className="text-gray-700 leading-relaxed">
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
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We are on assignment to ensure that the Cognitive, Affective and Psychomotor capabilities of every child between the ages 3-6 years old are skillfully sharpened thereby leading to all-round excellent academic performance.
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
                  <p className="text-lg text-gray-700 leading-relaxed">
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
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We offer flexible options to meet your child's unique needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-10 shadow-xl border-2 border-orange-200 hover:shadow-2xl transition transform hover:scale-105">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Private Consultation</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                One-on-one sessions tailored to your child's specific challenges. Get personalized attention and customized learning plans that address reading, writing, or speech difficulties.
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
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
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
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              TBEC is your best shot for securing your child's academic excellence
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
                <p className="text-gray-700">Teacher Alice brings years of expertise in early childhood education and special needs learning.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <h4 className="text-xl font-bold text-blue-900 mb-2">Proven Methods</h4>
                <p className="text-gray-700">We employ recent and proven educational methods designed specifically for children ages 3-6.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <h4 className="text-xl font-bold text-blue-900 mb-2">Holistic Development</h4>
                <p className="text-gray-700">We focus on cognitive, affective, and psychomotor development for well-rounded growth.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <h4 className="text-xl font-bold text-blue-900 mb-2">More Than Just a School</h4>
                <p className="text-gray-700">TBEC is an institution where young lives are shepherded to secure their excellence for the future.</p>
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
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Reach out to us today. We're ready to meet you at the very point of your need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-cyan-500 p-3 rounded-xl">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-blue-100">Contact us for our number</p>
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
                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-500 p-3 rounded-xl">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-blue-100">Visit us for address details</p>
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
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

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-1 text-3xl font-bold mb-4">
                <span className="text-orange-500">T</span>
                <span className="text-yellow-500">B</span>
                <span className="text-cyan-500">E</span>
                <span className="text-white">C</span>
              </div>
              <p className="text-blue-200 mb-2 font-semibold">The Balanced Educational Citadel</p>
              <p className="text-blue-300 text-sm">
                Securing excellence in young children between the ages of 3-6 years old
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#about" className="hover:text-cyan-400 transition">About Us</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition">Services</a></li>
                <li><a href="#why-us" className="hover:text-cyan-400 transition">Why TBEC</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
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
            <p>&copy; 2024 The Balanced Educational Citadel (TBEC). All rights reserved.</p>
            <p className="mt-2 text-sm">Empowering young minds for a brighter future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
