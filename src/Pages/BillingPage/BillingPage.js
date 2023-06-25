import './BillingPage.css'
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from '../../firebase-config';
import NavBar from '../../Components/NavBar/NavBar';
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';


function BillingPage() {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [pname, setPname] = useState('');
    const [paddress, setPaddress] = useState('');
    const [pemailaddress, setEmailaddress] = useState('');
    const [pno, setPno] = useState('');
    const [pmethod, setPmethod] = useState('');
    const [members, setMembers] = useState([]);
    useEffect(() => {
        getMembers();
    }, []);

    const addMember = async () => {

        const docRef = await addDoc(collection(db, "billing"), {
            name: name,
            type: type,
            pname: pname,
            paddress: paddress,
            pemailaddress: pemailaddress,
            pno: pno,
            pmethod: pmethod,    
        }).then(() => {
            alert("Route added successfully !");
            clearTexts();

        }).catch(() => {
            alert("Route not added !")
        });
    }

    const clearTexts = () => {
        setName('');
    }

    const deleteMember = async () => {
        await deleteDoc(doc(db, "billing", "y5lzypVmedGNHoi771hS"))
            .then(() => {
                alert("Route Deleted !")
            }).catch(() => {
                alert("Delete Failed !")
            });
    }

    const updateMember = async () => {
        await updateDoc(doc(db, "billing", "BJ7bk5gZGisdC6DXF6Tl"), {
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
        const querySnapshot = await getDocs(collection(db, "billing"));
        setMembers(querySnapshot.docs.map((doc) => ({
            ...doc.data()
        })));
    }


    return (
        <div>
            <div className="ddd">
                <NavBar />

                <div class="ddd1">

                    <div class="ddd2">
                        <div class="ddd3">
                            <div class="iii4">
                                <div class="iii5">Patient Name</div>
                                <input class="iii6" value={name} onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div class="iii4">
                                <div class="iii5">Patient Type</div>
                                <input class="iii6" value={type} onChange={(e) => { setType(e.target.value) }} />
                            </div>
                            <div class="iii4">
                                <div class="iii5">Payer Name</div>
                                <input class="iii6" value={pname} onChange={(e) => { setPname(e.target.value) }} />
                            </div>
                            <div class="iii4">
                                <div class="iii5">Payer Address</div>
                                <input class="iii6" value={paddress} onChange={(e) => { setPaddress(e.target.value) }} />
                            </div>
                            <div class="iii4">
                                <div class="iii5">Payer's Email Address</div>
                                <input class="iii6" value={pemailaddress} onChange={(e) => { setEmailaddress(e.target.value) }} />
                            </div>
                            <div class="iii4">
                                <div class="iii5">Payer's Contact No</div>
                                <input class="iii6" value={pno} onChange={(e) => { setPno(e.target.value) }} />
                            </div>
                            <div class="iii4">
                                <div class="iii5">Payment Method</div>
                                <input class="iii6" value={pmethod} onChange={(e) => { setPmethod(e.target.value) }} />
                            </div>
                            <div class="iii9">
                                <button class="iii11" onClick={addMember}>Add </button>
                                <button class="iii12" onClick={deleteMember}>Delete </button>
                                <button class="iii13" onClick={updateMember}>Update </button>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="hehehe">

                    <div className="col taaable">
                        <table class="table llt">
                            <thead className="tablehead">
                                <tr>

                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Payer Name</th>
                                    <th scope="col">Payer Address</th>
                                    <th scope="col">Payer Email Address</th>
                                    <th scope="col">Payer Contact nO</th>
                                    <th scope="col">Payer Method</th>

                                </tr>
                            </thead>
                            <tbody className="tablebody">
                                {
                                    members.map(billing => {
                                        return (
                                            <tr>

                                                <td>{billing.name}</td>
                                                <td>{billing.type}</td>
                                                <td>{billing.pname}</td>
                                                <td>{billing.paddress}</td>
                                                <td>{billing.pemailaddress}</td>
                                                <td>{billing.pno}</td>
                                                <td>{billing.pmethod}</td>

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
                <footer className='fff1'>
                    <p className='fff2'>&copy; 2023 Easy Health Care Pvt Ltd</p>
                </footer>

            </div>
        </div>
    );
}
export default BillingPage;