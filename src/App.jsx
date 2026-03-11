import { useState } from "react"
import { Routes, Route, Navigate } from "react-router"
import { Menu } from "lucide-react"
import Sidebar from "@/components/Sidebar"
import CasesPage from "@/pages/CasesPage"
import CaseDetailPage from "@/pages/CaseDetailPage"
import ArchivePage from "@/pages/ArchivePage"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-svh">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main className="flex flex-1 flex-col overflow-auto">
        <div className="flex items-center border-b border-border px-4 py-3 md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="cursor-pointer text-foreground/70 hover:text-foreground"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <Routes>
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/cases/:id" element={<CaseDetailPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/archive/:id" element={<CaseDetailPage />} />
          <Route path="*" element={<Navigate to="/cases" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
