import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RulesNodal from './components/rulesNodal';
import Header from './components/header';
import GameChoices from './components/gameChoices';
import Results from './components/results';
import { radialGradient, scissorsGradient, paperGradient, rockGradient } from './utils/colours';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(circle, ${radialGradient.from} 30%, ${radialGradient.to});
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
const Container = styled.div`
  width: 55%;
  height: 100%;

  @media screen and (max-width: 600px){
    width: 90%;
  }
`
const RulesButton = styled.button`
  padding: 10px 20px 10px 20px;
  height: 2.5rem;
  border: solid 1px white;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  color: white;
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 20px;
  letter-spacing: 2px;
  cursor: pointer;

  @media screen and (max-width: 600px){
    right: 38%;
  }
`

function App() {
  const [showRules, setShowRules] = useState(true);
  const [score, setScore] = useState(0);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [playerChoice, setPlayerChoice] = useState({});
  const [houseChoice, setHouseChoice] = useState({});
  const [userWins, setUserWins] = useState(false);

  const gameOptions = [
    {
      name: 'rock',
      icon: '/icon-rock.svg',
      background: rockGradient
    },
    {
      name: 'paper',
      icon: '/icon-paper.svg',
      background: paperGradient
    },
    {
      name: 'scissor',
      icon: '/icon-scissors.svg',
      background: scissorsGradient
    }
  ]

  // useEffect(() => {
  //   console.log('player choice', playerChoice)
  //   console.log('house choice', houseChoice);
  // }, [playerChoice])


  function housePlays() {
    let randomNumber = Math.ceil(Math.random() * 3);
    const choice = gameOptions[randomNumber];
    setHouseChoice(choice);
  }


  const closeRulesNodal = () => setShowRules(false);
  const openRulesNodal = () => setShowRules(true);


  function userPlays(choice) {
    // setTimeout(housePlays, 1000)
    setHasPlayed(true);
    setPlayerChoice(choice);
    housePlays();
  }

  function playAgain() {
    setHasPlayed(false);
    setPlayerChoice({});
    setHouseChoice({});
  }


  return (
    <>
      <Page>
        <Container>
          <Header score={score} />
          {
            !hasPlayed ?
              <GameChoices gameOptions={gameOptions} play={userPlays} /> :
              <Results playerChoice={playerChoice} houseChoice={houseChoice} playAgain={playAgain} />
          }
          {/* <GameChoices gameOptions={gameOptions} play={userPlays} /> */}
        </Container>
        <RulesButton onClick={() => openRulesNodal()}>RULES</RulesButton>
      </Page>
      {
        showRules && <RulesNodal closeNodal={closeRulesNodal} />
      }
    </>
  )
}

export default App
