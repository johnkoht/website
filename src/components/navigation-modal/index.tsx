import React from "react"
import { Link } from "gatsby"
import Modal from "react-modal"
import MenuIcon from "images/menu-icon.inline.svg"
import Hamburger from "components/hamburger"
import classNames from "classnames"

import "./navigation-modal.scss"

Modal.setAppElement(`#___gatsby`)

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.58)",
  },
  content: {
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    maxWidth: "960px",
    margin: "32px auto",
    padding: 0,
    border: 0,
  },
}

class NavigationModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    let currentState = this.state.showModal
    this.setState({ showModal: !currentState })
  }

  render() {
    return (
      <>
        <Hamburger
          onClick={this.toggleModal}
          classes={classNames("btn-menu ml-auto hamburger--elastic", {
            active: this.state.showModal,
          })}
        />

        <Modal
          isOpen={this.state.showModal}
          contentLabel="Example Modal"
          className="navigation-modal"
          closeTimeoutMS={500}
        >
          <nav>
            <ul class="nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link
                  to="https://www.flickr.com/photos/johnkoht/"
                  className="link-external"
                >
                  Photos
                </Link>
              </li>
            </ul>
          </nav>
        </Modal>
      </>
    )
  }
}

export default NavigationModal
