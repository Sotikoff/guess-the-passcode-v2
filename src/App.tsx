import { useRootSelector, useRootDispatch } from '@state';
import { attemptsSlice } from '@state/features';

import './App.css'
import { CodeInput } from './components/CodeInput/CodeInput'

function App() {
  const attempts = useRootSelector(state => state.attempts)
  const codeInput = useRootSelector(state => state.codeInput)
  const dispatch = useRootDispatch();

  return (
    <>
      <CodeInput />

      <button onClick={() => {
        dispatch(attemptsSlice.actions.add(codeInput))
      }}>Confirm</button>

      <ul>
        {attempts.map(attempt => (
          <li>{attempt.toString()}</li>
        ))}
      </ul>
    </>
  )
}

export default App
