import React, { lazy, Suspense } from 'react';

import {
	Switch,
	Route
} from 'react-router-dom';

import Loading from './components/Loading/Loading';

const HomePage = lazy(() => import('./routes/HomePage'));
const FormSuccessPage = lazy(() => import('./routes/FormSuccessPage'));

const Routes = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Switch>
				<Route exact path="/" render={(props) => {
						return <HomePage {...props} />;
					}}
				/>
				<Route exact path="/form-success" render={(props) =>{
						return <FormSuccessPage {...props} />;
					}}
				/>
			</Switch>
		</Suspense>
	)
}

export default Routes;
