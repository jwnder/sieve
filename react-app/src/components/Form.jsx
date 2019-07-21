import React, { Component } from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.css'
import settings from '../settings';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      result : '',
      indexNumber : '',
      errorIndexNumber: null,
      errorForm: '',
      validIndexNumber: true
    }
    
    this.query = this.query.bind(this);
  }

  //Update index value
  onChange = e => {
    const value = e.target.value;
    this.setState({ errorForm: '' });
    this.setState({ indexNumber: value },
        () => this.validateIndexNumber(value));
  };

  //Validate the number field
  validateIndexNumber(value) {
    let valid = value.length >= 0 && value.match(/^[0-9]+$/i) != null;
    this.setState({validIndexNumber: valid });
    this.setState({errorIndexNumber: valid? '' : 'Invalid Number'})
  }

  //Query the service
  query(e) {
    e.preventDefault();
    axios
    .get(`${settings.serviceUrl}/service/${this.state.indexNumber}`, {
      crossdomain: true,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      this.setState({ result: JSON.stringify(response.data) })
      this.setState({ errorForm: '' });
    })
    .catch(err => {
      this.setState({ errorForm: err.toString() })
    });
  }

  classesErrorIndexNumber() {
    return(this.state.validIndexNumber === true ? '' : 'is-invalid');
  }

  render() {
    return (
      <div>
        <form>
          <div className="col-md-8 m-auto">
            <div className="display-4 text-center"><h1>Enter your index value</h1></div>
            {this.state.errorForm.length > 0? 
              <div className='alert alert-danger' dismissible>{this.state.errorForm}</div> : ''}
            <div className="input-group mb-3">
              <input
                className={`form-control form-control-lg ${this.classesErrorIndexNumber()}`}
                placeholder='Type a number'
                onChange={this.onChange}
              />
            <div className='invalid-feedback'>{this.state.errorIndexNumber}</div>
            </div>
            <button
              className="btn btn-info btn-block mt-4"
              onClick={this.query}>Submit
            </button>
          </div>
        </form>
        <hr/>
        <div>
          <div> Medians : {this.state.result}</div>
        </div>
      </div>
    )
  }
}

export default Form;
