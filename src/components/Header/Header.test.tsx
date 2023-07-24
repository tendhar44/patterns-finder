import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import Header from './Header'
import './scss/Header.scss'

  describe('<Header />', () => {
    test('Header mounts properly', () => {
      // Test if header component displays
      const wrapper = render(<Header />)
      expect(wrapper).toBeTruthy() 

      // Get by text using the React testing library
      /*const baseUrlText = screen.getByText(
        /Base URL:/i
      );
      expect(baseUrlText.textContent).toBeTruthy()*/

      /*const urlLinkText = screen.getByText(
        import.meta.env.VITE_API_URL
      );
      expect(urlLinkText.textContent).toBeTruthy()*/
      //alternative
      //expect(screen.getByRole('link', { name: 'Click Me' }))
      //.toHaveAttribute('href', 'https://www.test.com/')
    })

    test('should show correct main header for the app', () => {
      const wrapper = render(<Header />)
      const mainHeader = wrapper.container.querySelector('#mainHeader')
      expect(mainHeader?.textContent).toBe('Pattern Finder')
    })
  });
  