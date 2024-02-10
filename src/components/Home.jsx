import React from "react";

function Home(){
    return(
        <a className="bg-[#f7feff]   flex flex-col items-center    shadow md:flex-row  " >
            <div className=" mx-20 md:mr-40 md:ml-40 "> 
                <img class="h-32 w-32 md:h-64 md:w-64 mx-auto mt-10 mb-10" src="logo3.png" alt="" />
                <h1 className="text-2xl md:text-3xl h- ">En lavanderias Dany Tenemos de todo  para hacerte mas facil tu dia.</h1>
                <h1 className="mt-10 md:mb-10">Con equipos de calidad para no maltratar tu ropa.</h1>
            </div>

            <div>
                <img className="ml-auto mr-60" src="img1.jpg" alt=""/>
            </div>
        </a>
    )
}

export default Home;