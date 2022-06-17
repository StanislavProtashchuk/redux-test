import { connect } from "react-redux";
import * as actions from '../../redux/counter/counter-actions'
import Value from "components/Value/Value";
import Controls from "components/Controls/Controls";

function Counter({value, step, onDecrement, onIncrement}) {
    return (
        <div>
        <Value value={value} />
            <Controls
                step={step}
            onIncrement={() => onIncrement(step)}
            onDecrement={() => onDecrement(step)}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
        value: state.counter.value,
        step: state.counter.step
});

const mapDispatchToProps = dispatch => ({
    onIncrement: value => dispatch(actions.increment(value)),
    onDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);