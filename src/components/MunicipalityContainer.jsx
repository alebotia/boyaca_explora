import React from 'react';
import MunicipalityGeneralInfo from './MunicipalityGeneralInfo'
// reactstrap components
import {
    Card,
    CardBody,
    Nav,
    TabContent,
    TabPane,
    Row,
    Col,
    Container,    
    CardDeck

} from "reactstrap";
import ListItem from './ListItem'
import MunicipalityTabs from './MunicipalityTabs'
import { TouristicCards, HotelsCards } from './MunicipalityConditionalRendering'

class MunicipalityContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
          <>
    <Container className="align-items-center">
   <Row className="justify-content-center">
   <Col className="mt-3 mt-md-0">
            {/* Menu */}
            <div className="mb-0">
              <p className="text-uppercase font-weight-bold">
               <a href={this.props.selectLocation.currentMunicipality.wiki_page} target="_blank" rel="noopener noreferrer"> {this.props.selectLocation.currentMunicipality.name} </a>
              </p>
            </div>
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
              <MunicipalityTabs 
                  currentTab={this.props.currentTab}
                  navIndex="1"
                  text="Actividades y sitios turísticos"
                  onClick={e => this.props.setTab(e, 1)}
              />
              <MunicipalityTabs 
                  currentTab={this.props.currentTab}
                  navIndex="2"
                  text="Hoteles"
                  onClick={e => this.props.setTab(e, 2)}
              />
              <MunicipalityTabs 
                  currentTab={this.props.currentTab}
                  navIndex="3"
                  text="Gastronomía"
                  onClick={e => this.props.setTab(e, 3)}
              />
              <MunicipalityTabs 
                  currentTab={this.props.currentTab}
                  navIndex="4"
                  text="Informacion adicional"
                  onClick={e => this.props.setTab(e, 4)}
              />
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.props.currentTab}>
                  <TabPane tabId="plainTabs1">
                      <CardDeck>
                        <Row>
                          <TouristicCards Municipality={this.props.selectLocation.currentMunicipality}/>
                        </Row>                        
                    </CardDeck>
                  </TabPane>
                  <TabPane tabId="plainTabs2">
                    <CardDeck>
                      <Row>
                        <HotelsCards Municipality={this.props.selectLocation.currentMunicipality} />
                      </Row>                        
                    </CardDeck>
                  </TabPane>
                  <TabPane tabId="plainTabs3">
                   <p className="h4">Gastronomía: </p>
                   {this.props.selectLocation.currentMunicipality.gastronomy.map((item, index) =>                    
                     <ListItem 
                     key={index}
                     text={item}
                      />
                    )}    
                  </TabPane>
                  <TabPane tabId="plainTabs4">
                   <MunicipalityGeneralInfo 
                      {...this.props.selectLocation.currentMunicipality}
                    />
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
   </Row>
   </Container> <
            />

        );
    }
};
export default MunicipalityContainer;