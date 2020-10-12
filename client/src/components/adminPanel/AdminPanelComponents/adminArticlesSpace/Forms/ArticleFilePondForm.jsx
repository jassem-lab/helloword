import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "../../../Admin.css";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode,
  FilePondPluginImageResize
);

const ArticleFilePondForm = (props) => {
  const [files, setFiles] = useState([]);
  return (
    <div className="filePondWorks wrapper">
      <form action="/api/articles/addPhoto" method="POST">
        <h2 className="editImageDataTitle">Add main article image</h2>
        <div className="editImgData">
          <div className="editInput imgInput">
            <label htmlFor="descr">Description: </label>
            <input type="text" name="descr" />
          </div>
          {props.articles.length !== 0 ? (
            <div className="editInput imgInput hideInput">
              <label htmlFor="owner">Owner: </label>
              <input
                type="text"
                name="owner"
                defaultValue={props.articles[props.articles.length - 1]._id}
              />
            </div>
          ) : null}
          <div className="editFontStyle">
            <label htmlFor="type">Type: </label>
            <select name="type">
              <option value="articlePreview">articlePreview</option>
            </select>
          </div>
        </div>
        <div className="filePondArea">
          <FilePond
            setOptions={{
              stylePanelAspectRatio: 150 / 100,
              imageResizeTargetWidth: 100,
              imageResizeTargetHight: 150,
            }}
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={false}
            maxFiles={1}
            name="img"
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
          <div className="buttonPage">
            <button type="submit">Save</button>
          </div>
        </div>
        <div>{props.loading ? "loading..." : null}</div>
      </form>
    </div>
  );
};

export default ArticleFilePondForm;
