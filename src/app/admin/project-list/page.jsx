"use client"
import { BASE_ADMIN } from "@/config";
import Card from "@/src/admin/components/card/Card";
import CardHeading from "@/src/admin/components/card/CardHeading";
import TableContainer from "@/src/admin/components/table/TableContainer";
import { useApi } from "@/src/admin/hooks/useApi";
import { useCrud } from "@/src/admin/hooks/useCrud";
import React from "react";

const tableHead = ["Name", "Image", "Address", "Short Description"];
const tableHeader = ["name","thumbnail","address", "short_description"];

const ProjectList = () => {

  const api = useApi(BASE_ADMIN);
  const { tableData ,handleDelete,pagination,currentPage,handlePageChange} = useCrud(api, "projects",tableHeader);

  return (
    <section>
      <Card className="!p-[40px]">
        <CardHeading>Our Projects Table</CardHeading>
        <TableContainer
          head={tableHead}
          data={tableData}
          onDelete={handleDelete}
              pagination={pagination}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
        />
      </Card>
    </section>
  );
};

export default ProjectList;
