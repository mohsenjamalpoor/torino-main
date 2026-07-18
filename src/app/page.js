import HomePage from "@/components/partials/container/HomePage";
import SearchForm from "@/components/templates/SearchForm";
import TourList from "@/components/templates/TourList";
import { serverFetch } from "@/core/services/http";
import Image from "next/image";

async function Home({ searchParams }) {
  const params = await searchParams;
  const data = await serverFetch("/tour", params, { cache: "no-store" });

  return (
    <div>
      <Image
        src="/images/Untitled_design__1_.png"
        alt="banner"
        width={1700}
        height={350}
        className="w-full h-auto"
      />
      <p className="text-[#595959] mt-4 text-center text-[28px] font-semibold">
        <span className="text-[#28A745] text-[28px] font-semibold">تورینو</span>
        برگزار کننده بهترین تور های داخلی و خارجی
      </p>

      <SearchForm />
      <TourList toursData={data} />
      <HomePage />
    </div>
  );
}

export default Home;
