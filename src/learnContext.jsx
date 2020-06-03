import React from 'react'

/**
 * https://reactjs.org/docs/context.html
 * Context provides a way to pass data through the component tree without having to pass props down manually at every level.
 */

/**
 * https://reactjs.org/docs/context.html#reactcreatecontext
 * const MyContext = React.createContext(defaultValue);
 * The defaultValue argument is only used when a component does not have a matching Provider above it in the tree.
 * This is important for frameworks like gatsby or next -> If the context is defined in a component that is used in a page,
 * the page itself will not be able to consume the value defined on the provider. It can consume the default value defined at
 * createContext.
 */

/**
 * Basic example
 * contextValue will print 'hello world'
 */
const MyContext = React.createContext('Only for testing purpose!')

const MyComponent = () => {
    const contextValue = React.useContext(MyContext)
    return <div>{contextValue}</div>
}

const LearnContext = () => {
    return (
        <MyContext.Provider value="hello world">
            <h1>I learn React Context</h1>
            <MyComponent />
        </MyContext.Provider>
    )
}

/**
 * Dynamic context
 * The context value is tied to a component state.
 */

const LearnContext2 = () => {
    const [counter, setCounter] = React.useState(1)
    return (
        <MyContext.Provider value={counter}>
            <h1>I learn React Context</h1>
            <button onClick={() => setCounter(counter + 1)}>
                Change context value
            </button>
            <MyComponent />
        </MyContext.Provider>
    )
}

export { LearnContext2 }
