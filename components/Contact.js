"use client";
import React , { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
 

  
  return (
    <div className={styles.form}>
      
      <form >
        <input type="text" placeholder="Nom" required /><br />
        <input type="text" placeholder="Prénom" required /><br />
        <input type="text" placeholder="Partenariat" required /><br />
        <input type="email" placeholder="adresse mail" required /><br />
        <textarea placeholder="Message" required></textarea><br />
        <button type="submit">Envoyer</button>
      </form>
      
      
    </div>

  );
}
