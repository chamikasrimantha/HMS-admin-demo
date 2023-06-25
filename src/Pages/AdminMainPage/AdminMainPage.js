import NavBar from '../../Components/NavBar/NavBar';
import NavBarLogin from '../../Components/NavBarLogin/NavBarLogin'
import './AdminMainPage.css'
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { db } from '../../firebase-config';
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';

function AdminMainPage() {


    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [members, setMembers] = useState([]);

    useEffect(() => {
        getMembers();
    }, []);



    const addMember = async () => {

        const docRef = await addDoc(collection(db, "easy"), {
            name: name,
            time: time,
        }).then(() => {
            alert("Route added successfully !");
            clearTexts();

        }).catch(() => {
            alert("Route not added !")
        });
    }

    const clearTexts = () => {
        setName('');
        setTime('');
    }

    const deleteMember = async () => {
        await deleteDoc(doc(db, "easy", "y5lzypVmedGNHoi771hS"))
            .then(() => {
                alert("Route Deleted !")
            }).catch(() => {
                alert("Delete Failed !")
            });
    }

    const updateMember = async () => {
        await updateDoc(doc(db, "easy", "BJ7bk5gZGisdC6DXF6Tl"), {
            name: "xx",
            time: "xx",
        })
            .then(() => {
                alert("Update succesfully !")
            }).catch(() => {
                alert("Update Failed !")
            });
    }

    // const updateMember = async () => {

    //     const docRef = await updateDoc(collection(db, "easy" , "BJ7bk5gZGisdC6DXF6Tl"), {
    //         route: route,
    //         time: time,
    //     }).then(() => {
    //         alert("Route added successfully !");
    //         clearTexts();

    //     }).catch(() => {
    //         alert("Route not added !")
    //     });
    // }


    const getMembers = async () => {
        const querySnapshot = await getDocs(collection(db, "easy"));
        setMembers(querySnapshot.docs.map((doc) => ({
            ...doc.data()
        })));
    }





    return (

        <div className="d">
            <NavBar />

            <div class="d1">

                <div class="d2">
                    <div class="d3">
                        <div class="i4">
                            <div class="i5">Dr. Name</div>
                            <input class="i6" value={name} onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div class="i4">
                            <div class="i5">Time</div>
                            <input class="i6" value={time} onChange={(e) => { setTime(e.target.value) }} />
                        </div>
                        <div class="i9">
                            <button class="i11" onClick={addMember}>Add </button>
                            <button class="i12" onClick={deleteMember}>Delete </button>
                            <button class="i13" onClick={updateMember}>Update </button>
                        </div>
                    </div>

                </div>

            </div>

            <div className="hehehe">

                <div className="col taaable">
                    <table class="table llt">
                        <thead className="tablehead">
                            <tr>

                                <th scope="col">Dr. Name</th>
                                <th scope="col">Time</th>

                            </tr>
                        </thead>
                        <tbody className="tablebody">
                            {
                                members.map(easy => {
                                    return (
                                        <tr>

                                            <td>{easy.name}</td>
                                            <td>{easy.time}</td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                {/* <footer className='ff1'>
                    <p className='ff2'>&copy; 2023 Easy Health Care Pvt Ltd</p>
                </footer> */}
            </div>
            <footer className='ff1'>
                <p className='ff2'>&copy; 2023 Easy Health Care Pvt Ltd</p>
            </footer>

        </div>

    );
}

export default AdminMainPage;