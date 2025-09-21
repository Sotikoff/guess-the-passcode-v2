import { useRootDispatch, useRootSelector } from '@state';
import { codeInputSlice } from '@state/features';

import './CodeInput.css';

export function CodeInput() {
    const codeInput = useRootSelector(state => state.codeInput)
    const dispatch = useRootDispatch()

    const inputs = [];

    for (let i = 0; i < codeInput.length; i++) {
        inputs.push(
            <input
                key={i}
                pattern='[0-9]'
                maxLength={1}
                value={codeInput[i] ?? undefined}
                onChange={({ target: { value } }) => {
                    if (value) {
                        const numberValue = Number(value)

                        if (!isNaN(numberValue)) {
                            dispatch(codeInputSlice.actions.set({ position: i, value: numberValue }))
                        }
                    } else {
                        dispatch(codeInputSlice.actions.delete({ position: i }))
                    }
                }}
            />)
    }

    return (
        <div className='root'>
            {inputs}
        </div>
    )
}
