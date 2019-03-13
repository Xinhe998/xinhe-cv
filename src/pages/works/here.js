import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

import '../../style/work.scss'
import '../../style/work_detail.scss'

import here from '../../Assets/here.png'
import here_1 from '../../Assets/here-1.png'
import here_2 from '../../Assets/here-2.png'
import here_3 from '../../Assets/here-3.png'
import here_4 from '../../Assets/here-4.png'

class Here extends React.Component {
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
                    <img src={here} className="project-img" />
                    <div className="project-desc-container">
                        <div id="be-header-when-scroll">
                            <Link to="/works"><div className="close-btn"></div></Link>
                            <p className="project-title">HERE</p>
                        </div>

                        <p className="project-desc">Online Swap Website</p>
                        <div className="project-detail">
                            <div>
                                <p className="project-role-title">Role:</p>
                                <label className="role">Web Front-End Develop</label>
                            </div>
                            <div>
                                <p className="project-program-title">Programming Languages：</p>
                                <label className="programming_language">HTML</label>
                                <label className="programming_language">CSS</label>
                                <label className="programming_language">Bootstrap</label>
                                <label className="programming_language">jQuery</label>
                            </div>
                        </div>
                    </div>
                    <div className="project-detail_content">
                        <h1>Project Overview</h1>
                        <p>Database Course Team Project</p>
                        <p>3 months (03/2017 - 05/2017)</p>
                        <h1>Project Brief</h1>
                        <p>
                            HERE is <b>a website platform based around the concept of bartering. </b> 
                        Its inspiration comes from the story that started with the trading of a paper clip and ended with a house.
                        HERE aims to <b>H</b>elp <b>E</b>veryone, <b>R</b>euse <b>E</b>verything. It allows donors that have different demands include releasing ending inventory in an enterprise, contributing unwanted item in home etc.<br />
                        This is the first time I ideated, planned, developed a complete web system and writed system analysis documents with team by ourselves. I was involved in all stages of the process, but I especially contributed the most to web front-end development.
                        </p>
                        <h1>At a Glance</h1>
                        <div className="image-group">
                            <img src={here_1} className="web-screenshot" />
                            <img src={here_2} className="web-screenshot" />
                            <img src={here_3} className="web-screenshot" />
                            <img src={here_4} className="web-screenshot" />
                        </div>
                        <h1>Outcome</h1>
                        <p><b>Awards</b></p>
                        <ul>
                            <li>
                                <b>First Prize,</b> Team Project of Information Application Database Course, 2017
                            </li>
                        </ul>
                    </div>
                    <h1 className="sp-block">
                        <strong>．．．</strong>
                    </h1>
                    <div className="email-me">
                        <p>If you're interested in learning more, send me an email and I would love to chat!</p>
                        <a href="mailto:xinhe998@gmail.com">xinhe998@gmail.com</a>
                    </div>
                    <div className="navigate-project-btn-container">
                        <Link to="works/meracle"> ← PREV PROJECT</Link>
                        <Link to='works/bonerp'>NEXT PROJECT → </Link>
                    </div>
                </div>
                <p className="copyright">© Xinhe Hsu 2019.</p>
            </Layout>
        )
    }
}

export default (Here);