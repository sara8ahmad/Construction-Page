import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaSquareFacebook, FaSquareTwitter } from 'react-icons/fa6'

const Team = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="h-[32rem] bg-gray-100 dark:bg-gray-800">
        <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">The Executive Team</h1>

            <div className="flex justify-center mx-auto mt-6">
                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>

            <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
            </p>
        </div>
    </div>

    <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                <img className="object-cover w-full rounded-xl aspect-square" src="/assets/c-8.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Hossam-Eldin</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">CEO</p>

                <div className="flex mt-3 -mx-2">
                <Link href="#" className="mx-2 text-gray-500 text-lg transition-colors duration-300 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400" aria-label="Reddit">
                <FaSquareFacebook />
                    </Link>

                    <Link href="https://eg.linkedin.com/in/hossam-el-din-ahmed-530953168" className="mx-2 text-lg text-gray-500 transition-colors duration-300 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400" aria-label="Facebook">
                        <FaLinkedin />
                    </Link>

                    <Link href="#" className="mx-2 text-gray-500 text-lg transition-colors duration-300 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400" aria-label="Github">
                        <FaSquareTwitter />
                    </Link>
                </div>
            </div>

            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                <img className="object-cover w-full rounded-xl aspect-square" src="/assets/c-7.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Hossam - Eldin</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Technical Lead</p>

                <div className="flex mt-3 -mx-2">
                <Link href="#" className="mx-2 text-gray-500 text-lg transition-colors duration-300 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400" aria-label="Reddit">
                <FaSquareFacebook />
                    </Link>

                    <Link href="https://eg.linkedin.com/in/hossam-el-din-ahmed-530953168" className="mx-2 text-lg text-gray-500 transition-colors duration-300 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400" aria-label="Facebook">
                        <FaLinkedin />
                    </Link>

                    <Link href="#" className="mx-2 text-gray-500 text-lg transition-colors duration-300 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400" aria-label="Github">
                        <FaSquareTwitter />
                    </Link>
                </div>
            </div>

            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                <img className="object-cover w-full rounded-xl aspect-square" src="/assets/c-8.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Hossam - Eldin</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Target Market Manger</p>

                <div className="flex mt-3 -mx-2">
                <Link href="" className="mx-2 text-gray-500 text-lg transition-colors duration-300 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400" aria-label="Reddit">
                <FaSquareFacebook />
                    </Link>

                    <Link href="https://eg.linkedin.com/in/hossam-el-din-ahmed-530953168" className="mx-2 text-lg text-gray-500 transition-colors duration-300 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400" aria-label="Facebook">
                        <FaLinkedin />
                    </Link>

                    <Link href="" className="mx-2 text-gray-500 text-lg transition-colors duration-300 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400" aria-label="Github">
                        <FaSquareTwitter />
                    </Link>
                </div>

                
            </div>
        </div>
    </div>
</section>
  )
}

export default Team