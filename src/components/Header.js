import React from "react";
import PropTypes from "prop-types";

import LinkOrAnchor from "./LinkOrAnchor";

const Header = ({ title }) => (
  <div className="header">
    <LinkOrAnchor className="header-link" to="/">
      <h1 className="site-title">{title}</h1>
    </LinkOrAnchor>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "",
};

export default Header;
