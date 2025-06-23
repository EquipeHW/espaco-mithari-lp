"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Heart, Zap, Brain, CheckCircle, Star, MapPin, Phone, Instagram, Menu, X, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export default function EspacoMithariLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className={`w-full border-b-inherit bg-white`}>
        {/* Faixa Superior com Redes Sociais */}
        <div className="border-b border-gray-100 bg-[#e8566c] text-white">
          <div className="container flex h-10 items-center justify-end">
            <div className="flex items-center gap-4">
              <Link
                href="https://api.whatsapp.com/send?phone=5511989113465&text=Ol%C3%A1,%20tudo%20bem?%20gostaria%20de%20agendar%20uma%20consulta"
                target="_blank"
                className="flex items-center gap-1 text-xs hover:text-white/80 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="h-3 w-3" />
                WhatsApp
              </Link>
              <Link
                href="https://instagram.com/espacomithari"
                target="_blank"
                className="flex items-center gap-1 text-xs hover:text-white/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-3 w-3" />
                Instagram
              </Link>
              <Link
                href="https://facebook.com/espacomithari"
                target="_blank"
                className="flex items-center gap-1 text-xs hover:text-white/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-3 w-3" />
                Facebook
              </Link>
            </div>
          </div>
        </div>

        {/* Navbar Fixo */}
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/logomithari.png"
              alt="Espaço Mithari Logo"
              width={200}
              height={100}
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 mx-auto">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-[#333333] hover:text-[#e8566c] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("tratamentos")}
              className="text-sm font-medium text-[#333333] hover:text-[#e8566c] transition-colors"
            >
              Tratamentos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-[#333333] hover:text-[#e8566c] transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-sm font-medium text-[#333333] hover:text-[#e8566c] transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-[#333333] hover:text-[#e8566c] transition-colors"
            >
              FAQ
            </button>
          </nav>

          <Button asChild className="hidden md:flex border-[#e8566c] text-[#fff] hover:bg-[#e8566c] hover:text-[white] font-bold">
            <Link href="https://api.whatsapp.com/send?phone=5511989113465&text=Ol%C3%A1,%20tudo%20bem?%20gostaria%20de%20agendar%20uma%20consulta" target="_blank">
              <Phone className="mr-2 h-5 w-5" />
              AGENDAR CONSULTA
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-[#333333] hover:text-[#e8566c] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("tratamentos")}
                className="text-left text-[#333333] hover:text-[#e8566c] transition-colors"
              >
                Tratamentos
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-[#333333] hover:text-[#e8566c] transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-left text-[#333333] hover:text-[#e8566c] transition-colors"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-[#333333] hover:text-[#e8566c] transition-colors"
              >
                FAQ
              </button>
              <Link href="https://api.whatsapp.com/send?phone=5511989113465&text=Ol%C3%A1,%20tudo%20bem?%20gostaria%20de%20agendar%20uma%20consulta" target="_blank">
                <Button className="w-full bg-[#e8566c] hover:bg-[#d64560] text-white font-bold">
                AGENDAR CONSULTA
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative py-14 md:py-10 bg-gradient-to-l  from-[#e98a92] to-[#f8d7da] to-[#e8566c] overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#f8f6f3_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-10"></div>
          <div className="container grid gap-8 md:grid-cols-2 items-center relative">
            <div className="space-y-4 md:space-y-6 z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#fff] leading-tight">
                Reconecte-se Com Seu <span className="text-[#e8566c]">Equilíbrio Natural</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-white font-light">
                Ansiedade, dores crônicas ou cansaço excessivo não precisam ser sua rotina...
              </h2>
              <Button size="lg" className="bg-gradient-to-r from-[#e8566c] to-[#d64560] hover:from-[#d64560] hover:to-[#e8566c] text-white shadow-lg rounded-xl">
                <Link
                  href="https://api.whatsapp.com/send?phone=5511989113465&text=Ol%C3%A1,%20tudo%20bem?%20gostaria%20de%20agendar%20uma%20consulta"
                  className="uppercase font-bold flex items-center font-bold"
                  target="_blank"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  AGENDAR CONSULTA
                </Link>
              </Button>
              
            </div>
            <div className="relative w-full h-[400px] md:h-[600px] lg:h-[600px] flex items-center justify-center mt-10 md:mt-0">
             
              <Image
                src="/hero.png?height=600&width=500"
                alt="Ambiente terapêutico do Espaço Mithari"
                width={500}
                height={600}
                className="object-contain object-right-bottom transform scale-125 rounded-2xl"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-[#333333]">+1.500 sessões realizadas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Benefícios */}
        <section className="py-20 bg-gradient-to-b from-white to-[#f8d7da]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Transforme Sua Vida Com Terapias Holísticas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descubra como nossas terapias podem ajudar você a superar desafios e encontrar o bem-estar que merece
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-zinc-900 hover:border-[#e8566c] bg-white/90 backdrop-blur-sm rounded-2xl">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e6a3a3] to-[#e8566c] rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333]">Equilíbrio Emocional</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#e8566c] mr-2" />
                      Redução da ansiedade
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#e8566c] mr-2" />
                      Controle do estresse
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#e8566c] mr-2" />
                      Melhora do humor
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-zinc-900 hover:border-[#e8566c] bg-white/90 backdrop-blur-sm rounded-2xl">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e6a3a3] to-[#e8566c] rounded-full flex items-center justify-center mx-auto">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333]">Energia Renovada</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#e8566c] mr-2" />
                      Combate ao cansaço
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#e8566c] mr-2" />
                      Aumento da vitalidade
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#e8566c] mr-2" />
                      Melhora do sono
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-zinc-900 hover:border-[#e8566c] bg-white/90 backdrop-blur-sm rounded-2xl">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e6a3a3] to-[#e8566c] rounded-full flex items-center justify-center mx-auto">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333]">Clareza Mental</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#e8566c] mr-2" />
                      Foco aprimorado
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#e8566c] mr-2" />
                      Tomada de decisões
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#e8566c] mr-2" />
                      Autoconhecimento
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link href="https://api.whatsapp.com/send?phone=5511989113465&text=Ol%C3%A1,%20tudo%20bem?%20gostaria%20de%20agendar%20uma%20consulta" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#e8566c] text-[#e8566c] hover:bg-gradient-to-r hover:from-[#e8566c] hover:to-[#d64560] hover:text-white font-bold rounded-xl"
                >
                     AGENDAR CONSULTA
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Tratamentos */}
        <section id="tratamentos" className="py-20 bg-gradient-to-b from-[#e8566c] to-[#d64560]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossos Tratamentos Especializados</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Terapias holísticas certificadas para sua transformação completa
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Card className="p-6 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm rounded-2xl">
                    <CardContent className="space-y-3">
                      <h3 className="text-xl font-bold text-[#333333]">Barras de Access®</h3>
                      <p className="text-gray-600">
                        Técnica que libera bloqueios mentais e emocionais através de toques suaves em pontos específicos
                        da cabeça.
                      </p>
                      <Badge className="bg-[#e8566c] text-white">Certificado Internacional</Badge>
                    </CardContent>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm rounded-2xl">
                    <CardContent className="space-y-3">
                      <h3 className="text-xl font-bold text-[#333333]">ThetaHealing®</h3>
                      <p className="text-gray-600">
                        Método de cura energética que trabalha com ondas cerebrais theta para transformar crenças
                        limitantes.
                      </p>
                      <Badge className="bg-[#e8566c] text-white">Praticante Certificada</Badge>
                    </CardContent>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm rounded-2xl">
                    <CardContent className="space-y-3">
                      <h3 className="text-xl font-bold text-[#333333]">Terapia Floral</h3>
                      <p className="text-gray-600">
                        Essências florais personalizadas para equilibrar emoções e promover bem-estar natural.
                      </p>
                      <Badge className="bg-[#e8566c] text-white">Fórmulas Personalizadas</Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative w-full">
                  <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
                  <Image
                    src="/mithari2.png?height=400&width=500"
                    alt="Sala de terapias do Espaço Mithari"
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-lg"
                  />
                </div>

                <Card className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl">
                  <CardContent className="space-y-4">
                    <h3 className="text-xl font-bold text-[#333333]">Nossos Diferenciais</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#e8566c] mr-3" />
                        <span className="text-gray-700">Atendimento 100% personalizado</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#e8566c] mr-3" />
                        <span className="text-gray-700">Profissionais certificados internacionalmente</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#e8566c] mr-3" />
                        <span className="text-gray-700">Ambiente acolhedor e seguro</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#e8566c] mr-3" />
                        <span className="text-gray-700">Acompanhamento contínuo</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o Espaço */}
        <section id="sobre" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-[#e8566c] text-white text-sm px-3 py-1">Desde 2018</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">Um Porto Seguro para Cura e Renascimento</h2>
                  <div className="text-lg text-gray-600 italic">
                    <p className="mb-4">
                      "Minha missão é ser um canal de luz e cura, ajudando pessoas a reconectarem-se com sua essência e encontrarem o caminho para uma vida plena e equilibrada."
                    </p>
                  </div>
                  <p className="text-gray-600">
                    Há quase uma década, o Espaço Mithari é um lugar de transformação profunda em Osasco - SP. Nossa fundadora, médica com 30 anos de experiência e formação internacional em terapias integrativas, guia cada pessoa em uma jornada única de autodescoberta e cura multidimensional, onde corpo, mente e energia se harmonizam.
                  </p>
                  <p className="text-gray-600">
                    Aqui, você é recebido(a) com escuta atenta e tratamentos personalizados, que integram o melhor da medicina moderna e das terapias ancestrais. Porque acreditamos que a verdadeira cura acontece quando nos enxergamos em nossa totalidade, e nos permitimos renascer.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#e8566c]">+1.500</div>
                    <div className="text-sm text-gray-600">Sessões Realizadas</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#e8566c]">9</div>
                    <div className="text-sm text-gray-600">Anos de Experiência</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#e8566c]">98%</div>
                    <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
                  </div>
                </div>
              </div>

              <div className="relative justify-end mx-auto">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full max-w-[600px]"
                >
                  <CarouselContent>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="/mithari.png"
                          alt="Espaço Mithari"
                          width={600}
                          height={600}
                          className="rounded-2xl shadow-2xl"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="/mithari3.png"
                          alt="Espaço Mithari"
                          width={600}
                          height={600}
                          className="rounded-2xl shadow-2xl"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2 text-white" />
                  <CarouselNext className="right-2 text-white" />
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="py-20 bg-gradient-to-b from-[#e8566c] to-[#d64560]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O Que Nossos Clientes Dizem</h2>
              <p className="text-xl text-white/90">Histórias reais de transformação e cura</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm rounded-2xl">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "Depois de anos lutando contra a ansiedade, finalmente encontrei paz no Espaço Mithari. As sessões de
                    Barras de Access mudaram completamente minha vida."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Cliente Maria Silva"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-[#333333]">Maria Silva</div>
                      <div className="text-sm text-gray-500">Empresária</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm rounded-2xl">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "O ThetaHealing me ajudou a superar traumas do passado que eu nem sabia que ainda me afetavam. Sou uma
                    pessoa completamente nova!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Cliente João Santos"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-[#333333]">João Santos</div>
                      <div className="text-sm text-gray-500">Professor</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm rounded-2xl">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "As terapias florais personalizadas foram fundamentais para equilibrar minhas emoções. Recomendo de
                    olhos fechados!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Cliente Ana Costa"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-[#333333]">Ana Costa</div>
                      <div className="text-sm text-gray-500">Psicóloga</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg text-white mb-6">Quer resultados assim? Agende agora sua sessão experimental!</p>
              <Link href="https://api.whatsapp.com/send?phone=5511989113465&text=Ol%C3%A1,%20tudo%20bem?%20gostaria%20de%20agendar%20uma%20consulta" target="_blank">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-white to-[#f8d7da] text-[#e8566c] hover:from-[#f8d7da] hover:to-white font-bold px-8 py-4 text-lg rounded-xl"
                >
                      AGENDAR CONSULTA
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-gradient-to-b from-white to-[#f8d7da]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Perguntas Frequentes</h2>
              <p className="text-xl text-gray-600">Esclarecemos suas principais dúvidas</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-2xl px-6 bg-white/90 backdrop-blur-sm">
                <AccordionTrigger className="text-left font-semibold text-[#333333] hover:text-[#e8566c]">
                  Como funcionam as terapias holísticas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  As terapias holísticas trabalham com a pessoa como um todo - corpo, mente e espírito. Utilizamos
                  técnicas como Barras de Access®, ThetaHealing® e Terapia Floral para identificar e liberar bloqueios
                  energéticos, promovendo o equilíbrio natural do organismo e o bem-estar integral.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-2xl px-6 bg-white/90 backdrop-blur-sm">
                <AccordionTrigger className="text-left font-semibold text-[#333333] hover:text-[#e8566c]">
                  Quantas sessões são necessárias para ver resultados?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Cada pessoa é única e responde de forma diferente aos tratamentos. Muitos clientes relatam melhorias já
                  na primeira sessão, especialmente com as Barras de Access®. Para resultados duradouros, recomendamos um
                  acompanhamento personalizado que pode variar de 3 a 8 sessões, dependendo da necessidade individual.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-2xl px-6 bg-white/90 backdrop-blur-sm">
                <AccordionTrigger className="text-left font-semibold text-[#333333] hover:text-[#e8566c]">
                  As terapias têm alguma contraindicação?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  As terapias holísticas que oferecemos são seguras e não invasivas. Não possuem contraindicações e podem
                  ser complementares a tratamentos médicos convencionais. Sempre recomendamos que nossos clientes
                  mantenham acompanhamento médico quando necessário, pois nossas terapias são complementares e não
                  substituem tratamentos médicos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Ainda tem dúvidas? Entre em contato conosco!</p>
              <Link href="https://api.whatsapp.com/send?phone=5511989113465&text=Ol%C3%A1,%20tudo%20bem?%20gostaria%20de%20agendar%20uma%20consulta" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#e8566c] text-[#e8566c] hover:bg-gradient-to-r hover:from-[#e8566c] hover:to-[#d64560] hover:text-white font-bold rounded-xl"
                >
                      AGENDAR CONSULTA
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Formulário de Contato */}
     
      {/* Rodapé */}
      <footer className="bg-[#333333] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
               
                <Image
                  src="/logomithari.png"
                  alt="Espaço Mithari Logo"
                  width={200}
                  height={100}
                  className="h-24 w-auto"
                />
                
                
              </div>
              <p className="text-gray-300">Transformando vidas através de terapias holísticas desde 2015.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contato</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(12) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>São José dos Campos/SP</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="w-4 h-4" />
                  <span>@espacomithari</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Terapias</h4>
              <div className="space-y-2 text-gray-300">
                <div>Barras de Access®</div>
                <div>ThetaHealing®</div>
                <div>Terapia Floral</div>
                <div>Atendimento Personalizado</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Desenvolvido por</h4>
              <Image
                src="/logo02.png"
                alt="Logo HW Desenvolvimento"
                width={100}
                height={50}
                className="w-auto"
              />
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Espaço Mithari. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

     
    </div>
  )
}
