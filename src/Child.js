import { Component } from "react";

class Child extends Component {
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate')
    }
    render() {
        return(
            <>
            <div>Child</div>
            </>
        )
    }
}

export default Child  