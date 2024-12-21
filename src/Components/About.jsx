import "./home.css";
import secondimg from "../Components/photos/about2img.png"
import third from "./photos/aboutfollowimg.jpg"
import data from "../data";
import Team from "./team";
import Footer from "./footer";
import Icon from "./icon";


function About(){
   
    
    return(
        <div>


        <div className="w-full h-[100vh] aboutimg flex justify-center items-center text-white text-5xl " >
        About Us
         
        </div>
        <div className="flex mt-4 w-full md:flex-row flex-col min-h-[500px] bg-gray-300 p-5">
        <div className="w-full  xl:w-[50%] h-full flex flex-col justify-center text-2xl ">
        <p className="text-2xl text-center md:text-left font-bold mb-3">Who We Are</p>
        <p>At TrendyHive, we are passionate about bringing you the latest trends and top-quality products all in one place. As your trusted online shopping destination,
         we strive to make your experience seamless, enjoyable, and rewarding. With a commitment to affordability, variety, and convenience, we empower you to shop confidently and discover products that suit your style and needs.</p>
        </div>
        <div className="w-full xl:w-[50%]  flex justify-center items-center p-4 ">
           <img className="w-full h-full" src={secondimg}></img>
        </div>

        </div>
        <div className="flex flex-col items-center j min-h-[500px] w-full">
         <p className="text-3xl font-bold"> A Few Words About</p>
         <p> Our Team</p> 
         <p className="text-center max-w-[700px]"> At TrendyHive, our passionate team works together to bring you the latest trends, exceptional service,
          and a seamless shopping experience. We’re dedicated to making your journey with us truly enjoyable.</p>
         <div className=" flex flex-wrap gap-2 max-w-[800px] justify-center">
         {
            data.team.map((data)=>(
               <Team key={data.id} data={data}/>
            ))
         }

         </div>



        </div>
        

        <div className=" flex flex-wrap p-5 justify-center gap-9 text-7xl min-h-[250px]  w-full mt-3">
        {data.icons.map((data) => (
          <Icon key={data.id} data={data} />
        ))}
      </div>
        <div>
        <Footer/>
           
        </div>



        </div>
        
    )
}

export default About;