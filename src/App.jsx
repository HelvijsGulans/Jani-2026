import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Schedule from "./components/Schedule/Schedule"
import FAQ from "./components/FAQ/FAQ"

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <h1>Jāņi 2026</h1>
      </main>
      <Hero />
      <Schedule />
      <FAQ />
    </>
  );
}

export default App;