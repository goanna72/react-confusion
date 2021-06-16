import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);   
    } 
   
    renderDish(dishDetails){
        return(
                 <div  className="col-12 col-md-5 m-1" key={dishDetails.id}>
                    <Card>
                        <CardImg top width="100%" src={dishDetails.image} alt={dishDetails.name} />
                            <CardBody>
                                <CardTitle>{dishDetails.name}</CardTitle>
                                <CardText>{dishDetails.description}</CardText>
                            </CardBody>
                    </Card>
                </div>
               
        );
    }

    renderComments(dishComments){
        if (dishComments) {
            return (
                
                <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    
                        {dishComments.map((value, index) => {  
                            
                            return (
                                <ul className="list-unstyled" key={value.id}>
                                    <li>{value.comment}</li>
                                    <li> -- {value.author} {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(value.date)))}</li>
                                </ul>
                            )
                        })} 
                </div>
                
            );
        }
        return (
            <div></div>
        );
    }

    render() {

        if (this.props.dish)
            return(
                <div class="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}  
                    {this.renderComments(this.props.dish.comments)} 
                </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

   
}

export default DishDetail;