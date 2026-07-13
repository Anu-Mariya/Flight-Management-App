import axios from 'axios'
import React, { useState } from 'react'

const AddFlight = () => {

    const [input, changeInput] = useState({
  flight_number: "",
  airline: "",
  origin: "",
  destination: "",
  departure_date: "",
  arrival_time: "",
  fare: "",
  total_seats: "",
  available_seats: "",
  status: "",
})

//
const inputHandler = (event) => {

  // this line use cheyanath front endil user type cheyuna values apurath poyii store cheyanane for that we had linked the variable name and value here
  changeInput({...input,[event.target.name]: event.target.value})

}


const readValue = () =>{

console.log(input)

axios.post(" https://host-demo-app.onrender.com/api/add-flight",input).then(

  (response)=>{

    console.log(response.data)

    alert("Course Added Succesfully")

  }
).catch(
  (error)=>{
    console.log(error)
  }
)

}

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row gt-2">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Flight Number</label>
                            <input type="text" className="form-control" 
                            onChange={inputHandler}
                            name="course_name"
                            value={input.course_name}
                            />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">AirLine</label>
                            <input type="text" className="form-control" 
                            onChange={inputHandler}
                            name="course_name"
                            value={input.course_name}
                            />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Origin</label>
                            <input type="text" className="form-control"
                            onChange={inputHandler}
                            name="course_name"
                            value={input.course_name} 
                             />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Destination</label>
                            <input type="text" className="form-control" 
                            onChange={inputHandler}
                            name="course_name"
                            value={input.course_name}
                            />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Departure Date</label>
                            <input type="text" className="form-control"
                            onChange={inputHandler}
                            name="course_name"
                            value={input.course_name}
                            />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Departure Time</label>
                            <input type="text" className="form-control" 
                            onChange={inputHandler}
                            name="course_name"
                            value={input.course_name}
                            />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Arrival Time</label>
                            <input type="text" className="form-control" 
                            onChange={inputHandler}
                            name="course_name"
                            value={input.course_name}
                            />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Fare</label>
                            <input type="text" className="form-control" 
                            onChange={inputHandler}
                            name="course_name"
                            value={input.course_name}
                            />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Total Seats</label>
                            <input type="text" className="form-control"
                            onChange={inputHandler}
                            name="course_name"
                            value={input.course_name}
                            />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Available seats</label>
                            <input type="text" className="form-control" 
                            onChange={inputHandler}
                            name="course_name"
                            value={input.course_name}
                            />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Status</label>
                            <input type="text" className="form-control" 
                            onChange={inputHandler}
                            name="course_name"
                            value={input.course_name}
                            />
                        </div>
                         <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                            <button className="btn btn-primary" onClick={readValue}>Submit</button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddFlight