import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './components/Form';
import { configure, shallow, mount, render} from 'enzyme';
import chai, { expect } from 'chai';
//import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('App component testing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('App contains Form', () => {
    const wrapper = shallow(<App/>);
    const element = <Form/>;
    expect(wrapper.contains(element)).to.equal(true);
  });

  it('Form contains enter index value', () => {
    const wrapper = shallow(<Form/>);
    const enter = <h1>Enter your index value</h1>;
    expect(wrapper.contains(enter)).to.equal(true);
  });

  it('Form contains input', () => {
    const wrapper = shallow(<Form/>);
    expect(wrapper.find('input.form-control')).to.exist;
  });

  it('Form contains input', () => {
    const wrapper = shallow(<Form/>);
    expect(wrapper.find('input.form-control')).to.exist;
  });

  it('Form click button', () => {
    const wrapper = shallow(<Form/>);
    wrapper.find('button').simulate('click', { preventDefault: ()=> undefined });
  });

});