import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

   
   function RenderDish({dishDetails}) {
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

    function RenderComments({dishComments}){
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

    const DishDetail = (props) => {

        if (props.dish)
            return(
                <div class="container">
                     <div className="row">
                    <Breadcrumb> 
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dishDetails={props.dish}  />
                    <RenderComments dishComments={props.comments} />
                </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

   


export default DishDetail;