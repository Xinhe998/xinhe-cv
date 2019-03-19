import React from "react"
import PropTypes from 'prop-types';
import Sidebar from './Sidebar'
import { Helmet } from "react-helmet";
import MobileSidebar from './MobileSidebar'

import i18n from './I18n'
import { withNamespaces } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';

import '../style/layout.scss'
const Layout = ({ children, data, t }) => (
    <I18nextProvider i18n={i18n}>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Xinhe Hsu</title>
            <meta name="description" content="A Web Developer, always keeping up with new trends in tech." />
            <meta name="keywords" content="工程師,前端,網頁,React,JavaScript,CSS,GatsbyJS,作品集,履歷,軟體開發" />
        </Helmet>
        <div>
            <MobileSidebar/>
            <Sidebar />
            <div className="layout-content">
                {children}

            </div>
        </div>
    </I18nextProvider>
)
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default withNamespaces('translation')(Layout);