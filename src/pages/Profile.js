import React from "react";
import DefaultLayout from "../components/Layout";

// 프로필에서 사용 할 데이터
const profileData = {
  velopert: {
    name: "김슬비",
    description: "Frontend Engineer",
  },
  homer: {
    name: "호머 심슨",
    description: "심슨 가족에 나오는 아빠 역활",
  },
};

function Profile({ match }) {
  // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.
  const { username } = match.params;
  console.log(username);
  const profile = profileData[username];
  if (!profile) {
    return <div>노존재</div>;
  }
  return (
    <DefaultLayout>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </DefaultLayout>
  );
}

export default Profile;
