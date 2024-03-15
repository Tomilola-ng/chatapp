import About from "./components/About/About";
import Final from "./components/Final/Final";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <main role="main" className="hide-scrollbar">
      <Header />
      <Hero />
      <About />
      <Final />
    </main>
  );
}

export default App;
