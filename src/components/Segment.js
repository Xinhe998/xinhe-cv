import React from "react"
import PropTypes from 'prop-types';
import '../style/segment.scss'
// import i18n from "i18next";

class Segment extends React.Component {
    constructor(props){
        super(props)
    }
    handleChangeLanguage = (lang) =>{
        // i18n.changeLanguage(lang)
    }
      
    render() {
        // const { i18n } = this.props
    
        
        return (
            <div id="segment" className={this.props.isInSidebar? 'is_in_sidebar' : '' }>
                <input id="seg1" type="radio" name="radioBtn" checked  onClick={() => this.handleChangeLanguage('en')} />

                <label className="labels" htmlFor="seg1">EN</label>
                
                <input id="seg2" type="radio" name="radioBtn"  onClick={() => this.handleChangeLanguage('zh-tw')} />

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