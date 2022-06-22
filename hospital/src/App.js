import './App.css';
import { Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './container/Home/Home';
import About from './container/Home/About';
import Contact from './container/Home/Contact';
import Doctors from './container/Home/Doctors';
import Depatment from './container/Home/Depatment';
import Apponnment from './container/Appoinment/Apponnment';
import Publicroute from './container/Route/PublicRoute';
import Privateroute from './container/Route/PrivetRoute';
import Login from './container/Login/Login';

function App() {
  return (
    <>
    <Header/>
    <switch>
      <Publicroute exact path={"/"} component={Home}/>
      <Publicroute exact path={"/about"} component={About}/>
      <Publicroute exact path={"/contact"} component={Contact}/>
      <Publicroute exact path={"/doctor"} component={Doctors}/>
      <Publicroute exact path={"/depatment"} component={Depatment}/>
      <Privateroute exact path={"/apponmemt"} component={Apponnment}/>
      <Publicroute restricted={true} exact path={"/login"} component={Login}/>
      {/* <Publicroute  exact path={"/form"} component={Form}/> */}
    </switch>
    </>
  );
}

export default App;
