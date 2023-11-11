import React from "react"
function useCont () {

    const [contA, setContA] = React.useState(JSON.parse(localStorage.getItem('contA')))
    const [contB, setContB] = React.useState(JSON.parse(localStorage.getItem('contB')))
    const increase = () => {setContA(contA + 1); localStorage.setItem('contA',contA)}
    const decrease = () => {setContA(contA - 1); localStorage.setItem('contA',contA)}
    const increaseB = () => {setContB(contB + 1); localStorage.setItem('contB',contB)}
    const decreaseB = () => {setContB(contB - 1); localStorage.setItem('contB',contB)}
    return {
        contA,
        contB,
        increase,
        decrease,
        increaseB,
        decreaseB
    }
}
export {useCont}