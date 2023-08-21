import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";

interface Data {
  userId: "string";
  id: "string";
  title: "string";
  body: "string";
}
const columns: GridColDef[] = [
  {
    field: "userId",
    headerName: "User ID",
    width: 150,
    editable: false,
  },
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "Title",
    type: "string",
    width: 300,
    editable: true,
  },
  {
    field: "body",
    headerName: "Body",
    width: 300,
  },
];

const Table = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respone = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data: Data[] = await respone.json();

        // console.log(data);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Box sx={{ height: 365, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Table;
