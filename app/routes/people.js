import Route from '@ember/routing/route';
import RSVP from 'rsvp';



export default Route.extend({
    // queryParams: {
    //     page: {
    //       refreshModel: true
    //     }
    //   },
    model(params) {

    return RSVP.hash({
        poepleList: fetch(`https://swapi.co/api/people/?page=${params.page_id}`)    
        .then((response) => response.json())
            .then((response) => response)

            .then(function (response) {
                console.log(response);
                let newResponse = response.results;
                for (let i = 0; i < newResponse.length; i++) {
                    newResponse[i].url = newResponse[i].url.slice(28).replace('/', '')
                }
                console.log('new', newResponse)
                return newResponse
            })
        ,

        pageIds:
            fetch(`https://swapi.co/api/people/?page=${params.page_id}`)
                .then((response) => response.json())
                .then(function (response) {
                    let ids = {
                        nextPage: '',
                        prevPage: ''
                    };

                    if (response.next !== null) { ids.nextPage = response.next.slice(34) } else { ids.nextPage = 0}
                    if (response.previous !== null) { ids.prevPage = response.previous.slice(34) } else {ids.prevPage = 0}

                    return ids
                })

    });
}

});
