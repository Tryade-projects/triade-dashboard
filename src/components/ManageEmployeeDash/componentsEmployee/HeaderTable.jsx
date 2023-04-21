import React from "react";

const HeaderTable = () => {
  return (
    <thead>
      <tr>
        <th className="semiBold thHeaderName thFirstHeader">Nom</th>
        <th className="semiBold thHeaderGrade">Grade</th>
        <th className="semiBold thHeaderDate">Date d'emploi</th>
        <th className="semiBold thHeaderPhone">Téléphone</th>
        <th className="semiBold thHeaderACtion">Actions</th>
        <th className="semiBold">Plus</th>
      </tr>
    </thead>
  );
};

export default HeaderTable;
