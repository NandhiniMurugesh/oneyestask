import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Dashboard() {
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        fetch("http://localhost:2205/imagedisplay")
            .then(data => data.json())
            .then(getdata => setDetail(getdata))
    }
    )

    return (
        <>
            <div className="imageReview container-fluid">
                <div className="container text-center title">
                    <h2>Welcome  to the Plan Estimation AI 👋🤖
 !</h2>
                    <h4>Upload the Plan of your Dream House and get the Estimation in seconds...</h4>
                
                    <Link to={`/addimage`} className="btn btn-dark">ADD IMAGE</Link>

                </div>
               
                <div className="row">
                    {
                        detail.map((value, index) =>

                            <>
                                <div className="col-lg-4 col-md-6 col-sm-12 d-flex mt-2">
                                    <div className="card  carditems">
                                        <img src={value.image} className="cardimg" />
                                        <div className="card-body">
                                            <Link to={`/singleimage/${value.id}`} className="btn viewmore btn-dark">Estimation</Link>

                                        </div>
                                    </div>
                                </div>
                            </>

                        )}
                </div>
            </div>
        </>
    );
}
