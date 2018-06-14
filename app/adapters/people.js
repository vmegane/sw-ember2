import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://swapi.co',
    namespace: 'api',
    pathForType() {
        return 'people';
    }
});
