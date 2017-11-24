import React, { Component } from 'react';


export default class ContentHtml extends Component {
  constructor() {
    var s = document.createElement('script');
    s.src = 'https://hypothes.is/embed.js';
    document.head.appendChild(s);
    super()
  }

  render() {
    return (
      <div>
        <figure className="pull-left">
          <img src={this.props.image} alt={this.props.title} />
          <div dangerouslySetInnerHTML={{__html: this.props.content}} />
        </figure>
      </div>
    )
  }
}