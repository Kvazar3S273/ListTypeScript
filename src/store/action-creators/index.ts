import * as UserActions from '../../components/auth/Login/action';
import * as RegisterActions from '../../components/auth/Register/action';
import * as ProductActions from '../../components/products/actions';
const actions = {
    ...UserActions,
    ...RegisterActions,
    ...ProductActions

}

export default actions;