import React from 'react';

import "./Categories.scss";
import CategoryItem from "../CategoryItem/CategoryItem";

class Categories extends React.Component {
    state = {
        sections: [
            {
                title: 'kids',
                imgUrl: 'http://u.cubeupload.com/jovan6jovan/dete.jpg',
                id: 1
            },
            {
                title: 'women',
                imgUrl: 'http://u.cubeupload.com/jovan6jovan/women.jpg',
                id: 2
            },
            {
                title: 'accessories',
                imgUrl: 'http://u.cubeupload.com/jovan6jovan/kapa.jpg',
                id: 3
            },
            {
                title: 'football jerseys',
                imgUrl: 'http://u.cubeupload.com/jovan6jovan/laca.jpg',
                size: 'large',
                id: 4
            },
            {
                title: 'basketball jerseys',
                imgUrl: 'http://u.cubeupload.com/jovan6jovan/micel.jpg',
                size: 'large',
                id: 5
            }
        ]
    }

    render() {
        return (
            <div className="categories-container">
                {
                    this.state.sections.map(({ title, imgUrl, id, size}) => {
                    return <CategoryItem key={id} title={title} imgUrl={imgUrl} size={size} />
                    })
                }
            </div>
        )
    }
}

export default Categories;