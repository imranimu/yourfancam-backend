import React, { useState } from "react";

import { 
    Row,
    Col, 
    Input, 
    FormText,
    FormGroup,
    Label
} from 'reactstrap';
 
function AddFields() {

  const [inputList, setInputList] = useState([{ Name: "", SelectType: "Text", LabelName: "", Value: "", MaxCharacter: "", MinCharacter: "" }]);
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { Name: "", SelectType: "", LabelName: "", Value: "", MaxCharacter: "", MinCharacter: ""}]);
  };
 
  return (
      <> 
        {inputList.map((x, i) => {
            return (
            <> 
            <Row>
                <Col md={2}>
                    <Input                    
                        name="Name"
                        placeholder="Name"
                        value={x.Name}
                        onChange={e => handleInputChange(e, i)}
                    />
                </Col>
                <Col md={2}>
                    <Input type="select" name="SelectType" value={x.SelectType} onChange={e => handleInputChange(e, i)}>
                        <option value="Text">Text</option>
                        <option value="Options">Options</option> 
                    </Input>
                </Col>
                <Col md={2}>
                    <Input 
                        className=""
                        name="LabelName"
                        placeholder="Label Text"
                        value={x.LabelName}
                        onChange={e => handleInputChange(e, i)} >
                    </Input>
                </Col>
                <Col md={1}>
                    <FormGroup check className="pt-2">
                        <Label check>
                            <Input type="checkbox" /> Required
                        </Label>
                    </FormGroup>
                </Col>
                
                {x.SelectType === 'Options' ? 
                    <Col md={3}>
                        <Input 
                            className=""
                            name="Value"
                            placeholder="Some attributes by ',' separating values."
                            value={x.Value}
                            onChange={e => handleInputChange(e, i)} >
                        </Input>                        
                    </Col> 
                    :  <Col md={3}>
                        <FormGroup row className="mb-0">
                            <Col md={6} className="mb-0">
                                <Input 
                                    className=""
                                    name="MinCharacter"
                                    placeholder="Min Character"
                                    value={x.MinCharacter}
                                    onChange={e => handleInputChange(e, i)} >
                                </Input>
                            </Col>
                            <Col md={6} className="mb-0">
                                <Input 
                                    className=""
                                    name="MaxCharacter"
                                    placeholder="Max Character"
                                    value={x.MaxCharacter}
                                    onChange={e => handleInputChange(e, i)} >
                                </Input>   
                            </Col>
                        </FormGroup>                 
                    </Col>
                }                
                <Col className="btn-box" md={2}>
                    {inputList.length !== 1 && <button
                        className="btn btn-danger mr-2"
                        onClick={() => handleRemoveClick(i)}>Remove</button>}
                    {inputList.length - 1 === i && <button className="btn btn-success" onClick={handleAddClick}>Add</button>}
                </Col> 
            </Row>
            </>
            );
        })}
        {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>*/}
    </>
  );
}
 
export default AddFields;