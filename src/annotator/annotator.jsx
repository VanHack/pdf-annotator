import React, { Component } from 'react';
import rangy from 'rangy'
import rangyHighlight from 'rangy/lib/rangy-highlighter';
import rangyClassApplier from 'rangy/lib/rangy-classapplier';

import TextSelector from './selector'
import Bubble from './bubble'

import './annotator.css';

export default class Annotator extends Component {
  state = {
    showBubble: false,
    bubblePosition: {}
  }

  constructor() {
    super()
    rangy.init()

    const self = this;

    this.highlighter = rangyHighlight.createHighlighter();
    
    this.highlighter.addClassApplier(rangyClassApplier.createClassApplier("highlight", {
      ignoreWhiteSpace: true,
      tagNames: ["span", "a"],
      elementProperties: {
        href: "",
        onclick: function (e) {
          e.preventDefault();
          var highlight = self.highlighter.getHighlightForElement(this);
          alert('show annotator pane '+ highlight.id);
        }
      }
    }));

    this.createHighlight = this.createHighlight.bind(this)
    this.createAnnotation = this.createAnnotation.bind(this)
    this.onSelectionChange = this.onSelectionChange.bind(this)
  }

  createHighlight() {
    this.highlighter.highlightSelection("highlight");
    this.clearSelection();
  }

  createAnnotation() {
    this.highlighter.highlightSelection("annotation");
    this.clearSelection();
  }

  clearSelection() {
    window.getSelection().removeAllRanges();
  }

  onSelectionChange(sel) {
    var state = this.state
    state.showBubble = !sel.isCollapsed;
    if (state.showBubble) {
      var container = document.querySelector('.main-container');
      var boundary = sel._ranges[0].nativeRange.getBoundingClientRect();
      const top = window.pageYOffset - (document.clientTop || 0);
      state.bubblePosition = {
        left: (boundary.left + boundary.width / 2) - 35 - container.offsetLeft,
        top: boundary.top - 60 + top
      }
    }
    
    this.setState(state)
  }

  render() {
    const { showBubble, bubblePosition } = this.state;
    return (
      <div className="Annotator-container">
        <TextSelector onSelectionChange={this.onSelectionChange}>
          <Bubble show={showBubble} position={bubblePosition} onHighlight={this.createHighlight} />
          {this.props.children}
        </TextSelector>
      </div>
    )
  }
}

