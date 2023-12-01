import { useState, useEffect } from "react";

import "./App.css";

import UserBrief from "./components/UserBrief";
import Header from "./components/Header";
import UserDetail from "./components/UserDetail";
import UserDetailMobile from "./components/UserDetailMobile";

function App() {
  const userContactURL = "https://jsonplaceholder.typicode.com/users";
  const [userData, setUserData] = useState([]);
  const [selctedUser, setSelectedUser] = useState();
  const [searchingWord, setSearchingWord] = useState("");
  const [toggleMobileOverlay, SetOverlay] = useState(false);

  const fetchData = () => {
    return fetch(userContactURL)
      .then((response) => response.json())
      .then((json) => setUserData(json));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function HandleSelect(id) {
    setSelectedUser(id - 1);
  }

  function handleOverlay(bool) {
    SetOverlay(bool);
    console.log(toggleMobileOverlay);
  }


  return (
    <>
      <Header />
      <main>
        <div className="userBar">
          <div className="searchBarContainer">
            <input
              className="searchBar"
              type="text"
              onChange={(event) => setSearchingWord(event.target.value)}
              placeholder="Search"
              value={searchingWord}
            />
          </div>
          <div className="userBarList">
            {userData.map((object) => {
              return (
                <UserBrief
                  searching={searchingWord}
                  onSelect={() => HandleSelect(object.id)}
                  onSelect2 = {() => handleOverlay(true)}
                  key={object.id}
                  {...object}
                />
              );
            })}
          </div>
        </div>
        <div className={"userDetailContainer"}>
          <UserDetail {...userData[selctedUser]} />
          <UserDetailMobile active={toggleMobileOverlay} onReturn={() => handleOverlay(false)}  {...userData[selctedUser]} />
        </div>
      </main>
    </>
  );
}

export default App;
