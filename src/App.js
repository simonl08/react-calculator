import './App.css';
import React from "react" ;  
import {evaluate} from "mathjs";


class App extends React.Component {
  state = {
    total: "0",
  };

  handleButton = (value)  => {
    if (value == "C") {
      this.setState({total: ""});
    } else if (value == "=") {
      this.setState({ total: evaluate(this.state.total)});
    } else {
      this.setState({total: this.state.total + value});
    }
  };

  render() {
    return (
      <div>
        <div className="calculator">
          <h1 className="calcDisplay">{this.state.total}</h1>
            <div className="fourth">
              <Keys handleButton={this.handleButton} value={"7"}/>  
              <Keys handleButton={this.handleButton} value={"8"}/>  
              <Keys handleButton={this.handleButton} value={"9"}/>  
              <Keys handleButton={this.handleButton} value={"C"}/>  
            </div>
            <div className="third">
              <Keys handleButton={this.handleButton} value={"4"}/>   
              <Keys handleButton={this.handleButton} value={"5"}/>   
              <Keys handleButton={this.handleButton} value={"6"}/>   
              <Keys handleButton={this.handleButton} value={"*"}/>   
            </div>
            <div className="second">
              <Keys handleButton={this.handleButton} value={"1"}/>   
              <Keys handleButton={this.handleButton} value={"2"}/>   
              <Keys handleButton={this.handleButton} value={"3"}/>   
              <Keys handleButton={this.handleButton} value={"-"}/> 
            </div>
            <div className="first">
              <Keys handleButton={this.handleButton} value={"/"}/> 
              <Keys handleButton={this.handleButton} value={"0"}/> 
              <Keys handleButton={this.handleButton} value={"+"}/> 
              <Keys handleButton={this.handleButton} value={"."}/>
              <Keys handleButton={this.handleButton} value={"="}/>
            </div>            
        </div>
      </div>
    );
  }
}

const Keys = ({handleButton, value}) => {
  return (
    <button className="calcButtons" onClick={() => handleButton(value)}>{value}</button>
  );
};

export default App;