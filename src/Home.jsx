export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans p-8">

      {/* Header */}
      <header className="bg-white shadow p-4 mb-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">LearnFree Digital</h1>
          <nav className="space-x-4">
            <a href="#about" className="text-slate-600 hover:text-sky-600">About</a>
            <a href="#programs" className="text-slate-600 hover:text-sky-600">Programs</a>
            <a href="#contact" className="text-slate-600 hover:text-sky-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">Free & Digital Learning for All</h2>
        <p className="mt-2 text-slate-600">Empowering youth with digital skills and practical knowledge.</p>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto bg-white rounded shadow p-8 mb-8">
        <h3 className="text-2xl font-bold">About LearnFree Digital</h3>
        <p className="mt-2 text-slate-600">
          We provide free, accessible, and practical digital education for students, youth, and entrepreneurs.
        </p>
      </section>

      {/* Programs */}
      <section id="programs" className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-white rounded shadow">
          <h4 className="font-bold">Digital Skills</h4>
          <p className="text-sm text-slate-600 mt-1">Web, freelancing, AI tools, and online work skills.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h4 className="font-bold">Free Learning</h4>
          <p className="text-sm text-slate-600 mt-1">Open resources and guided self-learning paths.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h4 className="font-bold">Youth Empowerment</h4>
          <p className="text-sm text-slate-600 mt-1">Supporting youth with practical digital knowledge.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h4 className="font-bold">Community Projects</h4>
          <p className="text-sm text-slate-600 mt-1">Real projects and mentorship for learners.</p>
        </div>
      </section>

      {/* Contact / Location */}
      <section id="contact" className="max-w-6xl mx-auto bg-white rounded shadow p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">Contact & Location</h3>
        <p className="text-slate-600">📍 Location: Mwanza, Tanzania</p>
        <p className="text-slate-600 mt-1">📞 Phone: +255 752 651 956</p>
        <p className="text-slate-600 mt-1">📧 Email: <a href="mailto:info@learnfreedigital.com" className="text-sky-600 underline">info@learnfreedigital.com</a></p>

        <div className="mt-4 space-x-4">
          <a href="https://youtu.be/" target="_blank" className="text-red-600 underline">YouTube</a>
          <a href="https://tiktok.com/" target="_blank" className="text-black underline">TikTok</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 bg-white text-slate-600 text-sm">
        © 2026 LearnFree Digital. All rights reserved.
      </footer>

    </div>
  );
}