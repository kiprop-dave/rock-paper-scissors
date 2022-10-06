import React from 'react';
import styled from 'styled-components';
import { scoreText, headerOutline, darkText } from '../utils/colours';

const Container = styled.div`
    width: 100%;
    height: 8.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2% 2% 2% 2%;
    border: solid 3px ${headerOutline};
    margin-top: 2rem;
    border-radius: 20px;

    @media screen and (max-width: 600px){
        height: 6rem;
    }
`
const Logo = styled.img`
    height: 100%;
`
const Score = styled.div`
    width: 20%;
    height: 100%;
    background-color: #f2e9e9;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 1% 0 1% 0;

    @media screen and (max-width: 600px){
        width: 30%;
    }
`
const ScoreTitle = styled.h2`
    color: ${scoreText};
    font-weight: 600;
    letter-spacing: 2px;
`
const GameScore = styled.h1`
    color: ${darkText};
    font-size: 80px;
    line-height: 50px;
    letter-spacing: 2.5px;

    @media screen and (max-width: 600px){
        font-size: 50px;
        line-height: 30px;
    }
`

function Header({ results }) {

    const { score } = results;

    const formatScore = () => {
        if (score < 0) {
            return score
        } else if (score < 10) {
            return `0${score}`;
        } else {
            return score;
        }
    }

    return (
        <>
            <Container>
                <Logo src='/logo.svg' alt='game logo' />
                <Score>
                    <ScoreTitle>SCORE</ScoreTitle>
                    <GameScore>{formatScore()}</GameScore>
                </Score>
            </Container>
        </>
    )
}

export default Header