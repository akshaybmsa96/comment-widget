const comments_array = [
  {
    id: "1",
    authorName: "Santosh Gupta",
    comment: "I really like this video, can you please make some more?",
    likes: 2,
    replies: [
      {
        id: "1-1",
        authorName: "Akshay Sharma",
        comment: "Ya Sure! Soon",
        likes: 1,
        replies: [],
      },
    ],
  },
  {
    id: "2",
    authorName: "Naman Mathur",
    comment: "How can i meet you? Big fan",
    likes: 2,
    replies: [
      {
        id: "2-1",
        authorName: "Akshay Sharma",
        comment: "Thankyou, lets meet this weekend at CP",
        likes: 1,
        replies: [],
      },
    ],
  },
];

class CommentWidget {
  constructor(comments) {
    this.commentsData = comments;
  }

  initializeWidget = () => {
    this.renderCommentWidget();
  };

  onLikeClick = (id) => {};
  onDeleteClick = (id) => {};
  onReplyClick = (id) => {};

  renderCommentWidget = () => {
    console.info("starting Process!!");
    this.renderCommentBox();
    this.renderComments();
  };

  createElement = (
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

  renderCommentBox = () => {
    const commentTextBox = this.createElement("textarea", "", {
      placeholder: "Write your comments ...",
    });
    const buttonAdd = this.createElement("button", "", [], "Add Comment");
    const buttonCancel = this.createElement("button", "", [], "Cancel");
    const buttonContainer = this.createElement("div");
    buttonContainer.appendChild(buttonCancel, buttonAdd);
    buttonContainer.appendChild(buttonAdd);
    const commentBoxParent = document.getElementById("commentBox");

    if (commentBoxParent) {
      commentBoxParent.appendChild(commentTextBox, buttonContainer);
      commentBoxParent.appendChild(buttonContainer);
    }
  };

  getUserComment = (comObj, parent) => {
    const authorNameEle = this.createElement(
      "span",
      "author-name",
      {},
      comObj.authorName
    );
    const commentEle = this.createElement(
      "p",
      "author-comment",
      {},
      comObj.comment
    );

    const userActionConatiner = this.createElement(
      "div",
      "comment-action-container"
    );

    const likeEle = this.createElement("span", "like-button", {}, "Like");
    const replyEle = this.createElement("span", "reply-button", {}, "Reply");
    const deleteEle = this.createElement("span", "delete-button", {}, "Delete");

    userActionConatiner.appendChild(likeEle);
    userActionConatiner.appendChild(replyEle);
    userActionConatiner.appendChild(deleteEle);

    parent.appendChild(authorNameEle);
    parent.appendChild(commentEle);
    parent.appendChild(userActionConatiner);
  };

  renderComments = () => {
    const commentWrapper = document.getElementById("commentWrapper");

    this.commentsData.forEach((comObj, index) => {
      const commentContainer = this.createElement("div", "comment-container");
      this.getUserComment(comObj, commentContainer);

      const replyContainer = this.renderReplies(
        comObj.replies,
        commentContainer
      );
      if (replyContainer) {
        commentContainer.appendChild(replyContainer);
      }

      if (commentWrapper) {
        commentWrapper.appendChild(commentContainer);
      }
    });
  };

  renderReplies = (replies = [], parent) => {
    if (!replies.length) {
      return null;
    } else {
      const replyElement = this.createElement("div", "reply-container");
      replies.forEach((reply, index) => {
        this.getUserComment(reply, replyElement);
      });

      return replyElement;
    }
  };
}

const commentObj = new CommentWidget(comments_array);
commentObj.initializeWidget();
