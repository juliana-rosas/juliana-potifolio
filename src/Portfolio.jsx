
import { Mail, Phone } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="bg-[#F2E5D8] text-[#4C4642] min-h-screen font-sans">
      {/* Header */}
      <section className="p-6 sm:p-10 flex flex-col items-center text-center space-y-4">
        <img
          src="/juliana-profile.jpg"
          alt="Juliana Rosa"
          className="w-36 h-36 sm:w-40 sm:h-40 rounded-xl shadow-md object-cover"
        />
        <h1 className="text-4xl sm:text-5xl font-serif font-bold">Juliana Rosa</h1>
        <p className="text-base sm:text-lg max-w-xl px-4">
          Relações Públicas apaixonada por cultura pop, storytelling e eventos. Gosto de traduzir a essência de marcas em conexões autênticas com seus públicos.
        </p>
      </section>

      {/* Navigation Buttons */}
      <section className="flex flex-wrap justify-center gap-4 mb-12 px-4">
        <button className="bg-[#C97C6D] text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-2xl shadow-md w-full sm:w-auto">Portfólio</button>
        <button className="bg-[#D9B9AA] text-[#4C4642] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-2xl shadow-md w-full sm:w-auto">Contato</button>
      </section>

      {/* About Me */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-4">Sobre Mim</h2>
        <p className="leading-relaxed text-base sm:text-lg">
          Sou formada em Relações Públicas e busco oportunidades que envolvam redes sociais, planejamento de eventos, cultura pop e branding. Tenho paixão por planejamento estratégico, consumo, posicionamento e criação de narrativas que realmente representem uma marca. E como boa entusiasta do audiovisual... amo um bom filme musical.
        </p>
      </section>

      {/* Skills */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-4">Habilidades</h2>
        <ul className="list-disc list-inside space-y-1 text-base sm:text-lg">
          <li>Planejamento estratégico de conteúdo</li>
          <li>Gestão de redes sociais e cultura digital</li>
          <li>Storytelling e posicionamento de marca</li>
          <li>Eventos criativos com foco em experiência</li>
          <li>Ferramentas: Canva, Evernote, Google Workspace, redes sociais</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-4">Experiências</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-[#FFF7F2] p-4 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">Estagiária de RP - UNIPAMPA</h3>
            <p className="text-sm text-gray-600">2022 - 2023</p>
            <p>Relacionamento com egressos, produção de conteúdos institucionais e boletins.</p>
          </div>
          <div className="bg-[#FFF7F2] p-4 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">Secretária Aux. Adm - Escola Infantil Catavaneto</h3>
            <p className="text-sm text-gray-600">2024 - 2025</p>
            <p>Atendimento ao público, organização de eventos escolares e suporte à gestão.</p>
          </div>
          <div className="bg-[#FFF7F2] p-4 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">Estágio em RH - Secretaria da Saúde de Esteio</h3>
            <p className="text-sm text-gray-600">2018 - 2019</p>
            <p>Organização de arquivos, atendimento ao público e produção de documentos internos.</p>
          </div>
        </div>
      </section>

      {/* Academic Projects */}
      <section className="px-4 sm:px-6 max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-4">Projetos Acadêmicos</h2>
        <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
          <li><strong>Fashion Cycle:</strong> evento sobre moda, comunicação e tendências</li>
          <li><strong>Campanha UDP:</strong> planejamento completo de uma campanha eleitoral fictícia</li>
          <li><strong>Storytelling:</strong> artigos e ensaios críticos sobre cultura, consumo e mídia</li>
          <li><strong>Mídias sociais:</strong> cibercultura, planejamento e engajamento digital</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="bg-[#EACDB1] p-6 sm:p-8 rounded-t-3xl text-center">
        <h2 className="text-xl sm:text-2xl font-serif font-semibold mb-4">Vamos conversar?</h2>
        <p className="mb-4 text-base sm:text-lg">Entre em contato para projetos, colaborações ou oportunidades :)</p>
        <div className="space-y-2 text-base sm:text-lg">
          <p className="flex justify-center items-center gap-2"><Mail size={18} /> julianarosas.trab@gmail.com</p>
          <p className="flex justify-center items-center gap-2"><Phone size={18} /> (51) 99104-3424</p>
        </div>
      </section>
    </main>
  );
}
