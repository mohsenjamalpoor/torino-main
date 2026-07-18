import { useState } from "react";

import toast from "react-hot-toast";

import { isValidMobile } from "@/core/utils/validation";
import { useSendOtp } from "@/core/services/mutations";

function SendOTPFrom({ mobile, setMobile, setStep }) {
  const [error, setError] = useState("");

  const { mutate, isPending } = useSendOtp();

  const submitHandler = (event) => {
    event.preventDefault();

    if (isPending) return;
    if (!isValidMobile(mobile)) return setError("شماره موبایل معتبر نیست");
    setError("");

    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          setStep(2);
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  };

  return (
    <div className="flex flex-col size-80 bg-white rounded-2xl shadow-xl p-6">
      <h4 className="text-[28px] font-semibold text-[#282828] mb-2 text-center">
        ورود به تورینو
      </h4>
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-end gap-8 flex-1"
      >
        <label className="text-[16px] font-light">
          شماره موبایل خود را وارد کنید
        </label>
        <input
          type="text"
          placeholder="0912*******"
          maxLength={11}
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className={`
                    w-full px-4 py-3 border rounded-lg text-lg text-right
                    focus:outline-none focus:ring-2 transition-all
                    ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#28A745]"}
                  `}
          dir="ltr"
          autoFocus
        />
        <div className="flex justify-between mt-1 text-sm">
          <span
            className={`${mobile.length === 11 ? "text-green-600" : "text-gray-500"}`}
          >
            {mobile.length}/11
          </span>
          {!!error && <p className="text-red-500">{error}</p>}
        </div>
        <button
          type="submit"
          className="bg-[#28A745] text-[18px] font-medium h-11 text-white rounded-md"
        >
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPFrom;
