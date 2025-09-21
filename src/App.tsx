import { useRootSelector } from '@state';

import './App.css'
import { CodeInput } from './components/CodeInput/CodeInput'

function App() {
  const attempts = useRootSelector(state => state.attempts)

  return (
    <>
      <CodeInput />

      <ul>
        {attempts.map(attempt => (
          <li>{attempt.toString()}</li>
        ))}
      </ul>
    </>
  )
}

export default App
