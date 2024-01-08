import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export function Singleimage() {
    var { id } = useParams()
    const [detail, setDetail] = useState('')
    const [image, setImage] = useState('')
    const [brick, setBrick] = useState('')
    const [cement, setCement] = useState('')
    const [rod, setRod] = useState('')
    const [sand, setSand] = useState('')
    const [babystone, setBabystone] = useState('')
    const [msand, setMsand] = useState('')
    const [psand, setPsand] = useState('')
    const [price, setPrice] = useState('')


    useEffect(() => {
        fetch("http://localhost:2205/singleimage/" + id)
            .then(detail => detail.json())
            .then((singleimage) => {
                setImage(singleimage[0].image)
                setBrick(singleimage[0].brick)
                setCement(singleimage[0].cement)
                setRod(singleimage[0].rod)
                setSand(singleimage[0].sand)
                setBabystone(singleimage[0].babystone)
                setMsand(singleimage[0].msand)
                setPsand(singleimage[0].psand)
                setPrice(singleimage[0].price)


            }
            )
    }, [])
    const del = (id) => {
        var key = { id: id }
        axios.post("http://localhost:2205/delete/", key)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data not deleted")
                }
                else if (res.data.status === "success") {
                    alert("data deleted")
                }
            })
    }

    return (
        <>

            <div className="singleImage container-fluid">
                <div className="container text-center title">
                    <h3>Image Valuation</h3>
                </div>
                <div className='row  container-fluid'>
                    <div className='col-lg-4 singleimage '>
                        <img src={image} className='img-fluid imagesingle ' />
                    </div>
                    <div className="col-lg-2"></div>
                    <div className='col-lg-6 singlecard'>
                        <p className="fs-5"><span>Cement:</span> {cement} Bags</p>
                        <p className="fs-5" ><span>Brick:</span> {brick} counts</p>
                        <p className="fs-5"><span>Rod:</span> {rod} counts</p>
                        <p className="fs-5"><span>Sand:</span> {sand} units</p>
                        <p className="fs-5"><span>Babystone:</span> {babystone} units</p>
                        <p className="fs-5"><span>Msand:</span> {msand} units</p>
                        <p className="fs-5"><span>Psand:</span> {psand} units</p>
                        <p className="fs-5"><span>Price:</span> {price} INR</p>

                        <Link to={`/updateimage/${id}`} className="btn btn-dark">Update </Link>
                        <button className="btn bg-danger ms-2 text-white" onClick={() => { del(id) }}>Delete</button>
                        <Link to={`/`} className="btn btn-dark ms-2">Dashboard</Link>

                    </div>

                </div>
            </div>
        </>
    );
}

