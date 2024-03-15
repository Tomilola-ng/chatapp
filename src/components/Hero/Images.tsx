export default function Images() {
  return (
    <div className="grid grid-cols-2">
      <div className="relative p-6 pt-8">
        <img
          src="/dot.jpeg"
          alt="dots"
          className="absolute mix-blend-multiply top-0 left-0 -z-0"
        />
        <img src="/girl1.jpeg" alt="girl1 picture" className="z-10" />
      </div>
      <div className="pt-48 px-6">
        <img src="/girl2.jpeg" alt="girl2 picture" />
      </div>
    </div>
  );
}
