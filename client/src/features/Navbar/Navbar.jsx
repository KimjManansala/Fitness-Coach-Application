import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

import PropTypes from 'prop-types'
import { useHistory } from 'react-router';
import { REACT_URLS } from '../../app/api_and_urls';

const Navbar = props => {
  const [activeItem, setActiveItem] = useState("/");
  const history = useHistory();

  const handleNavSelected = (path) => {
    history.push(path);
    setActiveItem(path);
  }

  return (
      <Menu>
        <Menu.Item header>Your Fitness tracker</Menu.Item>
        <Menu.Item
          name='Core Metrics'
          active={activeItem.includes(REACT_URLS.CORE_METICS)}
          onClick={() => {  handleNavSelected(REACT_URLS.CORE_METICS) }}
        />
      </Menu>
  )
}

Navbar.propTypes = {

}

export default Navbar
