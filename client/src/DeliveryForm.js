import './App.css';
import { useState } from 'react';

function App({ fetchOutletForAddress }) {
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        fetchOutletForAddress(address);
        e.preventDefault();
    };
    return (
        <form
            onSubmit={(e) => {
                handleSubmit(e);
            }}>
            <label>Enter delivery address:</label>
            <input
                name="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <input className="submitButton" type="submit" value="Search" />
        </form>
    );
}

export default App;
