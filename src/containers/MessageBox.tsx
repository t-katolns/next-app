import { MessageTextField } from "components/atoms/MessageTextField";
import { Profile } from "components/organisms/User/Profile";
import { UserHeader } from "components/organisms/User/UserHeader";
import React, { FunctionComponent } from "react";

type Props = {
  name: string;
  job: string;
  company: string;
  area: string;
  reviewCount: number;
  careerStatuse: string;
  purpose: string;
  img: string;
};

export const MessageBox: FunctionComponent<Props> = ({
  name,
  job,
  company,
  area,
  reviewCount,
  careerStatuse,
  purpose,
  img,
}) => {
  const introducrion =
    "ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ";
  const education = {
    name: "早稲田大学",
    department: "工学系・修士",
    endYear: "2019年",
  };
  const interests = [
    "エンジニア",
    "じんじ",
    "aaaaa",
    "プロダクトマネジメント",
    "パーソナルトレーニング",
  ];

  return (
    <>
      <div style={{ overflow: "auto", padding: 16 }}>
        <UserHeader
          name={name}
          job={job}
          company={company}
          area={area}
          reviewCount={reviewCount}
          careerStatuse={careerStatuse}
          purpose={purpose}
          img={img}
        />
        <Profile
          introduction={introducrion}
          interests={interests}
          works={"エンジニア"}
          education={education}
          likes={"aaaaaaaaa"}
          chips={"プログラミング"}
          languages={"日本語"}
        />
      </div>
      <MessageTextField />
    </>
  );
};
