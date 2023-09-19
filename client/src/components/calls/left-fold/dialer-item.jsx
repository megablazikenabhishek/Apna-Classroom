import "./dialer-item.css";

const DialerItem = ({ item, setSelected }) => {
  return (
    <div className="dialer-item" onClick={() => setSelected(item)}>
      {/* <img className="item-avatar" src={item.avatar} /> */}
      <div className="item-info">
        <label className="item-title">{item.name}</label>
        <label className="item-subtitle">{item.description}</label>
      </div>
      <div className="item-icons">
        {/* <div className="item-icon">
          <i className="fi-rr-microphone"></i>
        </div> */}
        <div className="item-icon">
          <i className="fi-rr-play-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default DialerItem;
