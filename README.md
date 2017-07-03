# example
```
import { Progress, reducer } from 'react-progress-2-redux'

class Application extends React.PureComponent {
    render () {
        return (
            <div>
                <Progress />
                {/* the content */}
            </div>
        )
    }
}

let store = createStore(
    combineReducers({
        progressRedux: reducer
    })
)

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.querySelector('#root')
)
```

```
import { show, hide } from 'react-progress-2-redux'

// your-reducer.jsx
export function loadUsers () {
    return async dispatch => {
        dispatch(show())
        await myCoolAsyncRequest()
        dispatch(hide())
    }
}

// your-reducer.jsx
export function loadTasks () {
    return async dispatch => {
        dispatch(show())
        dispatch(show())
        dispatch(show())
        let data = await myCoolAsyncRequest()
        dispatch(hideAll())
    }
}
```