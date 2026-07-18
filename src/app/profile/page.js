"use client";

import { useGetUserData } from "@/core/services/queries";
import { CiEdit } from "react-icons/ci";

export default function ProfilePage() {
  const { data } = useGetUserData();

  return (
    <section className="space-y-6 mt-5">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-bold">اطلاعات حساب کاربری</h2>

          <button className="flex items-center gap-1 text-sm text-sky-500 hover:text-sky-600">
            <CiEdit />
            افزودن
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-gray-400">شماره موبایل</p>
            <p className="mt-1 font-medium">{data?.data?.mobile || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">ایمیل</p>
            <p className="mt-1 font-medium">{data?.data?.email || "-"}</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-bold">اطلاعات شخصی</h2>

          <button className="flex items-center gap-1 text-sm text-sky-500 hover:text-sky-600">
            <CiEdit />
            ویرایش اطلاعات
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          <div>
            <p className="text-sm text-gray-400">نام</p>
            <p className="mt-1">{data?.data?.firstName || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">نام خانوادگی</p>
            <p className="mt-1">{data?.data?.lastName || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">جنسیت</p>
            <p className="mt-1">{data?.data?.gender || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">کد ملی</p>
            <p className="mt-1">{data?.data?.nationalCode || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">تاریخ تولد</p>
            <p className="mt-1">{data?.data?.birthDate || "-"}</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-bold">اطلاعات حساب بانکی</h2>

          <button className="flex items-center gap-1 text-sm text-sky-500 hover:text-sky-600">
            <CiEdit />
            ویرایش اطلاعات
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm text-gray-400">شماره کارت</p>
            <p className="mt-1">{data?.data?.payment?.debitCard_code || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">شماره شبا</p>
            <p className="mt-1">{data?.data?.payment?.shaba_code || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">شماره حساب</p>
            <p className="mt-1">
              {data?.data?.payment?.accountIdentifier || "-"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
