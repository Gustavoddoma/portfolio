export default function Button({ children, onClick }) {
  return (
    <button
      className="shadow-zinc900 flex h-10 w-12 items-center justify-center rounded-full border border-zinc-900 border-opacity-5 bg-white shadow-lg outline-1 outline-teal-500 focus:outline dark:border-zinc-500 dark:border-opacity-10 dark:bg-zinc-900 dark:hover:border-opacity-20 dark:focus:border-opacity-20"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
