import React from "react";

const HeaderTable = () => {
  return (
    <thead>
      <tr>
        <th className="semiBold th-name">Nom</th>
        <th className="semiBold">Grade</th>
        <th className="semiBold">Date d'emploi</th>
        <th className="semiBold">Téléphone</th>
        <th className="semiBold">Actions</th>
        <th className="semiBold">Plus</th>
      </tr>
    </thead>
  );
};

export default HeaderTable;
