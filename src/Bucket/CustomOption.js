import { components } from "react-select";
import { useState } from "react";

const CustomOption = (props) => {
  const [val, setVal] = useState(false);
  function getCheckedValues(val){
    localStorage.setItem('bucket-topic',JSON.stringify(props.data.id));
    setVal(!val);
  }
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={val}
          // value={val}
          onClick={() => getCheckedValues(val)}
        />{" "}
        <label>{props.data.title}</label>
      </components.Option>
    </div>
  );
};

export default CustomOption;