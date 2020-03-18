import React from "react"
import * as T from "../../answers/Types";
import * as Icons from "react-icons/fa"
import StandardCard from "../../answers/overridableComponents/resultCards/cardContainers/StandardCard"

const <%= verticalKey %>Card = ({ profile, ...props }) => (
  <StandardCard title={profile.name} url={profile.website} {...props}>
    {profile.description}
  </StandardCard>
)

const <%= verticalKey %>Config: T.VerticalConfig = {
  title: "<%= verticalKey %>",
  icon: Icons.FaCircle,
  card: <%= verticalKey %>Card
};

export default <%= verticalKey %>Config;
