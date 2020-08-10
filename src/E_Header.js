import React from 'react';
import PropTypes from 'prop-types';   // ini untuk validasi tipe props


function E_Header(props) {
  console.log(props)
  return <header>
    <h1>ini di E_Header {props.children}</h1>
  </header>
}

E_Header.propTypes = {
  children: PropTypes.string.isRequired
}

export default E_Header;