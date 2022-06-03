import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './container/Home/Home';
import About from './container/Home/About';
import Contact from './container/Home/Contact';
import Doctors from './container/Home/Doctors';
import Depatment from './container/Home/Depatment';
import apponnment from './container/Home/apponnment';

function App() {
  return (
    <>
    <Header/>
    <switch>
      <Route exact path={"/"} component={Home}/>
      <Route exact path={"/about"} component={About}/>
      <Route exact path={"/contact"} component={Contact}/>
      <Route exact path={"/doctor"} component={Doctors}/>
      <Route exact path={"/depatment"} component={Depatment}/>
      <Route exact path={"/apponmemt"} component={apponnment}/>
    </switch>
    </>
  );
}

export default App;
