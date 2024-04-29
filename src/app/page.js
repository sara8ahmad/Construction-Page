import React from 'react'
import { Feature } from './_components/Feature'
import Carousel from './_components/Carousel'
import { Content } from './_components/Content'
import Stats from './_components/Stats'
import Team from './_components/Team'
import Testmonial from './_components/Testmonial'
import FAQ from './_components/FAQ'

const page = () => {
  return (
    <div>
      <Carousel />
      <Feature />
      <Content />
      <Stats />
      <Team />
      <Testmonial />
      <FAQ />
      
    </div>
  )
}

export default page