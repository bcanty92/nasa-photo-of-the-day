import React from 'react'
//import './tiles.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardFooter, CardHeader
  } from 'reactstrap';

// function that passes in the data from background as props
function Tiles(props){
//grabing the data from the api and categorizing them into their jsx tags to show up on the page.

    return(
        <div>
            <Card >
                
                    <CardHeader tag="h3" >{props.tile.title}</CardHeader>
                    
                
                <CardBody>
                <CardSubtitle>Date: {props.tile.date} </CardSubtitle><br></br>
                    <CardImg top style={{width: '25%' }} src={props.tile.url} alt ="Astronomy Pic of the Day"/>
                </CardBody>
                <CardBody>
                    <CardText style={{fontSiize: 1.5 + 'rem', color: 'blue', margin: '0 20% 0' }}>{props.tile.explanation}</CardText>
                </CardBody>
                <CardFooter>&copy; {props.tile.copyright}</CardFooter>
            </Card>
        </div>




        //<div>
        //     <h2>{props.tile.title}</h2>
        //     <span>&copy; {props.tile.copyright}</span>
        //             <p>Date: {props.tile.date}</p>
            
        //         <img src={props.tile.url} alt ="Astronomy Pic of the Day"/>
            
            
        //             <p style={{fontSiize: 1.5 + 'rem'}}>{props.tile.explanation}</p>
            
        // </div>
    );
}
//exporting the function to be able to use the data in the background component.
export default Tiles; 