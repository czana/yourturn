import { useState } from "react"
import { Link } from "react-router"
import { Plus, ToolCase, ArrowRight, Clock, Bell, AlertTriangle } from "lucide-react"
import Modal from "@/components/Modal"
import { MOCK_CASES, DECAYING_CASES } from "@/data/cases"

function formatDate(date) {
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  })
}

const RING_GRADIENTS = {
  accent: "conic-gradient(var(--accent) 180deg, oklch(0.45 0.03 180 / 0.25) 180deg)",
  destructive: "conic-gradient(var(--destructive) 180deg, oklch(0.35 0.05 27 / 0.25) 180deg)",
}

function AvatarRow({ collaborators, assignee, ringColor }) {
  return (
    <div className="flex items-center gap-2">
      {collaborators.map((person) => (
        <div key={person.name} className="relative">
          {ringColor && person.name === assignee && (
            <div
              className="absolute -inset-[3px] rounded-full animate-[border-spin_2.5s_linear_infinite]"
              style={{ background: RING_GRADIENTS[ringColor] }}
            />
          )}
          <img
            src={person.avatarUrl}
            alt={person.name}
            title={person.name}
            className="relative h-7 w-7 rounded-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

function CaseCard({ c, action, ringColor }) {
  return (
    <Link
      to={`/cases/${c.id}`}
      className="flex flex-col gap-3 rounded-xl border border-border bg-muted/30 p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold leading-snug">{c.title}</h3>
        <span className="shrink-0 text-xs text-muted-foreground">
          {formatDate(c.updatedAt)}
        </span>
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2">
        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-accent" />
        <span className="text-xs text-foreground/80">{c.currentStep}</span>
      </div>

      <div className="flex items-center justify-between">
        <AvatarRow collaborators={c.collaborators} assignee={c.assignee} ringColor={ringColor} />
        {action}
      </div>
    </Link>
  )
}

function DecayingCaseCard({ c }) {
  const handleRemind = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <CaseCard
      c={c}
      ringColor="destructive"
      action={
        <button
          onClick={handleRemind}
          className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-destructive/30 bg-destructive/10 px-2.5 py-1 text-[11px] font-medium text-destructive transition-colors hover:bg-destructive/20"
        >
          <Bell className="h-3 w-3" />
          Remind
        </button>
      }
    />
  )
}

function Section({ title, icon: Icon, count, variant, children }) {
  const isAccent = variant === "accent"
  const isDestructive = variant === "destructive"

  return (
    <section>
      <div className="mb-3 flex items-center gap-2">
        <Icon
          className={
            isAccent
              ? "h-5 w-5 animate-[wiggle_1s_ease-in-out_infinite] text-accent"
              : isDestructive
                ? "h-5 w-5 text-destructive"
                : "h-5 w-5 text-muted-foreground"
          }
        />
        <h2
          className={
            isAccent
              ? "text-base font-bold text-accent"
              : isDestructive
                ? "text-base font-semibold text-destructive"
                : "text-base font-semibold text-foreground"
          }
        >
          {title}
        </h2>
        <span
          className={
            isAccent
              ? "rounded-full bg-accent/15 px-2 py-0.5 text-[11px] font-medium text-accent"
              : isDestructive
                ? "rounded-full bg-destructive/15 px-2 py-0.5 text-[11px] font-medium text-destructive"
                : "rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
          }
        >
          {count}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
    </section>
  )
}

export default function CasesPage() {
  const [cases, setCases] = useState(MOCK_CASES)
  const [modalOpen, setModalOpen] = useState(false)
  const [title, setTitle] = useState("")

  const yourTurn = cases.filter((c) => c.status === "your_turn")
  const waiting = cases.filter((c) => c.status === "waiting")

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return

    setCases((prev) => [
      {
        id: crypto.randomUUID(),
        title: trimmed,
        status: "your_turn",
        collaborators: [{ name: "Tom Czana", avatarUrl: "https://i.pravatar.cc/80?u=czana" }],
        currentStep: "Define next step",
        assignee: "Tom Czana",
        updatedAt: new Date(),
        timeline: [],
      },
      ...prev,
    ])
    setTitle("")
    setModalOpen(false)
  }

  return (
    <div className="flex flex-1 flex-col p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Cases</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:bg-accent/80"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      {cases.length === 0 && DECAYING_CASES.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
            <ToolCase className="h-7 w-7 text-accent" />
          </div>
          <p className="text-muted-foreground">No cases yet.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-16">
          {yourTurn.length > 0 && (
            <Section title="Your turn" icon={Bell} count={yourTurn.length} variant="accent">
              {yourTurn.map((c) => (
                <CaseCard key={c.id} c={c} />
              ))}
            </Section>
          )}

          {waiting.length > 0 && (
            <Section title="Waiting" icon={Clock} count={waiting.length}>
              {waiting.map((c) => (
                <CaseCard key={c.id} c={c} ringColor="accent" />
              ))}
            </Section>
          )}

          {DECAYING_CASES.length > 0 && (
            <Section title="Decaying" icon={AlertTriangle} count={DECAYING_CASES.length} variant="destructive">
              {DECAYING_CASES.map((c) => (
                <DecayingCaseCard key={c.id} c={c} />
              ))}
            </Section>
          )}
        </div>
      )}

      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false)
          setTitle("")
        }}
        title="New Case"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            autoFocus
            type="text"
            placeholder="Case title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!title.trim()}
              className="cursor-pointer rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/80 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Create
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
