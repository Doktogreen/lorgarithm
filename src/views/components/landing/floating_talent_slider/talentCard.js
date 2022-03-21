import React from 'react'
import {Card,CardDeck} from 'react-bootstrap';
import ReactStars from 'react-stars'

const TalentCard = ({talent}) => {
    return (
        
  <Card>
    <Card.Img variant="top" src={talent.PosterURL} />
    <Card.Body>
      <Card.Title>{talent.title}</Card.Title>
      <Card.Text>
        {talent.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <ReactStars value={talent.rating} edit={false}></ReactStars>
    </Card.Footer>
  </Card>
  
 

    )
}

export default TalentCard
