import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

import '../../style/work.scss'
import '../../style/work_detail.scss'
import ghowa from '../../Assets/ghowa_feature_img.png'
import ghowa_app_1 from '../../Assets/ghowa-app-1.png'
import ghowa_app_2 from '../../Assets/ghowa-app-2.png'
import ghowa_wireframe from '../../Assets/ghowa-wireframe.png'


class Ghowa extends React.Component {
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

                    <img src={ghowa} className="project-img" />
                    <div className="project-desc-container">
                        <div id="be-header-when-scroll">
                            <Link to="/works"><div className="close-btn"></div></Link>
                            <p className="project-title">Ghowa</p>
                        </div>

                        <p className="project-desc">An app helps to easily settle expenses with a group of people. </p>
                        <div className="project-detail">
                            <div>
                                <p className="project-role-title">Role:</p>
                                <label className="role">Back-End Develop</label>
                            </div>
                            <div>
                                <p className="project-program-title">Programming Languages：</p>
                                <label className="programming_language">Node.js</label>
                                <label className="programming_language">Express.js</label>
                                <label className="programming_language">MySQL</label>
                            </div>
                        </div>
                    </div>
                    <div className="project-detail_content">
                        <h1>Project Overview</h1>
                        <p>Cross-school cooperation for the Undergraduate Research Project in NTUE</p>
                        <p>Now is in Progress</p>
                        <h1>Project Brief</h1>
                        <p>Ghowa is an <b>app that calculates a balance of a group of people who spend money and want to calculate a balance for each participant. </b>
                            It allows user to create infinite groups for managing a list with the shared expenses.<br />
                            In this project, I collaborated with people from NTUE (National Taipei University of Education Department) of Digital Technology Design to ideate the solution
                                 and was individually responsible for building the RESTful API with Node.js and Express.js .<br />
                            This project is still ongoing and planned to be launched in summer 2019, at that time, Ghowa will be finded on App Store. </p>
                        <h1>At a Glance</h1>
                        <p>From wireframe to mock-up.</p>
                        <div className="image-group">
                            <img src={ghowa_wireframe} className="app-screenshot" />
                            <img src={ghowa_app_1} className="app-screenshot" />
                            <img src={ghowa_app_2} className="app-screenshot" />
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
                        <Link> ← PREV PROJECT</Link>
                        <Link to='works/meracle'>NEXT PROJECT → </Link>
                    </div>
                </div>
                <p className="copyright">© Xinhe Hsu 2019.</p>
            </Layout>
        )
    }
}

export default (Ghowa);