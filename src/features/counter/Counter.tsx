// import { RootState } from '../../App/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, selectcount} from './counterSlice'
import { ChangeEvent, useState } from 'react'

export default function Counter() {
    const count = useSelector(selectcount)
    const dispatch = useDispatch()
    const [IncrementAmount, setIncrementAmount] = useState('')

    function handleIncrementAmountChange(e: ChangeEvent<HTMLInputElement>) {
        setIncrementAmount(e.target.value)
    }
    const handleClick=()=>{
        setTimeout(()=>{
            dispatch(incrementByAmount(Number(IncrementAmount) || 0))
        },1000)
    }
    
    return (
        <div>
            <div>
                <button
                    aria-label='Increment value'
                    onClick={() => dispatch(increment())}>
                    +
                </button>
                <span>{count}</span>
                <button
                    aria-label='Decrement value'
                    onClick={() => dispatch(decrement())}>
                    -
                </button>
            </div>
            <div>
                <input
                    aria-label='set increment amount'
                    value={IncrementAmount}
                    onChange={handleIncrementAmountChange}
                // onClick={e => setIncrementAmount(e.target.value)}
                />
                <button
                   onClick={() => dispatch(incrementByAmount(Number(IncrementAmount) || 0))}
                   // onClick={handleClick}
                >
                    Add Amount
                </button>
                <button
                    onClick={handleClick}
                >
                    Add Async
                </button>
            </div>
        </div>
    )
}