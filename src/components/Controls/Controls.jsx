const Controls = ({step, onIncrement, onDecrement }) => (
    <div>
        <button type="button" onClick={onDecrement}>
            Minus {step}
        </button>
        <button type="button" onClick={onIncrement}>
            Plus {step}
        </button>
    </div>
)

export default Controls;