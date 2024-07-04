"use client"
//template: https://github.com/akins-dev/hackathon
import { useEffect, useState } from 'react'

import Hero from '@/components/landing/hero'
import Navbar from '@/components/landing/navbar'
import Introduction from '@/components/landing/introduction'
import Rules from '@/components/landing/rules'
import Attributes from '@/components/landing/attributes'
import FAQ from '@/components/landing/faq'
/* import { Separator } from "@/components/ui/separator" */
import Timeline from '@/components/landing/timeline'
import Rewards from '@/components/landing/rewards'
import Partners from '@/components/landing/partners'
import Terms from '@/components/landing/terms'
import Footer from '@/components/landing/footer'


export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [isMounted])

  if (!isMounted) {
    return null
  }

  return (
    <div className="flex relative flex-col bg-bkg text-white overflow-hidden">
      <div className="star-layers fixed h-[100vh] w-[100vw] 2xl:translate-x-[10%]">
        <div id="stars" className="max-md:invisible" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
      {/* group 1 */}
      <div className="absolute w-[200px] h-[150px] md:h-[200px] top-[120px] bg-cpurple
      rounded-full md:left-[240px] 2xl:left-[700px] custom-blur z-0 " />
      <div className=" hidden md:flex
      absolute w-[200px] h-[200px] top-[240px] bg-cpurple
      right-[40px] 2xl:right-[340px] custom-blur2 z-50 " />

      <section className="2xl:mx-[300px] z-[100]">
        <Navbar />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px]">
        <Hero />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px]">
        <Introduction />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px]">
        <Rules />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px]">
        <Attributes />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px]">
        <FAQ />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px]">
        <Timeline />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px] bg-cdark">
        <Rewards />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px]">
        <Partners />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px]">
        <Terms />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px] bg-cdark z-[80]">
        <Footer />
      </section>

    </div>
  )
}