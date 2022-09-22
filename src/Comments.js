import { Component } from "react";
import HOC from "./HOC";

class Comments extends Component {
    render() {
        const {data} = this.props

        const renderComments = data.map(post => {
            return (
                <div key={post.id}>
                    <p>{post.name}</p>
                </div>
            )
        })

        return (
            <div>{renderComments}</div>
        )
    }
}

const UpdatedComments = HOC(Comments, 'comments')

export default UpdatedComments