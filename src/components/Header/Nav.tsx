import { XCircle } from "lucide-react";
import { useNavbarStore } from "../../hooks/store";

export default function Nav() {
  const { toggleNavbar, isNavbarOpen } = useNavbarStore();

  return (
    <nav
      className={`text-sm text-white md:items-center gap-x-6 gap-y-8 flex-col md:flex-row absolute md:relative w-3/4 md:w-auto p-4 md:p-0 h-screen md:h-auto top-0 right-0 bg-primary pt-28 fade-in" ${
        isNavbarOpen ? "flex md:flex" : "hidden md:flex"
      }`}
    >
      <XCircle className="top-0 md:hidden" onClick={toggleNavbar} />
      <span>Products</span>
      <span>Service</span>
      <span>Contact</span>
      <span>Log in</span>
      <span className="bg-white bg-opacity-30 w-fit rounded-full px-3 py-1">
        Try it Free
      </span>
    </nav>
  );
}
