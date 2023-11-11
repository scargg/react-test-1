function ContB ({cont, increaseB, decreaseB}) {
    return (
        <div>
            <button onClick={decreaseB()}>-</button>

            <button>{cont}</button>

            <button onClick={increaseB()}>+</button>
        </div>
    )
}
export {ContB}