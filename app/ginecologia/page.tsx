"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, MapPin, Phone, Calendar, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import TrackingScript from "@/app/components/TrackingScript";

export default function GinecologiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8d7da] to-white">
      <TrackingScript pageName="ginecologia" />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-14 md:py-10 bg-gradient-to-l from-[#e98a92] via-[#f8d7da] to-[#e8566c] overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#f8f6f3_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-20"></div>
          <div className="container grid gap-8 md:grid-cols-2 items-center relative">
            <div className="space-y-6 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                  Ginecologia & Obstetrícia
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-4 drop-shadow-md">
                  Cuidados especializados para a saúde feminina em todas as fases da vida
                </p>
              </motion.div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="https://wa.me/5511989113465" target="_blank">
                  <Button size="lg" className="bg-white text-[#e8566c] hover:bg-white/90 font-semibold text-lg px-8">
                    Agende sua Consulta
                  </Button>
                </Link>
                <Link href="#diferenciais">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 font-semibold text-lg">
                    Conheça Nossos Diferenciais
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative w-full h-auto md:h-[600px] flex items-center justify-center mt-10 md:mt-0">
              <Image
                src="/4.png"
                alt="Ginecologia"
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#e8566c] mb-4">
                O Que Nos Diferencia
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Uma abordagem única que combina medicina tradicional com práticas integrativas
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e98a92] to-[#e8566c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#e8566c]">Atendimento Humanizado</h3>
                <p className="text-gray-600">Cuidamos de você como pessoa, não apenas como paciente</p>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e98a92] to-[#e8566c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#e8566c]">Abordagem Integrativa</h3>
                <p className="text-gray-600">Combinamos diferentes técnicas para um tratamento completo</p>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e98a92] to-[#e8566c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#e8566c]">Tempo de Qualidade</h3>
                <p className="text-gray-600">Consultas com duração adequada para seu atendimento</p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipe Section */}
        <section className="py-20 bg-gradient-to-b from-[#f8d7da]/30 to-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e8566c_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-5"></div>
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#e8566c] mb-4">
                Nossa Equipe Especializada
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Profissionais altamente qualificadas para cuidar da sua saúde de forma integral
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border border-[#f8d7da] hover:border-[#e8566c] transition-colors bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-[#e8566c]">Dra. Mariângela de Souza Vaz</CardTitle>
                  <CardDescription>
                    Ginecologista especialista em saúde da mulher negra e acupuntura
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Atendimento especializado com foco na saúde da mulher negra, combinando ginecologia tradicional com práticas integrativas como acupuntura.
                  </p>
                  <Link href="https://wa.me/5511989113465" target="_blank">
                    <Button className="w-full bg-gradient-to-r from-[#e98a92] to-[#e8566c] hover:from-[#e8566c] hover:to-[#e98a92] text-white">
                      Agendar Consulta
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border border-[#f8d7da] hover:border-[#e8566c] transition-colors bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-[#e8566c]">Dra. Marta Almeida</CardTitle>
                  <CardDescription>
                    Ginecologista especialista em psicossomática (CRM 106984 SP)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Realiza consultas ginecológicas com abordagem sistêmica e integral, considerando aspectos físicos, emocionais e sociais.
                  </p>
                  <Link href="https://wa.me/5511989113465" target="_blank">
                    <Button className="w-full bg-gradient-to-r from-[#e98a92] to-[#e8566c] hover:from-[#e8566c] hover:to-[#e98a92] text-white">
                      Agendar Consulta
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="servicos" className="py-20 bg-gradient-to-b from-white to-[#f8d7da]/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e8566c_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-5"></div>
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#e8566c] mb-4">
                Nossos Serviços
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Cuidados completos para sua saúde em todas as fases da vida
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-[#f8d7da] hover:border-[#e8566c] transition-colors bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-[#e8566c]">Pré-Natal Sistêmico</CardTitle>
                  <CardDescription>
                    Acompanhamento especializado da gestação
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#e8566c] h-5 w-5" />
                      <span>Abordagem terapêutica</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#e8566c] h-5 w-5" />
                      <span>Constelações familiares</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#e8566c] h-5 w-5" />
                      <span>Preparação familiar</span>
                    </li>
                  </ul>
                  <Link href="https://wa.me/5511989113465" target="_blank">
                    <Button className="w-full bg-gradient-to-r from-[#e98a92] to-[#e8566c] hover:from-[#e8566c] hover:to-[#e98a92] text-white">
                      Agendar Consulta
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border border-[#f8d7da] hover:border-[#e8566c] transition-colors bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-[#e8566c]">Consultas de Rotina</CardTitle>
                  <CardDescription>
                    Cuidados preventivos e acompanhamento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#e8566c] h-5 w-5" />
                      <span>Exames preventivos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#e8566c] h-5 w-5" />
                      <span>Controle hormonal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#e8566c] h-5 w-5" />
                      <span>Orientação sexual</span>
                    </li>
                  </ul>
                  <Link href="https://wa.me/5511989113465" target="_blank">
                    <Button className="w-full bg-gradient-to-r from-[#e98a92] to-[#e8566c] hover:from-[#e8566c] hover:to-[#e98a92] text-white">
                      Agendar Consulta
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border border-[#f8d7da] hover:border-[#e8566c] transition-colors bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-[#e8566c]">Tratamentos Especiais</CardTitle>
                  <CardDescription>
                    Cuidados específicos para cada necessidade
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#e8566c] h-5 w-5" />
                      <span>Infertilidade</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#e8566c] h-5 w-5" />
                      <span>Menopausa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#e8566c] h-5 w-5" />
                      <span>Endometriose</span>
                    </li>
                  </ul>
                  <Link href="https://wa.me/5511989113465" target="_blank">
                    <Button className="w-full bg-gradient-to-r from-[#e98a92] to-[#e8566c] hover:from-[#e8566c] hover:to-[#e98a92] text-white">
                      Agendar Consulta
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Depoimentos Section */}
        <section className="py-20 bg-gradient-to-b from-[#f8d7da]/30 to-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e8566c_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-5"></div>
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#e8566c] mb-4">
                O Que Nossas Pacientes Dizem
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Histórias reais de mulheres que transformaram sua saúde conosco
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-[#f8d7da] bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e98a92] to-[#e8566c] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "A abordagem integrativa da Dra. Marta transformou completamente minha experiência com a menopausa. O cuidado com aspectos emocionais fez toda a diferença."
                  </p>
                  <p className="font-semibold text-[#e8566c]">Maria Silva, 48 anos</p>
                </CardContent>
              </Card>

              <Card className="border border-[#f8d7da] bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e98a92] to-[#e8566c] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "O pré-natal sistêmico foi uma experiência incrível. Me senti acolhida e preparada para a chegada do meu bebê de uma forma que nunca imaginei ser possível."
                  </p>
                  <p className="font-semibold text-[#e8566c]">Ana Costa, 32 anos</p>
                </CardContent>
              </Card>

              <Card className="border border-[#f8d7da] bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e98a92] to-[#e8566c] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "A Dra. Mariângela tem um olhar único para a saúde da mulher negra. Pela primeira vez me senti verdadeiramente compreendida em minhas necessidades específicas."
                  </p>
                  <p className="font-semibold text-[#e8566c]">Juliana Santos, 35 anos</p>
                </CardContent>
              </Card>
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
                  <CardTitle className="text-[#e8566c]">Como funciona a primeira consulta?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    A primeira consulta é mais extensa, com duração de aproximadamente 1 hora. Realizamos uma avaliação completa, incluindo histórico médico, exame físico e discussão dos seus objetivos de saúde.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-[#f8d7da] bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-[#e8566c]">Vocês atendem convênios?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Atendemos alguns convênios específicos. Entre em contato para verificar se o seu plano está na lista. Também oferecemos opções de pagamento facilitado para consultas particulares.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-[#f8d7da] bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-[#e8566c]">Como agendar uma consulta?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Você pode agendar sua consulta através do WhatsApp, telefone ou preenchendo o formulário em nosso site. Nossa equipe entrará em contato para confirmar o horário e fornecer todas as informações necessárias.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-l from-[#e98a92] via-[#f8d7da] to-[#e8566c] relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#ffffff_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-10"></div>
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cuide da Sua Saúde Hoje Mesmo
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Agende sua consulta e comece sua jornada para uma vida mais saudável e equilibrada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/5511989113465" target="_blank">
                <Button size="lg" className="bg-white text-[#e8566c] hover:bg-white/90 font-semibold text-lg px-8">
                  Agendar Consulta
                </Button>
              </Link>
              <Link href="tel:+5511989113465">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 font-semibold text-lg">
                  Ligar Agora
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