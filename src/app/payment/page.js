import Link from "next/link";
import React from "react";

function PaymentPage({ searchParams }) {
  if (searchParams?.status === "success")
    return (
      <div>
        <p>پرداخت شما با موفقیت انجام شد.</p>
        <Link href="/profile">برو به پروفایل</Link>
      </div>
    );

  return (
    <div>
      <p>پرداخت شما با شکست مواجه شد.</p>
      <Link href="/profile">پشتیبانی</Link>
    </div>
  );
}

export default PaymentPage;
