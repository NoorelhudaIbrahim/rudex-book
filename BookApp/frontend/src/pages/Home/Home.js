import React from 'react'
import Footer from '../../components/Footer/Footer'
import './Home.css'
import './Slider.css'
import './SliderThem.css'

export default function Home() {
  return (
    <>
<div className="home-container">
  <div className="home-content">
    <h1 className="home-heading ">Find Your Next Favorite Books?</h1>
    <p className="home-description ">
      You are in the right place. Tell us what titles or genres you have enjoyed
      in the past, and we will give you surprisingly insightful recommendations.
    </p>
    <a href="/shelf">
      <button type="button" className="find-books-mobile-btn">
        Find Books
      </button>
    </a>
  </div>
  <div className="top-rated-books-container ">
    <div className="top-rated-books-header-container">
      <h1 className="top-rated-books-heading ">Top Rated Books</h1>
      <a href="/AddBookForm">
        <button type="button" className="find-books-desktop-btn botn">
          Add Books
        </button>
      </a>
    </div>
    <div className="slick-container">
      <div className="slick-slider slick-initialized" dir="ltr">
        <button
          type="button"
          data-role="none"
          className="slick-arrow slick-prev"
          style={{ display: "block" }}
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
                  href="/books/8301d74f-fa98-4fc7-a0d7-96b0b8d67bc9"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="slick-item">
                    <img
                      className="cover-pic"
                      src="https://assets.ccbp.in/frontend/react-js/the-novel-book.png"
                      alt="company logo"
                    />
                    <h1 className="book-title ">The Help</h1>
                    <p className="book-author-name ">Kathryn Stockett</p>
                  </div>
                </a>
              </div>
            </div>
            <div
              data-index={1}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none", width: 236 }}
            >
              <div>
                <a
                  className="slider-nav-link"
                  tabIndex={-1}
                  href="/books/5f7fe73a-c4f2-4d58-b4ad-ec88426e26be"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="slick-item">
                    <img
                      className="cover-pic"
                      src="https://assets.ccbp.in/frontend/react-js/rich-dad-poor-dad-book.png"
                      alt="company logo"
                    />
                    <h1 className="book-title ">Rich Dad Poor Dad</h1>
                    <p className="book-author-name ">Robert Kiyosaki</p>
                  </div>
                </a>
              </div>
            </div>
            <div
              data-index={2}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none", width: 236 }}
            >
              <div>
                <a
                  className="slider-nav-link"
                  tabIndex={-1}
                  href="/books/19cef045-ef9b-4898-a9e9-dc943e44da5e"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="slick-item">
                    <img
                      className="cover-pic"
                      src="https://assets.ccbp.in/frontend/react-js/atomic-habits-book.png"
                      alt="company logo"
                    />
                    <h1 className="book-title ">Atomic Habits</h1>
                    <p className="book-author-name ">James Clear</p>
                  </div>
                </a>
              </div>
            </div>
            <div
              data-index={3}
              className="slick-slide slick-active slick-current"
              tabIndex={-1}
              aria-hidden="false"
              style={{ outline: "none", width: 236 }}
            >
              <div>
                <a
                  className="slider-nav-link"
                  tabIndex={-1}
                  href="/books/561d0af9-3cec-426d-9721-35ed8d7e9c3c"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="slick-item">
                    <img
                      className="cover-pic"
                      src="https://assets.ccbp.in/frontend/react-js/half-girlfriend-book.png"
                      alt="company logo"
                    />
                    <h1 className="book-title ">Half Girlfriend</h1>
                    <p className="book-author-name ">Chetan Bhagat</p>
                  </div>
                </a>
              </div>
            </div>
            <div
              data-index={4}
              className="slick-slide slick-active"
              tabIndex={-1}
              aria-hidden="false"
              style={{ outline: "none", width: 236 }}
            >
              <div>
                <a
                  className="slider-nav-link"
                  tabIndex={-1}
                  href="/books/7850622e-1b70-4396-963d-e68d5a2577d7"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="slick-item">
                    <img
                      className="cover-pic"
                      src="https://assets.ccbp.in/frontend/react-js/eyes-to-the-wind-book.png"
                      alt="company logo"
                    />
                    <h1 className="book-title ">Eyes to the Wind</h1>
                    <p className="book-author-name ">Ady Barkan</p>
                  </div>
                </a>
              </div>
            </div>
            <div
              data-index={5}
              className="slick-slide slick-active"
              tabIndex={-1}
              aria-hidden="false"
              style={{ outline: "none", width: 236 }}
            >
              <div>
                <a
                  className="slider-nav-link"
                  tabIndex={-1}
                  href="/books/1c9201d5-ffa9-4750-ad92-a5ce6009a747"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="slick-item">
                    <img
                      className="cover-pic"
                      src="https://assets.ccbp.in/frontend/react-js/harry-potter-book.png"
                      alt="company logo"
                    />
                    <h1 className="book-title ">Harry Porter</h1>
                    <p className="book-author-name ">J. K. Rowling</p>
                  </div>
                </a>
              </div>
            </div>
            <div
              data-index={6}
              className="slick-slide slick-active"
              tabIndex={-1}
              aria-hidden="false"
              style={{ outline: "none", width: 236 }}
            >
              <div>
                <a
                  className="slider-nav-link"
                  tabIndex={-1}
                  href="/books/fb3cf65e-fd0f-4053-b525-8e9af7cf553e"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="slick-item">
                    <img
                      className="cover-pic"
                      src="https://assets.ccbp.in/frontend/react-js/the-girl-that-had-to-be-strong-book.png"
                      alt="company logo"
                    />
                    <h1 className="book-title ">
                      A Girl That Had To Be Strong
                    </h1>
                    <p className="book-author-name ">Garima Pradhan</p>
                  </div>
                </a>
              </div>
            </div>
            <div
              data-index={7}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none", width: 236 }}
            >
              <div>
                <a
                  className="slider-nav-link"
                  tabIndex={-1}
                  href="/books/0439de13-33a2-4303-af0c-088db339a67e"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="slick-item">
                    <img
                      className="cover-pic"
                      src="https://assets.ccbp.in/frontend/react-js/how-successful-people-think-book.png"
                      alt="company logo"
                    />
                    <h1 className="book-title ">How successful people Think</h1>
                    <p className="book-author-name ">John C. Maxwell</p>
                  </div>
                </a>
              </div>
            </div>
            <div
              data-index={8}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none", width: 236 }}
            >
              <div>
                <a
                  className="slider-nav-link"
                  tabIndex={-1}
                  href="/books/a94bf1b1-b49e-4ba2-8d41-3625cf6cee09"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="slick-item">
                    <img
                      className="cover-pic"
                      src="https://assets.ccbp.in/frontend/react-js/the-beginning-of-everything-book.png"
                      alt="company logo"
                    />
                    <h1 className="book-title ">The Beginning of Everything</h1>
                    <p className="book-author-name ">Robyn Schneider</p>
                  </div>
                </a>
              </div>
            </div>
            <div
              data-index={9}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none", width: 236 }}
            >
              <div>
                <a
                  className="slider-nav-link"
                  tabIndex={-1}
                  href="/books/1ef1dcc0-32a4-4a73-a598-4643ea919a5f"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="slick-item">
                    <img
                      className="cover-pic"
                      src="https://assets.ccbp.in/frontend/react-js/george-orwell-1984-book.png"
                      alt="company logo"
                    />
                    <h1 className="book-title ">1984</h1>
                    <p className="book-author-name ">George Orwell</p>
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
          style={{ display: "block" }}
        >
          {" "}
          Next
        </button>
      </div>
    </div>
  </div>
  <Footer/>
</div>

    </>
  )
}
