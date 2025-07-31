import {Component} from "react";
import "./Counter.css"

interface CounterProps{
    data?:any;
}
interface CounterAppState{
    count:number
}
export class Counter extends Component<CounterProps,CounterAppState> {


    constructor(props:any) {
        super(props);
        this.state={
            count : 0
        };
        alert("Constructor Component is Initializing")
    }
    componentDidMount() {
        alert("component DidMount : Component has been Mounted! props :  " + this.props.data)
    }
    componentWillUnmount() {
        alert("componentWillUnmount : Component is being Removed!")
    }
    componentDidUpdate(prevProps: Readonly<CounterProps>, prevState: Readonly<CounterAppState>, snapshot?: any) {
        if (prevState.count !== this.state.count){
            alert("ComponentDidUpdate: Component has being update!")
        }
    }

    increase=() =>{
        alert("Increment Click")
        this.setState((previousState) =>({
            count : previousState.count + 1
        }))
    }

    decrement=() =>{
        this.setState((previousState) =>({
            count : previousState.count - 1
        }))
}

    render() {
        return (
            <div className="counter-content">
                {/*<h1>This is Counter App</h1>*/}
                <h1>React Counter App</h1>
                <h2>Counter : {this.state.count}</h2>
                {/*<h2>Counter : 0</h2>*/}
                <div>
                    <button className="button" onClick={this.increase}>+</button>
                    <button className="button" onClick={this.decrement}>-</button>
                </div>
            </div>
        );
    }
}