export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        }

        const response = await fetch(`https://vue-http-demo-69dce-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        });

        // const responseData = await response.json();

        if (!response.ok) {
            // error ...
        }

        context.commit('registerCoach', {
            ...coachData,
            id: userId
        });
    },
    async loadCoaches(context, payload) {
        if (!payload.forceRefresh && !context.getters.showUpdate) {
            return;
        }

        const response = await fetch(`https://vue-http-demo-69dce-default-rtdb.firebaseio.com/coaches.json`);

        const responseData = await response.json();

        if (!response.ok) {
            // error ...
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        const coaches = [];

        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName.val,
                lastName: responseData[key].lastName.val,
                description: responseData[key].description.val,
                hourlyRate: responseData[key].hourlyRate.val,
                areas: responseData[key].areas.val
            }

            coaches.push(coach);
        }

        context.commit('setCoaches', coaches);
        context.commit('setFetchTimestamp');
    }
}