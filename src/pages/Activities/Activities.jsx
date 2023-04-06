import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { fetchData } from "../../utils/fetchData";
import PaginationEmployee from "../../components/PaginationEmployee/PaginationEmployee";
import { usePagination, useIndexRange } from "../../utils/usePagination";

const INFO_PER_PAGE = 6;

const Activities = () => {
  const [activities, setActivities] = useState([]);

  const numberPages = Math.ceil(activities.length / INFO_PER_PAGE);

  const { currentPage, setCurrentPage, nextPage, previousPage, paginate } =
    usePagination(numberPages, 1);

  useEffect(() => {
    fetchData("/activitiesData.json").then((data) => {
      setActivities(data);
    });
    setCurrentPage(1);
  }, []);

  const { firstIndex, lastIndex } = useIndexRange(currentPage, INFO_PER_PAGE);
  const currentActivities = activities.slice(firstIndex, lastIndex);
  console.log(activities);

  return (
    <main className="main">
      <Header title={"Activité"} />
      <section className="activitiesWrapper">
        <div className="activitiesAndNav"></div>
        <div className="activitiesPagination">
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
        </div>
      </section>
    </main>
  );
};

export default Activities;
