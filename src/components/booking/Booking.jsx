import React,{useState, useContext} from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import {useNavigate} from 'react-router-dom'
import {AuthContext} from "../../context/AuthContext"
import {BASE_URL} from "../../utils/config"

const Booking = ({tour, avgRating}) => {

    const {price, reviews, title} = tour;
    const navigate = useNavigate()


    const {user} = useContext(AuthContext)
    console.log("context user : ", user)

    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName: title,
        fullName: "",
        phone:'',
        guestSize:1,
        bookAt:'',
    })

    const handleChange = e => {
        setBooking(prev=>({...prev, [e.target.id]:e.target.value}))
    };

    const serviceFee = 20000
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)

    const handleClick = async e =>{
        e.preventDefault()

        try {
            if(!user || user == undefined || user == null){
                return alert('Please Login')
            }

            const res = await fetch(`${BASE_URL}/booking`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    token: user.token
                },
                credentials:'include',
                body:JSON.stringify(booking)
            })

            const result = await res.json()
            console.log(result)
            if(!res.ok) {
                return alert(result.msg)
            }
            navigate('/thank-you')
        } catch (error) {
            console.error('An error occurred:', error);
            alert('An error occurred: ' + error.msg || 'Please try again.');
        }

    }

  return (
    <div className='booking'>
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>Rp{price} <span>Per Orang</span></h3>
            <span className='tour__rating d-flex align-items-center'>
                <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>
        </div>
        {/* Booking Form */}
        <div className="booking__form" onSubmit={handleClick}>
            <h5>Information</h5>
            <Form className='booking__info-form'>
                <FormGroup>
                    <input type="text" placeholder='Full Name' id='fullName' required onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <input type="number" placeholder='Phone' id='phone' required onChange={handleChange}/>
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type="date" placeholder='' id='bookAt' required onChange={handleChange}/>
                    <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange}/>
                </FormGroup>
            </Form>
        </div>
        {/* Booking End */}

        {/*Booking Bottom */}
        <div className="booking__buttom">
            <ListGroup>
            <ListGroupItem className='border-0 px-0'>
                <h5 className='d-flex align-items-center gap-1'>
                    Rp{price} <i class="ri-close-line"></i> 1 Orang</h5>
                <span>Rp{price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
                <h5>Service charge</h5>
                <span>Rp{serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total'>
                <h5>Total</h5>
                <span>Rp{totalAmount}</span>
            </ListGroupItem>

            </ListGroup>
            <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
        </div>
    </div>
  )
}

export default Booking