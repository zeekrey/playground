import React from 'react'
import ReactDOM from 'react-dom'

import LearnContext from './learnContext'

const App = () => (
    <div>
        <div>
            <LearnContext />
        </div>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
