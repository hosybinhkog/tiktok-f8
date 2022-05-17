import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '~/components/Layout'


import { publicRoutes } from '~/routes'

function App() {
  return (
    <Router>
      	<Routes>
     		{
			publicRoutes.map( (route,index) => {
				let Layout = DefaultLayout
				if(Layout === null){
					Layout = Fragment
				}else if(route.layout){
					Layout = route.layout
				}
				const Element=route.component
				return <Route 
					key={index} 
					path={route.path} 
					element={
						<Layout>
							<Element />
						</Layout>
					}	 
					/> 
			})
		}
	</Routes>
    </Router>
  );
}

export default App;
