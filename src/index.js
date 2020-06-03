import React from 'react'
import ReactDOM from 'react-dom'

// import LearnContext from './learnContext'
import { Wizard } from './wizard'

const App = () => (
    <div>
        <div>
            {/* <LearnContext /> */}
            <Wizard />
        </div>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
