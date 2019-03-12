import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

import '../../style/work.scss'
import '../../style/work_detail.scss'

import bonerp from '../../Assets/bonerp.png'
// import here_1 from '../../Assets/here-1.png'
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
                        <p>Summer Internshipct</p>
                        <p>3 months (01/2017 - 03/2017)</p>
                        <h1>Project Brief</h1>
                        <p>
                            BonERP is <b>a website platform based around the concept of bartering. </b>
                            Its inspiration comes from the story that started with the trading of a paper clip and ended with a house.
                        HERE aims to <b>H</b>elp <b>E</b>veryone, <b>R</b>euse <b>E</b>verything. It allows donors that have different demands include releasing ending inventory in an enterprise, contributing unwanted item in home etc.<br />
                            This is the first time I ideated, planned, developed a complete web system and writed system analysis documents with team by ourselves. I was involved in all stages of the process, but I especially contributed the most to web front-end development.
                        </p>
                        <h1>At a Glance</h1>
                        <div className="image-group">
                            {/* <img src={here_1} className="web-screenshot" /> */}
                        </div>
                        <h1>Outcome</h1>
                        
                    </div>
                </div>

            </Layout>
        )
    }
}

export default (BonErp);