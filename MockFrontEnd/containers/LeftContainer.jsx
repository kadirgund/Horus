import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/app.scss'

class LeftContainer extends React.Component {
    constructor() {
        super();
        this.state ={
            custId: '',
            name: '',
            age: '',
            address: '',
            favBookId: ''
        };
        //this.handleCreateCustomerButton = this.handleCreateCustomerButton.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCustomerSubmit = this.handleCustomerSubmit.bind(this);
        this.handleBookSubmit = this.handleBookSubmit.bind(this)
    }

       handleChange(e) {
         this.setState({ [e.target.name]: e.target.value });
       }

       handleCustomerSubmit(e) {
           e.preventDefault();
           let url = 'http://localhost:3000/customers';
           fetch(url, {
               method: 'POST',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({
                custId: this.state.custId,
                   name: this.state.name,
                   age: this.state.age,
                   address: this.state.address,
                   favBookId: this.state.favBookId
               })
           })
           .then(res => res.json())
           .then(data => {
               console.log('Data retrieved: ', data)
           })
       }

       handleBookSubmit(e) {
           e.preventDefault();
           fetch('http://localhost:3000/books', {
               method: 'POST',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({
                   title: this.state.title,
                   author: this.state.author,
                   numberOfPages: this.state.age,
                   publisher: this.state.publisher,
                   bookId: this.state.bookId
               })
           })
           .then(res => res.json())
           .then(data => {
               console.log('Book Created: ', data)
           })
       }

    render(){
        return(
            <div className='LeftContainer'>
                Hello LeftContainer
                <form onSubmit={this.handleCustomerSubmit} className='CreateCustomerForm'>
                    <h4>Create New Customer</h4>
                    <label>Customer ID:  </label>
                    <input 
                        id="custId"
                        type="text"
                        name="custId"
                        value={this.state.custId}
                        placeholder='Enter Customer ID'
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>Customer Name:  </label>
                    <input
                    id="custName"
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder='Enter Name'
                    onChange={this.handleChange}
                    />
                    <br />
                    <label>Customer Age:  </label>
                    <input
                    id="custAge"
                    type="text"
                    name="age"
                    value={this.state.age}
                    placeholder="Enter Age"
                    onChange={this.handleChange}
                    />
                    <br />
                    <label>Customer Address:  </label>
                    <input
                    id="custAddress"
                    type="text"
                    name="address"
                    value={this.state.address}
                    placeholder="Enter Address"
                    onChange={this.handleChange}
                    />
                    <br />
                    <label>Favorite Book ID:  </label>
                    <input
                    id="favBookId"
                    type="text"
                    name="favBookId"
                    value={this.state.favBookId}
                    placeholder="Enter Favorite Book ID"
                    onChange={this.handleChange}
                    />
                    <br />
                    <button type="submit" id="createCustomerButton">Create Customer</button>
                    {/* <button type="button" id="createCustomerButton" onClick={this.handleCreateCustomerButton}>Create Customer</button> */}
                </form>
                <form onSubmit={this.handleBookSubmit} className='CreateBookForm'>
                    <h4>Add Book to Bookstore</h4>
                    <label>Title: </label>
                    <input
                    id="title"
                    type="text"
                    name="title"
                    value={this.state.title}
                    placeholder="Enter Title"
                    onChange={this.handleChange}
                    />
                    <br/>
                    <label>Author: </label>
                    <input
                    id="author"
                    type="text"
                    name="author"
                    value={this.state.author}
                    placeholder="Enter Author"
                    onChange={this.handleChange}
                    />
                    <br/>
                    <label># of Pages: </label>
                    <input
                    id="numberOfPages"
                    type="text"
                    name="numberOfPages"
                    value={this.state.numberOfPages}
                    placeholder="Enter # of Pages"
                    onChange={this.handleChange}
                    />
                    <br/>
                    <label>Publisher: </label>
                    <input
                    id="publisher"
                    type="text"
                    name="publisher"
                    value={this.state.pusblisher}
                    placeholder="Enter Name of Publisher"
                    onChange={this.handleChange}
                    />
                    <br/>
                    <label>Book ID #: </label>
                    <input
                    id="bookId"
                    type="text"
                    name="bookId"
                    value={this.state.bookId}
                    placeholder="Enter Book ID #"
                    onChange={this.handleChange}
                    />
                    <br/>
                    <button type="submit" id="createBookButton">Create Book</button>
                </form>
            </div>
        )
    }
}

export default LeftContainer