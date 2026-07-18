import formatPrice from "@/core/utils/formatPrice";
import { getPersianMonth } from "@/core/utils/formatTime ";
import getDuration from "@/core/utils/getDuration";

import Link from "next/link";

function TourList({ toursData }) {
  if (!toursData.length)
    return (
      <p className="text-center text-xl font-bold my-20">نتیجه ای یافت نشد</p>
    );

  return (
    <>
      <h1 className="text-[#000000] mr-20 text-[32px] font-normal">
        همه تورها
      </h1>
      <main className="grid grid-cols-4 gap-4 mr-20  mt-5 mb-15">
        {toursData?.map((tour) => (
          <section
            key={tour?.id}
            className="border border-[#E5E5E5] rounded-xl overflow-hidden bg-white"
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-[180px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-[22px] font-normal">{tour.title}</h2>

              <p className="text-[#282828B2] mt-2 text-[15px]">
                {getPersianMonth(tour.startDate)} ماه •{" "}
                {getDuration(tour.startDate, tour.endDate)} • {tour.options[1]}
              </p>
            </div>
            <div className="border-t w-full border-[#E5E5E5]"></div>
            <div className="flex justify-between items-center p-4">
              <Link
                href={`/tours/${tour.id}`}
                className="bg-[#28A745] text-[15px] font-normal text-white px-5 py-2 rounded-sm"
              >
                رزرو
              </Link>
              <div className="text-left">
                <span className="text-[#009ECA] font-bold text-xl">
                  {formatPrice(tour.price)}
                </span>
                <span className="text-[#282828CC] font-normal text-[16px] mr-1">
                  تومان
                </span>
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default TourList;
