import {lazy, Suspense} from 'react';

import {Route, Switch} from 'react-router-dom';

import Loading from './components/Loading/Loading';

const IndexPage = lazy(() => import('./routes/index'));
const FormSuccessPage = lazy(() => import('./routes/form-success'));
const NotFoundPage = lazy(() => import('./routes/404'));

const Routes = () => {
	return (
		<Suspense fallback={<Loading/>}>
			<Switch>
				<Route
					exact
					path="/"
					render={(props) => {
						return <IndexPage {...props} />;
					}}
				/>
				<Route
					exact
					path="/form-success"
					render={(props) => {
						return <FormSuccessPage {...props} />;
					}}
				/>
				<Route
					render={(props) => {
						return <NotFoundPage {...props} />;
					}}
				/>
			</Switch>
		</Suspense>
	);
};

export default Routes;
