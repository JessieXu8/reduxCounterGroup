import {connect} from 'react-redux'
import Counter from '../component/Counter'
import {increment,decrement,multiple} from '../actions'

const mapStateToProps = (state , ownProps) => {
    return{
        state: state[ownProps.index]
    }
}

const mapDispatchToprops = (dispatch,ownProps) => {
    return{
        onIncrement:(index) => dispatch(increment(index)),
        onDecrement:(index) => dispatch(decrement(index)),
        onMultiple:(index,multipler) => dispatch(multiple(index,multipler))
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(Counter)