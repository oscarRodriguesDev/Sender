"use client"

import { useEffect, useState,useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X } from "lucide-react"
import { Facebook, Instagram, Linkedin, MapPin, PhoneCall, Twitter } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css';
import Typewriter from "typewriter-effect";
import { cn } from '@/utils/utils'
import { usePathname } from "next/navigation"




export default function Home() {
  const [isMounted, setIsMounted] = useState(false)
 
  const [isOpen, setIsOpen] = useState(false);

  const constantClassName = "flex font-medium cursor-pointer bg-clip-text hover:text-purple-500 transition-colors duration-300";

  const pathname = usePathname();


  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])
  


  useEffect(() => {
    AOS.init()
}, [])

  useEffect(() => {
    setIsMounted(true)
  }, [isMounted])

  if (!isMounted) {
    return null
  }


  return (
    <div className="bg-white flex relative flex-col bg-bkg text-black overflow-hidden">
     


      {/* group 1 */}
      <div className="absolute w-[200px] h-[150px] md:h-[200px] top-[120px] bg-cpurple
      rounded-full md:left-[240px] 2xl:left-[700px] custom-blur z-0 " />
      <div className=" hidden md:flex
      absolute w-[200px] h-[200px] top-[240px] bg-cpurple
      right-[40px] 2xl:right-[340px] custom-blur2 z-50 " />


      <section className="2xl:mx-[300px] z-[100] className='divide-black' ">
       
      <div className="flex lg:mt-[20px] mt-[10px] lg:mb-[20px] mb-[10px] lg:mx-[60px] xl:mx-[100px] 2xl:mx-[200px] mx-[30px] justify-between items-center overflow-hidden z-50">
      <div className="lg:text-[36px] md:text-[24px] sm:text-[15px] font-bold clash-display">
        <Link href="/" className="cursor-pointer">
          SEN<span className="text-purple-600">DER</span>
        </Link>
      </div>

      <div className="hidden items-center gap-x-10 xl:gap-x-24 md:flex">
        <div className={cn("flex items-center md:gap-x-3 lg:gap-x-8 xl:gap-x-12")}>
          <div className={cn("lg:text-[16px] md:text-sm", constantClassName)}>
            Timeline
          </div>
          <div className={cn("lg:text-[16px] md:text-sm", constantClassName)}>
            Overview
          </div>
          <div className={cn("lg:text-[16px] md:text-sm", constantClassName)}>
            FAQs
          </div>
          <Link href="/">
            <div className={cn(constantClassName, pathname == "/contact" ? "text-transparent" : "")}>
              Contact
            </div>
          </Link>
        </div>
        <div>
          <Link href="/login">Entrar</Link>
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-50 rounded-[8px] w-[60vw] md:w-3/4 bg-bkg overflow-hidden
        right-6 top-6 text-[14px] shadow-lg">
       teste
        </div>
      )}
    </div>

      <hr/>
      </section>


      <section className="2xl:mx-[300px]">
      <div className='flex-col'>
        <div className='flex text-[12px] md:text-[18px] justify-center md:text-end md:justify-end mt-[20px]  md:mr-[25px] lg:mr-[60px] lg:text-[24px] font-bold  '>
            <i className="z-40">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("A comunicação é a chave do sucesso de qualquer Organização")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("O Sender encurta caminhos, otimizando seu tempo e trazendo mais qualidade...")
                            .start();
                    }}
                />
            </i>
        </div>
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col items-center md:items-start md:ml-[30px] lg:ml-[60px] xl:ml-[100px] 2xl:ml-[200px] leading-tight z-40">
                <div>
                    <h1 className='flex font-bold text-[30px] md:text-[34px] lg:text-[49px] xl:text-[70px] 2xl:text-[100px] mt-[80px] clash-display'>Sender</h1>
                </div>
                <div className="flex max-w-[250px] md:max-w-[360px] lg:max-w-[430px] leading-normal mb-[20px]">
                    <p className="md:font-semibold text-center md:text-start text-[10px] lg:text-[16px]">Conecatando sua empresa de ponta a ponta</p>
                </div>
                <div>
                    <button content="Se já é cliente faça seu login" />
                </div>
                
            </div>
            <div className="flex-grow mr-[2px] z-0">
                <Image
                    src="/hackathonGuy2.png"
                    alt="menu"
                    width={700}
                    height={563}
                    draggable={false}
                    className='hidden md:flex float-right z-0'
                />
                <Image
                    src="/hackathonGuy.png"
                    alt="menu"
                    width={500}
                    height={363}
                    draggable={false}
                    className='md:hidden flex float-right z-0'
                />
            </div>
        </div>
    </div>
      </section>

      <hr />
      <section className="2xl:mx-[300px]">
     <div className="flex flex-col md:flex-row mx-[40px] lg:mx-[60px] xl:mx-[120px] 2xl:mx-[240px] my-[30px] md:my-[40px] gap-x-[100px]">
      <div data-aos='zoom-in-down' data-aos-easing='ease-in-sine' 
       className="flex my-auto 2xl:mr-[400px]">
        <Image
          src="/the-big-idea.png"
          alt="menu"
          width={490}
          height={477}
          draggable={false}
          quality={100}
        />
      </div>
      <div className="flex flex-col mt-[40px] md:my-auto">
        <div className="flex flex-col text-[18px] md:text-[24px] lg:text-[32px] leading-normal clash-display">
          <h2 data-aos='fade-left' data-aos-easing='ease-in-sine' className="font-bold text-center md:text-start">Seja Bem vindo ao Sender</h2>
   
        </div>
        <div data-aos='fade-left' data-aos-easing='ease-in-sine' className="flex mt-[14px] leading-loose max-w-[535px] 2xl:max-w-[1200px] text-center md:text-start text-[10px] md:text-[12px] lg:text-[14px]">
        O Sender é um sistema inovador que conecta todos os colaboradores de sua empresa, otimizando o tempo de resposta
         a chamados e solicitações. Com o Sender, qualquer barreira na comunicação entre colaboradores e o setor administrativo
          é eliminada, permitindo um fluxo de informações eficiente e ágil.
        </div>
      </div>
    </div>
      </section>
      
      <hr />
      <section className="2xl:mx-[300px]">
       {/*  <Rules /> */}

       <div className="flex relative flex-col md:flex-row-reverse mx-[40px] lg:mx-[60px] xl:mx-[120px] 2xl:mx-[240px] my-[30px] md:my-[40px] gap-x-[100px]">
      <div
        data-aos="zoom-in-down"
        data-aos-easing="ease-in-sine"
        className="flex my-auto 2xl:mr-[400px] z-50"
      >
        <Image
          src="/rules.png"
          alt="menu"
          width={550}
          height={557}
          draggable={false}
        />
      </div>

      {/* group 2 */}
      <div
        className="hidden md:absolute w-[250px] h-[200px] md:h-[200px] bg-cpurple
      rounded-full md:left-[120px] top-[7px] 2xl:left-[700px] custom-blur z-0 "
      />

      <div
        className="absolute w-[250px] h-[200px] md:h-[200px] bg-cpurple
       md:-right-[190px] top-[250px] 2xl:left-[700px] custom-blur z-0 "
      />

      <div className="flex flex-col mt-[40px] md:my-auto z-50">
        <div className="flex flex-col text-[18px] md:text-[24px] lg:text-[32px] leading-normal clash-display">
          <h2
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            className="font-bold text-center md:text-start"
          >
            Principais{" "}
          </h2>
          <h2
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            className="font-bold text-center md:text-start text-cpink"
          >
            Funcionalidades{" "}
          </h2>
        </div>
        
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-sine"
          className="flex mt-[14px] leading-loose max-w-[535px] 2xl:max-w-[1200px] text-center md:text-start text-[10px] md:text-[12px] lg:text-[14px]"
        >
          <ul>
            <li><strong>Envio de Atestados:</strong> Facilita o envio de documentos médicos, garantindo agilidade na comunicação e na resposta.</li>
            <li><strong>Solicitações de Férias:</strong> Simplifica o processo de solicitação de férias, tornando-o mais transparente e eficiente.</li>
            <li><strong>Gestão de Reclamações:</strong> Centraliza e organiza todas as reclamações dos colaboradores, assegurando que sejam tratadas de forma rápida e eficaz.</li>
            <li><strong>Acesso Facilitado:</strong> Proporciona acesso direto aos setores responsáveis por solucionar problemas, independentemente da localização do colaborador.</li>
          </ul>
        </div>
      </div>
    </div>
      </section>
      <hr />


      <section className="2xl:mx-[300px]">

     <div className="flex relative flex-col md:flex-row mx-[40px] lg:mx-[60px] xl:mx-[120px] 2xl:mx-[240px] my-[30px] md:my-[40px] gap-x-[100px]">
      <div
        data-aos-easing="ease-in-sine"
        data-aos="zoom-in-down"
        className="flex my-auto 2xl:mr-[400px] z-50"
      >
        <Image
          src="/attribute.png"
          alt="menu"
          width={490}
          height={477}
          draggable={false}
        />
      </div>

      {/* group 2 */}
      <div
        className="absolute w-[250px] h-[200px] md:h-[200px] bg-cpurple
      rounded-full md:left-[20px] top-[450px] 2xl:left-[700px] custom-blur z-0 "
      />

      <div className="flex flex-col mt-[40px] md:my-auto z-50">
        <div className="flex flex-col text-[18px] md:text-[24px] lg:text-[32px] leading-normal clash-display">
          <h2
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            className="font-bold text-center md:text-start"
          >
            Sender Admin
          </h2>
          <h2
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            className="font-bold text-center md:text-start text-cpink"
          >
            Eficiencia e Rapidez
          </h2>
        </div>
        <div className="flex flex-col gap-y-[20px] mt-[14px] leading-loose max-w-[535px] 2xl:max-w-[1200px] text-center md:text-start text-[10px] md:text-[12px] lg:text-[14px]">
          <div data-aos="zoom-in-up" data-aos-easing="ease-in-sine">
            <span className="text-cpinkx font-bold text-[12px] md:text-[16px]">
              O painel Sender Admin&nbsp;
            </span>{" "}
            é projetado para que os responsáveis pela administração possam
            gerenciar todos os chamados e solicitações de maneira rápida e
            eficiente. Com uma interface intuitiva e funcionalidades avançadas,
            o painel facilita a visualização e o tratamento de todas as demandas
            dos colaboradores.
          </div>
          <div data-aos="zoom-in-up" data-aos-easing="ease-in-sine">
            <span className="text-cpinkx font-bold text-[12px] md:text-[16px]">
              Visualização Centralizada:&nbsp;
            </span>{" "}
            Todos os chamados e solicitações são exibidos em um painel único, permitindo uma visão abrangente e detalhada das demandas.
          </div>
          <div data-aos="zoom-in-up" data-aos-easing="ease-in-sine">
            <span className="text-cpinkx font-bold text-[12px] md:text-[16px]">
            Priorização de Chamados:&nbsp;
            </span>{" "}
            Os administradores podem priorizar chamados com base na urgência e importância, garantindo que as solicitações críticas sejam tratadas primeiro.
          </div>
          <div data-aos="zoom-in-up" data-aos-easing="ease-in-sine">
            <span className="text-cpinkx font-bold text-[12px] md:text-[16px]">
            Rastreamento de Status:&nbsp;
            </span>{" "}
            Permite acompanhar o progresso de cada chamado, desde a abertura até a resolução, proporcionando transparência e controle total do fluxo de trabalho.
          </div>
          <div data-aos="zoom-in-up" data-aos-easing="ease-in-sine">
            <span className="text-cpinkx font-bold text-[12px] md:text-[16px]">
            Relatórios e Análises:&nbsp;
            </span>{" "}
            Gera relatórios detalhados sobre o desempenho do atendimento, identificando áreas para melhorias e garantindo um serviço contínuo e de alta qualidade.
          </div>

          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            className="mt-[20px] text-center md:text-start"
          >
            <button content="Read More" />
          </div>
        </div>
      </div>
    </div>
      </section>
      <hr />


      <section className="2xl:mx-[300px] bg-cdark">
      <div className="flex relative flex-col mx-[40px] lg:mx-[60px] xl:mx-[120px] 2xl:mx-[240px] my-[30px] md:my-[40px] gap-x-[100px]">
      
      {/* group 2 */}
      <div className="absolute w-[250px] h-[200px] md:h-[200px] bg-cpurple
        rounded-full md:left-[80px] top-[250px] 2xl:left-[700px] custom-blur z-0 " />

      <div className="absolute w-[250px] h-[200px] md:h-[200px] bg-cpurple
        rounded-full md:-right-[250px] bottom-[50px] 2xl:left-[700px] custom-blur z-0 " />

      <div className="grid grid-cols-2"> 
        <div className="hidded md:col-span-1">

        </div>
        <div className="col-span-2 md:col-span-1 flex-col mb-[20px] md:mb-[40px] mt-[20px]">
          <div className="flex flex-col text-[18px] md:text-[24px] lg:text-[32px] leading-normal clash-display">
            <h2 data-aos='fade-left' data-aos-easing='ease-in-sine' className="font-bold text-center md:text-start">Prizes and</h2>
            <h2 data-aos='fade-left' data-aos-easing='ease-in-sine' className="font-bold text-center md:text-start text-cpink">Rewards </h2>
          </div>
          <div data-aos='fade-left' data-aos-easing='ease-in-sine' className="flex mt-[14px] items-center justify-center md:items-start md:justify-start text-center md:text-start leading-loose md:max-w-[355px] 2xl:max-w-[1200px] text-[10px] md:text-[12px] lg:text-[14px]">
            Highlight of the prizes or rewards for winners and participants.
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-[40px] lg:mx-[60px] xl:mx-[120px] 2xl:mx-[240px] my-[30px] md:my-[40px] gap-x-[100px]">
        <div data-aos='fade-right' data-aos-easing='ease-in-sine' className="flex mb-[40px] 2xl:mr-[400px] z-50">
          <Image
            src="/trophy.png"
            alt="menu"
            width={598}
            height={598}
            draggable={false}
          />
        </div>
        <div data-aos='fade-left' data-aos-easing='ease-in-sine' className="flex  z-50">
          <Image
            src="/rewards.png"
            alt="menu"
            width={730}
            height={494}
            draggable={false}
          />
        </div>
      </div>
    </div>
      </section>
      <hr />


     
      <section className="2xl:mx-[300px] bg-cdark z-[80]">
        <div className="flex flex-col gap-y-[40px] text-[10px] md:text-[12px] lg:text-[14px] mx-[40px] lg:mx-[60px] xl:mx-[120px] 2xl:mx-[240px] my-[30px] md:my-[40px]">

      <div className="grid grid-cols-3 gap-y-[50px] ">
        <div className="flex flex-col md:col-span-1 gap-y-[40px] md:gap-y-0 justify-between col-span-3">
          <div className="flex flex-col">
             <div className="lg:text-[36px] text-[24px] font-bold clash-display">
              <Link href="/">
                get<span className="text-cpink">linked</span>
              </Link>
            </div>
            <p>
              Getlinked Tech Hackathon is a technology innovative program established by a group of
              organizations with the aim of showcasing young and talented individuals in the field 
              of technology
            </p>
          </div>
          <div className="">
            <div className="flex h-5 text-[10px] items-center space-x-4 text-sm">
              <div className="flex cursor-pointer text-[12px] lg:text-[14px]">Term of Use</div>
              <hr className='bg-cpink '  />
              <div className="flex cursor-pointer text-[12px] lg:text-[14px]">Privacy Policy</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:mx-auto mt-[16px] gap-y-[20px] md:col-span-1 col-span-3">
          <div className="flex cursor-pointer text-[16px] text-cpink">
            Useful Links
          </div>
          <div className="flex cursor-pointer ">
            Overview
          </div>
          <div className="flex cursor-pointer ">
            Timeline
          </div>
          <div className="flex cursor-pointer ">
            FAQs
          </div>
          <div className="flex cursor-pointer ">
            Register
          </div>
          <div className="flex gap-y-[20px] gap-x-[10px] flex-col md:flex-row ">
            <div className="text-cpink text-[10px] md:text-[12px] lg:text-[14px]">
              Follow us
            </div>
            <div className="flex gap-x-[10px]">
              <div className="relative hover:text-cpink transition cursor-pointer">
                <Instagram className="h-17 w-17" />
              </div>
              <div className="relative hover:text-cpink transition cursor-pointer">
                <Twitter className="h-17 w-17" />
              </div>
              <div className="relative hover:text-cpink transition cursor-pointer">
                <Facebook className="h-17 w-17" />
              </div>
              <div className="relative hover:text-cpink transition cursor-pointer">
                <Linkedin className="h-17 w-17" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:mx-auto mt-[16px] gap-y-[10px] md:col-span-1 col-span-3">
          <div className="flex  text-[16px] text-cpink">
            Contact Us
          </div>
          <div className="flex flex-row mt-[20px]">
            <div className="relative">
              <PhoneCall className="h-17 w-17" />
            </div>
            <div className="ml-[10px]  text-[10px] md:text-[12px] lg:text-[14px]">
              +234 6707653444
            </div>
          </div>
          <div className="flex  flex-row mt-[20px]">
            <div className="relative">
              <MapPin className="h-17 w-17" />
            </div>
            <div className="ml-[10px]  text-[10px] md:text-[12px] lg:text-[14px]">
              27, Alara street Yaba 100012 Lagos State 
            </div>
          </div>
        </div>
      </div>
      <div className="flex mx-auto">
        All rights reserved. &copy; getlinked Ltd.
      </div>
    </div>
      </section>

    </div>
  )
}
