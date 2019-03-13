import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

import '../../style/work.scss'
import '../../style/work_detail.scss'

import meracle from '../../Assets/meracle.png'
import meracle_1 from '../../Assets/meracle-1.png'
import meracle_2 from '../../Assets/meracle-2.png'
// import meracle_3 from '../../Assets/meracle-1.png'

class Meracle extends React.Component {
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
                    <img src={meracle} className="project-img" />
                    <div className="project-desc-container">
                        <div id="be-header-when-scroll">
                            <Link to="/works"><div className="close-btn"></div></Link>
                            <p className="project-title">Meracle</p>
                        </div>

                        <p className="project-desc">A platform that trains and tracks memory for young-learners. </p>
                        <div className="project-detail">
                            <div>
                                <p className="project-role-title">Role:</p>
                                <label className="role">Front-End Develop</label>
                            </div>
                            <div>
                                <p className="project-program-title">Programming Languages：</p>
                                <label className="programming_language">React.js</label>
                                <label className="programming_language">Redux</label>
                                <label className="programming_language">SCSS</label>
                                <label className="programming_language">JavaScript</label>
                                <label className="programming_language">Webpack</label>
                            </div>
                        </div>
                    </div>
                    <div className="project-detail_content">
                        <h1>Project Overview</h1>
                        <p>The Junior College Team Project</p>
                        <p>4 months (08/2017 - 12/2017)</p>
                        <h1>Project Brief</h1>
                        <p>Meracle is <b>a platform that trains and tracks memory for young-learners. </b>
                            It captures brain wave by Neurosky MindWave Mobile Headset, quantizes the working memory with algorithm, and provides a lot of charts & data for parents.
                        Meracle aims to improve the working memory for young-learners.<br />
                            Our team, four people, completed this project with an app by cross-platform mobile framework React Native, a web system by React.js, and RESTful API by ASP.NET API.
                            I was involved in all stages of the process, but I especially contributed the most to web front-end development.</p>
                        <h1>At a Glance</h1>
                        <div className="image-group">
                            <img src={meracle_1} className="web-screenshot" />
                            <img src={meracle_2} className="web-screenshot" />
                        </div>
                        <h1>Motivation & Solution</h1>
                        <p>
                            {/* There is full of many memory training methods */}
                            現今市面上充斥著許多記憶力訓練方法，
                            但卻沒有一套系統，完善的分析、追縱與量化記憶力，因此我們開發出一套針對學童的腦波記憶力評估訓練系統。
                            基於香港記憶學院提供的記憶力測驗作為指標，結合N-back記憶理論，設計出一套完整實驗流程，
                            驗證本系統在提升孩童記憶力上確實有成效。
                        </p>
                        <h1>Outcome</h1>
                        <p><b>Awards</b></p>
                        <ul>
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
                        <Link to="works/ghowa"> ← PREV PROJECT</Link>
                        <Link to='works/here'>NEXT PROJECT → </Link>
                    </div>
                </div>
                <p className="copyright">© Xinhe Hsu 2019.</p>
            </Layout>
        )
    }
}

export default (Meracle);