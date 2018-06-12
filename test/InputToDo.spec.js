import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme'
import sinon from 'sinon';
import { assert, expect } from 'chai'
import InputToDo from '../src/js/components/InputToDo'

describe('<InputToDo />', () => {

  it('should render タイトル：', () => {
    const wrapper = render(<InputToDo />);
    expect(wrapper.text()).to.contain('タイトル：');
  });

  it('should render 内容：', () => {
    const wrapper = render(<InputToDo />);
    expect(wrapper.text()).to.contain('内容：');
  });

  it('allows us to set title たいとる', () => {
    const wrapper = mount(<InputToDo title='たいとる'/>);
    expect(wrapper.props().title).to.equals('たいとる');
  });

  it('allows us to set content こんてんと', () => {
    const wrapper = mount(<InputToDo content='こんてんと'/>);
    expect(wrapper.props().content).to.equals('こんてんと');
  });

  it('responds to title change and argumet equals タイトルが変更されました', () => {
    
    const onChangeTitle = sinon.spy();
    const wrapper = mount((
      <InputToDo changeTitle={onChangeTitle} />
    ));
    const input = wrapper.find('input').at(0);
    input.simulate('change', {target: {value: "タイトルが変更されました"}});

    expect(onChangeTitle.calledOnce).to.equal(true);
    expect(onChangeTitle.getCall(0).args[0]).to.equals('タイトルが変更されました');
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