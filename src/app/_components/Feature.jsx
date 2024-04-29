import { MdEngineering } from "react-icons/md";
import { HiHomeModern } from "react-icons/hi2";
import { HiPencilSquare } from "react-icons/hi2";

export const Feature = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
            <div className="lg:flex lg:items-center">
                <div className="w-full space-y-12 lg:w-1/2 ">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">explore our <br/> awesome Services</h1>
    
                        <div className="mt-2">
                            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        </div>
                    </div>
    
                    <div className="md:flex md:items-start md:-mx-4">
                        <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                           <MdEngineering size='30px' />
                        </span>
    
                        <div className="mt-4 md:mx-4 md:mt-0">
                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Structural Desgin</h1>
    
                            <p className="mt-3 text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>
                    </div>
    
                    <div className="md:flex md:items-start md:-mx-4">
                        <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                           <HiHomeModern size='30px' />
                        </span>
    
                        <div className="mt-4 md:mx-4 md:mt-0">
                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Reconstruction Services</h1>
    
                            <p className="mt-3 text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>
                    </div>
    
                    <div className="md:flex md:items-start md:-mx-4">
                        <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                            <HiPencilSquare size='30px' />
                        </span>
    
                        <div className="mt-4 md:mx-4 md:mt-0">
                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Construction Consultant</h1>
    
                            <p className="mt-3 text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>
                    </div>
                </div>
    
                <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                    <img className="w-[28rem] h-[28rem] object-cover bg-opacity-65 xl:w-[34rem] xl:h-[34rem] rounded-full" src="/assets/c-2.jpg" alt=""/>
                </div>
            </div>
    
            <hr className="my-12 border-gray-200 dark:border-gray-700"/>
    
            
        </div>
    </section>
    );
  };