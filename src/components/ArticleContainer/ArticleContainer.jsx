import React from "react";

/**
 * 
 * @param {object} props
 * @param {string} title The title of the article
 * @param {*} contain The contain of the article
 * 
 * @returns {JSX.Element}
 */

const ArticleContainer = ({title, contain, titleContain}) => {
  return (
    <article className="articleContainer">
        <div className="divTitle">
          <h2>{title}</h2>
          <div>{titleContain}</div></div>
        <div className="contain">{contain}</div>
    </article>
  );
};

export default ArticleContainer;
