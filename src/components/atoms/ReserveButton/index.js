"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { useAddToBasket } from "@/core/services/mutations";

function ReserveButton({ id }) {
  const { mutate, isPending } = useAddToBasket();
  const router = useRouter();

  const cartHandler = () => {
    if (isPending) return;

    mutate(id, {
      onSuccess: (data) => {
        toast.success(data?.data?.message);
        router.push("/checkout");
      },
      onError: (error) => console.log(error),
    });
  };

  return (
    <div>
      <button
        onClick={cartHandler}
        className="rounded-[10px] text-white text-[24px] py-2 px-6 bg-[#28A745]"
      >
        رزرو و خرید
      </button>
    </div>
  );
}

export default ReserveButton;
