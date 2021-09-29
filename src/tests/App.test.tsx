import React, { Component } from "react";
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, ShallowWrapper } from "enzyme"; //import mount and ReactWrapper for testing
//import component that is to be tested
import App from "../App";

configure({adapter: new Adapter()});

describe("App Testing", () => {
  //create a wrapper object
  let wrapper: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>;

  //mount the component and store it in the wrapper before each test
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render heading", () => {
    const headingTag = wrapper.find('[data-jest-test="jest-heading-test"]');
    expect(headingTag.length).toBe(1)
    expect(headingTag.text().includes('REACT QUIZ')).toBe(true);
  })

  it("component test", () => {
    const startButton = wrapper.find('[data-test-start="start-button"]');
    expect(startButton.length).toBe(1)
    expect(startButton.text().includes('Start')).toBe(true);

    const scoreValueBefore = wrapper.find('[data-test-score="score-value"]');
    expect(scoreValueBefore.exists()).toBeFalsy()
    const answerButtonBefore = wrapper.find('[data-test-answer="answer-button-0"]');
    expect(answerButtonBefore.exists()).toBeFalsy()

    startButton.simulate('click');
    const scoreValue = wrapper.find('[data-test-score="score-value"]');
    expect(scoreValue.exists()).toBeTruthy()

    const nextButton = wrapper.find('[data-test-next="next-button"]');
    expect(nextButton.exists()).toBeFalsy()
  })
})
