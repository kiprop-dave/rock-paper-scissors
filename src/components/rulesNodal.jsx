import React from 'react';
import styled from 'styled-components';
import { radialGradient } from '../utils/colours';

const Page = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(36, 35, 35, 0.4) ;
    text-align: center;

    @media screen and (max-width: 600px){
        background: #f2e9e9;
        
    }
`
const Container = styled.div`
    width: 30%;
    height: 60%;
    border-radius: 10px;
    padding: 1% 2% 1% 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f2e9e9;

    @media screen and (max-width: 600px){
        width: 90%;
        height: 50%;
        align-items: center;
    }
`
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.h1`
    color: ${radialGradient.from};

    @media screen and (max-width: 600px){
        position: fixed;
        top: 5rem;
        left: 50%;
        transform: translateX(-50%);
    }
`
const CloseIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;

    @media screen and (max-width: 600px){
        position: fixed;
        bottom: 5rem;
        left: 50%;
        transform: translateX(-50%);
    }
`
const RulesImage = styled.img`
    width: 100%;
    height: 85%;

    @media screen and (max-width: 600px){
        height: 75%;
        margin-bottom: 3rem;
    }
`

function RulesNodal({ closeNodal }) {

    return (
        <>
            <Page>
                <Container>
                    <Header>
                        <Title>RULES</Title>
                        <CloseIcon src='/icon-close.svg' alt='close nodal' onClick={() => closeNodal()} />
                    </Header>
                    <RulesImage src='/image-rules.svg' alt='game rules' />
                </Container>
            </Page>
        </>
    )
}

export default RulesNodal