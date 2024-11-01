// import Image from "next/image";
import { Calendar, Clock, MapPin, Users, Book, Award, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
   <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          {/* Hero Section com background image */}
          <header className="relative">
            {/* Imagem de fundo com overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0" 
              style={{
                backgroundImage: `url('/image.jpg')`,
              }}
            >
              {/* Overlay escuro e desfocado */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
            </div>
    
            {/* Conteúdo do Hero */}
            <div className="relative z-10 py-24">
              <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold mb-4 text-white max-w-3xl">
                  Contratação Direta para Fornecedores
                </h1>
                <p className="text-xl mb-8 text-gray-200 max-w-2xl">
                  Aprenda a participar de processos de Dispensa de Licitação Eletrônica com o Governo Federal
                </p>
                <Link href='https://wo9biqlq.nocodb.com/#/nc/form/91ce4540-dc42-49e9-aa14-ed8ea9e9a277' className=" transition-colors text-lg font-semibold w-full">
                <div className="bg-blue-800/80 backdrop-blur-sm p-6 rounded-lg inline-block">
                    <p className="text-2xl font-bold mb-2 text-white">Promoção 1ª Turma</p>
                    <p className="text-lg text-gray-200">A partir de R$ 200,00</p>
                </div>
                  </Link>
              </div>
            </div>
          </header>
    
          {/* Instrutor Section com foto */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Instrutor</h2>
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                {/* Foto do instrutor */}
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl flex-shrink-0">
                  <img 
                    src="/foto.png" 
                    alt="Laercio dos Santos Cristo"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Informações do instrutor */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-900">Laercio dos Santos Cristo</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Servidor do IF Baiano, pós-graduado em Direito Administrativo e Licitações, 
                    pregoeiro no sistema COMPRASNET, com ampla experiência em licitações e contratos.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">
                      Pós-graduado em Direito Administrativo
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">
                      Especialista em Licitações
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">
                      Pregoeiro COMPRASNET
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          {/* Informações do Curso */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <Calendar className="w-10 h-10 text-blue-900 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Data</h3>
                  <p className="text-gray-700">28 e 29 de Novembro de 2024</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <Clock className="w-10 h-10 text-blue-900 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Horário</h3>
                  <p className="text-gray-700">19:30 - 21:30</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <MapPin className="w-10 h-10 text-blue-900 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Local</h3>
                  <p className="text-gray-700">
                    Ciçera Espaço de Eventos e Negócios
                    <br />
                    <span className="text-sm">
                      Rua Netinho Bacelar nº 30 - Colina das Mangueiras
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
    
          {/* Conteúdo Programático */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Conteúdo Programático</h2>
              <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <ul className="grid gap-6">
                  <li className="flex items-start group">
                    <Book className="w-6 h-6 text-blue-900 mt-1 mr-4 flex-shrink-0 group-hover:text-blue-700 transition-colors" />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      Dispensa de Licitação Eletrônica (MINI PREGÃO) e situações
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <Book className="w-6 h-6 text-blue-900 mt-1 mr-4 flex-shrink-0 group-hover:text-blue-700 transition-colors" />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      O que é Licitação Lei 14.133/2021 e Dispensa de Licitação
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <Book className="w-6 h-6 text-blue-900 mt-1 mr-4 flex-shrink-0 group-hover:text-blue-700 transition-colors" />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      Valores da Dispensa de licitação
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <Book className="w-6 h-6 text-blue-900 mt-1 mr-4 flex-shrink-0 group-hover:text-blue-700 transition-colors" />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      Vantagens de vender para o Governo Federal
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
    
          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-b from-blue-900 to-blue-800">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-12 text-white">Garanta sua vaga</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-xl transform hover:-translate-y-1 transition-transform">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">Individual</h3>
                  <p className="text-4xl font-bold mb-2 text-blue-900">R$ 249,00</p>
                  <p className="mb-6 text-gray-600">ou 3x de R$ 87,28</p>
                  <Link href='https://wo9biqlq.nocodb.com/#/nc/form/91ce4540-dc42-49e9-aa14-ed8ea9e9a277' className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors text-lg font-semibold w-full">
                    Inscrever-se
                  </Link>
                  
                </div>
                <div className="bg-white p-8 rounded-lg shadow-xl transform hover:-translate-y-1 transition-transform">
                  <div className="absolute -top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                    Melhor valor
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">Casadinha (2 ou mais)</h3>
                  <p className="text-4xl font-bold mb-2 text-blue-900">R$ 200,00</p>
                  <p className="mb-6 text-gray-600">por inscrito</p>
                  <Link href='https://wo9biqlq.nocodb.com/#/nc/form/91ce4540-dc42-49e9-aa14-ed8ea9e9a277' className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors text-lg font-semibold w-full">
                    Inscrever-se
                  </Link>
                </div>
              </div>
            </div>
          </section>
    
          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center md:text-left">
                <div>
                  <h4 className="font-bold text-xl mb-4">Contatos</h4>
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Laércio Cristo:</span> 75-99208-2395
                    </p>
                    <p>
                      <span className="font-semibold">Junior Ribeiro:</span> 75-98144-6403
                    </p>
                    <p>
                      <span className="font-semibold">Cícera:</span> 75-99264-3851
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-4">Informações Importantes</h4>
                  <p className="text-gray-400">Vagas limitadas a 25 participantes</p>
                  <p className="text-gray-400 mt-2">Inscrições até 18 de Novembro</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      );

}
