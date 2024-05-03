import { BrowserRouter } from "react-router-dom"
import SignInPage from "./pages/SignInPage"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <SignInPage />
      </BrowserRouter>
    </>
  )
}

export default App
