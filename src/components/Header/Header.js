
import React from "react";
import styled from 'styled-components';

const StyledHeader = styled.nav`
text-align: center;
margin: auto;
h1 {
    font-size: 4em;
    margin-bottom: 20px;
}
`


const Header = props => 
    (
        <StyledHeader>
            <h1>Memory Game</h1>
                <ul>
                    <li className={props.message.indexOf("incorrectly") !== -1 ?
                        "desc-incorrect" :
                        "desc-normal"}
                    >
                        {props.message}
                    </li>
                    <li>
                        Score: <span>{props.curScore}</span> | Top Score: {props.topScore}
                    </li>
                </ul>
        </StyledHeader>
    );

export default Header;