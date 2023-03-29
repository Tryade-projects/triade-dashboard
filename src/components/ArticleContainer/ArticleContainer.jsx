import React from "react";

/**
 * 
 * @param {object} props
 * @param {string} title The title of the article
 * @param {*} contain The contain of the article
 * 
 * @returns {JSX.Element}
 */

const ArticleContainer = ({title, contain}) => {
  return (
    <article className="articleContainer">
        <h2>{title}</h2>
        {contain}
    </article>
  );
};

export default ArticleContainer;
