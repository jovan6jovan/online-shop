import React from "react";

import "./CategoryItem.scss";

const CategoryItem = ({ title, imgUrl, size }) => {
  return (
      <div className={`${size} category-item`}>
        <div className="background-img" style={{backgroundImage: `url(${imgUrl})`}}></div>
        <div className="category-item-content">
          <h1 className="category-item-title">{title.toUpperCase()}</h1>
          <span className="category-item-subtitle">SHOP NOW</span>
        </div>
      </div>
  );
};

export default CategoryItem;
