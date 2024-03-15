import { MenuIcon } from "lucide-react";
import Logo from "../reusables/Logo";
import Nav from "./Nav";
import { useNavbarStore } from "../../hooks/store";

export default function Header() {
  const { toggleNavbar } = useNavbarStore();

  return (
    <header className="bg-primary py-3 relative">
      <div className="max-container flexBetween px-4">
        <Logo />
        <MenuIcon className="md:hidden text-white" onClick={toggleNavbar} />
        <Nav />
      </div>
    </header>
  );
}
