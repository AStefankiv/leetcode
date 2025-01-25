import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "items"));
      const itemsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("itemsList", itemsList);
      setItems(itemsList);
    };

    fetchItems();
  }, []);
  
  console.log("Items:", items);
  // useEffect(() => {
  //   console.log("Updated Items:", items);
  // }, [items]);

  return (
    <div>
    <h1>Items List:</h1>
    <ul>
      {items.length > 0 ? (
        items.map((item) => {
          console.log(item);
          const { name, description, id } = item;
          console.log(name, description, id);
          return (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </li>
          );
        }
        )
      ) : (
        <p>No items found</p>
      )}
    </ul>
  </div>
  );
};

export default ItemList;