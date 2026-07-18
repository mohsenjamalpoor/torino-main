"use client";

import { PiSunHorizon } from "react-icons/pi";

import { useGetMyTours } from "@/core/services/queries";
import { formatDate } from "@/core/utils/formatDate";
import formatPrice from "@/core/utils/formatPrice";
import { getPersianCityName } from "@/core/utils/getPersianCityName";
import { getVehicleInfo } from "@/core/utils/getPersianVehicleName";

function MyToursPage() {
  const { data } = useGetMyTours();

  return (
    <div className="mt-5 rounded-lg border border-[#00000033] bg-white p-4 overflow-hidden">
      {data?.data?.map((tour) => {
        const isFinished = new Date(tour.endDate) < new Date();

        const vehicle = getVehicleInfo(tour.fleetVehicle);
        const VehicleIcon = vehicle.icon;

        return (
          <div
            key={`${tour.id}-${tour.startDate}`}
            className="mb-4 overflow-hidden rounded-lg border border-[#00000033] bg-white"
          >
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-2">
                <PiSunHorizon className="text-xl" />
                <h2 className="font-semibold">{tour.title}</h2>
              </div>
              <div className="flex items-center gap-2  px-3 py-1">
                <VehicleIcon />
                <span>سفر با {vehicle.title}</span>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs ${
                  isFinished
                    ? "bg-[#D8FFE1] text-[#28A745]"
                    : "bg-[#FFF4D4] text-[#E6A700]"
                }`}
              >
                {isFinished ? "به اتمام رسیده" : "در حال برگزاری"}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-10 px-5 pb-5 text-sm text-gray-600">
              <span className="font-semibold text-black">
                {getPersianCityName(tour.origin.name)} به{" "}
                {getPersianCityName(tour.destination.name)}
              </span>

              <span>{formatDate(tour.startDate, "dddd، D MMMM YYYY")}</span>

              <span>
                <span className="font-semibold text-black">تاریخ برگشت:</span>{" "}
                {formatDate(tour.endDate, "dddd، D MMMM YYYY")}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-5 border-t border-[#00000033] px-5 py-4 text-sm">
              <span>
                <span className="text-[#00000080]">شماره تور</span>{" "}
                {tour.id.slice(0, 8)}
              </span>

              <div className="h-10 border-r border-[#00000033]" />

              <span>
                <span className="text-[#00000080]">مبلغ پرداخت شده</span>{" "}
                <strong>{formatPrice(tour.price)}</strong>{" "}
                <span className="text-[#00000080]">تومان</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyToursPage;
