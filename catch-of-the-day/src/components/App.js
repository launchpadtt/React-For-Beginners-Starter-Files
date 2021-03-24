import React from 'react';
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };
    addFish = (fish) => {
        // console.log("adding a fish");
        //1. take a copy of the existing state
        const fishes = {...this.state.fishes};
        //2. add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        //3. set the new fishes object to state     
        this.setState({
            // fishes: fishes
            fishes
        });
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Wes is cool" age={500} cool={true} />
                    {/* <Fish />
                    <Fish />
                    <Fish />
                    <Fish />
                    <Fish />
                    <Fish />
                    <Fish />
                    <Fish /> */}
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        );
    }
}

export default App;