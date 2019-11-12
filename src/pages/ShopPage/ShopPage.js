import React from 'react';

import SHOP_DATA from './shop-data';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

export class ShopPage extends React.Component {
    state = {
        categories: SHOP_DATA
    }

    render() {
        const { categories } = this.state;
        return (
            <div className="shop-page">
                {
                    categories.map(({id, ...otherCategoriesProps}) => {
                        return <CategoryPreview key={id} {...otherCategoriesProps} />
                    })
                }
            </div>
        )
    }
}

export default ShopPage;
