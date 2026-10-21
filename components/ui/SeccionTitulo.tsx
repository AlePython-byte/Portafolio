type SeccionTituloProps = {
  id: string;
  titulo: string;
  subtitulo?: string;
};

export default function SeccionTitulo({
  id,
  titulo,
  subtitulo,
}: SeccionTituloProps) {
  return (
    <header className="flex flex-col gap-2">
      <h2 id={id} className="text-seccion font-bold">
        {titulo}
      </h2>
      {subtitulo ? (
        <p className="text-rol text-texto-suave">{subtitulo}</p>
      ) : null}
    </header>
  );
}
