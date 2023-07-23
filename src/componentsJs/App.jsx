/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import InfiniteScroll from './componentsJs/InfiniteScroll';

function App() {
  const [items, setItems] = useState([]);

  const URL = (page) =>
    `https://openlibrary.org/search.json?q=AAA&page=${page}`;

  const getData = async (page = 1) => {
    const res = await fetch(URL(page));
    const { docs } = await res.json();
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