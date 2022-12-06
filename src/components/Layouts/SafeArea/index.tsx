import { styled } from 'twin.macro'

const StyledContainer = styled.div`
  margin-top: 93px;
`
interface SafeAreaProps {
  tag?: React.ElementType
}
export const SafeArea: React.FC<SafeAreaProps> = ({ tag = 'div', children, ...rest }) => {
  return (
    <StyledContainer as={tag} {...rest}>
      {children}
    </StyledContainer>
  )
}
