import gsap from 'gsap';
import {ScrollTrigger,SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <div className='flex-center h-[100vh]'>
        <h1 className='text-6xl text-red-300'>Hello gsap</h1>
    </div>
  )
}

export default App
