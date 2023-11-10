import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import CollectionItem from "../../components/collection-item/collection-item.components";

import './collection.styles.scss';

const CollectionPage = ({collections}) => {

    const COLLECTION_ID_MAP = {
        hats:1,
        sneakers:2,
        jackets:3,
        womens:4,
        mens:5
    };

    const {id} = useParams();

    const {title, items} = collections[id];
    
    return (
    <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
            {
                // collections
            items.map(item=>(<CollectionItem key={item.id} item={item}/>))
            }
        </div>
    </div>
)};



const mapStateToProps = createStructuredSelector ({
    collections: selectCollections
});


export default connect(mapStateToProps)(CollectionPage);