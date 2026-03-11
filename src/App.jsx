import { Hand } from "lucide-react"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent">
          <Hand className="h-8 w-8 text-accent-foreground" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Your Turn!
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Hello World
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
