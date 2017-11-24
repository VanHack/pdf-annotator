import React from 'react';

import ContentPdf from './contentPdf'
import ContentHtml from './contentHtml'

export default props => (
  props.type === 'pdf' ?
  <ContentPdf {...props} /> :
  <ContentHtml {...props} />
)