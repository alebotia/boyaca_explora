import React from 'react';
import boyaca from "../images/boyaca"
import { RadioSVGMap } from "react-svg-map";
import "../css/map.css";
import { Container } from "reactstrap";

class Map extends React.Component {
	constructor(props){
		super(props);			
	}
    render() {
        return (
        <Container className="align-items-center">
            <RadioSVGMap 
            	map={boyaca} 
            	onLocationMouseOver={this.props.handleLocationMouseOver}
            	onLocationMouseOut={this.props.handleLocationMouseOut}
            	onLocationMouseMove={this.props.handleLocationMouseMove}
            	onChange={this.props.handleOnChange}/>
            		<div className="toolTip" 
            		style={this.props.showToolTip}>            		
						{this.props.overLocationName}
					</div>
        </Container>
        );
    }
}

export default Map;