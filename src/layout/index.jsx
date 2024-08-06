import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { StyledLayout } from './styles/index'

export const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  )
}
