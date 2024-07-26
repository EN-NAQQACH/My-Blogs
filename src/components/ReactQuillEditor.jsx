"use client"
import React from 'react'
import ReactQuill from 'react-quill';

function ReactQuillEditor({content}) {
  return (
    <ReactQuill value={content} readOnly={true} theme="bubble" />
  )
}

export default ReactQuillEditor