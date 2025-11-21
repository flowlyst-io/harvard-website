export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold">Harvard Public Schools</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#news" className="hover:text-accent transition">News</a>
            <a href="#events" className="hover:text-accent transition">Events</a>
            <a href="#schools" className="hover:text-accent transition">Our Schools</a>
            <a href="#contact" className="hover:text-accent transition">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-sm hover:text-accent transition" aria-label="Search">
              🔍
            </button>
            <button className="text-sm hover:text-accent transition" aria-label="Translate">
              🌐
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-light text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Every Student, Every Day
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Dynamic Learning, Inclusive Community, Every Student Thrives
            </p>
            <p className="text-lg mb-8">
              Welcome to Harvard Public Schools! High-quality education and a caring community for all learners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-lg transition text-center"
              >
                Enroll Now
              </a>
              <a
                href="#academics"
                className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-lg transition text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-12 text-primary">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: "🎓", label: "Parent Portal", href: "#" },
              { icon: "📝", label: "Student Registration", href: "#" },
              { icon: "🍽️", label: "Lunch Menu & Payments", href: "#" },
              { icon: "🚌", label: "Transportation", href: "#" },
              { icon: "📅", label: "Calendar", href: "#events" },
              { icon: "📞", label: "Staff Directory", href: "#contact" },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <span className="text-4xl mb-3">{link.icon}</span>
                <span className="text-sm font-semibold text-center text-gray-700">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching & Learning */}
      <section id="academics" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-primary">Teaching and Learning at HPS</h3>
              <p className="text-lg text-gray-700 mb-6">
                At Harvard Public Schools, learning is more than just academics. Our curriculum is innovative and student-centered, and we support each child's growth with inclusive teaching practices and enriching programs.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span className="text-gray-700">Rigorous, standards-based curriculum across all grades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span className="text-gray-700">Dedicated teachers and ongoing professional development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span className="text-gray-700">Commitment to equity, inclusion, and whole-child development</span>
                </li>
              </ul>
              <a href="#" className="text-primary hover:text-accent font-semibold underline">
                Explore Academics →
              </a>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-center px-4">Students engaged in collaborative learning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section id="news" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-primary">Latest News</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                date: "Nov 17, 2025",
                title: "School Committee Update",
                summary: "Highlights from the latest School Committee meeting including policy updates and budget discussions."
              },
              {
                date: "Nov 15, 2025",
                title: "District Newsletter - November",
                summary: "Read the latest news and updates from around the district, including upcoming events and achievements."
              },
              {
                date: "Nov 10, 2025",
                title: "Gluten-Free Options Now Available",
                summary: "We're excited to announce daily gluten-free lunch options for students with dietary restrictions!"
              },
            ].map((news, idx) => (
              <article key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <p className="text-sm text-accent font-semibold mb-2">{news.date}</p>
                <h4 className="text-xl font-bold mb-3 text-primary">{news.title}</h4>
                <p className="text-gray-700 mb-4">{news.summary}</p>
                <a href="#" className="text-primary hover:text-accent font-semibold">
                  Read More →
                </a>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#" className="text-primary hover:text-accent font-semibold underline text-lg">
              View All News
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-primary">Upcoming Events</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { date: "Dec 10, 2025", day: "Thursday", event: "Winter Instrumental Concert", time: "6:30 PM - 8:00 PM" },
              { date: "Dec 15, 2025", day: "Monday", event: "TBMS School Council Meeting", time: "7:00 PM" },
              { date: "Dec 20, 2025", day: "Friday", event: "Early Release Day", time: "12:00 PM" },
              { date: "Dec 23-Jan 3", day: "Mon-Fri", event: "Winter Break - No School", time: "All Day" },
            ].map((event, idx) => (
              <div key={idx} className="flex items-center bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
                <div className="bg-accent text-white p-4 rounded-lg text-center mr-4 min-w-[80px]">
                  <p className="text-sm font-bold">{event.date.split(",")[0]}</p>
                  <p className="text-xs">{event.day}</p>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{event.event}</h4>
                  <p className="text-sm text-gray-600">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition inline-block">
              View Full Calendar
            </a>
          </div>
        </div>
      </section>

      {/* District Highlights */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Diversity, Equity & Inclusion</h3>
            <p className="text-xl mb-8">
              Every student deserves to feel safe, respected, and included. Harvard Public Schools is committed to an inclusive community where everyone finds belonging.
            </p>
            <a href="#" className="bg-white hover:bg-gray-100 text-accent font-bold py-3 px-8 rounded-lg transition inline-block">
              Our DEI Initiatives
            </a>
          </div>
        </div>
      </section>

      {/* Superintendent Message */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-primary text-center">Message from the Superintendent</h3>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-32 h-32 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-gray-600 text-center text-sm">Superintendent Photo</span>
                </div>
                <div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    "Welcome to Harvard Public Schools! It's my pleasure to serve as Superintendent in this wonderful community. Our district welcomes all students and their families. We are committed to helping every child learn and grow in a safe, inclusive environment. Thank you for partnering with us – together we make Harvard Public Schools great."
                  </p>
                  <p className="font-semibold text-primary">Linda G. Dwight</p>
                  <p className="text-gray-600">Superintendent of Schools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Schools */}
      <section id="schools" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-primary text-center">Our Schools</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Hildreth Elementary School", grades: "PreK–5", href: "#" },
              { name: "The Bromfield Middle School", grades: "6–8", href: "#" },
              { name: "The Bromfield High School", grades: "9–12", href: "#" },
            ].map((school, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg shadow hover:shadow-xl transition text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                  {school.name.charAt(0)}
                </div>
                <h4 className="text-xl font-bold mb-2 text-primary">{school.name}</h4>
                <p className="text-gray-600 mb-6">Grades {school.grades}</p>
                <a
                  href={school.href}
                  className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-6 rounded-lg transition inline-block"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-primary text-center">Contact Us</h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h4 className="text-xl font-bold mb-6 text-primary">District Office</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-accent mr-3 text-xl">📍</span>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-700">27A Massachusetts Avenue</p>
                    <p className="text-gray-700">Harvard, MA 01451</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3 text-xl">📞</span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-700">(978) 456-4140</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3 text-xl">📠</span>
                  <div>
                    <p className="font-semibold">Fax</p>
                    <p className="text-gray-700">(978) 456-8592</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3 text-xl">🕐</span>
                  <div>
                    <p className="font-semibold">Office Hours</p>
                    <p className="text-gray-700">Monday – Friday</p>
                    <p className="text-gray-700">8:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="mailto:info@psharvard.org"
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition inline-block"
                >
                  Email Us
                </a>
              </div>
            </div>
            <div>
              <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 text-center px-4">
                  Google Maps Integration<br />
                  27A Massachusetts Ave, Harvard, MA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Harvard Public Schools</h4>
              <p className="text-gray-300 text-sm">
                Dynamic learning, inclusive community, every student thrives.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-accent transition">Accessibility</a></li>
                <li><a href="#" className="text-gray-300 hover:text-accent transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-accent transition">Non-Discrimination Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-accent transition">Site Map</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
              <div className="flex space-x-4 text-2xl">
                <a href="#" aria-label="Facebook" className="hover:text-accent transition">📘</a>
                <a href="#" aria-label="Twitter" className="hover:text-accent transition">🐦</a>
                <a href="#" aria-label="Instagram" className="hover:text-accent transition">📷</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-sm text-gray-300">
              Harvard Public Schools is an equal opportunity employer and educator. We do not discriminate on the basis of race, color, sex, gender identity, religion, national origin, age, disability, or sexual orientation.
            </p>
            <p className="text-center text-sm text-gray-400 mt-4">
              © 2025 Harvard Public Schools. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
