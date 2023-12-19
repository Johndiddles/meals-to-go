import { View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: ${(props) => props.theme.sizes[0]};
`;

export const RestaurantCardCover = styled(RestaurantCard.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

// export const Address = styled(Text)`
//   font-family: ${(props) => props.theme.fonts.body};
//   font-size: ${(props) => props.theme.fontSizes.caption};
// `;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
