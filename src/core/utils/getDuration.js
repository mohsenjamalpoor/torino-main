const getDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffTime = end - start;
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return `${days} روز`;
};
export default getDuration;
