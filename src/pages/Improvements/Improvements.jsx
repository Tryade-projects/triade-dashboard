import React, { useState, useEffect } from 'react';
import ArticleContainer from '../../components/ArticleContainer/ArticleContainer';
import Header from '../../components/Header/Header';
import ButtonsFilterWrapper from "../../components/ButtonsFilterWrapper/ButtonsFilterWrapper";
import filteredData from "../../utils/filteredData";
import { fetchData } from "../../utils/fetchData";



const Improvements = () => {

  const improvementsLabels = [
    "Stockage",
    "Personnel",
    "Garage"
  ]

  const [improvements, setImprovements] = useState([]);

  const [category, setCategory] = useState("Stockage");

  useEffect(() => {

    fetchData("/fakeImprovements.json").then((data) => {
      // @ts-ignore
      setImprovements(filteredData(data, category, ["category"]));
    });
    // setCurrentPage(1);
  }, [category]);


  return (
    <main className='main mainImprovements'>
      <Header title="Améliorations" />
      {/* <ArticleContainer title="Améliorations"  /> */}
      {improvements.map((improvement) => (
        <div>{improvement.category}</div>
      ))}
      <div className='contain'>
        <ButtonsFilterWrapper labels={improvementsLabels} category={category} setCategory={setCategory} />
      </div>
    </main >
  )
};

export default Improvements;
