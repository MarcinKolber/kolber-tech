import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-linear-to-br from-gray-900 via-gray-950 to-black relative">
      <Navbar></Navbar>

      {/* Background Image */}
      <div
        className="absolute top-0 right-0 bottom-0 w-full opacity-30"
        style={{
          backgroundImage: "url('/assets/images/profile.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-between min-h-[80vh] px-8 py-10">
        <div className="text-center mb-16 pt-96 md:pt-0 md:flex-1 md:flex md:items-center">
          <div className="w-full">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-zinc-200 mb-8">
              Marcin Kolber
            </h1>
            <div className="flex flex-col items-center gap-2 text-gray-300 text-xl md:text-3xl font-light">
              <span>.NET Developer</span>
              <span>Cloud Specialist</span>
              <span>React Developer</span>
            </div>
          </div>
        </div>

        {/* Bio Card */}
        <div className="max-w-4xl w-full bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            <span className="text-yellow-500 font-semibold">.NET</span> &{" "}
            <span className="text-yellow-500 font-semibold">React</span>{" "}
            Software Developer with a passion for{" "}
            <span className="text-white font-medium">programming</span>,{" "}
            <span className="text-white font-medium">problem solving</span>, and
            acquiring new skills. Standing out with strong{" "}
            <span className="text-white font-medium">
              analytical and logical thinking
            </span>
            , capable of delivering complex, high-quality solutions.{" "}
            <span className="text-yellow-500">
              British universities graduate
            </span>
            .
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <h3 className="text-yellow-500 font-semibold mb-2 flex items-center gap-2">
                <span className="text-lg">⚡</span> Core Focus
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">▹</span>
                  <span>Back-end solution design & development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">▹</span>
                  <span>Cloud computing & infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">▹</span>
                  <span>CI/CD architecture & automation</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <h3 className="text-yellow-500 font-semibold mb-2 flex items-center gap-2">
                <span className="text-lg">🎯</span> Experience
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">▹</span>
                  <span>Front-end development with React</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">▹</span>
                  <span>Start-ups to industry-leading companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">▹</span>
                  <span>Full-stack modern web applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
