import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import './collection-overview.styles.scss'

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
            {
            collections.map(({id, ...collectionProps})=>(
            <CollectionPreview key={id} {...collectionProps}></CollectionPreview>
            ))
            }        
    </div>
);

const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);