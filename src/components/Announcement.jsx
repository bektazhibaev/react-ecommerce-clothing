import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  background-color: teal;
  color: white;
  font-size: 14px;
  font-weight: bold;
`

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders over $50!
    </Container>
  )
}

export default Announcement
