import { default as Link } from "next/link";
import { PrismicLink, PrismicText } from "@prismicio/react";

const MenuLinks = ({ links = [] }) => {
  if (links) {
    return links.map((Links, index) => {
      return (
        <li className="mr-6 inline-block" key={index}>
          <PrismicLink field={Links.link}>
            <PrismicText field={Links.label} />
          </PrismicLink>
        </li>
      );
    });
  }
};

const Navigation = ({ navigation }) =>
  navigation ? <MenuLinks links={navigation.data.links} /> : null;

export default Navigation;