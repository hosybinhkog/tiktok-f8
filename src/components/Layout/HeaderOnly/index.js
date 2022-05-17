import Header from './Header'

const HeaderOnly = ( { children }) => {
	return (
		<div className="container">
			<Header />
			<div className="content">
				{children}
			</div>
		</div>
	)
}

export default HeaderOnly
