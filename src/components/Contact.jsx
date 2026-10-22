import React, { useRef, useState } from 'react'

import emailjs from '@emailjs/browser'

const Contact = () => {

  const formRef = useRef();

  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    ).then(
      () => {
        alert("Send message successfully!");
        formRef.current.reset();
        setIsSending(false)
      },
      (error) => {
        alert("Failed to send message!");
        console.log(error);
        setIsSending(false);
      }
    )
  }

  return (
    <div id='contact' className='min-h-screen bg-[#2E2F2B] pt-16 pb-8'>

      <h1 className='text-5xl text-center text-white mb-12'>Contact Us</h1>

      <div className='h-10/12 w-7/12 bg-[#3B3B3B] p-10 m-auto rounded-xl'>
          <h1 className='text-gray-200 text-3xl text-center mb-10'>Let's work together</h1>

          <form className='flex flex-col gap-2' ref={formRef} onSubmit={sendEmail}>
            <div>
              <span className='text-gray-400 block py-1'>Name:</span>
              <input 
                type="text" 
                name='from_name'
                placeholder='Enter name'
                required
                className='w-full border py-2 px-3 rounded-lg bg-[#2E2F2B] text-gray-400 focus:outline'
              />
          </div>
          <div>
            <span className='text-gray-400 block py-1'>Email:</span>
            <input 
              type="email" 
              name='from_email'
              placeholder='example@gmail.com'
              required
              className='w-full border py-2 px-3 rounded-lg bg-[#2E2F2B] text-gray-400 focus:outline'
            />
          </div>
          <div>
            <span className='text-gray-400 block py-1'>Message:</span>
            <textarea 
              type="textarea" 
              name='from_message'
              rows={5}
              placeholder='Your message...'
              required
              className='w-full border py-2 px-3 rounded-lg bg-[#2E2F2B] text-gray-400 focus:outline'
            />
          </div>
          <button type='submit' disabled={isSending} className='bg-gray-300 py-2 mt-2 rounded-lg hover:cursor-pointer hover:bg-gray-200'>
            {isSending ? "Sending..." : "Send Message"}
          </button>
          </form>
      </div>
    </div>
  )
}

export default Contact