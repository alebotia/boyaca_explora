import MunicipalityContainer from './MunicipalityContainer';
import { setTab } from '../actions/Actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {                   
           selectLocation: state.selectLocation,
           currentTab: state.currentTab
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTab: (e, nextTab) => {            
        e.preventDefault();         
            dispatch(setTab(nextTab));
        }
    };
};

const MunicipalityActivity = connect(mapStateToProps, mapDispatchToProps)(MunicipalityContainer);

export default MunicipalityActivity;