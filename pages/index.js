import styles from '../styles/Home.module.css'
import Link from 'next/link'
import  { Navbar, Nav ,Col , Container, Row, Card, Button, Image, NavbarBrand }  from 'react-bootstrap';
import FormPage from './EstimateForm';


export default function Home() {
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" style={{ height: "55px",  border: '3px solid #cc6699'}}>
           <Nav className="mr-auto">
             <NavbarBrand style={{marginRight: "55px", textAlign: 'center', fontFamily: "Lucida Console, Monaco, monospace" }}>The Specialists</NavbarBrand>
             {/* <NavbarBrand><Link href="/"><a className="links" style={{fontFamily: "Lucida Console, Monaco, monospace"}}>View our Work</a></Link></NavbarBrand>
             <NavbarBrand><Link href="/services"><a style={{fontFamily: "Lucida Console, Monaco, monospace"}} className="links">Services we Offer</a></Link></NavbarBrand> */}
           </Nav>
       </Navbar>


    <div className={styles.container}  >
      <main className={styles.main}>
        <h1 className={styles.title} >
          THE SPECIALISTS
        </h1>
        <p className={styles.description}>
          Salt Lake County's Number #1 Choice for Kitchen Hood and Deep Cleaning!
        </p>

        <div >
          <Container>
            <Row>
              <Col>
                <Card className={styles.card}>
                  <Card.Body >
                    <Card.Title><a href="https://nextjs.org/learn" ></a></Card.Title>
                    <Card.Text>
                      <h3>Hood Cleaning &rarr;</h3>
                    </Card.Text>
                    <Button variant="info"><p className={styles.cardbutton}>Learn about Next.js in an interactive course with quizzes!</p></Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className={styles.card}>
                  <Card.Body>
                      <Card.Title> <a href="https://github.com/vercel/next.js/tree/master/examples"></a></Card.Title>
                      <Card.Text>
                        <h3>Kitchen Cleaning &rarr;</h3>
                      </Card.Text>
                      <Button  variant="info" ><p className={styles.cardbutton}>Discover and deploy boilerplate example Next.js projects.</p></Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className={styles.card}>
                  <Card.Body>
                    <Card.Title><a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"></a></Card.Title>
                      <Card.Text>
                        <h3>Power Washing &rarr;</h3>
                        </Card.Text>
                      <Button variant="info"><p className={styles.cardbutton}>Instantly deploy your Next.js site to a public URL with Vercel.</p></Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>

        </main>
          <section >
              <Container style={{marginBottom: "66px"}}>
              <hr style={{ borderTop: '8px solid #bbb;' , bordeRadius:' 125px;', length:"400px", marginBottom:"156px", borderColor: '#5c8a8a'}} class="rounded" />

                <h1 className={styles.title} style={{marginBottom: '26px', marginTop: '256px'}}>We Are The Specialists!</h1>
                <h2 style={{letterSpacing: '1.5px' , textShadow: '1px 1px pink', fontSize: '44px'}}>
                  -Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  </h2>
              </Container>
          </section>  

          <section style={{textAlign: 'center', marginTop: '81px'}}>
            <Image src="/my-image.png" alt="my image" roundedCircle className={styles.circleimage}/>
            <Image src="/my-image.png" alt="my image" roundedCircle className={styles.circleimage}/>
            <Image src="/my-image.png" alt="my image" roundedCircle className={styles.circleimage}/>
          </section>
          
          <section>
            <Container style={{marginBottom: "65px"}}>
            <hr style={{ borderTop: '8px solid #bbb;' , bordeRadius:' 125px;', length:"400px", marginBottom:"156px", borderColor: '#5c8a8a'}} class="rounded" />
              <h1 style={{fontFamily: "Lucida Console, Monaco, monospace", textShadow: '1px 2px pink'}}>
                Schedule an Estimate
              </h1>
              <h2 style={{fontFamily: "Lucida Console, Monaco, monospace", textShadow: '1px 2px pink'}}>Just give us a little contact inforamtion and choose an available date, and we would love to come take a look
                and let you know how we can help you!
              </h2>
              <FormPage />
            </Container>
          </section>
         
          <footer className={styles.footer}>
           Sprig Diddy Web Designs LLC.
          </footer>
        </div>
      </div>
    )
  };
