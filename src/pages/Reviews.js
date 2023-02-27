import Head from "next/head";
import Image from "next/image";
import React from "react";

function reviews({ Reviews }) {
  return (
    <div>
      <Head>
        <title> Fat Burgers | Home </title>
        <meta name="title" content="Fat-Burgers" />
      </Head>
      <div>
        <h1>Reviews</h1>
        <div className="reviews">
          {!!Reviews.length &&
            Reviews.slice(0, 20).map((res) => {
              return (
                <div className="review" key={res.id}>
                  {res.id}. {res.title}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();

  return {
    props: {
      Reviews: data.slice(0, 20),
    },
  };
}

export default reviews;
