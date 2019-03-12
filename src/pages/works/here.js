import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

import '../../style/work.scss'
import '../../style/work_detail.scss'

import here from '../../Assets/here.png'
// import meracle_1 from '../../Assets/meracle-1.png'
// import meracle_2 from '../../Assets/meracle-2.png'
// import meracle_3 from '../../Assets/meracle-1.png'

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
                            <p className="project-title">Here</p>
                        </div>

                        <p className="project-desc">An app helps to easily settle expenses with a group of people. </p>
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
                        <p>The Undergraduate Team Project</p>
                        <p>4 months (08/2017 - 12/2017)</p>
                        <h1>Project Brief</h1>
                        <p>Meracle is <b>a platform that trains and tracks memory for young-learners. </b>
                            It captures brain wave by Neurosky MindWave Mobile Headset, quantizes the working memory with algorithm, and provides a lot of charts & data for parents.
                        Meracle aims to improve the working memory for young-learners.<br />
                            Our team, four people, completed this project with an app by cross-platform mobile framework React Native, a web system by React.js, and RESTful API by ASP.NET API.
                            I was involved in all stages of the process, but I especially contributed the most to web front-end development.</p>
                        <h1>At a Glance</h1>
                        <div className="image-group">
                            
                        </div>
                        <h1>Motivation & Solution</h1>
                        <p>
                            
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
                </div>

            </Layout>
        )
    }
}

export default (Here);