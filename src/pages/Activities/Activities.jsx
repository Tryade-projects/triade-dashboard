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
  console.log(activities);

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
      return <h2 className="separator">{calcDiffOfDays(dateOfActivity)}</h2>;
    }
    return null;
  };

  /**
   *  Calculate the difference between the date of activity and today
   * @param {Date} dateOfActivity -  Date of the activity
   * @returns {string} - Return a string with the difference between the date and today
   */
  const calcDiffOfDays = (dateOfActivity) => {
    const today = new Date();
    const diff = Math.abs(today.getTime() - dateOfActivity.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    if (diffDays === 0) {
      return "Aujourd'hui";
    } else if (diffDays === 1) {
      return "Hier";
    } else {
      return `Il y a ${diffDays} jours`;
    }
  };

  return (
    <main className="main">
      <Header title={"Activité"} />
      <article className="activitiesWrapper">
        <section className="activitiesListAndNavWrapper">
          <section className="activitiesListWrapper">
            <ul className="activitiesList">
              {currentActivities.map((activity, i, activities) => (
                <li className="activity" key={activity.activityId}>
                  {displaySeparator(i, activities)}
                  <div className="activityInfo">
                    <p className="activityDate">{activity.timestamp}</p>
                    <p className="activityEmployee">{activity.employee}</p>
                    <p className="activityCategory">{activity.category}</p>
                  </div>
                  <div className="activityStatus">
                    <p className="activityStatusText">{activity.status}</p>
                  </div>
                </li>
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
