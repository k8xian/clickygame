import React from "react";
import styled from 'styled-components';

const StyledGame = styled.div`
display: flex;
flex-flow: row wrap;
max-width: 980px;
width: 80%;
margin: auto;
justify-content: center;
`

const Game = props =><StyledGame>{props.children}</StyledGame>

export default Game;