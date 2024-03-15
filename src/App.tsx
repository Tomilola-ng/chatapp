import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <main role="main" className="hide-scrollbar">
      <Header />
      <Hero />
      <About />
    </main>
  );
}

export default App;
