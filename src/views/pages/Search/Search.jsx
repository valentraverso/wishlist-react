export default function Search(){
    return(
        <div className='central-section__div'>
            <AddWish />
            <StatusNav />
            <ListWish completed={"archive"} />        
        </div>
    )
}