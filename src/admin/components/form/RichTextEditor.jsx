"use client";

import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Label from "./Label";

let ClassicEditor;
if (typeof window !== "undefined") {
  ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
}

const RichTextEditor = ({ label, name, value, onChange, required }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient || !ClassicEditor) return null;

  return (
    <div>
      {label && <Label name={name} label={label} required={required} />}
      <CKEditor
        editor={ClassicEditor}
        data={value || ""}
        onChange={(event, editor) => onChange(editor.getData())}
      />
    </div>
  );
};

export default RichTextEditor;
