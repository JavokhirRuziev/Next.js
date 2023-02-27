import React from 'react'
import styles from '../../styles/burgers.module.css'
import Image from 'next/image'
import photo from '../../../public/images/fish.jpg'

export const getStaticPaths = async ()=>{
  const res = await fetch('http://localhost:5000/items')
  const data = await res.json();
  console.log(data.map(data=>data.id));

  const paths = data.map((burger)=>{
    return{
      params: {id: burger.id}
    }
  })

  return{
    paths,
    fallback: false
  }

}

export const getStaticProps = async (context)=>{
  const id = context.params.id;

  const res = await fetch(`http://localhost:5000/items/${id}`)
  const data = await res.json();

  return{
    props:{burger:data}
  }
}

function Details({burger}) {
  return (
    <div className={styles.singleBurger}>
    <h1>{burger.name}</h1>
    <div className={styles.imageContainer}>
      <Image 
      src={photo}
      alt={`${burger.name}`}
      width={100}
      height={100}
      />
    </div>
    <p>
      {burger.desc}
    </p>
    </div>
  )
}

export default Details