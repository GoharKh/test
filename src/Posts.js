import { Component } from "react";
import HOC from "./HOC";

class Posts extends Component {
    render() {
        const {data} = this.props

        const renderPosts = data.map(post => {
            return (
                <div key={post.id}>
                    <p>{post.title}</p>
                </div>
            )
        })

        return (
            <div>{renderPosts}</div>
        )
    }
}

const UpdatedPosts = HOC(Posts, 'posts')

export default UpdatedPosts