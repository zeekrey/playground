import React, { createContext, useState, Children } from 'react'
import PropTypes from 'prop-types'

export const WizardContext = createContext(null)

export const Wizard = ({ children }) => {
    const stepCount = Children.toArray(children).filter(
        (child) => child.type.name === 'Step'
    ).length
    const [step, setStep] = useState(0)
    return (
        <WizardContext.Provider
            value={{
                step,
                setStep,
                stepCount,
                next: () => setStep(step + 1),
                previous: () => setStep(step - 1),
            }}
        >
            {children[step]}
        </WizardContext.Provider>
    )
}

Wizard.propTypes = {
    children: PropTypes.elementType,
}
