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

const Improvements = () => {

  const [improvements, setImprovements] = useState([]);
  const [category, setCategory] = useState("Stockage");
  const infoPerPage = 3;

  const numberPages = Math.ceil(improvements.length / infoPerPage);




  //Utilisation du hook de pagination
  const { currentPage, setCurrentPage, nextPage, previousPage, paginate } =
    usePagination(numberPages, 1);

  const improvementsLabels = [
    "Stockage",
    "Personnel",
    "Garage"
  ]


  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  useEffect(() => {

    fetchData("/fakeImprovements.json").then((data) => {
      // @ts-ignore
      setImprovements(filteredData(data, category, ["category"]));
    });
    // setCurrentPage(1);
  }, [category]);

  const { firstIndex, lastIndex } = useIndexRange(currentPage, infoPerPage);
  const currentImprovements = improvements.slice(firstIndex, lastIndex);


  return (
    <main className='main mainImprovements'>
      <Header title="Améliorations" />
      <ArticleContainer title="Améliorations"
        titleContain={<ButtonsFilterWrapper labels={improvementsLabels} category={category} setCategory={setCategory} />}
        contain={
          <>
            <div className='mainContain'>
              {
                currentImprovements.map((improvement, id) => (
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
                        <h2>{improvement.capacity}</h2>
                        <h4>Capacité</h4>
                      </div>
                    </div>
                    <ButtonBuy text="Acheter" />
                  </div>
                ))}
            </div>

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