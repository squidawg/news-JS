import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '5bf92f35254f44989550b77aef23e9b3',
        });
    }
}

export default AppLoader;
