import Blogs from '../data/blogs.json';
import BlogShape , {BlogProps} from '../component/BlogShape';
import { Col , Row} from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import ImageLayer from '../../public/images/About.jpeg';
import Vote from '../component/Vote';
import '../App.scss';


// interface ComponentChildren {
//     children : ReactNode
// }


//*COMPO
const About = () => {
    
    
    return (
        <>
           <h1> About</h1>
        <div className="d-flex flex-row jutify-content-between about-container">
        <div className='d-flex flex-column jutify-content-between '>
        <Card style={{  position:'relative' }}>
            <Card.Img  style={{ maxWidth : '100%'}}src={ImageLayer} />
            <Card.Text style={{ position : 'absolute'}}>  <h3> Feel every moment</h3> </Card.Text>
           < Vote />
        </Card>
        </div>

        {/* BLOG ZONE */}
        <div style={{  paddingLeft : '2rem'}} >
         
            <div className='blog-scroller'>
                { Blogs.map((blog :BlogProps)=> (
                    <Col key={blog.id}> <BlogShape {...blog} /> </Col>
                ))}
            </div>
            
      
        </div>
        </div>
        </>
    );
};

export default About;