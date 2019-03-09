import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

import '../../style/work.scss'
import '../../style/work_detail.scss'
import ghowa from '../../Assets/ghowa_feature_img.png'
import ghowa_app_1 from '../../Assets/ghowa-app-1.png'
import ghowa_app_2 from '../../Assets/ghowa-app-2.png'

import PageTransition from 'gatsby-plugin-page-transitions';


class Ghowa extends React.Component {
    constructor(props) {
        super(props)
        this.handleScroll = this.listenScrollEvent.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent, true);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent, true);
    }
    listenScrollEvent = () => {
        var header = document.getElementById("be-header-when-scroll");
        var sticky = document.querySelector(".project-desc-container").offsetTop;
        var h = document.querySelector(".project-desc-container").offsetHeight;

        if (window.pageYOffset > (sticky + h)) {
            header.classList.add("sticky");
            document.querySelector(".project-detail_content").style.marginTop = '150px';
        } else {
            header.classList.remove("sticky");
            document.querySelector(".project-detail_content").style.marginTop = '38px';
        }
    }
    render() {
        return (
            <Layout>
                <PageTransition
                    defaultStyle={{
                        transition: 'transform 300ms ease-in',
                        transform: 'scale(0.5)',
                    }}
                    transitionStyles={{
                        entering: { transform: 'scale(1)' },
                        entered: { transform: 'scale(1)' },
                        exiting: { transform: 'scale(0.5)' },
                    }}
                    transitionTime={300}
                >
                    <div id="work-detail-container" onScroll={this.listenScrollEvent.bind(this)}>
                        <PageTransition
                            defaultStyle={{
                                transition: 'opacity 500ms ease-in',
                                opacity: 0,
                                width: '100%',
                            }}
                            transitionStyles={{
                                entering: { opacity: 1 },
                                entered: { opacity: 1 },
                                exiting: { opacity: 0 },
                            }}
                            transitionTime={500}
                        >
                            <img src={ghowa} className="project-img" />
                            <div className="project-desc-container">
                                <div id="be-header-when-scroll">
                                    <Link to="/works"><div className="close-btn"></div></Link>
                                    <p className="project-title">Ghowa</p>
                                </div>

                                <p className="project-desc">An app for splitting a bill with friends</p>
                                <div className="project-detail">
                                    <div>
                                        <p className="project-role-title">Role:</p>
                                        <label className="role">Back-End Develop</label>
                                    </div>
                                    <div>
                                        <p className="project-program-title">Programming Languages：</p>
                                        <label className="programming_language">Node.js</label>
                                        <label className="programming_language">Express.js</label>
                                        <label className="programming_language">MySQL</label>
                                    </div>
                                </div>
                            </div>
                            <div className="project-detail_content">
                                <h1>Project Overview</h1>
                                <p>Cross-school cooperation for the Undergraduate Research Project in NTUE.</p>
                                <h1>At a Glance</h1>
                                <div className="image-group">
                                    <img src={ghowa_app_1} />
                                    <img src={ghowa_app_2} />
                                </div>
                            </div>
                        </PageTransition>
                    </div>
                </PageTransition>
            </Layout>
        )
    }
}

export default (Ghowa);