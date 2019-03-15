import React from "react"
import '../style/sidebar.scss'
import Segment from '../components/Segment'
import { Link } from "gatsby"

import githubImg from '../Assets/github.png'
import linkdinImg from '../Assets/linkdin.png'
import mediumImg from '../Assets/medium.png'

class MobileSidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="mobile_sidebar">
                <input type="checkbox" id="menuToggler" class="input-toggler" value="1" autofocus="true"/>
                <label for="menuToggler" id="menuTogglerLabel" class="menu-toggler" role="button" aria-pressed="false" aria-expanded="false" aria-label="Navigation button">
                    <span class="menu-toggler__line"></span>
                    <span class="menu-toggler__line"></span>
                    <span class="menu-toggler__line"></span>
                </label>
                {/* <Segment isInSidebar={true} /> */}
                <div className="button-container">
                    <Link to="works" className={typeof window !== 'undefined' && window.location.pathname.includes('works') ? 'active' : ''}>WORK</Link>
                    <Link to="about" className={typeof window !== 'undefined' && window.location.pathname.includes('about') ? 'active' : ''}>ABOUT</Link>
                    <Link to="resume" >RESUME</Link>
                </div>
            </div>
        )
    }
}
export default (MobileSidebar);