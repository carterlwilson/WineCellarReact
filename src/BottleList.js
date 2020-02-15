import React from "react"
import testBottleData from "./TestBottleData"
import BottleItem from "./Bottle"
const axios = require('axios').default

class BottleList extends React.Component {
    constructor() {
        super()
        this.state = {
            bottles: testBottleData,
            error: null,
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        bottles: result.bottleList
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )

        console.log("hello")
    }

    render() {
        const { error, isLoaded, bottles } = this.state
        if(error) {
            return <div>Error: {error.message}</div>
        }
        else if(!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            const bottleItems = bottles.map(bottle => <li><BottleItem key={bottle.id} winery_name={bottle.winery_name} varietal={bottle.varietal} 
                year = {bottle.vintage_year}/></li>)
            return(
                <div>
                    <h1>Bottle list</h1>
                    <ul>
                        {bottleItems}
                    </ul>
                </div>
            )
        }       
    }
}

export default BottleList