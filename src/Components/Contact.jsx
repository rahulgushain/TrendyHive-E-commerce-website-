import data from "../data"
import "./home.css"
import Complain from "./complain"
import Footer from "./footer"

export default function Contact(){
    return(
        <div >
        <div className="flex justify-center items-center contactimg text-white text-5xl">
        <p>Contact Us</p>       
        </div>
        <div className="flex flex-col items-center mt-4 min-h-[400px]">
            <p className="font-bold text-xl">Have any queries?​</p>
            <p className="text-2xl font-bold mt-3">We're here to help.</p>
            <div className="bg-gray-600 h-[3px] w-[120px]"></div>
            <div className="flex flex-wrap min-h-[350px] gap-2 justify-center mt-7">
                {
                    data.contacts.map((data)=>(
                        <Complain key={data.key} data={data}/>
                    ))
                }
            </div>
            <div className="flex flex-wrap p-5  min-h-[450px] w-full  justify-evenly  mt-4">
            <div className="flex flex-col justify-center w-full md:w-[40%]  h-[400px] text-center md:text-start">
              <p className="text-xl font-bold mt-3">Don't be a stranger!
             </p>
             <p className="text-4xl font-bold mt-3"> You tell us. We listen.</p>
             <p className=" mt-3">We’re here for you, always. Share your feedback, questions, or concerns—because your voice matters.
You tell us what you need, and we’ll go the extra mile to make it happen.
Let’s build a better shopping experience together!</p>

            </div> 
            <div className="w-full md:w-[40%] h-[400px] bg-gray-200 rounded-xl">
            <form className="flex flex-col justify-around h-full p-5">
               
                <input className="p-2 "  placeholder="Name" ></input>
                <input className="p-2" placeholder="Subject" ></input>
                <input className="p-2" placeholder="Email" required ></input>
                <textarea className="p-2" placeholder="Message"></textarea>

                <button className="bg-blue-800 p-3 text-white">SEND MESSAGE</button>
            </form>

            </div>



            </div>

        </div>
        <Footer/>


        </div>

    )
}

