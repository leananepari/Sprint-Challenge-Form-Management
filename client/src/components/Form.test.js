import React from 'react';
import Form from './Form';
import { render, fireEvent  } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";
import '@testing-library/jest-dom/extend-expect'

describe('<Form />', () => {
  it('renders without crashing', () => {
    render(<Form />);
  });

  it ('should display elements', () => {
    const display = render(<Form />);
    display.getByText(/register/i);
    display.getByText(/username/i);
    display.getByText(/password/i);
    display.getByText(/submit/i);
  });

  it ('should fire click button event', () => {
    const click = jest.fn();
    const { getByText } = render(<Form submit={click}/>);
    const button = getByText(/submit/i);
    console.log('btn', button)
    fireEvent.click(button);
    expect(click).toBeCalled();
  });
 
})