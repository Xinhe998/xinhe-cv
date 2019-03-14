import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import Lightbox from 'react-images';
import { withI18next } from 'gatsby-plugin-i18next';
import { withNamespaces, Trans } from 'react-i18next';

import '../../style/work.scss'
import '../../style/work_detail.scss'

import here from '../../Assets/here.png'
import here_1 from '../../Assets/here-1.png'
// import here_2 from '../../Assets/here-2.png'
// import here_3 from '../../Assets/here-3.png'
// import here_4 from '../../Assets/here-4.png'

class Here extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lightboxIsOpen: false,
            lightbox_current_img: 0
        }
        this.handleScroll = this.listenScrollEvent.bind(this);
    }
    componentDidMount() {

        window.addEventListener('scroll', this.listenScrollEvent, true);

    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent, true);
        var container = document.getElementById("work-detail-container");
        container.classList.remove("notransition");
    }
    listenScrollEvent = () => {
        var container = document.getElementById("work-detail-container");

        var header = document.getElementById("be-header-when-scroll");
        var sticky = document.querySelector(".project-desc-container").offsetTop;
        var h = document.querySelector(".project-desc-container").offsetHeight;

        if (window.pageYOffset > (sticky + h)) {
            container.classList.add("notransition");
            header.classList.add("sticky");
            // document.querySelector(".project-detail_content").style.marginTop = '150px';
        } else {
            header.classList.remove("sticky");
            // document.querySelector(".project-detail_content").style.marginTop = '38px';
        }
    }
    openLightbox = (img_index) => {
        this.setState({
            lightboxIsOpen: true,
            lightbox_current_img: img_index
        })
    }
    closeLightbox = () => {
        this.setState({
            lightboxIsOpen: false,
        })
    }
    lightboxGotoPrevious = () => {
        this.setState({
            lightbox_current_img: this.state.lightbox_current_img - 1
        })
    }
    lightboxGotoNext = () => {
        this.setState({
            lightbox_current_img: this.state.lightbox_current_img + 1
        })
    }
    render() {
        const { t, i18n } = this.props;
        return (
            <Layout>
                <div id="work-detail-container" onScroll={this.listenScrollEvent.bind(this)}>
                    <img src={here} className="project-img" />
                    <div className="project-desc-container">
                        <div id="be-header-when-scroll">
                            <Link to="/works"><div className="close-btn"></div></Link>
                            <p className="project-title">{t('here')}</p>
                        </div>

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
                    <div className="project-detail_content">
                        <h1>{t('project_overview')}</h1>
                        <p>{t('here_overview1')}</p>
                        <p>3 {t('months')} (03/2017 - 05/2017)</p>
                        <h1>{t('project_brief')}</h1>
                        <p>
                            <Trans i18nKey="here_brief1">
                                HERE is <b>a website platform based around the concept of bartering. </b>
                                The inspiration comes from the story that started with the trading of a paper clip and ended with a house.
                        HERE aims to <b>H</b>elp <b>E</b>veryone, <b>R</b>euse <b>E</b>verything. It allows donors that have different demands include releasing ending inventory in an enterprise, contributing unwanted item in home etc.
                        </Trans>
                            <br />
                            {t('here_brief2')}
                        </p>
                        <h1>{t('at_a_glance')}</h1>
                        <div className="image-group">
                            <Lightbox
                                images={[{ src: here_1 },]}
                                isOpen={this.state.lightboxIsOpen}
                                onClickPrev={() => this.lightboxGotoPrevious()}
                                onClickNext={() => this.lightboxGotoNext()}
                                onClose={() => this.closeLightbox()}
                                currentImage={this.state.lightbox_current_img}
                                backdropClosesModal={true}
                                enableKeyboardInput={true}
                                showImageCount={false}
                            />
                            <img src={here_1} className="web-screenshot" onClick={() => this.openLightbox(0)} />
                        </div>
                        <h1>{t('outcome')}</h1>
                        <p><b>{t('awards')}</b></p>
                        <ul>
                            <li>
                                <b>{t('first_prize')},</b> {t('database_project')}, 2017
                            </li>
                        </ul>
                    </div>
                    <h1 className="sp-block">
                        <strong>．．．</strong>
                    </h1>
                    <div className="email-me">
                        <p>{t('sent_me_email_in_project_page')}</p>
                        <a href="mailto:xinhe998@gmail.com">xinhe998@gmail.com</a>
                    </div>
                    <div className="navigate-project-btn-container">
                        <Link to="works/meracle"> ← {t('prev_project')}</Link>
                        <Link to='works/bonerp'>{t('next_project')} → </Link>
                    </div>
                </div>
                <p className="copyright">© Xinhe Hsu 2019.</p>
            </Layout>
        )
    }
}

export default withI18next()(withNamespaces('translation')(Here));