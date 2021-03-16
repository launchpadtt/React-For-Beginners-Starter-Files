// import React, { Fragment } from 'react';
import React from 'react';

class StorePicker extends React.Component {
    // class StorePicker extends Component {
        render() {
            // return <p>I am the Store Picker</p>
            // return React.createElement('p', {className: 'hey'}, 'Heyyooo');
            return (
                // <Fragment>
                //     <p>Fish!</p>
                    <form className="store-selector">
                        { /* I am a comment */}
                        <h2>Please enter a store</h2>
                        <input type="text" required placeholder="Store Name"></input>
                        <button type="submit">Visit Store →</button>
                    </form>
                // </Fragment>
            )
        }
    }
    
export default StorePicker;