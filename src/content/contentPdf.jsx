import React, { Component } from 'react';
import { Document, Page, setOptions } from 'react-pdf/build/entry.webpack';

import './contentPdf.css'

setOptions({
  cMapUrl: 'cmaps/',
  cMapPacked: true,
});

export default class ContentPdf extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  constructor(props) {
    super(props)
    this.onDocumentLoad = this.onDocumentLoad.bind(this)
  }

  onDocumentLoad({ numPages }) {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="ContentPdf__container">
        <div className="ContentPdf__document">
          <Document
            file={this.props.content}
            onLoadSuccess={this.onDocumentLoad}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
        </div>
      </div>
    );
  }
}