import React, { Component } from 'react';
import $ from 'jquery';
import './about.css'


class About extends Component {

    render() {
        $(() => {
            $(window).scrollTop(0);
        })
        return (
            <div className='about container-fluid'>
                <div className='row d-fex justify-content-center text-center'>
                    <h2>Про радіо </h2>
                    <div className='col d-fex'>
                        <div className='row text-start'>
                            <p>M4U RADIO Ukraine (Music for You, Music for the Universe!) — це інтернет радіостанція, що динамічно розвивається, метою якої
                                є популяризація електронної музики і клубного руху як в Україні, так і за її межами.</p>
                            <p>В ефірі інтернет радіо звучить якісна електронна музика, сети кращих DJ України та світу, розважальні програми, а так
                                само живі виступи. Основні стилі музики в ротації на M4U RADIO Ukraine — Progressive House, Tech House, Melodic House,
                                Deep House, Electro House, Afro House, Indie Dance, Techno, Melodic Techno, Minimal Techno, Peak/Time Driving, PsyTrance,
                                Progressive Trance, Vocal Trance, Drum'n'bass.</p>
                            <p>Великий вклад в розвиток M4U RADIО Ukraine був наданий такими Діджеями як - Handsome Jack, VadKiNgSon, ESHKA, Redler, DeeJay Ippon, SHRAM,
                                DJ Alex Lume, Patricks, Dj Ttore, Dj Raiskiy, Revival Agents, Andrew Wolf, Karchilled,  а також Індійським інтернет проєктом - Lunar Dance.</p>
                            <p></p>
                            <p>M4U RADIO Ukraine (Music for You, Music for the Universe!) - it’s a  dynamically developing Internet radio station, the purpose of
                                which is to popularize electronic music and club movement both in Ukraine and abroad. On the Internetradio sounds
                                high-quality electronic music, sets by the best DJ in Ukraine and the world, entertainment programs, as well as live
                                performances. The main styles of music in rotation on M4U RADIO Ukraine - Progressive House, Tech House, Melodic House,
                                Deep House, Electro House, Afro House, Indie Dance, Techno, Melodic Techno, Minimal Techno, Peak / Time Driving,
                                PsyTrance, Progressive Trance, Vocal Trance, Drum'n'bass.</p>
                        </div>
                        <div className='row text-start'>
                            <h3>Дещо з історії радіо</h3>
                            <ul>
                                <li>2 листопада 2020 року - засновано M4U Radio</li>
                                <li>3 листопада 2020 року - здійснений тестовий єфір M4U Radio</li>
                                <li>листопад 2020 року - До радіо долучаються Українські Діджеї - Shram, Andrew Wolf, AlexLume, Patricks та інш. DJ Shram долучається до команди радіо та залучає до ефіру низку Українських Діджеїв та колективів.</li>
                                <li>січень 2021 року - M4U Radio стає популярною Українською радіо площадкою для світових DJ</li>
                                <li>травень 2021 року - До команди M4U Radio долучається DJ VadKiNgSon та залучає до команди радіо Handsome Jack (голос радіо) та ESHKA</li>
                                <li>червень 2021 року -  Handsome Jack запускає на радіо проєкт LEVEL UP! - огляд музичних стилів</li>
                                <li>червень 2021 року -  M4U Radio здійснює пряму трансляцію події з D'n'D вечірки в м. Винніця - BESHKET</li>
                                <li>вересень 2021 року -  M4U Radio здійснює пряму трансляцію події з D'n'D вечірки в м. Винніця - BESHKET</li>
                                <li>вересень 2021 року -  DJ Tore (Аргентина) запускає на радіо шоу запрошеніх Діджеїв</li>
                                <li>лютий 2022 року -  З початком війни рф проти України M4U RADIO припиняє звичний ефір та переходе до ретрансляції Національного Марафону</li>
                                <li>травень 2022 року - Колектив M4U RADIO приймає рішення до поверненняя до звичного режиму радіо із залученням Ді-джеїв</li>
                                <li>вересень 2022 року - Розробка власного сайту</li>
                                <li>вересень 2022 року - зміна адреси сайту з m4u-radio.net на m4u.live</li>
                                <li>вересень 2022 року - Завершені подготовчі тести для впровадження Live трансляцій беспосередньо Ді-Джеями. Тепер можна буде грати вживу відразу в онлайні радіо.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
