"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiUser } from "react-icons/hi2";
import { PiSunHorizonFill } from "react-icons/pi";
import { LuReceipt } from "react-icons/lu";

export default function ProfileSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full mt-10 lg:w-72">
      <div className="overflow-hidden rounded-xl border border-[#00000033] bg-white shadow-sm">
        <Link
          href="/profile"
          className={`flex items-center gap-3 px-5 py-4 ${
            pathname === "/profile"
              ? "bg-[#28A74540] text-[#28A745]"
              : "hover:bg-gray-50"
          }`}
        >
          <HiUser size={20} />
          پروفایل
        </Link>
        <div className="border-t w-64 mr-4  border-[#00000033]"></div>
        <Link
          href="/profile/my-tours"
          className={`flex items-center gap-3 px-5 py-4 ${
            pathname === "/profile/my-tours"
              ? "bg-[#28A74540] text-[#28A745]"
              : "hover:bg-gray-50"
          }`}
        >
          <PiSunHorizonFill size={20} />
          تورهای من
        </Link>
        <div className="border-t w-64 mr-4  border-[#00000033]"></div>
        <Link
          href="/profile/transactions"
          className={`flex items-center gap-3 px-5 py-4 ${
            pathname === "/profile/transactions"
              ? "bg-[#28A74540] text-[#28A745]"
              : "hover:bg-gray-50"
          }`}
        >
          <LuReceipt size={20} />
          تراکنش‌ها
        </Link>
      </div>
    </aside>
  );
}
