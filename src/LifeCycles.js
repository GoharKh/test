import { Component } from "react";
import Child from "./Child";
import Button from "./Button";

class LifeCycles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isHidden: false,
            checking: 5,
            smth: 1,
            obj: {
                name: 'Gohar',
                surName: "Khaleyan"
            },
            foo: function(){
                console.log('foo.state')
            }
        }
        this.hide = this.hide.bind(this)
        console.log('constructor')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps')    
        if(nextProps.message !== prevState.message) {
            return {
                message: nextProps.message
                
            }
        }
        return null
    }


    componentDidUpdate(prevProps, prevState, prevContext) {
        console.log('componentDidUpdate')
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    hide() {
        this.setState(prevState => ({isHidden: !prevState.isHidden, checking: 45}))
    }
    smthChange = () => {
        this.setState({foo: () => console.log('changed')})
    }
    render() {
        console.log('render')
        console.log(this.state.message)    

        return (
            <>
            <button onClick={this.smthChange}>smth</button>
            <Button hide={this.hide} checking={this.state.checking} foo={this.state.foo}/>
            {this.state.isHidden && <Child />}
            </>
        )
    }
}
export default LifeCycles

    // UNSAFE_componentWillMount() {
    //     console.log('componentWillMount')
    // }
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     console.log('componentWillReceiveProps')
    // } 
        // UNSAFE_componentWillUpdate(nextProps, nextState) {
    //     console.log('componentWillUpdate')
    // }



// import shallowCompare from 'react-addons-shallow-compare'; // ES6

// var shallowCompare = require('react-addons-shallow-compare'); // ES5 with npm   



// export class SampleComponent extends Component {
//     shouldComponentUpdate(nextProps, nextState) {
//       return shallowCompare(this, nextProps, nextState);
//     }
  
//     render() {
//       return <div className={this.props.className}>foo</div>;
//     }
//   }
