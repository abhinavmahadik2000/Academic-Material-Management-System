/*  Dilip Mahadik, Abhinav - 1002077234
    Misba, Asfiya - 1002028239
    Rajesh Neelam, Haswanth  - 1002063344
    Ponugupati, Maruthi Murali Krishna - 1002069076
    Vyas, Shalini - 1002087896 */
    import React from 'react';
import Chat from '../chat';
import HeaderStudent from './header_student';
import SideNavStudent from './sidenav_student';

    class StudentSyllabus extends React.Component {
        render() {
            return(
                <div>
                    <HeaderStudent/>
            <SideNavStudent/>
                    <section className="syllabus-container_std" >
    	<iframe src="https://oit-ead-canvas-syllabus.s3.amazonaws.com/uta.instructure.com/2023-FALL/155704-2238-CSE-5334-004/2023-FALL_2238-CSE-5334-004.pdf" title='Syllabus' className='area_std' width="100%"height="900px"></iframe>
    </section>
    <Chat/>
    </div>

            )
        }
    }
    export default StudentSyllabus;
