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

  it('should render 追加', () => {
    const wrapper = render(<InputToDo />);
    expect(wrapper.find('input[type="button"]').val()).to.contain('追加');
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

  it('responds to content change and argumet equals コンテントが変更されました', () => {
    
    const onChangeContent = sinon.spy();
    const wrapper = mount((
      <InputToDo changeContent={onChangeContent} />
    ));
    const input = wrapper.find('input').at(1);
    input.simulate('change', {target: {value: "コンテントが変更されました"}});

    expect(onChangeContent.calledOnce).to.equal(true);
    expect(onChangeContent.getCall(0).args[0]).to.equals('コンテントが変更されました');
  });

  it('responds to button click', () => {
    
    const onAddToDo = sinon.spy();
    const wrapper = mount((
      <InputToDo addToDo={onAddToDo} />
    ));
    const input = wrapper.find('input[type="button"]').at(0);
    input.simulate('click');

    expect(onAddToDo.calledOnce).to.equal(true);
  });

});