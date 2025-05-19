import Image from "next/image";

export default function Home() {
  return (
    <section className="flex justify-center items-start min-h-dvh p-24">
      <div className="bg-white p-4 rounded-2xl">
        <Image src="/omelette.jpeg" width={1312} height={600} alt="asdf" />
        <h1 className="text-black text-5xl">Simple Omelette Recipe</h1>
        <p className="text-stone-100">Just starting</p>
        <p className="text-stone-900">Just starting</p>
      </div>
    </section>
  );
}
