import React from "react"

class BottleItem extends React.Component {
    render() {
        return (
            <div class="bottle-card">
                <div class="winery-name">
                    <p class="card-text">{this.props.winery_name}</p>
                </div>
                <div class="varietal-name">
                    <p class="card-text">{this.props.varietal}</p>
                </div>
                <div class="wine-year">
                    <p class="card-text">{this.props.year}</p>
                </div>
            </div>
        )
    }
}

export default BottleItem