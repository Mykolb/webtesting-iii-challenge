// Test away!
import React from 'react';
import { render, fireEvent, cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';


describe('<Controls />', () => {
    it('closed toggle button is disabled if the gate is locked', () => {

        //if it's locked and gate is closed the text that should appear is "Open Gate"
        const mock = jest.fn()
        const { getByText } = render(<Controls closed={true} locked={true} />)
        const button = getByText(/Open Gate/i)
        fireEvent.click(button)
        expect(mock).not.toHaveBeenCalled();
    })

    it('locked toggle button is disabled if the gate is open', () => {

        //if it's unlocked and gate is open the text that should appear is "Close Gate"
        const mock = jest.fn()
        const { getByText } = render(<Controls closed={false} locked={false} />)
        const button = getByText(/Close Gate/i)
        fireEvent.click(button)
        expect(mock).not.toHaveBeenCalled();
    })
})