import AddWish from '../../components/AddWish/AddWish';
import ListWish from '../../components/ListWish/ListWish';
import StatusNav from '../../components/StatusNav/StatusNav.jsx';

export default function Active(){
    return(
        <div className='central-section__div'>
            <AddWish /> 
            <StatusNav />
            <ListWish completed={false}/>
        </div>
    )
}