import { FaBus, FaPlane, FaTrain, FaShip, FaCarSide } from "react-icons/fa";
import { GiJeep } from "react-icons/gi";

import { LiaShuttleVanSolid } from "react-icons/lia";

export const vehicleMap = {
  bus: {
    title: "اتوبوس",
    icon: FaBus,
  },
  van: {
    title: "ون",
    icon: LiaShuttleVanSolid,
  },
  suv: {
    title: "شاسی‌بلند",
    icon: FaCarSide,
  },
  car: {
    title: "خودرو",
    icon: FaCarSide,
  },

  offroad: {
    title: "خودروی آفرود",
    icon: GiJeep,
  },
  airplane: {
    title: "هواپیما",
    icon: FaPlane,
  },

  train: {
    title: "قطار",
    icon: FaTrain,
  },
  ship: {
    title: "کشتی",
    icon: FaShip,
  },
};

export const getVehicleInfo = (englishName) => {
  if (!englishName)
    return {
      title: "",
      icon: FaCarSide,
    };

  const key = englishName.toLowerCase().trim();

  return (
    vehicleMap[key] || {
      title: englishName,
      icon: FaCarSide,
    }
  );
};
