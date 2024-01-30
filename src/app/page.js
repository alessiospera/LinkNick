import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <section className="pt-32 ">
        <div className="max-w-md mb-6">
          <h1 className="text-6xl font-bold">
            Your one link for <br />your digital identity
          </h1>
          <h2 className="text-gray-400 ntext-xl mt-6">
            Share your links, social profiles, contact info and more on one page
          </h2>
          <p>LinkNick is a simple link sharing app.</p>
        </div>
        <form className="inline-flex items-center shadow-lg shadow-gray-700/20">
          <span className="bg-white py-4 pl-4">linknick.to/</span>
          <input type="text" className="py-4" placeholder="username"/>
          <button type="submit" className="bg-blue-500 text-white py-4 px-6">
            Join for Free
          </button>
        </form>
      </section>
    </main>
  );
}
