import "./components/RestrictedPage/style.css"

import { useState } from "react";

import RestrictedPage from "./components/RestrictedPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const user = "Paola"

  const Login = () => setIsLoggedIn(true)

  const Logout = () => setIsLoggedIn(false)

  return (
     <RestrictedPage Login={Login} Logout={Logout} user={user} isLoggedIn={isLoggedIn} />
  )
}

export default App;
