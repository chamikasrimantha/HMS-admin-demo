import './AppoPage.css'
import NavBar from '../../Components/NavBar/NavBar';
import { db } from '../../firebase-config';
import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';

function AppoPage() {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        getMembers();
    }, []);

    const getMembers = async () => {
        const querySnapshot = await getDocs(collection(db, "appointment"));
        setMembers(querySnapshot.docs.map((doc) => ({
            ...doc.data()
        })));
    }

    return (
        <div>
            <div className='divpage'>
                <NavBar />

                <div className='header1'>
                    All Appointments
                </div>

                {/* <div className='header11'>

                </div> */}

                <div className="col taaable">
                    <table class="table llt">
                        <thead className='tablehead'>
                            <tr>

                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Date</th>
                                <th scope="col">Department Name</th>
                                <th scope="col">Doc Name</th>
                                <th scope="col">Message</th>

                            </tr>
                        </thead>
                        <tbody className='tavv'>
                            {
                                members.map(appointment => {
                                    return (
                                        <tr>

                                            <td>{appointment.name}</td>
                                            <td>{appointment.phone}</td>
                                            <td>{appointment.email}</td>
                                            <td>{appointment.date}</td>
                                            <td>{appointment.dname}</td>
                                            <td>{appointment.docname}</td>
                                            <td>{appointment.message}</td>

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

export default AppoPage;