"use client";

import { useState } from "react";

import SendOTPFrom from "./SendOTPFrom";
import CheckOTPForm from "./CheckOTPForm";
import ModalContainer from "@/components/partials/container/ModalContainer";
import { useGetUserData } from "@/core/services/queries";
import Link from "next/link";
import { TiUser } from "react-icons/ti";

import { MdOutlineTravelExplore } from "react-icons/md";

import { IoIosArrowDown, IoMdLogOut } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { BiUser } from "react-icons/bi";

function AuthForm() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [mobile, setMobile] = useState("");
  const [open, setOpen] = useState(false);

  const { data } = useGetUserData();

  if (data?.data)
    return (
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 cursor-pointer text-green-600"
        >
          <TiUser className="hidden md:block" size={22} />
          <span className="hidden md:block">{data.data.mobile}</span>
          <IoIosArrowDown />
        </button>

        {open && (
          <div className="absolute left-0 mt-3 w-56 rounded-xl  bg-white shadow-lg">
            <Link
              href="/"
              className="flex items-center bg-[#F4F4F4] gap-3 p-3 hover:bg-gray-50"
            >
              <TiUser
                size={20}
                className="text-[#696969] bg-[#D9D9D9] rounded-full hidden md:block"
              />
              <p className="text-[#10411B]"> {data.data.mobile}</p>
            </Link>

            <Link
              href="/profile"
              className="flex items-center text-[14px] text-[#282828] gap-3 p-3 hover:bg-gray-50"
            >
              <BiUser size={20} />
              اطلاعات حساب کاربری
            </Link>
            <div className="border-t w-50 mr-2  border-[#00000033]"></div>
            <button
              // onClick={logoutHandler}
              className="flex text-[14px] cursor-pointer items-center gap-3 p-3 text-[#D40000]"
            >
              <IoMdLogOut size={20} />
              خروج از حساب کاربری
            </button>
          </div>
        )}
      </div>
    );

  return (
    <div>
      <button
        className="flex items-center justify-center text-[#28A745] rounded-lg border-2 border-[#28A745] p-2 transition-colors hover:bg-[#28A745]/10 md:gap-2 md:px-3 sm:py-1"
        onClick={() => setIsOpen(true)}
      >
        <TiUser size={22} className="text-[#28A745] hidden md:block" />
        ورود | ثبت نام
      </button>
      {step === 1 && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <SendOTPFrom
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <CheckOTPForm
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default AuthForm;
