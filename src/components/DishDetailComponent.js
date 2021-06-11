import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);   
    } 

    renderDish(dishA){
        return(
                 <div  className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top width="100%" src={dishA.image} alt={dishA.name} />
                            <CardBody>
                                <CardTitle>{dishA.name}</CardTitle>
                                <CardText>{dishA.description}</CardText>
                            </CardBody>
                    </Card>
                </div>
               
        );
    }

    renderComments(dishA){
        return (
            <div  className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {/*   {dishA.map((value, index) => {  
                {                    {dishA.map(function(value, index) { */}
                    {dishA.map((value, index) => {  
                        return (
                            <ul className="list-unstyled" key={value.id}>
                                <li>{value.comment}</li>
                                <li> -- {value.author} </li>
                            </ul>
                        )
                    })} 
            </div>
        );
    }

    render() {
        if (this.props != null)
            return(
                <div className="row">
                    {this.renderDish(this.props.dishArray)}
                    {this.renderComments(this.props.dishArray.comments)}
                </div>
            );
        else
            return(
                <div></div>
            );
    }

   
}

export default DishDetail;