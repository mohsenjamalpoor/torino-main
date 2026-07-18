"use client";

import { useCheckout } from "@/core/services/mutations";
import { useGetUserBasket } from "@/core/services/queries";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiCalendar } from "react-icons/fi";
import { TiUser } from "react-icons/ti";

import { DatePicker } from "zaman";

function CheckoutPage() {
  const { data } = useGetUserBasket();
  const { isPending, mutate } = useCheckout();
  const [form, setForm] = useState({
    fullName: "",
    nationalCode: "",
    gender: "",
    birthDate: "",
  });
  const router = useRouter();
  const changeHandler = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const checkoutHandler = () => {
    if (isPending) return;

    mutate(form, {
      onSuccess: (data) => {
        toast.success("ارسال به درگاه پرداخت...");
        setTimeout(() => {
          router.push("/payment?status=success");
        }, 2000);
      },
    });
  };

  if (!data) return <p>سبد خرید شما خالیه</p>;

  return (
    <main className="mx-auto mt-10 max-w-5xl">
      <div className="grid  md:grid-cols-[2fr_1fr]">
        <section className="rounded-xl shadow border border-[#00000033] bg-white p-6">
          <div className="flex items-center  mr-2 gap-2">
            <TiUser />
            <h1 className="text-[#000000]  text-[24px] font-normal">
              مشخصات مسافر
            </h1>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <input
              className="rounded-lg border border-[#808080] p-3 outline-none"
              name="fullName"
              placeholder="نام و نام خانوادگی"
              value={form.fullName}
              onChange={changeHandler}
            />

            <input
              className="rounded-lg border border-[#808080] p-3 outline-none"
              name="nationalCode"
              placeholder="کد ملی"
              value={form.nationalCode}
              onChange={changeHandler}
            />

            <div className="relative">
              <DatePicker
                value={form.birthDate}
                onChange={(value) =>
                  setForm((prev) => ({
                    ...prev,
                    birthDate: value,
                  }))
                }
                inputClass=" rounded-lg border border-[#808080] p-3  outline-none"
              />
              <span className="absolute right-20 top-1/2 -translate-y-1/2 text-[#00000080] font-normal text-[14px] pointer-events-none">
                تاریخ تولد
              </span>
              <FiCalendar
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                size={20}
              />
            </div>

            <select
              className="rounded-lg border border-[#808080] p-3 outline-none"
              name="gender"
              value={form.gender}
              onChange={changeHandler}
            >
              <option value="">انتخاب جنسیت</option>
              <option value="male">مرد</option>
              <option value="female">زن</option>
            </select>
          </div>
        </section>

        <aside className="rounded-xl  ml-10 shadow bg-white p-6">
          <h3 className="text-[#000000] text-[24px] mb-4 font-SemiBold mr-2">
            {data?.data?.title}
          </h3>
          <div className="border mb-8  border-dashed"></div>

          <div className="mb-3 flex justify-between">
            <span className="text-[#282828] text-[16px] mr-2 mb-8">
              قیمت نهایی
            </span>
            <p className="text-[#009ECA] text-[14px]">
              {data?.data?.price} <span className="text-[#000000]">تومان</span>
            </p>
          </div>

          <button
            disabled={isPending}
            onClick={checkoutHandler}
            className="mt-6 w-full rounded-lg bg-green-600 py-3 text-white transition hover:bg-green-700 disabled:opacity-50"
          >
            {isPending ? "در حال اتصال..." : "ثبت و خرید نهایی"}
          </button>
        </aside>
      </div>
    </main>
  );
}

export default CheckoutPage;
