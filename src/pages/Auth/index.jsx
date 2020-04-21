import React, { useState } from 'react';
import {
    Button,
    Card, CardSection, CardActions,
    Layout,
    TextField,
    Typography
} from 'mdc-react';

import useStore from '../../hooks/store';

import './index.scss';

export default function AuthPage() {
    const { actions } = useStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    function handleLogInButtonClick() {
        if (email && password) {
            actions.logInUser(email, password)
                .catch(error => setError(error.message));
        }
    }

    function handleRegisterButtonClick() {
        if (email && password) {
            actions.registerUser(email, password)
                .catch(error => setError(error.message));
        }
    }

    return (
        <Layout id="login-page" className="page">
            <Typography variant="headline2">React Todo</Typography>

            {error &&
                <Typography>{error}</Typography>
            }

            <Card outlined>
                <CardSection primary>
                    <TextField
                        type="email"
                        value={email}
                        label="Электронная почта"
                        required
                        fullWidth
                        onChange={setEmail}
                    />

                    <TextField
                        type="password"
                        label="Пароль"
                        value={password}
                        required
                        fullWidth
                        onChange={setPassword}
                    />
                </CardSection>

                <CardActions>
                    <Button onClick={handleLogInButtonClick}>Войти</Button>
                    <Button onClick={handleRegisterButtonClick}>Зарегистрироваться</Button>
                </CardActions>
            </Card>
        </Layout>
    );
}