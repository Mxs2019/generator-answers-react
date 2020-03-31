import React from "react";
import * as Icons from "react-icons/fa";
import { Cards, Types } from "../../answers";

const CustomCard = ({ profile, ...props }) => {
  const ctas: Types.CallToAction[] = [
    {
        label: "Call Now",
        icon: Icons.FaPhone,
        url: `tel://${profile.mainPhone}`,
      },
      {
        label: "View Website",
        icon: Icons.FaStar,
        url: `tel://${profile.website}`,
      },
    ];

  return (
    <Cards.Containers.Standard
      {...props}
      title={profile.name}
      url={profile.website}
      image={profile.headshot.url}
      callToActions={ctas}
    >
      <div className="text-sm">{profile.description}</div>
      <div className="text-colors-grayText text-sm">
        <div>{profile.mainPhone}</div>
        <div>{profile.address.line1}</div>
        <div>
          {profile.address.city}, {profile.address.region}
        </div>
      </div>
    </Cards.Containers.Standard>
  );
};

const <%= verticalKey %>Config: Types.VerticalConfig = {
  title: "providers",
  icon: Icons.FaBookMedical,
  card: CustomCard,
  universalSectionShowMap: false,
  sortOptions: []
};

export default <%= verticalKey %>Config;
