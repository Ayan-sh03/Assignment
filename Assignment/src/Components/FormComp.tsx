import React, { useState, useEffect } from "react";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import JsonProps from "./Check";

const FormComp = ({ departments, subDepartments }: JsonProps) => {
  const [checked, setChecked] = useState(
    Array(subDepartments.length + 1).fill(false)
  );

  useEffect(() => {
    setChecked(Array(subDepartments.length + 1).fill(false));
  }, [subDepartments]);

  const handleChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedChecked = [...checked];
      updatedChecked[index] = event.target.checked;

      if (index === 0) {
        // Update child checkboxes based on the parent's checked state
        for (let i = 1; i < updatedChecked.length; i++) {
          updatedChecked[i] = event.target.checked;
        }
      } else {
        // Update parent checkbox state based on child checkboxes
        const allChildrenChecked = updatedChecked
          .slice(1)
          .every((isChecked) => isChecked);
        updatedChecked[0] = allChildrenChecked;

        if (!allChildrenChecked) {
          updatedChecked[0] = false;
        } else if (updatedChecked.slice(1).every((isChecked) => !isChecked)) {
          updatedChecked[0] = false;
        } else {
          updatedChecked[0] = false; // Indeterminate state
        }
      }

      setChecked(updatedChecked);
    };

  const childCheckboxes = subDepartments.map((prop, index) => (
    <FormControlLabel
      key={index + 1}
      label={prop}
      control={
        <Checkbox
          checked={checked[index + 1]}
          onChange={handleChange(index + 1)}
        />
      }
    />
  ));

  return (
    <div>
      <FormControlLabel
        label={departments}
        control={
          <Checkbox
            checked={
              checked[0] && checked.slice(1).every((isChecked) => isChecked)
            }
            indeterminate={
              checked[0] !== checked.slice(1).every((isChecked) => isChecked)
            }
            onChange={handleChange(0)}
          />
        }
      />
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        {childCheckboxes}
      </Box>
    </div>
  );
};

export default FormComp;
