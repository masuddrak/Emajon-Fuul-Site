import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipping = () => {
    const [name,setName]=useState('')
    const [adress,setAdress]=useState('')
    const [phone,setPhone]=useState('')
    const [email, setEmail] = useState('')
    
    const [user] = useAuthState(auth);
    // handel event
    const handeName = (event) => {
        setName(event.target.value)
    }
    const handePhone = (event) => {
        setPhone(event.target.value)
    }
    const handeAdress = (event) => {
        setAdress(event.target.value)
    }
   
    const handelCreateUser=(event)=>{
        event.preventDefault()
        const shippingInfo={name,adress,email,phone}
        console.log(shippingInfo)
    }
    return (
        <div className='form-containe'>
            <h2 className='form-title'>Shipping Now</h2>
            <div className='form-label'>
                <div>
                    <form onSubmit={handelCreateUser}>
                        <div className="input-grup">
                            <label htmlFor="name">Yure Name</label>
                            <input onBlur={handeName} type="name" name="name" id="" required />
                        </div>
                        <div className="input-grup">
                            <label htmlFor="email">Email</label>
                            <input value={user?.email} type="email" name="email" id="" required />
                        </div>
                        <div className="input-grup">
                            <label htmlFor="adress">Yure Adress</label>
                            <input onBlur={handeAdress} type="text" name="text" id="" required />
                        </div>
                        <div className="input-grup">
                            <label htmlFor="phone">Yure Phone</label>
                            <input onBlur={handePhone} type="text" name="phone" id="" required />
                        </div>
                        
                        <div className="input-grup">
                            <input className='submit' type="submit" value="Shipping Now" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Shipping;