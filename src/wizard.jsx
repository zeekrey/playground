import React from 'react'

/**
 * This is me trying to build a step wizard.
 */

const Step = ({ children }) => {
    return <div>{children}</div>
}

const WizardContainer = ({ children }) => {
    const stepCount = React.Children.toArray(children).filter(
        (child) => child.type.name === 'Step'
    ).length

    React.useEffect(
        () =>
            console.log(
                React.Children.toArray(children).map((child, index) => {
                    return {
                        id: index,
                        component: child,
                        name: child.props.name,
                        props: { ...child.props },
                    }
                })
            ),
        []
    )

    const [step, setStep] = React.useState(0)
    return (
        <div>
            <div>Current step: {step}</div>
            <div>Max steps: {stepCount}</div>

            <div>{children[step]}</div>

            {step > 0 && (
                <button onClick={() => setStep(step - 1)}>Previous</button>
            )}
            {stepCount - 1 > step && (
                <button onClick={() => setStep(step + 1)}>Next</button>
            )}
        </div>
    )
}

export const Wizard = ({ children }) => {
    return (
        <WizardContainer>
            <Step>This is step 1</Step>
            <Step>This is step 2</Step>
            <Step>This is step 3</Step>
        </WizardContainer>
    )
}
