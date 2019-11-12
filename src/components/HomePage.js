import React from 'react';

import "./HomePage.scss";

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="category-container">
                <div className="category-item">
                    <div className="category-item-content">
                        <h1 className="category-item-title">FOOTBALL JERSEYS</h1>
                        <span className="category-item-subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="category-item">
                    <div className="category-item-content">
                        <h1 className="category-item-title">BASKETBALL JERSEYS</h1>
                        <span className="category-item-subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="category-item">
                    <div className="category-item-content">
                        <h1 className="category-item-title">ACCESSORIES</h1>
                        <span className="category-item-subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="category-item">
                    <div className="category-item-content">
                        <h1 className="category-item-title">GROWN-UPS</h1>
                        <span className="category-item-subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="category-item">
                    <div className="category-item-content">
                        <h1 className="category-item-title">KIDS</h1>
                        <span className="category-item-subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
