import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";

const ChapterContent = ({ progression, nextChapter, loading, error }) => {
  const { chapters } = useSelector((state) => state.study.course);
  const currentChapters = chapters[progression.chapterNumber];
  return (
    <div className="course-details center col">
      <div className="intro-course center col">
        <h1 className="course-details-title">{currentChapters.title}</h1>
        <p className="course-details-body">{currentChapters.content}</p>
      </div>
      ​<div className="err-msg">{error}</div>
      {!progression.status ? (
        <Button
          style={{
            width: "fit-content",
            height: 50,
            padding: "0px 30px",
          }}
          loading={loading}
          size={"large"}
          type={"primary"}
          onClick={nextChapter}
        >
          Next Chapter
        </Button>
      ) : null}
    </div>
  );
};

export default ChapterContent;
