"use client";
import React, { useState } from "react";
import CustomTable from "./CustomTable";
import TableHead from "./TableHead";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";
import TableData from "./TableData";
import TableRow from "./TableRow";
import { MdEdit, MdDelete } from "react-icons/md";
import Pagination from "./Pagination";
// import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { BASE_URL } from "@/config";
import Link from "next/link";

const TableContainer = ({ head, pagination, currentPage, handlePageChange, data, onDelete, onEdit, onLeaderShip }) => {
  const [modalContent, setModalContent] = useState(null);
  const [isImage, setIsImage] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const itemsPerPage = 10;
  const truncateText = (text, length = 20) => {
    if (!text) return "";
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  return (
    <div className="overflow-auto">
      <CustomTable>
        <TableHead>
          <TableRow>
            <TableHeading>S.No.</TableHeading>
            {head?.map((item, i) => (
              <TableHeading key={i}>{item}</TableHeading>
            ))}
            <TableHeading>Action</TableHeading>
          </TableRow>
        </TableHead>

        <TableBody>
          {data?.length > 0 ? (
            data.map((row, i) => {
              const rowIndex = (pagination?.page - 1) * itemsPerPage + i;
              return (
                <TableRow key={rowIndex}>
                  <TableData>{rowIndex + 1}</TableData>
                  {row.slice(0, -1).map((cell, j) => {
                    const isLast = j === row.length - 1; // id column

                    if (isLast) return null; // skip ID

                    const headerName = head[j]?.toLowerCase();

                    if (headerName?.includes("leadership")) return null;
                    const isCellImage = headerName?.includes("image") || headerName?.includes("banner") || headerName?.includes("icon");
                    const isCellText = typeof cell === "string";

                    return (
                      <TableData tableDataKey={`${rowIndex}-${j}`} key={`${rowIndex}-${j}`}>
                        {isCellImage ? (
                          <div className="w-full h-full flex justify-center">
                            <img
                              src={`${cell}`}
                              alt="img"
                              className="w-12 h-12 object-cover rounded cursor-pointer"
                              onClick={() => {
                                setModalContent(cell);
                                setIsImage(true);
                              }}
                            />
                          </div>
                        ) : isCellText && cell.length > 20 ? (
                          <span
                            className="cursor-pointer "
                            onClick={() => {
                              setModalContent(cell);
                              setIsImage(false);
                            }}
                          >
                            {truncateText(cell, 20)}
                          </span>
                        ) : (
                          cell
                        )}
                      </TableData>
                    );
                  })}

                  {head.includes("Add Sub Typologies") && (
                    <TableData>
                      <Link href={`/admin/sub-typologies/${row[row.length - 1]}`}>
                        Add Sub Typologies
                      </Link>
                    </TableData>
                  )}

                  {head.includes("LeaderShip") && (
                    <TableData>
                      <select
                        className="border rounded px-2 py-1"
                        value={row[row.length - 2]} // index where is_leadership exists
                        onChange={(e) => {
                          const value = parseInt(e.target.value, 10);
                          const id = row[row.length - 1]; // last element = id
                          onLeaderShip(id, { is_leadership: value }); // ✅ calls backend
                        }}
                      >
                        <option value={0}>No</option>
                        <option value={1}>Yes</option>
                      </select>
                    </TableData>
                  )}


                  <TableData>
                    <div className="flex items-center justify-center gap-[10px]">
                      {onEdit ? (
                        <button
                          className="text-primary text-[20px]"
                          onClick={() => onEdit(row[row.length - 1])}
                        >
                          <MdEdit />
                        </button>
                      ) : (
                        <Link href={`/admin/project/${row[row.length - 1]}`}>
                          <button className="text-primary text-[20px]">
                            <MdEdit />
                          </button>
                        </Link>
                      )}
                      <button
                        className="text-[var(--admin-secondary)] text-[20px]"
                        onClick={() => setConfirmDeleteId(row[row.length - 1])} // instead of direct delete
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </TableData>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableData colSpan={head?.length + 2}>No Data</TableData>
            </TableRow>
          )}
        </TableBody>
      </CustomTable>

      <Pagination
        currentPage={currentPage}
        totalPages={pagination?.totalPages || 1}
        onPageChange={handlePageChange}
      />

      {/* Preview Modal */}
      {modalContent && (
        <div
          className="fixed inset-0 bg-[#00000029] flex items-center justify-center z-50 p-4"
          onClick={() => setModalContent(null)}
        >
          <div
            className="relative bg-white p-4 pt-[40px] rounded min-w-[300px] min-h-[200px]  max-w-[90vw] max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-black text-2xl"
              onClick={() => setModalContent(null)}
            >
              <IoMdClose />
            </button>
            {isImage ? (
              <img
                src={`${modalContent}`}
                alt="modal"
                className="object-contain max-h-[80vh] w-full"
              />
            ) : (
              <p className="text-black whitespace-pre-wrap">{modalContent}</p>
            )}
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {confirmDeleteId && (
        <div
          className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50 p-4"
          onClick={() => setConfirmDeleteId(null)}
        >
          <div
            className="relative bg-white p-6 rounded-lg shadow-lg w-[350px] text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
            <p className="mb-6 text-gray-600">Are you sure you want to delete this item?</p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setConfirmDeleteId(null)}
              >
                Cancel
              </button>
              <button
                className="bg-[var(--admin-secondary)] text-white px-4 py-2 rounded"
                onClick={() => {
                  onDelete(confirmDeleteId);
                  setConfirmDeleteId(null);
                }}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableContainer;
