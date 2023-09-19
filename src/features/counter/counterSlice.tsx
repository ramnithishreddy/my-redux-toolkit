import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
// import { setTimeout } from 'timers/promises';

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount: number) => (dispatch: Dispatch) => {

        dispatch(incrementByAmount(amount));

        // setTimeout(()=>{
        //     console.log('2')
        // },'373')
 
};

export const selectcount = (state : any) => state.counter.value;

export default counterSlice.reducer;
