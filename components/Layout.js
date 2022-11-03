
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Layout(props){

   
  const [showButton, setShowButton] = useState(false);

  useEffect(()=> {
    window.addEventListener("scroll", () => {
      if(window.pageYOffset > 300){
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    });
  }
 

  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <div>
        {props.children}
        {
          showButton && (
            <button onClick={scrollTop} className="back-to-top bg-warning color-white">            
              &#8679;
            </button>
          )
        }
      </div>
    </div>
  );
}