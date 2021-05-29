import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DeliveryForm from './DeliveryForm';
import reportWebVitals from './reportWebVitals';

function App() {
    const [deliveryZone, setDeliveryZone] = useState('');

    const fetchOutletForAddress = (address) => {
        fetch(`/outlets?address=${encodeURI(address)}`)
            .then((res) => res.json())
            .then(({ zone }) => setDeliveryZone(zone))
            .catch(() => setDeliveryZone('not found'));
    };
    return (
        <div className="App">
            <section>
                <DeliveryForm fetchOutletForAddress={fetchOutletForAddress} />
                <p>Outlet Identifier: {deliveryZone}</p>
            </section>
        </div>
    );
}
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
