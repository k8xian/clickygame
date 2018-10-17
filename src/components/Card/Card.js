
import React from "react";
import styled from 'styled-components';

const StyledCard = styled.div`
margin: 24px 0;
cursor: pointer;
`

const Card = props => (
    <StyledCard>
        <div onClick={() => props.selectPlanet(props.name)}>
            <img alt={props.name} src={props.image} />
        </div>
    </StyledCard>
);

export default Card;