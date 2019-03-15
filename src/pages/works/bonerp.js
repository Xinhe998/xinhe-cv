import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import Lightbox from 'react-images';
import { Helmet } from "react-helmet";

import { withI18next } from 'gatsby-plugin-i18next';
import { withNamespaces, Trans } from 'react-i18next';

import '../../style/work.scss'
import '../../style/work_detail.scss'

import bonerp from '../../Assets/bonerp.png'
import sitemap_en from '../../Assets/BonERP_sitemap_en.jpg'
import sitemap_tw from '../../Assets/BonERP_sitemap_tw.jpg'
import bonerp_1 from '../../Assets/bonerp-1.png'
import bonerp_2 from '../../Assets/bonerp-2.png'
import bonerp_3 from '../../Assets/bonerp-3.png'
import i18next from "i18next";

class BonErp extends React.Component {
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
        var sitemap_src = i18n.language == 'tw' ? sitemap_tw : sitemap_en;
        return (
            <Layout>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>BonERP - Xinhe Hsu</title>
                </Helmet>
                <div id="work-detail-container" onScroll={this.listenScrollEvent.bind(this)}>
                    <img src={bonerp} className="project-img" />
                    <div className="project-desc-container">
                        <div id="be-header-when-scroll">
                            <Link to="/works"><div className="close-btn"></div></Link>
                            <p className="project-title">BonERP</p>
                        </div>

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
                    <div className="project-detail_content">
                        <h1>{t('project_overview')}</h1>
                        <p>{t('winter_internship')}</p>
                        <p>3 {t('months')} (01/2017 - 03/2017)</p>
                        <h1>{t('project_brief')}</h1>
                        <p>
                            <Trans i18nKey="taiwan_cloud_brief1">
                                In winter 2017, I interned at <a href="https://taiwancloud.com/" target="_blank">Taiwan Cloud Corporation</a> with four of my classmates.
                                we helped the development and implement of the ERP system, BonERP.
                            </Trans>
                            {i18next.language === 'tw' ? <br /> : null}
                            {t('taiwan_cloud_brief2')}
                        </p>
                        <h1>{t('site_map')}</h1>
                        <div className="image-group">
                            <img src={sitemap_src} className="other" />
                        </div>
                        <h1>{t('at_a_glance')}</h1>
                        <div className="image-group">
                            <Lightbox
                                images={[{ src: bonerp_1 }, { src: bonerp_2 }, { src: bonerp_3 }]}
                                isOpen={this.state.lightboxIsOpen}
                                onClickPrev={() => this.lightboxGotoPrevious()}
                                onClickNext={() => this.lightboxGotoNext()}
                                onClose={() => this.closeLightbox()}
                                currentImage={this.state.lightbox_current_img}
                                backdropClosesModal={true}
                                enableKeyboardInput={true}
                                showImageCount={false}
                            />
                            <img src={bonerp_1} className="web-screenshot" onClick={() => this.openLightbox(0)} />
                            <img src={bonerp_2} className="web-screenshot" onClick={() => this.openLightbox(1)} />
                            <img src={bonerp_3} className="web-screenshot" onClick={() => this.openLightbox(2)} />

                        </div>

                    </div>
                    <h1 className="sp-block">
                        <strong>．．．</strong>
                    </h1>
                    <div className="email-me">
                        <p>{t('sent_me_email_in_project_page')}</p>
                        <a href="mailto:xinhe998@gmail.com">xinhe998@gmail.com</a>
                    </div>
                    <div className="navigate-project-btn-container only-display-prev">
                        <Link to='works/here'> ← {t('prev_project')}</Link>
                        <Link>{t('next_project')} → </Link>
                    </div>
                </div>
                <p className="copyright">© Xinhe Hsu 2019.</p>
            </Layout>
        )
    }
}

export default withI18next()(withNamespaces('translation')(BonErp));