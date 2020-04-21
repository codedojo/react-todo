import React from 'react';
import {
    Checkbox,
    Layout,
    List, ListItem, ListItemText, ListItemGraphic,
    TextField,
    Typography
} from 'mdc-react';

import './index.scss';

export default function TodoDetails({ todo }) {
    return (
        <aside className="todo-details">
            <Layout row>
                <TextField
                    label="Название"
                    value={todo.title}
                    onChange={() => {}}
                />
            </Layout>

            <section className="todo-steps">
                <Typography variant="subtitle2" noMargin>Шаги</Typography>

                {todo.steps && todo.steps.length > 0 &&
                    <List className="todo-step-list" dense>
                        {todo.steps.map((step, index) =>
                            <ListItem key={index}>
                                <ListItemGraphic>
                                    <Checkbox
                                        checked={step.completed}
                                    />
                                </ListItemGraphic>

                                <ListItemText>{step.title}</ListItemText>
                            </ListItem>    
                        )}
                    </List>
                }
            </section>
        </aside>
    );
}