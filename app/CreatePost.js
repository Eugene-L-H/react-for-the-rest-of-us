import React, { useState } from "react";
import Axios from "axios";
import Page from "./components/Page";

const CreatePost = function () {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const handleSubmit = async function (e) {
    e.preventDefault();
    try {
      await Axios.post("/create-post", {
        title,
        body,
        token: localStorage.getItem("complexAppToken")
      });
      console.log("post submitted");
    } catch (err) {
      console.log("There was a problem: ", err.message);
    }
  };
  return (
    <Page title="Our App | New Post">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="post-title" className="text-muted mb-1">
            <small>Title</small>
          </label>
          <input
            autoFocus
            name="title"
            id="post-title"
            className="form-control form-control-lg form-control-title"
            type="text"
            placeholder=""
            autoComplete="off"
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="post-body" className="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <textarea
            name="body"
            id="post-body"
            className="body-content tall-textarea form-control"
            type="text"
            onChange={e => setBody(e.target.value)}
          ></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleSubmit}>
          Save New Post
        </button>
      </form>
    </Page>
  );
};

export default CreatePost;
