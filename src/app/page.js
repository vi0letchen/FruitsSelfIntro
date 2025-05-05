import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-fixed px-20 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('aurora.jpg')" }}>
      <div className="bg-white/80 shadow-lg w-full h-880 px-10">
<div>
        <h1 className="text-3xl font-bold mb-4 p-8">Hi, I'm Violet!</h1>
        <p className="mb-4 text-lg">
        Hello everyone!🥰 My name is Violet Chen. This is my final year studying Computer Science and Infomation System Management.
        I was born in China in 2003, and I lived in my home country for 15 years before moving to New Zealand. 
      </p>
      <div className="grid grid-cols-2 max-w-200 gap-8 items-center px-10">
        <img src="/viocake.jpg" alt="bbq" className="w-full h-auto rounded-md" />


        <img src="/makima.jpg" alt="hotpot" className="w-full h-auto rounded-md" />

        </div>
      </div>
      
      <div>
              <h1 className="text-3xl font-bold mb-4 my-10">Life in auckland</h1>
      <p className="mb-4 text-lg">
      I enjoy trying out different restaurants around Auckland.
      </p>
      <div className="grid grid-cols-2 max-w-250 gap-8 items-center px-10">
        <img src="/bbq.jpg" alt="bbq" className="w-full h-auto rounded-md" />


        <div className="grid grid-rows-2 gap-4">
          <img src="/hotpot.jpg" alt="hotpot" className="w-full h-auto rounded-md" />
          <img src="/dessert.jpg" alt="dessert" className="w-full h-auto rounded-md" />
        </div>
        </div>

      </div>


      <h1 className="text-3xl font-bold mb-4 my-5">Spend time with friends</h1>
      <p className="mb-4 text-lg">
      I made a lot of friends in New Zealand! 
      </p>
      <div className="flex flex-wrap max-w-270 items-center gap-4 px-30">
      <img src="/denvoport.jpg" alt="denvoport" className="w-full max-w-300 h-auto rounded-md" />
      <img src="/malatang.jpg" alt="malatang" className="w-full max-w-300 h-auto rounded-md" />
      <img src="/ptchev.jpg" alt="ptchev" className="w-full max-w-300 h-auto rounded-md" />
      </div>

      <div >
      <h1 className="text-3xl font-bold mb-4 my-10">My favorate link</h1>
      <a 
      href="https://chatgpt.com/"
      target="_blank"
      rel="noopener noreferrer"

      >
          <img
            src="/GPT.jpg"
            alt="Clickable Button Image"
            className="my-5 ml-15 w-48 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition transform duration-200"
          />
      </a>
      </div>
      </div>
      <div>
        <p>       ww</p>
      </div>

    </div>
    

  );
}
