import Image from 'next/image'
import { Oxanium } from 'next/font/google'
import { useState, type MouseEvent, type KeyboardEvent } from "react";
import { sendEmailSMTPServive } from '@/services/email/send';

const oxanium = Oxanium({ subsets: ['latin'] })

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmitEmail = async () => {
    const res = await sendEmailSMTPServive(email, message);
  }

  return (
    <main className={`pl-5 pt-16 pr-5 pb-0 lg:pl-16 lg:pt-16 lg:pr-16 lg:pb-5 ${oxanium.className} h-screen`}>
      <div className='grid grid-cols-1 lg:grid-cols-2 h-full card'>
        <div className='flex flex-col justify-between'>
          <div className='block lg:hidden mb-8 lg:mb-0'>
            <Image src='svgs/logo.svg' alt='Logo RMTech' width={130} height={125}></Image>
          </div>
          <div>
            <h1 className='font-normal text-white text-5xl lg:text-8xl mb-2'>generate</h1>
            <h1 className='font-normal text-white text-5xl lg:text-8xl mb-2'>solutions for</h1>
            <h1 className='font-normal text-white text-5xl lg:text-8xl mb-2'>various</h1>
            <h1 className='font-normal text-white text-5xl lg:text-8xl mb-2'>limitations</h1>
          </div>
          <div className='hidden lg:block'>
            <p className='text-white text-xl'>Mobile App . AR / VR . Robotics</p>
          </div>
        </div>
        <div className='flex flex-col justify-between items-end mt-12 pb-5 lg:mt-0 lg:pb-0'>
          <div className='hidden lg:block'>
            <Image src='svgs/logo.svg' alt='Logo RMTech' width={250} height={125}></Image>
          </div>
          <div className='w-full lg:w-80 xl:w-96'>
            <p className='text-white text-xl mb-3'>Contact us</p>
            <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="mb-3 bg-blackgold border border-gold text-gold text-sm rounded-xl focus:ring-gold focus:border-gold block w-full p-2.5 " placeholder="Email" onKeyUp={(e) => setEmail((e.target as HTMLInputElement).value)}></input>
            <textarea id="message" rows={5} className="block p-2.5 w-full text-sm text-gray-900 bg-blackgold rounded-lg border border-gold focus:ring-gold focus:border-gold text-gold" placeholder="Message" onKeyUp={(e) => setMessage((e.target as HTMLInputElement).value)}></textarea>
            <button type='button' className='bg-gold text-white block w-full mt-3 py-2 rounded-xl hover:bg-darkgold focus:bg-lightgold' onClick={handleSubmitEmail}>Send</button>
            <p className='text-gold mt-3 text-center'>In Collaboration With Azura Labs and Molca</p>
          </div>
        </div>
      </div>
    </main>
  )
}
