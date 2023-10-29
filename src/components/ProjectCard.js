import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl , Link}) => {

  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };


  return (

    
    <Col size={12} sm={6} md={4}>
      <a href={Link} onClick={(e) => { e.preventDefault(); openLinkInNewTab(Link); }} style={{ textDecoration: 'none' }}>
      <div className="proj-imgbx">
          <img src={imgUrl} style={{ width: "400px", height: "280px" }} alt={title} />
        <div className="proj-txtx">
          <h4 style={{ textDecoration: 'none' }}>{title}</h4>
          <span style={{ textDecoration: 'none' }}>{description}</span>
        </div>
      </div>
        </a>
        
    </Col>
  );
}
