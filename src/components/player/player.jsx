import React, { useState, useEffect } from 'react';
import './player.css'
import $ from 'jquery';
import { stream, stat } from './straem';
import Service from '../scripts/script';
import { FaPlay, FaStop } from 'react-icons/fa'

function Player() {

    const [play, setPlay] = useState();
    const [stop, setStop] = useState(false);
    const [mute, setMute] = useState(false);
    const [volume, setVolume] = useState(50);
    const [trackTitle, setTrackTitle] = useState('');
    const [bpm, setBpm] = useState(null);

    $(() => {
        setInterval(() => {
            new Service().getTrack(stat).then((result) => {
                if (!result) { }
                else {
                    const onair = document.getElementById('onair');
                    onair.innerText = result.yp_currently_playing;
                }
            })
        }, 1000)
    })
    const handlePlayClick = () => {
        const _play = document.getElementById('playbutton');
        const _stop = document.getElementById('stopbutton');
        const audio = document.getElementById('audio');
        const player = document.getElementById('player');

        if (!play) {

            setPlay(true);
            audio.setAttribute('src', stream);
            _play.style.display = "none";
            _stop.style.display = "block";
            /* audio.volume = volume / 100; */
            audio.volume = 1;
            audio.play();
            showCurrTime();
        }
        if (play) {
            setPlay(false);
            /* _play.classList.remove('active-button'); */
            /* currTime.innerText = '00:00'; */
            audio.pause();
            _play.style.display = "block";
            _stop.style.display = "none";
            audio.setAttribute('src', '');
        }
    }

    const handleBpm = () => {

    }

    const showCurrTime = (timer) => {
        const currTime = document.getElementById('currTime');
        setInterval(() => {
            let x = document.getElementById('audio').currentTime;
            let durationMinutes = Math.floor(x / 60);
            let durationSeconds = Math.floor(x - durationMinutes * 60);
            if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
            if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
            currTime.innerText = durationMinutes + ":" + durationSeconds;
            if (timer) clearInterval(this);
        }, 1000);
    }
    return (
        <div className='player'>
            <div className='player-control'>
                <div className='buttonplace'>
                    <button className='play-button' id='playbutton' onClick={handlePlayClick}><FaPlay /></button>
                    <button className='stop-button' id='stopbutton' onClick={handlePlayClick}><FaStop /></button>
                </div>
                <div id="currTime" className='currtime'></div>
                <div className='onair'>
                    <div>Зараз в ефірі:</div>
                    <div id='onair'></div>
                </div>
            </div>
            <audio className='hidden-audio' id='audio'></audio>
        </div>
    )
}


export default Player;