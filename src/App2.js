
function App() {

    const title = "Title"
    const body = "this is the body of the  blog"
    const comments = [
        {
            id: 1, text: "Comment 1",
        },
        {
            id: 2, text: "Comment 2",
        },
        {
            id: 3, text: "Comment 3",
        },
        {
            id: 4, text: "Comment 4",
        },


    ]

  return (
    <div >
        <div className="container">
            <h1 className="title">{title}</h1>
            <p className="body">{body}</p>
        </div>
        <div className="comments">
            <p>Comments ({
                comments.length
            })</p>
            <ul>
                {  comments.map((comment, index) => (
                     <li key={index}>
                         {comment.text}
                     </li>
                )             )        }
            </ul>
        </div>
    </div>
  );
}

export default App;
