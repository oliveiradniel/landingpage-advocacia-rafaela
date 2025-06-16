import { FaWhatsapp } from "react-icons/fa";

export default function SpecialtiesSection() {
  return (
    <div className="pt-32 flex gap-8 flex-col items-center relative">
      <h1 className="text-[clamp(20px,4vw,32px)] font-inter font-bold">
        Principais <span className="text-vivid-blue">áreas de atuação</span>
      </h1>

      <div className="flex flex-col gap-8 items-center">
        <div className="flex gap-8 flex-col sm:flex-row justify-center flex-wrap">
          <div className="max-w-[280px] roundend-lg shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
            <img
              src="/labor-complaints.jpg"
              alt="Reclamações Trabalhistas"
              className="w-full h-[220px] object-cover rounded-t-lg"
            />

            <div className="bg-white p-6 rounded-b-lg">
              <h3 className="text-near-black text-center font-inter font-bold text-sm h-12">
                Reclamações Trabalhistas
              </h3>

              <p className="text-near-black h-[180px] font-inter text-center text-sm flex items-center">
                Atuação na defesa de trabalhadores em ações judiciais para
                cobrar direitos como verbas rescisórias, horas extras, férias,
                13º salário, adicionais e outros benefícios não pagos. Análise
                detalhada do contrato e da documentação para construir uma
                estratégia sólida.
              </p>
            </div>
          </div>

          <div className="max-w-[280px] roundend-lg shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
            <img
              src="/moral-harassment.jpg"
              alt="Reclamações Trabalhistas"
              className="w-full h-[220px] object-cover rounded-t-lg"
            />

            <div className="bg-white p-6 rounded-b-lg">
              <h3 className="text-near-black text-center font-inter font-bold text-sm h-12">
                Assédio Moral e Danos no Ambiente de Trabalho
              </h3>

              <p className="h-[180px] text-near-black font-inter text-center text-sm flex items-center">
                Representação de clientes em casos de assédio moral,
                perseguições, exposição a situações humilhantes ou abusivas no
                ambiente de trabalho. Ação focada em garantir a reparação pelos
                danos sofridos e a responsabilização do empregador.
              </p>
            </div>
          </div>

          <div className="max-w-[280px] roundend-lg shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
            <img
              src="/work-accident.jpg"
              alt="Reclamações Trabalhistas"
              className="w-full h-[220px] object-cover rounded-t-lg"
            />

            <div className="bg-white p-6 rounded-b-lg">
              <h3 className="text-near-black text-center font-inter font-bold text-sm h-12">
                Acidentes de Trabalho e Doenças Ocupacionais
              </h3>

              <p className="text-near-black font-inter text-center text-sm h-[180px] flex items-center">
                Defesa dos direitos de trabalhadores vítimas de acidentes de
                trabalho ou que desenvolveram doenças ocupacionais em razão das
                atividades exercidas. Atuação para garantir indenizações,
                estabilidade no emprego e demais direitos previstos em lei.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="bg-vivid-blue sm:w-[80%] w-full p-4 font-bold rounded-md flex items-center justify-center gap-2 cursor-pointer hover:bg-vivid-blue/90 transition-colors duration-300 ease-in-out shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
        >
          <FaWhatsapp size={22} className="hidden sm:inline-flex" />
          Quero defesa especializada
        </button>
      </div>
    </div>
  );
}
