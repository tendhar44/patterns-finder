import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'
import './scss/Header.scss'

  describe('<Header />', () => {
    test('Header mounts properly', () => {
      const wrapper = render(<Header />)
      expect(wrapper).toBeTruthy()

      // Get by h2
      const h2 = wrapper.container.querySelector('h2')
      expect(h2?.textContent).toBe('Header Testing..')

      // Get by text using the React testing library
      const baseUrlText = screen.getByText(
        /Base URL:/i
      );
      expect(baseUrlText.textContent).toBeTruthy()

      const urlLinkText = screen.getByText(
        import.meta.env.VITE_API_URL
      );
      expect(urlLinkText.textContent).toBeTruthy()
      //alternative
      //expect(screen.getByRole('link', { name: 'Click Me' }))
      //.toHaveAttribute('href', 'https://www.test.com/')
    })
  });
  