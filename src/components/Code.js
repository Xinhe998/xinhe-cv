import React from "react"
import '../style/code.scss'

class Code extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div id="code-feature-section">
                <div className="header"></div>
                <div className="content">
                    <div className="block block1"></div>
                    <div className="block block2"></div>
                    <div className="block block3"></div>
                    <div className="block block4"></div>
                    <div className="block block5"></div>
                    <div className="block block6"></div>
                    <div className="motto">
                        <p>Elegant Lifestyle,</p>
                        <p>Elegant Code</p>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default (Code)
