import React, { useState } from 'react';
import { Offcanvas , Button , Stack , Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { UseShoppingContext } from '../Context/UseShoppingContext';
import StoreItem  , { StoreItemProps } from './StoreItem';
import StoreData from '../data/items.json';
import { Link } from 'react-router-dom';
import useNotification from '../hooks/Notification';

type SlideBasketProps = {
    isBasketShowed :boolean 
    handleSlideBasketCLOSE : ()=> void
}

const SlideBasket = ({ isBasketShowed ,handleSlideBasketCLOSE } : SlideBasketProps) => {

    const { cartItems } = UseShoppingContext();

    //*RETURNING ONLY SELECTED ITEMS 
      const selectedItemsToBuy: StoreItemProps |null [] = 
      StoreData.filter((item : StoreItemProps)  => cartItems.some((cartItem)=> cartItem.id  === item.id ));

    return (
            
            <Offcanvas show={isBasketShowed} placement='end' className='d-flex direction-column' >
                <Button  onClick={handleSlideBasketCLOSE } 
                variant='bg-transparent' 
                style={{  width : '100%' ,
                 color: 'white',
                  backgroundColor : 'rgb(3,1,44)' ,
                  borderRadius: '0',
                  borderBottom: '4px solid #DAA520'}}> CLOSE X </Button>
               <Offcanvas.Header>
                <Offcanvas.Title>  <FontAwesomeIcon icon={faShoppingCart} color={'#DAA520'} /> Selected Items </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body> 
                     <Stack >
                        {
                          selectedItemsToBuy.map((item : StoreItemProps)=>(
                            <Col style={{ scale : '0.8'}} key={item.id}>  < StoreItem {...item} /> </Col>

                          ) )
                        }
                        

                     </Stack>
                     </Offcanvas.Body>

                     {/* //*PAYEMENT */}
                    <Link  to={{ pathname : '/Payement' , state : { selectedItems : 'hello' } }}>
                    <Button  onClick={handleSlideBasketCLOSE } 
                variant='bg-transparent' 
                style={{  width : '100%' , 
                color: 'white',
                 backgroundColor : 'rgb(3,1,44)' ,
                 borderRadius: '0',
                 borderTop: '4px solid #DAA520'
                 }}> PAYEMENT </Button> 
                 </Link> 
         
            </Offcanvas>
            
    
    );
};

export default SlideBasket;