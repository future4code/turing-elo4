import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function Categoria() {
  const [value, setValue] = React.useState('categoria1');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Categorias</FormLabel>
      <RadioGroup aria-label="categorias" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="categoria1" control={<Radio />} label="categoria1" />
        <FormControlLabel value="categoria2" control={<Radio />} label="categoria2" />
        <FormControlLabel value="categoria3" control={<Radio />} label="categoria3" />
      </RadioGroup>
    </FormControl>
  );
}