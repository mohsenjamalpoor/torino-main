"use client";

import { useGetTransactions } from "@/core/services/queries";
import { formatDate } from "@/core/utils/formatDate";

import formatPrice from "@/core/utils/formatPrice";
import React from "react";

function TransactionsPage() {
  const { data, isPending } = useGetTransactions();
  if (isPending) {
    return (
      <div className="flex justify-center py-10">در حال دریافت اطلاعات...</div>
    );
  }
  return (
    <div className="mt-5 border border-[#00000033] rounded-lg overflow-hidden bg-white">
      <table className="w-full text-sm">
        <thead className=" bg-[#F3F3F3]">
          <tr className="text-[#000000]">
            <th className="px-6 py-4 text-center font-medium">تاریخ و ساعت</th>
            <th className="px-6 py-4 text-center font-medium">مبلغ (تومان)</th>
            <th className="px-6 py-4 text-center font-medium">نوع تراکنش</th>
            <th className="px-6 py-4 text-center font-medium">شماره سفارش</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 text-center">
                {formatDate(item.createdAt, "HH:mm - YYYY/MM/DD")}
              </td>

              <td className="px-6 py-4 text-center">
                {formatPrice(item.amount)}
              </td>

              <td className="px-6 py-4 text-center">
                {item.type === "Purchase"
                  ? "ثبت نام در تور گردشگری"
                  : item.type}
              </td>

              <td className="px-6 py-4 text-center">
                سفارش {item.id.slice(0, 8)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsPage;
