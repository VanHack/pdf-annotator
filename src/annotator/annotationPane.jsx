import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import { createAnnotation, removeAnnotation } from './actions'
import {AnnotationFormContainer} from './annotationForm'
import AnnotationList from './annotationList'

import './annotationPane.css';

export default class AnnotationPane extends Component {
  show = false

  constructor() {
    super()
    this.createAnnotation = this.createAnnotation.bind(this)
  }

  componentWillMount() {
    
  }

  createAnnotation(values) {
    const data = {
      page: window.location.toString(),
      highlight: this.props.highlight,
      annotation: {...values, date: new Date()}
    }
    this.props.createAnnotation(data)
  }

  render() {
    return (
      <div className={"Annotation-container " + (this.props.show ? "" : "hide")} style={this.props.position}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <span className="pull-right" onClick={this.props.onHide}><i className="fa fa-times"></i></span>
            Annotations
          </div>
          <div className="panel-body">
            <AnnotationFormContainer onSubmit={this.createAnnotation} />
            <AnnotationList data={this.props.annotations} />
          </div>
        </div>
      </div>
    )
  }
}

AnnotationPane.defaultProps = {
  show: false,
  position: {}
};

const mapStateToProps = (state, props) => {
  const highlights = state.highlights[window.location.toString()];
  const annotations = highlights && highlights.filter(f => f.id === props.highlight).length ? highlights.filter(f => f.id === props.highlight)[0].annotations || [] : []
  return {annotations}
}
const mapDispatchToProps = dispatch => bindActionCreators({ createAnnotation, removeAnnotation }, dispatch)

export const AnnotationPaneContainer = connect(mapStateToProps, mapDispatchToProps)(AnnotationPane)