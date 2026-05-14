import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Frontend 🚀</h1>
    </div>
  );
}

export default App;