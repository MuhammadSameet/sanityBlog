// import React from 'react'
// import Hero from './componets/hero'
// import { client } from '@/sanity/lib/client'

//  const  Homepage = async() => {
//      const query = `*[_type == 'blog']  | order(_updatedAt asc){
//   Title,Paragraph,image,
//    "slug":slug.current
// }`

// const data:Blog[] = await client.fetch(query)


//   return (
//     <div className='' >
       
//        {  data.map((data:Blog)=>(
//         <Hero data={data} key={data.slug}/>
//        ))
        
//         }
        

//     </div>
//   )
// }

// export default Homepage


import React from "react";
import Hero from "./componets/hero";
import { client } from "@/sanity/lib/client";

export default async function Homepage(){

    const query= `*[_type=='blog'] | order(_createdAt asc ){ 
  title,paragraph,image,"slug":slug.current}` // jab ASC use hota ha tou 2ns AWAIT use hoga

  const data:Blog[] = await client.fetch(query);
  
  console.log(data)
 

    return (
      <>
        <div className="flex flex-wrap grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-auto justify-around">
        
          { data.map((data:Blog)=>(<Hero data={data} key={data.slug}/>))}

          
   
          
          
        </div>

        
             </>
    )
};