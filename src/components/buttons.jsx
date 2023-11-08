import { useEffect } from "react";
import { next, options, pause, startBtn } from "../assets"
import { styles } from "../utils/styles"
import { useDispatch, useSelector } from "react-redux";
import { changeCycle, toggleRunning } from "../slices/countSlice";

const Buttons = () => {

  useEffect(()=>{
      console.log("re-render");
  }, [])

  const {isRunning, theme} = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <div className={`${styles.flexCenter} gap-4`}>
        <div className={`p-6 bg-red-alpha-100 rounded-[24px] cursor-pointer`}>
          <img src={options} alt="options" />
        </div>
        <div className={`py-8 px-12 bg-red-alpha-700 transition-all duration-500 rounded-[32px] cursor-pointer active:bg-${theme.startBtnActiveBg} active:scale-[1] hover:scale-[1.1]`} onClick={()=>{dispatch(toggleRunning())}}>
        {!isRunning? <img src={startBtn} alt="pause" /> : <img src={pause} alt="start" /> }
        </div>
        <div className={`p-6 bg-red-alpha-100 rounded-[24px] cursor-pointer`} onClick={()=>dispatch(changeCycle())}>
          <img src={next} alt="next" />
        </div>
    </div>
  )
}

export default Buttons