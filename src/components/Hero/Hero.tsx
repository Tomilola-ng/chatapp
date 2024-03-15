import Images from "./Images";
import Intro from "./Intro";

export default function Hero() {
  return (
    <section className="bg-primary">
      <div className="max-container px-3 py-12 grid md:grid-cols-2 gap-y-8 md:gap-20">
        <div className="flexCenter h-full">
          <Intro />
        </div>
        <Images />
      </div>
    </section>
  );
}
