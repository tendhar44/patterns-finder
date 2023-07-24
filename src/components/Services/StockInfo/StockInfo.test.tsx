import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import StockInfo from "./StockInfo"

describe('StockInfo component', () => {
    test('StockInfo mounts properly', () => {
        const wrapper = render(<StockInfo />)
        expect(wrapper).toBeTruthy()
    })

    test('shows correct title', () => {
        const wrapper = render(<StockInfo />)
        const elementId = wrapper.container.querySelector('#stockInfoTitleId')
        expect(elementId?.textContent).toBe('Stock Info Finder')
    })
});
