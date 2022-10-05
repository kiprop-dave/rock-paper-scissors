import React from 'react';
import styled from 'styled-components';
import Choice from './choice';

const Container = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const TriangleContainer = styled.div`
    width: 50%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 600px){
        width: 90%;
    }
`
const TriangleImage = styled.img`
    width: 90%;
    height: 80%;
`


function GameChoices({ gameOptions, play }) {

    return (
        <>
            <Container>
                <TriangleContainer>
                    <TriangleImage src='/bg-triangle.svg' alt='background' />
                    <Choice top={'0'} left={'0'} choice={gameOptions[1]} clickable={true} action={play} />
                    <Choice top={'0'} right={'0'} choice={gameOptions[2]} clickable={true} action={play} />
                    <Choice bottom={'0'} choice={gameOptions[0]} clickable={true} action={play} />
                </TriangleContainer>
            </Container>
        </>
    )
}

export default GameChoices