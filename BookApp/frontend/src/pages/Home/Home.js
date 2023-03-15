import axios from 'axios';
import React, { useState , useEffect} from 'react';
import Footer from '../../components/Footer/Footer'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

import './Home.css'
import './Slider.css'
import './SliderThem.css'
// import imagesreact-js}

export default function Home() {
  const [books, setBooks] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    getBooks();
  }, []);
 
  function getBooks() {
    axios.get(`http://localhost/Book/BookApp/backend/books.php`)
      .then((response) => {
        setBooks(response.data);
        console.log(books,'books');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
    {/* <Header /> */}
{/* 
    {books.map((item, index) => (
                  <div key={index}>
                     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Title>{item.author}</Card.Title>
        <Card.Text>
        {item.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                      
             
    </div>
                ))} */}
                <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading ">Find Your Next Favorite Books?</h1>
          <p className="home-description ">
            You are in the right place. Tell us what titles or genres you have enjoyed
            in the past, and we will give you surprisingly insightful recommendations.
          </p>
        </div>
        <div className="top-rated-books-container ">
          <div className="top-rated-books-header-container">
            <h1 className="top-rated-books-heading "> All Books</h1>
           

              <button type="button" className="find-books-desktop-btn botn">
                {/* Add Books */}
                <Link to="/AddBookForm" class="UserCircle">Add Books</Link>
              </button>
           
          </div>
          <div className="slick-container">
            
    {books.map((item, index) => (
                  <div key={index}>
                     <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={'http://localhost/book/BookApp/backend/'+item.cover_image} /> */}
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Title>{item.author}</Card.Title>
        <Card.Text>
        {item.description}
        </Card.Text>
        <button type="button" className="find-books-desktop-btn botn">
                {/* Add Books */}
                <Link to="/AddBookForm" class="UserCircle">Edit Book</Link>
              </button>
      </Card.Body>
    </Card>
                      
             
    </div>
                ))}
            {/* <div className="slick-slider slick-initialized" dir="ltr">
            {books.map((item, index) => (
                    <div key={index}>
              <button
                type="button"
                data-role="none"
                className="slick-arrow slick-prev"
                style={{ display: "block", backgroundColor: "black" }}
              >
                {" "}
                Previous
              </button>
              <div className="slick-list">
                <div
                  className="slick-track"
                  style={{
                    width: 2360,
                    opacity: 1,
                    transform: "translate3d(-708px, 0px, 0px)"
                  }}
                >
                
                      <div
                        data-index={0}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: 236 }}
                      >
                        <div>
                          <a
                            className="slider-nav-link"
                            tabIndex={-1}
                            href="/home"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="slick-item">
                              <img
                                src={require(`../../images/${item.cover_image}`)}
                                className="cover-pic"
                                alt="book cover"
                              />
                              <h1 className="book-title ">{item.title}</h1>
                              <p className="book-author-name ">{item.author}</p>
                              <p className="book-author-name ">{item.description}</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    
                </div>
              </div>
              <button
                type="button"
                data-role="none"
                className="slick-arrow slick-next"
                style={{ display: "block", backgroundColor: "black" }}
              >
                {" "}
                Next
              </button>
              </div>
              ))}
            </div> */}
          </div>
          <Footer />
        </div>
      </div>
  </>
);
}

