"use client";

import { useState } from "react";
import OtpInput from "react18-input-otp";
import toast from "react-hot-toast";
import { GoArrowLeft } from "react-icons/go";

import { useCheckOtp } from "@/core/services/mutations";

function CheckOTPForm({ mobile, setMobile, setStep, setIsOpen }) {
  const [code, setCode] = useState("");
  const [otpError, setOtpError] = useState("");

  const { mutate, isPending } = useCheckOtp();

  const changeHandler = (value) => {
    setCode(value);

    if (otpError) {
      setOtpError("");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (isPending) return;

    if (code.length !== 6) {
      setOtpError("کد تایید باید ۶ رقم باشد");
      return;
    }

    mutate(
      {
        mobile,
        code,
      },
      {
        onSuccess: () => {
          toast.success("با موفقیت وارد شدید");

          setCode("");
          setMobile("");
          setStep(1);
          setIsOpen(false);
        },

        onError: (error) => {
          const message =
            error?.response?.data?.message || "کد تایید نامعتبر است";

          setOtpError(message);
          toast.error(message);
        },
      },
    );
  };

  const handleBack = () => {
    setCode("");
    setOtpError("");
    setStep(1);
  };

  const inputStyle = {
    width: "48px",
    height: "56px",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "#e5e7eb",
    borderRadius: "12px",
    fontSize: "24px",
    fontWeight: "600",
    textAlign: "center",
    outline: "none",
    backgroundColor: "#fff",
    color: "#111827",
  };

  const inputStyleFocus = {
    ...inputStyle,
    borderColor: "#28A745",
    boxShadow: "0 0 0 3px rgba(40,167,69,.15)",
  };

  const inputStyleError = {
    ...inputStyle,
    borderColor: "#ef4444",
    boxShadow: "0 0 0 3px rgba(239,68,68,.15)",
  };

  return (
    <div className="flex flex-col size-80 bg-white rounded-2xl shadow-xl p-6 w-[380px] rounded-2xl bg-white p-6 shadow-xl">
      <button
        type="button"
        onClick={handleBack}
        className="mb-4 flex items-center justify-end text-[#171717]"
      >
        <GoArrowLeft size={20} />
      </button>

      <h2 className="mb-2 text-center text-2xl font-bold">
        کد تایید را وارد کنید
      </h2>

      <p className="mb-8 text-center text-gray-500">
        کد ارسال شده به شماره
        <span className="font-semibold"> {mobile} </span>
        را وارد کنید.
      </p>

      <form onSubmit={submitHandler}>
        <div style={{ direction: "ltr" }}>
          <OtpInput
            value={code}
            onChange={changeHandler}
            numInputs={6}
            isInputNum
            shouldAutoFocus
            inputStyle={otpError ? inputStyleError : inputStyle}
            focusStyle={inputStyleFocus}
            containerStyle={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          />
        </div>

        {otpError && (
          <p className="mt-3 text-center text-sm text-red-500">{otpError}</p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="mt-8 h-12 w-full text-[18px] rounded-lg bg-[#28A745] text-white transition hover:bg-[#218838] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? "در حال بررسی..." : "ورود به تورینو"}
        </button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
