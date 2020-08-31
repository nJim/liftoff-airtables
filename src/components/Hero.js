import React from "react";
import PropTypes from "prop-types";

const Hero = ({ siteDescription }) => {
  return (
    <>
      <p className="site-description">{siteDescription}</p>
      <p className="site-about">
        This website is a sandbox to experiment with using{" "}
        <a href="https://airtable.com/">Airtable</a> as a backend CMS. As proof
        of concept, this project took just a couple of hours of work. See the
        code and connect with me on{" "}
        <a href="https://github.com/nJim/liftoff-airtables">Github</a>.
      </p>
    </>
  );
};

Hero.defaultProps = {
  siteDescription: process.env.SITE_DESCRIPTION,
};

Hero.propTypes = {
  siteDescription: PropTypes.string,
};

export default Hero;
