import { createRoot } from "react-dom/client";

import './App.css'

function App() {

  return (
    <>
      <div>
      <h1>Ana Sayfa</h1>
      <p>Burada bir butona tıklayarak başka bir sayfaya yönlendirme yapabilirsiniz.</p>
      {/* Yönlendirme için Link veya button */}
      <Link to="/about">
        <button>About Sayfasına Git</button>
      </Link>
    </div>
    </>
  )
}

export default App
