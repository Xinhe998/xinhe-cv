import React from "react"
import Layout from "../components/Layout"

import '../style/about.scss'
import avatar from '../Assets/avatar.jpg'

class About extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Layout>
                <div id="about-page">
                    <div className="intro">
                        <div className="avatar-box">
                            <img className="avatar" src={avatar} />
                        </div>
                        <div className="circle"></div>
                        <p className="name">Xinhe Hsu</p>
                    </div>
                    <div className="main-content">
                        <p>I am a developer from Taichung, Taiwan. Currently majoring in Information Application at college, I'm focusing on Front-End development.
                            With solid web development skills, I possess experience as an intern in three companies.</p>
                        <h1>Skill</h1>
                        <p>Web Front-End</p>
                        <div>
                            <label className="pink">React.js</label>
                            <label className="pink">Vue.js</label>
                            <label className="pink">Redux</label>
                            <label className="pink">jQuery</label>
                            <label className="pink">HTML</label>
                            <label className="pink">CSS / SCSS</label>
                        </div>
                        <p>Web Back-End</p>
                        <div>
                            <label className="blue">Node.js</label>
                            <label className="blue">Express.js</label>
                            <label className="blue">Socket.io</label>
                            <label className="blue">ASP.NET MVC 5</label>
                        </div>
                        <p>Database</p>
                        <div>
                            <label className="pink">MS SQL Server</label>
                            <label className="pink">MySQL</label>
                        </div>
                        <h1>Experience</h1>
                    </div>
                </div>
            </Layout>
        )
    }
}
export default (About)