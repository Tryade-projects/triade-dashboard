/**
 * It takes an element and a category, finds the element in the category, and swaps it with the element above it
 * @param   {object}  elm - The element to increase
 * @param   {string}  category - The category of the element on the storage
 * @return  {array} - The updated array
 */
const increaseElm = (elm, category) => {
  const currentData = JSON.parse(localStorage.getItem(category) || "[]");
  const currentRankIndex = currentData.findIndex((r) => r._id === elm._id);
  const previousRank = currentData[currentRankIndex - 1];
  if (!previousRank) return currentData;
  const updatedData = currentData.map((r) => {
    if (r._id === elm._id) {
      return previousRank;
    }
    if (r._id === previousRank._id) {
      return elm;
    }
    return r;
  });
  localStorage.setItem(category, JSON.stringify(updatedData));
  return updatedData;
};

/**
 * If the next rank exists, swap the current rank with the next rank.
 * @param {object} elm - the element that is being moved
 * @param {string} category - the category of the data you want to update
 * @returns {array} The updatedData array.
 */
const decreaseElm = (elm, category) => {
  const currentData = JSON.parse(localStorage.getItem(category) || "[]");
  const currentRankIndex = currentData.findIndex((r) => r._id === elm._id);
  const nextRank = currentData[currentRankIndex + 1];
  if (!nextRank) return currentData;
  const updatedData = currentData.map((r) => {
    if (r._id === elm._id) {
      return nextRank;
    }
    if (r._id === nextRank._id) {
      return elm;
    }
    return r;
  });
  localStorage.setItem(category, JSON.stringify(updatedData));
  return updatedData;
};

/**
 * It takes an element and a category, gets the current data from localStorage, filters the data to
 * remove the element with the given ID, and updates the localStorage data
 * @param {object} elm - the element to delete
 * @param {string} category - The category of the data to be deleted on the storage
 * @returns {array} The updated data.
 */
const deleteElm = (elm, category) => {
  // Récupérer les données actuelles de localStorage
  const currentData = JSON.parse(localStorage.getItem(category) || "[]");

  // Filtrer l'objet de données pour supprimer l'élément avec l'ID donné
  const updatedData = currentData.filter((rank) => rank._id !== elm._id);

  // Mettre à jour les données de localStorage
  localStorage.setItem(category, JSON.stringify(updatedData));
  return updatedData;
};

/**
 * It finds the next element in the array of elements in the localStorage
 * @param {object} elm - the current element that we're looking at
 * @param {string} category - the category of the element you want to find the next element of
 * @returns {object} The next elm in the array.
 */
const findNextElm = (elm, category) => {
  const currentData = JSON.parse(localStorage.getItem(category) || "[]");
  const currentElmIndex = currentData.findIndex((r) => r._id === elm._id);
  const nextElm = currentData[currentElmIndex + 1];
  return nextElm;
};

/**
 * Modifies the value of the array key in the local storage
 * @param {string} keyOfLocalStorage - the key of the array in the local storage
 * @param {string} keyAtChecked - the key that was checked
 * @param {string} valueDeleted - the value that was deleted
 * @param {object} keysWithValue - the object that contains the keys and the values to be updated
 * 

 * @returns {void} - Modify the local storage
 */
const modifyArrayInLocalStorage = (
  keyOfLocalStorage,
  keyAtChecked,
  valueDeleted,
  keysWithValue,
) => {
  console.log({ keyOfLocalStorage, keyAtChecked, valueDeleted, keysWithValue });
  const currentData = JSON.parse(
    localStorage.getItem(keyOfLocalStorage) || "[]",
  );
  console.log({ currentData });
  const updatedData = currentData.map((elm) => {
    if (elm[keyAtChecked] === valueDeleted) {
      const updatedElm = { ...elm };
      Object.keys(keysWithValue).forEach((key) => {
        updatedElm[key] = keysWithValue[key];
      });
      return updatedElm;
    }
    return elm;
  });

  console.log({ updatedData });
  // Mettre à jour les données de localStorage
  localStorage.setItem(keyOfLocalStorage, JSON.stringify(updatedData));
};

export {
  increaseElm,
  decreaseElm,
  deleteElm,
  findNextElm,
  modifyArrayInLocalStorage,
};
