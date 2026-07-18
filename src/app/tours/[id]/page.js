import ReserveButton from "@/components/atoms/ReserveButton";
import { serverFetch } from "@/core/services/http";
import { formatDate, getDuration } from "@/core/utils/formatDate";

import formatPrice from "@/core/utils/formatPrice";
import { getPersianCityName } from "@/core/utils/getPersianCityName";
import { getPersianVehicleName } from "@/core/utils/getPersianVehicleName";
import Link from "next/link";
import { FaBus, FaMedal, FaRoute, FaUserCheck } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { IoMap } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { SiSpringsecurity } from "react-icons/si";

async function TourDetails({ params }) {
  const { id } = await params;

  const tourData = await serverFetch(`/tour/${id}`, null, {
    cache: "no-store",
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="bg-white rounded-3xl w-[1100px] shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div>
            <img
              src={tourData?.image}
              alt={tourData?.title}
              className="w-[400px] h-[265px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-[32px] font-bold text-[#000000] mb-6">
                {tourData.title}
              </h1>
              <p className="text-[#7D7D7D] text-lg mt-2">
                {getDuration(tourData.startDate, tourData.endDate)}
              </p>
              <div className="flex gap-6 my-10">
                <div className="flex items-center gap-2">
                  <FaUserCheck size={18} className="text-[#7D7D7D]" />
                  <p className="text-[#7D7D7D] text-[20px] font-normal">
                    تورلیدر از مبدا
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <IoMap size={18} className="text-[#7D7D7D]" />
                  <p className="text-[#7D7D7D] text-[20px] font-normal">
                    برنامه سفر
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaMedal size={18} className="text-[#7D7D7D]" />
                  <p className="text-[#7D7D7D] text-[20px] font-normal">
                    تضمین کیفیت
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4">
                <p className="text-[28px] font-Medium text-[#009ECA]">
                  {formatPrice(tourData.price)}
                  <span className="text-[14px] mr-2 font-normal text-[#282828CC]">
                    تومان
                  </span>
                </p>

                <ReserveButton id={id} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-evenly items-center  gap-5">
            <div className=" border-l flex flex-col border-[#00000040] p-4 ">
              <div className="flex items-center justify-center gap-3">
                <FaRoute className="text-[#444444]" />
                <p className="text-[#444444] text-[18px] mt-2 font-normal">
                  مبدا
                </p>
              </div>
              <p className="font-Medium text-[#000000] text-[16px] mt-1">
                {getPersianCityName(tourData.origin.name)}
              </p>
            </div>

            <div className=" border-l border-[#00000040] p-4 ">
              <div className="flex items-center justify-center gap-3">
                <LuCalendarDays className=" text-[#444444] mb-1" />
                <p className="text-[#444444] text-[18px] font-normal">
                  تاریخ رفت
                </p>
              </div>
              <p className="font-Medium text-[#000000] text-[16px] mt-1">
                {formatDate(tourData.startDate, "DD MMMM YYYY")}
              </p>
            </div>

            <div className=" border-l border-[#00000040] p-4">
              <div className="flex items-center justify-center gap-3">
                <LuCalendarDays className="text-[#444444]" />
                <p className="text-[#444444] text-[18px] font-normal">
                  تاریخ برگشت
                </p>
              </div>

              <p className="font-medium text-[#000000] text-[16px] mt-1">
                {formatDate(tourData.endDate, "DD MMMM YYYY")}
              </p>
            </div>

            <div className="bg-white border-l border-[#00000040] p-4">
              <div className="flex items-center justify-center gap-3">
                <FaBus className=" text-[#444444] mb-1" />
                <p className="text-[#444444] text-[18px] font-normal">
                  وسیله نقلیه
                </p>
              </div>
              <p className="font-Medium text-[#000000] text-[16px]  mt-1">
                {getPersianVehicleName(tourData.fleetVehicle)}
              </p>
            </div>

            <div className=" border-l border-[#00000040] p-4">
              <div className="flex items-center justify-center gap-3">
                <HiUsers className=" text-[#444444] mb-1" />
                <p className="text-[#444444] text-[18px] font-normal">ظرفیت</p>
              </div>
              <p className="font-Medium text-[#000000] text-[16px] mt-1">
                {tourData.availableSeats} نفر
              </p>
            </div>

            <div className=" p-4">
              <div className="flex items-center justify-center gap-3">
                <SiSpringsecurity className="text-[#444444] mb-1 " />
                <p className="text-[#444444] text-[18px] font-normal">بیمه</p>
              </div>
              <p
                className={`font-bold mt-1 ${
                  tourData.insurance ? "text-[#000000]" : "text-red-500"
                }`}
              >
                {tourData.insurance ? "دارد" : "ندارد"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetails;
