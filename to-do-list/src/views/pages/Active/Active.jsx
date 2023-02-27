import AddWish from '../../components/AddWish/AddWish';
import ListWish from '../../components/ListWish/ListWish';

export default function Active(){
    return(
        <div className='central-section__div'>
            <AddWish /> 
            <ListWish completed={false}/>
        </div>
    )
}