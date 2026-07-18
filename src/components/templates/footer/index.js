import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className="bg-white px-6 pb-6 pt-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col gap-8 lg:flex-row lg:justify-between">
            <div className="flex justify-center gap-30">
              <div className="mr-10">
                <h3 className="mb-4 text-[24px] font-semibold text-[#282828]">
                  تورینو
                </h3>

                <ul className="flex flex-col gap-3 font-normal text-[18px] text-[#282828]">
                  <li>
                    <Link
                      href="/about-us"
                      className="transition-colors hover:text-[#28A745]"
                    >
                      درباره ما
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact-us"
                      className="transition-colors hover:text-[#28A745]"
                    >
                      تماس با ما
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/why-us"
                      className="transition-colors hover:text-[#28A745]"
                    >
                      چرا تورینو
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/insurance"
                      className="transition-colors hover:text-[#28A745]"
                    >
                      بیمه مسافرتی
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-[24px] font-semibold text-[#282828]">
                  خدمات مشتریان
                </h3>

                <ul className="flex flex-col gap-3 font-normal text-[18px] text-[#282828]">
                  <li>
                    <Link
                      href="/support"
                      className="transition-colors hover:text-[#28A745]"
                    >
                      پشتیبانی آنلاین
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/purchase-guide"
                      className="transition-colors hover:text-[#28A745]"
                    >
                      راهنمای خرید
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/refund-guide"
                      className="transition-colors hover:text-[#28A745]"
                    >
                      راهنمای استرداد
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/faq"
                      className="transition-colors hover:text-[#28A745]"
                    >
                      پرسش و پاسخ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col lg:items-end items-center">
              <div className="flex flex-col items-center lg:items-end mb-4 lg:mr-60">
                <Link href="/">
                  <Image
                    src="/images/1.png"
                    alt="لوگوی تورینو"
                    width={100}
                    height={50}
                    className="mb-4"
                  />
                </Link>

                <span className="mb-4 font-normal text-[15px] text-[#000000]">
                  تلفن پشتیبانی:۸۵۷۴-۰۲۱
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 lg:flex lg:flex-row-reverse">
                <Image
                  src="/images/aira.png"
                  alt="نماد اعتماد"
                  width={70}
                  height={70}
                  className="object-contain"
                />
                <Image
                  src="/images/samandehi-6e2b448a.png"
                  alt="نماد اعتماد"
                  width={70}
                  height={70}
                  className="object-contain"
                />{" "}
                <Image
                  src="/images/ecunion-35c3c933.png"
                  alt="نماد اعتماد"
                  width={70}
                  height={70}
                  className="object-contain"
                />{" "}
                <Image
                  src="/images/passenger-rights-48368f81 1.png"
                  alt="نماد اعتماد"
                  width={70}
                  height={70}
                  className="object-contain"
                />{" "}
                <Image
                  src="/images/state-airline-f45c55b2 1.png"
                  alt="نماد اعتماد"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <hr className="mb-6 border-gray-200" />

          <p className="text-center text-sm text-[#282828]">
            کلیه حقوق این وب‌ سایت متعلق به تورینو می‌باشد.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
