import React, { Component } from 'react';


export default class ContentHtml extends Component {
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