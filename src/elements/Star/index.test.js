import React from 'react'
import {render} from "@testing-library/react"
import Star from '.'

test("Should have props [value, height, width, spacing", ()=> {
    const height = 40, width = 40, spacing = 4
    const { container } = render(<Star height={height} width={width} spacing={spacing} value={3.7} />)
    const starYellow = "div.stars div.star:not(.placeholder)"
    const starOnly = "div.stars"


    expect(container.querySelector(starOnly)).toBeInTheDocument()
    expect(container.querySelector(starOnly)).toHaveAttribute("style",expect.stringContaining(`height: ${height}px`))
    expect(container.querySelector(starYellow)).toBeInTheDocument()
    expect(container.querySelector(starYellow)).toHaveAttribute("style",expect.stringContaining(`width: ${width}px`))
    expect(container.querySelector(starYellow)).toHaveAttribute("style",expect.stringContaining(`height: ${height}px`))
    expect(container.querySelector(starYellow)).toHaveAttribute("style",expect.stringContaining(`margin-right: ${spacing}px`))
})