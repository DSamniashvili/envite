import React from 'react'

const PersonDetailsForm = props => (
      <form className="person_details_form_wrapper"> 
            <div className="form_items_fline">
            <div className="form_item form_item_name">
            <label className="form_item_label_tag">
                <p className="form_item_heading">Name</p>
                <input type="text" className="form_item_input" name="name" defaultValue={props.person.name} />
            </label>
            </div>
            <div className="form_item form_item_lastname">
            <label className="form_item_label_tag">
                <p className="form_item_heading">Last Name</p>
                <input type="text" className="form_item_input" name="lastname" defaultValue={props.person.lastname} />
            </label>
            </div>
            </div>

            <div className="form_item form_item_email">
            <label className="form_item_label_tag">
                <p className="form_item_heading">Email Address</p>
                <input type="text" className="form_item_input" name="email" defaultValue={props.person.email} />
            </label>
            </div>

           <div className="form_item form_item_bdate">
           <label className="form_item_label_tag">
                <p className="form_item_heading">Birth Date</p>
                <input type="text" className="form_item_input" name="birthdate" defaultValue={props.person.birthdate} />
            </label>
           </div> 
      </form>
    )

export default PersonDetailsForm;