import {MdDeleteForever} from 'react-icons/md';

const Buckets = (props) =>{
    return <div className="bucket" onClick={() => props.showNotes(props.bucketId)}>
        <h2>{props.bucketName}</h2>
        <div className="bucket-footer">
        <MdDeleteForever
            onClick={() => props.handleDeleteBucket(props.bucketId)}
            className='delete-icon'
            size='1.2em'
        />
        </div>
    </div>
}

export default Buckets;