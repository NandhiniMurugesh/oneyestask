
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Addimage() {
    var { id } = useParams()
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
        fetch("http://localhost:2205/addimage/" + id)
            .then(res => res.json())
            .then((data) => {
                setImage(data[0].image)
                setBrick(data[0].brick)
                setCement(data[0].cement)
                setRod(data[0].rod)
                setSand(data[0].sand)
                setBabystone(data[0].babystone)
                setMsand(data[0].msand)
                setPsand(data[0].psand)
                setPrice(data[0].price)



            })
    }, [])
    function addimage(event) {
        event.preventDefault()
        var image = document.getElementById("image").value;
        var brick = document.getElementById("brick").value;
        var cement = document.getElementById("cement").value;
        var rod = document.getElementById("rod").value;
        var sand = document.getElementById("sand").value;
        var babystone = document.getElementById("babystone").value;
        var msand = document.getElementById("msand").value;
        var psand = document.getElementById("psand").value;
        var price = document.getElementById("price").value;





        var key = {
            image: image,
            brick: brick,
            cement: cement,
            rod: rod,
            sand: sand,
            babystone: babystone,
            msand: msand,
            psand: psand,
            price: price,



        }
        if (image == "") {
            alert("Enter the Image Url")
        }

        else if (brick == "") {
            alert("Enter the Brick Count ")

        }
        else if (cement == "") {
            alert("Enter the Cement count")

        }
        else if (rod == "") {
            alert("Enter the Rod Count ")

        }
        else if (sand == "") {
            alert("Enter the Sand count")

        }
        else if (babystone == "") {
            alert("Enter the Babystone Count ")

        }
        else if (msand == "") {
            alert("Enter the Msand count")

        }
        else if (psand == "") {
            alert("Enter the Psand Count ")

        }

        else if (price == "") {
            alert("Enter the Price ")

        }


        else {
            axios.post("http://localhost:2205/addimage/", key)
                .then((addimage) => {
                    if (addimage.data.status === 'error') {
                        alert("image not added")
                        console.log("not_added")

                    }
                    else if (addimage.data.status === 'success') {
                        alert("Image details added Successfully!")
                        console.log("success")
                        window.location.href = `/`


                    }

                })
        }
    }
    return (
        <>
            <div className="addimagepage">
                <div className="addimage container text-center w-75 p-5">
                    <form onSubmit={addimage} className="needs-validation">
                        <h1 className="mb-4">Add Image & Details</h1>

                        <div className="mb-3">
                            <label htmlFor="Image" className="form-label">
                                Enter the Image
                            </label>
                            <input type="text" className="form-control" id="image" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="brick" className="form-label">
                                Brick
                            </label>
                            <input type="text" className="form-control" id="brick" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="cement" className="form-label">
                                Cement
                            </label>
                            <input type="text" className="form-control" id="cement" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rod" className="form-label">
                                Rod
                            </label>
                            <input type="text" className="form-control" id="rod" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="sand" className="form-label">
                                Sand
                            </label>
                            <input type="text" className="form-control" id="sand" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="babystone" className="form-label">
                                Babystone
                            </label>
                            <input type="text" className="form-control" id="babystone" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="msand" className="form-label">
                                Msand
                            </label>
                            <input type="text" className="form-control" id="msand" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="psand" className="form-label">
                                Psand
                            </label>
                            <input type="text" className="form-control" id="psand" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">
                                Price
                            </label>
                            <input type="text" className="form-control" id="price" required />
                        </div>



                        <button type="submit" className="btn btn-primary btn-lg">
                            ADD 
                        </button>
                        <Link to={`/`} className="btn btn-lg btn-dark ms-2">Back</Link>

                    </form>
                </div>
            </div>
        </>
    );
}

