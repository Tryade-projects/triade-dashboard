import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { fetchData } from "../../utils/fetchData";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetchData("/activitiesData.json").then((data) => {
      setActivities(data);
    });
  }, []);
  console.log(activities);

  return (
    <main className="main">
      <Header title={"Activité"} />
      <section className="activitiesWrapper"></section>
    </main>
  );
};

export default Activities;
