export default function About() {
     return (

        
       <div className="bg-fixed md:px-20 px-5 bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: "url('aurora.jpg')" }}>
         <div className="bg-white/80 shadow-lg w-full h-450 px-10">
         <h1 className="text-2xl sm:text-3xl font-bold mb-4 p-10">My Top 3 Songs 🎶</h1>
         <ul className="list-disc pl-5 space-y-2">

            <div className="mt-4">
              
                <img src="/tate.jpg" alt="TateMcRae" className="w-full max-w-sm h-auto rounded-md" />
                <p className="text-2xl font-bold mb-4 my-5" >Stupid - Tate McRae</p>
                <audio controls className="w-full max-w-md rounded-lg">
                <source src="/Stupid-TateMcRae.mp3" type="audio/mpeg" />
                </audio>
              </div>


           <div className="mt-4">
                <img src="/sza.jpg" alt="SZA" className="w-full my-5 max-w-sm h-auto rounded-md" />
                <p className="text-2xl font-bold mb-4 my-5">Ghost in the Machine (feat.Phoebe Bridgers) - SZA</p>
                <audio controls className="w-full max-w-md rounded-lg">
                <source src="/ghost.mp3" type="audio/mpeg" />
                    
                </audio>
              </div>


           <div className="mt-4">
                <img src="/billie.jpg" alt="BillieEllish" className="w-full my-5 max-w-sm h-auto rounded-md" />
                <p className="text-2xl font-bold mb-4 my-5">ocean eyes - Billie Ellish</p>
                <audio controls className="w-full max-w-md rounded-lg">
                <source src="/ocean.mp3" type="audio/mpeg" />
                Ocean Eyes - Billie Ellish
                </audio>
              </div>

         </ul>
         </div>
       </div>
     );
   }
   