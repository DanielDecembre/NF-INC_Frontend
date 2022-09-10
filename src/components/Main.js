// componrnt libraries
import { Route } from 'react-router-dom';

//page components
import Index from '../pages/Index';
import Show from '../pages/Show';

const Main = (props) => {
    return(
        <main>
            <Route exact path="/">
                <Index />
            </Route>
            <Route path="/nf-inc/:id" render={(renderprops) => (
                <Show {...renderprops}/> 
            )} />
        </main>
    );
};

export default Main;