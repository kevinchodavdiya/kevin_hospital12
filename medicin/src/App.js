import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Doctor from './container/doctor/Doctor';
import Medicine from './container/Medicine/Medicine';

function App() {
  return (
    <>
     

    <Layout>
      <Switch>
        <Route exact path={"/medicine"} component={Medicine} />
        <Route exact path={"/doctor"} component={Doctor}/>
      </Switch>
    </Layout>

    
    </>
  );
}

export default App;