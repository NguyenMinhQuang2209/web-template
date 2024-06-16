const CommonService = {
  formatNumberWithDots: (numberStr) => {
    try {
      const number = parseInt(numberStr, 10);
      const formattedNumber = number.toLocaleString().replace(/,/g, ".");
      return formattedNumber;
    } catch (error) {
      console.error("Invalid number format", error);
      return "Invalid number";
    }
  },
};

export default CommonService;
