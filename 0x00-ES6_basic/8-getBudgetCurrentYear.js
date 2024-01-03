function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const incomeForYear = `income-${getCurrentYear()}`;
  const gdpForYear = `gdp-${getCurrentYear()}`;
  const capitaForYear = `capita-${getCurrentYear()}`;
  const budget = {
    [incomeForYear]: income,
    [gdpForYear]: gdp,
    [capitaForYear]: capita,
  };

  return budget;
}
