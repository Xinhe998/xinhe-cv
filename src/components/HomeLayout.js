import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types';

import githubImg from '../Assets/github.png'
import linkdinImg from '../Assets/linkdin.png'
import mediumImg from '../Assets/medium.png'
import '../style/index.scss'

const HomeLayout = ({ children }) => (
    <div id="home-page">
        <div className="header">
            <div className="menu">
                <Link to="works">Work</Link>
                <Link to="about">About</Link>
                <Link to="resume">Resume</Link>
            </div>
        </div>
        <div className="content-wrapper">
            {children}
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
HomeLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default (HomeLayout);