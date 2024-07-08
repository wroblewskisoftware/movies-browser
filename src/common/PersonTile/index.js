import { ReactComponent as PlaceholderIcon } from "../../assets/placeholderActorIcon.svg";
import { ImagePlaceholder } from "../ImagePlaceholder/styled";
import { StyledPersonTile, Image, PersonName, Role } from "./styled";

export const PersonTile = ({ poster, personName, role }) => (
  <StyledPersonTile>
    {poster ? (
      <Image src={poster} alt="This person photo" />
    ) : (
      <ImagePlaceholder $forPerson>
        <PlaceholderIcon />
      </ImagePlaceholder>
    )}
    <PersonName>{personName}</PersonName>
    {role && <Role>{role}</Role>}
  </StyledPersonTile>
);
