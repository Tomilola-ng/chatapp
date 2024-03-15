import { Star } from "lucide-react";
import C2A from "../reusables/C2A";

export default function Final() {
  return (
    <section className="grid md:grid-cols-2 gap-x-6 bg-primary/10 py-24 px-3 md:px-0">
      <img
        src="/men.jpeg"
        alt="Men smiling"
        className="md:pr-12 rounded-md md:rounded-none"
      />
      <div className="flex flex-col gap-y-6 pt-8">
        <h2 className="font-medium text-2xl md:text-4xl">
          Perfect Solution for <br /> Small Businesses
        </h2>
        <p>Pricing plans that fit like a glove</p>
        <div className="flexCenter gap-x-4 justify-start md:justify-start">
          <button className="rounded py-2 px-4 bg-primary text-white">
            Try it free
          </button>
          <button className="rounded py-2 px-4 text-primary border-primary border">
            Get a Demo
          </button>
        </div>
        <div className="flex items-center gap-x-3">
          <div className="flex gap-2">
            <Star className="text-amber-400" />
            <Star className="text-amber-400" />
            <Star className="text-amber-400" />
            <Star className="text-amber-400" />
            <Star className="text-amber-400" />
          </div>
          <p className="text-xs">
            <b>5200 businesses</b> use ChatApp and <br /> they rate as
            <b>5-stars</b>
          </p>
        </div>
      </div>
    </section>
  );
}
