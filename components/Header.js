import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  HomeIcon,
  UserGroupIcon,
  PuzzleIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import { signOut, useSession } from "next-auth/client";

function Header() {
  const [session] = useSession();

  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <a href="/">
            <HeaderIcon Icon={HomeIcon} />
          </a>
          <a href="games">
            <HeaderIcon Icon={PuzzleIcon} />
          </a>
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
    </header>
  );
}

export default Header;
