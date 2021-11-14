const URL = 'http://localhost:8080/CA2_war_exploded/api';

const apiUtils = () => {

    const getUrl = () => {
        return URL;
    }

    return {
        getUrl,
    }
}

export default apiUtils();