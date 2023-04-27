import React, { useState, useEffect } from "react";
import ArticleContainer from "../../components/ArticleContainer/ArticleContainer";
import Header from "../../components/Header/Header";
import ButtonsFilterWrapper from "../../components/ButtonsFilterWrapper/ButtonsFilterWrapper";
import filteredData from "../../utils/filteredData";
import { fetchData } from "../../utils/fetchData";
import ButtonBuy from "../../components/ButtonBuy/ButtonBuy";
import { usePagination, useIndexRange } from "../../utils/usePagination";

import PaginationEmployee from "../../components/PaginationEmployee/PaginationEmployee";

import star from "../../assets/star.svg";
import capacity from "../../assets/capacity.svg";
import arrow from "../../assets/arrow.svg";
import fakeDataCompany from "../../../fakeCompanyData.json";
import ModalActions from "../../components/ModalActions/ModalActions";

const INFO_PER_PAGE = 3;
/**
 * Improvements page component.
 * Renders a container with a list of improvements.
 * Allows filtering the improvements by category and pagination.
 * Displays detailed information about each improvement and allows purchasing them.
 * @returns {JSX.Element} The Improvements component.
 */

const Improvements = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [improvementData, setImprovementData] = useState({});
  const [improvements, setImprovements] = useState([]);

  //******The ButtonsFilterWrapper informations */
  // State that holds the improvements data and the selected category for filtering
  const [category, setCategory] = useState("Stockage");
  // Create an array of labels for filtering
  const improvementsLabels = ["Stockage", "Personnel", "Garage"];

  // Fetch the improvements data and apply the selected filter
  useEffect(() => {
    fetchData("/fakeImprovements.json").then((data) => {
      setImprovements(filteredData(data, category, ["category"]));
    });
    _DATA.setCurrentPage(1);
  }, [category]);
  //******* End of ButtonsFilterWrapper */

  const _DATA = usePagination(improvements, INFO_PER_PAGE);

  //******** Increase the datas *********//
  const [companyData, setCompanyData] = useState({});

  useEffect(() => {
    setCompanyData(fakeDataCompany);
  }, []);

  //Get the actual level of the selected improvement
  function getActualLevel(category) {
    return companyData.improvement[0][`actualLvlImprovement${category}`];
  }

  //Get and return the actual capacity of company
  function getActualCapacity(category) {
    return companyData.actualCapacity[0][`actual${category}`];
  }

  //Return the improvement percentage between the actual capacity and improvement
  function percentageOfimprovement(category, capacityData) {
    let actualValue = companyData.actualCapacity[0][`actual${category}`];
    if (capacityData > actualValue) {
      let data = Math.round(((capacityData - actualValue) / actualValue) * 100);
      return "+" + data + "%";
    }
  }

  //**** Function to increase data *********//
  function increaseData() {
    // Get the current improvement level
    const currentLevel =
      companyData.improvement[0][`actualLvlImprovement${category}`];

    // Get the improvement capacity
    const newCapacity = improvementData.nextCapacity;

    // Increase of one the level
    const newLevel = currentLevel + 1;

    // Update the value in company datas
    companyData.improvement[0][`actualLvlImprovement${category}`] = newLevel;
    companyData.actualCapacity[0][`actual${category}`] = newCapacity;

    // Rewrite the new values in Json file
    fetch("/fakeCompanyData.json", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(companyData),
    });

    fetch("/fakeImprovements.json", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(companyData),
    }).catch((error) => console.error(error));

    // Close the modal after datas update
    setModalIsOpen(false);
  }
  //******* End of function to increase data ********//

  //***** Function to get the actual datas of the selected improvement */
  function getTheData(category, capacityData) {
    const improvementLevel =
      companyData.improvement[0][`actualLvlImprovement${category}`];
    const actualValue = companyData.actualCapacity[0][`actual${category}`];

    setImprovementData({
      improvementLevel: improvementLevel,
      actualValue: actualValue,
      nextCapacity: capacityData,
    });
  }
  //******** End of getTheData ******//

  return (
    <main className="main mainImprovements">
      <ModalActions
        confirmText={"Les fonds seront prélevés du compte de l'entreprise"}
        action={"acheter"}
        span={"amélioration"}
        modalIsOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        handleClick={increaseData}
      />
      <Header title="Améliorations" />

      {/* Render the ArticleContainer component */}
      <ArticleContainer
        title="Améliorations"
        titleContain={
          <ButtonsFilterWrapper
            labels={improvementsLabels}
            category={category}
            setCategory={setCategory}
          />
        }
        contain={
          <>
            <div className="mainContain">
              {/* Map through the current improvements and render each one in a div */}
              {_DATA.currentData().map((improvement, id) => (
                <div key={id} className="improvementContainMap">
                  <div className="improvementImage">{improvement.image}</div>
                  <div className="flexColumn">
                    <h2>{improvement.title}</h2>
                    <h4>{category}</h4>
                  </div>
                  <div className="flexGrow2">
                    <div className="improvement">
                      <img src={star} alt="" />
                    </div>
                    <h2>Niv.{improvement.level}</h2>
                  </div>
                  <div className="flexGrow2">
                    <div>
                      <img src={capacity} alt="" />
                    </div>
                    <div className="flexColumn">
                      <h2>{improvement.capacity}</h2>
                      <h4>Capacité</h4>
                    </div>
                  </div>
                  <div className="flexGrow2">
                    <div>
                      <img src={arrow} alt="" />
                    </div>
                    <div className="flexColumn">
                      <h2>
                        {percentageOfimprovement(
                          category,
                          improvement.capacityData,
                        )}
                      </h2>
                      <h4>Actuel: {getActualCapacity(category)}</h4>
                    </div>
                  </div>
                  {/* Render the ButtonBuy component and pass in relevant props */}
                  <ButtonBuy
                    level={improvement.level}
                    actualLvlImprovement={getActualLevel(category)}
                    setIsOpen={setModalIsOpen}
                    getTheData={getTheData}
                    category={category}
                    capacityData={improvement.capacityData}
                  />
                </div>
              ))}
            </div>
            {/* Render the PaginationEmployee component */}

            <PaginationEmployee
              data={_DATA}
              list={improvements}
              type="employee"
            />
          </>
        }
      />
    </main>
  );
};

export default Improvements;
