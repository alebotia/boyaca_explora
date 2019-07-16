import Map from './Map';
import { selectLocation, overLocation, showToolTip } from '../actions/Actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {    
    return {                   
           selectLocationId: state.selectLocation.selectLocationId,
           overLocationName: state.overLocationName,
           showToolTip : state.showToolTip
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleOnChange: (selectedNode) => {          
            dispatch(selectLocation(selectedNode.attributes.id.value));
        },
        handleLocationMouseOver: (event) => {                  
            dispatch(overLocation(event.target.attributes.name.value));
        },
        handleLocationMouseMove: (event) => {                  
            dispatch(showToolTip(event));
        },
        handleLocationMouseOut: () => {                  
            dispatch(showToolTip(false));
        }
    };
};

const MapActivity = connect(mapStateToProps, mapDispatchToProps)(Map);

export default MapActivity;