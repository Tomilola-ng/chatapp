export default function Intro() {
  return (
    <div className="text-white text-center md:text-left">
      <h1 className="text-balance text-3xl md:text-5xl font-bold leading-8">
        Have your <br className="sm:hidden md:block" /> best chat
      </h1>
      <p className="text-pretty my-5">
        Fast, easy & unlimited confrence call service
      </p>
      <div className="flexCenter gap-x-4 md:justify-start">
        <button className="rounded py-2 px-4 text-primary bg-white">
          Try it free
        </button>
        <button className="rounded py-2 px-4 bg-primary text-white border-white border">
          Get a Demo
        </button>
      </div>
    </div>
  );
}
