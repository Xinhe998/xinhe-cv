import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import githubImg from "../Assets/github.png"
import linkdinImg from "../Assets/linkdin.png"
import mediumImg from "../Assets/medium.png"
import "../style/index.scss"
import MobileSidebar from "./MobileSidebar"
import structuredData from "../configs/structuredData"

const socialMediaBtnOnClick = mediaType => {
  window.gtag("event", "SocialMedia", {
    event_category: "button click",
    event_label: mediaType,
  })
}

const HomeLayout = ({ children }) => (
  <div id="home-page">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Xinhe Hsu</title>
      <meta
        name="description"
        content="A Web Developer, always keeping up with new trends in tech."
      />
      <meta
        name="keywords"
        content="Xinhe,許歆荷,工程師,前端,網頁,React,JavaScript,CSS,GatsbyJS,作品集,履歷,軟體開發,portfolio"
      />
      <meta property="og:url" content="https://xinhehsu.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Xinhe Hsu" />
      <meta property="og:site_name" content="Xinhe Hsu" />
      <meta
        property="og:description"
        content="A Web Developer, always keeping up with new trends in tech."
      />
      <meta property="og:image" content="https://i.imgur.com/gopa6mj.png" />
      <meta
        property="og:image:alt"
        content="A Web Developer, always keeping up with new trends in tech."
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1500" />
      <meta property="og:image:height" content="980" />
      <meta name="google-site-verification" content="QrqU_eG9e5sLsBYYi4Oy0q2WIy9cnQpeHOfwCbiltmw" />
    </Helmet>
    <MobileSidebar />
    <div className="header">
      <div className="menu">
        <Link to="works">Work</Link>
        <Link to="about">About</Link>
        <a
          href="https://xinhehsu.com/xinhe-resume.pdf"
          target="_blank"
          onClick={() => {
            window.gtag("event", "Resume", {
              event_category: "button click",
              event_label: "resume",
            })
          }}
        >
          Resume
        </a>
      </div>
    </div>
    <div className="content-wrapper">{children}</div>
    <div className="foo">
      <div className="icon-container">
        <a
          href="https://github.com/Xinhe998"
          onClick={() => socialMediaBtnOnClick("Github")}
          target="_blank"
        >
          <img src={githubImg} />
        </a>
        <a
          href="https://linkedin.com/in/xinhe998/"
          onClick={() => socialMediaBtnOnClick("Linkedin")}
          target="_blank"
        >
          <img src={linkdinImg} />
        </a>
        <a
          href="https://medium.com/@xinhe998"
          onClick={() => socialMediaBtnOnClick("Medium")}
          target="_blank"
        >
          <img src={mediumImg} />
        </a>
      </div>
    </div>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `${JSON.stringify(structuredData.basic)}`,
      }}
    />
  </div>
)
HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
