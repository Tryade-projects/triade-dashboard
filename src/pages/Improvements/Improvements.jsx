import React, { useState, useEffect } from 'react';
import ArticleContainer from '../../components/ArticleContainer/ArticleContainer';
import Header from '../../components/Header/Header';
import ButtonsFilterWrapper from "../../components/ButtonsFilterWrapper/ButtonsFilterWrapper";
import filteredData from "../../utils/filteredData";
import { fetchData } from "../../utils/fetchData";
import ButtonBuy from "../../components/ButtonBuy/ButtonBuy";
import { usePagination, useIndexRange } from "../../utils/usePagination";
import PaginationEmployee from '../../components/PaginationEmployee/PaginationEmployee';
import star from "../../assets/star.svg"
import capacity from "../../assets/capacity.svg"
import arrow from "../../assets/arrow.svg"
import fakeDataCompany from "../../../fakeCompanyData.json";

const Improvements = () => {

  // State that holds the improvements data and the selected category for filtering
  const [improvements, setImprovements] = useState([]);
  const [category, setCategory] = useState("Stockage");

  // Number of improvements displayed per page
  const infoPerPage = 3;

  // Calculate the total number of pages based on the number of improvements and the infoPerPage value
  const numberPages = Math.ceil(improvements.length / infoPerPage);

  // Hook for pagination functionality
  const { currentPage, setCurrentPage, nextPage, previousPage, paginate } =
    usePagination(numberPages, 1);

  // Create an array of labels for filtering
  const improvementsLabels = [
    "Stockage",
    "Personnel",
    "Garage"
  ];

  // Set the current page to the first page whenever the category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  // Fetch the improvements data and apply the selected filter
  useEffect(() => {
    fetchData("/fakeImprovements.json").then((data) => {
      setImprovements(filteredData(data, category, ["category"]));
    });
  }, [category]);

  // Calculate the first and last indices of the current page of improvements
  const { firstIndex, lastIndex } = useIndexRange(currentPage, infoPerPage);

  // Slice the improvements array to get the current page's improvements
  const currentImprovements = improvements.slice(firstIndex, lastIndex);

  /////////
  const [companyData, setCompanyData] = useState({});

  useEffect(() => {
    setCompanyData(fakeDataCompany); // Charger les données JSON du fichier
  }, []);

  function getActualLevel(category) {
    return companyData.improvement[0][`actualLvlImprovement${category}`];
  }
  
  function getActualCapacity(category){
    return companyData.actualCapacity[0][`actual${category}`] ;
  }

  function percentageOfimprovement(category, capacityData){
    let actualValue = companyData.actualCapacity[0][`actual${category}`];
    console.log(capacityData);
    if(capacityData>actualValue){
      let data = ((capacityData - actualValue) / actualValue) * 100;
      data = Math.round(data);
      return "+" + data + "%";
    }
  }





  return (
    <main className='main mainImprovements'>
      <Header title="Améliorations" />

      {/* Render the ArticleContainer component */}
      <ArticleContainer title="Améliorations"
        titleContain={<ButtonsFilterWrapper labels={improvementsLabels} category={category} setCategory={setCategory} />}
        contain={
          <>
            <div className='mainContain'>

              {/* Map through the current improvements and render each one in a div */}
              {currentImprovements.map((improvement, id) => (
                <div key={id} className='improvementContainMap'>
                  <div className='improvementImage'>{improvement.image}</div>
                  <div className='flexColumn'>
                    <h2>{improvement.title}</h2>
                    <h4>{category}</h4>
                  </div>
                  <div className='flexGrow2'>
                    <div className="improvement"><img src={star} alt="" /></div>
                    <h2>Niv.{improvement.level}</h2>
                  </div>
                  <div className='flexGrow2'>
                    <div><img src={capacity} alt="" /></div>
                    <div className='flexColumn'>
                      <h2>{improvement.capacity}</h2>
                      <h4>Capacité</h4>
                    </div>
                  </div>
                  <div className='flexGrow2'>
                    <div><img src={arrow} alt="" /></div>
                    <div className='flexColumn'>
                      <h2>{percentageOfimprovement(category, improvement.capacityData)}</h2>
                      <h4>Actuel: {getActualCapacity(category)}</h4>
                    </div>
                  </div>
                  {/* Render the ButtonBuy component and pass in relevant props */}
                  <ButtonBuy level={improvement.level} actualLvlImprovement={getActualLevel(category)} />

                </div>
              ))}

            </div>

            {/* Render the PaginationEmployee component */}
            <div className="footer-dashboard-employee">
              <PaginationEmployee
                infoPerPage={infoPerPage}
                numberOfPages={numberPages}
                totalOfInfo={improvements.length}
                paginate={paginate}
                currentPage={currentPage}
                nextPage={nextPage}
                previousPage={previousPage}
                itemName="amélioration"
              />
            </div>

          </>
        }
      />
    </main>
  )
};

export default Improvements;