export default function UserBrief({
  searching,
  name,
  phone,
  userPhoto,
  onSelect,
  onSelect2
}) {
  if (name.includes(searching))
    return (
      <div className="userBrief-container">
        <li className="userBrief">
          <button onClick={() =>{onSelect(); onSelect2()}}>
            <div className="photo">
              {userPhoto ? <img src={userPhoto} /> : <p>{name[0]}</p>}
            </div>
            <div className="briefnameContainer">
              <div className="briefName">{name}</div>
              <div className="briefPhone">{phone}</div>
            </div>
          </button>
        </li>
      </div>
    );
}
