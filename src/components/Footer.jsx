export default function Footer() {
  const date = new Date();
  return (
    <footer className="flex flex-col items-center justify-center text-white">
      <h3 className="text-2xl pt-8 pb-4">&copy;{date.getFullYear()} Robert Nicuta</h3>
    </footer>
  );
}
