/**
 * interface TvShow : {
 *  poster_path:string;
    name:string;
    overview:string;
    first_air_date:string;
    id:number;
 }
 */
export interface TvShow {
    poster_path:string;
    name:string;
    overview:string;
    first_air_date:string;
    id:number;
    backdrop_path : string;
    genres :[{
        id : number;
        name :string;
    }],
    episode_run_time: string;
    seasons : [{
        air_date : string,
        episode_count: number,
        id: number,
        name: string,
        overview: string,
        poster_path: string,
        season_number: number
    }],
    networks:[{
            id: number,
            logo_path: string,
            name: string,
            origin_country: string
        }]

}