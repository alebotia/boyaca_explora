import React from 'react';
import ReactDOM from 'react-dom'
import MapActivity from './components/MapActivity'
import Header from './components/Header'
import MunicipalityActivity from './components/MunicipalityActivity'
import Footer from './components/Footer'

class App extends React.Component {
	
    render() {
        return (
        	<>
        	<Header />
            <MapActivity />
            <MunicipalityActivity />
            <Footer />
            </>
        );
    }
}

export default App;