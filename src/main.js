import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App';
import BaseCard from './components/ui/BaseCard';
import BaseButton from './components/ui/BaseButton';
import BaseBadge from './components/ui/BaseBadge';
import BaseSpinner from './components/ui/BaseSpinner';
import BaseDialog from './components/ui/BaseDialog';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.mount('#app');




/*
*
Data Model
1. Coaches
    - List of coaches
    - [data] Coach
        - id
        - first name
        - last name
        - description
        - rate
    - [mutations]
        - register
        - set/load coaches
2. Requests
    - List of requests
    - [data] Request
        - coach id
        - message
        - email
    - [mutations]
        - contact coach
        - set/load requests

Layout/Design
1. Routes
    - /coaches => CoachesList
    - /coaches/:id => CoachDetails
    - /register => CoachRegistration
    - /contact => ContactCoach
    - /requests => RequestsReceived
2. Components
    - Header
        - Coaches and Register links
    - CoachesList
        - Filter
        - List of Coach Items
            - Coach Details page with Contact button
            - Contact button goes to another page where we can submit a form
    - RequestsLists
        - List of Requests with Email and message


*
*/