export default function Footer() {
  return (
    <footer className="bg-accent flex flex-col w-full gap-1 py-6 px-4 items-center">
      <p className="text-xs font-medium">&copy; {new Date().getFullYear()} Copyright BEWEAR.</p>
      <p className="text-xs font-medium text-muted-foreground">Todos os direitos reservados.</p>
    </footer>
  )
}
