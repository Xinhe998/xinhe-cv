import React from "react"
import '../style/sidebar.scss'
import Segment from '../components/Segment'
import { Link } from "gatsby"

import githubImg from '../Assets/github.png'
import linkdinImg from '../Assets/linkdin.png'
import mediumImg from '../Assets/medium.png'

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="sidebar">
                <Segment isInSidebar={true} />
                <div className="text-container">
                    <p>Hi, I’m</p>
                    <p><Link to="/">Xinhe Hsu</Link></p>
                    <p>Developer</p>
                </div>
                <div className="button-container">
                    <Link to="works" activeClassName='active'>WORK</Link>
                    <Link to="about" activeClassName='active'>ABOUT</Link>
                    <Link to="resume" activeClassName='active'>RESUME</Link>
                </div>
                <div className="socialmedia-button-container">
                    <div className="icon-container">
                    <a href="https://github.com/Xinhe998" >
                        <img src={githubImg} />
                    </a>
                    <a href="https://linkedin.com/in/xinhe998/" >
                        <img src={linkdinImg} />
                    </a>
                    <a href="https://medium.com/@xinhe998" >
                        <img src={mediumImg} />
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default (Sidebar);