import { RouterProvider } from "react-router-dom"
import { router } from "./router/index.jsx"
import { ThemeProvider } from "@/components/theme-provider"
import StudentContext from "./context/StudentContext.jsx"
import { Toaster } from "@/components/ui/toaster"
function App() {
  return (
    <>
    <StudentContext>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
      <Toaster />
    </StudentContext>
    </>
  )
}

export default App
