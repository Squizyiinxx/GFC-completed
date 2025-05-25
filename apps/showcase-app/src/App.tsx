import { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { pageRoutes } from "@/routes"

function App() {
  return (
    <Suspense fallback={<div className="p-4">Memuat halaman...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/html" replace />} />
        {pageRoutes.map(({ path, component: Component }, i) => (
          <Route key={i} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Navigate to="/html" replace />} />
      </Routes>
    </Suspense>
  )
}

export default App
