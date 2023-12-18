import { useColorMode, Button, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
function Header() {
  //themeMode by chakra
  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <>
      <header className="w-full shadow sticky z-50 top-0 bg-white">
        <nav className=" border-cyan-200 px-4 lg:px-6 py-2.5 flex flex-wrap items-center justify-between">
          <div className="mx-6">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="flex flex-row ml-auto mr-0">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 px-7">
              <li>
                <NavLink
                  to={"tree/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-blue-600" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  Tree
                </NavLink>
              </li>
            </ul>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 px-7">
              <li>
                <NavLink
                  to={"recursion/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-blue-600" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  Recursion
                </NavLink>
              </li>
            </ul>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={"graph/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-blue-600" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  Graph
                </NavLink>
              </li>
            </ul>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Button onClick={toggleColorMode} className="mx-7">
                  {colorMode === "light" ? (
                    <MoonIcon />
                  ) : (
                    <SunIcon color={"black"} />
                  )}
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
     
    </>
  );
}

export default Header;
