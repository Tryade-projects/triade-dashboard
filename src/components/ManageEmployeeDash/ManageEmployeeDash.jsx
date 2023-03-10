import React, { useState } from "react";
import data from "../../../fakeData.json";
import gear from "../../assets/gear.svg";
import trending from "../../assets/trending.svg";
import decrease from "../../assets/decrease.svg";
import fired from "../../assets/fired.svg";
import PaginationEmployee from "../PaginationEmployee/PaginationEmployee";

const INFO_PER_PAGE = 5;

const ManageEmployeeDash = ({ search }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const displayProfil = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  // Number of page
  const numberPages = Math.ceil(displayProfil.length / INFO_PER_PAGE);

  // first and last index of posts from the current page
  const postLastIndex = currentPage * INFO_PER_PAGE;
  const postFirstIndex = postLastIndex - INFO_PER_PAGE;

  // Keeps only the posts on the page
  const currentProfils = displayProfil.slice(postFirstIndex, postLastIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const titleArray = Object.keys(data[0]);
  titleArray.splice(0, 2);

  const test = (grade) => {
    switch (grade) {
      case "Recrue":
        return "recrue";
      case "Sergent-Chef":
        return "sergent-chef";
      case "Commandant":
        return "commandant";
      default:
        return "";
    }
  };

  return (
    <div className="container-dashboard-employee">
      <table>
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
        <tbody>
          {currentProfils.map((profil) => (
            <tr key={profil.id}>
              <td>
                <div className="wrapper-flex-name-avatar">
                  <div>
                    <img src={profil.avatar} alt="avatar" />
                  </div>
                  <p className="bold">{profil.name}</p>
                </div>
              </td>
              <td className="td-grade">
                <p className={test(profil.grade)}>{profil.grade}</p>
              </td>
              <td className="td-date regular">{profil.date}</td>
              <td className="td-phone regular">{profil.phone}</td>
              <td className="td-action">
                <div className="wrapper-type-actions">
                  <div>
                    <img src={trending} alt="" />
                  </div>
                  <div>
                    <img className="decrease-img" src={decrease} alt="" />
                  </div>
                  <div>
                    <img src={fired} alt="" />
                  </div>
                </div>
              </td>
              <td className="td-more">
                <div>
                  <img
                    src={gear}
                    alt="image de réglage pour avoir plus d'accès"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer-dashboard-employee">
        <PaginationEmployee
          infoPerPage={INFO_PER_PAGE}
          numberOfPages={numberPages}
          totalOfInfo={data.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ManageEmployeeDash;
