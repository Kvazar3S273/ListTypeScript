import * as UserActions from '../../components/auth/Login/action';
import * as RegisterActions from '../../components/auth/Register/action';

const actions = {
    ...UserActions,
    ...RegisterActions
}

export default actions;