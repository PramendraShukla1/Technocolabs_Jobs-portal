import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const servicesData = [
  {
    id: 1,
    image: '/',
    title: 'G Technicals Solutions',
    position : 'Web designer, Web developers',
    address : '2767 Concord Street, Charlotte, NC',
  },
  {
    id: 2,
    image: '/',
    title: 'Pro Meet PVT Limited',
    position : 'Java designer, php developers',
    address : '2767 Concord Street, Charlotte, NC',
  },
  {
    id: 3,
    image: '/',
    title: 'InfraTech PVT LTD',
    position : 'Angular developers',
    address : '2767 Concord Street, Charlotte, NC',
  },
  {
    id: 4,
    image: '/',
    title: 'Bahriger and Wyman',
    position : 'Web designer, Ui Designers',
    address : '2767 Concord Street, Charlotte, NC',
  },
  {
    id: 5,
    image: '/',
    title: 'Hardware Solutions',
    position : 'Web designer, php developers',
    address : '	2767 Concord Street, Charlotte, NC',
  },
  {
    id: 6,
    image: '/',
    title: 'Flowtech Solutions',
    position : 'Web designer, Web developers',
    address : '2767 Concord Street, Charlotte, NC',
  }
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
       
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} key={services.id}>
          <Card>
            <Card.Img variant="top" src={services.image} />
            <Card.Body>
              <Card.Title>{services.title}</Card.Title>
              <Card.Text>
                {services.description}
              </Card.Text>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Position :{services.position}</ListGroup.Item>
        <ListGroup.Item>Address :{services.address}</ListGroup.Item>
      </ListGroup>
      
      <Button variant="outline-dark" size="sm">Apply Now</Button>
            </Card.Body>
          </Card>
        </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;