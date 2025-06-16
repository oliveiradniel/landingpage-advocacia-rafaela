export default function Header() {
  return (
    <header
      aria-label="Topo da seção com logotipo e nome da advogada"
      className="absolute inset-0 w-full h-20 items-center gap-2 flex p-4 px-8"
    >
      <img
        src="/logo.png"
        alt="Logotipo da Rafaela Souza, advogada"
        className="w-[40px] h-[40px]"
      />
      <strong className="font-lato">Rafaela Souza</strong>
    </header>
  );
}
