import React, { Component, useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

// class BusList extends Component {
//     constructor() {
//         super();
//         this.state = {
//             buslist: [],
//             msg: ''
//         }
//     }

//     async componentDidMount() {
//         const { source, destination } = this.props.match.params;
//         const url = `http://localhost:8081/list/${source}/${destination}`;
//         // fetch(url) // API --- async
//         //     .then(response => response.json()) // .then ----> promise
//         //     .then(data => {

//         //         this.setState({
//         //             buslist: data
//         //         })
//         //     })

//         // axios.get(url) // ES5
//         //     .then(resp => {
//         //         console.log({ resp })
//         //         this.setState({
//         //             buslist: resp.data
//         //         })
//         //     })

//         const resp = await axios.get(url) // ES6
//         this.setState({
//             buslist: resp.data
//         })

//     }

//     handleBook = async (busdata) => {
//         // axios.post('http://localhost:8081/book', { body: busdata })
//         //     .then(resp => {
//         //         console.log({ resp })

//         //         if (resp.status === 200) {
//         //             this.setState({
//         //                 msg: resp.data.msg
//         //             })
//         //         } else {
//         //             this.setState({
//         //                 msg: 'Something went wrong! Please try sometime'
//         //             })
//         //         }
//         //         // this.setState({
//         //         //     msg: data.msg
//         //         // })
//         //     })

//         const resp = await axios.post('http://localhost:8081/book', { body: busdata })
//         if (resp.status === 200) {
//             this.setState({
//                 msg: resp.data.msg

//             })
//         } else {
//             this.setState({
//                 msg: 'Something went wrong! Please try sometime'
//             })
//         }

//     }




//     render() {
//         const { source, destination } = this.props.match.params;
//         const { buslist, msg } = this.state;
//         return (
//             <div className="container list my-4">
//                 <p>Availabe Buses From <b>{source}</b> to <b>{destination}</b></p>
//                 <p className="text-success font-weight-bold">{msg}</p>
//                 {buslist.map(bus => (
//                     <div className="list-item p-4 m-2">
//                         <b>{bus.type}</b>
//                         <div className="d-flex justify-content-between">
//                             <div>
//                                 <span> Time: {bus.time}</span>
//                                 {/* <span>
//                                     <i class="fab fa-google-pay"></i>
//                                 </span> */}
//                                 <h6 className="mt-2">Price: ₹{bus.price}</h6>
//                             </div>
//                             <button
//                                 type="button"
//                                 className="btn btn-danger h-50"
//                                 onClick={() => this.handleBook(bus)}
//                             >
//                                 Book Ticket
//                             </button>
//                         </div>

//                     </div>
//                 ))}
//             </div>
//         )
//     }
// }

const BusList = (props) => {

    const [buslist, setBuslist] = useState([]);
    const [msg, setMsg] = useState('');
    const [show, setModal] = useState(false)
    const { source, destination } = useParams();

    useEffect(async () => {
        const url = `http://localhost:8081/list/${source}/${destination}`;
        const resp = await axios.get(url) // ES6
        setBuslist(resp.data)
        console.log('componentDidMount')
    }, []) // componentDidMount

    useEffect(() => {
        return () => {
            console.log('componentwillUnmount')
        }
    }, []) // componentWillUnmount


    const handleBook = async (busdata) => {
        setModal(true)
        const resp = await axios.post('http://localhost:8081/book', { body: busdata })
        if (resp.status === 200) {
            setMsg(resp.data.msg);
        } else {
            setMsg('Something went wrong! Please try sometime');
        }
    }

    const handleClose = () => {
        setModal(false)
    }

    return (
        <>
            <div className="container list my-4">
                <p>Availabe Buses From <b>{source}</b> to <b>{destination}</b></p>
                <p className="text-success font-weight-bold">{msg}</p>
                {buslist.map(bus => (
                    <div className="list-item p-4 m-2">
                        <b>{bus.type}</b>
                        <div className="d-flex justify-content-between">
                            <div>
                                <span> Time: {bus.time}</span>
                                {/* <span>
                                    <i class="fab fa-google-pay"></i>
                                </span> */}
                                <h6 className="mt-2">Price: ₹{bus.price}</h6>
                            </div>
                            <button
                                type="button"
                                className="btn btn-danger h-50"
                                onClick={() => handleBook(bus)}
                            >
                                Book Ticket
                            </button>
                        </div>

                    </div>
                ))}
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Booking Message !</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure want to Book the ticket ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BusList
