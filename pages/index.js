import styles from '../styles/Home.module.css'
import Link from 'next/link'
import  { Col , Container, Row, Card, Button, Image }  from 'react-bootstrap';
// import FormPage from './EstimateForm';
import Schedule from './posts/Schedule';


export default function Home() {
  return (
    <div>
     
      <div className={styles.container}  >
        <main className={styles.main}>
          <Button className={styles.bigbutton_a} variant="outline-info">tweeters</Button>
          <h1 className={styles.title}>THE SPECIALISTS</h1>
          <p className={styles.description}>Salt Lake County's Number #1 Choice for Kitchen Hood and Deep Cleaning!</p>

          <div >
            <Container>
              <Row>
                <Col>
                  <Card className={styles.card}>
                    <Card.Body >
                      <Card.Text>
                        Hood Cleaning &rarr; 
                      </Card.Text>
                      <Button variant="info" className={styles.cardbutton}>
                        <Link href="/posts/hood-cleaning">
                          <a style={{color: 'black'}}>Deep Chemical Cleaning of Kitchen Hood and Fans (Legal Update) Deep Chemical Cleaning of Kitchen Hood and Fans</a>
                        </Link>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  <Card className={styles.card}>
                    <Card.Body>
                        <Card.Text>
                          Kitchen Cleaning &rarr;
                        </Card.Text>
                        <Button  variant="info" >
                          <Link href="/posts/hood-cleaning">
                            <a style={{color: 'black'}}>Deep Chemical Cleaning of Kitchen Hood and Fans (Legal Update) Deep Chemical Cleaning of Kitchen Hood and Fans</a>
                          </Link>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>

          </main>
            <section >
                <Container className={styles.narrative} >
                <hr style={{ borderTop: '8px solid #bbb' , bordeRadius:' 125px', length:"400px", marginBottom:"15rem", borderColor: '#5c8a8a'}} className="rounded" />

                  <h1 className={styles.title_e}> We Are The Specialists!</h1>
                  <h2 className={styles.title_c}>
                    -Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation.
                    </h2>

                    <h2 className={styles.title_f} >Our Mission</h2>
                    <h3 className={styles.title_c}>
                      -Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation.
                      -Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation.
                      </h3>

                </Container>
            <hr style={{ borderTop: '8px solid #bbb' , bordeRadius:' 125px', length:"400px", marginTop:"9rem", borderColor: '#5c8a8a'}} className="rounded" />
              </section>  
              <h1 className={styles.title_e} >View Our Work</h1>
                <section style={{textAlign: 'center', marginTop: '31px'}}>
                <h1 className={styles.title_b} style={{textAlign: 'center', marginTop: '14px'}}>Chemical Cleaning</h1>
                  <Image style={{height: '56rem', width: '64rem'}} src="/my-image.png" alt="my image" roundedCircle className={styles.circleimage}/>
                  <h1 className={styles.title_b}>Deep Hood and Kitchen Cleaning</h1>
                  <Image style={{height: '56rem', width: '64rem'}} src="/mops.png" alt="my image" roundedCircle className={styles.circleimage}/>
                  <h1 className={styles.title_b}>Deep Hood and Kitchen Cleaning</h1>
                  <Image style={{height: '56rem', width: '64rem'}} src="/my-image.png" alt="my image" roundedCircle className={styles.circleimage} />
                </section>          
              <section>
    
                <Container style={{marginBottom: "65px"}}>
                <hr style={{ borderTop: '8px solid #bbb' , bordeRadius:' 125px', length:"400px", marginBottom:"156px", borderColor: '#5c8a8a'}} className="rounded" />
                <section style={{background: 'teal',}}>
                  <h1 className={styles.schedule} >
                    Schedule an Estimate
                  </h1>
                    <h2 style={{fontFamily: "Lucida Console, Monaco, monospace", color: '#cc6699', textShadow: '2px 2px black', textAlign: 'center'}}>Just give us a little contact inforamtion and choose an available date, and we would love to come take a look
                      and let you know how we can help you!
                    </h2>
                    <Schedule />
                  </section>
                </Container>
              </section>
            
              <footer className={styles.footer}>
              Sprig Diddy Web Designs LLC.
              </footer>
            </div>
          </div>
        )
      };
