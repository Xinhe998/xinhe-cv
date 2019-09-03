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
            <meta property="og:url" content="https://xinhehsu.com/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Xinhe Hsu" />
            <meta property="og:site_name" content="Xinhe Hsu" />
            <meta property="og:description" content="A Web Developer, always keeping up with new trends in tech." />
            <meta property="og:image" content="https://i.imgur.com/gopa6mj.png" />
            <meta property="og:image:alt" content="A Web Developer, always keeping up with new trends in tech." />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1500" />
            <meta property="og:image:height" content="980" />
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