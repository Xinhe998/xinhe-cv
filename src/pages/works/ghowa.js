import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import Lightbox from 'react-images';
import { withI18next } from 'gatsby-plugin-i18next';
import { withNamespaces, Trans } from 'react-i18next';
import { Helmet } from "react-helmet";

import '../../style/work.scss'
import '../../style/work_detail.scss'
import ghowa from '../../Assets/ghowa_feature_img.png'
import ghowa_app_1 from '../../Assets/ghowa-app-1.png'
import ghowa_app_2 from '../../Assets/ghowa-app-2.png'
import ghowa_wireframe from '../../Assets/ghowa-wireframe.png'


class Ghowa extends React.Component {
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
        const { t } = this.props;
        return (
            <Layout>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Ghowa - Xinhe Hsu</title>
                    <meta name="description" content="A Web Developer, always keeping up with new trends in tech." />
                    <meta name="keywords" content="工程師,前端,網頁,React,JavaScript,CSS,GatsbyJS,作品集,履歷,軟體開發" />
                </Helmet>
                <div id="work-detail-container" onScroll={this.listenScrollEvent.bind(this)}>

                    <img src={ghowa} className="project-img" />
                    <div className="project-desc-container">
                        <div id="be-header-when-scroll">
                            <Link to="/works"><div className="close-btn"></div></Link>
                            <p className="project-title">Ghowa</p>
                        </div>

                        <p className="project-desc">{t('ghowa_desc')}</p>
                        <div className="project-detail">
                            <div>
                                <p className="project-role-title">{t('role')}:</p>
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
                    <div className="project-detail_content">
                        <h1>{t('project_overview')}</h1>
                        <p>{t('ghowa_overview1')}</p>
                        <p>{t('ghowa_overview2')}</p>
                        <h1>{t('project_brief')}</h1>
                        <p>
                            <Trans i18nKey="ghowa_brief1">
                                Ghowa is an <b>app that calculates a balance of a group of people who spend money and want to calculate a balance for each participant. </b>
                                It allows user to create infinite groups for managing a list with the shared expenses.
                            </Trans>
                            <br />
                            {t('ghowa_brief2')}
                            <br />
                            <Trans i18nKey="ghowa_brief3">
                                This project is still ongoing and <b>planned to be launched on App Store</b> in summer 2019.
                            </Trans>
                        </p>
                        <h1>{t('at_a_glance')}</h1>
                        <p>{t('ghowa_at_a_glance')}</p>
                        <div className="image-group">
                            <Lightbox
                                images={[{ src: ghowa_wireframe }, { src: ghowa_app_1 }, { src: ghowa_app_2 }]}
                                isOpen={this.state.lightboxIsOpen}
                                onClickPrev={() => this.lightboxGotoPrevious()}
                                onClickNext={() => this.lightboxGotoNext()}
                                onClose={() => this.closeLightbox()}
                                currentImage={this.state.lightbox_current_img}
                                backdropClosesModal={true}
                                enableKeyboardInput={true}
                                showImageCount={false}
                            />
                            <img src={ghowa_wireframe} className="app-screenshot" onClick={() => this.openLightbox(0)} />
                            <img src={ghowa_app_1} className="app-screenshot" onClick={() => this.openLightbox(1)} />
                            <img src={ghowa_app_2} className="app-screenshot" onClick={() => this.openLightbox(2)} />
                        </div>
                    </div>
                    <h1 className="sp-block">
                        <strong>．．．</strong>
                    </h1>
                    <div className="email-me">
                        <p>{t('sent_me_email_in_project_page')}</p>
                        <a href="mailto:xinhe998@gmail.com">xinhe998@gmail.com</a>
                    </div>
                    <div className="navigate-project-btn-container only-display-next">
                        <Link> ← {t('prev_project')}</Link>
                        <Link to='works/meracle'>{t('next_project')} → </Link>
                    </div>
                </div>
                <p className="copyright">© Xinhe Hsu 2019.</p>
            </Layout>
        )
    }
}

export default withI18next()(withNamespaces('translation')(Ghowa));