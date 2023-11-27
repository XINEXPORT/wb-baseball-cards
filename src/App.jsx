import playerData from './playerData.js'
import { useState } from 'react';



function BaseballCard(props) {
  
  const [showPicture, setShowPicture] = useState(true);
  let {name, team, position, stats, imgUrl, cardId} = props

  function toggleCard(){
    setShowPicture(!showPicture);
  }

if (showPicture) {
  return (
    <div className="card" onClick={toggleCard}>
      <h2>{props.name}</h2>
      <img src = {props.imgUrl}></img>
    </div>
  );} else{

  const statsDisplay = [];
  for (let stat in stats){
    statsDisplay.push(<p>{stat}: {stats[stat]}</p>)
  }
  return(
    <div className="card" onClick={toggleCard}>
      <h2>{props.name}</h2>
      <p>{props.team}</p>
      <p>{props.position}</p>
      {statsDisplay}
    </div>
  )
}}

function App() {
  const cards = playerData.map(({name, team, position, stats, imgUrl, cardId})=>
  < BaseballCard
  name = {name}
  team = {team}
  position = {position}
  stats = {stats}
  imgUrl = {imgUrl}
  cardId = {cardId}
  key={cardId}
  />);
  return <>{cards}</>;
}

export default App;
