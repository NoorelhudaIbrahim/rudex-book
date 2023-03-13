// import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {getUsers} from './actions/index'

// class Users extends Component {
//     constructor(props){
//         super(props);
//         this.state=
//         {deleteButton:true};
//         this.handleButton=this.handleButton.bind(this)
//     }
//     componentDidMount(){
//         this.props.getUsers()
        
//     }
//     handleButton(id){
//         // event.preventDefault();
        
//         document.getElementById(id).style.display="none";   
//     }
//     render() {
//         const {users} = this.props.users
//         console.log(this.props.users)

        
//         return (
//             <div>
//                 {users.map(u => 
//                      <div key={u.id} style={{display:this.state.deleteButton?'block':'none'}} id={u.id}>
//                          <h6 >{u.original_title}</h6> 
//                          <button onClick={() => this.handleButton(u.id)} className="btn btn-danger">Delete</button> 
//                      </div>
//                 )}
//             </div>
//         )
//     }
// }

// const mapStateToProps  = (state) => ({users:state.users})

// export default connect(mapStateToProps, {getUsers})(Users)