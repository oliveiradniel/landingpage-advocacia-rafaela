export default function Footer() {
  return (
    <footer className="flex pb-8 justify-center flex-col items-center gap-4">
      <div className="flex justify-center items-center">
        <img src="/logo.png" alt="Logo" className="w-22" />
        <p className="flex flex-col font-lato font-bold text-lg">
          <span>Rafaela</span>
          <span>Souza</span>
        </p>
      </div>

      <p className="font-inter text-sm text-white/50">
        © 2025 RAFAELA SOUZA • CNPJ 00.000.000/0000-00
      </p>
      <p className="font-inter text-sm text-white/40">
        TODOS OS DIREITOS RESERVADOS.
      </p>
    </footer>
  );
}
