// code for products details page in e commerce website
import { Box, Button, FormHelperText, makeStyles } from "@material-ui/core";
import { Carousel } from "react-bootstrap";
import "./style.css";
//to handle css makeStyles component is used
const useStyles = makeStyles({
    leftbutton: {
        background: '#ff9f00',
        color: '#ffffff',
        margin: 10,
        width: '40%',
        padding: '50',
    },
    rightbutton: {
        background: '#fb641b',
        color: '#ffffff',
        marginleft: 50,
        width: '40%'
    },
    image: {
        width: '50%',
    }
})
const Product = () => {
    const classes = useStyles();
    return (
        <Box>
            {/* <div>{product.productDetails.name}</div> */}
            <div className="productDescriptionContainer">
                <div className="flexRow">
                    <div className="productDescContainer">
                        <div className="productDescImgContainer">
                            <Carousel fade>
                                <Carousel.Item>
                                    <img
                                        className={classes.image}
                                        src="https://th.bing.com/th/id/R.456cd7d0abd66d2553f54752207a915f?rik=LAEtA8ZFMph4rQ&riu=http%3a%2f%2fwww.myink.in%2fwp-content%2fuploads%2f2016%2f08%2fAsus-Zenfone-Go-ZC451TG.jpg&ehk=PEn2Ch%2bMDybW054J8QsygPMadHKgXP0fgf33jIR3Kc0%3d&risl=&pid=ImgRaw&r=0"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className={classes.image}
                                        src="https://th.bing.com/th/id/R.456cd7d0abd66d2553f54752207a915f?rik=LAEtA8ZFMph4rQ&riu=http%3a%2f%2fwww.myink.in%2fwp-content%2fuploads%2f2016%2f08%2fAsus-Zenfone-Go-ZC451TG.jpg&ehk=PEn2Ch%2bMDybW054J8QsygPMadHKgXP0fgf33jIR3Kc0%3d&risl=&pid=ImgRaw&r=0"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className={classes.image}
                                        src="https://th.bing.com/th/id/R.456cd7d0abd66d2553f54752207a915f?rik=LAEtA8ZFMph4rQ&riu=http%3a%2f%2fwww.myink.in%2fwp-content%2fuploads%2f2016%2f08%2fAsus-Zenfone-Go-ZC451TG.jpg&ehk=PEn2Ch%2bMDybW054J8QsygPMadHKgXP0fgf33jIR3Kc0%3d&risl=&pid=ImgRaw&r=0"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        {/* action buttons */}
                        <div className="flexRow">
                            <Button className={classes.leftbutton}>ADD TO CART</Button>
                            <Button className={classes.rightbutton}>BUY NOW</Button>
                        </div>
                    </div>
                </div>
                <div>
                    {/* product description */}
                    <div className="productDetails">
                        <p className="productTitle">Samsung Galaxy M01 (Black, 32 GB) (3GB RAM)</p>
                        <div>
                            <span className="ratingCount">
                                4.3
                            </span>
                            <span className="ratingNumbersReviews">
                                72,234 Ratings & 8,140 Reviews
                            </span>
                        </div>
                        <div className="extraOffer">
                            Extra
                            Rs 4500 off{" "}
                        </div>
                        <div className="flexRow priceContainer">
                            <span className="price">
                                Rs 8790
                            </span>
                            <span className="discount" style={{ margin: "0 10px" }}>
                                22% off
                            </span>
                            {/* <span>i</span> */}
                        </div>
                        <div>
                            <p
                                style={{
                                    color: "#212121",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                }}
                            >
                                Available Offers
                            </p>
                            <p style={{ display: "flex" }}>
                                <span
                                    style={{
                                        width: "100px",
                                        fontSize: "12px",
                                        color: "#878787",
                                        fontWeight: "600",
                                        marginRight: "20px",
                                    }}
                                >
                                    Description
                                </span>
                                <span
                                    style={{
                                        fontSize: "12px",
                                        color: "#212121",
                                    }}
                                >
                                    It was difficult for him to admit he was wrong. He had been so certain that he was correct and the deeply held belief could never be shaken. Yet the proof that he had been incorrect stood right before his eyes. "See daddy, I told you that they are real!" his daughter excitedly proclaimed.
                                    It was difficult for him to admit he was wrong. He had been so certain that he was correct and the deeply held belief could never be shaken. Yet the proof that he had been incorrect stood right before his eyes. "See daddy, I told you that they are real!" his daughter excitedly proclaimed.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default Product;