import React from 'react'
import { WizardContext } from './wizard'

export const useWizard = () => {
    const { step, setStep, stepCount, next, previous } = React.useContext(
        WizardContext
    )

    return [step, setStep, stepCount, next, previous]
}
