import { Carousel } from 'bootstrap'
import React from 'react'
import './Home.css'
import Slider from '../Slider/Slider.js'

function Home() {
    return (
        <div className="home">
            <Slider />
            <div className="home__txt row">
                <div className="col-sm"></div>
                <div className="col-sm-10">
                    <h1 className="jumbotron">About MSIT</h1>
                    <p>MSIT (MS in IT or Master of Science in Information Technology) is a two year post graduate 
                        program in Computer Science started in 2001. MSIT is an innovative multi-university 
                        interdisciplinary post-graduate program. MSIT program is being offered by “Consortium of 
                        Institutions of Higher Learning” (CIHL), formed by the Universities. Under MOU with CMU, some 
                        Carnegie Mellon Researchers are providing guidance on the course content. MSIT is currently 
                        offered at International Institute of Information Technology (IIIT-H), Hyderabad, School of IT, 
                        Jawaharlal Nehru Technological University Hyderabad (JNTUH), College of Engineering, 
                        Jawaharlal Nehru Technological University Kakinada (JNTUK), College of Engineering, Jawaharlal 
                        Nehru Technological University Anantapur (JNTUA) and Sri Venkateswara University Tirupati (SVU).</p>
                    <br />
                    <p>MSIT has been designed to develop technically competent, highly productive, and self motivated 
                        professionals in tune with the demands of an ever changing market.The program aims to groom not 
                        only IT professionals, but also experts from other domains offering a unique and comprehensive 
                        program that exposes the learners to some of the finest universities both in India and abroad. 
                        At the end of their stint with MSIT, they will be armed as they are with new found confidence and 
                        vigor,step out into the world to further practice the skills they have learnt in this program</p>
                    <hr />
                    <br />
                    <h1 className="jumbotron">Learning by Doing</h1>
                    <p>The methodology of “Learning By Doing” is a unique one adopted by MSIT. It aims at giving hands-on 
                        experience which helps the students understand the practical implementation aspects and the concepts 
                        associated with it.</p>
                    <br/>
                    <p>MSIT’s “Learning by Doing” method involves learning in a project-centric way. This helps students 
                        to solve problems by applying concepts. Each course is broken into manageable modules each of which 
                        is offered as a project to be worked on. Students work in teams with a corporate-like environment. 
                        The students understand the concept while working on the project and submit the relevant tasks 
                        (deliverables) within the deadline specified by their mentors. The students get the required guidance 
                        and support at every level from the mentors who have a wide knowledge base which enhances the knowledge 
                        of the students. Each course is offered by a principal mentor and the student: mentor ratio at MSIT stands 
                        out to be 10:1 giving enough scope for the students to interact with their mentor whenever required. 
                        Personalized mentoring at MSIT aims at nurturing the students in every way. Students are given individual 
                        workstations with laptops and 24x7 internet facilities. Rich digital content with strong audio-visual support 
                        alongside constant mentoring provides them with the necessary platform, with lectures by eminent people also. 
                        Therefore, MSIT students gain hands-on experience from innovative learning solutions.</p>
                </div>
                <div className="col-sm"></div>
            </div>
            <br/><br/>
        </div>
    )
}

export default Home
