import React, { useState } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextField = ({ initialContent, onContentChange }) => {
  const [editorState, setEditorState] = useState(() => {
    if (initialContent) {
      // If initialContent is provided, convert it to EditorState
      const contentState = convertFromRaw(JSON.parse(initialContent));
      return EditorState.createWithContent(contentState);
    } else {
      // Otherwise, create a new empty EditorState
      return EditorState.createEmpty();
    }
  });

  // Function to handle editor state changes
  const handleEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    if (onContentChange) {
      // Convert EditorState to raw JSON and pass it to the parent component
      const contentState = convertToRaw(newEditorState.getCurrentContent());
      onContentChange(JSON.stringify(contentState));
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '10px' }}>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
        }}
      />
    </div>
  );
};

export default RichTextField;
