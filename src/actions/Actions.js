// generated random id string any time
import { getMunicipalityByDaneCode } from '../utilities/data'

const selectLocation = (locationId) => {
    return {
        type: 'SET_SELECT_LOCATION_ID',
        locationId,
        currentMunicipality: getMunicipalityByDaneCode(locationId)
    }
}

const overLocation = (locationName) => {
    return {
        type: 'SET_OVER_LOCATION_NAME',
        locationName
    }
}

const showToolTip = (showToolTip) => {
    return {
        type: 'SHOW_TOOLTIP',
        showToolTip
    }
}

const setTab = (nextTab) => {
    return {
        type: 'SET_TAB',
        nextTab
    }
}


export {
    selectLocation,
    overLocation,
    showToolTip,
    setTab
}