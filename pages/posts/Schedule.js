import React from 'react';
import axios from 'axios';
import { Form , Button } from 'react-bootstrap';
import Moment from 'moment';

export default class Scheduler extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: [],
            email: " ",
            phone: " ",
            description: " ",
            date: Moment().format('YYYY-MM-DD')
        };


this.onChangeName = this.onChangeName.bind(this);
this.onChangeEmail = this.onChangeEmail.bind(this);
this.onChangePhone = this.onChangePhone.bind(this);
this.onChangeDescription = this.onChangeDescription.bind(this);
this.onChangeDate = this.onChangeDate.bind(this);

this.handleSubmit = this.handleSubmit.bind(this);
}
    
onChangeName(e){
    this.setState({name: e.target.value});
};

onChangeEmail(e){
    this.setState({email: e.target.value});
};

onChangePhone(e){
    this.setState({phone: e.target.value});
};

onChangeDescription(e){
    this.setState({description: e.target.value});
};

onChangeDate(e){
    this.setState({date: e.target.value});
};

handleSubmit(e){
    e.preventDefault(); 
    const scheduleItem = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        description: this.state.description,
        date: this.state.date
    }

    axios.post('http://localhost:7117/scheduler/', scheduleItem)
      .then(res => console.log(res.data));
      
      this.setState({
            name: " ",
            email: " ",
            phone: " ",
            description: " ",
            date: " "            
      });
    }

    render(){
        return(
            <div>
                <form className='container' noValidate autoComplete="off">
                    <div>
                    <Form.Group controlId="formBasicNumber">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" placeholder="Phone" value={this.state.phone} onChange={this.onChangePhone}/>
                        </Form.Group>
                        
                         <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Name" value={this.state.name} onChange={this.onChangeName}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail}/>
                        </Form.Group>

                       

                        <Form.Group controlId="formBasicNumber">
                            <Form.Label>Description of Job</Form.Label>
                            <Form.Control type="email" placeholder="ie. size of kitchen, number of hoods, years since last cleaning" value={this.state.description} onChange={this.onChangeDescription}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicNumber">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type='date' value={this.state.date} onChange={this.onChangeDate}/>
                        </Form.Group>

                    <Button variant="info" type="submit" style={{color: 'pink', borderColor:'pink', marginBottom: '15px'}} onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}}
