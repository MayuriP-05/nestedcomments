const commentContainer = document.getElementById('commentContainer');
const newCommentInput = document.getElementById('newCommentInput');
const addCommentBtn = document.getElementById('addCommentBtn');
const charCounter = document.getElementById('charCounter');
const usernameInput = document.getElementById('usernameInput');
const charLimit = 250;

const defaultProfileImage = "https://icon-library.com/images/anonymous-icon/anonymous-icon-28.jpg";

function createCommentElement(content, username, level = 0) {
  const commentDiv = document.createElement('div');
  commentDiv.classList.add('bg-white', 'p-4', 'rounded', 'shadow-md', 'mb-2', 'space-y-2');
  commentDiv.style.marginLeft = `${level * 20}px`;

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('flex', 'items-center', 'space-x-2');

  const profileImage = document.createElement('img');
  profileImage.src = defaultProfileImage;
  profileImage.alt = "Profile Image";
  profileImage.classList.add('w-8', 'h-8', 'rounded-full');

  const usernameText = document.createElement('h3');
  usernameText.classList.add('text-sm', 'font-bold');
  usernameText.textContent = username || "Anonymous";

  headerDiv.appendChild(profileImage);
  headerDiv.appendChild(usernameText);

  const commentText = document.createElement('p');
  commentText.classList.add('text-gray-700', 'mt-1');
  commentText.textContent = content;

  const commentInput = document.createElement('textarea');
  commentInput.classList.add('w-full', 'p-2', 'border', 'rounded', 'hidden');
  commentInput.value = content;
  commentInput.maxLength = charLimit;

  const buttonContainer = document.createElement('div');
  
  const replyButton = document.createElement('button');
  replyButton.classList.add('text-blue-500', 'text-sm', 'mr-2');
  replyButton.textContent = 'Reply';
  replyButton.addEventListener('click', () => addReplyInput(commentDiv, level + 1));

  const editButton = document.createElement('button');
  editButton.classList.add('text-yellow-500', 'text-sm', 'mr-2');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => toggleEdit(commentText, commentInput, editButton, saveButton));

  const saveButton = document.createElement('button');
  saveButton.classList.add('text-green-500', 'text-sm', 'mr-2', 'hidden');
  saveButton.textContent = 'Save';
  saveButton.addEventListener('click', () => saveEdit(commentText, commentInput, editButton, saveButton));
// Adjusted deleteButton event listener to remove all child comments
const deleteButton = document.createElement('button');
deleteButton.classList.add('text-red-500', 'text-sm');
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', () => {
  commentDiv.remove();
});

  buttonContainer.appendChild(replyButton);
  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(saveButton);
  buttonContainer.appendChild(deleteButton);

  commentDiv.appendChild(headerDiv);
  commentDiv.appendChild(commentText);
  commentDiv.appendChild(commentInput);
  commentDiv.appendChild(buttonContainer);

  return commentDiv;
}

function addReplyInput(parentComment, level) {
  const replyDiv = document.createElement('div');
  replyDiv.classList.add('mt-2', 'space-y-2');

  const replyUsername = document.createElement('input');
  replyUsername.type = 'text';
  replyUsername.placeholder = "Your name";
  replyUsername.classList.add('w-full', 'p-2', 'border', 'rounded', 'mb-2');

  const replyInput = document.createElement('textarea');
  replyInput.classList.add('w-full', 'p-2', 'border', 'rounded');
  replyInput.placeholder = 'Write a reply...';
  replyInput.maxLength = charLimit;

  const charCounter = document.createElement('span');
  charCounter.classList.add('text-xs', 'text-gray-500');
  charCounter.textContent = `${charLimit} characters remaining`;

  replyInput.addEventListener('input', (e) => {
    charCounter.textContent = `${charLimit - e.target.value.length} characters remaining`;
  });

  const postReplyBtn = document.createElement('button');
  postReplyBtn.classList.add('bg-green-500', 'text-white', 'py-1', 'px-4', 'rounded');
  postReplyBtn.textContent = 'Post Reply';
  postReplyBtn.addEventListener('click', () => {
    const replyContent = replyInput.value.trim();
    const replyUsernameValue = replyUsername.value.trim() || "Anonymous";
    if (replyContent) {
      const replyComment = createCommentElement(replyContent, replyUsernameValue, level);
      parentComment.appendChild(replyComment);
      replyDiv.remove();
    }
  });

  replyDiv.appendChild(replyUsername);
  replyDiv.appendChild(replyInput);
  replyDiv.appendChild(charCounter);
  replyDiv.appendChild(postReplyBtn);

  parentComment.appendChild(replyDiv);
}

function toggleEdit(commentText, commentInput, editButton, saveButton) {
  commentText.classList.toggle('hidden');
  commentInput.classList.toggle('hidden');
  editButton.classList.toggle('hidden');
  saveButton.classList.toggle('hidden');
}

function saveEdit(commentText, commentInput, editButton, saveButton) {
  commentText.textContent = commentInput.value;
  toggleEdit(commentText, commentInput, editButton, saveButton);
}

newCommentInput.addEventListener('input', (e) => {
  const remainingChars = charLimit - e.target.value.length;
  charCounter.textContent = `${remainingChars} characters remaining`;
});

addCommentBtn.addEventListener('click', () => {
  const commentContent = newCommentInput.value.trim();
  const username = usernameInput.value.trim() || "Anonymous";
  if (commentContent) {
    const newComment = createCommentElement(commentContent, username, 0);
    commentContainer.appendChild(newComment);
    newCommentInput.value = '';
    usernameInput.value = '';
    charCounter.textContent = `${charLimit} characters remaining`;
  }
});
