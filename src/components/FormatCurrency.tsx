const CURRENCEY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const formatCurrency = (number: number) => {
  return CURRENCEY_FORMATTER.format(number);
};

export default formatCurrency;
