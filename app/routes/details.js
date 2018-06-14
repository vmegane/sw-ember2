import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    actions: {
        goBack() {
            window.history.back();
        }
    },
    model(params) {

        return RSVP.hash({
            personDetails: 
            fetch(`https://swapi.co/api/people/${params.person_id}`)
                .then(response => response.json()),

            personFilms:
            fetch(`https://swapi.co/api/people/${params.person_id}`)
            .then(response => response.json())
            .then(function (response) {
                let filmArray = response.films; //array of urls
                let promises = filmArray.map(url => fetch(url))
                return Promise.all(promises)
                    .then(results => {  
                        return Promise
                            .all(results.map(result => result.json()))
                            .then(results => results)
                     })
                })
        });
}
});


