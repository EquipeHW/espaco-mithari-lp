"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, MapPin, Phone, Calendar, Music, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import TrackingScript from "@/app/components/TrackingScript";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function MusicoterapiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8d7da] to-white">
      <TrackingScript pageName="musicoterapia" />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 min-h-[400px] md:min-h-[500px] overflow-hidden bg-[url('/musicoterapia/2.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 z-20" style={{background: 'linear-gradient(90deg, #e98a92cc 60%, #f8d7dacc 80%, #e8566ccc 100%)'}} />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(#f8f6f3_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-10" />
          <div className="container flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] relative z-30">
            <div className="space-y-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-4">
                  Musicoterapia
                </h1>
                <p className="text-2xl md:text-3xl text-white/90 mb-8 drop-shadow-md">
                  Transformando vidas através da música e da expressão musical
                </p>
              </motion.div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://wa.me/5511989113465" target="_blank">
                  <Button size="lg" className="bg-white text-[#e8566c] hover:bg-white/90 rounded-xl text-lg md:text-xl px-8 py-4 font-bold shadow-lg">
                    AGENDAR SESSÃO
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introdução Musicoterapia com Carrossel */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#e8566c] mb-6">O que é Musicoterapia?</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                <span className="font-semibold text-[#e8566c]">Transformação e cuidado através da música e experiências musicais.</span><br/><br/>
                A musicoterapia é uma prática terapêutica inovadora que utiliza a música e suas diversas formas para criar experiências sonoras que promovem o bem-estar, a expressão, a comunicação e a integração emocional, física e social.<br/><br/>
                Por meio de sons, jogos, improvisações e vivências musicais, a musicoterapia ajuda a reconectar com a essência, liberar emoções, desenvolver habilidades e fortalecer vínculos, atendendo às necessidades individuais em diferentes fases da vida.
              </p>
              <div className="flex justify-center md:justify-start mt-6">
                <a href="https://wa.me/5511989113465" target="_blank" rel="noopener noreferrer">
                  <button className="py-3 px-8 rounded-2xl bg-[#e8566c] text-white font-bold text-lg shadow-md hover:bg-[#d64560] transition">Agendar Sessão</button>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-lg md:max-w-xl lg:max-w-2xl">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <img src="/musicoterapia/1.jpeg" alt="Musicoterapia 1" className="rounded-3xl shadow-2xl object-cover w-full h-[320px] md:h-[400px] lg:h-[450px]" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <img src="/musicoterapia/2.jpeg" alt="Musicoterapia 2" className="rounded-3xl shadow-2xl object-cover w-full h-[320px] md:h-[400px] lg:h-[450px]" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <img src="/musicoterapia/3.jpeg" alt="Musicoterapia 3" className="rounded-3xl shadow-2xl object-cover w-full h-[320px] md:h-[400px] lg:h-[450px]" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <img src="/musicoterapia/4.jpeg" alt="Musicoterapia 4" className="rounded-3xl shadow-2xl object-cover w-full h-[320px] md:h-[400px] lg:h-[450px]" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <img src="/musicoterapia/5.jpeg" alt="Musicoterapia 5" className="rounded-3xl shadow-2xl object-cover w-full h-[320px] md:h-[400px] lg:h-[450px]" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <img src="/musicoterapia/6.jpeg" alt="Musicoterapia 6" className="rounded-3xl shadow-2xl object-cover w-full h-[320px] md:h-[400px] lg:h-[450px]" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <img src="/musicoterapia/7.jpeg" alt="Musicoterapia 7" className="rounded-3xl shadow-2xl object-cover w-full h-[320px] md:h-[400px] lg:h-[450px]" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2 text-[#e8566c] bg-white/80" />
                <CarouselNext className="right-2 text-[#e8566c] bg-white/80" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Diferenciais Section */}
        <section id="diferenciais" className="py-20 bg-gradient-to-b from-white to-[#f8d7da]/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e8566c_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-5"></div>
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-white/80 text-[#e8566c] rounded-full text-sm font-medium mb-4 shadow">
                Nossos Diferenciais
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#e8566c] mb-4">
                O que nos diferencia
              </h2>
            </div>
            <div className="mx-auto items-center grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
              <Card className="w-full max-w-xs sm:max-w-sm mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl flex flex-col items-center justify-between p-6 sm:p-8 break-words overflow-hidden">
                <span className="text-6xl mb-4">🎵</span>
                <h3 className="text-xl font-semibold mb-2 text-[#e8566c] text-center">Abordagem Personalizada</h3>
                <p className="text-gray-700 text-center">Cada ser é único — por isso, nossos atendimentos são adaptados às necessidades individuais de crianças, adolescentes, adultos e famílias, respeitando sua história, ritmo e expressão.</p>
              </Card>
              <Card className="w-full max-w-xs sm:max-w-sm mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl flex flex-col items-center justify-between p-6 sm:p-8 break-words overflow-hidden">
                <span className="text-6xl mb-4">🎶</span>
                <h3 className="text-xl font-semibold mb-2 text-[#e8566c] text-center">Técnicas Diversificadas</h3>
                <p className="text-gray-700 text-center">Utilizamos diversas abordagens da musicoterapia clínica, incluindo canto terapêutico, improvisação musical, relaxamento sonoro, jogos musicais, musicalização afetiva e arteterapia.</p>
              </Card>
              <Card className="w-full max-w-xs sm:max-w-sm mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl flex flex-col items-center justify-between p-6 sm:p-8 break-words overflow-hidden">
                <span className="text-6xl mb-4">🤝</span>
                <h3 className="text-xl font-semibold mb-2 text-[#e8566c] text-center">Equipe Especializada</h3>
                <p className="text-gray-700 text-center">Contamos com profissionais altamente capacitados, com formações em múltiplas áreas terapêuticas e experiência com diferentes perfis e condições de saúde, para oferecer um cuidado amplo, ético e sensível.</p>
              </Card>
            </div>
            <div className="flex justify-center mt-10">
              <a href="https://wa.me/5511989113465" target="_blank" rel="noopener noreferrer">
                <button className="py-3 px-8 rounded-2xl bg-[#e8566c] text-white font-bold text-lg shadow-md hover:bg-[#d64560] transition">Agendar Sessão</button>
              </a>
            </div>
          </div>
        </section>

        {/* Equipe Section */}
        <section className="py-20 bg-gradient-to-b from-[#f8d7da]/30 to-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e8566c_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-5"></div>
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#e8566c] mb-4">
                Nossa Equipe Especializada
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Profissionais altamente qualificados para cuidar da sua saúde através da música
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
              <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                <img
                  src="/musicoterapia/4.jpeg"
                  alt="Profissional de Musicoterapia"
                  className="rounded-full w-72 h-72 md:w-[28rem] md:h-[28rem] object-cover border-4 border-[#e98a92] shadow-xl bg-white"
                />
              </div>
              <div className="w-full">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#e8566c] mb-2">Equipe de Musicoterapia</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-2">
                    Nossa equipe é formada por profissionais especializados em diferentes áreas da musicoterapia, preparados para atender todas as idades e necessidades. Trabalhamos com cuidado emocional, relacional e expressivo por meio da música, do som e da escuta terapêutica, promovendo saúde mental, desenvolvimento e bem-estar.
                  </p>
                  <p className="text-gray-500 text-base">
                    Atendimento individualizado, ético e sensível, com foco no acolhimento e na transformação através da música.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <a href="https://wa.me/5511989113465" target="_blank" rel="noopener noreferrer">
                <button className="py-3 px-8 rounded-2xl bg-[#e8566c] text-white font-bold text-lg shadow-md hover:bg-[#d64560] transition">Agendar Sessão</button>
              </a>
            </div>
          </div>
        </section>

        {/* Equipe - Lira Satya */}
        <section className="py-20 bg-gradient-to-b from-[#f8d7da]/30 to-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e8566c_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-5"></div>
          <div className="container max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-2/4 flex justify-center mb-8 md:mb-0">
                <img
                  src="/musicoterapia/1.jpeg"
                  alt="Lira Satya - Musicoterapeuta"
                  className="rounded-3xl shadow-2xl object-cover w-[500px] h-[500px] border-4 border-[#e98a92] bg-white"
                  style={{objectPosition: 'center top'}}
                />
              </div>
              <div className="w-full md:w-2/4 space-y-4">
                <div className="inline-block px-4 py-2 bg-white/80 text-[#e8566c] rounded-full text-sm font-bold mb-2 shadow">
                  Sobre
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#e8566c] mb-2">Lira Satya</h2>
                <p className="text-[#e8566c] font-semibold text-lg mb-2">Musicoterapeuta Integrativa | Canto Terapêutico e Arteterapia</p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Lira Satya é musicoterapeuta com atuação voltada ao cuidado emocional, relacional e expressivo por meio da música, do som e da escuta terapêutica. Atende bebês, crianças, adolescentes e adultos — tanto neurotípicos quanto neurodivergentes, incluindo pessoas com autismo, síndrome de Down e outras condições do desenvolvimento.<br/><br/>
                  Seu trabalho une a musicoterapia clínica a práticas de canto terapêutico e arteterapia, promovendo autoconhecimento, desenvolvimento global, expressão emocional, vínculo afetivo e bem-estar.<br/><br/>
                  Lira também é formada em Constelação Familiar, Psicologia Transpessoal, Reiki, Comunicação Não Violenta, Reprogramação Mental, ThetaHealing, Tarot Terapêutico, Ginecologia Cristalina, Cacau Terapêutico e Dança Havaiana — formações que enriquecem sua escuta e ampliam o olhar para a singularidade de cada ser.<br/><br/>
                  <span className="text-[#e8566c] italic">Acredita que cada pessoa carrega um som único — e que, ao ser acolhido com presença, esse som pode se transformar em cura, verdade e expressão plena da alma.</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <a href="https://wa.me/5511989113465" target="_blank" rel="noopener noreferrer">
                <button className="py-3 px-8 rounded-2xl bg-[#e8566c] text-white font-bold text-lg shadow-md hover:bg-[#d64560] transition">Agendar Sessão</button>
              </a>
            </div>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section className="py-20 relative overflow-hidden" style={{ background: '#e8566c' }}>
          {/* Elementos geométricos decorativos */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/30 rounded-full blur-2xl z-0"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-[#fff0f3]/50 rounded-full blur-3xl z-0"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#e98a92]/40 rounded-full blur-xl z-0"></div>
          <div className="absolute bottom-10 left-1/2 w-24 h-24 bg-white/40 rounded-full blur-2xl z-0"></div>
          <div className="container max-w-8xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center drop-shadow-lg">Áreas de Atuação</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
              {/* Card 1 */}
              <div className="rounded-3xl p-[2px] bg-[linear-gradient(135deg,#e98a92,#e8566c)] shadow-2xl">
                <div className="flex flex-col items-center bg-white/90 rounded-3xl p-10 h-full min-h-[440px] justify-between">
                  <div className="flex flex-col items-center mb-6">
                    <span className="text-6xl mb-4">👧🧒</span>
                    <h3 className="text-xl font-extrabold text-[#e8566c] text-center mb-4">Crianças e Adolescentes</h3>
                    <ul className="list-none space-y-3 text-gray-700 text-base font-medium w-full max-w-xs mx-auto">
                      <span className="text-center">Processos lúdicos, afetivos e estruturantes para o desenvolvimento global.</span>
                      <li className="flex items-start gap-3"><span className="mt-1 text-[#e8566c]">●</span> <b>Indicado para:</b></li>
                      <li className="flex items-start gap-3 ml-6"><span className="mt-1 text-[#e98a92]">♪</span> Estimulação cognitiva e sensório-motora</li>
                      <li className="flex items-start gap-3 ml-6"><span className="mt-1 text-[#e98a92]">♪</span> Expressão emocional e comunicação</li>
                      <li className="flex items-start gap-3 ml-6"><span className="mt-1 text-[#e98a92]">♪</span> Desenvolvimento de habilidades sociais</li>
                      <li className="flex items-start gap-3 ml-6"><span className="mt-1 text-[#e98a92]">♪</span> Crianças e adolescentes com autismo, síndrome de Down ou neurodivergências</li>
                      <li className="flex items-start gap-3 ml-6"><span className="mt-1 text-[#e98a92]">♪</span> Vínculo familiar e fortalecimento da autoestima</li>
                    </ul>
                  </div>
                  <a href="https://wa.me/5511989113465" target="_blank" rel="noopener noreferrer">
                    <button className="w-full py-3 px-3 rounded-xl bg-[#e8566c] text-white font-bold text-lg shadow-md hover:bg-[#d64560] transition">Agendar Sessão</button>
                  </a>
                </div>
              </div>
              {/* Card 2 */}
              <div className="rounded-3xl p-[2px] bg-[linear-gradient(135deg,#e98a92,#e8566c)] shadow-2xl">
                <div className="flex flex-col items-center bg-white/90 rounded-3xl p-10 h-full min-h-[440px] justify-between">
                  <div className="flex flex-col items-center mb-6">
                    <span className="text-6xl mb-4">🧑‍🦰</span>
                    <h3 className="text-xl font-extrabold text-[#e8566c] text-center mb-4">Adultos</h3>
                    <ul className="list-none space-y-3 text-gray-700 text-base font-medium w-full max-w-xs mx-auto">
                      <span>Acolhimento através da música para promover saúde mental e equilíbrio emocional. </span>
                      <li className="flex items-start gap-3"><span className="mt-1 text-[#e8566c]">●</span> <b>Atuação em:</b></li>
                      <li className="flex items-start gap-3 ml-6"><span className="mt-1 text-[#e98a92]">♪</span> Ansiedade e estresse</li>
                      <li className="flex items-start gap-3 ml-6"><span className="mt-1 text-[#e98a92]">♪</span> Depressão e estados emocionais desafiadores</li>
                      <li className="flex items-start gap-3 ml-6"><span className="mt-1 text-[#e98a92]">♪</span> Desenvolvimento pessoal e emocional</li>
                      <li className="flex items-start gap-3 ml-6"><span className="mt-1 text-[#e98a92]">♪</span> Traumas e bloqueios emocionais</li>
                      <li className="flex items-start gap-3 ml-6"><span className="mt-1 text-[#e98a92]">♪</span> Resgate da criatividade e da expressão</li>
                    </ul>
                  </div>
                  <a href="https://wa.me/5511989113465" target="_blank" rel="noopener noreferrer">
                    <button className="w-full py-3 px-3 rounded-xl bg-[#e8566c] text-white font-bold text-lg shadow-md hover:bg-[#d64560] transition">Agendar Sessão</button>
                  </a>
                </div>
              </div>
              {/* Card 3 */}
              <div className="rounded-3xl p-[2px] bg-[linear-gradient(135deg,#e98a92,#e8566c)] shadow-2xl">
                <div className="flex flex-col items-center bg-white/90 rounded-3xl p-10 h-full min-h-[440px] justify-between">
                  <div className="flex flex-col items-center mb-6">
                    <span className="text-6xl mb-4">🤰👨‍👩‍👧</span>
                    <h3 className="text-xl font-extrabold text-[#e8566c] text-center mb-4">Familiar e primeira infância</h3>
                    <ul className="list-none space-y-3 text-gray-700 text-base font-medium w-full max-w-xs mx-auto">
                      <li className="flex items-start gap-3"><span className="mt-1 text-[#e8566c]">●</span> Acompanhamento de gestantes e vínculos gestacionais</li>
                      <li className="flex items-start gap-3"><span className="mt-1 text-[#e8566c]">●</span> Musicalização afetiva entre mães, bebês e cuidadores</li>
                      <li className="flex items-start gap-3"><span className="mt-1 text-[#e8566c]">●</span> Fortalecimento dos laços familiares através da música</li>
                      <li className="flex items-start gap-3"><span className="mt-1 text-[#e8566c]">●</span> Acolhimento emocional no puerpério e primeiras infâncias</li>
                    </ul>
                  </div>
                  <a href="https://wa.me/5511989113465" target="_blank" rel="noopener noreferrer">
                    <button className="w-full py-3 px-3 rounded-xl bg-[#e8566c] text-white font-bold text-lg shadow-md hover:bg-[#d64560] transition">Agendar Sessão</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Card 4 */}
              <div className="rounded-3xl p-[2px] bg-[linear-gradient(135deg,#e98a92,#e8566c)] shadow-2xl">
                <div className="flex flex-col items-center bg-white/90 rounded-3xl p-10 h-full min-h-[440px] justify-between">
                  <div className="flex flex-col items-center mb-6">
                    <span className="text-6xl mb-4">🎤</span>
                    <h3 className="text-xl font-extrabold text-[#e8566c] text-center mb-4">Canto Terapêutico</h3>
                    <ul className="list-none space-y-3 text-gray-700 text-base font-medium w-full max-w-xs mx-auto">
                      <li className="flex items-start gap-3"><span className="mt-1 text-[#e8566c]">●</span> Uso da voz para cura e expressão emocional</li>
                      <li className="flex items-start gap-3"><span className="mt-1 text-[#e8566c]">●</span> Desenvolvimento da autoconfiança</li>
                      <li className="flex items-start gap-3"><span className="mt-1 text-[#e8566c]">●</span> Alívio de tensões físicas e emocionais</li>
                      <li className="flex items-start gap-3"><span className="mt-1 text-[#e8566c]">●</span> Conexão entre corpo, mente e espírito</li>
                    </ul>
                  </div>
                  <a href="https://wa.me/5511989113465" target="_blank" rel="noopener noreferrer">
                    <button className="w-full py-3 px-3 rounded-xl bg-[#e8566c] text-white font-bold text-lg shadow-md hover:bg-[#d64560] transition">Agendar Sessão</button>
                  </a>
                </div>
              </div>
              {/* Card 5 */}
              <div className="rounded-3xl p-[2px] bg-[linear-gradient(135deg,#e98a92,#e8566c)] shadow-2xl">
                <div className="flex flex-col items-center bg-white/90 rounded-3xl p-10 h-full min-h-[440px] justify-between">
                  <div className="flex flex-col items-center mb-6">
                    <span className="text-6xl mb-4">👥</span>
                    <h3 className="text-xl font-extrabold text-[#e8566c] text-center mb-4">Grupo</h3>
                    <ul className="list-none space-y-3 text-gray-700 text-base font-medium w-full max-w-xs mx-auto">
                      <li className="flex items-start gap-3"><span className="mt-1 text-[#e8566c]">●</span> Vivências sonoras em grupo</li>
                      <li className="flex items-start gap-3"><span className="mt-1 text-[#e8566c]">●</span> Conexão e pertencimento</li>
                      <li className="flex items-start gap-3"><span className="mt-1 text-[#e8566c]">●</span> Expressão e processos terapêuticos coletivos</li>
                    </ul>
                  </div>
                  <a href="https://wa.me/5511989113465" target="_blank" rel="noopener noreferrer">
                    <button className="w-full py-3 px-3 rounded-xl bg-[#e8566c] text-white font-bold text-lg shadow-md hover:bg-[#d64560] transition">Agendar Sessão</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos Section */}
        <section className="py-20 bg-gradient-to-b from-[#f8d7da]/30 to-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e8566c_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-5"></div>
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#e8566c] mb-4">
                O Que Nossos Pacientes Dizem
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Histórias reais de pessoas que transformaram sua saúde através da música
              </p>
            </div>
            <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <Card className="border border-[#f8d7da] bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center rounded-3xl">
                    <CardContent className="pt-6 flex justify-center">
                      <img 
                        src="/musicoterapia/depoimentos/ariane.jpeg"
                        alt="Depoimento real de Ariane"
                        className="rounded-2xl shadow-lg max-h-96 object-contain"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="border border-[#f8d7da] bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center rounded-3xl">
                    <CardContent className="pt-6 flex justify-center">
                      <img 
                        src="/musicoterapia/depoimentos/eduardo.jpeg"
                        alt="Depoimento real de Eduardo"
                        className="rounded-2xl shadow-lg max-h-96 object-contain"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="border border-[#f8d7da] bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center rounded-3xl">
                    <CardContent className="pt-6 flex justify-center">
                      <img 
                        src="/musicoterapia/depoimentos/yuri1.jpeg"
                        alt="Depoimento real de Yuri 1"
                        className="rounded-2xl shadow-lg max-h-96 object-contain"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="border border-[#f8d7da] bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center rounded-3xl">
                    <CardContent className="pt-6 flex justify-center">
                      <img 
                        src="/musicoterapia/depoimentos/yuri2.jpeg"
                        alt="Depoimento real de Yuri 2"
                        className="rounded-2xl shadow-lg max-h-96 object-contain"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2 text-[#e8566c] bg-white/80" />
              <CarouselNext className="right-2 text-[#e8566c] bg-white/80" />
            </Carousel>
            <div className="flex justify-center mt-10">
              <a href="https://wa.me/5511989113465" target="_blank" rel="noopener noreferrer">
                <button className="py-3 px-8 rounded-2xl bg-[#e8566c] text-white font-bold text-lg shadow-md hover:bg-[#d64560] transition">Agendar Sessão</button>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-white to-[#f8d7da]/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e8566c_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-5"></div>
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#e8566c] mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tire suas dúvidas sobre nossos serviços e atendimento
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="border border-[#f8d7da] bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-[#e8566c]">Como funciona a primeira sessão?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    A primeira sessão inclui uma avaliação completa, histórico musical, objetivos terapêuticos e definição do plano de tratamento personalizado.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-[#f8d7da] bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-[#e8566c]">Preciso saber tocar algum instrumento?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Não é necessário ter conhecimento musical prévio. A musicoterapia é adaptada para cada pessoa, independente da experiência com música.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-[#f8d7da] bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-[#e8566c]">Como agendar uma sessão?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Você pode agendar sua sessão através do WhatsApp, telefone ou preenchendo o formulário em nosso site. Nossa equipe entrará em contato para confirmar o horário e fornecer todas as informações necessárias.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-10">
              <a href="https://wa.me/5511989113465" target="_blank" rel="noopener noreferrer">
                <button className="py-3 px-8 rounded-2xl bg-[#e8566c] text-white font-bold text-lg shadow-md hover:bg-[#d64560] transition">Agendar Sessão</button>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-l from-[#e98a92] via-[#f8d7da] to-[#e8566c] relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#ffffff_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-10"></div>
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Descubra o Poder da Música na Sua Saúde
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Agende sua sessão e comece sua jornada para uma vida mais harmoniosa e equilibrada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/5511989113465" target="_blank">
                <Button size="lg" className="bg-white text-[#e8566c] hover:bg-white/90 font-semibold text-lg px-8 rounded-2xl">
                  Agendar Sessão
                </Button>
              </Link>
             
            </div>
          </div>
        </section>

       
      </main>
      <Footer />
    </div>
  );
} 