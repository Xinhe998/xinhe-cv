import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet";

import '../style/about.scss'
import avatar from '../Assets/avatar.jpg'
import advantch_pic from '../Assets/advantech_pic.jpg'

import { withI18next } from 'gatsby-plugin-i18next';
import { withNamespaces } from 'react-i18next';
import { Trans } from "react-i18next"
import i18next from "i18next";

const About = ({ t, i18 }) => (
    <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>About - Xinhe Hsu</title>
        </Helmet>
        <div id="about-page">
            <div className="intro">
                <div className="avatar-box">
                    <img className="avatar" src={avatar} />
                </div>
                <div className="circle"></div>
                <p className="name">Xinhe Hsu</p>
            </div>
            <div className="main-content">
                <p>I am a developer from Taichung, Taiwan. Currently majoring in Information Application at National Taichung University of Science and Technology, I'm focusing on Front-End development.
                            With solid web development skills, I possess experience as an intern in three companies.</p>
                <h1>{t('skill')}</h1>
                <p>{t('web_front_end')}</p>
                <div>
                    <label className="pink">JavaScript</label>
                    <label className="pink">React.js</label>
                    <label className="pink">Redux</label>
                    <label className="pink">jQuery</label>
                    <label className="pink">Vue.js</label>
                    <label className="pink">Webpack</label>
                    <label className="pink">HTML</label>
                    <label className="pink">CSS / SCSS</label>
                    <label className="pink">Bootstrap</label>
                </div>
                <p>{t('web_back_end')}</p>
                <div>
                    <label className="blue">Node.js</label>
                    <label className="blue">Express.js</label>
                    <label className="blue">Socket.io</label>
                    <label className="blue">ASP.NET MVC 5</label>
                </div>
                <p>{t('database')}</p>
                <div>
                    <label className="pink">MS SQL Server</label>
                    <label className="pink">MySQL</label>
                </div>
                <p>{t('server')}</p>
                <div>
                    <label className="blue">IIS</label>
                </div>
                <h1>{t('experience')}</h1>
                <ul className="timeline-container">
                    <li className="timeline-milestone">
                        <div className="timeline-date">
                            <p>2018/01 - 2018/07</p>
                        </div>
                        <div className="timeline-content">
                            Intern <b>@ {t('advantech')}</b>
                            <ul>
                                <li>
                                    <Trans i18nKey="advantech_dutie1">
                                        Responsible for developing and maintaining <a href='https://wise-paas.advantech.com/en-us/marketplace' target='_blank'> {t('marketplace')} </a> project with ASP.NETMVC5.
                                    </Trans>
                                </li>
                                <li>{t('advantech_dutie2')} </li>
                                <li>{t('advantech_dutie3')} </li>
                                <li>{t('advantech_dutie4')} </li>
                            </ul>
                            <div className="image-hover img-zoom-in">
                                <a href="https://medium.com/@xinhe998/advantech-internship-f4ba6a13acf6" target="_blank">
                                    <img src={advantch_pic} />
                                </a>
                            </div>
                            <div className="bubble_wrapper">
                                <div className={i18next.language == 'tw' ? 'bubble for_tw' : 'bubble for_en'}>{t('medium_article')} :<br />{t('what_i_learn_in_adv')}</div>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-milestone">
                        <div className="timeline-date">
                            <p>2017/07 - 2018/01</p>
                        </div>
                        <div className="timeline-content">
                            Intern <b>@ {t('trunk_studio')}</b>
                            <ul>
                                <li>
                                    <Trans i18nKey="trunk_dutie1">
                                        Participation of ‘<a href="https://viptjob.com" target="_blank">VIPT JOB</a>’ official website(job bank platform for migrant workers and enterprise) development with Vue.js and EJS, also helped to implement i18n.
                                    </Trans> </li>
                                <li>
                                    <Trans i18nKey="trunk_dutie2">
                                        Participation of ‘<a href="https://itunes.apple.com/tw/app/healthcare%E5%81%A5%E5%BA%B7%E4%BF%9D%E5%81%A5%E5%AE%A4/id1239683214?mt=8" target="_blank">Kbro HealthCare</a>’ mobile app development with React Native.
                                    </Trans>
                                </li>

                                <li>{t('trunk_dutie3')} </li>
                                <li>{t('trunk_dutie4')}</li>
                            </ul>
                        </div>
                    </li>
                    <li className="timeline-milestone">
                        <div className="timeline-date">
                            <p>2017/01 - 2017/03</p>
                        </div>
                        <div className="timeline-content">
                            Intern <b>@ {t('taiwan_cloud')}</b>
                            <ul>
                                <li>{t('taiwan_cloud_dutie1')}</li>
                                <li>{t('taiwan_cloud_dutie2')}</li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <h1>{t('awards')}</h1>
                <ul className="awards-list">
                    <li><b>{t('student_elite_award')},</b> {t('nutc')}, 2018</li>
                    <li>
                        <b>{t('first_prize')},</b> {t('project_information_distribution_science')}, 2017
                    </li>
                    <li>
                        <b>{t('third_prize')},</b> {t('innoserve')}: {t('titansoft_agile')}, 2017
                    </li>
                    <li>
                        <b>{t('honorable_mention')},</b> {t('innoserve')}: {t('campus_4g')}, 2017
                    </li>
                    <li>
                        <b>{t('honorable_mention')},</b> {t('web_app_creative_competition')}, 2017
                    </li>
                    <li>
                        <b>{t('honorable_mention')},</b> {t('feng_chia')}, 2017
                    </li>
                    <li>
                        <b>{t('first_prize')},</b> {t('innoserve')}: {t('egd_category')}, 2016
                    </li>
                </ul>
                <h1 className="sp-block">
                    <strong>．．．</strong>
                </h1>
                <div className="email-me">
                    <p>{t('sent_me_email')}</p>
                    <a href="mailto:xinhe998@gmail.com">xinhe998@gmail.com</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default withI18next()(withNamespaces('translation')(About));
// export default translate("Layout")(About)