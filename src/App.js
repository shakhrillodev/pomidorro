import { useEffect } from "react"
import { styles } from "./utils/styles"
import { Buttons } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { changeCycle, countMinute, countSecond } from "./slices/countSlice";

const App = () => {
  const {minute, second, isRunning, now, currentImg, theme} = useSelector(state => state.counter)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    const time = setInterval(()=>{
      if(isRunning && second>0){
        dispatch(countSecond())
      }else if (second===0 && minute>0 && isRunning){
        dispatch(countSecond())
        dispatch(countMinute())
      }else if(second===0 && isRunning && minute === 0){
        dispatch(changeCycle())
      }else{
        clearInterval(time)
      }
    }, 1000)  
  
    return ()=>{clearInterval(time)}
  },[isRunning, second, minute])

  return (
    <div className={`w-full h-[100vh] ${styles.flexCenter} flex-col gap-8 p-12 bg-red-50`}>
      <div className={`py-2 px-4 h-[48px] gap-[8px] bg-red-alpha-100 border-solid border-[2px] border-red-900 rounded-full ${styles.flexCenter}`}>
        <img src={currentImg} alt={now} />
        <p className="font-roboto text-[24px]" >{now}</p>
      </div>
      <div className="text-[256px] leading-[85%] font-[200] font-roboto text-red-900">
        <p>{minute>9 ? minute: `0${minute}`}</p>
        <p>{second>9 ? second:`0${second}`}</p>
      </div>
      <Buttons />
    </div>
  )
}

export default App