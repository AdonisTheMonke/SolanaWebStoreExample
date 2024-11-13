// pages/[category].tsx
import { useRouter } from "next/router";
import style from "../styles/Collection.module.css"; // Assuming this style exists
import Data from "../pages/api/boilerdata"; // Import your data
import Image from "next/image";
import Link from "next/link";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query; // Get the category from the URL

  const filteredItems = Data.filter((item) => item.category.toLowerCase() === category?.toString().toLowerCase());

  const itemMapper = filteredItems.map((item) => (
    <div key={item.itemNum} className={style.item}>
      <Link href={`/item/${item.itemNum}`}>
          <Image src={item.image} width={300} height={300} alt={item.category} />
      </Link>
      <div>
        <p className={style.nameP}>{item.name.toUpperCase()}</p>
        <p className={style.priceP}>$ {item.price}</p>
      </div>
    </div>
  ));

  return (
    <div className={style.wrapper}>
      <h1>{category?.toString().toUpperCase()}</h1>
      <div className={style.itemGrid}>
        {filteredItems.length > 0 ? (
          itemMapper
        ) : (
          <p>No items available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
