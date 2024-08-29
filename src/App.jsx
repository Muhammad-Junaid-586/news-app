import { useState } from "react";

import NewsApp from "./components/NewsApp";
function Description() {
  return <h1>Welcome to React World!</h1>;
}
function App() {
  const [countInParent, setCountInParent] = useState(0);

  function UpdateCountInParent(count) {
    setCountInParent(count);
  }
  return (
    <>
      <NewsApp />
    </>
  );
}

export default App;
