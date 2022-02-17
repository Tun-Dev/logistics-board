import React from 'react';
import styles from './home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faUser, faUserFriends, faShip } from '@fortawesome/free-solid-svg-icons'
import img from '../../assets/images/user.png'
import Midmodals from '../MidModals/Midmodals';
import Midmodals2 from '../MidModals/Midmodals2';
import Charts from '../Charts/Charts';
import Charts2 from '../Charts/Charts2';
import { useState } from 'react';

const Home = () => {
    const [chart, setChart] = React.useState(0)

    const chart1 = () => setChart(0)
    const chart2 = () => setChart(1)

    return (
        <div className={styles.main} >
            <div className={styles.maininner} >
                <div className={styles.top} >
                    <div className={styles.innertop} >
                        <div className={styles.bell} >
                            <FontAwesomeIcon icon={faBell} size="2x" />
                        </div>
                        <span></span>
                        <div className={styles.userpic} >
                            <img src={img} alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className={styles.middle} >
                    <div className={styles.midwords} >
                        <h2>Good Evening, Zeus</h2>
                        <p>Glad to have you back, here's an overview of your operations today</p>
                    </div>
                    <div className={styles.mods} >
                        <Midmodals
                            color="#386CE2"
                            register="REGISTERED CUSTOMERS"
                            count='380.2K'
                            join="3467 Joined Today"
                        />
                        <Midmodals2
                            color="#0fc4af"
                            register="REGISTERED TRANSPORTERS"
                            count='15.6M'
                            join="3467 Onboarded Today"
                            img={faUserFriends}
                        />
                        <Midmodals2
                            color="#de387e"
                            register="TOTAL SHIPMENTS"
                            count='348.9K'
                            join="3467 Shipped Today"
                            img={faShip}
                        />
                    </div>
                </div>
                <div>
                    <div className={styles.shipdiv} >
                        <div className={styles.shipleft} >
                            <h1>Shipments</h1>
                            <p>Shipping is going pretty well today, Here's what we have</p>
                        </div>
                        <div className={styles.shipright} >
                            <div className={styles.days} >
                                <button>1D</button>
                                <button>5D</button>
                                <button className={styles.clickable} onClick={chart1} >1M</button>
                                <button className={styles.clickable} onClick={chart2} >1Y</button>
                                <button>Max</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.charts} >
                        {chart === 0 ? (
                            <Charts />
                        ) : (<Charts2 />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home