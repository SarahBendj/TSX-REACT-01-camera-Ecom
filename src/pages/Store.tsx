import StoreItems from '../data/items.json';
import StoreItem , {StoreItemProps} from '../component/StoreItem'
import SearchBar from '../component/SearchBar';
import { Col , Row } from 'react-bootstrap';
import { useState } from 'react';


const Store = () => {

    const [ filtredItems , setFiltredItems ] = useState(StoreItems);
    console.log(filtredItems)
    return (
        <div>
            <h1> Store</h1>
           <SearchBar StoreItems={StoreItems}  setFiltredItems={setFiltredItems}  /> 
            <Row >
                {filtredItems.map((item:StoreItemProps) => (
                    <Col key={item.id}> <StoreItem {...item} /></Col>
                ))}
            </Row>
        </div>
    );
};

export default Store;