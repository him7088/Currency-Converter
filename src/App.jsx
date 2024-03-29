import { useState } from 'react'
import Input from './components/Input'
import useCurrencyInfo from './hooks/UseCurencyInfo'
import './App.css'
import backgroundImage from './assets/currencyBackground.jpg'
function App() {
  
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState("inr");
  const [converted,setConverted]=useState(0);

  const currencyInfo= useCurrencyInfo(from)
  const options=Object.keys(currencyInfo);

  const swap=()=>{
    setFrom(to);
    setTo(from);
    setConverted(0);
    setAmount(converted);
  }
  const convert=()=>
  {
    setConverted(amount* currencyInfo[to]);
  }
  return (
    <>
     <div
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{backgroundImage:`url(${backgroundImage})`}}>

      <div className='w-full'>

        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg 
                        p-5 backdrop-blur-sm bg-white/30'>

              <form onSubmit={(e)=> e.preventDefault()}>

                <div className='w-full mb-1'>
                  <Input 
                      label="from"
                      amount={amount}
                      currencyOptions={options}
                      onCurrencyChange={(currency)=>setFrom(currency)}
                      onAmountChange={(amount)=> setAmount(amount)}
                      selectCurrency={from}
                      
                  ></Input>
                </div>
                <div className='relative w-full h-0.5'>
                  <button 
                      type="button"
                      className='absolute left-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      border-2 border-white rounded-md
                      bg-blue-600 text-white px-2 py-0.5'
                      onClick={swap}>

                      swap
                      
                  </button>
                </div>
                <div className='mt-1 mb-4 w-full'>
                <Input 
                      label="to"
                      amount={converted}
                      currencyOptions={options}
                      onCurrencyChange={(currency)=>setTo(currency)}
                      selectCurrency={to}
                      amountDisable
                      
                  ></Input>
                </div>
                <button type="submit"
                className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
                onClick={convert}>
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </form>
        </div>

      </div>




     </div>
    </>
  )
}

export default App
