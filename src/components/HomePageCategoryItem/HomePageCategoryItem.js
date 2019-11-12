import React from "react";
import { withRouter } from "react-router-dom";

import "./HomePageCategoryItem.scss";

const HomePageCategoryItem = ({ title, imgUrl, size, history, match, routeName }) => {
  return (
      <div className={`${size} category-item`} onClick={() => history.push(`${match.url}${routeName}`)}>
        <div className="background-img" style={{backgroundImage: `url(${imgUrl})`}}></div>
        <div className="category-item-content">
          <h1 className="category-item-title">{title.toUpperCase()}</h1>
          <span className="category-item-subtitle">SHOP NOW</span>
        </div>
      </div>
  );
};

export default withRouter(HomePageCategoryItem);
