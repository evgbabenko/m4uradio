import React, { useState, useEffect } from 'react';
import Service from '../scripts/script';
import Loader from '../loader/loader';
import { Link } from "react-router-dom";

import $ from 'jquery';
import './podcasts.css'

export default function Podcasts({ page }) {
    const [offset, setOffset] = useState(0);
    const [podcasts, setPodcasts] = useState([]);

    /*     const {podcastsFeed} = useSelector((state)=> state.podcastsReducer);
        const dispatch = useDispatch();
    
        useEffect(()=>{
            dispatch(getPodcasts(offset))
        }, [dispatch, offset])
        console.log(podcastsFeed) */
    function fancyDateFormat(arg) {
        arg.slice(0, -1);
        let separated = arg.split('T');
        let time = separated[1].slice(0, -1);
        const monthes = ['',"Січня", "Лютого", "Березня", "Квітня", "Травня", "Червня", "Липня", "Серпня", "Вересня", "Жовтня", "Листопада", "Грудня"]
        let date1 = separated[0].split('-');
        return `${date1[2]} ${monthes[Number(date1[1])]} ${date1[0]}`
    }

    useEffect(() => {
        new Service().getPodcasts(offset).then((result) => {
            const res = result.data;
            setPodcasts(podcasts.concat(res));
        })
    }, [offset]);

    function nextpage() {
        if (page !== 'main' && $(window).width() > 900) setOffset(offset + 20);
    }

    $(() => {
        $(window).on('scroll', () => {
            if (($(window).scrollTop() + $(window).height()) === $(document).height()) {
                nextpage()
            }
        })

    })

    function nextpage_button() {
        setPodcasts([]);
        setOffset(offset + 20);
        $(window).scrollTop(0);
    }


    function prevpage_button() {
        if (offset !== 0) {
            setPodcasts([]);
            setOffset(offset - 20);
        }
        else {
            setOffset(0);
            $('#prevbtn').css('display', 'none');
        }
        $(window).scrollTop(0);
    }

    const rand1 = () => { return Math.floor(Math.random() * 45) };
    const rand = () => { return Math.floor(Math.random() * rand1()) };
    return (podcasts === null) ?
        (<div className='loading'>
            <Loader />
        </div>) :
        (
            <div className='podcasts'>
                {
                    (page === 'main') ? '' : <h2>Подкасти</h2>
                }


                <ul key={Math.floor(Math.random() * 10)} className='podcast-list' id='podcast-list'>

                    {
                        podcasts.map((item, index) => {
                            return (
                                <li key={`list-${index + rand() * rand()}${item.url}${item.key}${item.created_time}`} className='podcast-banner'>
                                    <Link to={`/podcast/${item.slug}`} key={`${item.url}`}>
                                        <div className="podcast-img">
                                            <img alt={item.name} src={item.pictures['1024wx1024h']} className='img-border' />
                                        </div>

                                        <div className="podcast-title">{item.name}<br/>{fancyDateFormat(item.created_time)}</div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="btn-group" role="group" aria-label="controls" id='mobile-control'>
                    <button type="button" className="btn mobile-control" id='#prevbtn' onClick={() => { prevpage_button() }}>&lt;&lt;</button>
                    <button type="button" className="btn mobile-control" onClick={() => { nextpage_button() }}>&gt;&gt;</button>
                </div>
            </div>
        );
}
