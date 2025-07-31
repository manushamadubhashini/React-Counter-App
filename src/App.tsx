import {Component} from "react";
import "./App.css"
import {Counter} from "./Counter/Counter";

// This is a Class Component this class extend to Component Class
class App extends Component {
  render() {
    return(
        <div className="app">
          {/*<h1>This is App Component</h1>*/}
            {/*<Counter></Counter>*/}
            {/*can import this use single tag*/}
            <Counter data={"Saman"}/>
        </div>
    )

  }

}
export default App