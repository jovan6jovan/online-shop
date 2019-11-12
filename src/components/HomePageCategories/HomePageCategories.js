import React from 'react';

import "./HomePageCategories.scss";
import HomePageCategoryItem from "../HomePageCategoryItem/HomePageCategoryItem";

class HomePageCategories extends React.Component {
    state = {
        sections: [
            {
                id: 1,
                title: 'kids',
                routeName: 'kids',
                imgUrl: 'http://u.cubeupload.com/jovan6jovan/dete.jpg',
            },
            {
                id: 2,
                title: 'women',
                routeName: 'women',
                imgUrl: 'http://u.cubeupload.com/jovan6jovan/women.jpg'
            },
            {
                id: 3,
                title: 'accessories',
                routeName: 'accessories',
                imgUrl: 'http://u.cubeupload.com/jovan6jovan/kapa.jpg'
            },
            {
                id: 4,
                title: 'football jerseys',
                routeName: 'football_jerseys',
                imgUrl: 'http://u.cubeupload.com/jovan6jovan/laca.jpg',
                size: 'large'
            },
            {
                id: 5,
                title: 'basketball jerseys',
                routeName: 'basketball_jerseys',
                imgUrl: 'http://u.cubeupload.com/jovan6jovan/micel.jpg',
                size: 'large'
            }
        ]
    }

    render() {
        return (
            <div className="categories-container">
                {
                    this.state.sections.map(({ id, ...otherSectionProps}) => {
                    return <HomePageCategoryItem key={id} {...otherSectionProps} />
                    })
                }
            </div>
        )
    }
}

export default HomePageCategories;