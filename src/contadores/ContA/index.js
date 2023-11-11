function ContA ({cont, increase, decrease, setContA}) {
    return (
        <div>
            <button onClick={
                decrease()}>-</button>

            <button>{cont}</button>

            <button onClick={
                increase()}>+</button>
        </div>
    )
}
export {ContA}