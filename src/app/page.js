import Link from "next/link"
import AnimeList from "../components/AnimeList"
import Search from "../components/Search"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const anime = await response.json()
  console.log(anime)

  return (
    <div>
      <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Paling Populer</h1>
      <Link href={"/populer"} className="md:text-xl text-md underline hover:text-yellow-300 transition-all">Lihat Semua</Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {anime.data.map(data => {
        return (
          <div key={data.mal_id} className="shadow-xl">
            <AnimeList title={data.title} images={data.images.webp.image_url}/>
          </div>
        )
      })}
      </div>
      
    </div>
  )
}

export default Home