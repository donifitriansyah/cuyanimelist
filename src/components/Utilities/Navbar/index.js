import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-yellow-300">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                <Link href="/" className="font-bold text-black text-2xl">Anime List</Link>
                <input placeholder="cari anime...." className="" />
            </div>
        </header>
    )
}
export default Navbar