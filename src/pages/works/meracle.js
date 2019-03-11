import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

import '../../style/work.scss'
import '../../style/work_detail.scss'

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

                    {/* <img src={ghowa} className="project-img" /> */}
                    <div className="project-desc-container">
                        <div id="be-header-when-scroll">
                            <Link to="/works"><div className="close-btn"></div></Link>
                            <p className="project-title">Meracle</p>
                        </div>

                        <p className="project-desc">An app helps to easily settle expenses with a group of people. </p>
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
                        <p>The Undergraduate Research Project</p>
                        <p>4 months (08/2017 - 12/2017)</p>
                        <h1>Project Brief</h1>
                        <p>Ghowa is an <b>app that calculates a balance of a group of people who spend money and want to calculate a balance for each participant. </b>
                            It allows user to create infinite groups for managing a list with the shared expenses.<br />
                            In this project, I collaborated with people from NTUE (National Taipei University of Education Department) of Digital Technology Design to ideate the solution
                                 and was individually responsible for building the REST API with Node.js and Express.js</p>
                        <h1>At a Glance</h1>
                        <p>From wireframe to mock-up.</p>
                        <div className="image-group">

                        </div>
                    </div>
                </div>

            </Layout>
        )
    }
}

export default (Meracle);