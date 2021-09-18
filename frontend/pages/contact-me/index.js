import Link from 'next/link';
import { Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactMePage({data}) {
  const contactData = data[0][0]
  const sendEmail = async event => {
    event.preventDefault();

    const sendButton = document.getElementById("send_button")
    sendButton.classList.add("cursor-not-allowed")
    sendButton.classList.remove("hover:text-blue-700", "hover:bg-transparent", "hover:border-blue-500" )

    const res = await fetch(`${process.env.baseURL}/api/mail`, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: {
            subject: event.target.subject.value,
            text: event.target.message.value
          }
        }),
      }
    );

    const result = await res.json();
  
    if(result.success === true){
      sendButton.classList.remove("cursor-not-allowed")
      sendButton.classList.add("hover:text-blue-700", "hover:bg-transparent", "hover:border-blue-500" )

      toast.info(result.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        icon: "🚀"
      })
    }
    event.target.subject.value = null;
    event.target.message.value = null;
  };

  return <Fragment>
    {/* <h1 className="font-work-sans text-8xl text-center font-light">Contact Me</h1> */}
    <div className='grid grid-cols-1 xl:grid-cols-6 overflow-hidden md:mb-0 lg:mt-8'>
      <div className='col-span-3 mb-20 lg:mb-0'>
        <h1 className="text-3xl xl:text-5xl font-work-sans font-light pl-5 md:pl-12 text-blue-500">Don't be a stranger</h1>
        <span className='text-3xl xl:text-4xl font-work-sans font-light pl-5 md:pl-12'>just say hello</span>
        <br></br>
        <br></br>
        <div className="px-12 xl:px-40 mt-20">
          <div className='text-center font-work-sans text-xl font-light text-justify' dangerouslySetInnerHTML={{ __html: contactData.content}}></div>
          
          <div className="text-base font-normal font-work-sans mt-20">Contact me through my email</div>
          <div className="flex items-center mt-2">
            <div>
              <img src="https://img.icons8.com/color/48/000000/filled-message.png"/>
            </div>
            <span className="text-base font-light font-work-sans" width="24" height="24">&nbsp; {contactData.email}</span>
          </div>

          <div className="text-base font-normal font-work-sans mt-10">Feel Free to follow me on my socials</div>

          <div className="flex items-center mt-2">
            <div className="pr-2">
              <a href={contactData.twitter_link} target="_blank">
                <img src="https://img.icons8.com/color/48/000000/twitter--v1.png"/>
              </a>
            </div>
            <span className="px-2">
              <a href={contactData.instagram_link} target="_blank">
                <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"/>
              </a>
            </span>
            <span className="px-2">
              <a href={contactData.linkedin_link} target="_blank">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
              </a>
            </span>
            <span className="px-4">
              <a href={contactData.devto_link} target="_blank">
                <img src="/assets/devto.svg" className="w-9"/>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap row-span-1 col-span-3 justify-center mb-10 lg:mb-0">
        <form onSubmit={sendEmail} className='mx-2 md:mx-10 xl:ml-56 xl:mr-32 lg:mt-40' >
          <input className="shadow appearance-none border rounded w-full py-2 px-3 border-blue-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10" id="subject" name="subject" type="text" placeholder="Subject"/>
          <textarea id="message" name="message" rows="10" cols="50" placeholder="Message" className='mt-8 w-full p-4 border-solid border border-blue-500 rounded-lg font-work-sans outline-none'></textarea>
          <button className="bg-blue-500
                            hover:bg-transparent 
                            text-white
                            font-semibold 
                            hover:text-blue-700 
                            mt-2
                            py-2 
                            px-4 
                            border 
                            border-transparent 
                            hover:border-blue-500
                            rounded-lg 
                            focus:outline-none"
                            type="submit"
                            name="send"
                            id="send_button"
                            >
                Tell Me Something!
              </button>
        </form>
        <ToastContainer />
      </div>
    </div>
    
  </Fragment>
}

export const getStaticProps = async () => {
  const contactMeQuery = fetch(`${process.env.baseURL}/api/contact`);

  const responses = await Promise.all([(await contactMeQuery).json()])

  return {
    props: {
      data: responses
    },
    revalidate: 1,
  };
};