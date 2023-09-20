import React from 'react';
import { Card } from 'react-bootstrap';
import LikeNdislike from './LikeNdislike';
import RevealDivElement from '../hooks/Reveal'


type BlogProps = {
  id: number;
  title: string;
  date: string;
  author: string;
  content: string;
};

const BlogShape = ({ title, date, author, content }: BlogProps) => {
  return (
    <div style= {{ padding : '1rem'}} >
    <Card className="my-3" style={{ position:'relative' }}>
      <Card.Body>
        <Card.Title >
        <RevealDivElement  width='fit-content'> 
        <div>
            <h4 className="mb-2 border-bottom" style={{ color: '#DAA520'}}>{title}</h4>
          </div></RevealDivElement>
         <div>
            <p className="text-muted">
            <RevealDivElement  width='fit-content'> <h5 className="mr-2">{author}</h5> </RevealDivElement> 
              <RevealDivElement  width='fit-content'>   <h6>{date}</h6>  </RevealDivElement>
            </p>
          </div>
        </Card.Title>
        <RevealDivElement  width='fit-content'> <Card.Text className='my-4'>{content}</Card.Text> </RevealDivElement>
      </Card.Body>
      <div  style={{ position:'absolute' , bottom: "0" , right:"0"}}>
      <LikeNdislike />
      </div>
    </Card>
    </div>
  );
};

export default BlogShape;
