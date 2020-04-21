import React from "react"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import Date from "../components/date"

const NoticeBoard = () => (
  <>
    <h1>Notice.</h1>
    <hr></hr>
    <br></br>
    <div>
      <Alert variant="success">
        <Alert.Heading>
          List of admitted students in Ph.D coursework 2019.
        </Alert.Heading>
        <p>Ph.D. - 03.03.2020</p>
        <hr />
        <p className="mb-0">
          <Button
            variant="outline-dark"
            size="lg"
            block
            href="../documents/Admitted.Students.in.Ph.D.coursework.2019.pdf"
          >
            Download list
          </Button>
        </p>
      </Alert>
    </div>
    <hr></hr>

    <div>
      <Alert variant="info">
        <Alert.Heading>Students of IInd and IIIrd semester</Alert.Heading>
        <p>IInd Semester, IIIrd Semester - 17.07.2019</p>
        <hr />
        <p className="mb-0">
          Classes of 2nd semester and 3rd semester are going on. Students are
          requested to attend the classes to maintain atleast 75% attendance to
          appear in semester end examinations.
        </p>
      </Alert>
    </div>
    <hr></hr>

    <div>
      <Alert variant="info">
        <Alert.Heading>
          Assignment for CIA of semester IInd and IIIrd
        </Alert.Heading>
        <p>IInd Semester, IIIrd Semester - 16.07.2019</p>
        <hr />
        <p className="mb-0">
          Assignment for CIA of semester 2nd and 3rd are being distributed at
          the Student's Gallery. All students are requested to submit their
          assignment or project before the scheduled date as per the notice.
        </p>
      </Alert>
    </div>
    <hr></hr>
    <br />
    <Date />
  </>
)
export default NoticeBoard