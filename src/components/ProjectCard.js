import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, Link }) => {
  return (
    <Col size={12} sm={6} md={4} className="w-full h-full">
      <div className="proj-imgbx h-48" >
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br></br>
          <a id="A" href={Link} target="_blank">Click here</a>
        </div>
      </div>
    </Col>
  )
}
