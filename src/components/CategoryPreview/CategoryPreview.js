import React from 'react';

import './CategoryPreview.scss';
import Item from "../Item/Item";

const CategoryPreview = ({ title, items }) => {
    return (
        <div className="category-preview">
           <h1 className="title">{title.toUpperCase()}</h1>
           <div className="category">
                {
                   items
                    .filter((item, index) => index < 4)
                    .map(({ id, ...otherItemProps }) => {
                        return <Item key={id} {...otherItemProps} />
                    }) 
                }
           </div>
        </div>
    )
}

export default CategoryPreview;