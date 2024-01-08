// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// export function Update(){
//     var {id} = useParams()
//     const[image,setImage]=useState('')
//     const[brick,setBrick]=useState('')
//     const[cement,setCement]=useState('')
//     const[rod,setRod]=useState('')
//     const[sand,setSand]=useState('')
//     const[babystone,setBabystone]=useState('')
//     const[msand,setMsand]=useState('')
//     const[psand,setPsand]=useState('')
//     const[price,setPrice]=useState('')

//     useEffect(()=>{
//         fetch("http://localhost:2205/singleimage/"+id)
//         .then(detail=>detail.json())
//         .then((singleimage)=>{
//             setImage(singleimage[0].image)
//             setBrick(singleimage[0].brick)
//             setCement(singleimage[0].cement)
//             setRod(singleimage[0].rod)
//             setSand(singleimage[0].sand)
//             setBabystone(singleimage[0].babystone)
//             setMsand(singleimage[0].msand)
//             setPsand(singleimage[0].psand)
//             setPrice(singleimage[0].price)


//         }
//     )
//     },[])
//     function update(event){
//         event.preventDefault()
//         var image = document.getElementById("image").value;
//         var brick = document.getElementById("brick").value;
//         var cement = document.getElementById("cement").value;
//         var rod = document.getElementById("rod").value;
//         var sand = document.getElementById("sand").value;
//         var babystone = document.getElementById("babystone").value;
//         var msand = document.getElementById("msand").value;
//         var psand = document.getElementById("psand").value;
//         var price = document.getElementById("price").value;


//         var key = {
//             image:image,
//             brick:brick,
//             cement:cement,
//             rod:rod,
//             sand:sand,
//             babystone:babystone,
//             msand:msand,
//             psand:psand,
//             price:price,



//          }
//          if (image == "") {
//             alert("Enter the Image Url")
//         }

//         else if (brick == "") {
//             alert("Enter the Brick Count ")

//         }
//         else if (cement == "") {
//             alert("Enter the Cement count")

//         }
//         else if (rod == "") {
//             alert("Enter the Rod Count ")

//         }
//         else if (sand == "") {
//             alert("Enter the Sand count")

//         }
//         else if (babystone == "") {
//             alert("Enter the Babystone Count ")

//         }
//         else if (msand == "") {
//             alert("Enter the Msand count")

//         }
//         else if (psand == "") {
//             alert("Enter the Psand Count ")

//         }

//         else if (price == "") {
//             alert("Enter the Price ")

//         }



//         else{
//             axios.put("http://localhost:2205/updateimage/"+id,key)
//             .then((upddet)=>{
//                 if(upddet.data.status==='not_updated'){
//                     alert("data not updated")
//                     console.log("not_updated")
//                     console.log(key)

//                 }
//                 else if (upddet.data.status==='success'){
//                     alert("data updated Successfully!")
//                     console.log("success")
//                     window.location.href=`/singleimage/${id}`
//                 }

//             })
//         }
//     }
//     return (
//         <>
//              <div className="updateImage container-fluid ">
//         <div className="container text-center title">
//             <h3>Image Valuation</h3>

//             </div>
//             <div className="addbook container text-center w-75 p-5 ">
//                     <form  onSubmit={update}>  

//                     <input type="text" placeholder="image url" onChange={(upd)=>setImage(upd.target.value)}  id="image" value={image}  /><br/>

//                         <input type="text" placeholder="brick" onChange={(upd)=>setBrick(upd.target.value)}  id="brick" value={brick} /><br/>

//                        <input type="text" placeholder="cement" onChange={(upd)=>setCement(upd.target.value)}  id="cement" value={cement} /><br/>

//                         <input type="text"placeholder="rod" onChange={(upd)=>setRod(upd.target.value)} id="rod" value={rod}/>

//                         <input type="text" placeholder="sand" onChange={(upd)=>setSand(upd.target.value)}  id="sand" value={sand}  /><br/>

