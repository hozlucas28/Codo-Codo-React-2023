import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'

const GeneralLayout = ({ children }) => {
	return (
		<main>
			<Navbar />
			{children}
			<Footer />
		</main>
	)
}

export default GeneralLayout
