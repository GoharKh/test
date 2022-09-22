import { Component } from "react";
import HOC from "./HOC";

class Photos extends Component {
    render() {
        const {data} = this.props

        const renderPhotos = data.map(photo => {
            return (
                <div key={photo.id}>
                    <img src={photo.thumbnailUrl} alt={photo.id} width='50px'/>
                    <p>{photo.title}</p>
                </div>
            )
        })

        return (
            <div>{renderPhotos}</div>
        )
    }
}

const UpdatedPhotos = HOC(Photos, 'photos')

export default UpdatedPhotos