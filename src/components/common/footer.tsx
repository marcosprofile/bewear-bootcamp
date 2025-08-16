export default function Footer() {
  return (
    <footer className="bg-accent flex w-full flex-col items-center gap-1 px-4 py-6">
      <p className="text-xs font-medium">
        &copy; {new Date().getFullYear()} Copyright BEWEAR.
      </p>
      <p className="text-muted-foreground text-xs font-medium">
        Todos os direitos reservados.
      </p>
    </footer>
  );
}
