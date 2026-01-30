import Contact from "./components/Contact";
import Education from "./components/Education";
import ExperienceSection from "./components/ExperienceSection";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Hero></Hero>
      <section id="experience">
        <ExperienceSection></ExperienceSection>
      </section>
      <section id="education">
        <Education></Education>
      </section>
      <section id="skills">
        <Skills></Skills>
      </section>
      <section id="contact">
        <Contact></Contact>
      </section>
    </div>
  );
}

export default App;
