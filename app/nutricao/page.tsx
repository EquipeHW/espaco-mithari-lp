"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, MapPin, Phone, Calendar, Utensils, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import TrackingScript from "@/app/components/TrackingScript";

export default function NutricaoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8d7da] to-white">
      <TrackingScript pageName="nutricao" />
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
                  Nutrição Integrativa
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-4 drop-shadow-md">
                  Alimentação consciente para uma vida mais saudável e equilibrada
                </p>
              </motion.div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="https://wa.me/5511989113465" target="_blank">
                  <Button size="lg" className="bg-white text-[#e8566c] hover:bg-white/90">
                    Agendar Consulta
                  </Button>
                </Link>
                <Link href="#servicos">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Nossos Serviços
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative w-full h-auto md:h-[600px] flex items-center justify-center mt-10 md:mt-0">
              <Image
                src="/3.png"
                alt="Nutrição"
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
                Uma abordagem única que combina nutrição tradicional com práticas integrativas
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e98a92] to-[#e8566c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#e8566c]">Plano Personalizado</h3>
                <p className="text-gray-600">Alimentação adaptada às suas necessidades</p>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e98a92] to-[#e8566c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#e8566c]">Abordagem Integrativa</h3>
                <p className="text-gray-600">Nutrição funcional e comportamental</p>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e98a92] to-[#e8566c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#e8566c]">Acompanhamento Contínuo</h3>
                <p className="text-gray-600">Monitoramento constante da sua evolução</p>
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
                Profissionais altamente qualificados para cuidar da sua saúde através da nutrição
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Card className="border-0 shadow-xl rounded-3xl bg-gradient-to-br from-[#fff0f3] via-[#f8d7da] to-[#fff] p-1">
                <div className="bg-white/80 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute -top-8 right-8 opacity-10 text-[#e8566c] text-8xl pointer-events-none select-none">
                    <svg width="64" height="64" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10C22 6.48 17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/></svg>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-[#e8566c] text-2xl md:text-3xl font-bold mb-1">Nossa Equipe de Nutrição</CardTitle>
                    <CardDescription className="text-gray-500 mb-4">Profissionais especializados em diferentes áreas da nutrição</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-10 rounded bg-gradient-to-b from-[#e8566c] to-[#e98a92] mt-1"></div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-[#e8566c] mb-1">Nutrição Funcional</h3>
                        <p className="text-gray-700">
                          Profissionais especializados em nutrição funcional e saúde da mulher, com foco em alimentação anti-inflamatória e equilíbrio hormonal.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-10 rounded bg-gradient-to-b from-[#e8566c] to-[#e98a92] mt-1"></div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-[#e8566c] mb-1">Comportamento Alimentar</h3>
                        <p className="text-gray-700">
                          Especialistas em comportamento alimentar e transtornos alimentares, com abordagem integrativa e humanizada.
                        </p>
                      </div>
                    </div>
                    <Link href="https://wa.me/5511989113465" target="_blank">
                      <Button className="w-full mt-10 bg-gradient-to-r from-[#e98a92] to-[#e8566c] hover:from-[#e8566c] hover:to-[#e98a92] text-white text-base font-bold py-3 transition-all shadow-md hover:scale-[1.03]">
                        Agendar Consulta
                      </Button>
                    </Link>
                  </CardContent>
                </div>
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
                Cuidados completos para sua saúde através da nutrição
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-[#f8d7da] hover:border-[#e8566c] transition-colors bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-[#e8566c]">Nutrição Funcional</CardTitle>
                  <CardDescription>
                    Alimentação personalizada para sua saúde
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#e8566c] h-5 w-5" />
                      <span>Plano alimentar individual</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#e8566c] h-5 w-5" />
                      <span>Suplementação</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#e8566c] h-5 w-5" />
                      <span>Nutrição anti-inflamatória</span>
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
                  <CardTitle className="text-[#e8566c]">Comportamento Alimentar</CardTitle>
                  <CardDescription>
                    Relação saudável com a comida
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#e8566c] h-5 w-5" />
                      <span>Mindful eating</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#e8566c] h-5 w-5" />
                      <span>Compulsão alimentar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#e8566c] h-5 w-5" />
                      <span>Distúrbios alimentares</span>
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
                  <CardTitle className="text-[#e8566c]">Nutrição Especializada</CardTitle>
                  <CardDescription>
                    Cuidados específicos para cada fase
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#e8566c] h-5 w-5" />
                      <span>Gestantes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#e8566c] h-5 w-5" />
                      <span>Menopausa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#e8566c] h-5 w-5" />
                      <span>Saúde hormonal</span>
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
                Histórias reais de mulheres que transformaram sua saúde através da nutrição
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-[#f8d7da] bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e98a92] to-[#e8566c] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "A nutrição funcional mudou completamente minha relação com a comida. Hoje me sinto mais saudável e com mais energia."
                  </p>
                  <p className="font-semibold text-[#e8566c]">Fernanda Costa, 35 anos</p>
                </CardContent>
              </Card>

              <Card className="border border-[#f8d7da] bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e98a92] to-[#e8566c] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "O acompanhamento durante minha gestação foi fundamental. A Dra. Camila me ajudou a ter uma gravidez mais saudável."
                  </p>
                  <p className="font-semibold text-[#e8566c]">Patrícia Lima, 28 anos</p>
                </CardContent>
              </Card>

              <Card className="border border-[#f8d7da] bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e98a92] to-[#e8566c] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "A abordagem da Dra. Juliana me ajudou a superar a compulsão alimentar. Hoje tenho uma relação muito mais saudável com a comida."
                  </p>
                  <p className="font-semibold text-[#e8566c]">Mariana Santos, 42 anos</p>
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
                    A primeira consulta inclui uma avaliação completa, histórico alimentar, exames bioquímicos e definição do plano alimentar personalizado.
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
              Transforme Sua Saúde Através da Nutrição
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