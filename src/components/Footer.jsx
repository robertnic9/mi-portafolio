export default function Footer() {
  const date = new Date();
  return (
    <footer className="flex flex-col items-center justify-center text-white mt-[5%]">
      <h1 className="text-xl p-10">&copy;{date.getFullYear()} Robert Nicuta</h1>
    </footer>
  );
}
