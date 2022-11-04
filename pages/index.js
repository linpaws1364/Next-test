import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function Home() {
const [add, setAdd] = useState();
const [variable1, setVariable1]=useState(0);
const [variable2, setVariable2]=useState(0);

function takeInput(event){

  setVariable1(event.target.valueAsNumber);
}

function takeInputA(event){
  setVariable2(event.target.valueAsNumber);
}

function handleClick(){
  setAdd(variable1+variable2);
  console.log(variable1+variable2);
}

  return (
    <div className={styles.screen}>
    <div className={styles.container}>
      <h1 className={styles.head}>Add</h1>
      <input type="number" onChange={takeInput} className={styles.firstIn}></input>
      <input type="number" onChange={takeInputA} className={styles.secondIn}></input>
      <p className={styles.answer}>The value is</p>
      <button onClick={handleClick} className={styles.clicker}>{add}</button>
    </div>
    </div>
  )
}
