import React from "react"
import Layout from "../components/Layout"

import '../style/about.scss'
import avatar from '../Assets/avatar.jpg'

import advantch_pic from '../Assets/advantech_pic.jpg'
import { graphql } from 'gatsby';

import { withI18next } from 'gatsby-plugin-i18next';
import { withNamespaces } from 'react-i18next';
import { translate } from "react-i18next"
import i18n from '../components/I18n'

const About = ({ t }) => (
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
                <h1>{t('skill')}</h1>
                <p>Web Front-End</p>
                <div>
                    <label className="pink">React.js</label>
                    <label className="pink">Redux</label>
                    <label className="pink">jQuery</label>
                    <label className="pink">Vue.js</label>
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
                <h1>{t('experience')}</h1>
                <ul className="timeline-container">
                    <li className="timeline-milestone">
                        <div className="timeline-date">
                            <p>2018/01 - 2018/07</p>
                        </div>
                        <div className="timeline-content">
                            Intern <b>@ Advantech</b>
                            <ul>
                                <li>Responsible for developing and maintaining <a href="https://wise-paas.advantech.com/en-us/marketplace" target="_blank">Marketplace</a> project with ASP.NETMVC5. </li>
                                <li>Successfully imported Coded UI Test with Selenium and completed CI process on my own in a week. </li>
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
                                <li>Participation of ‘<a href="https://viptjob.com" target="_blank">VIPT JOB</a>’ official website(job bank platform for migrant workers and enterprise) development with Vue.js and EJS, also helped to implement i18n. </li>
                                <li>Participation of ‘<a href="https://itunes.apple.com/tw/app/healthcare%E5%81%A5%E5%BA%B7%E4%BF%9D%E5%81%A5%E5%AE%A4/id1239683214?mt=8" target="_blank">Kbro HealthCare</a>’ mobile app development with React Native. </li>
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
                <h1>Awards</h1>
                <ul className="awards-list">
                    <li><b>Student Elite Award,</b> National Taichung University of Science and Technology, 2018</li>
                    <li>
                        <b>First Prize,</b> Undergraduate Project of College of Information and Distribution Science, 2017
                    </li>
                    <li>
                        <b>Third Prize,</b> International ICT Innovative Services Awards: Titansoft Pte Ltd Agile development category, 2017
                    </li>
                    <li>
                        <b>Honorable Mention,</b> International ICT Innovative Services Awards: Campus 4G mobile application category, 2017
                    </li>
                    <li>
                        <b>Honorable Mention,</b> Web&App Creative competition in National Taipei University of Education, 2017
                    </li>
                    <li>
                        <b>Honorable Mention,</b> Feng Chia Shopping Area Entrepreneurial Competition, 2017
                    </li>
                    <li>
                        <b>First Prize,</b> International ICT Innovative Services Awards: Economic Goegraphy Database category, 2016
                    </li>
                </ul>
                <h1 className="sp-block">
                    <strong>．．．</strong>
                </h1>
                <div className="email-me">
                    <p>If you're interested in learning more about me, send me an email and I would love to chat!</p>
                    <a href="mailto:xinhe998@gmail.com">xinhe998@gmail.com</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default withI18next()(withNamespaces('translation')(About));
// export default translate("Layout")(About)