import Controller from '@ember/controller';

export default Controller.extend({
    firstPage: null,
    lastPage: false,
    
    actions: {
        previousPage(url) {
            if (url !== 0) {
                window.location.assign(`/people/${url}`)
                this.set('firstPage', false);
            } else {
                this.set('firstPage', true);
            }
        }
        ,
        nextPage(url) {
            if (url !== 0) {
                window.location.assign(`/people/${url}`)
                this.set('firstPage', false);
            }
            else {
                this.set('lastPage', true);
            }
        },
    }
});
