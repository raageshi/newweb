import React, { useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";



export default function CustomInput(props) {
  const [inputVal,setValue] = useState('');
  const handleChange = function(event){
    setValue(event.target.value);
  }
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success,
    
    type,
    value
  } = props;


 

 
 
  return (
    <FormControl {...formControlProps}>
      {labelText !== undefined ? (
        <InputLabel
          
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
       
        id={id} value = {inputVal}
        onChange={(event)=>handleChange(event)}
        {...inputProps}
        type={type}
      />
    </FormControl>
  );
}

CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool
};
