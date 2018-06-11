import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import InputToDo from '../src/js/components/InputToDo'

describe('<InputToDo />', () => {

  it('should render タイトル：', () => {
    const wrapper = mount(<InputToDo />);
    expect(wrapper.text()).to.contain('タイトル：');
  });

  it('should render 内容：', () => {
    const wrapper = mount(<InputToDo />);
    expect(wrapper.text()).to.contain('内容：');
  });

  it('allows us to set props', () => {
    const wrapper = mount(<InputToDo title='たいとる'/>);
    expect(wrapper.props().title).to.equals('たいとる');
  });

  /*it('should render an `.icon-star`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.icon-star')).to.have.length(1);
  });

  it('should render children when passed in', () => {
    const wrapper = shallow(
      <App>
        <div className="unique" />
      </App>
    );
    expect(wrapper.contains(<div className="unique" />)).to.be.true;
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <Foo onButtonClick={onButtonClick} />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.be.true;
  });*/

});