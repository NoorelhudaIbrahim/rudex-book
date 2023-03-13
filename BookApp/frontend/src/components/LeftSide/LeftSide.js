import React from 'react'
import './LeftSide.css'

export default function LeftSide() {
  return (
    <>
    <div className="shelves-container ">
    <div className="mobile-search-input-container">
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
    <h1 className="bookshelves-text ">Bookshelves</h1>
    <ul className="shelf-items-container">
      <li className="shelf-item">
        <button type="button" className="shelf-button active-shelf ">
          All
        </button>
      </li>
      <li className="shelf-item">
        <button type="button" className="shelf-button  ">
          Read
        </button>
      </li>
      <li className="shelf-item">
        <button type="button" className="shelf-button  ">
          Currently Reading
        </button>
      </li>
      <li className="shelf-item">
        <button type="button" className="shelf-button  ">
          Want to Read
        </button>
      </li>
    </ul>
  </div>
    
    </>
  )
}
