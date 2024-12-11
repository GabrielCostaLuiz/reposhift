import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex text-center justify-center items-center bg-white text-black">
      <main className="min-h-fit space-y-10">
        <h1 className=" text-6xl font-bold">RepoShift</h1>

        <p className="w-3/4 mx-auto text-lg">
          Estou criando, neste exato momento, um novo espaço na internet para
          quem busca agilidade na construção de seu portfólio. Neste projeto,
          busco unir precisão e empatia, com um único objetivo: ajudar as
          pessoas a alcançarem seus objetivos com rapidez e eficiência.
        </p>

        <p className="text-red-500 font-bold text-lg">Em construção !!!!</p>
      </main>
    </div>
  );
}
