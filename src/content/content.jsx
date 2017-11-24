import React, { Component } from 'react';

import ContentPdf from './contentPdf'
import ContentHtml from './contentHtml'

export default class Content extends Component {
  
  constructor() {
    var s = document.createElement('script');
    s.src = 'https://hypothes.is/embed.js';
    document.head.appendChild(s);
    super()
  }

  render() {
    return (
      this.props.type === 'pdf' ?
      <ContentPdf {...this.props} /> :
      <ContentHtml {...this.props} />
    )
  }
}