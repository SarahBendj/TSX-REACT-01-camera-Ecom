import  React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { Button } from 'react-bootstrap';
import useNotification from '../hooks/Notification';


const LikeNdislike = () => {

  const [like, setLike] = useState<boolean>(false);

  const {showSuccess } = useNotification();

  const TogglelikesState = () => {
    setLike(!like); 
    if(like !== true) {
        showSuccess('Thanks for liking this post')
    }
  
  };

  return (
   
      <Button  style={{ background: '#f3efef'}}className='border-0'  onClick={TogglelikesState}>

        {like ? (
           <FontAwesomeIcon icon={faHeart} style={{ color: '#DAA520'}} /> 
        ) : (
            <FontAwesomeIcon icon={emptyHeart} style={{ color: '#DAA520'}} />
        )
        }
       
      </Button>
 
  );
};

export default LikeNdislike;
