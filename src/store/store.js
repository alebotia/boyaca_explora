import { combineReducers } from 'redux';
import { defaultMunicipalityDocument } from '../info/boyaca'

const selectLocation = (state = defaultMunicipalityDocument, action) => {  
  switch(action.type){
    case 'SET_SELECT_LOCATION_ID':    
      return {
        ...state,
        selectLocationId: action.locationId,
        currentMunicipality: action.currentMunicipality
      } 
    default:
      return state;
  }
}

const overLocationName = (state = '', action) => { 
  switch(action.type){
    case 'SET_OVER_LOCATION_NAME':
      return action.locationName;
    default:
      return state;
  }
}    

const showToolTip = (state = {}, action) => { 
  switch(action.type){  
  case 'SHOW_TOOLTIP':   
    if(action.showToolTip === false){
        return {
          ...state,
          display: 'none'
        }
    }else{
        return {
          ...state,
          display: 'block',
          top: action.showToolTip.clientY + 15,
          left: action.showToolTip.clientX - 40
        }
    }
    default:
      return state;
  }
}

const currentTab = (state = 1, action) => {
switch(action.type){
    case 'SET_TAB':
      return action.nextTab;
    default:
      return state;
  }
}

//create the globals state tree object
//each element in the object will handle a porcion of the state tree
const boyacaApp = combineReducers({
    selectLocation,
    overLocationName,
    showToolTip,
    currentTab
});
//export the store
export default boyacaApp;