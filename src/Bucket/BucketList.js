import {nanoid} from "nanoid"
import Buckets from './Buckets';
import { useState, useEffect } from "react";
import CreateBucket from "./CreateBucket";
import Top from './Top';

const BucketList = () => {
    const [bucketList , setBucketList] = useState([{
        bucketId : nanoid() ,
        bucketName : "Goals" 
    },
    {
        bucketId : nanoid(),
        bucketName : "Meets"
    },
    {
        bucketId : nanoid(),
        bucketName : "Maths"
    },
])

const savedNotes = JSON.parse(
  localStorage.getItem('react-notes-app-data')
);



useEffect(() => {
    const savedBuckets = JSON.parse(
      localStorage.getItem('react-notes-bucket-data')
    );
  
    if (savedBuckets) {
      setBucketList(savedBuckets);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-bucket-data',
      JSON.stringify(bucketList)
    );
  }, [bucketList]);

  function addBucket(nameInput) {
    setBucketList((existingBuckets) => [
      ...existingBuckets,
      { bucketId: nanoid() , bucketName: nameInput},
    ]);

  }

  function deleteBucket(deleteId) {
    console.log(deleteId);
    setBucketList((existingBuckets) => {
      return existingBuckets.filter(function (bucket) {
        return bucket.bucketId !== deleteId;
      });
    });
  }

  function listNotes(bucketId) {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    // return savedNotes.filter(function (note) {
    //   return note.bucketId === bucketId;
    // });
  }

  return <div> 
      <Top />
      <CreateBucket onCreate={addBucket} notes={savedNotes}/>
      <div className="bucket-container">
        <div className="bucket-list">
          {
              bucketList.map((buckets) => 
              <Buckets bucketId = {buckets.bucketId} 
              bucketName = {buckets.bucketName}
              handleDeleteBucket = {deleteBucket}
              showNotes = {listNotes}/>)
          }
      </div>
      </div>
  </div>

}

export default BucketList;