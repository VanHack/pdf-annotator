import React from "react";
import { mount } from "enzyme";
import ContentList from "./contentList";
import content from "./content.json";

describe("ContentList Component", () => {
  let props;
  let mountedContentList;
  const contentList = () => {
    if (!mountedContentList) {
      mountedContentList = mount(
        <ContentList {...props} />
      );
    }
    return mountedContentList;
  }

  beforeEach(() => {
    props = {
      items: [],
      fetchContent: jest.fn()
    };
    mountedContentList = undefined;
  });
  
  it("always renders an ul", () => {
    const ul = contentList().find("ul");
    expect(ul.length).toBeGreaterThan(0);
  });

  describe('passing items', () => {
    beforeEach(() => {
      props.items = content
    })
    it('should be rendered', () => {
      const lis = contentList().find("ul > li");
      expect(lis.length).toEqual(content.length)
    })
  })
});