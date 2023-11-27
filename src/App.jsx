import playerData from './playerData.js'



function BaseballCard(props) {
  let {name, team, position, stats, imgUrl, cardId} = props
  console.log(props);
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src = {props.imgUrl}></img>
    </div>
  );
}

function App() {
  const cards = playerData.map(({name, team, position, stats, imgUrl, cardId})=>
  < BaseballCard
  name = {name}
  team = {team}
  position = {position}
  stats = {stats}
  imgUrl = {imgUrl}
  cardId = {cardId}
  banana="hi"/>);
  return <>{cards}</>;
}

export default App;
