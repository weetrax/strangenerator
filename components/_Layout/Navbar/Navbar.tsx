import React from "react";
import PropTypes from "prop-types";
import { Disclosure } from "@headlessui/react";
import classNames from "classnames";
import Container from "../Container";
import Link from "next/link";
import { useRouter } from "next/router";

type NavbarProps = {
  //
};

const navigation = [{ name: "Strangenerator", href: "/" }];

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();

  return (
    <Disclosure
      as="nav"
      className="bg-primary-600 backdrop-filter backdrop-blur bg-opacity-70 items-center sticky top-0 shadow-sm z-20"
    >
      {({ open }) => (
        <>
          <Container>
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="/assets/img/stranger.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="/assets/img/stranger.png"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          className={classNames(
                            router.pathname == item.href
                              ? "bg-primary-500"
                              : "hover:bg-primary-500 duration-200 ease-in-out transition",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={
                            router.pathname == item.href ? "page" : undefined
                          }
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </>
      )}
    </Disclosure>
  );
};

Navbar.propTypes = {
  //
};

export default Navbar;
