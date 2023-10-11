import AddInfo from "@/components/AddInfo"
import Link from "next/link"

const Home = (): React.ReactElement => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <AddInfo />
      <Link href="/logbook">Logbook</Link>
    </div>
  )
}

export default Home