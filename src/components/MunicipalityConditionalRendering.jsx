import React from 'react';
import MunicipalityCards from './MunicipalityCards'
import {    
    Col,
    Alert
} from "reactstrap";
 export const TouristicCards = (props) => {        
            if (typeof(props.Municipality.tourist_attraction) === "undefined" || props.Municipality.tourist_attraction.length === 0) {
                return (
                  <Col sm="12">
                    <Alert color="primary">
                      No contamos con informacion turistica para este sitio !!
                    </Alert>
                  </Col>
                )
            }else {
                return props.Municipality.tourist_attraction.map((atraction, index) =>{
                      return(
                        <Col sm="4" key={index}>
                          <MunicipalityCards 
                            key={index}
                            header={atraction.name}
                            title={atraction.patrimonial_group}
                            topic={atraction.another_names}
                            subTopic={atraction.comments}
                          />
                        </Col>
                      )
                    })       
            }
        }

  export const HotelsCards = (props) => {
            if (typeof(props.Municipality.hotels) === "undefined" || props.Municipality.hotels.length === 0) {
                return (
                  <Col sm="12">
                    <Alert color="primary">
                      No contamos con informacion hotelera para este sitio !!
                    </Alert>
                  </Col>
                )
            }else {
                return props.Municipality.hotels.map((hotels, index) =>{
                      return(
                        <Col sm="4" key={index}>
                        <MunicipalityCards 
                          key={index}
                          header={hotels.hotel_name}
                          title={hotels.owner}
                          topic={hotels.mail}
                          subTopic={hotels.phone_number + " - " + hotels.address}
                        />
                        </Col>
                      )
                    })       
            }
        }