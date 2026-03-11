import { NavLink, useLocation } from "react-router"
import { ToolCase, Archive, ConciergeBell } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { to: "/cases", label: "Cases", icon: ToolCase },
  { to: "/archive", label: "Archive", icon: Archive },
]

const USER = {
  name: "Tom Czana",
  avatarUrl: "https://i.pravatar.cc/150?u=czanat",
}

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Backdrop (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-[240px] shrink-0 flex-col border-r border-sidebar-border bg-gradient-to-t from-accent/20 to-sidebar text-sidebar-foreground transition-transform duration-300 md:static md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Logo */}
        <div className="flex justify-center px-4 py-5">
          <div className="flex flex-col items-center -space-y-1">
            <ConciergeBell className="h-7 w-7 shrink-0 text-accent" />
            <div className="flex flex-col -space-y-2 text-base font-black uppercase tracking-widest select-none">
              <span>Your</span>
              <span>Turn</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col gap-1 py-4 pr-0 pl-3">
          {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  "flex cursor-pointer items-center gap-3 py-2 pl-3 pr-3 text-sm font-medium transition-colors",
                  isActive
                    ? "relative z-10 -mr-px rounded-l-lg bg-background text-foreground"
                    : "rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground mr-3",
                )
              }
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* User */}
        <div className="mt-auto px-3 py-4">
          <div className="flex items-center justify-center gap-3">
            <img
              src={USER.avatarUrl}
              alt={USER.name}
              className="h-8 w-8 shrink-0 rounded-full ring-2 ring-accent"
            />
            <span className="truncate text-sm font-medium">{USER.name}</span>
          </div>
        </div>
      </aside>
    </>
  )
}
