import {nanoid} from "nanoid"
import Buckets from './Buckets';
import { useState, useEffect } from "react";
import CreateBucket from "./CreateBucket";
import Top from './Top';
import _ from "lodash";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import StickyNotesList from "../components/StickyNotesList";

const BucketList = () => {
    const [bucketList , setBucketList] = useState([{
        bucketId : nanoid() ,
        bucketName : "Life" ,
        groupedNotes : [] ,
    },
    {
        bucketId : nanoid(),
        bucketName : "Meets",
        groupedNotes : [] ,
    },
    {
        bucketId : nanoid(),
        bucketName : "Peace",
        groupedNotes : [] ,
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
    bucketList.forEach((element , index) => {
      element.groupedNotes.push(savedNotes.filter( function (note){
        console.log(note.bucketName + " " + element.bucketName);
        //console.log(note.bucketName.includes(element.bucketName));
        return note.bucketName.includes(element.bucketName);
      }))
    });

    localStorage.setItem(
      'react-notes-bucket-data',
      JSON.stringify(bucketList)
    );
    //console.log(bucketList);
    setBucketList(bucketList);

  }, []);

  useEffect(() => {
    //console.log(bucketList);
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

  const handleDragEnd = ({destination , source}) => {
    // console.log("from" + source.index);
    // console.log("to" + destination.index);
      if(!destination)return ;

      if(destination.index === source.index && destination.droppableId === source.droppableId){
        return;
      }

      const itemCopy = {...bucketList[source.droppableId].groupedNotes[source.index]};
      console.log(itemCopy);
      setBucketList( prev => {
        prev = {...prev}
        //Remove prev elements from source
        prev[source.droppableId].groupedNotes.splice(source.index, 1)
        
        //Add new elements to destination location
        prev[destination.droppableId].groupedNotes.splice(destination.index , 0 , itemCopy);
        return prev
      })
  }

  return <div> 
      <Top />
      <CreateBucket onCreate={addBucket} notes={savedNotes}/>
      {/* <div className="bucket-container">
        <div className="bucket-list">
          {
              bucketList.map((buckets) => 
              <Buckets bucketId = {buckets.bucketId} 
              bucketName = {buckets.bucketName}
              handleDeleteBucket = {deleteBucket}
              showNotes = {listNotes}/>)
          }
      </div>
      </div> */}
      <div className="group">
      <DragDropContext onDragEnd={handleDragEnd}>
        {_.map(bucketList , (data,key) => {
          return (
            <div key = {data.bucketId} className="column">
              <h3>{data.bucketName}</h3>
              <Droppable droppableId={key}>
                {(provided) => {
                  return (
                    <div 
                    ref={provided.innerRef}
                     {...provided.droppableProps}
                     className={"droppable-col"}
                    >
                      {
                        data.groupedNotes.map((el , index) => {
                          //console.log("Hey -->" + el[index]);
                          return (
                            el === undefined || el[index]=== undefined?<div></div>:
                            <Draggable key={el[index].id} index={index} draggableId={el[index].id}>
                              {(provided) => {
                                return (
                                  <div className={"item"}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  >
                                    {el[index].title}
                                  </div>
                                )
                              }

                              }
                            </Draggable>
                          )
                        })
                      }
                      {provided.placeholder}
                    </div>
                  )
                }

                }
              </Droppable>
            </div>
          )
        })}

      </DragDropContext>
      </div>
  </div>

}

export default BucketList;