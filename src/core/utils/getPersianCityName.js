export const cityMap = {
  tehran: "تهران",
  "tehran province": "استان تهران",
  mashhad: "مشهد",
  isfahan: "اصفهان",
  shiraz: "شیراز",
  tabriz: "تبریز",
  yazd: "یزد",
  kerman: "کرمان",
  rasht: "رشت",
  ahvaz: "اهواز",
  kish: "کیش",
  qeshm: "قشم",
  mazandaran: "مازندران",
  gilan: "گیلان",
  kurdistan: "کردستان",
  sanandaj: "سنندج",

  istanbul: "استانبول",
  antalya: "آنتالیا",
  dubai: "دبی",
  italy: "ایتالیا",
  hewler: "هویلر",
  madrid: "مادرید",
  sulaymaniyah: "سلیمانیه",
  offroad: "آفرود",
};

export const getPersianCityName = (englishName) => {
  if (!englishName) return "";

  const city = englishName.toLowerCase().trim();
  return cityMap[city] || englishName;
};
