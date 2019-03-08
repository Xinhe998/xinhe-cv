import React from "react"
import Layout from "../components/Layout"

import '../style/work.scss'
import meracle from '../Assets/image-5.png'

class Work extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Layout>
                <div id="work-page">
                    <p className="page-title">WORK</p>
                    <hr />
                    <p className="page-desc">I spent most of the time on web development.</p>
                    <ul className="timeline-blocks-container">
                        <li className="timeline-milestone">
                            <div class="timeline-date">
                                <p>11/2018</p>
                                <p>- Present</p>
                            </div>
                            <div class="timeline-content">
                                <img src="" className="project-img" />
                                <div className="project-desc-container">
                                    <p className="project-title">Ghowa</p>
                                    <p className="project-desc">An app for splitting a bill with friends</p>
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
                            </div>
                        </li>
                        <li className="timeline-milestone">
                            <div class="timeline-date">
                                <p>07/2017</p>
                                <p>- 12/2017</p>
                            </div>
                            <div class="timeline-content">
                                <img src={meracle} className="project-img" />
                                <div className="project-desc-container">
                                    <p className="project-title">Meracle</p>
                                    <p className="project-desc">學童腦波記憶力評估訓練系統</p>
                                    <div className="project-detail">
                                        <div>
                                            <p className="project-role-title">Role:</p>
                                            <label className="role">WEB Front-End Develop</label>
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
                            </div>
                        </li>
                        <li className="timeline-milestone">
                            <div class="timeline-date">
                                <p>07/2017</p>
                                <p>- 12/2017</p>
                            </div>
                            <div class="timeline-content">
                                <img src={meracle} className="project-img" />
                                <div className="project-desc-container">
                                    <p className="project-title">HERE 這禮</p>
                                    <p className="project-desc">線上贈物平台</p>
                                    <div className="project-detail">
                                        <div>
                                            <p className="project-role-title">Role:</p>
                                            <label className="role">WEB Front-End Develop</label>
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
                            </div>
                        </li>
                        <li className="timeline-milestone">
                            <div class="timeline-date">
                                <p>07/2017</p>
                                <p>- 12/2017</p>
                            </div>
                            <div class="timeline-content">
                                <img src={meracle} className="project-img" />
                                <div className="project-desc-container">
                                    <p className="project-title">BonERP</p>
                                    <p className="project-desc">Cloud ERP System</p>
                                    <div className="project-detail">
                                        <div>
                                            <p className="project-role-title">Role:</p>
                                            <label className="role">WEB Front-End Develop</label>
                                            <label className="role">WEB Back-End Develop</label>
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
                            </div>
                        </li>
                    </ul>
                </div>
            </Layout>
        )
    }
}

export default (Work);