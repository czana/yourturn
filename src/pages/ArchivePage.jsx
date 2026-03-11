import { Link } from "react-router"
import { Archive, ArrowRight } from "lucide-react"
import { ARCHIVED_CASES } from "@/data/cases"

function formatDate(date) {
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  })
}

function AvatarRow({ collaborators }) {
  return (
    <div className="flex items-center gap-1">
      {collaborators.map((person) => (
        <img
          key={person.name}
          src={person.avatarUrl}
          alt={person.name}
          title={person.name}
          className="h-6 w-6 rounded-full object-cover"
        />
      ))}
    </div>
  )
}

function CaseCard({ c }) {
  return (
    <Link
      to={`/archive/${c.id}`}
      className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold leading-snug">{c.title}</h3>
        <span className="shrink-0 text-xs text-muted-foreground">
          {formatDate(c.updatedAt)}
        </span>
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2">
        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-accent" />
        <span className="text-xs text-foreground/80">Completed</span>
      </div>

      <AvatarRow collaborators={c.collaborators} />
    </Link>
  )
}

export default function ArchivePage() {
  if (ARCHIVED_CASES.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
          <Archive className="h-7 w-7 text-accent" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Archive</h1>
        <p className="text-muted-foreground">Nothing archived yet.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Archive</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {ARCHIVED_CASES.length} completed {ARCHIVED_CASES.length === 1 ? "case" : "cases"}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {ARCHIVED_CASES.map((c) => (
          <CaseCard key={c.id} c={c} />
        ))}
      </div>
    </div>
  )
}
