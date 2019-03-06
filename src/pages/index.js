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
                </div>
                <div className="content-wrapper">
                    <div className="feature-text-container">
                        <p>Hi, I am</p>
                        <p>Xinhe Hsu</p>
                        <hr />
                        <p>A Web/App Developer,</p>
                        <p>always keeping up with new trends in tech.</p>
                    </div>
                    <div className="feature-img-container">
                        <img className="feature-img" src={FeatureImg} />
                    </div>
                </div>
                <div className="foo">

                </div>
            </div>
        )
    }
}
export default (Home)
