// Import page template elements
import { DefaultContent as BannerContent } from "../../components/usa-banner/content";
import TitleContent from "../../components/usa-site-title/usa-site-title.json";
import HeaderContent from "../../components/usa-header/usa-header.json";
import { DefaultContent as IdentifierContent } from "../../components/usa-identifier/content";
import FooterContent from "../../components/usa-footer/usa-footer.json";

// Import page content
import Component from "./usa-docs.twig";

export default {
  title: "Pages/Documentation Page",
  args: {
    ...BannerContent,
    ...TitleContent,
    ...HeaderContent,
    ...IdentifierContent,
    ...FooterContent,
  },
};

export const DocumentationPage = (args) =>
  Component({
    ...args,
  });
