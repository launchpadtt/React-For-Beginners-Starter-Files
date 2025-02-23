// import React, { Fragment } from 'react';
import React from 'react';
import { getFunName } from '../helpers';
import PropTypes from "prop-types";

class StorePicker extends React.Component {
    myInput = React.createRef();

    static propTypes = {
        history: PropTypes.object
    }

    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    handleClick() {
        alert('Heyyyy!');
    }

    // goToStore(event) {
    goToStore = event => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. Get the text from the input
        const storeName = this.myInput.current.value;
        // 3. Change the page to /store/whatever-they-named
        this.props.history.push(`/store/${storeName}`);

    }

    // class StorePicker extends Component {
    render() {
        // return <p>I am the Store Picker</p>
        // return React.createElement('p', {className: 'hey'}, 'Heyyooo');
        return (
            // <Fragment>
            //     <p>Fish!</p>
                <form className="store-selector" onSubmit={this.goToStore}>
                    {/* <button onClick={this.handleClick}>Click Me!</button> */}

                    { /* I am a comment */}
                    <h2>Please enter a store</h2>
                    <input
                    type="text"
                    // ref={ (myInput) = this.myInput = myInput }
                    ref={this.myInput}
                    required
                    placeholder="Store Name"
                    defaultValue={getFunName()}></input>
                    <button type="submit">Visit Store →</button>
                </form>
            // </Fragment>
        )
    }
}
    
export default StorePicker;