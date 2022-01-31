import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase/index.js";
import { query, collection, getDocs, where } from "firebase/firestore";
import CONFIG from "../config.json";
import "./dashboard.css";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState({});
  const [userImage, setUserImage] = useState('');
  const navigate = useNavigate();

  const onImageChange = (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    console.log(url);
    setUserImage(url)
  }

  const fetchUserData = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setUserData(data);
      setUserImage(data.profile ? data.profile : CONFIG.defaultUserImage)
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    return fetchUserData();
  }, [user, loading, fetchUserData, navigate]);

  return (
    <main className="dashboard-main">
      <div className="w-100 wrapper">
        <div className="container user-info card-body">
          <div className="d-flex">
            <div>
              <div className="user-img-hold">
                <img src={userImage} alt="Profile Picture" width="100%" />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="dashboard__container">
        Logged in as
         <div>{userData.name}</div>
         <div>{userData?.email}</div>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
       </div>
    </main>
  );
}
export default Dashboard;