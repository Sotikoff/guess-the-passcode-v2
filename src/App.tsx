import { useRootDispatch, useRootSelector } from '@state';

import './App.css'
import { CodeInput } from './components/CodeInput/CodeInput'
import { Stub } from './components/Stub'

function App() {
  const attempts = useRootSelector(state => state.attempts)
  const dispatch = useRootDispatch()

  return (
    <>
      <Stub />
      <CodeInput />
      {/* <button onClick={() => dispatch()} /> */}

      <ul>
        {attempts.map(attempt => (
          <li>{attempt.toString()}</li>
        ))}
      </ul>
    </>
  )
}

export default App
