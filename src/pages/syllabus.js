import React from 'react'
import Link from 'gatsby-link'

const SyllabusPage = () => (
  <div>
    <h1>Syllabus</h1>

    <h2>Teaching staff</h2>
    
    <h3>Instructor</h3>
    <p>
        Caius Brindescu<br />
        Office hours: TBA<br />
        Contact: <a href="mailto:brindesc@oregonstate.edu">brindesc@oregonstate.edu</a>
    </p>

    <h3>Teaching assistants</h3>
    <p>
        TBA
    </p>

    <h2>Topics Covered</h2>
    <p>Introduction to Software Engineering, Software Development Processes, Requirements Elicitation, Software Design and Architecture, Configuration Management and Project Management, Software Specifications and Testing, Ethics in Software Development</p>

    <h2>Course Objectives</h2>
    <p>At the completion of this course, students will be able to:</p>
    <ul>
        <li>Select the most appropriate software process model to use in a particular situation.</li>
        <li>Synthesize requirements for a realistic software system and write a requirements specification document.</li>
        <li>Model system requirements using one or more semi-formal notations such as UML, dataflow diagrams, entity-relationship diagrams, or state diagrams.</li>
        <li>Design software systems at an architectural level and at lower levels, using one or more techniques, such as object-oriented design or agile methods, and express these designs in design specification documents.</li>
        <li>Validate designs and adjust the specification or design as necessary.</li>
        <li>Describe several methods of estimating the cost and developing a schedule for a programming project.</li>
        <li>Participate effectively in a team environment.</li>
        <li>Produce professional-quality software-related documents.</li>
        <li>Develop and articulate content knowledge and critical thinking in the discipline through frequent practice of informal and formal writing.</li>
        <li>Demonstrate knowledge/understanding of audience expectations, genres, and conventions appropriate to communicating in the discipline.</li>
    </ul>

    <h2>Class expectations</h2>
    <ul>
        <li>There will be two 120 minute classes per week. In addition, you should expect to spend 6 additional hours per week on reading, study, and projects.</li>
        <li>You are required to bring your clickers to class, as we will use them for grading participation points as well as quizzes.</li>
        <li>We will use Canvas to discuss questions/problems. Email only when you have personal or grade related questions. If you email questions about the assignments, we will not answer them.</li>
        <li>You are expected to regularly check your email and Canvas announcements so not to miss important announcements.</li>
        <li>You are expected to be prepared for class, participate in discussions, and ask and answer questions.</li>
        <li>We will cover some material in class that is not covered in the text; your assignments and test questions may be based on that material. In particular, many of the details necessary to complete assignments will be presented in class. Thus, it is to your benefit to attend class. Because late arrivals are distracting, we also ask that you arrive to class on time.</li>
    </ul>

    <h2>Grading</h2>

    <table>
        <thead></thead>
        <tbody>
            <tr>
                <td>Project</td>
                <td>60%</td>
                <td>Teams (~4 students per group) will implement a software project throughout the term. There will be 4
                    stages submitted by the teams throughout the term.</td>
            </tr>
            <tr>
                <td>Quizzes</td>
                <td>10%</td>
                <td>Each week (starting with week 2) will have one quiz. All quizzes are worth equal points.</td>
            </tr>
            <tr>
                <td>Class participation	</td>
                <td>10%</td>
                <td>During the class, we will ask participation questions. We will also have several in-class interviews of
                    people in different sectors of th e software industry throughout the term; you will be expected to
                    submit at least one question for them prior to the interview.</td>
            </tr>
            <tr>
                <td>Exam</td>
                <td>20%</td>
                <td>A comprehensive final exam will be given on TBD.</td>
            </tr>
        </tbody>
    </table>

    <h2>Final Letter Grading Scheme</h2>
    <p>The final letter grades will be assigned using the scheme below:</p>

    <table>
        <tr><td></td><td>A: 93-100%</td><td>A-: 90-92%</td></tr>
        <tr><td>B+: 87-89%</td><td>B: 83:86%</td><td>B-: 80-82%</td></tr>
        <tr><td>C+: 77-79%</td><td>C: 73-76%</td><td>C-: 70-72%</td></tr>
        <tr><td>D+: 67-69%</td><td>D: 63-66%</td><td>D-: 60-62%</td></tr>
        <tr><td></td><td>F: 0-59%</td><td></td></tr>
    </table>

    <p>Final scores will be rounded the nearest integer.</p>

    <h2>Late Assignment Policy</h2>
    <p>
        Each group will be allowed 2 late days on the Project assignments only. These days can be used separately or in a single block. All group members must agree to use the late days and notify the professor/TAs prior to the original due date. The late days are atomic (you cannot split them further).
    </p>

    <h2>Gadget Policy</h2>
    <p>
        No cell phones, iPods, or similar mobile device usage is allowed in class. You may use laptops to take notes, but will have additional responsibilities to participate in class discussions. Failure to follow this policy will result in penalties.
    </p>

    <h2>Establishing a positive community</h2>
    <p>
      Every student should feel safe and welcome to contribute in this course. As the instructor, I will try to establish this tone whenever possible, but ultimately the responsibility for cultivating a safe and welcoming community belongs to the students —- that means you! <Link to="/positive-community">This page</Link> talks more about this very important part of our education process.
    </p>

    <h2>Academic Misconduct</h2>
    <p style={{fontStyle: "italic"}}>
        In this class you must abide by <a href="https://studentlife.oregonstate.edu/sites/studentlife.oregonstate.edu/files/final_code_of_student_conduct_updated_1_25_18.pdf">OSU's Student Conduct Code.</a>
    </p>

    <p>
        Reuse and building upon ideas or code are major parts of modern software development. As a professional programmer you will never write anything from scratch. This class is structured such that all solutions are public. You are encouraged to learn from the work of your peers. In principle, we won't hunt down people who are simply copying-and-pasting solutions, because without challenging themselves, they are simply wasting their time and money taking this class. However, gross violations will be reported to the department and the Office of Student Conduct, and my result in an F grade for the class. Please respect the terms of use and/or license of any code you find, and if you re-implement or duplicate an algorithm or code from elsewhere, credit the original source with an inline comment.
    </p>

    <h2>Students with disabiliies</h2>
    <p>
        Accommodations are collaborative efforts between students, faculty and Disability Access Services (DAS). Students with accommodations approved through DAS are responsible for contacting the faculty member in charge of the course prior to or during the first week of the term to discuss accommodations. Students who believe they are eligible for accommodations but who have not yet obtained approval through DAS should contact DAS immediately at (541) 737-4098. Students with documented disabilities who may need accommodations, who have any emergency medical information the instructor should be aware of, or who need special arrangements in the event of evacuation, should make an appointment with the instructor as early as possible, and no later than the first week of the term.
    </p>

  </div>
)

export default SyllabusPage
