import { Button } from "@/components/ui/button"
import Link from "next/link"

const HomeFirst = (): React.ReactElement => {
  const handleClick = async () => {
    const res = await fetch("/api/hello", { method: "GET" })
    const data = await res.json()
    console.log(data)
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Hello World!</h1>
      <Button onClick={handleClick}>Click me</Button>
      <Link href="/logbook">Logbook</Link>
    </div>
  )
}

export default HomeFirst