import React from "react"
import PropTypes from 'prop-types';
import '../style/segment.scss'

class Segment extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div id="segment" className={this.props.isInSidebar? 'is_in_sidebar' : '' }>
                <input id="seg1" type="radio" name="radioBtn" checked onChange={()=>{}} />

                <label className="labels" htmlFor="seg1">EN</label>
                
                <input id="seg2" type="radio" name="radioBtn" />

                <label className="labels" htmlFor="seg2">繁中</label>
                
                <div id="bckgrnd"></div>
            </div> 
        )
    }
}
Segment.propTypes = {
    isInSidebar: PropTypes.bool
}
export default (Segment)
