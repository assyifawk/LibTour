import React from "react";

const Profile = ({ profile, classname }) => {
  return (
    <div className={`grid gap-[2px] text-gray-800 ${classname}`}>
      {profile.map((item, index) => (
        <div
          key={index}
          className="flex gap-1 text-xs md:text-sm font-normal leading-snug"
        >
          <div className="w-32">{item.key}</div>
          <div className="w-1">:</div>
          <div className="flex-1">{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
