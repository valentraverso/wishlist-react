import AddWish from '../../components/AddWish/AddWish';
import ListWish from '../../components/ListWish/ListWish';
import './Home.css';

export default function Home(){
    return(
        <div className='central-section__div'>
            <AddWish /> 
            <ListWish />
        </div>
    )
}