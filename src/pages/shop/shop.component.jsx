import React, {useEffect} from "react"; 
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { connect } from "react-redux";
import ShopActionTypes from "../../redux/shop/shop.type";

const ShopPage = ({fetchCollectionsStart}) =>  {

    useEffect(()=>{
        fetchCollectionsStart();
    },[fetchCollectionsStart]);

    return (
        <div className="shoppage">
            <CollectionOverview/>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => {
        dispatch({ type: ShopActionTypes.FETCH_COLLECTIONS_START });
     }
});

export default connect(null, mapDispatchToProps)(ShopPage);