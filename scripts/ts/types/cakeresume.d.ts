export namespace __APP_INITIAL_REDUX_STATE__ {

    
    
 export namespace props {
    
    export namespace jobSearch {
        export namespace searchState {
            const query_1: string;
            export { query_1 as query };
            export const page: string;
            export namespace range {
                export namespace salary_range {
                    export const min: string;
                }
            }
            export namespace refinementList {
                export const lang_name: string[];
                export const salary_type: string;
            }
        }
        export namespace jobResultsState {
            export namespace content {
                export const _rawResults: (
                    | {
                          hits: (
                              | {
                                    title: string;
                                    requirements: string;
                                    path: string;
                                    tag_list: string[];
                                    location_list: string[];
                                    unique_impressions_count: number;
                                    search_rank: number;
                                    created_at: string;
                                    expired_at: string;
                                    work_experience_list: any[];
                                    job_function_list: any[];
                                    category: string;
                                    job_type: string;
                                    seniority_level: string;
                                    aasm_state: string;
                                    sponsored: any;
                                    signing_bonus: number;
                                    salary_type: string;
                                    salary_currency: string;
                                    number_of_openings: number;
                                    lang: string;
                                    profession: string;
                                    remote: any;
                                    number_of_management: any;
                                    description_plain_text: string;
                                    requirements_plain_text: string;
                                    salary_min: number;
                                    salary_max: number;
                                    salary_range: number[];
                                    salary_score: number;
                                    lang_name: string;
                                    content_updated_at: number;
                                    noindex: boolean;
                                    page: {
                                        name: string;
                                        path: string;
                                        address: string;
                                        country: string;
                                        unique_impressions_count: number;
                                        search_rank: number;
                                        created_at: string;
                                        number_of_employees: string;
                                        aasm_state: string;
                                        featured: boolean;
                                        geo_street_address: string;
                                        geo_city: string;
                                        geo_state_name: string;
                                        geo_state_code: string;
                                        geo_zip: string;
                                        noindex: boolean;
                                        sector: any;
                                        labels: any[];
                                        last_active_at_by_week: number;
                                        content_updated_at: number;
                                        geo_region_l: string;
                                        logo: {
                                            tiny: string;
                                            thumb: string;
                                            medium: string;
                                            large: string;
                                        };
                                        cover_image: {
                                            small_3_1: string;
                                            medium_3_1: string;
                                            large: string;
                                        };
                                    };
                                    fresh_score: number;
                                    unique_impressions_count_score: number;
                                    up_votes_score: number;
                                    job_applications_count_score: number;
                                    objectID: string;
                                    _snippetResult: {
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                        };
                                    };
                                    _highlightResult: {
                                        title: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        path: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                            fullyHighlighted?: undefined;
                                        };
                                        tag_list: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        }[];
                                        category: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        job_type: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        seniority_level: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        profession: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        page: {
                                            name: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            path: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            address: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                        };
                                    };
                                }
                              | {
                                    title: string;
                                    requirements: string;
                                    path: string;
                                    tag_list: string[];
                                    location_list: string[];
                                    unique_impressions_count: number;
                                    search_rank: number;
                                    created_at: string;
                                    expired_at: string;
                                    work_experience_list: any[];
                                    job_function_list: any[];
                                    category: string;
                                    job_type: string;
                                    seniority_level: string;
                                    aasm_state: string;
                                    sponsored: any;
                                    signing_bonus: number;
                                    salary_type: string;
                                    salary_currency: string;
                                    number_of_openings: number;
                                    lang: string;
                                    profession: string;
                                    remote: any;
                                    number_of_management: any;
                                    description_plain_text: string;
                                    requirements_plain_text: string;
                                    salary_min: number;
                                    salary_max: number;
                                    salary_range: number[];
                                    salary_score: number;
                                    lang_name: string;
                                    content_updated_at: number;
                                    noindex: boolean;
                                    page: {
                                        name: string;
                                        path: string;
                                        address: string;
                                        country: string;
                                        unique_impressions_count: number;
                                        search_rank: number;
                                        created_at: string;
                                        number_of_employees: string;
                                        aasm_state: string;
                                        featured: boolean;
                                        geo_street_address: string;
                                        geo_city: string;
                                        geo_state_name: string;
                                        geo_state_code: string;
                                        geo_zip: string;
                                        noindex: boolean;
                                        sector: string;
                                        labels: any[];
                                        last_active_at_by_week: number;
                                        content_updated_at: number;
                                        geo_region_l: string;
                                        logo: {
                                            tiny: string;
                                            thumb: string;
                                            medium: string;
                                            large: string;
                                        };
                                        cover_image: {
                                            small_3_1: string;
                                            medium_3_1: string;
                                            large: string;
                                        };
                                    };
                                    fresh_score: number;
                                    unique_impressions_count_score: number;
                                    up_votes_score: number;
                                    job_applications_count_score: number;
                                    objectID: string;
                                    _snippetResult: {
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                        };
                                    };
                                    _highlightResult: {
                                        title: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        path: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        tag_list: (
                                            | {
                                                  value: string;
                                                  matchLevel: string;
                                                  matchedWords: any[];
                                                  fullyHighlighted?: undefined;
                                              }
                                            | {
                                                  value: string;
                                                  matchLevel: string;
                                                  fullyHighlighted: boolean;
                                                  matchedWords: string[];
                                              }
                                        )[];
                                        category: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        job_type: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        seniority_level: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        profession: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                            fullyHighlighted?: undefined;
                                        };
                                        page: {
                                            name: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            path: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            address: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                        };
                                    };
                                }
                              | {
                                    title: string;
                                    requirements: string;
                                    path: string;
                                    tag_list: string[];
                                    location_list: string[];
                                    unique_impressions_count: number;
                                    search_rank: number;
                                    created_at: string;
                                    expired_at: string;
                                    work_experience_list: any[];
                                    job_function_list: any[];
                                    category: string;
                                    job_type: string;
                                    seniority_level: string;
                                    aasm_state: string;
                                    sponsored: any;
                                    signing_bonus: number;
                                    salary_type: string;
                                    salary_currency: string;
                                    number_of_openings: number;
                                    lang: string;
                                    profession: string;
                                    remote: any;
                                    number_of_management: any;
                                    description_plain_text: string;
                                    requirements_plain_text: string;
                                    salary_min: number;
                                    salary_max: number;
                                    salary_range: number[];
                                    salary_score: number;
                                    lang_name: string;
                                    content_updated_at: number;
                                    noindex: boolean;
                                    page: {
                                        name: string;
                                        path: string;
                                        address: string;
                                        country: string;
                                        unique_impressions_count: number;
                                        search_rank: number;
                                        created_at: string;
                                        number_of_employees: string;
                                        aasm_state: string;
                                        featured: boolean;
                                        geo_street_address: string;
                                        geo_city: string;
                                        geo_state_name: string;
                                        geo_state_code: string;
                                        geo_zip: string;
                                        noindex: boolean;
                                        sector: string;
                                        labels: any[];
                                        last_active_at_by_week: number;
                                        content_updated_at: number;
                                        geo_region_l: string;
                                        logo: {
                                            tiny: string;
                                            thumb: string;
                                            medium: string;
                                            large: string;
                                        };
                                        cover_image: {
                                            small_3_1: string;
                                            medium_3_1: string;
                                            large: string;
                                        };
                                    };
                                    fresh_score: number;
                                    unique_impressions_count_score: number;
                                    up_votes_score: number;
                                    job_applications_count_score: number;
                                    objectID: string;
                                    _snippetResult: {
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                        };
                                    };
                                    _highlightResult: {
                                        title: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        path: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                            fullyHighlighted?: undefined;
                                        };
                                        tag_list: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        }[];
                                        category: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        job_type: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        seniority_level: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        profession: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                            fullyHighlighted?: undefined;
                                        };
                                        page: {
                                            name: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            path: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            address: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                        };
                                    };
                                }
                              | {
                                    title: string;
                                    requirements: string;
                                    path: string;
                                    tag_list: string[];
                                    location_list: string[];
                                    unique_impressions_count: number;
                                    search_rank: number;
                                    created_at: string;
                                    expired_at: string;
                                    work_experience_list: string[];
                                    job_function_list: string[];
                                    category: string;
                                    job_type: string;
                                    seniority_level: string;
                                    aasm_state: string;
                                    sponsored: any;
                                    signing_bonus: number;
                                    salary_type: string;
                                    salary_currency: string;
                                    number_of_openings: number;
                                    lang: string;
                                    profession: string;
                                    remote: string;
                                    number_of_management: string;
                                    description_plain_text: string;
                                    requirements_plain_text: string;
                                    salary_min: number;
                                    salary_max: number;
                                    salary_range: number[];
                                    salary_score: number;
                                    lang_name: string;
                                    content_updated_at: number;
                                    noindex: boolean;
                                    page: {
                                        name: string;
                                        path: string;
                                        address: string;
                                        country: string;
                                        unique_impressions_count: number;
                                        search_rank: number;
                                        created_at: string;
                                        number_of_employees: string;
                                        aasm_state: string;
                                        featured: boolean;
                                        geo_street_address: string;
                                        geo_city: string;
                                        geo_state_name: string;
                                        geo_state_code: string;
                                        geo_zip: string;
                                        noindex: boolean;
                                        sector: string;
                                        labels: string[];
                                        last_active_at_by_week: number;
                                        content_updated_at: number;
                                        geo_region_l: string;
                                        logo: {
                                            tiny: string;
                                            thumb: string;
                                            medium: string;
                                            large: string;
                                        };
                                        cover_image: {
                                            small_3_1: string;
                                            medium_3_1: string;
                                            large: string;
                                        };
                                    };
                                    fresh_score: number;
                                    unique_impressions_count_score: number;
                                    up_votes_score: number;
                                    job_applications_count_score: number;
                                    objectID: string;
                                    _snippetResult: {
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                        };
                                    };
                                    _highlightResult: {
                                        title: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        path: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        tag_list: (
                                            | {
                                                  value: string;
                                                  matchLevel: string;
                                                  matchedWords: any[];
                                                  fullyHighlighted?: undefined;
                                              }
                                            | {
                                                  value: string;
                                                  matchLevel: string;
                                                  fullyHighlighted: boolean;
                                                  matchedWords: string[];
                                              }
                                        )[];
                                        category: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        job_type: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        seniority_level: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        profession: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        page: {
                                            name: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            path: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            address: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                        };
                                    };
                                }
                              | {
                                    title: string;
                                    requirements: string;
                                    path: string;
                                    tag_list: string[];
                                    location_list: string[];
                                    unique_impressions_count: number;
                                    search_rank: number;
                                    created_at: string;
                                    expired_at: string;
                                    work_experience_list: any[];
                                    job_function_list: any[];
                                    category: string;
                                    job_type: string;
                                    seniority_level: string;
                                    aasm_state: string;
                                    sponsored: any;
                                    signing_bonus: number;
                                    salary_type: string;
                                    salary_currency: string;
                                    number_of_openings: number;
                                    lang: string;
                                    profession: string;
                                    remote: string;
                                    number_of_management: string;
                                    description_plain_text: string;
                                    requirements_plain_text: string;
                                    salary_min: number;
                                    salary_max: number;
                                    salary_range: number[];
                                    salary_score: number;
                                    lang_name: string;
                                    content_updated_at: number;
                                    noindex: boolean;
                                    page: {
                                        name: string;
                                        path: string;
                                        address: string;
                                        country: string;
                                        unique_impressions_count: number;
                                        search_rank: number;
                                        created_at: string;
                                        number_of_employees: string;
                                        aasm_state: string;
                                        featured: boolean;
                                        geo_street_address: any;
                                        geo_city: any;
                                        geo_state_name: any;
                                        geo_state_code: any;
                                        geo_zip: any;
                                        noindex: boolean;
                                        sector: string;
                                        labels: any[];
                                        last_active_at_by_week: number;
                                        content_updated_at: number;
                                        geo_region_l: string;
                                        logo: {
                                            tiny: string;
                                            thumb: string;
                                            medium: string;
                                            large: string;
                                        };
                                        cover_image: {
                                            small_3_1: string;
                                            medium_3_1: string;
                                            large: string;
                                        };
                                    };
                                    fresh_score: number;
                                    unique_impressions_count_score: number;
                                    up_votes_score: number;
                                    job_applications_count_score: number;
                                    objectID: string;
                                    _snippetResult: {
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                        };
                                    };
                                    _highlightResult: {
                                        title: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        path: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        tag_list: (
                                            | {
                                                  value: string;
                                                  matchLevel: string;
                                                  matchedWords: any[];
                                                  fullyHighlighted?: undefined;
                                              }
                                            | {
                                                  value: string;
                                                  matchLevel: string;
                                                  fullyHighlighted: boolean;
                                                  matchedWords: string[];
                                              }
                                        )[];
                                        category: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        job_type: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        seniority_level: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        profession: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                            fullyHighlighted?: undefined;
                                        };
                                        page: {
                                            name: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            path: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            address: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                        };
                                    };
                                }
                              | {
                                    title: string;
                                    requirements: string;
                                    path: string;
                                    tag_list: string[];
                                    location_list: string[];
                                    unique_impressions_count: number;
                                    search_rank: number;
                                    created_at: string;
                                    expired_at: string;
                                    work_experience_list: any[];
                                    job_function_list: any[];
                                    category: string;
                                    job_type: string;
                                    seniority_level: string;
                                    aasm_state: string;
                                    sponsored: any;
                                    signing_bonus: number;
                                    salary_type: string;
                                    salary_currency: string;
                                    number_of_openings: number;
                                    lang: string;
                                    profession: string;
                                    remote: string;
                                    number_of_management: string;
                                    description_plain_text: string;
                                    requirements_plain_text: string;
                                    salary_min: number;
                                    salary_max: number;
                                    salary_range: number[];
                                    salary_score: number;
                                    lang_name: string;
                                    content_updated_at: number;
                                    noindex: boolean;
                                    page: {
                                        name: string;
                                        path: string;
                                        address: string;
                                        country: string;
                                        unique_impressions_count: number;
                                        search_rank: number;
                                        created_at: string;
                                        number_of_employees: string;
                                        aasm_state: string;
                                        featured: boolean;
                                        geo_street_address: string;
                                        geo_city: string;
                                        geo_state_name: string;
                                        geo_state_code: string;
                                        geo_zip: string;
                                        noindex: boolean;
                                        sector: any;
                                        labels: any[];
                                        last_active_at_by_week: number;
                                        content_updated_at: number;
                                        geo_region_l: string;
                                        logo: {
                                            tiny: string;
                                            thumb: string;
                                            medium: string;
                                            large: string;
                                        };
                                        cover_image: {
                                            small_3_1: string;
                                            medium_3_1: string;
                                            large: string;
                                        };
                                    };
                                    fresh_score: number;
                                    unique_impressions_count_score: number;
                                    up_votes_score: number;
                                    job_applications_count_score: number;
                                    objectID: string;
                                    _snippetResult: {
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                        };
                                    };
                                    _highlightResult: {
                                        title: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        path: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        tag_list: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        }[];
                                        category: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        job_type: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        seniority_level: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        profession: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                            fullyHighlighted?: undefined;
                                        };
                                        page: {
                                            name: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            path: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            address: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                        };
                                    };
                                }
                          )[];
                          nbHits: number;
                          page: number;
                          nbPages: number;
                          hitsPerPage: number;
                          facets: {
                              remote: {
                                  no_remote_work: number;
                                  optional_remote_work: number;
                                  partial_remote_work: number;
                                  full_remote_work: number;
                              };
                              job_type: {
                                  full_time: number;
                                  contract: number;
                              };
                              lang_name: {
                                  English: number;
                                  Chinese?: undefined;
                              };
                              profession: {
                                  'tech_project-product-management': number;
                                  'marketing-communications_marketing': number;
                                  'tech_data-engineering': number;
                                  'tech_front-end-development': number;
                                  'tech_full-stack-development': number;
                                  tech_other: number;
                                  'business_business-development': number;
                                  'tech_android-development': number;
                                  'tech_back-end-development': number;
                                  'tech_quality-assurance-testing': number;
                                  'tech_research-r-d': number;
                                  business_sales: number;
                                  'consulting_it-project-management': number;
                                  'customer-service_customer-service-support': number;
                                  'customer-service_customer-success': number;
                                  design_other: number;
                                  'industry_manufacturing-technician': number;
                                  'marketing-communications_marketing-development': number;
                                  'tech_data-science': number;
                              };
                              'page.labels': {
                                  '2020_tech_career_fair': number;
                              };
                              salary_type: {
                                  per_year: number;
                                  per_month?: undefined;
                              };
                              salary_range: {
                                  0: number;
                                  420000: number;
                                  540000: number;
                                  600000: number;
                                  650000: number;
                                  700000: number;
                                  800000: number;
                                  850000: number;
                                  900000: number;
                                  1000000: number;
                                  1100000: number;
                                  1200000: number;
                                  1300000: number;
                                  1379000: number;
                                  1400000: number;
                                  1500000: number;
                                  1600000: number;
                                  1700000: number;
                                  1800000: number;
                                  2000000: number;
                                  2200000: number;
                                  2500000: number;
                                  3000000: number;
                                  1?: undefined;
                                  100?: undefined;
                                  150?: undefined;
                                  14000?: undefined;
                                  60000?: undefined;
                                  62000?: undefined;
                                  65000?: undefined;
                                  75000?: undefined;
                                  120000?: undefined;
                                  130000?: undefined;
                                  330000?: undefined;
                                  360000?: undefined;
                                  480000?: undefined;
                                  500000?: undefined;
                                  560000?: undefined;
                                  640000?: undefined;
                                  770000?: undefined;
                                  798000?: undefined;
                                  832000?: undefined;
                                  840000?: undefined;
                                  952000?: undefined;
                              };
                              location_list: {
                                  台北: number;
                                  台灣: number;
                                  信義區: number;
                                  台北市: number;
                                  松山區: number;
                                  Taiwan: number;
                                  中正區: number;
                                  南港軟體園區: number;
                                  Taipei: number;
                                  捷運南港展覽館站: number;
                                  France: number;
                                  'Taipei City': number;
                                  內湖科技園區: number;
                                  台北市中山區樂群二路189號6樓之一: number;
                                  台北市南港區: number;
                                  新北市: number;
                                  新台五路一段: number;
                                  汐科火車站: number;
                                  法國: number;
                                  '97\u865F': number;
                                  UTOWN: number;
                                  中華路: number;
                                  信義安和站: number;
                                  內湖區: number;
                                  內湖區瑞光路: number;
                                  南港區: number;
                                  古亭站: number;
                                  台北市信義區: number;
                                  台北市大安區: number;
                                  台北市松高路1號7樓: number;
                                  台南市: number;
                                  台南市新市區: number;
                                  大安區: number;
                                  小巨蛋: number;
                                  捷運中山國中站: number;
                                  新竹: number;
                                  桃園市中壢區: number;
                                  汐止: number;
                                  汐止區: number;
                                  汐止科學園區: number;
                                  泰國: number;
                                  遠雄: number;
                              };
                              salary_currency: {
                                  TWD: number;
                              };
                              seniority_level: {
                                  mid_senior_level: number;
                                  entry_level: number;
                                  director: number;
                                  associate: number;
                              };
                              number_of_management: {
                                  none: number;
                                  one_five: number;
                                  five_ten: number;
                                  not_specified: number;
                              };
                              'page.number_of_employees': {
                                  '51_200': number;
                                  '11_50': number;
                                  '501_1000': number;
                                  '201_500': number;
                                  '1001_5000': number;
                                  '5001_': number;
                                  '1_10': number;
                              };
                          };
                          facets_stats: {
                              salary_range: {
                                  min: number;
                                  max: number;
                                  avg: number;
                                  sum: number;
                              };
                          };
                          exhaustiveFacetsCount: boolean;
                          exhaustiveNbHits: boolean;
                          query: string;
                          params: string;
                          index: string;
                          queryID: string;
                          processingTimeMS: number;
                      }
                    | {
                          hits: {
                              objectID: string;
                              _snippetResult: {
                                  description_plain_text: {
                                      value: string;
                                      matchLevel: string;
                                  };
                              };
                          }[];
                          nbHits: number;
                          page: number;
                          nbPages: number;
                          hitsPerPage: number;
                          facets: {
                              lang_name: {
                                  Chinese: number;
                                  English: number;
                              };
                              remote?: undefined;
                              job_type?: undefined;
                              profession?: undefined;
                              'page.labels'?: undefined;
                              salary_type?: undefined;
                              salary_range?: undefined;
                              location_list?: undefined;
                              salary_currency?: undefined;
                              seniority_level?: undefined;
                              number_of_management?: undefined;
                              'page.number_of_employees'?: undefined;
                          };
                          exhaustiveFacetsCount: boolean;
                          exhaustiveNbHits: boolean;
                          query: string;
                          params: string;
                          index: string;
                          processingTimeMS: number;
                          facets_stats?: undefined;
                          queryID?: undefined;
                      }
                    | {
                          hits: {
                              objectID: string;
                              _snippetResult: {
                                  description_plain_text: {
                                      value: string;
                                      matchLevel: string;
                                  };
                              };
                          }[];
                          nbHits: number;
                          page: number;
                          nbPages: number;
                          hitsPerPage: number;
                          facets: {
                              salary_type: {
                                  per_year: number;
                                  per_month: number;
                              };
                              remote?: undefined;
                              job_type?: undefined;
                              lang_name?: undefined;
                              profession?: undefined;
                              'page.labels'?: undefined;
                              salary_range?: undefined;
                              location_list?: undefined;
                              salary_currency?: undefined;
                              seniority_level?: undefined;
                              number_of_management?: undefined;
                              'page.number_of_employees'?: undefined;
                          };
                          exhaustiveFacetsCount: boolean;
                          exhaustiveNbHits: boolean;
                          query: string;
                          params: string;
                          index: string;
                          processingTimeMS: number;
                          facets_stats?: undefined;
                          queryID?: undefined;
                      }
                    | {
                          hits: {
                              objectID: string;
                              _snippetResult: {
                                  description_plain_text: {
                                      value: string;
                                      matchLevel: string;
                                  };
                              };
                          }[];
                          nbHits: number;
                          page: number;
                          nbPages: number;
                          hitsPerPage: number;
                          facets: {
                              salary_range: {
                                  0: number;
                                  1: number;
                                  100: number;
                                  150: number;
                                  14000: number;
                                  60000: number;
                                  62000: number;
                                  65000: number;
                                  75000: number;
                                  120000: number;
                                  130000: number;
                                  330000: number;
                                  360000: number;
                                  420000: number;
                                  480000: number;
                                  500000: number;
                                  540000: number;
                                  560000: number;
                                  600000: number;
                                  640000: number;
                                  650000: number;
                                  700000: number;
                                  770000: number;
                                  798000: number;
                                  800000: number;
                                  832000: number;
                                  840000: number;
                                  850000: number;
                                  900000: number;
                                  952000: number;
                                  1000000: number;
                                  1100000: number;
                                  1200000: number;
                                  1300000: number;
                                  1379000: number;
                                  1400000: number;
                                  1500000: number;
                                  1600000: number;
                                  1700000: number;
                                  1800000: number;
                                  2000000: number;
                                  2200000: number;
                                  2500000: number;
                                  3000000: number;
                              };
                              remote?: undefined;
                              job_type?: undefined;
                              lang_name?: undefined;
                              profession?: undefined;
                              'page.labels'?: undefined;
                              salary_type?: undefined;
                              location_list?: undefined;
                              salary_currency?: undefined;
                              seniority_level?: undefined;
                              number_of_management?: undefined;
                              'page.number_of_employees'?: undefined;
                          };
                          facets_stats: {
                              salary_range: {
                                  min: number;
                                  max: number;
                                  avg: number;
                                  sum: number;
                              };
                          };
                          exhaustiveFacetsCount: boolean;
                          exhaustiveNbHits: boolean;
                          query: string;
                          params: string;
                          index: string;
                          processingTimeMS: number;
                          queryID?: undefined;
                      }
                )[];
                const query_2: string;
                export { query_2 as query };
                export const parsedQuery: any;
                export const hits: (
                    | {
                          title: string;
                          requirements: string;
                          path: string;
                          tag_list: string[];
                          location_list: string[];
                          unique_impressions_count: number;
                          search_rank: number;
                          created_at: string;
                          expired_at: string;
                          work_experience_list: any[];
                          job_function_list: any[];
                          category: string;
                          job_type: string;
                          seniority_level: string;
                          aasm_state: string;
                          sponsored: any;
                          signing_bonus: number;
                          salary_type: string;
                          salary_currency: string;
                          number_of_openings: number;
                          lang: string;
                          profession: string;
                          remote: any;
                          number_of_management: any;
                          description_plain_text: string;
                          requirements_plain_text: string;
                          salary_min: number;
                          salary_max: number;
                          salary_range: number[];
                          salary_score: number;
                          lang_name: string;
                          content_updated_at: number;
                          noindex: boolean;
                          page: {
                              name: string;
                              path: string;
                              address: string;
                              country: string;
                              unique_impressions_count: number;
                              search_rank: number;
                              created_at: string;
                              number_of_employees: string;
                              aasm_state: string;
                              featured: boolean;
                              geo_street_address: string;
                              geo_city: string;
                              geo_state_name: string;
                              geo_state_code: string;
                              geo_zip: string;
                              noindex: boolean;
                              sector: any;
                              labels: any[];
                              last_active_at_by_week: number;
                              content_updated_at: number;
                              geo_region_l: string;
                              logo: {
                                  tiny: string;
                                  thumb: string;
                                  medium: string;
                                  large: string;
                              };
                              cover_image: {
                                  small_3_1: string;
                                  medium_3_1: string;
                                  large: string;
                              };
                          };
                          fresh_score: number;
                          unique_impressions_count_score: number;
                          up_votes_score: number;
                          job_applications_count_score: number;
                          objectID: string;
                          _snippetResult: {
                              description_plain_text: {
                                  value: string;
                                  matchLevel: string;
                              };
                          };
                          _highlightResult: {
                              title: {
                                  value: string;
                                  matchLevel: string;
                                  fullyHighlighted: boolean;
                                  matchedWords: string[];
                              };
                              path: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                                  fullyHighlighted?: undefined;
                              };
                              tag_list: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              }[];
                              category: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              };
                              job_type: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              };
                              seniority_level: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              };
                              profession: {
                                  value: string;
                                  matchLevel: string;
                                  fullyHighlighted: boolean;
                                  matchedWords: string[];
                              };
                              description_plain_text: {
                                  value: string;
                                  matchLevel: string;
                                  fullyHighlighted: boolean;
                                  matchedWords: string[];
                              };
                              page: {
                                  name: {
                                      value: string;
                                      matchLevel: string;
                                      matchedWords: any[];
                                  };
                                  path: {
                                      value: string;
                                      matchLevel: string;
                                      matchedWords: any[];
                                  };
                                  address: {
                                      value: string;
                                      matchLevel: string;
                                      matchedWords: any[];
                                  };
                              };
                          };
                      }
                    | {
                          title: string;
                          requirements: string;
                          path: string;
                          tag_list: string[];
                          location_list: string[];
                          unique_impressions_count: number;
                          search_rank: number;
                          created_at: string;
                          expired_at: string;
                          work_experience_list: any[];
                          job_function_list: any[];
                          category: string;
                          job_type: string;
                          seniority_level: string;
                          aasm_state: string;
                          sponsored: any;
                          signing_bonus: number;
                          salary_type: string;
                          salary_currency: string;
                          number_of_openings: number;
                          lang: string;
                          profession: string;
                          remote: any;
                          number_of_management: any;
                          description_plain_text: string;
                          requirements_plain_text: string;
                          salary_min: number;
                          salary_max: number;
                          salary_range: number[];
                          salary_score: number;
                          lang_name: string;
                          content_updated_at: number;
                          noindex: boolean;
                          page: {
                              name: string;
                              path: string;
                              address: string;
                              country: string;
                              unique_impressions_count: number;
                              search_rank: number;
                              created_at: string;
                              number_of_employees: string;
                              aasm_state: string;
                              featured: boolean;
                              geo_street_address: string;
                              geo_city: string;
                              geo_state_name: string;
                              geo_state_code: string;
                              geo_zip: string;
                              noindex: boolean;
                              sector: string;
                              labels: any[];
                              last_active_at_by_week: number;
                              content_updated_at: number;
                              geo_region_l: string;
                              logo: {
                                  tiny: string;
                                  thumb: string;
                                  medium: string;
                                  large: string;
                              };
                              cover_image: {
                                  small_3_1: string;
                                  medium_3_1: string;
                                  large: string;
                              };
                          };
                          fresh_score: number;
                          unique_impressions_count_score: number;
                          up_votes_score: number;
                          job_applications_count_score: number;
                          objectID: string;
                          _snippetResult: {
                              description_plain_text: {
                                  value: string;
                                  matchLevel: string;
                              };
                          };
                          _highlightResult: {
                              title: {
                                  value: string;
                                  matchLevel: string;
                                  fullyHighlighted: boolean;
                                  matchedWords: string[];
                              };
                              path: {
                                  value: string;
                                  matchLevel: string;
                                  fullyHighlighted: boolean;
                                  matchedWords: string[];
                              };
                              tag_list: (
                                  | {
                                        value: string;
                                        matchLevel: string;
                                        matchedWords: any[];
                                        fullyHighlighted?: undefined;
                                    }
                                  | {
                                        value: string;
                                        matchLevel: string;
                                        fullyHighlighted: boolean;
                                        matchedWords: string[];
                                    }
                              )[];
                              category: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              };
                              job_type: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              };
                              seniority_level: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              };
                              profession: {
                                  value: string;
                                  matchLevel: string;
                                  fullyHighlighted: boolean;
                                  matchedWords: string[];
                              };
                              description_plain_text: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                                  fullyHighlighted?: undefined;
                              };
                              page: {
                                  name: {
                                      value: string;
                                      matchLevel: string;
                                      matchedWords: any[];
                                  };
                                  path: {
                                      value: string;
                                      matchLevel: string;
                                      matchedWords: any[];
                                  };
                                  address: {
                                      value: string;
                                      matchLevel: string;
                                      matchedWords: any[];
                                  };
                              };
                          };
                      }
                    | {
                          title: string;
                          requirements: string;
                          path: string;
                          tag_list: string[];
                          location_list: string[];
                          unique_impressions_count: number;
                          search_rank: number;
                          created_at: string;
                          expired_at: string;
                          work_experience_list: any[];
                          job_function_list: any[];
                          category: string;
                          job_type: string;
                          seniority_level: string;
                          aasm_state: string;
                          sponsored: any;
                          signing_bonus: number;
                          salary_type: string;
                          salary_currency: string;
                          number_of_openings: number;
                          lang: string;
                          profession: string;
                          remote: any;
                          number_of_management: any;
                          description_plain_text: string;
                          requirements_plain_text: string;
                          salary_min: number;
                          salary_max: number;
                          salary_range: number[];
                          salary_score: number;
                          lang_name: string;
                          content_updated_at: number;
                          noindex: boolean;
                          page: {
                              name: string;
                              path: string;
                              address: string;
                              country: string;
                              unique_impressions_count: number;
                              search_rank: number;
                              created_at: string;
                              number_of_employees: string;
                              aasm_state: string;
                              featured: boolean;
                              geo_street_address: string;
                              geo_city: string;
                              geo_state_name: string;
                              geo_state_code: string;
                              geo_zip: string;
                              noindex: boolean;
                              sector: string;
                              labels: any[];
                              last_active_at_by_week: number;
                              content_updated_at: number;
                              geo_region_l: string;
                              logo: {
                                  tiny: string;
                                  thumb: string;
                                  medium: string;
                                  large: string;
                              };
                              cover_image: {
                                  small_3_1: string;
                                  medium_3_1: string;
                                  large: string;
                              };
                          };
                          fresh_score: number;
                          unique_impressions_count_score: number;
                          up_votes_score: number;
                          job_applications_count_score: number;
                          objectID: string;
                          _snippetResult: {
                              description_plain_text: {
                                  value: string;
                                  matchLevel: string;
                              };
                          };
                          _highlightResult: {
                              title: {
                                  value: string;
                                  matchLevel: string;
                                  fullyHighlighted: boolean;
                                  matchedWords: string[];
                              };
                              path: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                                  fullyHighlighted?: undefined;
                              };
                              tag_list: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              }[];
                              category: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              };
                              job_type: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              };
                              seniority_level: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              };
                              profession: {
                                  value: string;
                                  matchLevel: string;
                                  fullyHighlighted: boolean;
                                  matchedWords: string[];
                              };
                              description_plain_text: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                                  fullyHighlighted?: undefined;
                              };
                              page: {
                                  name: {
                                      value: string;
                                      matchLevel: string;
                                      matchedWords: any[];
                                  };
                                  path: {
                                      value: string;
                                      matchLevel: string;
                                      matchedWords: any[];
                                  };
                                  address: {
                                      value: string;
                                      matchLevel: string;
                                      matchedWords: any[];
                                  };
                              };
                          };
                      }
                    | {
                          title: string;
                          requirements: string;
                          path: string;
                          tag_list: string[];
                          location_list: string[];
                          unique_impressions_count: number;
                          search_rank: number;
                          created_at: string;
                          expired_at: string;
                          work_experience_list: string[];
                          job_function_list: string[];
                          category: string;
                          job_type: string;
                          seniority_level: string;
                          aasm_state: string;
                          sponsored: any;
                          signing_bonus: number;
                          salary_type: string;
                          salary_currency: string;
                          number_of_openings: number;
                          lang: string;
                          profession: string;
                          remote: string;
                          number_of_management: string;
                          description_plain_text: string;
                          requirements_plain_text: string;
                          salary_min: number;
                          salary_max: number;
                          salary_range: number[];
                          salary_score: number;
                          lang_name: string;
                          content_updated_at: number;
                          noindex: boolean;
                          page: {
                              name: string;
                              path: string;
                              address: string;
                              country: string;
                              unique_impressions_count: number;
                              search_rank: number;
                              created_at: string;
                              number_of_employees: string;
                              aasm_state: string;
                              featured: boolean;
                              geo_street_address: string;
                              geo_city: string;
                              geo_state_name: string;
                              geo_state_code: string;
                              geo_zip: string;
                              noindex: boolean;
                              sector: string;
                              labels: string[];
                              last_active_at_by_week: number;
                              content_updated_at: number;
                              geo_region_l: string;
                              logo: {
                                  tiny: string;
                                  thumb: string;
                                  medium: string;
                                  large: string;
                              };
                              cover_image: {
                                  small_3_1: string;
                                  medium_3_1: string;
                                  large: string;
                              };
                          };
                          fresh_score: number;
                          unique_impressions_count_score: number;
                          up_votes_score: number;
                          job_applications_count_score: number;
                          objectID: string;
                          _snippetResult: {
                              description_plain_text: {
                                  value: string;
                                  matchLevel: string;
                              };
                          };
                          _highlightResult: {
                              title: {
                                  value: string;
                                  matchLevel: string;
                                  fullyHighlighted: boolean;
                                  matchedWords: string[];
                              };
                              path: {
                                  value: string;
                                  matchLevel: string;
                                  fullyHighlighted: boolean;
                                  matchedWords: string[];
                              };
                              tag_list: (
                                  | {
                                        value: string;
                                        matchLevel: string;
                                        matchedWords: any[];
                                        fullyHighlighted?: undefined;
                                    }
                                  | {
                                        value: string;
                                        matchLevel: string;
                                        fullyHighlighted: boolean;
                                        matchedWords: string[];
                                    }
                              )[];
                              category: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              };
                              job_type: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              };
                              seniority_level: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              };
                              profession: {
                                  value: string;
                                  matchLevel: string;
                                  fullyHighlighted: boolean;
                                  matchedWords: string[];
                              };
                              description_plain_text: {
                                  value: string;
                                  matchLevel: string;
                                  fullyHighlighted: boolean;
                                  matchedWords: string[];
                              };
                              page: {
                                  name: {
                                      value: string;
                                      matchLevel: string;
                                      matchedWords: any[];
                                  };
                                  path: {
                                      value: string;
                                      matchLevel: string;
                                      matchedWords: any[];
                                  };
                                  address: {
                                      value: string;
                                      matchLevel: string;
                                      matchedWords: any[];
                                  };
                              };
                          };
                      }
                    | {
                          title: string;
                          requirements: string;
                          path: string;
                          tag_list: string[];
                          location_list: string[];
                          unique_impressions_count: number;
                          search_rank: number;
                          created_at: string;
                          expired_at: string;
                          work_experience_list: any[];
                          job_function_list: any[];
                          category: string;
                          job_type: string;
                          seniority_level: string;
                          aasm_state: string;
                          sponsored: any;
                          signing_bonus: number;
                          salary_type: string;
                          salary_currency: string;
                          number_of_openings: number;
                          lang: string;
                          profession: string;
                          remote: string;
                          number_of_management: string;
                          description_plain_text: string;
                          requirements_plain_text: string;
                          salary_min: number;
                          salary_max: number;
                          salary_range: number[];
                          salary_score: number;
                          lang_name: string;
                          content_updated_at: number;
                          noindex: boolean;
                          page: {
                              name: string;
                              path: string;
                              address: string;
                              country: string;
                              unique_impressions_count: number;
                              search_rank: number;
                              created_at: string;
                              number_of_employees: string;
                              aasm_state: string;
                              featured: boolean;
                              geo_street_address: any;
                              geo_city: any;
                              geo_state_name: any;
                              geo_state_code: any;
                              geo_zip: any;
                              noindex: boolean;
                              sector: string;
                              labels: any[];
                              last_active_at_by_week: number;
                              content_updated_at: number;
                              geo_region_l: string;
                              logo: {
                                  tiny: string;
                                  thumb: string;
                                  medium: string;
                                  large: string;
                              };
                              cover_image: {
                                  small_3_1: string;
                                  medium_3_1: string;
                                  large: string;
                              };
                          };
                          fresh_score: number;
                          unique_impressions_count_score: number;
                          up_votes_score: number;
                          job_applications_count_score: number;
                          objectID: string;
                          _snippetResult: {
                              description_plain_text: {
                                  value: string;
                                  matchLevel: string;
                              };
                          };
                          _highlightResult: {
                              title: {
                                  value: string;
                                  matchLevel: string;
                                  fullyHighlighted: boolean;
                                  matchedWords: string[];
                              };
                              path: {
                                  value: string;
                                  matchLevel: string;
                                  fullyHighlighted: boolean;
                                  matchedWords: string[];
                              };
                              tag_list: (
                                  | {
                                        value: string;
                                        matchLevel: string;
                                        matchedWords: any[];
                                        fullyHighlighted?: undefined;
                                    }
                                  | {
                                        value: string;
                                        matchLevel: string;
                                        fullyHighlighted: boolean;
                                        matchedWords: string[];
                                    }
                              )[];
                              category: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              };
                              job_type: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              };
                              seniority_level: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              };
                              profession: {
                                  value: string;
                                  matchLevel: string;
                                  fullyHighlighted: boolean;
                                  matchedWords: string[];
                              };
                              description_plain_text: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                                  fullyHighlighted?: undefined;
                              };
                              page: {
                                  name: {
                                      value: string;
                                      matchLevel: string;
                                      matchedWords: any[];
                                  };
                                  path: {
                                      value: string;
                                      matchLevel: string;
                                      matchedWords: any[];
                                  };
                                  address: {
                                      value: string;
                                      matchLevel: string;
                                      matchedWords: any[];
                                  };
                              };
                          };
                      }
                    | {
                          title: string;
                          requirements: string;
                          path: string;
                          tag_list: string[];
                          location_list: string[];
                          unique_impressions_count: number;
                          search_rank: number;
                          created_at: string;
                          expired_at: string;
                          work_experience_list: any[];
                          job_function_list: any[];
                          category: string;
                          job_type: string;
                          seniority_level: string;
                          aasm_state: string;
                          sponsored: any;
                          signing_bonus: number;
                          salary_type: string;
                          salary_currency: string;
                          number_of_openings: number;
                          lang: string;
                          profession: string;
                          remote: string;
                          number_of_management: string;
                          description_plain_text: string;
                          requirements_plain_text: string;
                          salary_min: number;
                          salary_max: number;
                          salary_range: number[];
                          salary_score: number;
                          lang_name: string;
                          content_updated_at: number;
                          noindex: boolean;
                          page: {
                              name: string;
                              path: string;
                              address: string;
                              country: string;
                              unique_impressions_count: number;
                              search_rank: number;
                              created_at: string;
                              number_of_employees: string;
                              aasm_state: string;
                              featured: boolean;
                              geo_street_address: string;
                              geo_city: string;
                              geo_state_name: string;
                              geo_state_code: string;
                              geo_zip: string;
                              noindex: boolean;
                              sector: any;
                              labels: any[];
                              last_active_at_by_week: number;
                              content_updated_at: number;
                              geo_region_l: string;
                              logo: {
                                  tiny: string;
                                  thumb: string;
                                  medium: string;
                                  large: string;
                              };
                              cover_image: {
                                  small_3_1: string;
                                  medium_3_1: string;
                                  large: string;
                              };
                          };
                          fresh_score: number;
                          unique_impressions_count_score: number;
                          up_votes_score: number;
                          job_applications_count_score: number;
                          objectID: string;
                          _snippetResult: {
                              description_plain_text: {
                                  value: string;
                                  matchLevel: string;
                              };
                          };
                          _highlightResult: {
                              title: {
                                  value: string;
                                  matchLevel: string;
                                  fullyHighlighted: boolean;
                                  matchedWords: string[];
                              };
                              path: {
                                  value: string;
                                  matchLevel: string;
                                  fullyHighlighted: boolean;
                                  matchedWords: string[];
                              };
                              tag_list: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              }[];
                              category: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              };
                              job_type: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              };
                              seniority_level: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                              };
                              profession: {
                                  value: string;
                                  matchLevel: string;
                                  fullyHighlighted: boolean;
                                  matchedWords: string[];
                              };
                              description_plain_text: {
                                  value: string;
                                  matchLevel: string;
                                  matchedWords: any[];
                                  fullyHighlighted?: undefined;
                              };
                              page: {
                                  name: {
                                      value: string;
                                      matchLevel: string;
                                      matchedWords: any[];
                                  };
                                  path: {
                                      value: string;
                                      matchLevel: string;
                                      matchedWords: any[];
                                  };
                                  address: {
                                      value: string;
                                      matchLevel: string;
                                      matchedWords: any[];
                                  };
                              };
                          };
                      }
                )[];
                export const index: string;
                export const hitsPerPage: number;
                export const nbHits: number;
                export const nbPages: number;
                const page_1: number;
                export { page_1 as page };
                export const processingTimeMS: number;
                export const aroundLatLng: any;
                export const automaticRadius: any;
                export const serverUsed: any;
                export const timeoutCounts: any;
                export const timeoutHits: any;
                export const exhaustiveFacetsCount: boolean;
                export const exhaustiveNbHits: boolean;
                export const userData: any;
                export const queryID: string;
                export const disjunctiveFacets: (
                    | {
                          name: string;
                          data: {
                              台北: number;
                              台灣: number;
                              信義區: number;
                              台北市: number;
                              松山區: number;
                              Taiwan: number;
                              中正區: number;
                              南港軟體園區: number;
                              Taipei: number;
                              捷運南港展覽館站: number;
                              France: number;
                              'Taipei City': number;
                              內湖科技園區: number;
                              台北市中山區樂群二路189號6樓之一: number;
                              台北市南港區: number;
                              新北市: number;
                              新台五路一段: number;
                              汐科火車站: number;
                              法國: number;
                              '97\u865F': number;
                              UTOWN: number;
                              中華路: number;
                              信義安和站: number;
                              內湖區: number;
                              內湖區瑞光路: number;
                              南港區: number;
                              古亭站: number;
                              台北市信義區: number;
                              台北市大安區: number;
                              台北市松高路1號7樓: number;
                              台南市: number;
                              台南市新市區: number;
                              大安區: number;
                              小巨蛋: number;
                              捷運中山國中站: number;
                              新竹: number;
                              桃園市中壢區: number;
                              汐止: number;
                              汐止區: number;
                              汐止科學園區: number;
                              泰國: number;
                              遠雄: number;
                              'tech_project-product-management'?: undefined;
                              'marketing-communications_marketing'?: undefined;
                              'tech_data-engineering'?: undefined;
                              'tech_front-end-development'?: undefined;
                              'tech_full-stack-development'?: undefined;
                              tech_other?: undefined;
                              'business_business-development'?: undefined;
                              'tech_android-development'?: undefined;
                              'tech_back-end-development'?: undefined;
                              'tech_quality-assurance-testing'?: undefined;
                              'tech_research-r-d'?: undefined;
                              business_sales?: undefined;
                              'consulting_it-project-management'?: undefined;
                              'customer-service_customer-service-support'?: undefined;
                              'customer-service_customer-success'?: undefined;
                              design_other?: undefined;
                              'industry_manufacturing-technician'?: undefined;
                              'marketing-communications_marketing-development'?: undefined;
                              'tech_data-science'?: undefined;
                              full_time?: undefined;
                              contract?: undefined;
                              mid_senior_level?: undefined;
                              entry_level?: undefined;
                              director?: undefined;
                              associate?: undefined;
                              per_year?: undefined;
                              per_month?: undefined;
                              TWD?: undefined;
                              0?: undefined;
                              1?: undefined;
                              100?: undefined;
                              150?: undefined;
                              14000?: undefined;
                              60000?: undefined;
                              62000?: undefined;
                              65000?: undefined;
                              75000?: undefined;
                              120000?: undefined;
                              130000?: undefined;
                              330000?: undefined;
                              360000?: undefined;
                              420000?: undefined;
                              480000?: undefined;
                              500000?: undefined;
                              540000?: undefined;
                              560000?: undefined;
                              600000?: undefined;
                              640000?: undefined;
                              650000?: undefined;
                              700000?: undefined;
                              770000?: undefined;
                              798000?: undefined;
                              800000?: undefined;
                              832000?: undefined;
                              840000?: undefined;
                              850000?: undefined;
                              900000?: undefined;
                              952000?: undefined;
                              1000000?: undefined;
                              1100000?: undefined;
                              1200000?: undefined;
                              1300000?: undefined;
                              1379000?: undefined;
                              1400000?: undefined;
                              1500000?: undefined;
                              1600000?: undefined;
                              1700000?: undefined;
                              1800000?: undefined;
                              2000000?: undefined;
                              2200000?: undefined;
                              2500000?: undefined;
                              3000000?: undefined;
                              none?: undefined;
                              one_five?: undefined;
                              five_ten?: undefined;
                              not_specified?: undefined;
                              no_remote_work?: undefined;
                              optional_remote_work?: undefined;
                              partial_remote_work?: undefined;
                              full_remote_work?: undefined;
                              '51_200'?: undefined;
                              '11_50'?: undefined;
                              '501_1000'?: undefined;
                              '201_500'?: undefined;
                              '1001_5000'?: undefined;
                              '5001_'?: undefined;
                              '1_10'?: undefined;
                              Chinese?: undefined;
                              English?: undefined;
                              '2020_tech_career_fair'?: undefined;
                          };
                          exhaustive: boolean;
                          stats?: undefined;
                      }
                    | {
                          name: string;
                          data: {
                              'tech_project-product-management': number;
                              'marketing-communications_marketing': number;
                              'tech_data-engineering': number;
                              'tech_front-end-development': number;
                              'tech_full-stack-development': number;
                              tech_other: number;
                              'business_business-development': number;
                              'tech_android-development': number;
                              'tech_back-end-development': number;
                              'tech_quality-assurance-testing': number;
                              'tech_research-r-d': number;
                              business_sales: number;
                              'consulting_it-project-management': number;
                              'customer-service_customer-service-support': number;
                              'customer-service_customer-success': number;
                              design_other: number;
                              'industry_manufacturing-technician': number;
                              'marketing-communications_marketing-development': number;
                              'tech_data-science': number;
                              台北?: undefined;
                              台灣?: undefined;
                              信義區?: undefined;
                              台北市?: undefined;
                              松山區?: undefined;
                              Taiwan?: undefined;
                              中正區?: undefined;
                              南港軟體園區?: undefined;
                              Taipei?: undefined;
                              捷運南港展覽館站?: undefined;
                              France?: undefined;
                              'Taipei City'?: undefined;
                              內湖科技園區?: undefined;
                              台北市中山區樂群二路189號6樓之一?: undefined;
                              台北市南港區?: undefined;
                              新北市?: undefined;
                              新台五路一段?: undefined;
                              汐科火車站?: undefined;
                              法國?: undefined;
                              '97\u865F'?: undefined;
                              UTOWN?: undefined;
                              中華路?: undefined;
                              信義安和站?: undefined;
                              內湖區?: undefined;
                              內湖區瑞光路?: undefined;
                              南港區?: undefined;
                              古亭站?: undefined;
                              台北市信義區?: undefined;
                              台北市大安區?: undefined;
                              台北市松高路1號7樓?: undefined;
                              台南市?: undefined;
                              台南市新市區?: undefined;
                              大安區?: undefined;
                              小巨蛋?: undefined;
                              捷運中山國中站?: undefined;
                              新竹?: undefined;
                              桃園市中壢區?: undefined;
                              汐止?: undefined;
                              汐止區?: undefined;
                              汐止科學園區?: undefined;
                              泰國?: undefined;
                              遠雄?: undefined;
                              full_time?: undefined;
                              contract?: undefined;
                              mid_senior_level?: undefined;
                              entry_level?: undefined;
                              director?: undefined;
                              associate?: undefined;
                              per_year?: undefined;
                              per_month?: undefined;
                              TWD?: undefined;
                              0?: undefined;
                              1?: undefined;
                              100?: undefined;
                              150?: undefined;
                              14000?: undefined;
                              60000?: undefined;
                              62000?: undefined;
                              65000?: undefined;
                              75000?: undefined;
                              120000?: undefined;
                              130000?: undefined;
                              330000?: undefined;
                              360000?: undefined;
                              420000?: undefined;
                              480000?: undefined;
                              500000?: undefined;
                              540000?: undefined;
                              560000?: undefined;
                              600000?: undefined;
                              640000?: undefined;
                              650000?: undefined;
                              700000?: undefined;
                              770000?: undefined;
                              798000?: undefined;
                              800000?: undefined;
                              832000?: undefined;
                              840000?: undefined;
                              850000?: undefined;
                              900000?: undefined;
                              952000?: undefined;
                              1000000?: undefined;
                              1100000?: undefined;
                              1200000?: undefined;
                              1300000?: undefined;
                              1379000?: undefined;
                              1400000?: undefined;
                              1500000?: undefined;
                              1600000?: undefined;
                              1700000?: undefined;
                              1800000?: undefined;
                              2000000?: undefined;
                              2200000?: undefined;
                              2500000?: undefined;
                              3000000?: undefined;
                              none?: undefined;
                              one_five?: undefined;
                              five_ten?: undefined;
                              not_specified?: undefined;
                              no_remote_work?: undefined;
                              optional_remote_work?: undefined;
                              partial_remote_work?: undefined;
                              full_remote_work?: undefined;
                              '51_200'?: undefined;
                              '11_50'?: undefined;
                              '501_1000'?: undefined;
                              '201_500'?: undefined;
                              '1001_5000'?: undefined;
                              '5001_'?: undefined;
                              '1_10'?: undefined;
                              Chinese?: undefined;
                              English?: undefined;
                              '2020_tech_career_fair'?: undefined;
                          };
                          exhaustive: boolean;
                          stats?: undefined;
                      }
                    | {
                          name: string;
                          data: {
                              full_time: number;
                              contract: number;
                              台北?: undefined;
                              台灣?: undefined;
                              信義區?: undefined;
                              台北市?: undefined;
                              松山區?: undefined;
                              Taiwan?: undefined;
                              中正區?: undefined;
                              南港軟體園區?: undefined;
                              Taipei?: undefined;
                              捷運南港展覽館站?: undefined;
                              France?: undefined;
                              'Taipei City'?: undefined;
                              內湖科技園區?: undefined;
                              台北市中山區樂群二路189號6樓之一?: undefined;
                              台北市南港區?: undefined;
                              新北市?: undefined;
                              新台五路一段?: undefined;
                              汐科火車站?: undefined;
                              法國?: undefined;
                              '97\u865F'?: undefined;
                              UTOWN?: undefined;
                              中華路?: undefined;
                              信義安和站?: undefined;
                              內湖區?: undefined;
                              內湖區瑞光路?: undefined;
                              南港區?: undefined;
                              古亭站?: undefined;
                              台北市信義區?: undefined;
                              台北市大安區?: undefined;
                              台北市松高路1號7樓?: undefined;
                              台南市?: undefined;
                              台南市新市區?: undefined;
                              大安區?: undefined;
                              小巨蛋?: undefined;
                              捷運中山國中站?: undefined;
                              新竹?: undefined;
                              桃園市中壢區?: undefined;
                              汐止?: undefined;
                              汐止區?: undefined;
                              汐止科學園區?: undefined;
                              泰國?: undefined;
                              遠雄?: undefined;
                              'tech_project-product-management'?: undefined;
                              'marketing-communications_marketing'?: undefined;
                              'tech_data-engineering'?: undefined;
                              'tech_front-end-development'?: undefined;
                              'tech_full-stack-development'?: undefined;
                              tech_other?: undefined;
                              'business_business-development'?: undefined;
                              'tech_android-development'?: undefined;
                              'tech_back-end-development'?: undefined;
                              'tech_quality-assurance-testing'?: undefined;
                              'tech_research-r-d'?: undefined;
                              business_sales?: undefined;
                              'consulting_it-project-management'?: undefined;
                              'customer-service_customer-service-support'?: undefined;
                              'customer-service_customer-success'?: undefined;
                              design_other?: undefined;
                              'industry_manufacturing-technician'?: undefined;
                              'marketing-communications_marketing-development'?: undefined;
                              'tech_data-science'?: undefined;
                              mid_senior_level?: undefined;
                              entry_level?: undefined;
                              director?: undefined;
                              associate?: undefined;
                              per_year?: undefined;
                              per_month?: undefined;
                              TWD?: undefined;
                              0?: undefined;
                              1?: undefined;
                              100?: undefined;
                              150?: undefined;
                              14000?: undefined;
                              60000?: undefined;
                              62000?: undefined;
                              65000?: undefined;
                              75000?: undefined;
                              120000?: undefined;
                              130000?: undefined;
                              330000?: undefined;
                              360000?: undefined;
                              420000?: undefined;
                              480000?: undefined;
                              500000?: undefined;
                              540000?: undefined;
                              560000?: undefined;
                              600000?: undefined;
                              640000?: undefined;
                              650000?: undefined;
                              700000?: undefined;
                              770000?: undefined;
                              798000?: undefined;
                              800000?: undefined;
                              832000?: undefined;
                              840000?: undefined;
                              850000?: undefined;
                              900000?: undefined;
                              952000?: undefined;
                              1000000?: undefined;
                              1100000?: undefined;
                              1200000?: undefined;
                              1300000?: undefined;
                              1379000?: undefined;
                              1400000?: undefined;
                              1500000?: undefined;
                              1600000?: undefined;
                              1700000?: undefined;
                              1800000?: undefined;
                              2000000?: undefined;
                              2200000?: undefined;
                              2500000?: undefined;
                              3000000?: undefined;
                              none?: undefined;
                              one_five?: undefined;
                              five_ten?: undefined;
                              not_specified?: undefined;
                              no_remote_work?: undefined;
                              optional_remote_work?: undefined;
                              partial_remote_work?: undefined;
                              full_remote_work?: undefined;
                              '51_200'?: undefined;
                              '11_50'?: undefined;
                              '501_1000'?: undefined;
                              '201_500'?: undefined;
                              '1001_5000'?: undefined;
                              '5001_'?: undefined;
                              '1_10'?: undefined;
                              Chinese?: undefined;
                              English?: undefined;
                              '2020_tech_career_fair'?: undefined;
                          };
                          exhaustive: boolean;
                          stats?: undefined;
                      }
                    | {
                          name: string;
                          data: {
                              mid_senior_level: number;
                              entry_level: number;
                              director: number;
                              associate: number;
                              台北?: undefined;
                              台灣?: undefined;
                              信義區?: undefined;
                              台北市?: undefined;
                              松山區?: undefined;
                              Taiwan?: undefined;
                              中正區?: undefined;
                              南港軟體園區?: undefined;
                              Taipei?: undefined;
                              捷運南港展覽館站?: undefined;
                              France?: undefined;
                              'Taipei City'?: undefined;
                              內湖科技園區?: undefined;
                              台北市中山區樂群二路189號6樓之一?: undefined;
                              台北市南港區?: undefined;
                              新北市?: undefined;
                              新台五路一段?: undefined;
                              汐科火車站?: undefined;
                              法國?: undefined;
                              '97\u865F'?: undefined;
                              UTOWN?: undefined;
                              中華路?: undefined;
                              信義安和站?: undefined;
                              內湖區?: undefined;
                              內湖區瑞光路?: undefined;
                              南港區?: undefined;
                              古亭站?: undefined;
                              台北市信義區?: undefined;
                              台北市大安區?: undefined;
                              台北市松高路1號7樓?: undefined;
                              台南市?: undefined;
                              台南市新市區?: undefined;
                              大安區?: undefined;
                              小巨蛋?: undefined;
                              捷運中山國中站?: undefined;
                              新竹?: undefined;
                              桃園市中壢區?: undefined;
                              汐止?: undefined;
                              汐止區?: undefined;
                              汐止科學園區?: undefined;
                              泰國?: undefined;
                              遠雄?: undefined;
                              'tech_project-product-management'?: undefined;
                              'marketing-communications_marketing'?: undefined;
                              'tech_data-engineering'?: undefined;
                              'tech_front-end-development'?: undefined;
                              'tech_full-stack-development'?: undefined;
                              tech_other?: undefined;
                              'business_business-development'?: undefined;
                              'tech_android-development'?: undefined;
                              'tech_back-end-development'?: undefined;
                              'tech_quality-assurance-testing'?: undefined;
                              'tech_research-r-d'?: undefined;
                              business_sales?: undefined;
                              'consulting_it-project-management'?: undefined;
                              'customer-service_customer-service-support'?: undefined;
                              'customer-service_customer-success'?: undefined;
                              design_other?: undefined;
                              'industry_manufacturing-technician'?: undefined;
                              'marketing-communications_marketing-development'?: undefined;
                              'tech_data-science'?: undefined;
                              full_time?: undefined;
                              contract?: undefined;
                              per_year?: undefined;
                              per_month?: undefined;
                              TWD?: undefined;
                              0?: undefined;
                              1?: undefined;
                              100?: undefined;
                              150?: undefined;
                              14000?: undefined;
                              60000?: undefined;
                              62000?: undefined;
                              65000?: undefined;
                              75000?: undefined;
                              120000?: undefined;
                              130000?: undefined;
                              330000?: undefined;
                              360000?: undefined;
                              420000?: undefined;
                              480000?: undefined;
                              500000?: undefined;
                              540000?: undefined;
                              560000?: undefined;
                              600000?: undefined;
                              640000?: undefined;
                              650000?: undefined;
                              700000?: undefined;
                              770000?: undefined;
                              798000?: undefined;
                              800000?: undefined;
                              832000?: undefined;
                              840000?: undefined;
                              850000?: undefined;
                              900000?: undefined;
                              952000?: undefined;
                              1000000?: undefined;
                              1100000?: undefined;
                              1200000?: undefined;
                              1300000?: undefined;
                              1379000?: undefined;
                              1400000?: undefined;
                              1500000?: undefined;
                              1600000?: undefined;
                              1700000?: undefined;
                              1800000?: undefined;
                              2000000?: undefined;
                              2200000?: undefined;
                              2500000?: undefined;
                              3000000?: undefined;
                              none?: undefined;
                              one_five?: undefined;
                              five_ten?: undefined;
                              not_specified?: undefined;
                              no_remote_work?: undefined;
                              optional_remote_work?: undefined;
                              partial_remote_work?: undefined;
                              full_remote_work?: undefined;
                              '51_200'?: undefined;
                              '11_50'?: undefined;
                              '501_1000'?: undefined;
                              '201_500'?: undefined;
                              '1001_5000'?: undefined;
                              '5001_'?: undefined;
                              '1_10'?: undefined;
                              Chinese?: undefined;
                              English?: undefined;
                              '2020_tech_career_fair'?: undefined;
                          };
                          exhaustive: boolean;
                          stats?: undefined;
                      }
                    | {
                          name: string;
                          data: {
                              per_year: number;
                              per_month: number;
                              台北?: undefined;
                              台灣?: undefined;
                              信義區?: undefined;
                              台北市?: undefined;
                              松山區?: undefined;
                              Taiwan?: undefined;
                              中正區?: undefined;
                              南港軟體園區?: undefined;
                              Taipei?: undefined;
                              捷運南港展覽館站?: undefined;
                              France?: undefined;
                              'Taipei City'?: undefined;
                              內湖科技園區?: undefined;
                              台北市中山區樂群二路189號6樓之一?: undefined;
                              台北市南港區?: undefined;
                              新北市?: undefined;
                              新台五路一段?: undefined;
                              汐科火車站?: undefined;
                              法國?: undefined;
                              '97\u865F'?: undefined;
                              UTOWN?: undefined;
                              中華路?: undefined;
                              信義安和站?: undefined;
                              內湖區?: undefined;
                              內湖區瑞光路?: undefined;
                              南港區?: undefined;
                              古亭站?: undefined;
                              台北市信義區?: undefined;
                              台北市大安區?: undefined;
                              台北市松高路1號7樓?: undefined;
                              台南市?: undefined;
                              台南市新市區?: undefined;
                              大安區?: undefined;
                              小巨蛋?: undefined;
                              捷運中山國中站?: undefined;
                              新竹?: undefined;
                              桃園市中壢區?: undefined;
                              汐止?: undefined;
                              汐止區?: undefined;
                              汐止科學園區?: undefined;
                              泰國?: undefined;
                              遠雄?: undefined;
                              'tech_project-product-management'?: undefined;
                              'marketing-communications_marketing'?: undefined;
                              'tech_data-engineering'?: undefined;
                              'tech_front-end-development'?: undefined;
                              'tech_full-stack-development'?: undefined;
                              tech_other?: undefined;
                              'business_business-development'?: undefined;
                              'tech_android-development'?: undefined;
                              'tech_back-end-development'?: undefined;
                              'tech_quality-assurance-testing'?: undefined;
                              'tech_research-r-d'?: undefined;
                              business_sales?: undefined;
                              'consulting_it-project-management'?: undefined;
                              'customer-service_customer-service-support'?: undefined;
                              'customer-service_customer-success'?: undefined;
                              design_other?: undefined;
                              'industry_manufacturing-technician'?: undefined;
                              'marketing-communications_marketing-development'?: undefined;
                              'tech_data-science'?: undefined;
                              full_time?: undefined;
                              contract?: undefined;
                              mid_senior_level?: undefined;
                              entry_level?: undefined;
                              director?: undefined;
                              associate?: undefined;
                              TWD?: undefined;
                              0?: undefined;
                              1?: undefined;
                              100?: undefined;
                              150?: undefined;
                              14000?: undefined;
                              60000?: undefined;
                              62000?: undefined;
                              65000?: undefined;
                              75000?: undefined;
                              120000?: undefined;
                              130000?: undefined;
                              330000?: undefined;
                              360000?: undefined;
                              420000?: undefined;
                              480000?: undefined;
                              500000?: undefined;
                              540000?: undefined;
                              560000?: undefined;
                              600000?: undefined;
                              640000?: undefined;
                              650000?: undefined;
                              700000?: undefined;
                              770000?: undefined;
                              798000?: undefined;
                              800000?: undefined;
                              832000?: undefined;
                              840000?: undefined;
                              850000?: undefined;
                              900000?: undefined;
                              952000?: undefined;
                              1000000?: undefined;
                              1100000?: undefined;
                              1200000?: undefined;
                              1300000?: undefined;
                              1379000?: undefined;
                              1400000?: undefined;
                              1500000?: undefined;
                              1600000?: undefined;
                              1700000?: undefined;
                              1800000?: undefined;
                              2000000?: undefined;
                              2200000?: undefined;
                              2500000?: undefined;
                              3000000?: undefined;
                              none?: undefined;
                              one_five?: undefined;
                              five_ten?: undefined;
                              not_specified?: undefined;
                              no_remote_work?: undefined;
                              optional_remote_work?: undefined;
                              partial_remote_work?: undefined;
                              full_remote_work?: undefined;
                              '51_200'?: undefined;
                              '11_50'?: undefined;
                              '501_1000'?: undefined;
                              '201_500'?: undefined;
                              '1001_5000'?: undefined;
                              '5001_'?: undefined;
                              '1_10'?: undefined;
                              Chinese?: undefined;
                              English?: undefined;
                              '2020_tech_career_fair'?: undefined;
                          };
                          exhaustive: boolean;
                          stats?: undefined;
                      }
                    | {
                          name: string;
                          data: {
                              TWD: number;
                              台北?: undefined;
                              台灣?: undefined;
                              信義區?: undefined;
                              台北市?: undefined;
                              松山區?: undefined;
                              Taiwan?: undefined;
                              中正區?: undefined;
                              南港軟體園區?: undefined;
                              Taipei?: undefined;
                              捷運南港展覽館站?: undefined;
                              France?: undefined;
                              'Taipei City'?: undefined;
                              內湖科技園區?: undefined;
                              台北市中山區樂群二路189號6樓之一?: undefined;
                              台北市南港區?: undefined;
                              新北市?: undefined;
                              新台五路一段?: undefined;
                              汐科火車站?: undefined;
                              法國?: undefined;
                              '97\u865F'?: undefined;
                              UTOWN?: undefined;
                              中華路?: undefined;
                              信義安和站?: undefined;
                              內湖區?: undefined;
                              內湖區瑞光路?: undefined;
                              南港區?: undefined;
                              古亭站?: undefined;
                              台北市信義區?: undefined;
                              台北市大安區?: undefined;
                              台北市松高路1號7樓?: undefined;
                              台南市?: undefined;
                              台南市新市區?: undefined;
                              大安區?: undefined;
                              小巨蛋?: undefined;
                              捷運中山國中站?: undefined;
                              新竹?: undefined;
                              桃園市中壢區?: undefined;
                              汐止?: undefined;
                              汐止區?: undefined;
                              汐止科學園區?: undefined;
                              泰國?: undefined;
                              遠雄?: undefined;
                              'tech_project-product-management'?: undefined;
                              'marketing-communications_marketing'?: undefined;
                              'tech_data-engineering'?: undefined;
                              'tech_front-end-development'?: undefined;
                              'tech_full-stack-development'?: undefined;
                              tech_other?: undefined;
                              'business_business-development'?: undefined;
                              'tech_android-development'?: undefined;
                              'tech_back-end-development'?: undefined;
                              'tech_quality-assurance-testing'?: undefined;
                              'tech_research-r-d'?: undefined;
                              business_sales?: undefined;
                              'consulting_it-project-management'?: undefined;
                              'customer-service_customer-service-support'?: undefined;
                              'customer-service_customer-success'?: undefined;
                              design_other?: undefined;
                              'industry_manufacturing-technician'?: undefined;
                              'marketing-communications_marketing-development'?: undefined;
                              'tech_data-science'?: undefined;
                              full_time?: undefined;
                              contract?: undefined;
                              mid_senior_level?: undefined;
                              entry_level?: undefined;
                              director?: undefined;
                              associate?: undefined;
                              per_year?: undefined;
                              per_month?: undefined;
                              0?: undefined;
                              1?: undefined;
                              100?: undefined;
                              150?: undefined;
                              14000?: undefined;
                              60000?: undefined;
                              62000?: undefined;
                              65000?: undefined;
                              75000?: undefined;
                              120000?: undefined;
                              130000?: undefined;
                              330000?: undefined;
                              360000?: undefined;
                              420000?: undefined;
                              480000?: undefined;
                              500000?: undefined;
                              540000?: undefined;
                              560000?: undefined;
                              600000?: undefined;
                              640000?: undefined;
                              650000?: undefined;
                              700000?: undefined;
                              770000?: undefined;
                              798000?: undefined;
                              800000?: undefined;
                              832000?: undefined;
                              840000?: undefined;
                              850000?: undefined;
                              900000?: undefined;
                              952000?: undefined;
                              1000000?: undefined;
                              1100000?: undefined;
                              1200000?: undefined;
                              1300000?: undefined;
                              1379000?: undefined;
                              1400000?: undefined;
                              1500000?: undefined;
                              1600000?: undefined;
                              1700000?: undefined;
                              1800000?: undefined;
                              2000000?: undefined;
                              2200000?: undefined;
                              2500000?: undefined;
                              3000000?: undefined;
                              none?: undefined;
                              one_five?: undefined;
                              five_ten?: undefined;
                              not_specified?: undefined;
                              no_remote_work?: undefined;
                              optional_remote_work?: undefined;
                              partial_remote_work?: undefined;
                              full_remote_work?: undefined;
                              '51_200'?: undefined;
                              '11_50'?: undefined;
                              '501_1000'?: undefined;
                              '201_500'?: undefined;
                              '1001_5000'?: undefined;
                              '5001_'?: undefined;
                              '1_10'?: undefined;
                              Chinese?: undefined;
                              English?: undefined;
                              '2020_tech_career_fair'?: undefined;
                          };
                          exhaustive: boolean;
                          stats?: undefined;
                      }
                    | {
                          name: string;
                          data: {
                              0: number;
                              1: number;
                              100: number;
                              150: number;
                              14000: number;
                              60000: number;
                              62000: number;
                              65000: number;
                              75000: number;
                              120000: number;
                              130000: number;
                              330000: number;
                              360000: number;
                              420000: number;
                              480000: number;
                              500000: number;
                              540000: number;
                              560000: number;
                              600000: number;
                              640000: number;
                              650000: number;
                              700000: number;
                              770000: number;
                              798000: number;
                              800000: number;
                              832000: number;
                              840000: number;
                              850000: number;
                              900000: number;
                              952000: number;
                              1000000: number;
                              1100000: number;
                              1200000: number;
                              1300000: number;
                              1379000: number;
                              1400000: number;
                              1500000: number;
                              1600000: number;
                              1700000: number;
                              1800000: number;
                              2000000: number;
                              2200000: number;
                              2500000: number;
                              3000000: number;
                              台北?: undefined;
                              台灣?: undefined;
                              信義區?: undefined;
                              台北市?: undefined;
                              松山區?: undefined;
                              Taiwan?: undefined;
                              中正區?: undefined;
                              南港軟體園區?: undefined;
                              Taipei?: undefined;
                              捷運南港展覽館站?: undefined;
                              France?: undefined;
                              'Taipei City'?: undefined;
                              內湖科技園區?: undefined;
                              台北市中山區樂群二路189號6樓之一?: undefined;
                              台北市南港區?: undefined;
                              新北市?: undefined;
                              新台五路一段?: undefined;
                              汐科火車站?: undefined;
                              法國?: undefined;
                              '97\u865F'?: undefined;
                              UTOWN?: undefined;
                              中華路?: undefined;
                              信義安和站?: undefined;
                              內湖區?: undefined;
                              內湖區瑞光路?: undefined;
                              南港區?: undefined;
                              古亭站?: undefined;
                              台北市信義區?: undefined;
                              台北市大安區?: undefined;
                              台北市松高路1號7樓?: undefined;
                              台南市?: undefined;
                              台南市新市區?: undefined;
                              大安區?: undefined;
                              小巨蛋?: undefined;
                              捷運中山國中站?: undefined;
                              新竹?: undefined;
                              桃園市中壢區?: undefined;
                              汐止?: undefined;
                              汐止區?: undefined;
                              汐止科學園區?: undefined;
                              泰國?: undefined;
                              遠雄?: undefined;
                              'tech_project-product-management'?: undefined;
                              'marketing-communications_marketing'?: undefined;
                              'tech_data-engineering'?: undefined;
                              'tech_front-end-development'?: undefined;
                              'tech_full-stack-development'?: undefined;
                              tech_other?: undefined;
                              'business_business-development'?: undefined;
                              'tech_android-development'?: undefined;
                              'tech_back-end-development'?: undefined;
                              'tech_quality-assurance-testing'?: undefined;
                              'tech_research-r-d'?: undefined;
                              business_sales?: undefined;
                              'consulting_it-project-management'?: undefined;
                              'customer-service_customer-service-support'?: undefined;
                              'customer-service_customer-success'?: undefined;
                              design_other?: undefined;
                              'industry_manufacturing-technician'?: undefined;
                              'marketing-communications_marketing-development'?: undefined;
                              'tech_data-science'?: undefined;
                              full_time?: undefined;
                              contract?: undefined;
                              mid_senior_level?: undefined;
                              entry_level?: undefined;
                              director?: undefined;
                              associate?: undefined;
                              per_year?: undefined;
                              per_month?: undefined;
                              TWD?: undefined;
                              none?: undefined;
                              one_five?: undefined;
                              five_ten?: undefined;
                              not_specified?: undefined;
                              no_remote_work?: undefined;
                              optional_remote_work?: undefined;
                              partial_remote_work?: undefined;
                              full_remote_work?: undefined;
                              '51_200'?: undefined;
                              '11_50'?: undefined;
                              '501_1000'?: undefined;
                              '201_500'?: undefined;
                              '1001_5000'?: undefined;
                              '5001_'?: undefined;
                              '1_10'?: undefined;
                              Chinese?: undefined;
                              English?: undefined;
                              '2020_tech_career_fair'?: undefined;
                          };
                          exhaustive: boolean;
                          stats: {
                              min: number;
                              max: number;
                              avg: number;
                              sum: number;
                          };
                      }
                    | {
                          name: string;
                          data: {
                              none: number;
                              one_five: number;
                              five_ten: number;
                              not_specified: number;
                              台北?: undefined;
                              台灣?: undefined;
                              信義區?: undefined;
                              台北市?: undefined;
                              松山區?: undefined;
                              Taiwan?: undefined;
                              中正區?: undefined;
                              南港軟體園區?: undefined;
                              Taipei?: undefined;
                              捷運南港展覽館站?: undefined;
                              France?: undefined;
                              'Taipei City'?: undefined;
                              內湖科技園區?: undefined;
                              台北市中山區樂群二路189號6樓之一?: undefined;
                              台北市南港區?: undefined;
                              新北市?: undefined;
                              新台五路一段?: undefined;
                              汐科火車站?: undefined;
                              法國?: undefined;
                              '97\u865F'?: undefined;
                              UTOWN?: undefined;
                              中華路?: undefined;
                              信義安和站?: undefined;
                              內湖區?: undefined;
                              內湖區瑞光路?: undefined;
                              南港區?: undefined;
                              古亭站?: undefined;
                              台北市信義區?: undefined;
                              台北市大安區?: undefined;
                              台北市松高路1號7樓?: undefined;
                              台南市?: undefined;
                              台南市新市區?: undefined;
                              大安區?: undefined;
                              小巨蛋?: undefined;
                              捷運中山國中站?: undefined;
                              新竹?: undefined;
                              桃園市中壢區?: undefined;
                              汐止?: undefined;
                              汐止區?: undefined;
                              汐止科學園區?: undefined;
                              泰國?: undefined;
                              遠雄?: undefined;
                              'tech_project-product-management'?: undefined;
                              'marketing-communications_marketing'?: undefined;
                              'tech_data-engineering'?: undefined;
                              'tech_front-end-development'?: undefined;
                              'tech_full-stack-development'?: undefined;
                              tech_other?: undefined;
                              'business_business-development'?: undefined;
                              'tech_android-development'?: undefined;
                              'tech_back-end-development'?: undefined;
                              'tech_quality-assurance-testing'?: undefined;
                              'tech_research-r-d'?: undefined;
                              business_sales?: undefined;
                              'consulting_it-project-management'?: undefined;
                              'customer-service_customer-service-support'?: undefined;
                              'customer-service_customer-success'?: undefined;
                              design_other?: undefined;
                              'industry_manufacturing-technician'?: undefined;
                              'marketing-communications_marketing-development'?: undefined;
                              'tech_data-science'?: undefined;
                              full_time?: undefined;
                              contract?: undefined;
                              mid_senior_level?: undefined;
                              entry_level?: undefined;
                              director?: undefined;
                              associate?: undefined;
                              per_year?: undefined;
                              per_month?: undefined;
                              TWD?: undefined;
                              0?: undefined;
                              1?: undefined;
                              100?: undefined;
                              150?: undefined;
                              14000?: undefined;
                              60000?: undefined;
                              62000?: undefined;
                              65000?: undefined;
                              75000?: undefined;
                              120000?: undefined;
                              130000?: undefined;
                              330000?: undefined;
                              360000?: undefined;
                              420000?: undefined;
                              480000?: undefined;
                              500000?: undefined;
                              540000?: undefined;
                              560000?: undefined;
                              600000?: undefined;
                              640000?: undefined;
                              650000?: undefined;
                              700000?: undefined;
                              770000?: undefined;
                              798000?: undefined;
                              800000?: undefined;
                              832000?: undefined;
                              840000?: undefined;
                              850000?: undefined;
                              900000?: undefined;
                              952000?: undefined;
                              1000000?: undefined;
                              1100000?: undefined;
                              1200000?: undefined;
                              1300000?: undefined;
                              1379000?: undefined;
                              1400000?: undefined;
                              1500000?: undefined;
                              1600000?: undefined;
                              1700000?: undefined;
                              1800000?: undefined;
                              2000000?: undefined;
                              2200000?: undefined;
                              2500000?: undefined;
                              3000000?: undefined;
                              no_remote_work?: undefined;
                              optional_remote_work?: undefined;
                              partial_remote_work?: undefined;
                              full_remote_work?: undefined;
                              '51_200'?: undefined;
                              '11_50'?: undefined;
                              '501_1000'?: undefined;
                              '201_500'?: undefined;
                              '1001_5000'?: undefined;
                              '5001_'?: undefined;
                              '1_10'?: undefined;
                              Chinese?: undefined;
                              English?: undefined;
                              '2020_tech_career_fair'?: undefined;
                          };
                          exhaustive: boolean;
                          stats?: undefined;
                      }
                    | {
                          name: string;
                          data: {
                              no_remote_work: number;
                              optional_remote_work: number;
                              partial_remote_work: number;
                              full_remote_work: number;
                              台北?: undefined;
                              台灣?: undefined;
                              信義區?: undefined;
                              台北市?: undefined;
                              松山區?: undefined;
                              Taiwan?: undefined;
                              中正區?: undefined;
                              南港軟體園區?: undefined;
                              Taipei?: undefined;
                              捷運南港展覽館站?: undefined;
                              France?: undefined;
                              'Taipei City'?: undefined;
                              內湖科技園區?: undefined;
                              台北市中山區樂群二路189號6樓之一?: undefined;
                              台北市南港區?: undefined;
                              新北市?: undefined;
                              新台五路一段?: undefined;
                              汐科火車站?: undefined;
                              法國?: undefined;
                              '97\u865F'?: undefined;
                              UTOWN?: undefined;
                              中華路?: undefined;
                              信義安和站?: undefined;
                              內湖區?: undefined;
                              內湖區瑞光路?: undefined;
                              南港區?: undefined;
                              古亭站?: undefined;
                              台北市信義區?: undefined;
                              台北市大安區?: undefined;
                              台北市松高路1號7樓?: undefined;
                              台南市?: undefined;
                              台南市新市區?: undefined;
                              大安區?: undefined;
                              小巨蛋?: undefined;
                              捷運中山國中站?: undefined;
                              新竹?: undefined;
                              桃園市中壢區?: undefined;
                              汐止?: undefined;
                              汐止區?: undefined;
                              汐止科學園區?: undefined;
                              泰國?: undefined;
                              遠雄?: undefined;
                              'tech_project-product-management'?: undefined;
                              'marketing-communications_marketing'?: undefined;
                              'tech_data-engineering'?: undefined;
                              'tech_front-end-development'?: undefined;
                              'tech_full-stack-development'?: undefined;
                              tech_other?: undefined;
                              'business_business-development'?: undefined;
                              'tech_android-development'?: undefined;
                              'tech_back-end-development'?: undefined;
                              'tech_quality-assurance-testing'?: undefined;
                              'tech_research-r-d'?: undefined;
                              business_sales?: undefined;
                              'consulting_it-project-management'?: undefined;
                              'customer-service_customer-service-support'?: undefined;
                              'customer-service_customer-success'?: undefined;
                              design_other?: undefined;
                              'industry_manufacturing-technician'?: undefined;
                              'marketing-communications_marketing-development'?: undefined;
                              'tech_data-science'?: undefined;
                              full_time?: undefined;
                              contract?: undefined;
                              mid_senior_level?: undefined;
                              entry_level?: undefined;
                              director?: undefined;
                              associate?: undefined;
                              per_year?: undefined;
                              per_month?: undefined;
                              TWD?: undefined;
                              0?: undefined;
                              1?: undefined;
                              100?: undefined;
                              150?: undefined;
                              14000?: undefined;
                              60000?: undefined;
                              62000?: undefined;
                              65000?: undefined;
                              75000?: undefined;
                              120000?: undefined;
                              130000?: undefined;
                              330000?: undefined;
                              360000?: undefined;
                              420000?: undefined;
                              480000?: undefined;
                              500000?: undefined;
                              540000?: undefined;
                              560000?: undefined;
                              600000?: undefined;
                              640000?: undefined;
                              650000?: undefined;
                              700000?: undefined;
                              770000?: undefined;
                              798000?: undefined;
                              800000?: undefined;
                              832000?: undefined;
                              840000?: undefined;
                              850000?: undefined;
                              900000?: undefined;
                              952000?: undefined;
                              1000000?: undefined;
                              1100000?: undefined;
                              1200000?: undefined;
                              1300000?: undefined;
                              1379000?: undefined;
                              1400000?: undefined;
                              1500000?: undefined;
                              1600000?: undefined;
                              1700000?: undefined;
                              1800000?: undefined;
                              2000000?: undefined;
                              2200000?: undefined;
                              2500000?: undefined;
                              3000000?: undefined;
                              none?: undefined;
                              one_five?: undefined;
                              five_ten?: undefined;
                              not_specified?: undefined;
                              '51_200'?: undefined;
                              '11_50'?: undefined;
                              '501_1000'?: undefined;
                              '201_500'?: undefined;
                              '1001_5000'?: undefined;
                              '5001_'?: undefined;
                              '1_10'?: undefined;
                              Chinese?: undefined;
                              English?: undefined;
                              '2020_tech_career_fair'?: undefined;
                          };
                          exhaustive: boolean;
                          stats?: undefined;
                      }
                    | {
                          name: string;
                          data: {
                              '51_200': number;
                              '11_50': number;
                              '501_1000': number;
                              '201_500': number;
                              '1001_5000': number;
                              '5001_': number;
                              '1_10': number;
                              台北?: undefined;
                              台灣?: undefined;
                              信義區?: undefined;
                              台北市?: undefined;
                              松山區?: undefined;
                              Taiwan?: undefined;
                              中正區?: undefined;
                              南港軟體園區?: undefined;
                              Taipei?: undefined;
                              捷運南港展覽館站?: undefined;
                              France?: undefined;
                              'Taipei City'?: undefined;
                              內湖科技園區?: undefined;
                              台北市中山區樂群二路189號6樓之一?: undefined;
                              台北市南港區?: undefined;
                              新北市?: undefined;
                              新台五路一段?: undefined;
                              汐科火車站?: undefined;
                              法國?: undefined;
                              '97\u865F'?: undefined;
                              UTOWN?: undefined;
                              中華路?: undefined;
                              信義安和站?: undefined;
                              內湖區?: undefined;
                              內湖區瑞光路?: undefined;
                              南港區?: undefined;
                              古亭站?: undefined;
                              台北市信義區?: undefined;
                              台北市大安區?: undefined;
                              台北市松高路1號7樓?: undefined;
                              台南市?: undefined;
                              台南市新市區?: undefined;
                              大安區?: undefined;
                              小巨蛋?: undefined;
                              捷運中山國中站?: undefined;
                              新竹?: undefined;
                              桃園市中壢區?: undefined;
                              汐止?: undefined;
                              汐止區?: undefined;
                              汐止科學園區?: undefined;
                              泰國?: undefined;
                              遠雄?: undefined;
                              'tech_project-product-management'?: undefined;
                              'marketing-communications_marketing'?: undefined;
                              'tech_data-engineering'?: undefined;
                              'tech_front-end-development'?: undefined;
                              'tech_full-stack-development'?: undefined;
                              tech_other?: undefined;
                              'business_business-development'?: undefined;
                              'tech_android-development'?: undefined;
                              'tech_back-end-development'?: undefined;
                              'tech_quality-assurance-testing'?: undefined;
                              'tech_research-r-d'?: undefined;
                              business_sales?: undefined;
                              'consulting_it-project-management'?: undefined;
                              'customer-service_customer-service-support'?: undefined;
                              'customer-service_customer-success'?: undefined;
                              design_other?: undefined;
                              'industry_manufacturing-technician'?: undefined;
                              'marketing-communications_marketing-development'?: undefined;
                              'tech_data-science'?: undefined;
                              full_time?: undefined;
                              contract?: undefined;
                              mid_senior_level?: undefined;
                              entry_level?: undefined;
                              director?: undefined;
                              associate?: undefined;
                              per_year?: undefined;
                              per_month?: undefined;
                              TWD?: undefined;
                              0?: undefined;
                              1?: undefined;
                              100?: undefined;
                              150?: undefined;
                              14000?: undefined;
                              60000?: undefined;
                              62000?: undefined;
                              65000?: undefined;
                              75000?: undefined;
                              120000?: undefined;
                              130000?: undefined;
                              330000?: undefined;
                              360000?: undefined;
                              420000?: undefined;
                              480000?: undefined;
                              500000?: undefined;
                              540000?: undefined;
                              560000?: undefined;
                              600000?: undefined;
                              640000?: undefined;
                              650000?: undefined;
                              700000?: undefined;
                              770000?: undefined;
                              798000?: undefined;
                              800000?: undefined;
                              832000?: undefined;
                              840000?: undefined;
                              850000?: undefined;
                              900000?: undefined;
                              952000?: undefined;
                              1000000?: undefined;
                              1100000?: undefined;
                              1200000?: undefined;
                              1300000?: undefined;
                              1379000?: undefined;
                              1400000?: undefined;
                              1500000?: undefined;
                              1600000?: undefined;
                              1700000?: undefined;
                              1800000?: undefined;
                              2000000?: undefined;
                              2200000?: undefined;
                              2500000?: undefined;
                              3000000?: undefined;
                              none?: undefined;
                              one_five?: undefined;
                              five_ten?: undefined;
                              not_specified?: undefined;
                              no_remote_work?: undefined;
                              optional_remote_work?: undefined;
                              partial_remote_work?: undefined;
                              full_remote_work?: undefined;
                              Chinese?: undefined;
                              English?: undefined;
                              '2020_tech_career_fair'?: undefined;
                          };
                          exhaustive: boolean;
                          stats?: undefined;
                      }
                    | {
                          name: string;
                          data: {
                              Chinese: number;
                              English: number;
                              台北?: undefined;
                              台灣?: undefined;
                              信義區?: undefined;
                              台北市?: undefined;
                              松山區?: undefined;
                              Taiwan?: undefined;
                              中正區?: undefined;
                              南港軟體園區?: undefined;
                              Taipei?: undefined;
                              捷運南港展覽館站?: undefined;
                              France?: undefined;
                              'Taipei City'?: undefined;
                              內湖科技園區?: undefined;
                              台北市中山區樂群二路189號6樓之一?: undefined;
                              台北市南港區?: undefined;
                              新北市?: undefined;
                              新台五路一段?: undefined;
                              汐科火車站?: undefined;
                              法國?: undefined;
                              '97\u865F'?: undefined;
                              UTOWN?: undefined;
                              中華路?: undefined;
                              信義安和站?: undefined;
                              內湖區?: undefined;
                              內湖區瑞光路?: undefined;
                              南港區?: undefined;
                              古亭站?: undefined;
                              台北市信義區?: undefined;
                              台北市大安區?: undefined;
                              台北市松高路1號7樓?: undefined;
                              台南市?: undefined;
                              台南市新市區?: undefined;
                              大安區?: undefined;
                              小巨蛋?: undefined;
                              捷運中山國中站?: undefined;
                              新竹?: undefined;
                              桃園市中壢區?: undefined;
                              汐止?: undefined;
                              汐止區?: undefined;
                              汐止科學園區?: undefined;
                              泰國?: undefined;
                              遠雄?: undefined;
                              'tech_project-product-management'?: undefined;
                              'marketing-communications_marketing'?: undefined;
                              'tech_data-engineering'?: undefined;
                              'tech_front-end-development'?: undefined;
                              'tech_full-stack-development'?: undefined;
                              tech_other?: undefined;
                              'business_business-development'?: undefined;
                              'tech_android-development'?: undefined;
                              'tech_back-end-development'?: undefined;
                              'tech_quality-assurance-testing'?: undefined;
                              'tech_research-r-d'?: undefined;
                              business_sales?: undefined;
                              'consulting_it-project-management'?: undefined;
                              'customer-service_customer-service-support'?: undefined;
                              'customer-service_customer-success'?: undefined;
                              design_other?: undefined;
                              'industry_manufacturing-technician'?: undefined;
                              'marketing-communications_marketing-development'?: undefined;
                              'tech_data-science'?: undefined;
                              full_time?: undefined;
                              contract?: undefined;
                              mid_senior_level?: undefined;
                              entry_level?: undefined;
                              director?: undefined;
                              associate?: undefined;
                              per_year?: undefined;
                              per_month?: undefined;
                              TWD?: undefined;
                              0?: undefined;
                              1?: undefined;
                              100?: undefined;
                              150?: undefined;
                              14000?: undefined;
                              60000?: undefined;
                              62000?: undefined;
                              65000?: undefined;
                              75000?: undefined;
                              120000?: undefined;
                              130000?: undefined;
                              330000?: undefined;
                              360000?: undefined;
                              420000?: undefined;
                              480000?: undefined;
                              500000?: undefined;
                              540000?: undefined;
                              560000?: undefined;
                              600000?: undefined;
                              640000?: undefined;
                              650000?: undefined;
                              700000?: undefined;
                              770000?: undefined;
                              798000?: undefined;
                              800000?: undefined;
                              832000?: undefined;
                              840000?: undefined;
                              850000?: undefined;
                              900000?: undefined;
                              952000?: undefined;
                              1000000?: undefined;
                              1100000?: undefined;
                              1200000?: undefined;
                              1300000?: undefined;
                              1379000?: undefined;
                              1400000?: undefined;
                              1500000?: undefined;
                              1600000?: undefined;
                              1700000?: undefined;
                              1800000?: undefined;
                              2000000?: undefined;
                              2200000?: undefined;
                              2500000?: undefined;
                              3000000?: undefined;
                              none?: undefined;
                              one_five?: undefined;
                              five_ten?: undefined;
                              not_specified?: undefined;
                              no_remote_work?: undefined;
                              optional_remote_work?: undefined;
                              partial_remote_work?: undefined;
                              full_remote_work?: undefined;
                              '51_200'?: undefined;
                              '11_50'?: undefined;
                              '501_1000'?: undefined;
                              '201_500'?: undefined;
                              '1001_5000'?: undefined;
                              '5001_'?: undefined;
                              '1_10'?: undefined;
                              '2020_tech_career_fair'?: undefined;
                          };
                          exhaustive: boolean;
                          stats?: undefined;
                      }
                    | {
                          name: string;
                          data: {
                              '2020_tech_career_fair': number;
                              台北?: undefined;
                              台灣?: undefined;
                              信義區?: undefined;
                              台北市?: undefined;
                              松山區?: undefined;
                              Taiwan?: undefined;
                              中正區?: undefined;
                              南港軟體園區?: undefined;
                              Taipei?: undefined;
                              捷運南港展覽館站?: undefined;
                              France?: undefined;
                              'Taipei City'?: undefined;
                              內湖科技園區?: undefined;
                              台北市中山區樂群二路189號6樓之一?: undefined;
                              台北市南港區?: undefined;
                              新北市?: undefined;
                              新台五路一段?: undefined;
                              汐科火車站?: undefined;
                              法國?: undefined;
                              '97\u865F'?: undefined;
                              UTOWN?: undefined;
                              中華路?: undefined;
                              信義安和站?: undefined;
                              內湖區?: undefined;
                              內湖區瑞光路?: undefined;
                              南港區?: undefined;
                              古亭站?: undefined;
                              台北市信義區?: undefined;
                              台北市大安區?: undefined;
                              台北市松高路1號7樓?: undefined;
                              台南市?: undefined;
                              台南市新市區?: undefined;
                              大安區?: undefined;
                              小巨蛋?: undefined;
                              捷運中山國中站?: undefined;
                              新竹?: undefined;
                              桃園市中壢區?: undefined;
                              汐止?: undefined;
                              汐止區?: undefined;
                              汐止科學園區?: undefined;
                              泰國?: undefined;
                              遠雄?: undefined;
                              'tech_project-product-management'?: undefined;
                              'marketing-communications_marketing'?: undefined;
                              'tech_data-engineering'?: undefined;
                              'tech_front-end-development'?: undefined;
                              'tech_full-stack-development'?: undefined;
                              tech_other?: undefined;
                              'business_business-development'?: undefined;
                              'tech_android-development'?: undefined;
                              'tech_back-end-development'?: undefined;
                              'tech_quality-assurance-testing'?: undefined;
                              'tech_research-r-d'?: undefined;
                              business_sales?: undefined;
                              'consulting_it-project-management'?: undefined;
                              'customer-service_customer-service-support'?: undefined;
                              'customer-service_customer-success'?: undefined;
                              design_other?: undefined;
                              'industry_manufacturing-technician'?: undefined;
                              'marketing-communications_marketing-development'?: undefined;
                              'tech_data-science'?: undefined;
                              full_time?: undefined;
                              contract?: undefined;
                              mid_senior_level?: undefined;
                              entry_level?: undefined;
                              director?: undefined;
                              associate?: undefined;
                              per_year?: undefined;
                              per_month?: undefined;
                              TWD?: undefined;
                              0?: undefined;
                              1?: undefined;
                              100?: undefined;
                              150?: undefined;
                              14000?: undefined;
                              60000?: undefined;
                              62000?: undefined;
                              65000?: undefined;
                              75000?: undefined;
                              120000?: undefined;
                              130000?: undefined;
                              330000?: undefined;
                              360000?: undefined;
                              420000?: undefined;
                              480000?: undefined;
                              500000?: undefined;
                              540000?: undefined;
                              560000?: undefined;
                              600000?: undefined;
                              640000?: undefined;
                              650000?: undefined;
                              700000?: undefined;
                              770000?: undefined;
                              798000?: undefined;
                              800000?: undefined;
                              832000?: undefined;
                              840000?: undefined;
                              850000?: undefined;
                              900000?: undefined;
                              952000?: undefined;
                              1000000?: undefined;
                              1100000?: undefined;
                              1200000?: undefined;
                              1300000?: undefined;
                              1379000?: undefined;
                              1400000?: undefined;
                              1500000?: undefined;
                              1600000?: undefined;
                              1700000?: undefined;
                              1800000?: undefined;
                              2000000?: undefined;
                              2200000?: undefined;
                              2500000?: undefined;
                              3000000?: undefined;
                              none?: undefined;
                              one_five?: undefined;
                              five_ten?: undefined;
                              not_specified?: undefined;
                              no_remote_work?: undefined;
                              optional_remote_work?: undefined;
                              partial_remote_work?: undefined;
                              full_remote_work?: undefined;
                              '51_200'?: undefined;
                              '11_50'?: undefined;
                              '501_1000'?: undefined;
                              '201_500'?: undefined;
                              '1001_5000'?: undefined;
                              '5001_'?: undefined;
                              '1_10'?: undefined;
                              Chinese?: undefined;
                              English?: undefined;
                          };
                          exhaustive: boolean;
                          stats?: undefined;
                      }
                )[];
                export const hierarchicalFacets: any[];
                export const facets: any[];
                export namespace _state {
                    const index_1: string;
                    export { index_1 as index };
                    const query_3: string;
                    export { query_3 as query };
                    const facets_1: any[];
                    export { facets_1 as facets };
                    const disjunctiveFacets_1: string[];
                    export { disjunctiveFacets_1 as disjunctiveFacets };
                    const hierarchicalFacets_1: any[];
                    export { hierarchicalFacets_1 as hierarchicalFacets };
                    export const facetsRefinements: {};
                    export const facetsExcludes: {};
                    export namespace disjunctiveFacetsRefinements {
                        const lang_name_1: string[];
                        export { lang_name_1 as lang_name };
                        const salary_type_1: string[];
                        export { salary_type_1 as salary_type };
                    }
                    export namespace numericRefinements {
                        const salary_range_1: {
                            '>=': number[];
                        };
                        export { salary_range_1 as salary_range };
                    }
                    export const tagRefinements: any[];
                    export const hierarchicalFacetsRefinements: {};
                    export const numericFilters: any;
                    export const tagFilters: any;
                    export const optionalTagFilters: any;
                    export const optionalFacetFilters: any;
                    const hitsPerPage_1: any;
                    export { hitsPerPage_1 as hitsPerPage };
                    export const maxValuesPerFacet: number;
                    const page_2: number;
                    export { page_2 as page };
                    export const queryType: any;
                    export const typoTolerance: any;
                    export const minWordSizefor1Typo: any;
                    export const minWordSizefor2Typos: any;
                    export const minProximity: any;
                    export const allowTyposOnNumericTokens: any;
                    export const ignorePlurals: any;
                    export const restrictSearchableAttributes: any;
                    export const advancedSyntax: any;
                    export const analytics: any;
                    export const analyticsTags: any;
                    export const synonyms: any;
                    export const replaceSynonymsInHighlight: any;
                    export const optionalWords: any;
                    export const removeWordsIfNoResults: any;
                    export const attributesToRetrieve: any;
                    export const attributesToHighlight: any;
                    export const highlightPreTag: string;
                    export const highlightPostTag: string;
                    export const attributesToSnippet: any;
                    export const getRankingInfo: any;
                    export const distinct: boolean;
                    const aroundLatLng_1: any;
                    export { aroundLatLng_1 as aroundLatLng };
                    export const aroundLatLngViaIP: any;
                    export const aroundRadius: any;
                    export const minimumAroundRadius: any;
                    export const aroundPrecision: any;
                    export const insideBoundingBox: any;
                    export const insidePolygon: any;
                    export const snippetEllipsisText: any;
                    export const disableExactOnAttributes: any;
                    export const enableExactOnSingleWordQuery: any;
                    export const offset: any;
                    export const length: any;
                    export const ruleContexts: any[];
                    export const clickAnalytics: boolean;
                }
            }
            export namespace state {
                const index_2: string;
                export { index_2 as index };
                const query_4: string;
                export { query_4 as query };
                const facets_2: any[];
                export { facets_2 as facets };
                const disjunctiveFacets_2: string[];
                export { disjunctiveFacets_2 as disjunctiveFacets };
                const hierarchicalFacets_2: any[];
                export { hierarchicalFacets_2 as hierarchicalFacets };
                const facetsRefinements_1: {};
                export { facetsRefinements_1 as facetsRefinements };
                const facetsExcludes_1: {};
                export { facetsExcludes_1 as facetsExcludes };
                export namespace disjunctiveFacetsRefinements_1 {
                    const lang_name_2: string[];
                    export { lang_name_2 as lang_name };
                    const salary_type_2: string[];
                    export { salary_type_2 as salary_type };
                }
                export { disjunctiveFacetsRefinements_1 as disjunctiveFacetsRefinements };
                export namespace numericRefinements_1 {
                    const salary_range_2: {
                        '>=': number[];
                    };
                    export { salary_range_2 as salary_range };
                }
                export { numericRefinements_1 as numericRefinements };
                const tagRefinements_1: any[];
                export { tagRefinements_1 as tagRefinements };
                const hierarchicalFacetsRefinements_1: {};
                export { hierarchicalFacetsRefinements_1 as hierarchicalFacetsRefinements };
                const numericFilters_1: any;
                export { numericFilters_1 as numericFilters };
                const tagFilters_1: any;
                export { tagFilters_1 as tagFilters };
                const optionalTagFilters_1: any;
                export { optionalTagFilters_1 as optionalTagFilters };
                const optionalFacetFilters_1: any;
                export { optionalFacetFilters_1 as optionalFacetFilters };
                const hitsPerPage_2: any;
                export { hitsPerPage_2 as hitsPerPage };
                const maxValuesPerFacet_1: number;
                export { maxValuesPerFacet_1 as maxValuesPerFacet };
                const page_3: number;
                export { page_3 as page };
                const queryType_1: any;
                export { queryType_1 as queryType };
                const typoTolerance_1: any;
                export { typoTolerance_1 as typoTolerance };
                const minWordSizefor1Typo_1: any;
                export { minWordSizefor1Typo_1 as minWordSizefor1Typo };
                const minWordSizefor2Typos_1: any;
                export { minWordSizefor2Typos_1 as minWordSizefor2Typos };
                const minProximity_1: any;
                export { minProximity_1 as minProximity };
                const allowTyposOnNumericTokens_1: any;
                export { allowTyposOnNumericTokens_1 as allowTyposOnNumericTokens };
                const ignorePlurals_1: any;
                export { ignorePlurals_1 as ignorePlurals };
                const restrictSearchableAttributes_1: any;
                export { restrictSearchableAttributes_1 as restrictSearchableAttributes };
                const advancedSyntax_1: any;
                export { advancedSyntax_1 as advancedSyntax };
                const analytics_1: any;
                export { analytics_1 as analytics };
                const analyticsTags_1: any;
                export { analyticsTags_1 as analyticsTags };
                const synonyms_1: any;
                export { synonyms_1 as synonyms };
                const replaceSynonymsInHighlight_1: any;
                export { replaceSynonymsInHighlight_1 as replaceSynonymsInHighlight };
                const optionalWords_1: any;
                export { optionalWords_1 as optionalWords };
                const removeWordsIfNoResults_1: any;
                export { removeWordsIfNoResults_1 as removeWordsIfNoResults };
                const attributesToRetrieve_1: any;
                export { attributesToRetrieve_1 as attributesToRetrieve };
                const attributesToHighlight_1: any;
                export { attributesToHighlight_1 as attributesToHighlight };
                const highlightPreTag_1: string;
                export { highlightPreTag_1 as highlightPreTag };
                const highlightPostTag_1: string;
                export { highlightPostTag_1 as highlightPostTag };
                const attributesToSnippet_1: any;
                export { attributesToSnippet_1 as attributesToSnippet };
                const getRankingInfo_1: any;
                export { getRankingInfo_1 as getRankingInfo };
                const distinct_1: boolean;
                export { distinct_1 as distinct };
                const aroundLatLng_2: any;
                export { aroundLatLng_2 as aroundLatLng };
                const aroundLatLngViaIP_1: any;
                export { aroundLatLngViaIP_1 as aroundLatLngViaIP };
                const aroundRadius_1: any;
                export { aroundRadius_1 as aroundRadius };
                const minimumAroundRadius_1: any;
                export { minimumAroundRadius_1 as minimumAroundRadius };
                const aroundPrecision_1: any;
                export { aroundPrecision_1 as aroundPrecision };
                const insideBoundingBox_1: any;
                export { insideBoundingBox_1 as insideBoundingBox };
                const insidePolygon_1: any;
                export { insidePolygon_1 as insidePolygon };
                const snippetEllipsisText_1: any;
                export { snippetEllipsisText_1 as snippetEllipsisText };
                const disableExactOnAttributes_1: any;
                export { disableExactOnAttributes_1 as disableExactOnAttributes };
                const enableExactOnSingleWordQuery_1: any;
                export { enableExactOnSingleWordQuery_1 as enableExactOnSingleWordQuery };
                const offset_1: any;
                export { offset_1 as offset };
                const length_1: any;
                export { length_1 as length };
                const ruleContexts_1: any[];
                export { ruleContexts_1 as ruleContexts };
                const clickAnalytics_1: boolean;
                export { clickAnalytics_1 as clickAnalytics };
            }
            export namespace _originalResponse {
                export const results: (
                    | {
                          hits: (
                              | {
                                    title: string;
                                    requirements: string;
                                    path: string;
                                    tag_list: string[];
                                    location_list: string[];
                                    unique_impressions_count: number;
                                    search_rank: number;
                                    created_at: string;
                                    expired_at: string;
                                    work_experience_list: any[];
                                    job_function_list: any[];
                                    category: string;
                                    job_type: string;
                                    seniority_level: string;
                                    aasm_state: string;
                                    sponsored: any;
                                    signing_bonus: number;
                                    salary_type: string;
                                    salary_currency: string;
                                    number_of_openings: number;
                                    lang: string;
                                    profession: string;
                                    remote: any;
                                    number_of_management: any;
                                    description_plain_text: string;
                                    requirements_plain_text: string;
                                    salary_min: number;
                                    salary_max: number;
                                    salary_range: number[];
                                    salary_score: number;
                                    lang_name: string;
                                    content_updated_at: number;
                                    noindex: boolean;
                                    page: {
                                        name: string;
                                        path: string;
                                        address: string;
                                        country: string;
                                        unique_impressions_count: number;
                                        search_rank: number;
                                        created_at: string;
                                        number_of_employees: string;
                                        aasm_state: string;
                                        featured: boolean;
                                        geo_street_address: string;
                                        geo_city: string;
                                        geo_state_name: string;
                                        geo_state_code: string;
                                        geo_zip: string;
                                        noindex: boolean;
                                        sector: any;
                                        labels: any[];
                                        last_active_at_by_week: number;
                                        content_updated_at: number;
                                        geo_region_l: string;
                                        logo: {
                                            tiny: string;
                                            thumb: string;
                                            medium: string;
                                            large: string;
                                        };
                                        cover_image: {
                                            small_3_1: string;
                                            medium_3_1: string;
                                            large: string;
                                        };
                                    };
                                    fresh_score: number;
                                    unique_impressions_count_score: number;
                                    up_votes_score: number;
                                    job_applications_count_score: number;
                                    objectID: string;
                                    _snippetResult: {
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                        };
                                    };
                                    _highlightResult: {
                                        title: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        path: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                            fullyHighlighted?: undefined;
                                        };
                                        tag_list: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        }[];
                                        category: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        job_type: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        seniority_level: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        profession: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        page: {
                                            name: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            path: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            address: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                        };
                                    };
                                }
                              | {
                                    title: string;
                                    requirements: string;
                                    path: string;
                                    tag_list: string[];
                                    location_list: string[];
                                    unique_impressions_count: number;
                                    search_rank: number;
                                    created_at: string;
                                    expired_at: string;
                                    work_experience_list: any[];
                                    job_function_list: any[];
                                    category: string;
                                    job_type: string;
                                    seniority_level: string;
                                    aasm_state: string;
                                    sponsored: any;
                                    signing_bonus: number;
                                    salary_type: string;
                                    salary_currency: string;
                                    number_of_openings: number;
                                    lang: string;
                                    profession: string;
                                    remote: any;
                                    number_of_management: any;
                                    description_plain_text: string;
                                    requirements_plain_text: string;
                                    salary_min: number;
                                    salary_max: number;
                                    salary_range: number[];
                                    salary_score: number;
                                    lang_name: string;
                                    content_updated_at: number;
                                    noindex: boolean;
                                    page: {
                                        name: string;
                                        path: string;
                                        address: string;
                                        country: string;
                                        unique_impressions_count: number;
                                        search_rank: number;
                                        created_at: string;
                                        number_of_employees: string;
                                        aasm_state: string;
                                        featured: boolean;
                                        geo_street_address: string;
                                        geo_city: string;
                                        geo_state_name: string;
                                        geo_state_code: string;
                                        geo_zip: string;
                                        noindex: boolean;
                                        sector: string;
                                        labels: any[];
                                        last_active_at_by_week: number;
                                        content_updated_at: number;
                                        geo_region_l: string;
                                        logo: {
                                            tiny: string;
                                            thumb: string;
                                            medium: string;
                                            large: string;
                                        };
                                        cover_image: {
                                            small_3_1: string;
                                            medium_3_1: string;
                                            large: string;
                                        };
                                    };
                                    fresh_score: number;
                                    unique_impressions_count_score: number;
                                    up_votes_score: number;
                                    job_applications_count_score: number;
                                    objectID: string;
                                    _snippetResult: {
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                        };
                                    };
                                    _highlightResult: {
                                        title: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        path: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        tag_list: (
                                            | {
                                                  value: string;
                                                  matchLevel: string;
                                                  matchedWords: any[];
                                                  fullyHighlighted?: undefined;
                                              }
                                            | {
                                                  value: string;
                                                  matchLevel: string;
                                                  fullyHighlighted: boolean;
                                                  matchedWords: string[];
                                              }
                                        )[];
                                        category: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        job_type: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        seniority_level: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        profession: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                            fullyHighlighted?: undefined;
                                        };
                                        page: {
                                            name: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            path: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            address: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                        };
                                    };
                                }
                              | {
                                    title: string;
                                    requirements: string;
                                    path: string;
                                    tag_list: string[];
                                    location_list: string[];
                                    unique_impressions_count: number;
                                    search_rank: number;
                                    created_at: string;
                                    expired_at: string;
                                    work_experience_list: any[];
                                    job_function_list: any[];
                                    category: string;
                                    job_type: string;
                                    seniority_level: string;
                                    aasm_state: string;
                                    sponsored: any;
                                    signing_bonus: number;
                                    salary_type: string;
                                    salary_currency: string;
                                    number_of_openings: number;
                                    lang: string;
                                    profession: string;
                                    remote: any;
                                    number_of_management: any;
                                    description_plain_text: string;
                                    requirements_plain_text: string;
                                    salary_min: number;
                                    salary_max: number;
                                    salary_range: number[];
                                    salary_score: number;
                                    lang_name: string;
                                    content_updated_at: number;
                                    noindex: boolean;
                                    page: {
                                        name: string;
                                        path: string;
                                        address: string;
                                        country: string;
                                        unique_impressions_count: number;
                                        search_rank: number;
                                        created_at: string;
                                        number_of_employees: string;
                                        aasm_state: string;
                                        featured: boolean;
                                        geo_street_address: string;
                                        geo_city: string;
                                        geo_state_name: string;
                                        geo_state_code: string;
                                        geo_zip: string;
                                        noindex: boolean;
                                        sector: string;
                                        labels: any[];
                                        last_active_at_by_week: number;
                                        content_updated_at: number;
                                        geo_region_l: string;
                                        logo: {
                                            tiny: string;
                                            thumb: string;
                                            medium: string;
                                            large: string;
                                        };
                                        cover_image: {
                                            small_3_1: string;
                                            medium_3_1: string;
                                            large: string;
                                        };
                                    };
                                    fresh_score: number;
                                    unique_impressions_count_score: number;
                                    up_votes_score: number;
                                    job_applications_count_score: number;
                                    objectID: string;
                                    _snippetResult: {
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                        };
                                    };
                                    _highlightResult: {
                                        title: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        path: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                            fullyHighlighted?: undefined;
                                        };
                                        tag_list: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        }[];
                                        category: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        job_type: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        seniority_level: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        profession: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                            fullyHighlighted?: undefined;
                                        };
                                        page: {
                                            name: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            path: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            address: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                        };
                                    };
                                }
                              | {
                                    title: string;
                                    requirements: string;
                                    path: string;
                                    tag_list: string[];
                                    location_list: string[];
                                    unique_impressions_count: number;
                                    search_rank: number;
                                    created_at: string;
                                    expired_at: string;
                                    work_experience_list: string[];
                                    job_function_list: string[];
                                    category: string;
                                    job_type: string;
                                    seniority_level: string;
                                    aasm_state: string;
                                    sponsored: any;
                                    signing_bonus: number;
                                    salary_type: string;
                                    salary_currency: string;
                                    number_of_openings: number;
                                    lang: string;
                                    profession: string;
                                    remote: string;
                                    number_of_management: string;
                                    description_plain_text: string;
                                    requirements_plain_text: string;
                                    salary_min: number;
                                    salary_max: number;
                                    salary_range: number[];
                                    salary_score: number;
                                    lang_name: string;
                                    content_updated_at: number;
                                    noindex: boolean;
                                    page: {
                                        name: string;
                                        path: string;
                                        address: string;
                                        country: string;
                                        unique_impressions_count: number;
                                        search_rank: number;
                                        created_at: string;
                                        number_of_employees: string;
                                        aasm_state: string;
                                        featured: boolean;
                                        geo_street_address: string;
                                        geo_city: string;
                                        geo_state_name: string;
                                        geo_state_code: string;
                                        geo_zip: string;
                                        noindex: boolean;
                                        sector: string;
                                        labels: string[];
                                        last_active_at_by_week: number;
                                        content_updated_at: number;
                                        geo_region_l: string;
                                        logo: {
                                            tiny: string;
                                            thumb: string;
                                            medium: string;
                                            large: string;
                                        };
                                        cover_image: {
                                            small_3_1: string;
                                            medium_3_1: string;
                                            large: string;
                                        };
                                    };
                                    fresh_score: number;
                                    unique_impressions_count_score: number;
                                    up_votes_score: number;
                                    job_applications_count_score: number;
                                    objectID: string;
                                    _snippetResult: {
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                        };
                                    };
                                    _highlightResult: {
                                        title: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        path: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        tag_list: (
                                            | {
                                                  value: string;
                                                  matchLevel: string;
                                                  matchedWords: any[];
                                                  fullyHighlighted?: undefined;
                                              }
                                            | {
                                                  value: string;
                                                  matchLevel: string;
                                                  fullyHighlighted: boolean;
                                                  matchedWords: string[];
                                              }
                                        )[];
                                        category: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        job_type: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        seniority_level: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        profession: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        page: {
                                            name: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            path: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            address: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                        };
                                    };
                                }
                              | {
                                    title: string;
                                    requirements: string;
                                    path: string;
                                    tag_list: string[];
                                    location_list: string[];
                                    unique_impressions_count: number;
                                    search_rank: number;
                                    created_at: string;
                                    expired_at: string;
                                    work_experience_list: any[];
                                    job_function_list: any[];
                                    category: string;
                                    job_type: string;
                                    seniority_level: string;
                                    aasm_state: string;
                                    sponsored: any;
                                    signing_bonus: number;
                                    salary_type: string;
                                    salary_currency: string;
                                    number_of_openings: number;
                                    lang: string;
                                    profession: string;
                                    remote: string;
                                    number_of_management: string;
                                    description_plain_text: string;
                                    requirements_plain_text: string;
                                    salary_min: number;
                                    salary_max: number;
                                    salary_range: number[];
                                    salary_score: number;
                                    lang_name: string;
                                    content_updated_at: number;
                                    noindex: boolean;
                                    page: {
                                        name: string;
                                        path: string;
                                        address: string;
                                        country: string;
                                        unique_impressions_count: number;
                                        search_rank: number;
                                        created_at: string;
                                        number_of_employees: string;
                                        aasm_state: string;
                                        featured: boolean;
                                        geo_street_address: any;
                                        geo_city: any;
                                        geo_state_name: any;
                                        geo_state_code: any;
                                        geo_zip: any;
                                        noindex: boolean;
                                        sector: string;
                                        labels: any[];
                                        last_active_at_by_week: number;
                                        content_updated_at: number;
                                        geo_region_l: string;
                                        logo: {
                                            tiny: string;
                                            thumb: string;
                                            medium: string;
                                            large: string;
                                        };
                                        cover_image: {
                                            small_3_1: string;
                                            medium_3_1: string;
                                            large: string;
                                        };
                                    };
                                    fresh_score: number;
                                    unique_impressions_count_score: number;
                                    up_votes_score: number;
                                    job_applications_count_score: number;
                                    objectID: string;
                                    _snippetResult: {
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                        };
                                    };
                                    _highlightResult: {
                                        title: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        path: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        tag_list: (
                                            | {
                                                  value: string;
                                                  matchLevel: string;
                                                  matchedWords: any[];
                                                  fullyHighlighted?: undefined;
                                              }
                                            | {
                                                  value: string;
                                                  matchLevel: string;
                                                  fullyHighlighted: boolean;
                                                  matchedWords: string[];
                                              }
                                        )[];
                                        category: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        job_type: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        seniority_level: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        profession: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                            fullyHighlighted?: undefined;
                                        };
                                        page: {
                                            name: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            path: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            address: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                        };
                                    };
                                }
                              | {
                                    title: string;
                                    requirements: string;
                                    path: string;
                                    tag_list: string[];
                                    location_list: string[];
                                    unique_impressions_count: number;
                                    search_rank: number;
                                    created_at: string;
                                    expired_at: string;
                                    work_experience_list: any[];
                                    job_function_list: any[];
                                    category: string;
                                    job_type: string;
                                    seniority_level: string;
                                    aasm_state: string;
                                    sponsored: any;
                                    signing_bonus: number;
                                    salary_type: string;
                                    salary_currency: string;
                                    number_of_openings: number;
                                    lang: string;
                                    profession: string;
                                    remote: string;
                                    number_of_management: string;
                                    description_plain_text: string;
                                    requirements_plain_text: string;
                                    salary_min: number;
                                    salary_max: number;
                                    salary_range: number[];
                                    salary_score: number;
                                    lang_name: string;
                                    content_updated_at: number;
                                    noindex: boolean;
                                    page: {
                                        name: string;
                                        path: string;
                                        address: string;
                                        country: string;
                                        unique_impressions_count: number;
                                        search_rank: number;
                                        created_at: string;
                                        number_of_employees: string;
                                        aasm_state: string;
                                        featured: boolean;
                                        geo_street_address: string;
                                        geo_city: string;
                                        geo_state_name: string;
                                        geo_state_code: string;
                                        geo_zip: string;
                                        noindex: boolean;
                                        sector: any;
                                        labels: any[];
                                        last_active_at_by_week: number;
                                        content_updated_at: number;
                                        geo_region_l: string;
                                        logo: {
                                            tiny: string;
                                            thumb: string;
                                            medium: string;
                                            large: string;
                                        };
                                        cover_image: {
                                            small_3_1: string;
                                            medium_3_1: string;
                                            large: string;
                                        };
                                    };
                                    fresh_score: number;
                                    unique_impressions_count_score: number;
                                    up_votes_score: number;
                                    job_applications_count_score: number;
                                    objectID: string;
                                    _snippetResult: {
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                        };
                                    };
                                    _highlightResult: {
                                        title: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        path: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        tag_list: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        }[];
                                        category: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        job_type: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        seniority_level: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                        };
                                        profession: {
                                            value: string;
                                            matchLevel: string;
                                            fullyHighlighted: boolean;
                                            matchedWords: string[];
                                        };
                                        description_plain_text: {
                                            value: string;
                                            matchLevel: string;
                                            matchedWords: any[];
                                            fullyHighlighted?: undefined;
                                        };
                                        page: {
                                            name: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            path: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                            address: {
                                                value: string;
                                                matchLevel: string;
                                                matchedWords: any[];
                                            };
                                        };
                                    };
                                }
                          )[];
                          nbHits: number;
                          page: number;
                          nbPages: number;
                          hitsPerPage: number;
                          facets: {
                              remote: {
                                  no_remote_work: number;
                                  optional_remote_work: number;
                                  partial_remote_work: number;
                                  full_remote_work: number;
                              };
                              job_type: {
                                  full_time: number;
                                  contract: number;
                              };
                              lang_name: {
                                  English: number;
                                  Chinese?: undefined;
                              };
                              profession: {
                                  'tech_project-product-management': number;
                                  'marketing-communications_marketing': number;
                                  'tech_data-engineering': number;
                                  'tech_front-end-development': number;
                                  'tech_full-stack-development': number;
                                  tech_other: number;
                                  'business_business-development': number;
                                  'tech_android-development': number;
                                  'tech_back-end-development': number;
                                  'tech_quality-assurance-testing': number;
                                  'tech_research-r-d': number;
                                  business_sales: number;
                                  'consulting_it-project-management': number;
                                  'customer-service_customer-service-support': number;
                                  'customer-service_customer-success': number;
                                  design_other: number;
                                  'industry_manufacturing-technician': number;
                                  'marketing-communications_marketing-development': number;
                                  'tech_data-science': number;
                              };
                              'page.labels': {
                                  '2020_tech_career_fair': number;
                              };
                              salary_type: {
                                  per_year: number;
                                  per_month?: undefined;
                              };
                              salary_range: {
                                  0: number;
                                  420000: number;
                                  540000: number;
                                  600000: number;
                                  650000: number;
                                  700000: number;
                                  800000: number;
                                  850000: number;
                                  900000: number;
                                  1000000: number;
                                  1100000: number;
                                  1200000: number;
                                  1300000: number;
                                  1379000: number;
                                  1400000: number;
                                  1500000: number;
                                  1600000: number;
                                  1700000: number;
                                  1800000: number;
                                  2000000: number;
                                  2200000: number;
                                  2500000: number;
                                  3000000: number;
                                  1?: undefined;
                                  100?: undefined;
                                  150?: undefined;
                                  14000?: undefined;
                                  60000?: undefined;
                                  62000?: undefined;
                                  65000?: undefined;
                                  75000?: undefined;
                                  120000?: undefined;
                                  130000?: undefined;
                                  330000?: undefined;
                                  360000?: undefined;
                                  480000?: undefined;
                                  500000?: undefined;
                                  560000?: undefined;
                                  640000?: undefined;
                                  770000?: undefined;
                                  798000?: undefined;
                                  832000?: undefined;
                                  840000?: undefined;
                                  952000?: undefined;
                              };
                              location_list: {
                                  台北: number;
                                  台灣: number;
                                  信義區: number;
                                  台北市: number;
                                  松山區: number;
                                  Taiwan: number;
                                  中正區: number;
                                  南港軟體園區: number;
                                  Taipei: number;
                                  捷運南港展覽館站: number;
                                  France: number;
                                  'Taipei City': number;
                                  內湖科技園區: number;
                                  台北市中山區樂群二路189號6樓之一: number;
                                  台北市南港區: number;
                                  新北市: number;
                                  新台五路一段: number;
                                  汐科火車站: number;
                                  法國: number;
                                  '97\u865F': number;
                                  UTOWN: number;
                                  中華路: number;
                                  信義安和站: number;
                                  內湖區: number;
                                  內湖區瑞光路: number;
                                  南港區: number;
                                  古亭站: number;
                                  台北市信義區: number;
                                  台北市大安區: number;
                                  台北市松高路1號7樓: number;
                                  台南市: number;
                                  台南市新市區: number;
                                  大安區: number;
                                  小巨蛋: number;
                                  捷運中山國中站: number;
                                  新竹: number;
                                  桃園市中壢區: number;
                                  汐止: number;
                                  汐止區: number;
                                  汐止科學園區: number;
                                  泰國: number;
                                  遠雄: number;
                              };
                              salary_currency: {
                                  TWD: number;
                              };
                              seniority_level: {
                                  mid_senior_level: number;
                                  entry_level: number;
                                  director: number;
                                  associate: number;
                              };
                              number_of_management: {
                                  none: number;
                                  one_five: number;
                                  five_ten: number;
                                  not_specified: number;
                              };
                              'page.number_of_employees': {
                                  '51_200': number;
                                  '11_50': number;
                                  '501_1000': number;
                                  '201_500': number;
                                  '1001_5000': number;
                                  '5001_': number;
                                  '1_10': number;
                              };
                          };
                          facets_stats: {
                              salary_range: {
                                  min: number;
                                  max: number;
                                  avg: number;
                                  sum: number;
                              };
                          };
                          exhaustiveFacetsCount: boolean;
                          exhaustiveNbHits: boolean;
                          query: string;
                          params: string;
                          index: string;
                          queryID: string;
                          processingTimeMS: number;
                      }
                    | {
                          hits: {
                              objectID: string;
                              _snippetResult: {
                                  description_plain_text: {
                                      value: string;
                                      matchLevel: string;
                                  };
                              };
                          }[];
                          nbHits: number;
                          page: number;
                          nbPages: number;
                          hitsPerPage: number;
                          facets: {
                              lang_name: {
                                  Chinese: number;
                                  English: number;
                              };
                              remote?: undefined;
                              job_type?: undefined;
                              profession?: undefined;
                              'page.labels'?: undefined;
                              salary_type?: undefined;
                              salary_range?: undefined;
                              location_list?: undefined;
                              salary_currency?: undefined;
                              seniority_level?: undefined;
                              number_of_management?: undefined;
                              'page.number_of_employees'?: undefined;
                          };
                          exhaustiveFacetsCount: boolean;
                          exhaustiveNbHits: boolean;
                          query: string;
                          params: string;
                          index: string;
                          processingTimeMS: number;
                          facets_stats?: undefined;
                          queryID?: undefined;
                      }
                    | {
                          hits: {
                              objectID: string;
                              _snippetResult: {
                                  description_plain_text: {
                                      value: string;
                                      matchLevel: string;
                                  };
                              };
                          }[];
                          nbHits: number;
                          page: number;
                          nbPages: number;
                          hitsPerPage: number;
                          facets: {
                              salary_type: {
                                  per_year: number;
                                  per_month: number;
                              };
                              remote?: undefined;
                              job_type?: undefined;
                              lang_name?: undefined;
                              profession?: undefined;
                              'page.labels'?: undefined;
                              salary_range?: undefined;
                              location_list?: undefined;
                              salary_currency?: undefined;
                              seniority_level?: undefined;
                              number_of_management?: undefined;
                              'page.number_of_employees'?: undefined;
                          };
                          exhaustiveFacetsCount: boolean;
                          exhaustiveNbHits: boolean;
                          query: string;
                          params: string;
                          index: string;
                          processingTimeMS: number;
                          facets_stats?: undefined;
                          queryID?: undefined;
                      }
                    | {
                          hits: {
                              objectID: string;
                              _snippetResult: {
                                  description_plain_text: {
                                      value: string;
                                      matchLevel: string;
                                  };
                              };
                          }[];
                          nbHits: number;
                          page: number;
                          nbPages: number;
                          hitsPerPage: number;
                          facets: {
                              salary_range: {
                                  0: number;
                                  1: number;
                                  100: number;
                                  150: number;
                                  14000: number;
                                  60000: number;
                                  62000: number;
                                  65000: number;
                                  75000: number;
                                  120000: number;
                                  130000: number;
                                  330000: number;
                                  360000: number;
                                  420000: number;
                                  480000: number;
                                  500000: number;
                                  540000: number;
                                  560000: number;
                                  600000: number;
                                  640000: number;
                                  650000: number;
                                  700000: number;
                                  770000: number;
                                  798000: number;
                                  800000: number;
                                  832000: number;
                                  840000: number;
                                  850000: number;
                                  900000: number;
                                  952000: number;
                                  1000000: number;
                                  1100000: number;
                                  1200000: number;
                                  1300000: number;
                                  1379000: number;
                                  1400000: number;
                                  1500000: number;
                                  1600000: number;
                                  1700000: number;
                                  1800000: number;
                                  2000000: number;
                                  2200000: number;
                                  2500000: number;
                                  3000000: number;
                              };
                              remote?: undefined;
                              job_type?: undefined;
                              lang_name?: undefined;
                              profession?: undefined;
                              'page.labels'?: undefined;
                              salary_type?: undefined;
                              location_list?: undefined;
                              salary_currency?: undefined;
                              seniority_level?: undefined;
                              number_of_management?: undefined;
                              'page.number_of_employees'?: undefined;
                          };
                          facets_stats: {
                              salary_range: {
                                  min: number;
                                  max: number;
                                  avg: number;
                                  sum: number;
                              };
                          };
                          exhaustiveFacetsCount: boolean;
                          exhaustiveNbHits: boolean;
                          query: string;
                          params: string;
                          index: string;
                          processingTimeMS: number;
                          queryID?: undefined;
                      }
                )[];
            }
        }
        export const companyResultsState: {};
        export const hasSSRFirstResultsState: boolean;
    }

  }
}
