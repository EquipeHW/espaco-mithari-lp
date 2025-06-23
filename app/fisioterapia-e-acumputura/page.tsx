"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Users, Award, Home, Phone, Calendar, Heart, Zap, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import TrackingScript from "@/app/components/TrackingScript";

export default function FisioterapiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8d7da] to-white">
      <TrackingScript pageName="fisioterapia" />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-14 md:py-10 bg-gradient-to-l from-[#e98a92] via-[#f8d7da] to-[#e8566c] overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#f8f6f3_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-10"></div>
          <div className="container grid gap-8 md:grid-cols-2 items-center relative">
            <div className="space-y-6 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                  Acupuntura e Fisioterapia
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-4 drop-shadow-md">
                  Especializada no tratamento Físico e Emocional
                </p>
              </motion.div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="https://wa.me/5511989113465" target="_blank">
                  <Button size="lg" className="bg-white text-[#e8566c] hover:bg-white/90 rounded-xl">
                    Agendar Consulta
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative w-full h-auto md:h-[600px] flex items-center justify-center mt-10 md:mt-0">
              <Image
                src="/1.png"
                alt="Fisioterapia"
                width={600}
                height={600}
                className="rounded-3xl object-cover w-full h-full transition-transform duration-300 hover:scale-[1.02] opacity-65"
                priority
              />
            </div>
          </div>
        </section>

 

        {/* Diferenciais Section */}
        <section id="diferenciais" className="py-20 bg-gradient-to-b from-white to-[#f8d7da]/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e8566c_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-5"></div>
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-white/80 text-[#e8566c] rounded-full text-sm font-medium mb-4 shadow">
                Nossos Diferencias
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#e8566c] mb-4">
                O Que Nos Diferencia
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                TODOS os tratamentos são baseados nos cuidados físicos, emocionais e energéticos.
              </p>
            </div>
            <div className="mx-auto items-center grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
              <Card className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl flex flex-col items-center max-w-sm w-full h-[300px] justify-between">
                <Heart className="w-12 h-12 text-[#e8566c] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#e8566c] text-center">Abordagem Integrativa</h3>
                <p className="text-gray-600 text-center">Unindo tecnologias atualizadas cientificamente comprovadas, com técnicas milenares que buscam a raiz por trás da sua dor.</p>
              </Card>
              <Card className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl flex flex-col items-center max-w-sm w-full h-[300px] justify-between">
                <Users className="w-12 h-12 text-[#e8566c] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#e8566c] text-center">Acompanhamento Multidisciplinar</h3>
                <p className="text-gray-600 text-center">Você tem suporte online e presencial durante todo o seu tratamento!</p>
              </Card>
              <Card className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl flex flex-col items-center max-w-sm w-full h-[300px] justify-between">
                <Award className="w-12 h-12 text-[#e8566c] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#e8566c] text-center">Experiência Comprovada</h3>
                <p className="text-gray-600 text-center">Mais de 10 anos de experiência com técnicas tradicionais e modernas para resultados eficazes.</p>
              </Card>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-10">
              <a href="https://wa.me/5511989113465" target="_blank" rel="noopener noreferrer">
                <button className="w-48 py-2 rounded-xl bg-[#e8566c] text-white font-bold text-lg shadow-md hover:bg-[#d64560] transition">
                  Agendar Consulta
                </button>
              </a>
            
            </div>
          </div>
        </section>

        {/* Quem Sou Section */}
        <section className="py-20 bg-gradient-to-b from-[#f8d7da]/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e8566c_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-5"></div>
          <div className="container">
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative flex justify-center">
                  <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-[#f8d7da] to-[#e8566c]/30 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-60 h-60 md:w-72 md:h-72 bg-white rounded-full flex items-center justify-center shadow-inner">
                      {/* Substitua por <Image ... /> quando tiver a foto */}
                      <Users className="w-28 h-28 md:w-32 md:h-32 text-[#e8566c]" />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="text-left mb-12">
                    <div className="inline-block px-4 py-2 bg-white/80 text-[#e8566c] rounded-full text-sm font-medium mb-4 shadow">
                      Sobre a Profissional
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#e8566c] mb-2">Dra. Karina Cavalcanti</h2>
                    <p className="text-gray-600 text-lg">CREFITO-3 247.387</p>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p className="text-lg leading-relaxed">
                      "Como fisioterapeuta, sempre tive um objetivo claro: promover uma recuperação eficaz e acolhedora, identificando a raiz dos problemas físicos e ajudando na mudança de hábitos para garantir resultados duradouros."
                    </p>
                    <p className="text-lg leading-relaxed">
                      Com o tempo, aprofundei meus conhecimentos em técnicas integrativas e comportamentais, trazendo ao atendimento domiciliar um cuidado ainda mais completo e personalizado.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Cada paciente que atendo em casa recebe uma abordagem individualizada e atenta, onde juntos buscamos a verdadeira origem das dores e limitações. Assim, o tratamento não apenas alivia os sintomas, mas transforma a qualidade de vida de forma profunda e consistente."
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm rounded-xl">
                      <div className="text-2xl font-bold text-[#e8566c]">10+</div>
                      <div className="text-sm text-gray-600">Anos de Experiência</div>
                    </div>
                    <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm rounded-xl">
                      <div className="text-2xl font-bold text-[#e8566c]">1000+</div>
                      <div className="text-sm text-gray-600">Pacientes Atendidos</div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
                    <a href="https://wa.me/5511989113465" target="_blank" rel="noopener noreferrer">
                      <button className="w-48 py-2 rounded-xl bg-[#e8566c] text-white font-bold text-lg shadow-md hover:bg-[#d64560] transition">
                        Agendar Consulta
                      </button>
                    </a>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

     
         {/* Serviços Section */}
         <section id="servicos" className="py-20 bg-gradient-to-b from-white to-[#f8d7da]/30">
          <div className="container max-w-8xl mx-auto">
            <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-white/80 text-[#e8566c] rounded-full text-sm font-medium mb-4 shadow">
                  Nossos Serviços
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#e8566c] mb-4">
                  Conheça nossos serviços
                </h2>
              
              </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Acupuntura Tradicional e a Laser */}
              <div
                className="rounded-3xl shadow-2xl overflow-hidden flex flex-col h-full"
                style={{ background: 'linear-gradient(135deg, #e8566c 80%, #f8d7da 100%)' }}
              >
                <div className="p-8 text-center flex-1 flex flex-col">
                  <Zap className="w-14 h-14 mx-auto text-white mb-4 drop-shadow-lg" />
                  <h3 className="text-2xl font-bold text-white mb-2">Acupuntura Tradicional e a Laser</h3>
                  <p className="text-white/90 text-base mb-6">Técnicas milenares para equilíbrio e bem-estar</p>
                  <ul className="space-y-4 text-white text-left mb-6 text-base flex-1">
                    <li className="flex items-center gap-3"><span className="flex-shrink-0 flex items-center justify-center w-6 h-6"><CheckCircle2 className="w-6 h-6 stroke-2 text-white" /></span><span className="flex-1 leading-snug">Análise e recuperação, alívio dores profundas e crônicas e equilíbrio natural do organismo</span></li>
                    <li className="flex items-center gap-3"><span className="flex-shrink-0 flex items-center justify-center w-6 h-6"><CheckCircle2 className="w-6 h-6 stroke-2 text-white" /></span><span className="flex-1 leading-snug">Excelente auxílio durante o pré-natal (alívio de enjoos, controle da pressão, estímulos ao trabalho de parto)</span></li>
                    <li className="flex items-center gap-3"><span className="flex-shrink-0 flex items-center justify-center w-6 h-6"><CheckCircle2 className="w-6 h-6 stroke-2 text-white" /></span><span className="flex-1 leading-snug">Neuralgias, enxaqueca, postura e outras regiões</span></li>
                    <li className="flex items-center gap-3"><span className="flex-shrink-0 flex items-center justify-center w-6 h-6"><CheckCircle2 className="w-6 h-6 stroke-2 text-white" /></span><span className="flex-1 leading-snug">Distúrbios emocionais e psicológicos: ansiedade, estresse, depressão, insônia</span></li>
                    <li className="flex items-center gap-3"><span className="flex-shrink-0 flex items-center justify-center w-6 h-6"><CheckCircle2 className="w-6 h-6 stroke-2 text-white" /></span><span className="flex-1 leading-snug">Problemas ortopédicos: osteoartrite, artrite reumatoide, cólica, lesões musculares e tendinites</span></li>
                  </ul>
                </div>
                <button className="w-52 mx-auto mb-10 py-2 rounded-xl bg-white text-[#e8566c] font-bold text-lg shadow-md hover:bg-[#f8d7da] transition mt-auto">Saiba Mais</button>
              </div>
              {/* Reabilitação Física */}
              <div
                className="rounded-3xl shadow-2xl overflow-hidden flex flex-col h-full"
                style={{ background: 'linear-gradient(135deg, #e8566c 80%, #f8d7da 100%)' }}
              >
                <div className="p-8 text-center flex-1 flex flex-col">
                  <Heart className="w-14 h-14 mx-auto text-white mb-4 drop-shadow-lg" />
                  <h3 className="text-2xl font-bold text-white mb-2">Reabilitação Física</h3>
                  <p className="text-white/90 text-base mb-6">Recuperação funcional e neurológica</p>
                  <ul className="space-y-4 text-white text-left mb-6 text-base flex-1">
                    <li className="flex items-center gap-3"><span className="flex-shrink-0 flex items-center justify-center w-6 h-6"><CheckCircle2 className="w-6 h-6 stroke-2 text-white" /></span><span className="flex-1 leading-snug">Dores crônicas</span></li>
                    <li className="flex items-center gap-3"><span className="flex-shrink-0 flex items-center justify-center w-6 h-6"><CheckCircle2 className="w-6 h-6 stroke-2 text-white" /></span><span className="flex-1 leading-snug">Lesões neuromusculares</span></li>
                    <li className="flex items-center gap-3"><span className="flex-shrink-0 flex items-center justify-center w-6 h-6"><CheckCircle2 className="w-6 h-6 stroke-2 text-white" /></span><span className="flex-1 leading-snug">Recuperação pós-cirúrgica</span></li>
                    <li className="flex items-center gap-3"><span className="flex-shrink-0 flex items-center justify-center w-6 h-6"><CheckCircle2 className="w-6 h-6 stroke-2 text-white" /></span><span className="flex-1 leading-snug">AVC</span></li>
                    <li className="flex items-center gap-3"><span className="flex-shrink-0 flex items-center justify-center w-6 h-6"><CheckCircle2 className="w-6 h-6 stroke-2 text-white" /></span><span className="flex-1 leading-snug">Distúrbios respiratórios: asma, bronquite, rinite alérgica, sinusite</span></li>
                    <li className="flex items-center gap-3"><span className="flex-shrink-0 flex items-center justify-center w-6 h-6"><CheckCircle2 className="w-6 h-6 stroke-2 text-white" /></span><span className="flex-1 leading-snug">Cólicas menstruais e distúrbios ginecológicos: TPM, menopausa</span></li>
                  </ul>
                </div>
                <button className="w-52 mx-auto mb-10 py-2 rounded-xl bg-white text-[#e8566c] font-bold text-lg shadow-md hover:bg-[#f8d7da] transition mt-auto">Saiba Mais</button>
              </div>
              {/* Laserterapia */}
              <div
                className="rounded-3xl shadow-2xl overflow-hidden flex flex-col h-full"
                style={{ background: 'linear-gradient(135deg, #e8566c 80%, #f8d7da 100%)' }}
              >
                <div className="p-8 text-center flex-1 flex flex-col">
                  <Star className="w-14 h-14 mx-auto text-white mb-4 drop-shadow-lg" />
                  <h3 className="text-2xl font-bold text-white mb-2">Laserterapia</h3>
                  <p className="text-white/90 text-base mb-6">Tecnologia avançada para cicatrização e alívio da dor</p>
                  <ul className="space-y-4 text-white text-left mb-6 text-base flex-1">
                    <li className="flex items-center gap-3"><span className="flex-shrink-0 flex items-center justify-center w-6 h-6"><CheckCircle2 className="w-6 h-6 stroke-2 text-white" /></span><span className="flex-1 leading-snug">Tratamento de inflamações, lesões, dores crônicas, lesões esportivas</span></li>
                    <li className="flex items-center gap-3"><span className="flex-shrink-0 flex items-center justify-center w-6 h-6"><CheckCircle2 className="w-6 h-6 stroke-2 text-white" /></span><span className="flex-1 leading-snug">Rejuvenescimento facial</span></li>
                    <li className="flex items-center gap-3"><span className="flex-shrink-0 flex items-center justify-center w-6 h-6"><CheckCircle2 className="w-6 h-6 stroke-2 text-white" /></span><span className="flex-1 leading-snug">Cicatrizes, queloides e feridas, com efeitos colaterais</span></li>
                  </ul>
                </div>
                <button className="w-52 mx-auto mb-10 py-2 rounded-xl bg-white text-[#e8566c] font-bold text-lg shadow-md hover:bg-[#f8d7da] transition mt-auto">Saiba Mais</button>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona a Primeira Consulta */}
        <section className="py-20 bg-gradient-to-b from-[#f8d7da]/30 to-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e8566c_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-5"></div>
          <div className="container max-w-2xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
              <div style={{ background: 'linear-gradient(135deg, #e8566c10 80%, #f8d7da 100%)' }} className="p-0 m-0">
                <CardHeader>
                  <CardTitle className="text-[#e8566c] text-2xl font-bold mb-2">Como funciona a primeira consulta?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg mb-8">
                    Além da avaliação física completa, já na primeira consulta você descobre qual a origem emocional por trás do seu problema de saúde. Então iniciamos um plano de tratamento para o cuidado físico e protocolos de cuidado emocional, para que você identifique e saia do padrão psicológico ou comportamental que te gera problemas!
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6">
                    <a href="https://wa.me/5511989113465" target="_blank" rel="noopener noreferrer">
                      <button className="w-48 py-2 rounded-xl bg-[#e8566c] text-white font-bold text-lg shadow-md hover:bg-[#d64560] transition">
                        Agendar Consulta
                      </button>
                    </a>
                    
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Agendamento */}
        <section className="py-20 bg-gradient-to-b from-[#e8566c] to-[#d64560]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Agende sua Consulta</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Você pode agendar a sua consulta através do WhatsApp, telefone ou clicando no link. Nossa equipe entrará em contato para confirmar o horário e fornecer todas as informações.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/5511989113465" target="_blank">
                <Button size="lg" className="bg-white text-[#e8566c] hover:bg-white/90 font-semibold text-lg px-8 rounded-xl">
                  Agendar Consulta
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