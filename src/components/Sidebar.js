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
        this.state = {
            isMobile: typeof window !== 'undefined' && window.innerWidth < 960
        }
    }
    componentDidMount() {
        window.addEventListener("resize", this.windowResize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.windowResize);
    }
    windowResize = () => {
        var isMobile = typeof window !== 'undefined' && window.innerWidth < 960;
        if(isMobile) {
            this.setState({
                isMobile: true
            })
        } else {
            this.setState({
                isMobile: false
            })
        }
    }
    render() {
        return (
            <div id="sidebar">
                {!this.state.isMobile ? <Segment isInSidebar={true} /> : null }
                <div className="text-container">
                    <p>Hi, I’m</p>
                    <p><Link to="/">Xinhe Hsu</Link></p>
                    <p>Developer</p>
                </div>
                <div className="button-container">
                    <Link to="works" className={typeof window !== 'undefined' && window.location.pathname.includes('works') ? 'active' : ''}>WORK</Link>
                    <Link to="about" className={typeof window !== 'undefined' && window.location.pathname.includes('about') ? 'active' : ''}>ABOUT</Link>
                    <a href="https://drive.google.com/open?id=1_M0A04iMMiug4HHgeqgKadRy5zHRZetv" target="_blank">RESUME</a>
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