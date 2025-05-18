
function CounterReducer(state, action) {
    console.log('fff', state, action)

    switch (action) {
        case 'INCRE': {
            return { Counter: state.Counter + 1 }
        }
        case 'DECRE': {
            return { Counter: state.Counter - 1 }

        }
    }

}
export default CounterReducer