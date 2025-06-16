export default function Images() {
  return (
    <div className="relative hidden lg:flex w-[370px] max-w-[370px] h-[400px]">
      <img
        src="/documents.png"
        alt=""
        aria-hidden="true"
        width={200}
        height={200}
        className="rounded-lg absolute top-0 left-0 shadow-[0_8px_20px_rgba(0,0,0,0.3)] w-[200px] h-auto"
      />
      <img
        src="/rafaela-photo2.png"
        alt="Rafaela Souza, advogada trabalhista especializada na defesa de direitos dos trabalhadores"
        className="rounded-lg absolute bottom-0 right-0 shadow-[0_8px_20px_rgba(0,0,0,0.3)] w-[200px] h-auto"
      />
    </div>
  );
}
