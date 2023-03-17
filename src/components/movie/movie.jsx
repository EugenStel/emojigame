import parse from 'html-react-parser'

import './movie.css'

export const Movie = ({ emoji }) => (
    parse(`<span className="emoji">${emoji}</span>`)
)
