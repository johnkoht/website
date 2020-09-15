import React from "react"
import { Link } from "gatsby"
import Modal from 'react-modal';
import MenuIcon from "images/menu-icon.svg"

import "./navigation-modal.scss"

Modal.setAppElement(`#___gatsby`);

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
};

class NavigationModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ showModal: true })
  }

  closeModal() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <>
        <button onClick={this.openModal} className="btn-menu ml-auto">
          <img src={MenuIcon} alt="Navigation Menu" />
        </button>

        <Modal isOpen={this.state.showModal} contentLabel="Example Modal" className="navigation-modal">
          <button onClick={this.closeModal} className="btn-close">
            close
          </button>

          <nav>
            <ul class="nav">
              <li><Link to="/about/">About</Link></li>
              <li><Link to="/work/">Work</Link></li>
              <li><Link to="/photos/">Photos</Link></li>
              <li><Link to="/contact/">Contact</Link></li>
            </ul>
          </nav>
        </Modal>
      </>
    )
  }
}

export default NavigationModal
