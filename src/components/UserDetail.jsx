export default function UserDetail({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
  userPhoto,
}) {
  if (id != undefined) {
    return (
        <div className={"userDetailContainer"}>
        <div className="baseInfo">
          <div className="briefPhoto">
            {userPhoto ? <img src={userPhoto} /> : <p>{name[0]}</p>}
          </div>
          <p>
            {name}
            {" (" + username + ")"}
          </p>
        </div>
        <div>Phone: <div className="detail">{phone}</div></div>
        <div>E-Mail: <div className="detail">{email}</div></div>
        <div>Website: <div className="detail">{website}</div></div>
        <div>
            Address: <div className="detail">{address.street}, {address.city}</div>
        </div>
        <div>Company: <div className="detail">{company.name}</div></div>
      </div>
    );
  } else return null;
}
