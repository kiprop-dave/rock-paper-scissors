import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RulesNodal from './components/rulesNodal';
import Header from './components/header';
import GameChoices from './components/gameChoices';
import Results from './components/results';
import useSyncState from './hooks/useSyncState';
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
    bottom: 5rem;
  }
`

function App() {
  const [showRules, setShowRules] = useState(true);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [playerChoice, setPlayerChoice] = useState({});
  const [houseChoice, setHouseChoice] = useState({});
  const SyncHouseChoice = useSyncState({});
  // const [results, setResults] = useState({
  //   score: JSON.parse(localStorage.getItem('score')) || 0,
  //   win: false,
  //   draw: false
  // });

  const getLocalStorage = () => {
    return {
      score: JSON.parse(localStorage.getItem('score')) || 0,
      win: false,
      draw: false
    }
  }
  const [results, setResults] = useState(() => getLocalStorage())

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(results.score));
  }, [results])


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
      name: 'scissors',
      icon: '/icon-scissors.svg',
      background: scissorsGradient
    }
  ]

  function housePlays() {
    let randomNumber = Math.ceil(Math.random() * 2);
    const choice = gameOptions[randomNumber];
    const newChoice = SyncHouseChoice.setState(choice);
    return newChoice;
  }


  const closeRulesNodal = () => setShowRules(false);
  const openRulesNodal = () => setShowRules(true);


  function userPlays(choice) {
    setHasPlayed(true);
    const currentHousePick = housePlays();
    const { name: userChoice } = choice;
    const { name: browserChoice } = currentHousePick;

    const userWins = userChoice === 'paper' && browserChoice === 'rock' || userChoice === 'rock' && browserChoice === 'scissors' ||
      userChoice === 'scissors' && browserChoice === 'paper' // check if the user has won 

    const draw = userChoice === browserChoice;

    if (draw) {
      setResults(prev => ({
        ...prev,
        draw: true
      }))
    }

    if (userWins) {
      setResults(prev => ({
        ...prev,
        score: prev.score + 1,
        win: true
      }))
    }

    if (!userWins && !draw) {
      setResults(prev => ({
        ...prev,
        score: prev.score - 1
      }))
    }

    setPlayerChoice(choice);
    setHouseChoice(currentHousePick);
  }

  function playAgain() {
    setHasPlayed(false);
    setPlayerChoice({});
    setHouseChoice({});
    setResults(prev => ({
      ...prev,
      win: false,
      draw: false
    }))
  }


  return (
    <>
      <Page>
        <Container>
          <Header results={results} />
          {
            !hasPlayed ?
              <GameChoices gameOptions={gameOptions} play={userPlays} /> :
              <Results playerChoice={playerChoice} houseChoice={houseChoice} playAgain={playAgain} results={results} />
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
