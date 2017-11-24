import React from "react";
import { shallow } from "enzyme";

import Content from "./content";
import ContentPdf from "./contentPdf";
import ContentHtml from "./contentHtml";

describe("Content Component", () => {
  
  it('should return the ContentPdf icon if type is pdf', () => {
    const wrapper = shallow(<Content type="pdf" />)
    expect(wrapper.find(ContentPdf)).toBeDefined()
  })
  
  it('should return the ContentHtml icon if type is html', () => {
    const wrapper = shallow(<Content type="html" />)
    expect(wrapper.find(ContentHtml)).toBeDefined()
  })
  
});