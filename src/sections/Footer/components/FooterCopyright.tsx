export const FooterCopyright = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-2 w-full">
      <p className="text-violet-100/70 text-sm font-inter tracking-[-0.32px] opacity-80">
        © {year} NexaClinic — Todos os direitos reservados
      </p>
      <p className="text-violet-100/70 text-sm font-inter tracking-[-0.32px] opacity-80">
        Feito com amor no Brasil
      </p>
    </div>
  );
};
