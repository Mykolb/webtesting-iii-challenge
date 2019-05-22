// Test away!
import React from 'react';
import { render, fireEvent, cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';



describe('<Display />', () => {
    it('show closed when prop is true', () => {
        const closed = true;

        const { getByText } = render(<Display closed={closed} />)
        getByText('Closed') //remember the casing!!!!
        cleanup();
    })

    //needed cleanup to get it to fail 
    it('should show open if closed is false', () => {
        const closed = false;

        const { getByText } = render(<Display closed={closed} />)
        getByText('Open')
        cleanup();
    })

    it('displays lock if the locked prop is true', () => {
        const locked = true;

        const { getByText } = render(<Display locked={locked} /> )
        getByText('Locked')
        cleanup();
    })

    it('displays unlocked if locked prop is false', () => {
        const locked = false;

        const { getByText } = render(<Display locked={locked} /> )
        getByText('Unlocked')
        cleanup();
    })

    it('when locked use the red-led class', () => {
        const locked = true;

        const { getByText } = render(<Display locked={locked} /> )
        expect(getByText('Locked')).toHaveClass('red-led')
        cleanup();
    })
    it('when  closed use the red-led class', () => {
        const closed = true;

        const { getByText } = render(<Display closed={closed} /> )
        expect(getByText('Closed')).toHaveClass('red-led')
        cleanup();
    })

    it('when unlocked use the green-led class', () => {
        const unlocked = true;

        const { getByText } = render(<Display unlocked={unlocked} /> )
        expect(getByText('Unlocked')).toHaveClass('green-led')
        cleanup();
    })

    it('when open use the green-led class', () => {
        const open= true;

        const { getByText } = render(<Display open={open} /> )
        expect(getByText('Open')).toHaveClass('green-led')
    })



})

