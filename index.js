const messageList = [
  {
    imageUrl: "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png",
    text: "information Message",
    uniqueKey: "1",
    bgColor: "#0b69ff",
  },
  {
    imageUrl: "https://assets.ccbp.in/frontend/react-js/success-icon-img.png",
    text: "success Message",
    uniqueKey: "2",
    bgColor: "#2dca73",
  },
  {
    imageUrl: "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png",
    text: "warning Message",
    uniqueKey: "3",
    bgColor: "#ffb800",
  },
  {
    imageUrl: "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png",
    text: "Error Message",
    uniqueKey: "4",
    bgColor: "#ff0b37",
  },
];

const Notification = (props) => {
  //  Write your code here.
  const { messageList } = props;
  const { imageUrl, text, bgColor } = messageList;
  return (
    <li style={{ backgroundColor: `${bgColor}` }} className="information">
      <img src={imageUrl} className="blueMark" alt="image1" />
      <div>
        <p className="infoMessage">{text}</p>
      </div>
    </li>
  );
};
const element = (
  //  Write your code here.
  <div>
    <h1 className="heading">Notifications</h1>
    <ul>
      {messageList.map((eachItem) => (
        <Notification messageList={eachItem} Key={eachItem.uniqueKey} />
      ))}
    </ul>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
