"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import AuthForm from "../authForm";

import { AiFillHome } from "react-icons/ai";
import { CiAirportSign1 } from "react-icons/ci";
import { RxSpeakerModerate } from "react-icons/rx";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { BiLogInCircle } from "react-icons/bi";

const navItems = [
  {
    id: 1,
    title: "صفحه اصلی",
    href: "/",
    icon: <AiFillHome size={20} />,
  },
  {
    id: 2,
    title: "خدمات گردشگری",
    href: "/services",
    icon: <CiAirportSign1 size={20} />,
  },
  {
    id: 3,
    title: "درباره ما",
    href: "/about-us",
    icon: <RxSpeakerModerate size={20} />,
  },
  {
    id: 4,
    title: "تماس با ما",
    href: "/contact-us",
    icon: <LuPhone size={20} />,
  },
];

function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-12">
          <div className="flex items-center gap-8">
            <button onClick={() => setIsOpen(true)} className="md:hidden">
              <HiOutlineMenu size={28} />
            </button>

            <Link href="/">
              <Image
                src="/images/1.png"
                alt="logo"
                width={120}
                height={60}
                priority
                className="hidden md:block"
              />
            </Link>

            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={`transition-all duration-200 ${
                        isActive(item.href)
                          ? "font-semibold text-[#28A745]"
                          : "text-gray-700 hover:text-[#28A745]"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center">
            <AuthForm />

            <button className="flex items-center gap-2 rounded-lg border-2 border-[#28A745] px-4 py-2 text-[#28A745] transition hover:bg-[#28A745]/10 md:hidden">
              <BiLogInCircle size={22} />
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-72 bg-white shadow-xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-5">
          <Image src="/images/1.png" alt="logo" width={100} height={50} />

          <button onClick={() => setIsOpen(false)}>
            <IoClose size={28} />
          </button>
        </div>

        <nav className="mt-5">
          <ul className="space-y-2 px-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                    isActive(item.href)
                      ? "bg-green-50 font-medium text-[#28A745]"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Header;
