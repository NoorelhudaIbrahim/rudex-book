{dataUsers.map((data,index)=>{

return( <div key={index}>
 <div className="shelves-container ">
 
  <div className="ProfileSec">
    {/* Profile picture card*/}
      {/* <h1 className="mb-2 mt-0 bookshelves-text ">Profile Picture</h1> */}
    
        {/* Profile picture image*/}
        <img
          className="img-account-profile rounded-circle mb-2"
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
          alt=""
        />
        {/* Profile picture help block*/}
        <div className="small font-italic text-muted mb-4">
        {data.name}
        </div>
        {/* Profile picture upload button*/}
        <button className="find-books-desktop-btn botn" type="button">
          Upload new image
        </button>
  </div>
    </div>

    
    {/* <h1 className="bookshelves-text ">Bookshelves</h1>
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
    </ul> */}
      </div>)
        })}