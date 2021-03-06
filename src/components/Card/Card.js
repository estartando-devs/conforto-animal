import React from 'react'
import { CardContainer, Title, About, PetImg, Description, Topic, } from './CardStyle'
import Button from '../Button/Button'
import paw from '../../assets/images/paw.png'

const Card = (props)=>{
//console.log(props.action)
    return (
        <CardContainer>
            <PetImg src={props.imgSrc}/>
            <About >
                <Title>
                    {props.title}
                </Title>
                <Description>
                    <Topic className="caracter"><PetImg className="icon" src={paw}/>{props.sexo}</Topic>
                    <Topic className="caracter"><PetImg className="icon" src={paw}/>{props.age}</Topic>
                </Description>
                <Button value={props.value} action={props.action} disabled={props.disabled} />
            </About>
        </CardContainer>
    )
}

export default Card