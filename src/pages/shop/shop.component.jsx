import React from "react"; 
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { connect } from "react-redux";
import ShopActionTypes from "../../redux/shop/shop.type";

class ShopPage extends React.Component  {

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
    };

    render (){
        return (
            <div className="shoppage">
                <CollectionOverview/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => {
        dispatch({ type: ShopActionTypes.FETCH_COLLECTIONS_START });
     }
});

export default connect(null, mapDispatchToProps)(ShopPage);