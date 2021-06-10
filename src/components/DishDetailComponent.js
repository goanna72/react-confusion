import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);   
    } 

    render() {
        if (this.props != null)
            return(
                <Card>
                    <CardImg top src={this.props.dishArray.image} alt={this.props.dishArray.name} />
                    <CardBody>
                        <CardTitle>{this.props.dishArray.name}</CardTitle>
                        <CardText>{this.props.dishArray.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

   
}

export default DishDetail;