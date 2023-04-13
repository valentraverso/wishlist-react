import AddWish from '../../components/AddWish/AddWish';
import ListWish from '../../components/ListWish/ListWish';
import StatusNav from '../../components/StatusNav/StatusNav.jsx';
import './Archive.css';

export default function Archive() {
    return (
        <div className='central-section__div'>
            <AddWish />
            <StatusNav />
            <ListWish completed={"all"} />        
        </div>
    )
}