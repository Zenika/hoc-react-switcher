import React, { PropTypes } from 'react'

import styles from './Examples.scss'

const Examples = ({ style, className }) => (
  <div style={style} className={`${styles.examples} ${className}`} />
)

Examples.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
}

export default Examples
