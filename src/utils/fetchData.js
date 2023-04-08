export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.response) {
      // Erreur de réponse HTTP
      console.log("Erreur de réponse HTTP:", error.response.status);
    } else if (error.request) {
      // Erreur de demande
      console.log("Erreur de demande:", error.request);
    } else {
      // Erreur générale
      console.log("Erreur:", error.message);
    }
    return error;
  }
};
