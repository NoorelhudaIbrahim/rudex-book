import React from 'react'
import Footer from '../Footer/Footer'
import './RightSide.css'

export default function RightSide() {
  return (
    <>
    
 <div className="header-and-books-container">

{/*========== Search Section ==========*/}
    <div className="book-shelf-header-container">
      <h1 className="header-heading ">All Books</h1>
      <div className="desktop-search-input-container">
        <div className="search-input-container ">
          <input
            type="search"
            className="search-input "
            placeholder="Search"
            defaultValue=""
          />
          <button
            className="search-button "
            type="button"
            value="searchButton"
            testid="searchButton"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 16 16"
              className="search-icon "
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
{/*====================================*/}

{/*========== Book Item ==========*/}
    <div className="all-books-container">
      <div className="left-side-books-container">
        <ul className="book-items-details-container">
          <a
            className="book-item-nav-link"
            href="/books/54402549-a4bd-4c99-a176-bd795d47173a"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/one-life-one-chance-book.png"
                alt="One life one chance"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">One life one chance</h1>
                <p className="book-item-author-name ">Luke Richmond</p>
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/2ece92fb-c131-43b1-9c07-6f32bc465d01"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/half-girlfriend-book.png"
                alt="Half Girlfriend"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">Half Girlfriend</h1>
                <p className="book-item-author-name ">Chetan Bhagat</p>
                <p className="book-item-status-text ">
                  Status:
                  <span className="book-item-status"> Currently Reading</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/7850622e-1b70-4396-963d-e68d5a2577d7"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/eyes-to-the-wind-book.png"
                alt="Eyes to the Wind"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">Eyes to the Wind</h1>
                <p className="book-item-author-name ">Ady Barkan</p>
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/0439de13-33a2-4303-af0c-088db339a67e"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/how-successful-people-think-book.png"
                alt="How successful people Think"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">
                  How successful people Think
                </h1>
                <p className="book-item-author-name ">John C. Maxwell</p>
                <p className="book-item-status-text ">
                  Status:
                  <span className="book-item-status"> Currently Reading</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/bd665146-89bb-41f5-b876-37948311b3fd"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/the-book-of-life-book.png"
                alt="The Book of Life"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">The Book of Life</h1>
                <p className="book-item-author-name ">Deborah Harkness</p>
                <div className="book-item-rating-container">
                  <p className="book-item-rating-text ">Avg Rating</p>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    color="#FBBF24"
                    height={15}
                    width={15}
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "rgb(251, 191, 36)" }}
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <p className="book-item-rating ">3.5</p>
                </div>
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/1055f585-559b-4fe6-b9b0-d100b52b0389"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/the-tempest-book.png"
                alt="The Tempest"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">The Tempest</h1>
                <p className="book-item-author-name ">Willam Shakespeare</p>
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Want To Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/b25ba3f7-d91b-4641-86fe-2aa47f3ca365"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/books-to-die-for-book.png"
                alt="Books To Die For"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">Books To Die For</h1>
                <p className="book-item-author-name ">Declan Burke</p>
                <p className="book-item-status-text ">
                  Status:
                  <span className="book-item-status"> Currently Reading</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/d62be471-cd9b-4b1f-ad21-ab81ac370a06"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/the-secret-messenger-book.png"
                alt="The Secret Messenger"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">The Secret Messenger</h1>
                <p className="book-item-author-name ">Mandy Robotham</p>
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Want To Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/20744513-efa5-4a58-85c2-eee3bc4d5a17"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/in-to-the-dark-book.png"
                alt="In To The Dark"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">In To The Dark</h1>
                <p className="book-item-author-name ">Claudia Gray</p>
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Want To Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/fd0b91f2-8167-4449-b5ff-baa87bb918d1"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/say-that-again-book.png"
                alt="Say That Again"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">Say That Again</h1>
                <p className="book-item-author-name ">N. Gemini Sasson</p>
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Want To Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/a2e055e0-be66-4af5-8ff5-857dba47a46d"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/the-sky-is-every-where-book.png"
                alt="The Sky Is Every Where"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">The Sky Is Every Where</h1>
                <p className="book-item-author-name ">Jandy Nelson</p>
                <p className="book-item-status-text ">
                  Status:
                  <span className="book-item-status"> Currently Reading</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/ca1cd543-f156-41d7-a640-a333890f011f"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/star-in-the-storm-book.png"
                alt="Star in the Storm"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">Star in the Storm</h1>
                <p className="book-item-author-name ">Joan Hiatt Harlow</p>
                <p className="book-item-status-text ">
                  Status:
                  <span className="book-item-status"> Currently Reading</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/5f1e9de9-5360-4a76-bed7-2c03b1618a6a"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/i-can-and-i-will-book.png"
                alt="I Can And I Will"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">I Can And I Will</h1>
                <p className="book-item-author-name ">Rick Stanfield</p>
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Want To Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/a94bf1b1-b49e-4ba2-8d41-3625cf6cee09"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/the-beginning-of-everything-book.png"
                alt="The Beginning of Everything"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">
                  The Beginning of Everything
                </h1>
                <p className="book-item-author-name ">Robyn Schneider</p>
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Want To Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/e9f49279-5cf7-4167-a9d7-554cd0adbec3"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/between-the-blue-sea-and-me-book.png"
                alt="Between The Deep Blue Sea And Me"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">
                  Between The Deep Blue Sea And Me
                </h1>
                <p className="book-item-author-name ">
                  Lurline Wailana McGregor
                </p>
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Read</span>
                </p>
              </div>
            </div>
          </a>
        </ul>
      </div>
      <div className="right-side-books-container">
        <ul className="book-items-details-container">
          <a
            className="book-item-nav-link"
            href="/books/e3b9c630-90fa-4166-b26b-469217fd485b"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/the-last-flight-book.png"
                alt="The Last Flight"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">The Last Flight</h1>
                <p className="book-item-author-name ">Julie Clark</p>
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/a9f36490-6ba4-4343-8cf7-5f2558b46e06"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/eat-that-frog-book.png"
                alt="Eat That Frog"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">Eat That Frog</h1>
                <p className="book-item-author-name ">Brian Tracy</p>
                
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/608a7ea5-9d5b-4eca-af3b-c0dec923f36b"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/the-name-of-the-wind-book.png"
                alt="The Name of the Wind"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">The Name of the Wind</h1>
                <p className="book-item-author-name ">Patrick Rothfuss</p>
                <p className="book-item-status-text ">
                  Status:
                  <span className="book-item-status"> Currently Reading</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/1c9201d5-ffa9-4750-ad92-a5ce6009a747"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/harry-potter-book.png"
                alt="Harry Porter"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">Harry Porter</h1>
                <p className="book-item-author-name ">J. K. Rowling</p>
                 <p className="book-item-status-text ">
                  Status:
                  <span className="book-item-status"> Currently Reading</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/bfcd0883-d5d0-40d3-9977-e99fb2bad3ab"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/the-fault-in-our-stars-book.png"
                alt="The Fault in Our Stars"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">The Fault in Our Stars</h1>
                <p className="book-item-author-name ">John Green</p>
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/5f7fe73a-c4f2-4d58-b4ad-ec88426e26be"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/rich-dad-poor-dad-book.png"
                alt="Rich Dad Poor Dad"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">Rich Dad Poor Dad</h1>
                <p className="book-item-author-name ">Robert Kiyosaki</p>
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/229b7771-978a-4fca-9538-846ab17dde14"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/i-will-you-give-the-sun-book.png"
                alt="I Will Give You the Sun"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">I Will Give You the Sun</h1>
                <p className="book-item-author-name ">Jandy Nelson</p>
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/19cef045-ef9b-4898-a9e9-dc943e44da5e"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/atomic-habits-book.png"
                alt="Atomic Habits"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">Atomic Habits</h1>
                <p className="book-item-author-name ">James Clear</p>
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/1ef1dcc0-32a4-4a73-a598-4643ea919a5f"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/george-orwell-1984-book.png"
                alt={1984}
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">1984</h1>
                <p className="book-item-author-name ">George Orwell</p>               
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Want To Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/561d0af9-3cec-426d-9721-35ed8d7e9c3c"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/seasons-of-moon-and-flame-book.png"
                alt="Seasons of Moon and Flame"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">Seasons of Moon and Flame</h1>
                <p className="book-item-author-name ">Danielle Dulsky</p>
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Want To Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/fb3cf65e-fd0f-4053-b525-8e9af7cf553e"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/the-girl-that-had-to-be-strong-book.png"
                alt="A Girl That Had To Be Strong"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">
                  A Girl That Had To Be Strong
                </h1>
                <p className="book-item-author-name ">Garima Pradhan</p>
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Want To Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/a869e249-d1dd-4f24-972b-babc1c665146"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/the-german-midwife-book.png"
                alt="The German Midwife"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">The German Midwife</h1>
                <p className="book-item-author-name ">Mandy Robotham</p>
                <p className="book-item-status-text ">
                  Status:<span className="book-item-status"> Want To Read</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/35966d34-ee9e-4d76-a1ec-9e128b041b6e"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/the-ones-we-choose-book.png"
                alt="The Ones We Choose"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">The Ones We Choose</h1>
                <p className="book-item-author-name ">Julie Clark</p>
                <p className="book-item-status-text ">
                  Status:
                  <span className="book-item-status"> Currently Reading</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/7b3c76de-2837-415b-94ae-8a3103faf9bb"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/beyond-the-village-pond-book.png"
                alt="Beyond the Village Pond"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">Beyond the Village Pond</h1>
                <p className="book-item-author-name ">Shivdev Singh</p>
                <p className="book-item-status-text ">
                  Status:
                  <span className="book-item-status"> Currently Reading</span>
                </p>
              </div>
            </div>
          </a>
          <a
            className="book-item-nav-link"
            href="/books/8301d74f-fa98-4fc7-a0d7-96b0b8d67bc9"
          >
            <div className="book-item-cover-pic-info-container">
              <img
                className="book-item-cover-pic"
                src="https://assets.ccbp.in/frontend/react-js/the-novel-book.png"
                alt="The Help"
              />
              <div className="book-item-info-container">
                <h1 className="book-item-title ">The Help</h1>
                <p className="book-item-author-name ">Kathryn Stockett</p>
                <p className="book-item-status-text ">
                  Status:
                  <span className="book-item-status"> Currently Reading</span>
                </p>
              </div>
            </div>
          </a>
        </ul>
      </div>
    </div>

    <Footer/>
  </div>

    
    </>
  )
}
