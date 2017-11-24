import React, { Component } from 'react';
import content from '../content-list/content.json'

export default class ContentDetail extends Component {
  componentWillMount() {
    const id = parseInt(this.props.match.params.id, 10)
    let filter = content.filter(c => c.id === id)[0]
    this.setState({
      content: filter
    })
  }

  render() {
    const {content} = this.state;
    return (
      <div className="ContentDetail">
        <h4>
          <a href={content.url}>{content.title}</a>
        </h4>
        <p>{content.description}</p>
      </div>
    );
  }
}