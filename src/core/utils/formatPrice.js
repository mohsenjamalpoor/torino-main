const numberFormatter = new Intl.NumberFormat("fa-IR");

const formatPrice = (value) => {
  return numberFormatter.format(value).replace(/٬/g, ",");
};

export default formatPrice;
