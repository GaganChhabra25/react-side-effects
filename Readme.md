# Side effects
1. Handling side Effects : using `useEffect()`
2. Reducers
3. Context

# clearTimeout()
1. cancels a timeout previously established by calling setTimeout()
2. used to put delay in API calls to avoid unnecessary calls

# clean up code 
1. It will always run before actual setTimeout function

# useEffect Summary
useEffect(() => {
    console.log('effect');
})

1. This will be called whenever state changes of component. 
2. Rarely used like this to avoid unnecessary calls

useEffect(() => {

}, [])

1. This will be called only once at the time of component mounting
2. Even if state changes, this will not called

useEffect(() => {

}, [name, age])

1. This will be called whenever there is change in state dependency named : name and age 

# Separate Input Component :

https://github.com/academind/react-complete-guide-code/tree/10-side-effects-reducers-context-api/code