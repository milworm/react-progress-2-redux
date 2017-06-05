# example
```
import { reducer, middleware } from 'react-progress-redux'

class Application extends React.PureComponent {
    render () {
        return (
            <h1>hello world :)</h1>
        )
    }
}

let store = createStore(
    combineReducers({
        progress: reducer
    }),
    applyMiddleware(middleware, thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <Progress />
        <Application />
    </Provider>,
    document.querySelector('#root')
)
```