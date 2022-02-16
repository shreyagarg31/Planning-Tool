import { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Option from "./CustomOption";
import { default as ReactSelect } from "react-select";

const CreateBucket = (props) => {

    const [nameInput, setNameInput] = useState("");
    const [isExpanded, setExpanded] = useState(false);
    const [optionSelected , setOptionSelected]= useState(false);

    const notes = props.notes;
    console.log(notes);

    function onNameInput(e) {
        setNameInput(e.target.value);
      }
    
    function onCreateBucket(e) {
    e.preventDefault();
    props.onCreate(nameInput);

    setNameInput("");
    }

    function expand() {
    setExpanded(true);
    }

    function onSelection(e) {
        setOptionSelected(!optionSelected);
    }

    return (
        <div onClick={expand}>
            <form className="create-bucket">
            {isExpanded ? (
                <input
                    name="name"
                    placeholder="Bucket Name"
                    onChange={onNameInput}
                    value={nameInput}
                />
            ) : null}

            <span
                class="d-inline-block"
                data-toggle="popover"
                data-trigger="focus"
                data-content="Select highlight(s) to be grouped "
            >
            <ReactSelect
                options={notes}
                isMulti
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                components={{
                    Option
                }}
                onChange={onSelection}
                allowSelectAll={true}
                value={optionSelected}
            />
            </span>

        <Zoom in={isExpanded ? true : false}>
            <Fab onClick={onCreateBucket}>
                <AddIcon />
            </Fab>
        </Zoom>

            </form>
        </div>
    )
};

export default CreateBucket;