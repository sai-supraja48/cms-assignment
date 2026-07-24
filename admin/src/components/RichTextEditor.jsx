"use client";

import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Table from "@editorjs/table";

export default function RichTextEditor({ data, onChange }) {
  const editorRef = useRef(null);

  useEffect(() => {
    let editor;

    const initEditor = async () => {
      editor = new EditorJS({
        holder: "editorjs",

        data,

        tools: {
          header: Header,
          list: List,
          table: Table,
        },

        async onChange(api) {
          const savedData = await api.saver.save();
          onChange(savedData);
        },
      });

      editorRef.current = editor;
    };

    initEditor();

    return () => {
      if (
        editorRef.current &&
        typeof editorRef.current.destroy === "function"
      ) {
        editorRef.current.destroy();
      }

      editorRef.current = null;
    };
  }, []);

  return (
    <div
      id="editorjs"
      className="border rounded-lg p-5 min-h-[300px] bg-white"
    />
  );
}