import About from "./components/About/About";
import Final from "./components/Final/Final";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <main role="main" className="hide-scrollbar">
      <Header />
      <Hero />
      <About />
      <Final />
      <Footer />
    </main>
  );
}

export default App;