//                         <input type="text" placeholder="babystone" onChange={(upd)=>setBabystone(upd.target.value)}  id="babystone" value={babystone} /><br/>
//                         <input type="text" placeholder="msand" onChange={(upd)=>setMsand(upd.target.value)}  id="msand" value={msand}  /><br/>
//                         <input type="text" placeholder="psand" onChange={(upd)=>setPsand(upd.target.value)}  id="psand" value={psand}  /><br/>

//                         <input type="text" placeholder="price" onChange={(upd)=>setPrice(upd.target.value)} id="price" value={price} /><br/>


//                        <input type="submit" className="bg-secondary p-2" value="Update"
//                        />
//                                             </form>

//                                             </div>                    
//             </div>
//         </>
//     );
// }


import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Update() {
    var { id } = useParams();
    const [image, setImage] = useState("");
    const [brick, setBrick] = useState("");
    const [cement, setCement] = useState("");
    const [rod, setRod] = useState("");
    const [sand, setSand] = useState("");
    const [babystone, setBabystone] = useState("");
    const [msand, setMsand] = useState("");
    const [psand, setPsand] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        fetch("http://localhost:2205/singleimage/" + id)
            .then((detail) => detail.json())
            .then((singleimage) => {
                setImage(singleimage[0].image);
                setBrick(singleimage[0].brick);
                setCement(singleimage[0].cement);
                setRod(singleimage[0].rod);
                setSand(singleimage[0].sand);
                setBabystone(singleimage[0].babystone);
                setMsand(singleimage[0].msand);
                setPsand(singleimage[0].psand);
                setPrice(singleimage[0].price);
            });
    }, []);

    function update(event) {
        event.preventDefault();
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
        };

        if (image === "") {
            alert("Enter the Image Url");
        } else if (brick === "") {
            alert("Enter the Brick Count");
        } else if (cement === "") {
            alert("Enter the Cement count");
        } else if (rod === "") {
            alert("Enter the Rod Count");
        } else if (sand === "") {
            alert("Enter the Sand count");
        } else if (babystone === "") {
            alert("Enter the Babystone Count");
        } else if (msand === "") {
            alert("Enter the Msand count");
        } else if (psand === "") {
            alert("Enter the Psand Count");
        } else if (price === "") {
            alert("Enter the Price");
        } else {
            axios
                .put("http://localhost:2205/updateimage/" + id, key)
                .then((upddet) => {
                    if (upddet.data.status === "not_updated") {
                        alert("data not updated");
                        console.log("not_updated");
                        console.log(key);
                    } else if (upddet.data.status === "success") {
                        alert("data updated Successfully!");
                        console.log("success");
                        window.location.href = `/singleimage/${id}`;
                    }
                });
        }
    }

    return (
        <>
            <div className="updateImage container-fluid">
                <div className="container text-center title">
                    <h3>Image Valuation</h3>
                </div>
                <div className="container text-center w-75 p-5">
                    <form onSubmit={update}>
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Image URL"
                            onChange={(upd) => setImage(upd.target.value)}
                            id="image"
                            value={image}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Brick"
                            onChange={(upd) => setBrick(upd.target.value)}
                            id="brick"
                            value={brick}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Cement"
                            onChange={(upd) => setCement(upd.target.value)}
                            id="cement"
                            value={cement}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Rod"
                            onChange={(upd) => setRod(upd.target.value)}
                            id="rod"
                            value={rod}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Sand"
                            onChange={(upd) => setSand(upd.target.value)}
                            id="sand"
                            value={sand}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Babystone"
                            onChange={(upd) => setBabystone(upd.target.value)}
                            id="babystone"
                            value={babystone}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Msand"
                            onChange={(upd) => setMsand(upd.target.value)}
                            id="msand"
                            value={msand}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Psand"
                            onChange={(upd) => setPsand(upd.target.value)}
                            id="psand"
                            value={psand}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Price"
                            onChange={(upd) => setPrice(upd.target.value)}
                            id="price"
                            value={price}
                        />
                        <input
                            type="submit"
                            className="btn btn-secondary btn-lg bg-success"
                            value="Update"
                        />

                    <Link to={`/singleimage/${id}`} className="btn btn-lg m-3 btn-dark">Back</Link>

                    </form>
                </div>
            </div>
        </>
    );
}
