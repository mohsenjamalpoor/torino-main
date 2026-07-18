export const vehicleMap = {
  bus: "اتوبوس",
  van: "ون",
  suv: "شاسی‌بلند",
  airplane: "هواپیما",
  train: "قطار",
  ship: "کشتی",
  boat: "قایق",
  offroad: "خودروی آفرود",
};

export const getPersianVehicleName = (englishName) => {
  if (!englishName) return "";

  const vehicle = englishName.toLowerCase().trim();
  return vehicleMap[vehicle] || englishName;
};
