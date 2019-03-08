import React from "react"
import Layout from "../components/Layout"

import '../style/work.scss'

class Work extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Layout>
                <div id="work-page">
                    <p className="page-title">WORK</p>
                    <hr />
                    <p className="page-desc">I spent most of the time on web development.</p>
                    <ul className="timeline-blocks-container">
                        <li className="timeline-milestone">
                            <div class="timeline-date">

                            </div>
                            <div class="timeline-action">

                            </div>
                        </li>
                    </ul>
                </div>
            </Layout>
        )
    }
}

export default (Work);