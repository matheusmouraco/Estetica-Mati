
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Heart, Target, MessageSquare, Search, Award, Smartphone, Users, Zap, ShieldCheck, PenTool, BrainCircuit, Sparkles, Gem, Star, XCircle, TrendingUp } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";

export default function Home() {

  const whatsappLink = "https://wa.me/5511992644010?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mati%20Studio%20e%20quero%20um%20or%C3%A7amento%20para%20site%20de%20cl%C3%ADnica%20de%20est%C3%A9tica.";

  const portfolioCases = [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f1584e163_portfolio-1-a-50-Prancheta-35.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/41014a60e_portfolio-1-a-50-Prancheta-36.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/161314366_portfolio-51-a-100-Prancheta-5.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/abf57dbfd_portfolio-51-a-100-Prancheta-23.png"
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Toaster />
      <style>{`
        body {
            font-family: 'Inter', sans-serif;
        }
        .hero-bg {
          background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .final-cta-bg {
           background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1600965933348-d93539e09c85?q=80&w=1974&auto=format&fit=crop');
           background-size: cover;
           background-position: center;
        }
      `}</style>
      
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm shadow-md z-40 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1dd374859_Group-1171276258.png" alt="Mati Studio Logo" className="h-10" />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full group px-6">
                Fale com um Especialista
                <MessageSquare className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="bg-black text-zinc-200 pt-[68px]">
        {/* Hero Section */}
        <section className="hero-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-36">
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <Sparkles className="w-16 h-16 text-[#FF004D] mx-auto mb-4"/>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Sua clínica transforma a autoestima. Seu site precisa transformar visitas em agendamentos.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
                Você pode ter os melhores equipamentos e resultados incríveis. Se sua presença online não transmite isso, está perdendo clientes todos os dias.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Problem Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Todos os dias, centenas de pessoas buscam no Google:</h2>
             <div className="flex flex-wrap justify-center gap-4 text-zinc-300 text-lg my-8">
                 <span className="bg-zinc-800 rounded-full px-4 py-2">"clínica de estética em [sua cidade]"</span>
                 <span className="bg-zinc-800 rounded-full px-4 py-2">"tratamento para celulite"</span>
                 <span className="bg-zinc-800 rounded-full px-4 py-2">"harmonização facial"</span>
                 <span className="bg-zinc-800 rounded-full px-4 py-2">"limpeza de pele profissional"</span>
             </div>
             <p className="text-xl text-zinc-300 mt-6">A pergunta é: <span className="text-[#FF004D] font-bold">Seu nome aparece? Seu site transmite o profissionalismo que você tem na prática?</span></p>
          </div>
        </section>

        {/* What we do */}
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Fazemos sua marca ser encontrada, desejada e escolhida.</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[
                        { icon: Search, title: "Ser Encontrada no Google", description: "Otimização para buscas locais e pelos serviços que você oferece." },
                        { icon: Heart, title: "Ser Desejada pelo Público Certo", description: "Design e comunicação que geram confiança e valorizam sua marca." },
                        { icon: CheckCircle, title: "Ser Escolhida entre os Concorrentes", description: "Estrutura focada em conversão para transformar visitantes em agendamentos." },
                    ].map(pillar => (
                         <div key={pillar.title} className="flex flex-col items-center">
                            <pillar.icon className="w-12 h-12 text-[#FF004D] mb-4"/>
                            <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                            <p className="text-zinc-400 mt-2">{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* What we deliver */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-black border-zinc-800 text-white p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <Gem className="w-10 h-10 text-[#FF004D] shrink-0"/>
                            <h3 className="text-2xl font-bold">Site profissional completo</h3>
                        </div>
                        <p className="text-zinc-400 mb-6">Identidade visual marcante, apresentação da clínica e equipe, seção de serviços, galeria, depoimentos e blog opcional.</p>
                        <ul className="space-y-3 text-zinc-300">
                           {[
                               "Página inicial com identidade visual marcante",
                               "Apresentação da clínica, equipe e filosofia",
                               "Seção de serviços com descrições claras",
                               "Galeria de fotos com antes e depois",
                               "Depoimentos reais de clientes satisfeitos",
                               "Integração com WhatsApp para agendamento",
                               "SEO para sua clínica aparecer no Google",
                           ].map(item => (
                               <li key={item} className="flex items-start gap-3">
                                   <CheckCircle className="w-5 h-5 text-[#FF004D] shrink-0 mt-1"/>
                                   <span>{item}</span>
                               </li>
                           ))}
                        </ul>
                    </Card>

                    <Card className="bg-black border-zinc-800 text-white p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <Target className="w-10 h-10 text-[#FF004D] shrink-0"/>
                            <h3 className="text-2xl font-bold">Landing Pages para campanhas</h3>
                        </div>
                        <p className="text-zinc-400 mb-6">Perfeitas para divulgar pacotes promocionais, novos tratamentos, combos e campanhas sazonais (Black Friday, verão, etc.)</p>
                        <ul className="space-y-3 text-zinc-300">
                            {[
                               "Estrutura com foco total em conversão",
                               "Copy emocional e visual estratégico",
                               "Ideal para pacotes promocionais",
                               "Perfeita para novos tratamentos",
                               "Campanhas de Black Friday e verão",
                           ].map(item => (
                               <li key={item} className="flex items-start gap-3">
                                   <CheckCircle className="w-5 h-5 text-[#FF004D] shrink-0 mt-1"/>
                                   <span>{item}</span>
                               </li>
                           ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </section>

        {/* Specialties Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Especialistas em estética e posicionamento digital</h2>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
                {[
                    "Estética facial", "Estética corporal", "Procedimentos não invasivos", "Estética capilar", "SPA e bem-estar"
                ].map(item => <span key={item} className="bg-zinc-900 border border-zinc-800 rounded-full px-5 py-2">{item}</span>)}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">O que sua clínica conquista com um site de verdade:</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "Mais agendamentos com menos esforço",
                        "Posicionamento como referência em estética na sua região",
                        "Imagem online que reflete a qualidade do seu atendimento",
                        "Confiança imediata do seu público-alvo",
                        "Atendimento facilitado com botões de WhatsApp visíveis",
                        "Portfólio visual atrativo que encanta e convence",
                    ].map(benefit => (
                         <div key={benefit} className="flex items-center gap-4 bg-black p-6 rounded-lg border border-zinc-800">
                            <Star className="w-6 h-6 text-[#FF004D] shrink-0"/>
                            <p className="text-lg text-zinc-300">{benefit}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Comparison Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Site amador vs. Site feito pela Mati Studio</h2>
            <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6">
                        <h3 className="font-bold text-xl text-red-500 mb-4 flex items-center gap-2"><XCircle/> Site Amador</h3>
                        <ul className="space-y-2 text-zinc-400">
                            <li>Pouca presença no Google</li>
                            <li>Layout genérico e sem confiança</li>
                            <li>Sem foco em agendamentos</li>
                            <li>Textos frios e técnicos</li>
                            <li>Contato difícil ou escondido</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-zinc-800/50">
                        <h3 className="font-bold text-xl text-green-400 mb-4 flex items-center gap-2"><CheckCircle/> Site da Mati Studio</h3>
                         <ul className="space-y-2 text-zinc-300">
                            <li>SEO otimizado para buscas locais</li>
                            <li>Design moderno, feminino e personalizado</li>
                            <li>Botões estratégicos e estrutura persuasiva</li>
                            <li>Redação emocional, acessível e estratégica</li>
                            <li>WhatsApp fixo e agendamento facilitado</li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Resultados que inspiram</h2>
              <p className="text-zinc-400 mt-4">Imagens que transmitem cuidado, qualidade e profissionalismo.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioCases.map((src, i) => (
                <motion.div 
                  key={i} 
                  className="rounded-lg overflow-hidden shadow-lg border border-zinc-700/50"
                  variants={fadeIn} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{delay: i * 0.1}}
                >
                  <img src={src} alt={`Exemplo de procedimento estético ${i + 1}`} className="w-full h-auto"/>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Image Recommendations */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="bg-zinc-900 border-zinc-800 text-white p-8">
                  <h2 className="text-2xl font-bold mb-4">Recomendação de imagens para o site</h2>
                  <p className="text-zinc-400 mb-6">Essas imagens são fundamentais para criar conexão imediata e reforçar a percepção de cuidado, resultado e confiança.</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-zinc-300">
                      {[
                          "Fotos da clínica: recepção, salas, equipamentos",
                          "Equipe uniformizada e sorrindo",
                          "Detalhes dos procedimentos",
                          "Galeria 'antes e depois' autorizada",
                          "Close em materiais de qualidade",
                          "Imagens que representem seu público"
                      ].map(item => (
                          <li key={item} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-[#FF004D] shrink-0 mt-1"/>
                              <span>{item}</span>
                          </li>
                      ))}
                  </ul>
              </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta-bg">
          <div className="py-24 text-center bg-black/80">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Heart className="w-16 h-16 text-[#FF004D] mx-auto mb-6"/>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sua clínica já transforma vidas. Agora é hora de transformar sua presença digital.</h2>
                <p className="text-lg text-zinc-300 max-w-3xl mx-auto mb-10">Com um site à altura da sua entrega, você atrai mais pacientes, fortalece sua marca e ocupa o lugar de referência que merece.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Quero meu site profissional agora
                    </Button>
                  </a>
                </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-zinc-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Mati Studio | Sites profissionais para clínicas de estética que querem se destacar no Google e na mente dos seus clientes.</p>
        </div>
      </footer>
    </>
  );
}
