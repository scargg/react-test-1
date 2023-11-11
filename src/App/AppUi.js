import { Container } from "../Container"
import { ContA } from "../contadores/ContA"
import { ContB } from "../contadores/ContB"
import { useCont } from "./useCont"
import React from "react"

function AppUi () {

    const {
        contA,
        contB,
        increase,
        decrease,
        increaseB,
        decreaseB
    } = useCont()

    return (
        <>
            <Container>
                <ContA cont = {contA} increase = {() => increase} decrease = {() => decrease}/>

                <ContB cont = {contB} increaseB = {() => increaseB} decreaseB = {() => decreaseB}/>
            </Container>
        </>
    )
}
export {AppUi}