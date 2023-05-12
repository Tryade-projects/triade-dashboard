/**
 * This function checks if a given rank name is included in an array of unchangeable rank names and returns a boolean value.
 * @param {object} rank - rank object
 * @param {array} array - array of unchangeable ranks
 * @return {boolean} - true if rank is in array
 */
const unchangeableRanksBoolean = (rank, array) => array.includes(rank.name);

/**
 * The function checks if a given rank is the second highest in an array.
 * @param {object} rank - rank object
 * @param {array} array - array of all ranks
 * @return {boolean} - true if rank is in position 2
 */
const unincreaseRanks = (rank, array) => array.indexOf(rank) === 1;

/**
 * This function checks if a given rank is the second highest in an array.
 * @param {object} rank - rank object
 * @param {array} array - array of ranks
 * @return {boolean} - true if rank is in second to last position
 */
const undecreaseRanks = (rank, array) =>
  array.indexOf(rank) === array.length - 2;

export { unchangeableRanksBoolean, unincreaseRanks, undecreaseRanks };
