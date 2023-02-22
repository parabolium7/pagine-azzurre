import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

export default function Aside({ sidebarIsOpen, setSidebarIsOpen }) {
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  return (
    <>
      <div className={sidebarIsOpen ? "active overlay": "overlay"} onClick={() => setSidebarIsOpen(false)}></div>
      <aside className={sidebarIsOpen ? "open" : ""}>
        <div className="sidebar-header">
          <strong>Categorie</strong>
          <button
            onClick={() => setSidebarIsOpen(false)}
            className="close-sidebar"
            type="button"
          >
            <i className="fa fa-close"></i>
          </button>
        </div>
        <ul className="categories">
          {loadingCategories ? (
            <LoadingBox></LoadingBox>
          ) : errorCategories ? (
            <MessageBox variant="danger">{errorCategories}</MessageBox>
          ) : (
            categories.map((c) => (
              <li className="sp_li" key={c}>
                <Link
                  to={`/search/category/${c}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  {c[0] + c.slice(1).toLowerCase()}
                </Link>
              </li>
            ))
            )}
        </ul>
      </aside>
    </>
  );
}
