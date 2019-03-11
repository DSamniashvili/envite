import React, { Component } from 'react'

export default class PersonDetailsForm extends Component {
  render() {
      console.log(this.props.person)
    return (
      <form className="person_details_form_wrapper"> 
            <label>
                <p>Name</p>
                <input type="text" name="name" value={this.props.person.name} />
            </label>
            <label>
                <p>Last Name</p>
                <input type="text" name="lastname" value={this.props.person.lastname} />
            </label>

            <label>
                <p>Email Address</p>
                <input type="text" name="email" value={this.props.person.email} />
            </label>

            <label>
                <p>Birth Date</p>
                <input type="text" name="birthdate" value={this.props.person.birthdate} />
            </label>

           
          
      </form>
    )
  }
}
