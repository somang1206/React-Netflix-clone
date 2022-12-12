import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Nav.css";




export default function Nav() {

  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", ()=>{
      console.log('window.scrollY', window.scrollY);
      if(window.scrollY > 50){
        setShow(true);
      }else{
        setShow(false);
      }
    })

    return () => {
      window.removeEventListener("scroll", ()=>{});
    };
  }, []);

  const handleChange = (e) => {
      setSearchValue(e.target.value);
      navigate(`/search?=q=${e.target.value}`);
  }

  return (
    <nav className={`nav ${show && "nav__black"}`}>
        <img
        alt="netflix_logo"
        src="/img/netflix_logo.png"
        className='nav__logo'
        onClick={()=>window.location.reload()}
        />

    <input 
      value={searchValue} 
      onChange={handleChange} 
      className="nav__input" 
      type="text" 
      placeholder='영화를 검색해주세요.'
      
      />

        <img
        alt="User logged"
        src="/img/Netflix-avatar.png"
        className="nav__avatar"
        />
    </nav>
  );
}
