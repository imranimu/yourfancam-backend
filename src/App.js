import { STATE_LOGIN} from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NoMatch from "./pages/404Page"
import './styles/reduction.scss';

/*
## Dashboard Basic Pages
**********************************/
const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
const AthletesCoachesPage = React.lazy(() => import('pages/AthletesCoaches'));
const FansPage = React.lazy(() => import('pages/Fans'));
const VideosPage = React.lazy(() => import('pages/Videos'));
const PackagesPage = React.lazy(() => import('pages/Packages'));
const CategoriesPage = React.lazy(() => import('pages/categories/Categories'));
const categoryEdit = React.lazy(() => import('pages/categories/categoryEdit'));


/*
## Admin Reports Pages
*********************************/
const VideosReport = React.lazy(() => import('pages/reports/VideosReport'));
const RevenueReport = React.lazy(() => import('pages/reports/RevenueReport'));
const TransactionReport = React.lazy(() => import('pages/reports/TransactionReport'));
const AthletesCoachesReport = React.lazy(() => import('pages/reports/AthletesCoachesReport'));
const VisitorsReport = React.lazy(() => import('pages/reports/VisitorsReport'));
 
/*
## Admin Settings Pages
*********************************/
const Email = React.lazy(() => import('pages/settings/Email')); 
const Content = React.lazy(() => import('pages/settings/Content'));
const Seo = React.lazy(() => import('pages/settings/Seo'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
}; 

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch> 
            <LayoutRoute
              exact
              path="/"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/dashboard" component={DashboardPage} />                          
                <Route exact path="/athletes" component={AthletesCoachesPage} />               
                <Route exact path="/fans" component={FansPage} />               
                <Route exact path="/videos" component={VideosPage} />               
                <Route exact path="/packages" component={PackagesPage} />               
                <Route exact path="/categories" component={CategoriesPage} />  
                <Route exact path="/category-edit/:id" component={categoryEdit} />             
                 
                <Route exact path="/report/videos" component={VideosReport} />
                <Route exact path="/report/revenue" component={RevenueReport} />
                <Route exact path="/report/transaction" component={TransactionReport} />
                <Route exact path="/report/athletes" component={AthletesCoachesReport} />    
                <Route exact path="/report/visitors" component={VisitorsReport} />    

                <Route exact path="/settings/email" component={Email} />
                <Route exact path="/settings/content" component={Content} />
                <Route exact path="/settings/seo" component={Seo} />  

                <Route path="/404" component={NoMatch} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App); 