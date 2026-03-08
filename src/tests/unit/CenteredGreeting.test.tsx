import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CenteredGreeting from '../../renderer/components/CenteredGreeting'
import React from 'react'

describe('CenteredGreeting', () => {
  it('renders "hello world" text', () => {
    render(<CenteredGreeting />)
    expect(screen.getByText(/hello world/i)).toBeDefined()
  })

  it('has the correct centering classes', () => {
    const { container } = render(<CenteredGreeting />)
    const main = container.querySelector('main')
    expect(main?.className).toContain('flex')
    expect(main?.className).toContain('items-center')
    expect(main?.className).toContain('justify-center')
    expect(main?.className).toContain('h-screen')
    expect(main?.className).toContain('w-screen')
  })
})
