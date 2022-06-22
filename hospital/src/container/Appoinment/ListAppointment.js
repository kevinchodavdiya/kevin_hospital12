import React from 'react';
import { NavLink } from 'react-router-dom';

function ListAppointment(props) {
    return (
        <main>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>List Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>

                    <div className='row text-center py-3'>
                        <div className='col-6'>
                            <NavLink activeClassName='aptNav' to={"/appointment"}>Make An Appointment</NavLink>
                        </div>
                        <div className='col-6'>
                            <NavLink activeClassName='aptNav' to={"/listappointment"}>List Appointment</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ListAppointment;