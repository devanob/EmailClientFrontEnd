import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
//Provides Search Functionality Throught TextInput Send Text Event To Handlier(Parent-)
class Search extends Component{
    constructor(props){
      super(props);

    }
    render() {
      const {value=null, onChange=null, children=null} = this.props;
      return (
        <Form inline >
          <FormControl value={value} onChange={onChange} type="text" placeholder="Search by Email" className="mr-sm-2" />
          <Button type="button" variant="outline-success">Search</Button>
        </Form>
  
      );
    }
    
  }
  
  export default Search;