import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const [open, setOpen] = useState(false);
    const handleCurrencyChange = (v) => {
        setNewCurrency(v);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: v,
        });
    }
    return (
        <>
<div className='alert alert-secondary' style={{ backgroundColor: '#94e59a' }} onClick={() => setOpen(!open)}>
<span>Currency: ({currency})</span>
</div>
{open && <div style={{ backgroundColor: '#94e59a', position: 'absolute', border: '1px solid black', borderRadius: '4px', marginTop: '-10px', width: '200px' }}>
  <div className='h' onClick={() => handleCurrencyChange("$")}>$ Dollar</div>
  <div className='h' onClick={() => handleCurrencyChange("£")}>£ Pound</div>
  <div className='h' onClick={() => handleCurrencyChange("€")}>€ Euro</div>
  <div className='h' onClick={() => handleCurrencyChange("₹")}>₹ Ruppee</div>
</div>}
</>
    );
};
export default Currency;
