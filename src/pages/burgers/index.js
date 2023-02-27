import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/burgers.module.css";
import img from "/images/double.jpg";

function burgers({ burgers }) {
  console.log(burgers);
  return (
    <div>
      <h1>Burgers</h1>
      {burgers.map((burger) => {
        return (
          <Link
            className={styles.burgerCard}
            href={`/burgers/${burger.id}`}
            key={burger.id}
          >
            <div className={styles.imageContainer}>
              <Image
                // src={`${burger.image}`}
                src={img}
                alt={`${burger.name}`}
                width={100}
                height={100}
              />
            </div>
            <div>
              <h3>{burger.name}</h3>
              <p>{burger.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();

  return {
    props: {
      burgers: data,
    },
  };
};

export default burgers;
