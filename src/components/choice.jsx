import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: ${({ top }) => top ? top : 'auto'};
    left: ${({ left }) => left ? left : 'auto'};
    right: ${({ right }) => right ? right : 'auto'};
    bottom: ${({ bottom }) => bottom ? bottom : 'auto'};
    bottom: 0;
    width: ${({ width }) => width ? `${width}rem` : '10rem'};
    height: ${({ width }) => width ? `${width}rem` : '10rem'};
    border-radius: 50%;
    background-color: ${({ background }) => background.to};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${({ background }) => `0px 7px 0px ${background.from}`};

    @media screen and (max-width: 600px){
        width: 10rem;
        height: 10rem;
    
    }
`
const InnerContainer = styled.div`
    width: ${({ width }) => width ? `${width}rem` : '7rem'};
    height: ${({ width }) => width ? `${width}rem` : '7rem'};
    border-radius: 50%;
    background-color: white;
    box-shadow: inset 0px 7px lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({ clickable }) => clickable ? 'pointer' : 'auto'};

    @media screen and (max-width: 600px){
        width: 7rem;
        height: 7rem;
    }
`
const Icon = styled.img`
    width: ${({ width }) => width ? `${width}rem` : '3rem'};
    height: ${({ width }) => width ? `${width}rem` : '3rem'};

    @media screen and (max-width: 600px){
        width: 3rem;
        height: 3rem;
    }
`

function Choice({ top, left, right, bottom, choice, clickable, action, width }) {
    const { background, icon } = choice;
    const innerWidth = width - 4;
    const iconWidth = innerWidth - 5;

    return (
        <>
            <Container top={top} left={left} right={right} bottom={bottom} background={background} width={width && width}>
                <InnerContainer clickable={clickable} onClick={() => action && action(choice)} width={width && innerWidth}>
                    <Icon src={icon} alt='choice' width={width && iconWidth} />
                </InnerContainer>
            </Container>
        </>
    )
}

export default Choice