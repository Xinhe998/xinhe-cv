import React from "react"
import '../style/sidebar.scss'
import '../style/mobilesidebar.scss'
import Segment from '../components/Segment'
import { Link } from "gatsby"

import githubImg from '../Assets/github.png'
import linkdinImg from '../Assets/linkdin.png'
import mediumImg from '../Assets/medium.png'


class MobileSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuIsOpen : false
        }
    }
    menuClick = () => {
        if (!this.state.menuIsOpen) {
            //open menu
            this.setState({
                menuIsOpen : true
            })
        }else {
            //close menu
            document.querySelector('.mobile_sidebar_content').classList.add('closing')
            document.getElementById('menuTogglerLabel').classList.add('closing')
            setTimeout( () => {
                this.setState({
                    menuIsOpen : false
                })
                document.querySelector('.mobile_sidebar_content').classList.remove('closing')
                document.getElementById('menuTogglerLabel').classList.remove('closing')
            }, 300);
            
        }
    }
    render() {
        return (
            <div id="mobile_sidebar">

                <input type="checkbox" id="menuToggler" class="input-toggler" value="1" autofocus="true"  checked={this.state.menuIsOpen} />
                <label id="menuTogglerLabel" class="menu-toggler" role="button" aria-pressed="false" aria-expanded="false" aria-label="Navigation button"  onClick={()=> this.menuClick()}>
                    <span class="menu-toggler-line"></span>
                    <span class="menu-toggler-line"></span>
                    <span class="menu-toggler-line"></span>
                </label>
                <div className="mobile_sidebar_content">
                    <div className="button-container">
                        <Link to="works" className={typeof window !== 'undefined' && window.location.pathname.includes('works') ? 'active' : ''}>WORK</Link>
                        <Link to="about" className={typeof window !== 'undefined' && window.location.pathname.includes('about') ? 'active' : ''}>ABOUT</Link>
                        <Link to="resume" >RESUME</Link>
                    </div>
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
export default (MobileSidebar);