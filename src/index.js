import React from 'react'
import ReactDOM from 'react-dom'

import { Wizard } from './wizard'
import { useWizard } from './useWizard'

const App = () => {
    return (
        <div>
            <div>
                <Wizard>
                    <Step>This is my step number</Step>
                    <Step>This is my step number</Step>
                    <Step>This is my step number</Step>
                </Wizard>
            </div>
        </div>
    )
}

const Step = ({ children }) => {
    const [step, setStep, stepCount, next, previous] = useWizard()

    return (
        <div>
            <div>Current step: {step}</div>
            <div>
                {children}
                {step}
            </div>
            {step > 0 && <button onClick={() => previous()}>Previous</button>}
            {stepCount - 1 > step && (
                <button onClick={() => next()}>Next</button>
            )}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
