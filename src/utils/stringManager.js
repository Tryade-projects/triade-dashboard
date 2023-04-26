/**
 * @param {string}  string  string will be returned with first letter upper case
 * @return  {string}      string with first letter upper case
 */
const firstLetterUpperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export { firstLetterUpperCase };
