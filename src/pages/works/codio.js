import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import Lightbox from "react-images"
import { withI18next } from "gatsby-plugin-i18next"
import { withNamespaces, Trans } from "react-i18next"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import "../../style/work.scss"
import "../../style/work_detail.scss"
import codio from "../../Assets/codio.png"
import codio_1 from "../../Assets/codio-1.png"
import codio_2 from "../../Assets/codio-2.png"
import codio_3 from "../../Assets/codio-3.png"

import structuredData from "../../configs/structuredData"

class Codio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lightboxIsOpen: false,
      lightbox_current_img: 0,
    }
    this.handleScroll = this.listenScrollEvent.bind(this)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent, true)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenScrollEvent, true)
    var container = document.getElementById("work-detail-container")
    container.classList.remove("notransition")
  }
  listenScrollEvent = () => {
    var container = document.getElementById("work-detail-container")

    var header = document.getElementById("be-header-when-scroll")
    var sticky = document.querySelector(".project-desc-container").offsetTop
    var h = document.querySelector(".project-desc-container").offsetHeight
    var isMobile = typeof window !== "undefined" && window.innerWidth < 960
    if (window.pageYOffset > sticky + h) {
      if (!isMobile) {
        container.classList.add("notransition")
        header.classList.add("sticky")
      }
    } else {
      if (!isMobile) header.classList.remove("sticky")
    }
  }
  openLightbox = img_index => {
    this.setState({
      lightboxIsOpen: true,
      lightbox_current_img: img_index,
    })
  }
  closeLightbox = () => {
    this.setState({
      lightboxIsOpen: false,
    })
  }
  lightboxGotoPrevious = () => {
    this.setState({
      lightbox_current_img: this.state.lightbox_current_img - 1,
    })
  }
  lightboxGotoNext = () => {
    this.setState({
      lightbox_current_img: this.state.lightbox_current_img + 1,
    })
  }
  render() {
    const { t, data } = this.props
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Codio - Xinhe Hsu</title>
          <meta
            name="description"
            content="A Web Developer, always keeping up with new trends in tech."
          />
          <meta
            name="keywords"
            content="工程師,前端,網頁,React,JavaScript,CSS,GatsbyJS,作品集,履歷,軟體開發"
          />
        </Helmet>
        <div
          id="work-detail-container"
          onScroll={this.listenScrollEvent.bind(this)}
        >
          <Img
            fluid={data.codio.childImageSharp.fluid}
            className="project-img"
          />
          <div className="project-desc-container">
            <div id="be-header-when-scroll">
              <Link to="/works">
                <div className="close-btn" />
              </Link>
              <p className="project-title">Codio</p>
            </div>

            <p className="project-desc">{t("codio_desc")}</p>
            <div className="project-detail">
              <div>
                <p className="project-role-title">{t("role")}:</p>
                <label className="role">{t("web_front_end_dev")}</label>
              </div>
              <div>
                <p className="project-program-title">{t("program_lang")}：</p>
                <label className="programming_language">React.js</label>
                <label className="programming_language">Redux</label>
                <label className="programming_language">Redux-Thunk</label>
                <label className="programming_language">SCSS</label>
              </div>
            </div>
          </div>
          <div className="project-detail_content">
            <h1>{t("project_overview")}</h1>
            <p>{t("codio_overview1")}</p>
            <p>{t("ghowa_overview2")}</p>
            <h1>{t("project_brief")}</h1>
            <p>
              {t("codio_brief1")}
              <br />
              {t("codio_brief2")}
              <br />
              <Trans i18nKey="codio_brief3">
                This project is still ongoing and <b>planned to be launched </b>{" "}
                in 2020.
              </Trans>
            </p>
            <h1>{t("at_a_glance")}</h1>
            <div className="image-group">
              <Lightbox
                images={[{ src: codio_1 }, { src: codio_3 }, { src: codio_2 }]}
                isOpen={this.state.lightboxIsOpen}
                onClickPrev={() => this.lightboxGotoPrevious()}
                onClickNext={() => this.lightboxGotoNext()}
                onClose={() => this.closeLightbox()}
                currentImage={this.state.lightbox_current_img}
                backdropClosesModal={true}
                enableKeyboardInput={true}
                showImageCount={false}
              />
              <div
                onClick={() => this.openLightbox(0)}
                className="web-screenshot"
              >
                <Img fluid={data.codio_1.childImageSharp.fluid} style={{ height: '300px' }} imgStyle={{ height: '100%', width: 'auto'}} />
              </div>
              <div
                onClick={() => this.openLightbox(1)}
                className="web-screenshot"
              >
                <Img fluid={data.codio_3.childImageSharp.fluid} style={{ height: '300px'}} imgStyle={{ height: '100%', width: 'auto'}} />
              </div>
              <div
                onClick={() => this.openLightbox(2)}
                className="web-screenshot"
              >
                <Img fluid={data.codio_2.childImageSharp.fluid} style={{ height: '300px'}} imgStyle={{ height: '100%', width: 'auto'}} />
              </div>
            </div>
            <h1>{t("outcome")}</h1>
            <p>
              <b>{t("awards")}</b>
            </p>
            <ul>
              <li>
                <b>{t("first_prize")},</b> {t("innoserve")}:{" "}
                {t("titansoft_agile")}, 2019
              </li>
              <li>
                <b>{t("third_prize")},</b>{" "}
                {t("project_information_distribution_science")}, 2019
              </li>
            </ul>
          </div>
          <h1 className="sp-block">
            <strong>．．．</strong>
          </h1>
          <div className="email-me">
            <p>{t("sent_me_email_in_project_page")}</p>
            <a href="mailto:xinhe998@gmail.com">xinhe998@gmail.com</a>
          </div>
          <div className="navigate-project-btn-container only-display-next">
            <Link to=""> ← {t("prev_project")}</Link>
            <Link to="works/ghowa">{t("next_project")} → </Link>
          </div>
        </div>
        <p className="copyright">© Xinhe Hsu 2020.</p>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `${JSON.stringify(structuredData.codio)}`,
          }}
        />
      </Layout>
    )
  }
}

export default withI18next()(withNamespaces("translation")(Codio))
export const query = graphql`
  query {
    codio: file(relativePath: { eq: "codio.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    codio_1: file(relativePath: { eq: "codio-1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    codio_2: file(relativePath: { eq: "codio-2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    codio_3: file(relativePath: { eq: "codio-3.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
