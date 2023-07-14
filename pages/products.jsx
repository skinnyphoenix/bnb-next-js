import { useRouter } from "next/router";
import styles from "../styles/products.module.css";

export default function (props) {
  const router = useRouter();

  const onHandleClick = (id) => router.push(`/products/${id}`);

  return (
    <>
      {props.data.products.map((product) => (
        <div className={styles.wrapperProducts}>
          <h3 onClick={() => onHandleClick(product.id)}>
            <img src={product.images[0]} alt="product img" />- {product.title} - $ {product.price}
          </h3>
          <hr />
          <br />
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = res.status === 200 ? await res.json() : {};

  return {
    props: {
      data: data,
    },
  };
}
