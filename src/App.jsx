import HomePage from "./home_page/HomePage.jsx";
import Card from "./card/Card.jsx";
import Button from "./button/Button.jsx";
import PCard from "./pcard/PCards.jsx";
import UserGreeting from "./user_greeting/UserGreeting.jsx";
import Lists from "./lists/Lists.jsx";
import MyComponent from "./my_component/MyComponent.jsx";
import Counter from "./counter/Counter.jsx";
import OnChg from "./on_chg/OnChg.jsx";
import "./App.css";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="ben" />
      <UserGreeting />
      <HomePage />
      <Button />
      <br />
      <Card />
      <Card />
      <br />
      <PCard name="Cillian Murphy" age={48} isActiveInCareer={true} />
      <PCard name="Audrey Hepburn" age="63" isActiveInCareer={false} />
      <PCard />
      <hr />
      <Lists />
      <Button />
      <br />
      <hr />
      <br />
      <MyComponent /> 
      <br />
      <br />
      <hr />
      <br />
      <Counter /> 
      <br />
      <br />
      <hr />
      <br />
      <OnChg/>
    </>
  );
}

export default App;
