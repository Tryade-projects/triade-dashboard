import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { fetchData } from "../../utils/fetchData";
import PaginationEmployee from "../../components/PaginationEmployee/PaginationEmployee";
import ButtonsFilterWrapper from "../../components/ButtonsFilterWrapper/ButtonsFilterWrapper";
import { usePagination, useIndexRange } from "../../utils/usePagination";
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

  const numberPages = Math.ceil(activities.length / INFO_PER_PAGE);

  const { currentPage, setCurrentPage, nextPage, previousPage, paginate } =
    usePagination(numberPages, 1);

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
    setCurrentPage(1);
  }, [category]);

  const { firstIndex, lastIndex } = useIndexRange(currentPage, INFO_PER_PAGE);

  const currentActivities = activities.slice(firstIndex, lastIndex);
  console.log({ activities });

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
  const calcDiffOfDays = (date) => {
    const today = new Date();
    const diff = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.round(diff / (1000 * 3600 * 24));
    if (diffDays === 0) {
      return "Aujourd'hui";
    } else if (diffDays === 1) {
      return "Hier";
    } else {
      return `Il y a ${diffDays} jours`;
    }
  };

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
      const interaction_type = activity.interactio_type ? "ajouté" : "retiré";
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
          <section className="activitiesListWrapper">
            <ul className="timeline">
              {currentActivities.map((activity, i, activities) => (
                <div key={activity.activityId}>
                  {displaySeparator(i, activities)}
                  <div className="timelineItemWrapper">
                    <li>
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
                </div>
              ))}
            </ul>
          </section>
          <ButtonsFilterWrapper
            labels={activitiesLabels}
            category={category}
            setCategory={setCategory}
          />
        </section>
        <section className="activitiesPagination">
          <PaginationEmployee
            infoPerPage={currentActivities.length}
            numberOfPages={numberPages}
            totalOfInfo={activities.length}
            paginate={paginate}
            currentPage={currentPage}
            nextPage={nextPage}
            previousPage={previousPage}
            itemName={"activitée"}
          />
        </section>
      </article>
    </main>
  );
};

export default Activities;
