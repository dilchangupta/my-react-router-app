import { Button } from "~/components/Counter";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="space-y-4">
        <Card title="Simple Tailwind Card">
        This is a clean and beautiful card component made with Tailwind CSS.

        <div className="mt-4">
          <TailwindButton>Learn More</TailwindButton>
        </div>
      </Card>
      <Card title="Dilchan Tailwind Card">
        This is a clean and beautiful card component made with Tailwind CSS.
         <div className="mt-4">
          <Button>Learn More</Button>
        </div>
      </Card>
      </div>
    </div>
  );
}

function TailwindButton({ children }: any) {
  return (
    <button
      className="
        px-5 py-2.5
        bg-indigo-600
        text-white
        font-semibold
        rounded-xl
        shadow-md
        hover:bg-indigo-700
        hover:shadow-lg
        transition
        active:scale-95
        cursor-pointer
      "
    >
      {children}
    </button>
  );
}


function Card({ title, children }:any) {
  return (
    <div
      className="
        bg-white 
        rounded-2xl 
        shadow-lg 
        p-6 
        border 
        border-gray-300
        hover:shadow-xl
        transition
      "
    >
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}
