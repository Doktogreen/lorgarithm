import React from 'react'
import { CardDeck } from 'react-bootstrap'
import TalentCard from './talentCard'

const TalentsList = ({Talents}) => {
    return (
        <CardDeck>
           {Talents.map(el=> <TalentCard talent={el}></TalentCard>)}
        </CardDeck>
    )
}

export default TalentsList
