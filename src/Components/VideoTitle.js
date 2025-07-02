const VideoTitle = ({title, overview}) => {
return ( 
        <div className="w-full aspect-video pt-[15%] px-20 absolute text-white bg-gradient-to-r from-black ">
       <h1 className="text-6xl font-bold">{title}</h1>
       <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button  className=" bg-gray-500  text-black w p-4 px-10 text-xl  hover:bg-opacity-50 rounded-lg">▶️ Play</button>
        <button className="bg-gray-500 mx-2 text-white p-4 px-16 text-xl bg-opacity-80 rounded-lg">More Info</button>
      </div>
     </div>
);
};
export default VideoTitle;