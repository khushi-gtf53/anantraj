"use client";
import { BASE_ADMIN } from "@/config";
import Card from "@/src/admin/components/card/Card";
import CardHeading from "@/src/admin/components/card/CardHeading";
import CustomTable from "@/src/admin/components/table/CustomTable";
import Pagination from "@/src/admin/components/table/Pagination";
import TableBody from "@/src/admin/components/table/TableBody";
import TableContainer from "@/src/admin/components/table/TableContainer";
import TableData from "@/src/admin/components/table/TableData";
import TableHead from "@/src/admin/components/table/TableHead";
import TableHeading from "@/src/admin/components/table/TableHeading";
import TableRow from "@/src/admin/components/table/TableRow";
import { useApi } from "@/src/admin/hooks/useApi";
import { useCrud } from "@/src/admin/hooks/useCrud";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { typologyId } = useParams();


  const table = {head : ["Sub Typologies"],header : ["sub_typologies"]}
  const itemsPerPage = 10;

  const api = useApi(BASE_ADMIN);

  // Left table: All Sub Typologies
  const {
    tableData: typologiesList,
    pagination: typologiesPagination,
    currentPage: typologiesPage,
    handlePageChange: handleTypologiesPageChange,
    fetchTableData: fetchTypologies,
  } = useCrud(api, `get-sub-typologies-distinct/${typologyId}`);

  // API for adding sub-typologies
  const { handleAddOrUpdate } = useCrud(api, "typologies-sub-typologies");

  // Right table: Added Sub Typologies
  const {
    tableData: subTypologiesList,
    pagination: subTypologiesPagination,
    currentPage: subTypologiesPage,
    handlePageChange: handleSubTypologiesPageChange,
    fetchTableData: fetchSubTypologies,
    handleDelete,
  } = useCrud(api, `typologies-sub-typologies?typologies_id=${typologyId}`, table.header);

  // Add sub-typology and refresh both tables
  const addSubTypology = async (sub_typologies_id) => {
    try {
      const formData = {
        typologies_id: typologyId,
        sub_typologies_id,
      };
      await handleAddOrUpdate(formData);

      // Refresh both tables after adding
      fetchTypologies(typologiesPage);
      fetchSubTypologies(subTypologiesPage);
    } catch (err) {
      console.error(err);
      alert("Failed to add sub typology");
    }
  };

  return (
    <section>
      <div className="grid grid-cols-12 gap-[20px]">
        {/* Left Table: All Sub Typologies */}
        <div className="col-span-6">
          <Card>
            <CardHeading>All Sub Typologies</CardHeading>
            <div className="overflow-auto">
              <CustomTable>
                <TableHead>
                  <TableRow>
                    <TableHeading>S.No.</TableHeading>
                    <TableHeading>Sub Typologies</TableHeading>
                    <TableHeading>Action</TableHeading>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {typologiesList.map((row, i) => {
                    const rowIndex = (typologiesPage - 1) * itemsPerPage + i;
                    const { sub_typologies, id } = row;
                    return (
                      <TableRow key={rowIndex}>
                        <TableData>{rowIndex + 1}</TableData>
                        <TableData key={i}>{sub_typologies}</TableData>
                        <TableData>
                          <button
                            className="text-white text-[12px] uppercase bg-[#2b6a83] rounded-[10px] px-[15px] py-[10px]"
                            onClick={() => addSubTypology(id)}
                          >
                            Add Sub Typology
                          </button>
                        </TableData>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </CustomTable>

              <Pagination
                currentPage={typologiesPage}
                totalPages={typologiesPagination?.pages || 1}
                onPageChange={handleTypologiesPageChange}
              />
            </div>
          </Card>
        </div>

        {/* Right Table: Added Sub Typologies */}
        <div className="col-span-6">
          <Card>
            <CardHeading>Added Sub Typologies</CardHeading>
            <TableContainer
              head={table.head}
              data={subTypologiesList}
              onDelete={handleDelete}
              pagination={subTypologiesPagination}
              currentPage={subTypologiesPage}
              handlePageChange={handleSubTypologiesPageChange}
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default page;
