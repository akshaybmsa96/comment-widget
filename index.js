const renderCommentWidget = () => {
  console.info("starting Process!!");
  renderCommentBox();
  renderComment();
};

const createElement = (
  type = "div",
  classes = "",
  attrArray = {},
  innerHTML = ""
) => {
  const ele = document.createElement(type);
  if (classes) {
    ele.classList.add(classes);
  }
  ele.innerHTML = innerHTML;
  for (const [key, value] of Object.entries(attrArray)) {
    ele.setAttribute(key, value);
  }

  return ele;
};

const renderCommentBox = () => {
  const commentTextBox = createElement("textarea", "", {
    placeholder: "Write your comments ...",
  });
  const buttonAdd = createElement("button", "", [], "Add Comment");
  const buttonCancel = createElement("button", "", [], "Cancel");
  const buttonContainer = document.createElement("div");
  buttonContainer.appendChild(buttonCancel, buttonAdd);
  buttonContainer.appendChild(buttonAdd);
  const commentBoxParent = document.getElementById("commentBox");

  commentBoxParent.appendChild(commentTextBox, buttonContainer);
  commentBoxParent.appendChild(buttonContainer);
};

const renderComment = () => {
  //rendering just static for now, will change in next commit

  const commentWrapper = document.getElementById("commentWrapper");
  const commentContainer = createElement("div", "comment-container");

  const authorNameEle = createElement("span");
  const commentEle = createElement(
    "p",
    "",
    "",
    "I really like this video, can you please make some more?"
  );

  const userActionConatiner = createElement("div", "comment-action-container");

  const likeEle = createElement("span", "", "", "Like");
  const replyEle = createElement("span", "", "", "Reply");
  const deleteEle = createElement("span", "", "", "Delete");

  userActionConatiner.appendChild(likeEle);
  userActionConatiner.appendChild(replyEle);
  userActionConatiner.appendChild(deleteEle);

  commentContainer.appendChild(authorNameEle);
  commentContainer.appendChild(commentEle);
  commentContainer.appendChild(userActionConatiner);

  commentWrapper.appendChild(commentContainer);
};
