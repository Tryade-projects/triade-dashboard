import React from "react";
import Header from "../../components/Header/Header";
import ScrollPagesContainer from "../../components/ScrollPagesContainer/ScrollPagesContainer";

const Finance = () => {
  return (
    <div className="main mainFinance">
      <Header title={"Finances"} />
      <main>
        <ScrollPagesContainer />
      </main>
    </div>
  );
};

export default Finance;
