import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '9ac7575b21634f12828a001d6d439972',
        });
    }
}

export default AppLoader;
