import React, { Component } from 'react';
import ListItem from './ListItem'

import {
    Row,
    Col,
    ListGroupItem
} from "reactstrap";

class MunicipalityGeneralInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {    
          return (
            <Row> 
                  <Col className="mt-3 mt-md-0">
                   <p className="h4">Sitios de interes: </p>
                   {this.props.other_attraction.map((attraction, index) =>                    
                     <ListItem 
                     key={index}
                     text={attraction}
                      />
                    )}               
                    </Col>
                    <Col className="mt-3 mt-md-0">
                   <p className="h4">Informacion general: </p>
                  
                   <ListItem 
                      displayTitle="Acerca del nombre: "
                      text={this.props.name_details}
                   />
                   <ListItem 
                      displayTitle="Altitud: "
                      text={this.props.MASL}
                      notation=" m. s. n. m."
                   />
                   <ListItem 
                      displayTitle="Fundacion: "
                      text={this.props.foundation}
                   />
                   <ListItem 
                      displayTitle="Codigo Postal: "
                      text={this.props.ZIP_code}
                   />
                   <ListItem 
                      displayTitle="Area: "
                      text={this.props.area}
                      notation=" Km2"
                   />
                   <ListItem 
                      displayTitle="Provincia: "
                      text={this.props.province}
                   />
                   <ListGroupItem>
                   Wikipedia: 
                   <a href={this.props.wiki_page} target="_blank" rel="noopener noreferrer"> {this.props.name} </a>
                     
                   </ListGroupItem>                              
                    </Col>                    
                  </Row>
        );        
    }
}
export default MunicipalityGeneralInfo;