import React, { useState, useEffect }from 'react'
import Style from './Style.css'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
const Index = () => {
  const [api, setApi] = useState("");
  useEffect(() => {
    fetchShortenAPI();
  }, []);

  useEffect(() => {
    if (api) {
      console.log(api);
    }
  }, [api]);

  const fetchShortenAPI = async () => {
    try {
      const res = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      const data = await res.json();
      setApi(data);
    } catch (error) {
      console.log(error);
    }
  };
  const [link, setLink] = useState(' ');
  console.log(link);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('link: ' + link);
    setLink('')
    fetchShortenAPI()
  }
  return (
    <>
   
    
    <div className="container">
    <h1>The privacy-frendly URL Shortener</h1>
    <form className="form-submit">
        <h2>Link Shortener</h2>
        <label className='label'>Enter a Link:</label>
        <input className='input' type="text" value={link} onChange={(e) => setLink(e.target.value)}/>
        <div className='submit' onClick={handleSubmit}><BsFillArrowRightSquareFill /></div>
        <div className="option">
          <div>Short domain:</div>
          <div className='option-btn'>shrtco.de</div>
          <div className='option-btn'>9qr.de</div>
          <div className='option-btn'> shiny.link</div>
        </div>
        <div className="shorten-link">Your shorten URL: <a href={api.result && api.result.full_short_link}>{api.result && api.result.full_short_link}</a></div>
    </form>
    </div>
    </>
  )
  }
export default Index;