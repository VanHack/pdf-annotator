import React, { Component } from 'react';
import content from '../content-list/content.json'

import AuthorDetail from '../author-detail/authorDetail'

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
    const author = {
      author: content.author,
      author_url: content.author_url
    }
    return (
      <div className="ContentDetail">
        <div className="page-header">
          <h1>
            <a href={content.url}>{content.title}</a>
            &nbsp;
            <AuthorDetail {...author} />
          </h1>
        </div>
        <p>{content.description}</p>
      </div>
    );
  }
}