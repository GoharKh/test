import { Component, PureComponent } from "react";

class Button extends PureComponent {
    constructor(props) {
        super(props)
    }
    componentDidUpdate(prevProps, prevState, prevContext) {
        console.log('child componentDidUpdate')
    }
    render() {
        console.log('child render')

        return(
            <>
            <button onClick={this.props.foo}>hide</button>
            <div>{this.props.name}</div>
            </>
        )
    }
}

export default Button