import React from "react"
import "../style/sidebar.scss"
import "../style/mobilesidebar.scss"
import Segment from "../components/Segment"
import { Link } from "gatsby"

import githubImg from "../Assets/github.png"
import linkdinImg from "../Assets/linkdin.png"
import mediumImg from "../Assets/medium.png"

class MobileSidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuIsOpen: false,
      isMobile: typeof window !== "undefined" && window.innerWidth < 960,
    }
  }
  menuClick = () => {
    if (!this.state.menuIsOpen) {
      //open menu
      this.setState({
        menuIsOpen: true,
      })
      document.querySelector("body").classList.add("mobile_sidebar_open")
    } else {
      //close menu
      document.querySelector(".mobile_sidebar_content").classList.add("closing")
      document.getElementById("menuTogglerLabel").classList.add("closing")
      setTimeout(() => {
        this.setState({
          menuIsOpen: false,
        })
        document
          .querySelector(".mobile_sidebar_content")
          .classList.remove("closing")
        document.getElementById("menuTogglerLabel").classList.remove("closing")
      }, 300)
      document.querySelector("body").classList.remove("mobile_sidebar_open")
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.windowResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.windowResize)
  }
  windowResize = () => {
    var isMobile = typeof window !== "undefined" && window.innerWidth < 960
    if (isMobile) {
      this.setState({
        isMobile: true,
      })
    } else {
      this.setState({
        isMobile: false,
      })
    }
  }
  render() {
    var isInnerPage =
      typeof window !== "undefined" &&
      (window.location.pathname.includes("works") ||
        window.location.pathname.includes("about"))
    return (
      <div
        id="mobile_sidebar"
        className={`${this.state.menuIsOpen ? "open" : ""}`}
      >
        <input
          type="checkbox"
          id="menuToggler"
          className="input-toggler"
          value={1}
          autoFocus={true}
          checked={this.state.menuIsOpen}
          onChange={() => {}}
        />
        <label
          id="menuTogglerLabel"
          className="menu-toggler"
          role="button"
          aria-pressed="false"
          aria-expanded="false"
          aria-label="Navigation button"
          onClick={() => this.menuClick()}
        >
          <span className="menu-toggler-line" />
          <span className="menu-toggler-line" />
          <span className="menu-toggler-line" />
        </label>
        <div className="mobile_sidebar_content">
          {this.state.isMobile && isInnerPage ? <Segment /> : null}
          <div className="button-container">
            {isInnerPage ? (
              <Link
                to="/"
                onClick={() =>
                  document
                    .querySelector("body")
                    .classList.remove("mobile_sidebar_open")
                }
              >
                HOME
              </Link>
            ) : null}
            <Link
              to="works"
              onClick={() =>
                document
                  .querySelector("body")
                  .classList.remove("mobile_sidebar_open")
              }
              className={
                typeof window !== "undefined" &&
                window.location.pathname.includes("works")
                  ? "active"
                  : ""
              }
            >
              WORK
            </Link>
            <Link
              to="about"
              onClick={() =>
                document
                  .querySelector("body")
                  .classList.remove("mobile_sidebar_open")
              }
              className={
                typeof window !== "undefined" &&
                window.location.pathname.includes("about")
                  ? "active"
                  : ""
              }
            >
              ABOUT
            </Link>
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
              RESUME
            </a>
          </div>
          <div className="icon-container">
            <a href="https://github.com/Xinhe998">
              <img src={githubImg} />
            </a>
            <a href="https://linkedin.com/in/xinhe998/">
              <img src={linkdinImg} />
            </a>
            <a href="https://medium.com/@xinhe998">
              <img src={mediumImg} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export default MobileSidebar
