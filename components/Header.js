import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { HomeIcon, PlayIcon } from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/client";
import { Menu } from "@headlessui/react";
import { forwardRef } from "react";
import Link from "next/link";

function Header() {
  const [session] = useSession();

  const NavLink = forwardRef((props, ref) => {
    let { href, children, ...rest } = props;
    return (
      <Link href={href}>
        <a ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    );
  });

  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Beginning */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <h1>ARCADE</h1>
      </div>

      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} />
          <HeaderIcon Icon={PlayIcon} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={() => signOut()}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
        />
        <Menu>
          <Menu.Button>
            <p className="hidden lg:inline-flex text-sm whitespace-nowrap font-semibold pr-3">
              {session.user.name}
            </p>
          </Menu.Button>
          <Menu.Items>
            {/* Use the `active` render prop to conditionally style the active item. */}
            <p className="hidden lg:inline-flex whitespace-nowrap pr-3 text-xs text-gray-400">
              {session.user.email}
            </p>
            <p
              onClick={() => signOut()}
              className="rounded-full cursor-pointer hidden lg:inline-flex text-xs text-gray-400 whitespace-nowrap pr-3"
            >
              Logout
            </p>
          </Menu.Items>
        </Menu>
      </div>
    </header>
  );
}

export default Header;
