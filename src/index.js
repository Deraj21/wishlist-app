import { render } from 'react-dom'
import routing from './config/routing'


const rootElement = document.getElementById("root")
render(
    routing,
    rootElement
)

