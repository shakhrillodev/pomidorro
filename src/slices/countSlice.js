import {createSlice} from '@reduxjs/toolkit'
import { brain, coffee } from '../assets'
import { focus, rest } from '../constants/themes'

const initialState = {
	minute: 15,
	second: 0,
	currentCycle: 1,
	isRunning: false,
	isResting: false,
	now: 'Focus',
	currentImg: brain,
	theme: focus
}

export const countSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		toggleRunning: (state)=>{
			state.isRunning = !state.isRunning
		},
        countSecond: (state) =>{
            if(state.second>0){
				state.second -=1
			}
			else{
				state.second = 59
			}
        },
		countMinute: (state) =>{
			if(state.minute>0){
				state.minute -=1
			}
		},
		changeCycle: (state) =>{
			state.currentCycle+= 1
			state.isResting = !state.isResting
			
			if(!state.isResting){
				state.minute = 25
				state.now = "Focus"
				state.currentImg = brain
			}else if(state.currentCycle%6===0 && state.isResting){
				state.minute = 15
				state.now= "Long break"
				state.currentImg = coffee
			}else{
				state.minute = 5
				state.now = "Short break"
				state.currentImg = coffee
			}
			state.second = 0
		}
	},
})

export const { countSecond, countMinute, changeCycle, toggleRunning } = countSlice.actions
export default countSlice.reducer