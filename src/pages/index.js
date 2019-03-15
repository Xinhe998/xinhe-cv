import React from "react"
import { Link, navigate } from "gatsby"
import { Helmet } from "react-helmet";

import HomeLayout from '../components/HomeLayout'
import Code from '../components/Code'
import '../style/index.scss'

import FeatureImg from '../Assets/feature.svg'


class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <HomeLayout>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Xinhe Hsu</title>
                </Helmet>
                <div id="home-container">
                    <div className="feature-text-container">
                        <div className="feature-text-wrapper">
                            <p className="feature-text-line1">Hi, I am</p>
                            <p className="feature-text-line2">Xinhe Hsu</p>
                            <hr />
                            <p className="feature-text-line3">A Web Developer,</p>
                            <p className="feature-text-line4">always keeping up with new trends in tech.</p>
                            <button onClick={() => navigate('/works')}>Learn More About Me !</button>
                        </div>
                    </div>
                    <div className="feature-img-container">
                        <img src={FeatureImg} />
                        <Code />
                    </div>
                </div>
            </HomeLayout>
        )
    }
}
export default (Home)
