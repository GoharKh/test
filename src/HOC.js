import React from "react";

const HOC = (WrappedComponent, entity) => {
    return class extends React.Component {
        state = {
            data: [],
            term: ''
        };
        componentDidMount() {
            const fetchData = async () => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`)
                const json = await res.json()
                this.setState({data: json})
            };
            fetchData();
        };
        render() {
            const {term, data} = this.state
            const filteredData = data.filter(d => {
                if(entity === 'posts') {
                    const {title} = d
                    return title.indexOf(term) >= 0;
                }
                if(entity === 'comments') {
                    const {name} = d
                    return name.indexOf(term) >= 0;
                }
                if(entity === 'photos') {
                    const {title} = d
                    return title.indexOf(term) >= 0;
                }
            }).slice(0, 15)
            return(
                <div>
                    <h2>{entity}</h2>
                    <input 
                        type='text'
                        value={this.state.term} 
                        onChange={(e) => this.setState({term: e.target.value})}
                    />
                    <WrappedComponent data={filteredData}></WrappedComponent>
                </div>

            )
        }
    }
}

export default HOC