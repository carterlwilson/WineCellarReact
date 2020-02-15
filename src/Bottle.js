import React from "react"

class BottleItem extends React.Component {
    render() {
        return (
            <p>Winery Name: {this.props.winery_name}<br/>
                Varietal: {this.props.varietal}<br/>
                Year: {this.props.year}<br/><br/>
            </p>
        )
    }
}

export default BottleItem