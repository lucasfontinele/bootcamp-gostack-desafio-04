import React from 'react'
import PropTypes from "prop-types";

import { Container } from "./styles";

export default function Avatar({ src, alt }) {
  return <Container src={src} alt={alt} />
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}
