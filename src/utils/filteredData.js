/**
 * [filteredData description]
 *
 * @param   {object[]}  data   - Array of objects
 * @param   {string}  search  - Search string
 * @param   {string[]}  field   - Array of fields to search
 *
 * @return  {object[]} - Filtered array of objects
 */
const filteredData = (data, search, field) => {
  const searchRegExp = new RegExp(search, "i");

  return data.filter((item) => {
    for (let i = 0; i < field.length; i += 1) {
      if (searchRegExp.test(item[field[i]])) {
        return true;
      }
    }
    return false;
  });
};

export default filteredData;
