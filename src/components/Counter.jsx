import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/countSlice'

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counterReducer.count)

    const [amount, setAmount] = useState("")
    const handleIncrement = () => {
        if(amount === ""){
            alert("please provide amount properly!")
        }else{
            dispatch(incrementByAmount(Number(amount)))
            setAmount("")
        }
    }
  return (
    <div className='border rounded p-5 text-center' style={{width: '500px'}}>
        <h1 style={{fontSize: '100px'}}>{count}</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-5">
            <button onClick={() => dispatch(decrement())} className='btn btn-warning'>Decrement</button>
            <button onClick={() => dispatch(reset())} className='btn btn-danger'>Reset</button>
            <button onClick={() => dispatch(increment())} className='btn btn-success'>Increment</button>
        </div>
        <div className="d-flex justify-content-evenly align-items-center mt-4">
            <input type="text" className='form-control' placeholder='Input Increment Amount' onChange={e => setAmount(e.target.value) } value={amount} />
            <button onClick={handleIncrement} className='btn btn-primary ms-3'>Increment by Amount</button>
        </div>
    </div>
  )
}

export default Counter