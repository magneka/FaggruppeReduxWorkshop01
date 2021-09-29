import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';

import { CustomersListContainerState } from './pages/customerslist/CustomersListContainerState';
import { CustomersListContainer } from "./pages/customerslist/CustomerListContainer";
import { CounterContainer } from "./pages/counter/CounterContainer";
import { CustomerEditContainer } from "./pages/customerEdit/CustomerEditContainer";
import { ProductsListContainer } from "./pages/productList/ProductsListContainer";

//import { CustomerDetails } from "./pages/customerdetails/CustomerDetailsComponent";
//import { CustomerDetailsR } from "./pages/customerDetails2/CustomerDetailsComponentR"


function App() {
  return (
    <Router>
      <div>
        <div style={{backgroundColor: "lightGray"}}>
          <span><Link to="/counter">counter</Link></span>
          <span><Link to="/CustomerListState">Customers (state)</Link></span>
          <span><Link to="/CustomerListRedux">Customers (Redux)</Link></span>
          <span><Link to="/ProductList">Products</Link></span>

          <span><Link to="/">Home</Link></span>
        </div>
        <div>
          <Switch>
            <Route path="/CustomerListRedux" component={CustomersListContainer} />
            <Route path="/ProductList" component={ProductsListContainer} />
            <Route path="/CustomerListState" component={CustomersListContainerState} />
            <Route path="/counter" component={CounterContainer} />
            <Route path="/customerEdit/:customerId" render={(props) => <CustomerEditContainer {...props.match.params} />} />

            {/* 
            <Route path="/customerdetails/:customerId" render={(props) => <CustomerDetails {...props.match.params} />} />
            <Route path="/customerdetailsR/:customerId" render={(props) => <CustomerDetailsR {...props.match.params} />} />
             */}
            <Route path="/"><CustomersListContainerState /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
