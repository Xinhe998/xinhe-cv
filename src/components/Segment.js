import React from "react"
import PropTypes from 'prop-types';
import '../style/segment.scss'
import i18n from "../components/I18n";

class Segment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lang: localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') : 'en'
        }
    }
    handleChange = (lang) => {
        this.setState({
            lang: lang
        })
        i18n.changeLanguage(lang)
    }
    render() {
        return (
            <div id="segment" className={this.props.isInSidebar? 'is_in_sidebar' : '' }>
                <input id="seg1" type="radio" name="radioBtn" checked={this.state.lang === 'en'} onChange={()=> this.handleChange('en')}  />

                <label className="labels" htmlFor="seg1">EN</label>
                
                <input id="seg2" type="radio" name="radioBtn" checked={this.state.lang === 'tw'} onChange={()=> this.handleChange('tw')} />

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
