/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from "react";
import "./create.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function create() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}  
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <div className="create">
      {file && (
        <img className="createImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="createForm" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="createFormGroup">
          <label htmlFor="fileInput">
            <i className="createIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="createInput"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="createFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="createInput createText"
            onChange={e => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="createSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}