import './EasyPage.css'
import NavBarLogin from '../../Components/NavBarLogin/NavBarLogin';
import NavBar from '../../Components/NavBar/NavBar';
import { db } from '../../firebase-config';
import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';

function EasyPage() {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        getMembers();
    }, []);

    const getMembers = async () => {
        const querySnapshot = await getDocs(collection(db, "hack"));
        setMembers(querySnapshot.docs.map((doc) => ({
            ...doc.data()
        })));
    }

    return (
        <div>
            <div className='divpage'>
                <NavBar />

                <div className='header1'>
                    All User Details
                </div>

                <div className='header11'>
                    
                </div>

                <div className="col taaable">
                    <table class="table llt">
                        <thead className='tablehead'>
                            <tr>

                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Country</th>

                            </tr>
                        </thead>
                        <tbody className='tavv'>
                            {
                                members.map(hack => {
                                    return (
                                        <tr>

                                            <td>{hack.fname}</td>
                                            <td>{hack.lname}</td>
                                            <td>{hack.email}</td>
                                            <td>{hack.password}</td>
                                            <td>{hack.country}</td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className='trainhere'></div>

                {/* <footer className='footer11'>
                    <div className='footer22'>
                        &copy; 2022 Train Schedule App | Chamika Srimantha
                    </div>
                </footer> */}
            </div>
            <div className='ff1'>
                <p className='ff2'>&copy; 2023 Easy Health Care Pvt Ltd</p>
            </div>
        </div>
    );
}
export default EasyPage;