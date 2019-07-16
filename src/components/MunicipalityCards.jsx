import React from 'react';
import { Card, CardHeader, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

  import { firstLetterUpper } from '../utilities/data'

const MunicipalityAtractionsCard = (props) => {
  return (    
     <Card className="text-center text-justify">
        <CardHeader className="bg-primary text-white mb-sm-3 mb-md-0">{firstLetterUpper(props.header)}</CardHeader>        
        <CardBody>
          <CardTitle>{firstLetterUpper(props.title)}</CardTitle>
          <CardSubtitle>{firstLetterUpper(props.topic)}</CardSubtitle>
          <CardText>{firstLetterUpper(props.subTopic)}</CardText>        
        </CardBody>      
      </Card>
  );
};
export default MunicipalityAtractionsCard;
