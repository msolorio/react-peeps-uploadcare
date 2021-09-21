import React from 'react';
import { Redirect } from 'react-router-dom';
import { Widget } from "@uploadcare/react-widget";

class NewPeepPage extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    imageUrl: '',
    redirect: false
  }

  handleInputChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFileUpload = (input: any) => {
    this.setState({ imageUrl: input.cdnUrl });
  }

  handleSubmit = async (event: any) => {
    event.preventDefault();

    const newPeep = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      imageUrl: this.state.imageUrl
    }

    try {
      await fetch('http://localhost:4000/peeps', {
        method: 'POST',
        body: JSON.stringify(newPeep),
        headers: { 'Content-Type': 'application/json' }
      });

      this.setState({ redirect: true })

    } catch (err) {
      console.error(err);
    }
  }

  render() {
    if (this.state.redirect) return <Redirect to="/peeps" />

    return (
      <div>
        <h2>Add a Peep</h2>
  
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </div>
  
          <div>
            <label htmlFor="lastName">Last Name: </label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </div>
  
          <div>
            {
              this.state.imageUrl
              && <img className="peep-index-img" src={this.state.imageUrl} alt="" />
            }
          </div>

          <div>
            <label htmlFor="image">Upload an Image: </label>
            <Widget
              publicKey={process.env.REACT_APP_UPLOADCARE_API_KEY || ''}
              onChange={this.handleFileUpload}
            />
          </div>

          <input type="submit" value="Add a Peep" />
        </form>
      </div>
    )
  }
}

export default NewPeepPage;