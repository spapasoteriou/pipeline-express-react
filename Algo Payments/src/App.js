import React, {Component} from 'react'
import { AlgoButton, AlgoSendButton, Pipeline} from 'pipeline-express-react'
import './index.css'
import logo from './pipeline-express.jpg'

const myAlgoWallet = Pipeline.init();
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      main: true,
      myAddress: "",
      recipient: "PAPA23PAWOROGLHBAL3DNHEFI76JNIET4N32OOJLJGQRKR4PMD4EE5M7PQ",
      amount: 0,
      note: "",
      txID: ""
    }
  }

  inputRecipient = (event) => {
    this.setState({ recipient: event.target.value });
  }

  inputAmount = (event) => {
    this.setState({amount: event.target.value});
  }

  inputNote = (event) => {
    this.setState({note: event.target.value});
  }

  handleCheckChange = () => {
  this.setState({main: ! this.state.main}, () => Pipeline.main = this.state.main)

  }


  render() {
    return <div align="center" class="card">    
    <img alt="Pipeline Express" src={logo} width="300"></img><br></br>
    <h1>
    ALGO Payment App 
  </h1>
    <div class="toggle-select">
    <h5>
    MainNet:
  </h5>
  <input
      className="form-check-input"
      name="mainnet" 
      type="checkbox"
      checked={this.state.main}
      onChange={this.handleCheckChange} />
  </div>            
      <AlgoButton wallet={myAlgoWallet} context={this} returnTo={"myAddress"} />
      <h3>{"My Address: " + this.state.myAddress}</h3>
      <form >
        <label class= "form-label">
         <h3>Recipient: PAPA23.....5M7PQ</h3>          
        </label><br></br>
        <label class="form-label">
          Amount:
          <input type="number" class="form-control" onChange={this.inputAmount} />
        </label>
        <label class="form-label"><br></br>
          Note:
          <input type="text" class="form-control" onChange={this.inputNote} />
        </label>
      </form>
      <AlgoSendButton
      index={0} //If ASA, must be a numeric index value !== 0
      recipient={this.state.recipient} //string value
      amount={this.state.amount*1000000} //integer value in micro Algos
      note={this.state.note} //string value
      myAddress={this.state.myAddress} //string value
      wallet={myAlgoWallet} //reference to an instance of Pipeline.init(); that is called once when the app is initialized
      context={this}
      returnTo={"txID"}// string value of state key to return the transaction id
      />
      <h3>{"Transaction ID: " + this.state.txID}</h3>
</div>
  }
}

export default App;
