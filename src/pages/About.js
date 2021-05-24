import React from "react";
import qs from "qs";
import DefaultLayout from "../components/Layout";

function About({ location }) {
  console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(query);
  // 문자열로 비교
  const detail = query.detail === "true";

  // 만약 숫자로 받아온다면 parseInt로
  // parseInt는 문자열을 숫자로 변환, 두번째 10을 넣어준 것은, 10진수로 숫자를 받아오겠다는 의미
  parseInt(query.id, 10);

  return (
    <DefaultLayout>
      <h1>소개</h1>
      {detail && <p>detail값이 true입니다.</p>}
    </DefaultLayout>
  );
}

export default About;
