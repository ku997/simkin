import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
import './styles.scss'

export function NodeGroup({children, isError, Node, ...props}) {
  return (
    <Node.Group {...props} className={ `nodeGroup ${isError ? 'hasError' : ''}`}>
        {children}
    </Node.Group>
  );
}
