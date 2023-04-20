interface Genre {
	id?: number;
	name: string;
}

interface ProductionCompany {
	id: number;
	logo_path?: string;
	name: string;
	origin_country: string;
}

interface ProductionCountry {
	iso_3166_1: string;
	name: string;
}

interface SpokenLanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
}

interface Cast {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path?: string;
	cast_id?: number;
	character: string;
	credit_id: string;
	order: number;
}

interface Crew {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path?: string;
	credit_id: string;
	department: string;
	job: string;
}

interface Credits {
	cast: Cast[];
	crew: Crew[];
}

interface ReleaseDate {
	iso_3166_1: string;
	release_date: {
		certification: string;
	}[];
}

interface GuestStar {
	character: string;
	credit_id: string;
	order: number;
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path?: string;
}

export interface Episode {
	id: number;
	name: string;
	overview: string;
	vote_average: number;
	vote_count: number;
	air_date: string;
	episode_number: number;
	production_code: string;
	runtime: number;
	season_number: number;
	show_id: number;
	still_path: string;
	crew: Crew[];
	guest_stars: GuestStar[];
}

export interface Season {
	_id: string;
	air_date: string;
	episode_count?: number;
	episodes?: Episode[];
	id: number;
	name: string;
	overview: string;
	poster_path: string;
	season_number: number;
}

interface CreatedBy {
	id: number;
	credit_id: string;
	name: string;
	gender: number;
	profile_path: string;
}

export interface Media {
	title?: string;
	name?: string;
	adult: boolean;
	backdrop_path: string;
	genres: Genre[];
	homepage?: string;
	id: number;
	original_language: string;
	original_title?: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline?: string;
	vote_average: number;
	vote_count: number;
	credits: Credits;
	media_type: string;
	release_date?: string;
	release_dates?: {
		results: ReleaseDate[];
	};
	runtime?: number;
	number_of_episodes?: number;
	number_of_seasons?: number;
	seasons?: Season[];
	first_air_date?: string;
	created_by?: CreatedBy[];
}

export interface MediaHeader {
	backdrop_path?: string;
	id?: number;
	title?: string;
	name?: string;
}
