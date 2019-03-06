import React from "react"
import { Link } from "gatsby"
import Segment from '../components/Segment'
import FeatureImg from '../Assets/feature.svg'
import '../style/index.scss'

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
                        <Link to="">Resume</Link>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="feature-text-container">
                        <p className="feature-text-line1">Hi, I am</p>
                        <p className="feature-text-line2">Xinhe Hsu</p>
                        <hr />
                        <p className="feature-text-line3">A Web/App Developer,</p>
                        <p className="feature-text-line4">always keeping up with new trends in tech.</p>
                        <button>Learn More About Me !</button>
                    </div>
                    <div className="feature-img-container">
                        <img className="feature-img" src={FeatureImg} />
                    </div>
                </div>
                <div className="foo">
                    <img />
                </div>
            </div>
        )
    }
}
export default (Home)
