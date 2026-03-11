import { useState, useRef } from "react"
import { useParams, Link } from "react-router"
import {
  ArrowLeft, Check, Circle, Share2,
  FileText, LinkIcon, Upload, X, CheckCircle2,
} from "lucide-react"
import { MOCK_CASES, ARCHIVED_CASES } from "@/data/cases"

function formatDate(date) {
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function formatShortDate(date) {
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric" })
}

function formatDuration(ms) {
  const minutes = Math.floor(ms / 60_000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `${days}d`
  if (hours > 0) return `${hours}h`
  return `${minutes}m`
}

function durationBetween(a, b) {
  return formatDuration(b.getTime() - a.getTime())
}

function FileChip({ file, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/50 px-2 py-1 text-xs text-foreground/80">
      <FileText className="h-3 w-3 shrink-0 text-muted-foreground" />
      <span className="truncate">{file.name}</span>
      {onRemove ? (
        <button onClick={onRemove} className="cursor-pointer text-muted-foreground hover:text-foreground">
          <X className="h-3 w-3" />
        </button>
      ) : file.url ? (
        <a href={file.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
          <LinkIcon className="h-3 w-3" />
        </a>
      ) : null}
    </span>
  )
}

function CommentBubble({ comment }) {
  return (
    <div className="rounded-lg border border-border bg-card p-2.5 shadow-sm">
      <div className="flex items-center gap-1.5">
        <img
          src={comment.avatarUrl}
          alt={comment.actor}
          className="h-4 w-4 shrink-0 rounded-full object-cover"
        />
        <span className="text-[11px] font-medium">{comment.actor}</span>
        <span className="text-[10px] text-muted-foreground">{formatShortDate(comment.date)}</span>
      </div>
      <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{comment.text}</p>
      {comment.files?.length > 0 && (
        <div className="mt-1.5 flex flex-wrap gap-1">
          {comment.files.map((f) => (
            <a
              key={f.name}
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded border border-border bg-muted/50 px-1.5 py-0.5 text-[10px] text-foreground/70 transition-colors hover:bg-muted"
            >
              <FileText className="h-2.5 w-2.5 text-muted-foreground" />
              {f.name}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

function DurationBadge({ label }) {
  return (
    <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
      {label}
    </span>
  )
}

function WaitingBadge({ label }) {
  return (
    <span className="shrink-0 rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
      {label} waiting
    </span>
  )
}

function TimelineEntry({ entry, nextDate, isLast }) {
  const hasComments = entry.comments?.length > 0

  const duration = entry.pending
    ? durationBetween(entry.date, new Date())
    : nextDate
      ? durationBetween(entry.date, nextDate)
      : null

  return (
    <div className="grid grid-cols-[1fr_32px_1fr] gap-x-4">
      {/* Left — comment bubbles */}
      <div className={`flex flex-col items-end justify-start gap-2 ${isLast ? "" : "pb-8"}`}>
        {hasComments &&
          entry.comments.map((c) => (
            <CommentBubble key={c.id} comment={c} />
          ))}
      </div>

      {/* Center — spine */}
      <div className="flex flex-col items-center">
        {entry.pending ? (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-accent/10">
            <Circle className="h-3 w-3 fill-accent text-accent" />
          </div>
        ) : (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
            <Check className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
        )}
        {!isLast && <div className="w-px flex-1 bg-border" />}
      </div>

      {/* Right — action */}
      <div className={`${isLast ? "" : "pb-8"}`}>
        <div className="flex items-center gap-2">
          <img
            src={entry.avatarUrl}
            alt={entry.actor}
            className="h-5 w-5 shrink-0 rounded-full object-cover"
          />
          <span className="text-sm font-medium">{entry.actor}</span>
        </div>
        <p className={`mt-1 text-sm ${entry.pending ? "font-medium text-accent" : "text-muted-foreground"}`}>
          {entry.action}
        </p>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{formatDate(entry.date)}</span>
          {entry.pending && duration && <WaitingBadge label={duration} />}
          {!entry.pending && duration && <DurationBadge label={duration} />}
        </div>
      </div>
    </div>
  )
}

function CompleteForm({ onComplete }) {
  const [comment, setComment] = useState("")
  const [files, setFiles] = useState([])
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files || [])
    setFiles((prev) => [...prev, ...selected.map((f) => ({ name: f.name, file: f }))])
    e.target.value = ""
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onComplete({ comment: comment.trim(), files })
    setComment("")
    setFiles([])
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-3 rounded-xl border border-accent/30 bg-accent/5 p-4">
      <span className="text-xs font-semibold text-accent">Mark as done</span>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment (optional)"
        rows={2}
        className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring"
      />

      {files.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {files.map((f, i) => (
            <FileChip
              key={`${f.name}-${i}`}
              file={f}
              onRemove={() => setFiles((prev) => prev.filter((_, j) => j !== i))}
            />
          ))}
        </div>
      )}

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Upload className="h-3.5 w-3.5" />
          Attach file
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
        <button
          type="submit"
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground transition-colors hover:bg-accent/80"
        >
          <CheckCircle2 className="h-3.5 w-3.5" />
          Complete step
        </button>
      </div>
    </form>
  )
}

function ShareButton() {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const url = window.location.href
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard may not be available */
    }
  }

  return (
    <button
      onClick={handleShare}
      className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {copied ? (
        <>
          <LinkIcon className="h-3.5 w-3.5" />
          Link copied
        </>
      ) : (
        <>
          <Share2 className="h-3.5 w-3.5" />
          Share
        </>
      )}
    </button>
  )
}

export default function CaseDetailPage() {
  const { id } = useParams()
  const caseData = MOCK_CASES.find((c) => c.id === id) || ARCHIVED_CASES.find((c) => c.id === id)
  const [completed, setCompleted] = useState(false)

  const isArchived = caseData?.status === "archived"
  const backTo = isArchived ? "/archive" : "/cases"
  const backLabel = isArchived ? "Archive" : "Cases"

  if (!caseData) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
        <p className="text-muted-foreground">Case not found.</p>
        <Link to="/cases" className="text-sm text-accent hover:underline">
          Back to cases
        </Link>
      </div>
    )
  }

  const isYourTurn = !isArchived && caseData.assignee === "Tom Czana"
  const pendingEntry = caseData.timeline.find((e) => e.pending)

  return (
    <div className="flex flex-1 flex-col overflow-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <Link
          to={backTo}
          className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>

        <div className="flex items-start justify-between gap-4">
          <h1 className="text-2xl font-bold tracking-tight">{caseData.title}</h1>
          <ShareButton />
        </div>

        <div className="mt-3 flex items-center gap-3">
          <div className="flex items-center gap-1">
            {caseData.collaborators.map((person) => (
              <img
                key={person.name}
                src={person.avatarUrl}
                alt={person.name}
                title={person.name}
                className={
                  person.name === caseData.assignee
                    ? "h-7 w-7 rounded-full border-2 border-accent object-cover"
                    : "h-7 w-7 rounded-full object-cover"
                }
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">·</span>
          <span className="text-sm text-muted-foreground">
            Updated {formatDate(caseData.updatedAt)}
          </span>
        </div>
      </div>

      {/* Timeline — centered */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <h2 className="mb-5 text-center text-sm font-semibold text-foreground">Timeline</h2>
          <div className="flex flex-col">
            {caseData.timeline.map((entry, i) => {
              const nextEntry = caseData.timeline[i + 1]
              return (
                <TimelineEntry
                  key={entry.id}
                  entry={entry}
                  nextDate={nextEntry?.date}
                  isLast={i === caseData.timeline.length - 1}
                />
              )
            })}
          </div>

          {isYourTurn && pendingEntry && !completed && (
            <div className="grid grid-cols-[1fr_32px_1fr] gap-x-4">
              <div />
              <div />
              <CompleteForm
                onComplete={({ comment, files }) => {
                  setCompleted(true)
                }}
              />
            </div>
          )}

          {completed && (
            <div className="grid grid-cols-[1fr_32px_1fr] gap-x-4">
              <div />
              <div />
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-3 text-sm font-medium text-accent">
                <CheckCircle2 className="h-4 w-4" />
                Step completed
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
