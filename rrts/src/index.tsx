import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './components/App';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);




// interface AppProps{
//     color?: string
// }

// class App extends React.Component<AppProps>{
//     state = {counter : 0};
//     constructor(props: AppProps) {
//         super(props);
//         this.state = {counter : 0};
//     }

//     // const App = (props: AppProps): JSX.Element =>{
//     //     return <div>{props.color}</div>
//     // };
//     OnIncrement = (): void=>{
//         this.setState({counter: this.state.counter +1});
//     }
//     OnDecrement = (): void=>{
//         this.setState({counter: this.state.counter -1});        
//     }

//     render() {
//         return(
//             <div>
//                 <button onClick = {this.OnIncrement}>Increment</button>
//                 <button onClick = {this.OnDecrement}>Decrement</button>
//                 {this.state.counter}
//             </div>
//         ) 
//     }
// }
ReactDOM.render(<App />, document.querySelector('#root'))