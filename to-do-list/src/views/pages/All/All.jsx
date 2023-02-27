import AddWish from '../../components/AddWish/AddWish';
import ListWish from '../../components/ListWish/ListWish';
import './All.css';

export default function All(){
    return(
        <div className='central-section__div'>
            <AddWish /> 
            <ListWish />
        </div>
    )
}