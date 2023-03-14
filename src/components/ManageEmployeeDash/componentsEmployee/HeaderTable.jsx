import React from "react";
import styles from "./_test.module.scss";

const HeaderTable = ({ titles }) => {
  return (
    <thead>
      <tr>
        {titles.map((title, i) => (
          <th className="semiBold" key={i}>
            {title}
          </th>
        ))}
        <th className="semiBold">Actions</th>
        <th className="semiBold">Plus</th>
      </tr>
    </thead>
  );
};

export default HeaderTable;
