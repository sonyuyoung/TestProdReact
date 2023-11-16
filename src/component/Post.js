import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { useState } from "react";

const Post = () => {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeWriter = (e) => setWriter(e.target.value);
  const onChangeDate = (e) => setDate(e.target.value);
  const onChangeContent = (e) => setContent(e.target.value);
  //   // console.log(e.target.value);
  const onClick = () => {
    alert(
      "제목 :" +
        title +
        ", writer : " +
        writer +
        ", date : " +
        date +
        ", content : " +
        content
    );
    setTitle("");
    setWriter("");
    setDate("");
    setContent("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1 className="sign"> Diary </h1>
      <form class="form-signin">
        <input
          class="form-control"
          type="text"
          name="title"
          placeholder="제목입력."
          value={title}
          onChange={onChangeTitle}
          onKeyPress={onKeyPress}
        />
        <input
          class="form-control"
          type="text"
          name="writer"
          placeholder="작성자."
          value={writer}
          onChange={onChangeWriter}
          onKeyPress={onKeyPress}
        />
        {/* <input
          class="form-control"
          type="text"
          name="date"
          placeholder="날짜."
          value={date}
          onChange={onChangeDate}
          onKeyPress={onKeyPress}
        /> */}
        <input
          class="form-control"
          type="text"
          name="date"
          placeholder="날짜 (YYYY-MM-DD)"
          value={date}
          onChange={onChangeDate}
          onKeyPress={onKeyPress}
          pattern="\d{4}-\d{2}-\d{2}" // Specify the desired date format
        />
        <textarea
          class="form-control"
          name="Content"
          id="Content"
          rows="10"
          placeholder="내용작성."
          value={content}
          onChange={onChangeContent}
          onKeyPress={onKeyPress}
        ></textarea>

        <button
          class="btn btn-md btn-primary btn-block"
          onClick={onClick}
          type="submit"
        >
          {" "}
          글쓰기
        </button>
      </form>
    </div>
  );
};

export default Post;
