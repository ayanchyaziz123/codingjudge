import React, { useState, useEffect } from 'react';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Description = ({ initialContent, disabled }) => {
  const [editorState, setEditorState] = useState(() => {
    if (initialContent) {
      const contentState = convertFromRaw(JSON.parse(initialContent));
      return EditorState.createWithContent(contentState);
    } else {
      return EditorState.createEmpty();
    }
  });

  const handleEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  // useEffect(() => {
  //   if (disabled) {
  //     // If disabled, set the editor state to read-only
  //     setEditorState(EditorState.set(editorState, { readOnly: true }));
  //   }
  // }, [disabled]); // Update when the disabled prop changes

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
        toolbarHidden={disabled} // Hide toolbar if disabled
        readOnly={disabled} // Make the editor read-only if disabled
      />
    </div>
  );
};

export default Description;
