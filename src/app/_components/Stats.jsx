const Stats = () => {
    return (
      <div className=" relative bg-[rgb(23,69,145)] object-cover px-4 py-16 mx-auto md:max-w-full  md:px-24 lg:px-8 lg:py-20">
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center md:border-r">
            <h6 className="text-4xl text-white font-bold lg:text-5xl xl:text-6xl">144K</h6>
            <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
              Project Completed
            </p>
          </div>
          <div className="text-center md:border-r text-white">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">12.9K</h6>
            <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
              Stuff members
            </p>
          </div>
          <div className="text-center md:border-r text-white">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">48.3K</h6>
            <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
              Satisfied Clients
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-4xl text-white font-bold lg:text-5xl xl:text-6xl">24.5K</h6>
            <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
              Worked Employed
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default Stats