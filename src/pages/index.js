import React from "react"
import { Link } from "gatsby"
import Segment from '../components/Segment'
import Code from '../components/Code'
import '../style/index.scss'

import FeatureImg from '../Assets/feature.svg'
import githubImg from '../Assets/github.png'
import linkdinImg from '../Assets/linkdin.png'
import mediumImg from '../Assets/medium.png'


class Home extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Segment />
                    <div className="menu">
                        <Link to="work">Work</Link>
                        <Link to="about">About</Link>
                        <Link to="resume">Resume</Link>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="feature-text-container">
                        <div className="feature-text-wrapper">
                            <p className="feature-text-line1">Hi, I am</p>
                            <p className="feature-text-line2">Xinhe Hsu</p>
                            <hr />
                            <p className="feature-text-line3">A Web Developer,</p>
                            <p className="feature-text-line4">always keeping up with new trends in tech.</p>
                            <button>Learn More About Me !</button>
                        </div>
                    </div>
                    <div className="feature-img-container">
                        <img src={FeatureImg} />
                        <Code />
                    </div>
                </div>
                <div className="foo">
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
export default (Home)
