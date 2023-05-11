import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;
const LANGUAGE = 'es-MX'; // esto viene de redux

/** Todas las peliculas */
export const getAllMovies = (page? : number) => {
    return axios.get(`${API_HOST}/movie/upcoming`, {
        params: {
            api_key: API_KEY,
            language: LANGUAGE,
            sort_by : 'popularity.desc',
            include_video :'true',
            page:`${page || 1}`
            
        }
    })
};
/* https://api.themoviedb.org/3/movie/popular?api_key=c0eb1797786b137cb049b0bf32b9aa62&language=en-US */
export const getPopularMovies = (page? : number ) => {
    return axios.get(`${API_HOST}/movie/popular?`, {
        params: {
            api_key: API_KEY,
            language: LANGUAGE,
            include_video :'true',
            page:`${page || 1}`
        }
        })
    };

    //https://api.themoviedb.org/3/tv/latest?api_key=<<api_key>>&language=en-US

    export const getPopularTv = (page? : number) => {
        return axios.get(`${API_HOST}/tv/popular?`, {
            params: {
                api_key: API_KEY,
                language: LANGUAGE,
                include_video :'true',
                page:`${page || 1}`
            }
            })
    }

    export const getTopRatedMovies = (page? : number ) => {
        return axios.get(`${API_HOST}/movie/top_rated?`, {
            params: {
                api_key: API_KEY,
                language: LANGUAGE,
                sort_by : 'popularity.desc',
                include_video :'true',
                page:`${page || 1}`
            }
            })
        };
        export const getTopRatedTv = (page? : number) => {
            return axios.get(`${API_HOST}/tv/top_rated?`, {
                params: {
                    api_key: API_KEY,
                    language: LANGUAGE,
                    include_video :'true',
                    page:`${page || 1}`
                }
                })
        }
    


export const getSimilarMovies = (id? : string) => {
    return axios.get(`${API_HOST}/movie/${id}/similar?`, {
        params: {
            language: LANGUAGE,
            api_key: API_KEY,
            include_video :true
        }
    })
}

export const getNowPlaying = (page? : number) => {
    return axios.get(`${API_HOST}/movie/now_playing`, {
        params: {
            api_key: API_KEY,
            language: LANGUAGE,
            sort_by : 'popularity.desc',
            include_video :'true',
            page:`${page || 1}`
            
        }
    })
};

export const getMovieById = (id?:string) => {
    return axios.get(`${API_HOST}/movie/${id}?`, {
        params: {
            language: LANGUAGE,
            api_key: API_KEY,
            include_video :true
        }
    })
};

//https://api.themoviedb.org/3/tv/1416?api_key=c0eb1797786b137cb049b0bf32b9aa62&language=en-US&page=1
export const getTvById = (id?:number) => {
    return axios.get(`${API_HOST}/tv/${id}?`, {
        params: {
            language: LANGUAGE,
            api_key: API_KEY,
            include_video :true
        }
    })
}; 

export const getVideo = (id?:string) => {
    return axios.get(`${API_HOST}/movie/${id}/videos?`, {
        params: {
            api_key: API_KEY,
        }
    })
};

export const getImagesById = (id?:string) =>{
    return axios.get(`${API_HOST}/movie/${id}/images?`, {
        params: {
            api_key: API_KEY,
        }
    })
};

export const getMovieCredits = (id?:string) => {
    return axios.get(`${API_HOST}/movie/${id}/credits?`, {
        params: {
            api_key: API_KEY,
        }
    })
};


// https://api.themoviedb.org/3/person/1283?api_key=c0eb1797786b137cb049b0bf32b9aa62&language=en-US
export const getActorInfo  = (id?:string) => {
    return axios.get(`${API_HOST}/person/${id}?`, {
        params: {
            api_key: API_KEY,
            /* language: LANGUAGE, */
        }
    })
};

export const searchMovies = (name?:string, page?:number) => {
    return axios.get(`${API_HOST}/search/movie?`, {
        params: {
            api_key: API_KEY,
            language: LANGUAGE,
            query: `${name}`,
            page:`${page || 1}`
        }
    })
};
export const searchTv = (name?:string,page?:number) => {
    return axios.get(`${API_HOST}/search/tv?`, {
        params: {
            api_key: API_KEY,
            language: LANGUAGE,
            query: `${name}`,
            page:`${page || 1}`
        }
    })
};


export const getCategories = () => {
    return axios.get(`${API_HOST}/genre/movie/list?`, {
        params: {
            api_key: API_KEY,
            language: LANGUAGE,
            
        }
    })
};

export const getTvCategories = () => {
    return axios.get(`${API_HOST}/genre/tv/list?`, {
        params: {
            api_key: API_KEY,
            language: LANGUAGE,
        }
    })
}; 

//https://api.themoviedb.org/3/movie/804150/reviews?api_key=c0eb1797786b137cb049b0bf32b9aa62&language=en-US&page=1
export const getComments = (id?:string, page?:number) => {
    return axios.get(`${API_HOST}/movie/${id}/reviews?`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page:`${page || 1}`
            
        }
    })
};


//discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc
export const getByCategories = (id?:string, page?:number) => {
    return axios.get(`${API_HOST}/discover/movie?with_genres=${id}`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page:`${page || 1}`
            
        }
    })
};


export const getTvByCategories = (id?:string, page?:number) => {
    return axios.get(`${API_HOST}/discover/tv?with_genres=${id}`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page:`${page || 1}`
            
        }
    })
};

//  https://api.themoviedb.org/3/tv/1416/season/1? api_key=c0eb1797786b137cb049b0bf32b9aa62&language=en-US&page=1
export const getSeason = (tvId?:string,season?:string) => {
    return axios.get(`${API_HOST}/tv/${tvId}/season/${season}`, {
        params: {
            api_key: API_KEY,
            language: 'es-MX',    
        }
    })
}



