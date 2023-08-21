import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormComp from "./FormComp";

export default interface JsonProps {
  departments: String;
  subDepartments: String[];
}

export default function Filter() {
  const jsonData = [
    {
      department: "customer_service",
      sub_departments: ["support", "customer_success"],
    },
    {
      department: "design",
      sub_departments: ["graphic_design", "product_design", "web_design"],
    },
  ];

  return (
    <div>
      {jsonData.map((data) => (
        <FormComp
          key={React.useId()}
          departments={data.department}
          subDepartments={data.sub_departments}
        />
      ))}
    </div>
  );
}
