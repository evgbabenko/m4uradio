import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Service from '../scripts/script';
import Loader from '../loader/loader';
import ReactPlayer from 'react-player';
import $ from 'jquery';
import './podcast.css'

function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

function fancyDateFormat(arg) {
    arg.slice(0, -1);
    let separated = arg.split('T');
    let time = separated[1].slice(0, -1);
    const monthes = ["Січня", "Лютого", "Березня", "Квітня", "Травня", "Червня", "Липня", "Серпня", "Вересня", "Жовтня", "Листопада", "Грудня"]
    let date1 = separated[0].split('-');
    return `${date1[2]} ${monthes[Number(date1[1])]} ${date1[0]}`
}

export default function Podcast() {
    $(() => {
        $(window).scrollTop(0);
    })
    const params = useParams();
    const [key, setKey] = useState(params.key);
    const [podcast, setPodcast] = useState(null);

    useEffect(() => {
        new Service().getShow(key).then((show) => {
            /*   setPodcasts(podcasts.data) */
            setPodcast(show);

        })
    }, [key]);
    return (podcast === null) ?
        (<div className='loading'>
            <Loader />
        </div>) :
        (
            <div className='podcast'>
                <h5 className='podcast-title'>
                {podcast.name}
                </h5>
                <div className="card">
                    <img src={podcast.pictures['extra_large']} className="card-img-top" alt={podcast.name} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{podcast.name}</h5>
                        <div className="card-text">
                            {
                                podcast.tags.map((tags) => {
                                    return <h5 className='styles' key={tags.name} ><span className="badge text-bg-danger">{tags.name}</span></h5>
                                })
                            }
                        </div>
                        <p className="card-text"><small className="text-muted">Довжина: {fancyTimeFormat(podcast.audio_length)} Додано: {fancyDateFormat(podcast.created_time)}</small></p>
                        <div className='col-lg-12'>
                            <ReactPlayer
                                url={podcast.url}
                                width='100%'
                                height='150px'
                            />
                        </div>
                        <p className="card-text">{podcast.description}</p>
                    </div>
                </div> 
            </div>
        );
}



