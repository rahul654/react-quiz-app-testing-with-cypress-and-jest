import React, { Component } from "react";
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, ShallowWrapper } from "enzyme"; //import mount and ReactWrapper for testing
//import component that is to be tested
import QuestionCard from "../../components/QuestionCard";

//Type
import { AnswerObject } from '../../App';

configure({adapter: new Adapter()});

const myMock = jest.fn();

interface Props {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

describe("App Testing", () => {
  //create a wrapper object
  let wrapper: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>;

  let questionCardProps: Props = {
    question : "How are you",
    answers : ['fine', 'good', 'bad', 'abc'],
    callback : myMock,
    userAnswer : undefined,
    questionNr : 1,
    totalQuestions : 10
  }

  //mount the component and store it in the wrapper before each test
  beforeEach(() => {
    wrapper = shallow(<QuestionCard {...questionCardProps}/>);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("component test", () => {
    const headingTag = wrapper.find('[data-test-question="question-number"]');
    expect(headingTag.length).toBe(1)
    expect(headingTag.text().includes('Question: 1 / 10')).toBe(true);

    const answerButton1 = wrapper.find('[data-test-answer="answer-button-0"]');
    expect(answerButton1.exists()).toBeTruthy()
    const answerButton2 = wrapper.find('[data-test-answer="answer-button-1"]');
    expect(answerButton2.exists()).toBeTruthy()
    const answerButton3 = wrapper.find('[data-test-answer="answer-button-2"]');
    expect(answerButton3.exists()).toBeTruthy()
    const answerButton4 = wrapper.find('[data-test-answer="answer-button-3"]');
    expect(answerButton4.exists()).toBeTruthy()

    answerButton1.simulate('click');
    expect(myMock.mock.calls.length).toEqual(1);
  })
}) 
