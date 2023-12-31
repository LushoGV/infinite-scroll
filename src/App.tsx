import { useState } from "react";
import { ApiResponse, Doc } from "./interfaces";
import InfiniteScroll from "./components/InfiniteScroll";

function App() {
  const [items, setItems] = useState<Array<Doc>>([]);

  const URL = (page: number) =>
    `https://openlibrary.org/search.json?q=AAA&page=${page}`;

  const getData = async (page = 1) => {
    const res = await fetch(URL(page));
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
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  fontWeight: 500,
                  padding: "4px",
                  marginBottom: "5px",
                }}
              >
                <span>{element.title}</span>
              </li>
            ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
}

export default App;
