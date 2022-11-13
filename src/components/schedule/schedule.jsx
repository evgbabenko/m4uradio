import React from 'react';
import { ScheduleView } from 'react-schedule-view';
import $ from 'jquery';
import { getSchedule, data, theme } from './data';
import { useNavigate } from "react-router-dom";
import './schedule.css';

export default function Schedule({ page }) {

    let date = new Date();
    let hr1 = date.toLocaleTimeString('en-US', { hour: 'numeric', hour12: false, timeZone: 'Europe/Kiev' });
    let hr;
    (hr1.length === 2) ? (hr1[0] === '0') ? hr = hr1[1] : hr = hr1 : hr = hr1;
    hr = Number(hr);
    let day = date.getDay();
    $(() => {
        $(window).scrollTop(0);
        /* collapse show */
        if (page === 'main') setInterval(() => {
            var div = $('#mainschedule').html();
            $('#mainschedule').html(div);
        }, 10000)
        else {        
  
            if (day === 0) { day = 6 }
            else{day = day - 1;}

            let buttonControl = `collapse${day}b`;
            let collapseControl = `collapse${day}`;

            document.getElementById(buttonControl).setAttribute('aria-expanded', 'true');
            document.getElementById(buttonControl).classList.remove('collapsed');
            document.getElementById(collapseControl).classList.add('show');
        }
    })
    let navigate = useNavigate();

    return (page === 'main') ? (

        <div className='schedule text-center' id='mainschedule'>
            <h3>Сьогодні в ефірі</h3>
            <ScheduleView daySchedules={getSchedule(day)} viewStartTime={hr} viewEndTime={((hr + 5) > 24) ? 24 : hr + 5} timeFormatter={24} theme="google" 
            handleEventClick={(e) => {
                console.log(e.link)
                navigate(
                    (e.link) ? `/djs/${e.link}` : `/contact`,
                    { replace: true }
                )
            }} />
        </div>) :
        (<div className='schedule text-center'>
            <h3>Тижневий розклад</h3>
            <div className="accordion " id="accordionSchedule">
                {
                    (data) ?
                        data.map((weekday, id) => {
                            return (
                                <div className="accordion-item" key={`${weekday.name}-${id}-shedule`}>
                                    <h2 className="accordion-header" id={`heading${id}`} >
                                        <button id={`collapse${id}b`} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
                                            {weekday.name}
                                        </button>
                                    </h2>
                                    <div id={`collapse${id}`} className="accordion-collapse collapse" aria-labelledby={`heading${id}`} data-bs-parent="#accordionSchedule">
                                        <div className="accordion-body row">
                                            <div className='flex col-sm-6'>
                                                <ScheduleView
                                                    daySchedules={[weekday]}
                                                    viewStartTime={0}
                                                    viewEndTime={12}
                                                    timeFormatter={24}
                                                    theme='google'
                                                    handleEventClick={(e) => {
                                                        console.log(e.link)
                                                        navigate(
                                                            (e.link) ? `/djs/${e.link}` : `/contact`,
                                                            { replace: true }
                                                        )
                                                    }
                                                    } />
                                            </div>
                                            <div className='flex col-sm-6'>
                                                <ScheduleView
                                                    daySchedules={[weekday]}
                                                    viewStartTime={12}
                                                    iewEndTime={24}
                                                    timeFormatter={24}
                                                    theme="google"
                                                    handleEventClick={(e) => {
                                                        console.log(e.link)
                                                        navigate(
                                                            (e.link) ? `/djs/${e.link}` : `/contact`,
                                                            { replace: true }
                                                        )
                                                    }
                                                    } />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        : <></>
                }
            </div>
        </div>
        );
}