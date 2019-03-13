import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

import '../../style/work.scss'
import '../../style/work_detail.scss'

import bonerp from '../../Assets/bonerp.png'
import sitemap from '../../Assets/BonERP_sitemap.jpg'
// import meracle_2 from '../../Assets/meracle-2.png'
// import meracle_3 from '../../Assets/meracle-1.png'

class BonErp extends React.Component {
    constructor(props) {
        super(props)
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
    render() {
        return (
            <Layout>
                <div id="work-detail-container" onScroll={this.listenScrollEvent.bind(this)}>
                    <img src={bonerp} className="project-img" />
                    <div className="project-desc-container">
                        <div id="be-header-when-scroll">
                            <Link to="/works"><div className="close-btn"></div></Link>
                            <p className="project-title">BonERP</p>
                        </div>

                        <p className="project-desc">Online ERP system</p>
                        <div className="project-detail">
                            <div>
                                <p className="project-role-title">Role:</p>
                                <label className="role">Web Front-End Develop</label>
                                <label className="role">Web Back-End Develop</label>
                            </div>
                            <div>
                                <p className="project-program-title">Programming Languages：</p>
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
                        <h1>Project Overview</h1>
                        <p>Winter Internship</p>
                        <p>3 months (01/2017 - 03/2017)</p>
                        <h1>Project Brief</h1>
                        <p>
                        In winter 2017, I interned at <a href="https://taiwancloud.com/" target="_blank">Taiwan Cloud Corporation</a> with four of my classmates.
                        we helped to develop and import an online ERP system, BonERP.
                        Common features in ERP such as Purchase, Sales and Inventory were included in BonERP. 
                        During this project, I was individually responsible for front-end development, and also support to develop several back-end modules.
                        </p>
                        <h1>Site Map</h1>
                        <div className="image-group">
                            <img src={sitemap} className="other" />
                        </div>
                        <h1>At a Glance</h1>
                        <div className="image-group">
                            {/* <img src={here_1} className="web-screenshot" /> */}
                        </div>

                    </div>
                    <h1 className="sp-block">
                        <strong>．．．</strong>
                    </h1>
                    <div className="email-me">
                        <p>If you're interested in learning more, send me an email and I would love to chat!</p>
                        <a href="mailto:xinhe998@gmail.com">xinhe998@gmail.com</a>
                    </div>
                    <div className="navigate-project-btn-container">
                        <Link to='works/here'> ← PREV PROJECT</Link>
                        <Link>NEXT PROJECT → </Link>
                    </div>
                </div>
                <p className="copyright">© Xinhe Hsu 2019.</p>
            </Layout>
        )
    }
}

export default (BonErp);