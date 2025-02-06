const formatDate = (date) => {
  const options = {
    month: "short",
    year: "numeric"
  };
  const getOrdinalSuffix = (day2) => {
    if (day2 > 3 && day2 < 21) return "th";
    switch (day2 % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const parsedDate = new Date(date);
  const day = parsedDate.getDate();
  const daywithSuffix = `${day} ${getOrdinalSuffix(day)}`;
  const monthYear = parsedDate.toLocaleDateString("en", options);
  return `${daywithSuffix} ${monthYear}`;
};

export { formatDate as f };
