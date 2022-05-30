import React, { Component } from 'react';
import './Navbar.css';
import menu from '../../assets/images/icons/menu.svg'
import linkedin from '../../assets/images/icons/linkedin.svg'
import github from '../../assets/images/icons/github.svg'

const routes = [
  {
    name: "Compétences",
    path: "/"
  },
  {
    name: "Etudes",
    path: "/"
  },
]

const contacts = [
  {
    name: "Linkedin",
    image: linkedin,
    path: "https://www.linkedin.com/in/baptistebenoitdev/"
  },
  {
    name: "Github",
    image: github,
    path: "https://github.com/Gun1dex"
  },
]

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar: false
    }
    this.updateState = this.updateState.bind(this)
  }


  updateState() {
    this.setState({
      showSideBar: !this.state.showSideBar
    })
  }

  render() {
    return (
      <div className="Navbar">
        {this.state.showSideBar ?
          <div className='SideBar'>
            {routes.map((route, i) => <a key={i} href={route.path}>{route.name}</a>)}
          </div> : ''}
        <div className='Links'>
          <div className='Routes'>
            {routes.map((route, i) => <a key={i} href={route.path}>{route.name}</a>)}
            <img alt='Avatar Baptiste BENOIT' src={menu} onClick={this.updateState}></img>
          </div>
          <div className='Contact'>
            {contacts.map((contact, i) => <a key={i} href={contact.path} target="_blank"><img alt={contact.name} src={contact.image}></img></a>)}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
