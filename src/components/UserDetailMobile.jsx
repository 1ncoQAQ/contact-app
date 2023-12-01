export default function UserDetailMobile({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
  userPhoto,
  onReturn,
  active
}) {
  if (id != undefined && active) {
    return (
      <div className={"userDetailContainer-mobile"}>
        <div className="returnButtonContainer">
          <button className="returnButton" onClick={() => onReturn()}>Back</button>
        </div>
        <div className="baseInfo">
          <div className="briefPhoto">
            {userPhoto ? <img src={userPhoto} /> : <p>{name[0]}</p>}
          </div>
          <p>
            {name}
            {" (" + username + ")"}
          </p>
        </div>
        <div>
          Phone: <div className="detail">{phone}</div>
        </div>
        <div>
          E-Mail: <div className="detail">{email}</div>
        </div>
        <div>
          Website: <div className="detail">{website}</div>
        </div>
        <div>
          Address:{" "}
          <div className="detail">
            {address.street}, {address.city}
          </div>
        </div>
        <div>
          Company: <div className="detail">{company.name}</div>
        </div>
      </div>
    );
  } else return null;
}
