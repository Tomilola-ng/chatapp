import C2A from "../reusables/C2A";

export default function Intro() {
  return (
    <div className="text-white text-center md:text-left">
      <h1 className="text-balance text-3xl md:text-5xl font-bold leading-8">
        Have your <br className="sm:hidden md:block" /> best chat
      </h1>
      <p className="text-pretty my-5">
        Fast, easy & unlimited confrence call service
      </p>
      <C2A />
    </div>
  );
}
