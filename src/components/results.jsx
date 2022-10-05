import React from 'react';
import styled from 'styled-components';
import Choice from './choice';
import { radialGradient } from '../utils/colours';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: solid 1px yellow; */

    @media screen and (max-width: 600px){
        height: 55%;
    }
`
const Pick = styled.div`
    width: 20vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    /* border: solid 1px yellow; */

    @media screen and (max-width: 600px){
        width: 50%;
    }
`
const Header = styled.h2`
    color: white;
    letter-spacing: 2px;
    text-align: center;

    @media screen and (max-width: 600px){
        position: absolute;
        bottom: 7rem;
    }
`
const ChoiceContainer = styled.div`
    position: relative;
    /* border: solid 1px yellow; */
    width: 16.5rem;
    height: 16.5rem;
    @media screen and (max-width: 600px){
        width: 10.5rem;
        height: 10.5rem;
    
    }
`
const Winner = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* border: solid 1px yellow; */

    @media screen and (max-width: 600px){
        position: absolute;
        bottom: 0;
        height: 25%;
    }
`
const Title = styled.h1`
    color: white;
    letter-spacing: 2px;
`
const PlayAgain = styled.button`
    color: black;
    padding: 3px 5px 3px 5px;
    border-radius: 5px;
    background-color: white;
    font-size: 20px;
    letter-spacing: 2px;
    border: none;
    cursor: pointer;
`
const Waiting = styled.div`
    width: 12rem;
    height: 12rem;
    background-color: ${radialGradient.to};
    border-radius: 50%;
    /* margin-bottom: 2rem; */
`

function Results({ playerChoice, houseChoice, playAgain }) {
    // console.log('houseCoice', houseChoice);

    const housePlayed = houseChoice === undefined ? false : true

    return (
        <>
            <Container>
                <Pick>
                    <Header>YOU PICKED</Header>
                    <ChoiceContainer>
                        <Choice bottom={'0'} choice={playerChoice} width={16} />

                    </ChoiceContainer>
                </Pick>
                <Winner>
                    <Title>YOU WIN</Title>
                    <PlayAgain onClick={() => playAgain()}>PLAY AGAIN</PlayAgain>
                </Winner>
                <Pick>
                    <Header>THE HOUSE PICKED</Header>
                    <ChoiceContainer>
                        {
                            housePlayed ?
                                <Choice bottom={'0'} choice={houseChoice} width={16} /> :
                                <Waiting />
                        }
                    </ChoiceContainer>
                </Pick>
            </Container>
        </>
    )
}

export default Results