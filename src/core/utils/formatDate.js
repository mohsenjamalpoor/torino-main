import dayjs from "dayjs";
import jalaliday from "jalaliday";
import "dayjs/locale/fa";

dayjs.extend(jalaliday);

const toPersianDigits = (value) =>
  value.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);

export const formatDate = (date, format = "YYYY/MM/DD") => {
  return toPersianDigits(
    dayjs(date).calendar("jalali").locale("fa").format(format),
  );
};

export const getDuration = (startDate, endDate) => {
  const nights = dayjs(endDate).diff(dayjs(startDate), "day");
  const days = nights + 1;

  return `${toPersianDigits(String(days))} روز ${toPersianDigits(
    String(nights),
  )} شب`;
};
