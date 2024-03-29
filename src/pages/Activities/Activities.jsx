import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { fetchData } from "../../utils/fetchData";
import PaginationWrapper from "../../components/PaginationWrapper/PaginationWrapper";
import ButtonsFilterWrapper from "../../components/ButtonsFilterWrapper/ButtonsFilterWrapper";
import { usePagination } from "../../utils/usePagination";
import filteredData from "../../utils/filteredData";

const INFO_PER_PAGE = 6;

const Activities = () => {
  const activitiesLabels = [
    "Tout",
    "Stockage",
    "Factures",
    "Service",
    "Garage",
  ];

  const [activities, setActivities] = useState([]);
  const [category, setCategory] = useState("Tout");

  const _DATA = usePagination(activities, INFO_PER_PAGE);

  useEffect(() => {
    if (category === "Tout") {
      fetchData("/activitiesData.json").then((data) => {
        setActivities(data);
      });
    } else {
      fetchData("/activitiesData.json").then((data) => {
        // @ts-ignore
        setActivities(filteredData(data, category, ["category"]));
      });
    }
    _DATA.setCurrentPage(1);
  }, [category]);

  /**
   * Display a separator if the activity is the first of the day or if the date is different from the previous activity
   * @param {number} i - Index of the activity
   * @param {object[]} activities - Array of activities
   * @returns {JSX.Element | null} - Return a JSX element if the activity is the first of the day or if the date is different from the previous activity
   */
  const displaySeparator = (i, activities) => {
    const dateOfActivity = new Date(activities[i].timestamp * 1000);
    const dateOfLastActivity = new Date(activities[i - 1]?.timestamp * 1000);
    if (i === 0 || dateOfActivity.getDay() !== dateOfLastActivity.getDay()) {
      return (
        <h2 className="timelineTitle">{calcDiffOfDays(dateOfActivity)}</h2>
      );
    }
    return null;
  };

  /**
   *  Calculate the difference between the date and today
   * @param {Date} date -  Date to compare
   * @returns {string} - Return a string with the difference between the date and today
   */
  function calcDiffOfDays(date) {
    const uneJournee = 1000 * 60 * 60 * 24; // Nombre de millisecondes dans une journée
    const aujourdHui = new Date(); // Date d'aujourd'hui
    const dateParam = new Date(date); // Date passée en paramètre
    const differenceMs = Math.abs(
      dateParam.setHours(0, 0, 0, 0) - aujourdHui.setHours(0, 0, 0, 0),
    ); // Différence en millisecondes entre les deux dates à minuit
    const diffDays = Math.floor(differenceMs / uneJournee); // Différence en jours arrondie à l'entier inférieur
    if (diffDays === 0) {
      return "Aujourd'hui";
    } else if (diffDays === 1) {
      return "Hier";
    } else {
      return `Il y a ${diffDays} jours`;
    }
  }

  /**
   *  Display a timeline marker after the activity if the date of the activity is the same as the next activity
   * @param {number} i - Index of the activity
   * @param {Array} activities - Array of activities
   * @returns {Boolean} - Return true if the activity is not the last of the array and if the date of the activity is the same as the next activity
   */
  const displayTimelineMarkerAfter = (i, activities) => {
    const dateOfActivity = new Date(activities[i].timestamp * 1000);
    const dateOfNextActivity = new Date(activities[i + 1]?.timestamp * 1000);
    if (
      i === activities.length - 1 ||
      dateOfActivity.getDay() !== dateOfNextActivity.getDay()
    ) {
      return false;
    }
    return true;
  };

  /**
   *  Display a timeline marker before the activity if the date of the activity is the same as the previous activity
   * @param {number} timestamp - Timestamp of the activity
   * @returns - Return a string with the date of the activity
   */
  const formatDateForDisplay = (timestamp) => {
    const date = new Date(timestamp * 1000);
    /**
     * @type {Intl.DateTimeFormatOptions}
     */
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return (
      date
        .toLocaleDateString("fr-FR", options)
        // First letter to uppercase
        .replace(/^\w/, (c) => c.toUpperCase())
    );
  };

  const displayTimelineContent = (activity) => {
    if (activity.category === "Stockage") {
      const interaction_type = activity.interaction_type ? "ajouté" : "retiré";
      return (
        <p>
          <span className="bold">{activity.employee}</span> a {interaction_type}{" "}
          {activity.quantity} {activity.element} du{" "}
          <span className={`semiBold categoryColor` + activity.category}>
            {activity.category}
          </span>
        </p>
      );
    }
    if (activity.category === "Factures") {
      const interaction_type = activity.interaction_type ? "facturé" : "payé";
      return (
        <p>
          <span className="bold">{activity.employee}</span> a{" "}
          <span className={`semiBold categoryColor` + activity.category}>
            {interaction_type}
          </span>{" "}
          {activity.quantity + activity.element}
        </p>
      );
    }
    if (activity.category === "Service") {
      const interaction_type = activity.interaction_type ? "pris" : "arrêté";
      return (
        <p>
          <span className="bold">{activity.employee}</span> a {interaction_type}{" "}
          son{" "}
          <span className={`semiBold categoryColor` + activity.category}>
            {activity.category}
          </span>
        </p>
      );
    }
    if (activity.category === "Garage") {
      const interaction_type = activity.interaction_type ? "sorti" : "rentré";
      return (
        <p>
          <span className="bold">{activity.employee}</span> a {interaction_type}{" "}
          une {activity.element} du{" "}
          <span className={`semiBold categoryColor` + activity.category}>
            {activity.category}
          </span>
        </p>
      );
    }
  };

  return (
    <main className="main">
      <Header title={"Activité"} />
      <article className="activitiesWrapper">
        <section className="activitiesListAndNavWrapper">
          <ul className="timeline activitiesListWrapper">
            {_DATA.currentData().map((activity, i, activities) => (
              <div
                key={activity.activityId}
                className="timelineItemAndSeparatorWrapper"
              >
                {displaySeparator(i, activities)}
                <li className="timelineItemWrapper">
                  <div className="timelineItem">
                    <p className="timelineInfo">
                      {formatDateForDisplay(activity.timestamp)}
                    </p>
                    <div
                      className={
                        displayTimelineMarkerAfter(i, activities)
                          ? "timelineMarker"
                          : "timelineMarker timelineMarkerWithoutAfter"
                      }
                    ></div>
                    <div className="timelineContent">
                      {displayTimelineContent(activity)}
                    </div>
                  </div>
                </li>
              </div>
            ))}
          </ul>
          <ButtonsFilterWrapper
            labels={activitiesLabels}
            category={category}
            setCategory={setCategory}
          />
        </section>
        <PaginationWrapper
          data={_DATA}
          list={activities}
          type="activité"
          presentationText={true}
        />
      </article>
    </main>
  );
};

export default Activities;
