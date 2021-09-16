import Link from 'next/link';
import { Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProjectsPage() {
  let isLoading = false;

  const sendEmail = async event => {
    event.preventDefault();

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
      console.log(result.success);
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
      <div className='col-span-3'>
        <h1 className="text-3xl xl:text-5xl font-work-sans font-light pl-12 text-blue-500">Don't be a stranger</h1>
        <span className='text-3xl xl:text-4xl font-work-sans font-light pl-12'>just say hello</span>
      </div>
      <div className="flex flex-wrap row-span-1 col-span-3 justify-center">
        <form onSubmit={sendEmail} className='mx-2 lg:ml-56 lg:mr-32 lg:mt-40' >
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
                            >
                Send Email
              </button>
        </form>
        <ToastContainer />
      </div>
    </div>
    
  </Fragment>
}

export default ProjectsPage;