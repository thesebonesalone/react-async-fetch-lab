// create your App component here
import React, { Component, component } from 'react'

export default class App extends Component {

    constructor(){
        super()
        this.state = {
            people: []
        }
    }
    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(json => this.setState({people: json.people}))

    }
    renderFolks(){
        let folks = this.state.people
        console.log(folks)
        return folks.map(person => {
            return (<p>{person.name}</p>)

        })

    }

    render(){
        return (
            <p>
                {this.renderFolks()}
            </p>
        )
    }

}