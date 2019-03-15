import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import { Helmet } from "react-helmet";

import { withI18next } from 'gatsby-plugin-i18next';
import { withNamespaces } from 'react-i18next';

import '../../style/work.scss'
import meracle from '../../Assets/meracle.png'
import ghowa from '../../Assets/ghowa_feature_img.png'
import here from '../../Assets/here.png'
import bonerp from '../../Assets/bonerp.png'


const VisibilitySensor = require('react-visibility-sensor').default

class Work extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active1: false,
            active2: false,
            active3: false,
            active4: false
        }
    }
    onChangeVisibility1 = isActive => {
        this.setState({ active1: isActive });
    };
    onChangeVisibility2 = isActive => {
        this.setState({ active2: isActive });
    };
    onChangeVisibility3 = isActive => {
        this.setState({ active3: isActive });
    };
    onChangeVisibility4 = isActive => {
        this.setState({ active4: isActive });
    };
    render() {
        const { t } = this.props;
        return (
            <Layout>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Work - Xinhe Hsu</title>
                </Helmet>
                <div id="work-page">
                    <p className="page-title">WORK</p>
                    <hr />
                    <p className="page-desc">I spent most of the time on web development.</p>
                    <ul className="timeline-blocks-container">

                        <VisibilitySensor offset={{ top: -200 }} partialVisibility={true} onChange={this.onChangeVisibility4} active={!this.state.active4}>
                            {({ isVisible }) => {
                                return (
                                    <li className="timeline-milestone">

                                        <div className={isVisible ? 'timeline-date in_viewport' : 'timeline-date'}>
                                            <p>11/2018</p>
                                            <p>- {t('present')}</p>
                                        </div>
                                        <Link to={this.props.location.pathname + '/ghowa'}>
                                            <div className={isVisible ? 'timeline-content in_viewport' : 'timeline-content'}>
                                                <img src={ghowa} className="project-img" />
                                                <div className="project-desc-container">
                                                    <p className="project-title">Ghowa</p>
                                                    <p className="project-desc">{t('ghowa_desc')}</p>
                                                    <div className="project-detail">
                                                        <div>
                                                            <p className="project-role-title">{t('role')}：</p>
                                                            <label className="role">{t('back_end_dev')}</label>
                                                        </div>
                                                        <div>
                                                            <p className="project-program-title">{t('program_lang')}：</p>
                                                            <label className="programming_language">Node.js</label>
                                                            <label className="programming_language">Express.js</label>
                                                            <label className="programming_language">MySQL</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                    </li>
                                )
                            }}
                        </VisibilitySensor>
                        <VisibilitySensor offset={{ top: -200 }} partialVisibility={true} onChange={this.onChangeVisibility3} active={!this.state.active3}>
                            {({ isVisible }) => {
                                return (
                                    <li className="timeline-milestone">
                                        <div className={isVisible ? 'timeline-date in_viewport' : 'timeline-date'}>
                                            <p>08/2017</p>
                                            <p>- 12/2017</p>
                                        </div>
                                        <Link to={this.props.location.pathname + '/meracle'}>
                                            <div className={isVisible ? 'timeline-content in_viewport' : 'timeline-content'}>
                                                <img src={meracle} className="project-img" />
                                                <div className="project-desc-container">
                                                    <p className="project-title">{t('meracle')}</p>
                                                    <p className="project-desc">{t('meracle_desc')}</p>
                                                    <div className="project-detail">
                                                        <div>
                                                            <p className="project-role-title">{t('role')}：</p>
                                                            <label className="role">{t('web_front_end_dev')}</label>
                                                        </div>
                                                        <div>
                                                            <p className="project-program-title">{t('program_lang')}：</p>
                                                            <label className="programming_language">React.js</label>
                                                            <label className="programming_language">Redux</label>
                                                            <label className="programming_language">SCSS</label>
                                                            <label className="programming_language">JavaScript</label>
                                                            <label className="programming_language">Webpack</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            }}
                        </VisibilitySensor>
                        <VisibilitySensor offset={{ top: -200 }} partialVisibility={true} onChange={this.onChangeVisibility2} active={!this.state.active2}>
                            {({ isVisible }) => {
                                return (
                                    <li className="timeline-milestone">
                                        <div className={isVisible ? 'timeline-date in_viewport' : 'timeline-date'}>
                                            <p>07/2017</p>
                                            <p>- 12/2017</p>
                                        </div>
                                        <Link to={this.props.location.pathname + '/here'}>
                                            <div className={isVisible ? 'timeline-content in_viewport' : 'timeline-content'}>
                                                <img src={here} className="project-img" />
                                                <div className="project-desc-container">
                                                    <p className="project-title">{t('here')}</p>
                                                    <p className="project-desc">{t('here_desc')}</p>
                                                    <div className="project-detail">
                                                        <div>
                                                            <p className="project-role-title">{t('role')}：</p>
                                                            <label className="role">{t('web_front_end_dev')}</label>
                                                        </div>
                                                        <div>
                                                            <p className="project-program-title">{t('program_lang')}：</p>
                                                            <label className="programming_language">HTML</label>
                                                            <label className="programming_language">CSS</label>
                                                            <label className="programming_language">Bootstrap</label>
                                                            <label className="programming_language">jQuery</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            }}
                        </VisibilitySensor>
                        <VisibilitySensor offset={{ top: -200 }} partialVisibility={true} onChange={this.onChangeVisibility1} active={!this.state.active1}>
                            {({ isVisible }) => {
                                return (
                                    <li className="timeline-milestone">
                                        <div className={isVisible ? 'timeline-date in_viewport' : 'timeline-date'}>
                                            <p>01/2017</p>
                                            <p>- 03/2017</p>
                                        </div>
                                        <Link to={this.props.location.pathname + '/bonerp'}>
                                            <div className={isVisible ? 'timeline-content in_viewport' : 'timeline-content'}>
                                                <img src={bonerp} className="project-img" />
                                                <div className="project-desc-container">
                                                    <p className="project-title">BonERP</p>
                                                    <p className="project-desc">{t('bonerp_desc')}</p>
                                                    <div className="project-detail">
                                                        <div>
                                                            <p className="project-role-title">{t('role')}：</p>
                                                            <label className="role">{t('web_front_end_dev')}</label>
                                                            <label className="role">{t('web_back_end_dev')}</label>
                                                        </div>
                                                        <div>
                                                            <p className="project-program-title">{t('program_lang')}：</p>
                                                            <label className="programming_language">.NET MVC 5</label>
                                                            <label className="programming_language">MS SQL Server</label>
                                                            <label className="programming_language">HTML</label>
                                                            <label className="programming_language">CSS</label>
                                                            <label className="programming_language">Bootstrap</label>
                                                            <label className="programming_language">jQuery</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            }}
                        </VisibilitySensor>
                    </ul>

                    <div className="email-me">
                        <a href="mailto:xinhe998@gmail.com">xinhe998@gmail.com</a>
                    </div>
                </div>
                <p className="copyright">© Xinhe Hsu 2019.</p>
            </Layout>
        )
    }
}

export default withI18next()(withNamespaces('translation')(Work));