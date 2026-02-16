import './App.css'

function App() {

  return (
    <>
      <div className="whole bg-[#FF7979] h-[100vh] flex justify-center items-center gap-[80px]">
        <div className="left flex flex-col ">
          <h1 className='text-[#fff] font-bold text-[50px]/[55px]'>Learn to code by <br /> watching others</h1>
          <p className='text-[#fff] font-medium text-[16px]/[26px]'>See how experienced developers solve problems in real-time. <br /> Watching scripted tutorials is great, but understanding how <br /> developers think is invaluable. </p>
        </div>

        <div className="right flex flex-col">
          <div className="ad w-[540px] h-[60px] bg-[#5E54A4] flex justify-center items-center rounded-[8px] mb-[20px] shadow-md/50">
            <p className='text-white'><span className='text-white font-bold'>Try it free 7 days</span> then $20/mo. thereafter</p>
          </div>

          <div className="container flex flex-col justify-center items-center w-[540px] h-[474px] rounded-[10px] bg-white shadow-md/50">
            <input type="text" placeholder='First Name' className='border-1 border-[#DEDEDE] rounded-[5px] w-[460px] h-[56px] pl-[30px] mb-[15px]'/>
            <input type="text" placeholder='Last Name' className='border-1 border-[#DEDEDE] rounded-[5px] w-[460px] h-[56px] pl-[30px] mb-[15px]'/>
            <input type="text" placeholder='Email Address' className='border-1 border-[#DEDEDE] rounded-[5px] w-[460px] h-[56px] pl-[30px] mb-[15px]'/>
            <input type="text" placeholder='Password' className='border-1 border-[#DEDEDE] rounded-[5px] w-[460px] h-[56px] pl-[30px] mb-[15px]'/>
            <button className='bg-[#38CC8B] text-white w-[460px] h-[56px] rounded-[5px] text-[15px]/[26px] tracking-[1px] font-[600] cursor-pointer hover:bg-[#77E2B3] duration-150'>CLAIM YOUR FREE TRIAL</button>
            <p className='text-[#BAB7D4] text-[11px]/[26px] font-[500] '>By clicking the button, you are agreeing to our <span className='font-[700] text-[#FF7979] cursor-pointer'>Terms and Services</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
