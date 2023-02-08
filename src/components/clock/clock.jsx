import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './clock.css'

function Clock() {



    const [hh, setHh] = useState();
    const [mm, setMm] = useState();
    const [ss, setSs] = useState();
    const [dd, setDd] = useState();
    $(() => {
        setInterval(() => {
            let day = new Date();
            let time = day.toLocaleTimeString('en-US', { hour12: false, timeZone: 'Europe/Kiev' });
            let date = day.toLocaleDateString('en-US', { hour12: false,day:'2-digit', month: 'short', timeZone: 'Europe/Kiev' });
           setDd(date);
            let time1 = time.split(':');
            setHh(time1[0]);
            setMm(time1[1]);
            setSs(time1[2]);
        }, 1000)
    })

    useEffect(() => {
        $('#hh').text(hh);
    }, [hh])
    useEffect(() => {
        $('#mm').text(mm);
    }, [mm])
    useEffect(() => {
        $('#ss').text(ss);
    }, [ss])
    useEffect(() => {
        $('#dd').text(dd);
    }, [dd])


    return (
        <div className="digital-clock" id='clock'><span id='hh'></span>:<span id='mm'></span>:<span id='ss'></span> <span id='dd'></span></div>
    )
}

export default Clock