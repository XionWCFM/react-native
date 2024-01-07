import styled from 'styled-components/native';

interface ClickableProps {
  backgroundColor?: string;
  width?: string;
  height?: string;
  onPress: () => void;
}

export const StyledTouchable = styled.TouchableOpacity<ClickableProps>`
  background-color: ${(props) => props.backgroundColor || '#d62525'};
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '50px'};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

interface ClickableComponentProps extends ClickableProps {
  children?: React.ReactNode;
}

export const ClickableComponent = ({
  children,
  ...props
}: ClickableComponentProps) => {
  return <StyledTouchable {...props}>{children}</StyledTouchable>;
};
