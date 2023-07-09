import { useState } from "react";
import { ApiResponse, Doc } from "./interfaces";

import InfiniteScroll from "./components/InfiniteScroll";
import Card from "./components/Card";

function App() {
  const [items, setItems] = useState<Array<Doc>>([]);

  const getData = async (page = 1) => {
    const res = await fetch(`https://openlibrary.org/search.json?q=AAA&page=${page}`);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { docs }: ApiResponse = await res.json();
    setItems([...items, ...docs]);
    return docs;
  };

  return (
    <div style={{ height: "700px" }}>
      <InfiniteScroll next={getData} loader={<h1>Cargando...</h1>}>
        <ul>
          {items &&
            items.map((element, index) => (
              <Card key={index} element={element} />
            ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
}

export default App;
