import React from "react"
import Layout from "../components/Layout"

import '../style/about.scss'
import avatar from '../Assets/avatar.jpg'

import advantch_pic from '../Assets/advantech_pic.jpg'

class About extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Layout>
                <div id="about-page">
                    <div className="intro">
                        <div className="avatar-box">
                            <img className="avatar" src={avatar} />
                        </div>
                        <div className="circle"></div>
                        <p className="name">Xinhe Hsu</p>
                    </div>
                    <div className="main-content">
                        <p>I am a developer from Taichung, Taiwan. Currently majoring in Information Application at college, I'm focusing on Front-End development.
                            With solid web development skills, I possess experience as an intern in three companies.</p>
                        <h1>Skill</h1>
                        <p>Web Front-End</p>
                        <div>
                            <label className="pink">React.js</label>
                            <label className="pink">Vue.js</label>
                            <label className="pink">Redux</label>
                            <label className="pink">jQuery</label>
                            <label className="pink">HTML</label>
                            <label className="pink">CSS / SCSS</label>
                        </div>
                        <p>Web Back-End</p>
                        <div>
                            <label className="blue">Node.js</label>
                            <label className="blue">Express.js</label>
                            <label className="blue">Socket.io</label>
                            <label className="blue">ASP.NET MVC 5</label>
                        </div>
                        <p>Database</p>
                        <div>
                            <label className="pink">MS SQL Server</label>
                            <label className="pink">MySQL</label>
                        </div>
                        <h1>Experience</h1>
                        <ul className="timeline-container">
                            <li className="timeline-milestone">
                                <div className="timeline-date">
                                    <p>2018/01 - 2018/07</p>
                                </div>
                                <div className="timeline-content">
                                    Intern <b>@ Advantech</b>
                                    <ul>
                                        <li>Responsible for developing and maintaining Marketplace project with ASP.NETMVC5. </li>
                                        <li>Successfully imported Coded UI Test with Selenium and completed CI process on myown in a week. </li>
                                        <li>Shared UI Test experience on technical conferences with IT colleagues and QAcolleagues who is work in Kunshan, China. </li>
                                    </ul>
                                    <div className="image-hover img-zoom-in">
                                        <a href="https://medium.com/@xinhe998/advantech-internship-f4ba6a13acf6" target="_blank">
                                            <img src={advantch_pic} />
                                        </a>
                                    </div>
                                    <div className="bubble_wrapper">
                                        <div className="bubble">Medium Article :<br />What I Learn From Advantech IOT Internship</div>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-milestone">
                                <div className="timeline-date">
                                    <p>2017/07 - 2018/01</p>
                                </div>
                                <div className="timeline-content">
                                    Intern <b>@ Trunk Studio</b>
                                    <ul>
                                        <li>Participation of ‘VIPT JOB’ official website(job bank platform for migrant workers and enterprise) development with Vue.js and EJS, also helped to implement i18n. </li>
                                        <li>Participation of ‘Kbro HealthCare’ mobile app development with React Native. </li>
                                        <li>Familiar with Git, JavaScript, React, EJS. </li>
                                        <li>Familiar working in Scrum.</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="timeline-milestone">
                                <div className="timeline-date">
                                    <p>2017/01 - 2017/03</p>
                                </div>
                                <div className="timeline-content">
                                    Intern <b>@ Taiwan Cloud</b>
                                    <ul>
                                        <li>Participation of online ERP system project development with HTML, CSS, jQuery, ASP.NET MVC5. </li>
                                        <li>Familiar with ASP.NET MVC 5 and jQuery. </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Layout>
        )
    }
}
export default (About)