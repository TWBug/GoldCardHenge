export namespace __APP_INITIAL_REDUX_STATE__ {

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
    export const match: {};
    export namespace routing {
        export namespace location {
            export const pathname: string;
            export const search: string;
            export const hash: string;
        }
    }
    export namespace message {
        const query_5: string;
        export { query_5 as query };
        export const channels: any[];
        export const channelsKeyFromQuery: any[];
        export const channelsData: {};
        export const remainedNewConversationsNum: number;
        export const unreadCount: number;
        export const activeChannelKey: any;
        export const messageChannelSearchInputFocus: boolean;
        export namespace pagination_6 {
            export const totalChannels: number;
            export const currentPage: number;
            export const perPage: number;
            export const totalPages: number;
            export const hasNextPage: boolean;
        }
        export { pagination_6 as pagination };
        export namespace chatBoxInfo {
            export const currentUserId: any;
            export const docClientWidth: number;
            export const channelsHidedChunk: any[];
            export const channelsNotHidedChunk: any[];
        }
        export const inputCache: {};
        export const needRefetchChannels: boolean;
        export const getChannelsError: any;
        export const channelsSyncWithWithBoxApi: boolean;
    }
    export namespace resumeScan {
        export const resumeScans: any[];
        export const getResumeScansError: any;
    }
    export namespace jeCdd {
        export const currentJeCdd: any;
    }
    export namespace page_4 {
        export namespace careerPage {
            export const pages: any[];
            const pagination_7: {};
            export { pagination_7 as pagination };
        }
        export const pageMeta: {};
        export const recommendedCompanies: any[];
        export namespace followingCompanies {
            const pages_1: any[];
            export { pages_1 as pages };
            const pagination_8: {};
            export { pagination_8 as pagination };
        }
    }
    export { page_4 as page };
    export namespace testSession {
        export namespace testSessions {
            export const coding_tests: {};
            export const test_sessions: any[];
            const pagination_9: {};
            export { pagination_9 as pagination };
        }
    }
    export namespace post {
        export namespace favoritePosts {
            export const posts: any[];
            const pagination_10: {};
            export { pagination_10 as pagination };
        }
    }
    export namespace resume {
        export const cacheList: any[];
        export const resumeCache: {};
        export namespace currentView {
            export const path: string;
            export namespace user {
                export const name: string;
            }
        }
        export namespace resumeDisplayPaths {
            export const previous: string;
            export const current: string;
            export const next: string;
        }
        export const similarResumes: any[];
        export const resumeMeta: {};
        export namespace currentUserResumes {
            const items_1: any[];
            export { items_1 as items };
            const pagination_11: {};
            export { pagination_11 as pagination };
        }
        export namespace currentUserResumeReviews {
            export const reviews: any[];
            const pagination_12: {};
            export { pagination_12 as pagination };
        }
        export namespace favoriteResumes {
            const items_2: any[];
            export { items_2 as items };
            const pagination_13: {};
            export { pagination_13 as pagination };
        }
        export const currentUserPublishedResumes: any[];
        export const resumeImpressions: {};
        export namespace loading {
            const resumeImpressions_1: boolean;
            export { resumeImpressions_1 as resumeImpressions };
        }
    }
    export namespace search_1 {
        const searchState_1: {};
        export { searchState_1 as searchState };
        export const resultsState: {};
        export const currentHits: any[];
        const hasSSRFirstResultsState_1: boolean;
        export { hasSSRFirstResultsState_1 as hasSSRFirstResultsState };
    }
    export { search_1 as search };
    export namespace skill {
        export const skillsCacheKeys: any[];
        export const skills: {};
        export const recommendSkills: any[];
        export const skillsAutoComplete: any[];
        export const duplicatedSkillVal: any;
    }
    export namespace subscription {
        export const isIndex: boolean;
        export const isEditing: boolean;
        export const subscriptions: any[];
        export const currentSubscription: {};
        export const subscriptionId: any;
        export const jobSubscriptions: any[];
    }
    export namespace pricing {
        export const resumePricing: {};
        export const talentSearchPricing: {};
        export const jobListingPricing: {};
        export const bundlePricing: {};
    }
    export namespace ui {
        export const activeView: string;
        export const isMobile: boolean;
        export const showAuth: boolean;
        export const showResumeModal: boolean;
        export const showFolderModal: boolean;
        export const showCreateFolderForm: boolean;
        export const showShareFolderModal: boolean;
        export const showConfirmModal: boolean;
        export const showImageUploadModal: boolean;
        export const showPageShareModal: boolean;
        export const showUpgradeModal: boolean;
        export const showResumeCommentModal: boolean;
        export const showResumeTagsModal: boolean;
        export const showPricingModal: boolean;
        export namespace modalOption {
            export namespace folder_1 {
                export const resumeUserName: string;
                export const resumePath: string;
            }
            export { folder_1 as folder };
            export namespace auth {
                export const showRegisterForm: boolean;
            }
            export const shareFolder: {};
            export const confirm: {};
            export namespace imageUploader {
                export const isProcessing: boolean;
            }
            const pricing_1: {};
            export { pricing_1 as pricing };
            export const codingTest: {};
        }
        export const globalAlerts: any[];
        export namespace form {
            export namespace basicInfo {
                export const status: string;
            }
            export namespace work_experiences {
                export const isCreating: boolean;
            }
            export namespace educations {
                const isCreating_1: boolean;
                export { isCreating_1 as isCreating };
            }
            export namespace jobSearchStatus {
                const status_1: string;
                export { status_1 as status };
            }
            export const isSubmitting: boolean;
        }
        export namespace formInitialState {
            export namespace basicInfo_1 {
                const status_2: string;
                export { status_2 as status };
            }
            export { basicInfo_1 as basicInfo };
            export namespace work_experiences_1 {
                const isCreating_2: boolean;
                export { isCreating_2 as isCreating };
            }
            export { work_experiences_1 as work_experiences };
            export namespace educations_1 {
                const isCreating_3: boolean;
                export { isCreating_3 as isCreating };
            }
            export { educations_1 as educations };
            export namespace jobSearchStatus_1 {
                const status_3: string;
                export { status_3 as status };
            }
            export { jobSearchStatus_1 as jobSearchStatus };
            const isSubmitting_1: boolean;
            export { isSubmitting_1 as isSubmitting };
        }
        export const buttonWithHint: any[];
        export const basePath: string;
        export const resumePathPrefix: string;
        export const countries: any[];
        export const cities: any[];
        export const industry: any[];
        export const profession: any[];
        export namespace location_1 {
            const current_1: any[];
            export { current_1 as current };
            export const cached: {};
        }
        export { location_1 as location };
        export const desiredPosition: any[];
    }
    export namespace user_1 {
        export namespace currentUser {
            const name_1: string;
            export { name_1 as name };
            export const username: string;
            const id_1: any;
            export { id_1 as id };
            export const first_name: any;
            export const last_name: any;
            export const email: any;
            export const description: string;
            export namespace cover_image {
                export namespace small {
                    export const url: any;
                }
                export namespace small_3_1 {
                    const url_1: any;
                    export { url_1 as url };
                }
                export namespace medium {
                    const url_2: any;
                    export { url_2 as url };
                }
                export namespace medium_3_1 {
                    const url_3: any;
                    export { url_3 as url };
                }
                const url_4: any;
                export { url_4 as url };
            }
            export namespace avatar {
                export namespace tiny {
                    const url_5: any;
                    export { url_5 as url };
                }
                export namespace small_1 {
                    const url_6: any;
                    export { url_6 as url };
                }
                export { small_1 as small };
                export namespace medium_1 {
                    const url_7: any;
                    export { url_7 as url };
                }
                export { medium_1 as medium };
                export namespace large {
                    const url_8: any;
                    export { url_8 as url };
                }
                export namespace xlarge {
                    const url_9: any;
                    export { url_9 as url };
                }
                const url_10: any;
                export { url_10 as url };
            }
            export const avatar_tiny_url: any;
            export const avatar_small_url: any;
            export const avatar_medium_url: any;
            export const has_phone: any;
            export const has_email: any;
            export const main_public_item_path: any;
            const posts_count_1: any;
            export { posts_count_1 as posts_count };
            export const profile_privacy_level: any;
            export const unconfirmed_email: any;
            export const signed_up_for: any;
            export const sign_in_count: number;
            export const plan: any;
            export const plan_path: string;
            export const online_status: any;
            export const aasm_state: string;
            export const created_at: string;
            export const updated_at: string;
            export const is_just_signed_up: boolean;
            export const items_unique_impressions_sum: number;
            export const pages_unique_impressions_sum: number;
            export const one_signal_player_id: string;
            export const fresh_chat_restore_id: any;
            export const permission: any;
            const locale_1: any;
            export { locale_1 as locale };
            export const country: any;
            const user_2: boolean;
            export { user_2 as user };
        }
        export namespace profile {
            const name_2: string;
            export { name_2 as name };
            const username_1: string;
            export { username_1 as username };
            const id_2: any;
            export { id_2 as id };
            const first_name_1: any;
            export { first_name_1 as first_name };
            const last_name_1: any;
            export { last_name_1 as last_name };
            const email_1: any;
            export { email_1 as email };
            const description_1: string;
            export { description_1 as description };
            export namespace avatar_1 {
                export namespace tiny_1 {
                    const url_11: any;
                    export { url_11 as url };
                }
                export { tiny_1 as tiny };
                export namespace small_2 {
                    const url_12: any;
                    export { url_12 as url };
                }
                export { small_2 as small };
                export namespace medium_2 {
                    const url_13: any;
                    export { url_13 as url };
                }
                export { medium_2 as medium };
                export namespace large_1 {
                    const url_14: any;
                    export { url_14 as url };
                }
                export { large_1 as large };
                export namespace xlarge_1 {
                    const url_15: any;
                    export { url_15 as url };
                }
                export { xlarge_1 as xlarge };
                const url_16: any;
                export { url_16 as url };
            }
            export { avatar_1 as avatar };
            export namespace cover_image_1 {
                export namespace small_3 {
                    const url_17: any;
                    export { url_17 as url };
                }
                export { small_3 as small };
                export namespace small_3_1_1 {
                    const url_18: any;
                    export { url_18 as url };
                }
                export { small_3_1_1 as small_3_1 };
                export namespace medium_3 {
                    const url_19: any;
                    export { url_19 as url };
                }
                export { medium_3 as medium };
                export namespace medium_3_1_1 {
                    const url_20: any;
                    export { url_20 as url };
                }
                export { medium_3_1_1 as medium_3_1 };
                const url_21: any;
                export { url_21 as url };
            }
            export { cover_image_1 as cover_image };
            const avatar_tiny_url_1: any;
            export { avatar_tiny_url_1 as avatar_tiny_url };
            const avatar_small_url_1: any;
            export { avatar_small_url_1 as avatar_small_url };
            const avatar_medium_url_1: any;
            export { avatar_medium_url_1 as avatar_medium_url };
            const has_phone_1: any;
            export { has_phone_1 as has_phone };
            const has_email_1: any;
            export { has_email_1 as has_email };
            const main_public_item_path_1: any;
            export { main_public_item_path_1 as main_public_item_path };
            const posts_count_2: any;
            export { posts_count_2 as posts_count };
            const profile_privacy_level_1: any;
            export { profile_privacy_level_1 as profile_privacy_level };
            export const desired_job_type: any;
            export const job_search_progress: any;
            export const work_experience: any;
            export const current_employment_status: any;
            export const relevant_work_experience: any;
            export const desired_position: any;
            export const remote: any;
            const country_1: any;
            export { country_1 as country };
            export const city: any;
            export const city_name: any;
            export const city_name_en: any;
            export const google_place_id: any;
            export const google_place_name: any;
            export const google_place_name_en: any;
            export const google_place_country_name_en: any;
            export const google_place_region_name_en: any;
            export const graduated_from_school: any;
            export const graduated_from_field: any;
            const online_status_1: any;
            export { online_status_1 as online_status };
            export const facebook_url: any;
            export const twitter_url: any;
            export const linkedin_url: any;
            export const github_url: any;
            export const stackoverflow_url: any;
            export const dribbble_url: any;
            export const behance_url: any;
            export const blog_url: any;
            export const website_url: any;
            export const role: any;
            const industry_1: any;
            export { industry_1 as industry };
            export const is_freelancer: any;
            const profession_1: any;
            export { profession_1 as profession };
            export const no_work_experience: any;
            export const no_education: any;
            export const number_of_management: any;
            const educations_2: any[];
            export { educations_2 as educations };
            const work_experiences_2: any[];
            export { work_experiences_2 as work_experiences };
            const unconfirmed_email_1: any;
            export { unconfirmed_email_1 as unconfirmed_email };
            export const skill_list: any[];
            export const phone: any;
            export const expected_salary_min: any;
            export const expected_salary_max: any;
            export const expected_salary_currency: any;
            export const desired_location_google_place_ids: any[];
            export const desired_location_names: any[];
            export const desired_location_names_en: any[];
            export const desired_location_country_names_en: any[];
            export const desired_location_region_names_en: any[];
            export const languages: any[];
            export const most_recent_work_experience: any;
            export const most_recent_education: any;
        }
        export namespace othersProfile {
            const name_3: string;
            export { name_3 as name };
            const username_2: string;
            export { username_2 as username };
            const id_3: any;
            export { id_3 as id };
            const first_name_2: any;
            export { first_name_2 as first_name };
            const last_name_2: any;
            export { last_name_2 as last_name };
            const email_2: any;
            export { email_2 as email };
            const description_2: string;
            export { description_2 as description };
            export namespace avatar_2 {
                export namespace tiny_2 {
                    const url_22: any;
                    export { url_22 as url };
                }
                export { tiny_2 as tiny };
                export namespace small_4 {
                    const url_23: any;
                    export { url_23 as url };
                }
                export { small_4 as small };
                export namespace medium_4 {
                    const url_24: any;
                    export { url_24 as url };
                }
                export { medium_4 as medium };
                export namespace large_2 {
                    const url_25: any;
                    export { url_25 as url };
                }
                export { large_2 as large };
                export namespace xlarge_2 {
                    const url_26: any;
                    export { url_26 as url };
                }
                export { xlarge_2 as xlarge };
                const url_27: any;
                export { url_27 as url };
            }
            export { avatar_2 as avatar };
            export namespace cover_image_2 {
                export namespace small_5 {
                    const url_28: any;
                    export { url_28 as url };
                }
                export { small_5 as small };
                export namespace small_3_1_2 {
                    const url_29: any;
                    export { url_29 as url };
                }
                export { small_3_1_2 as small_3_1 };
                export namespace medium_5 {
                    const url_30: any;
                    export { url_30 as url };
                }
                export { medium_5 as medium };
                export namespace medium_3_1_2 {
                    const url_31: any;
                    export { url_31 as url };
                }
                export { medium_3_1_2 as medium_3_1 };
                const url_32: any;
                export { url_32 as url };
            }
            export { cover_image_2 as cover_image };
            const avatar_tiny_url_2: any;
            export { avatar_tiny_url_2 as avatar_tiny_url };
            const avatar_small_url_2: any;
            export { avatar_small_url_2 as avatar_small_url };
            const avatar_medium_url_2: any;
            export { avatar_medium_url_2 as avatar_medium_url };
            const has_phone_2: any;
            export { has_phone_2 as has_phone };
            const has_email_2: any;
            export { has_email_2 as has_email };
            const main_public_item_path_2: any;
            export { main_public_item_path_2 as main_public_item_path };
            const posts_count_3: any;
            export { posts_count_3 as posts_count };
            const profile_privacy_level_2: any;
            export { profile_privacy_level_2 as profile_privacy_level };
            const desired_job_type_1: any;
            export { desired_job_type_1 as desired_job_type };
            const job_search_progress_1: any;
            export { job_search_progress_1 as job_search_progress };
            const work_experience_1: any;
            export { work_experience_1 as work_experience };
            const current_employment_status_1: any;
            export { current_employment_status_1 as current_employment_status };
            const relevant_work_experience_1: any;
            export { relevant_work_experience_1 as relevant_work_experience };
            const desired_position_1: any;
            export { desired_position_1 as desired_position };
            const remote_1: any;
            export { remote_1 as remote };
            const country_2: any;
            export { country_2 as country };
            const city_1: any;
            export { city_1 as city };
            const city_name_1: any;
            export { city_name_1 as city_name };
            const city_name_en_1: any;
            export { city_name_en_1 as city_name_en };
            const google_place_id_1: any;
            export { google_place_id_1 as google_place_id };
            const google_place_name_1: any;
            export { google_place_name_1 as google_place_name };
            const google_place_name_en_1: any;
            export { google_place_name_en_1 as google_place_name_en };
            const google_place_country_name_en_1: any;
            export { google_place_country_name_en_1 as google_place_country_name_en };
            const google_place_region_name_en_1: any;
            export { google_place_region_name_en_1 as google_place_region_name_en };
            const graduated_from_school_1: any;
            export { graduated_from_school_1 as graduated_from_school };
            const graduated_from_field_1: any;
            export { graduated_from_field_1 as graduated_from_field };
            const online_status_2: any;
            export { online_status_2 as online_status };
            const facebook_url_1: any;
            export { facebook_url_1 as facebook_url };
            const twitter_url_1: any;
            export { twitter_url_1 as twitter_url };
            const linkedin_url_1: any;
            export { linkedin_url_1 as linkedin_url };
            const github_url_1: any;
            export { github_url_1 as github_url };
            const stackoverflow_url_1: any;
            export { stackoverflow_url_1 as stackoverflow_url };
            const dribbble_url_1: any;
            export { dribbble_url_1 as dribbble_url };
            const behance_url_1: any;
            export { behance_url_1 as behance_url };
            const blog_url_1: any;
            export { blog_url_1 as blog_url };
            const website_url_1: any;
            export { website_url_1 as website_url };
            const role_1: any;
            export { role_1 as role };
            const industry_2: any;
            export { industry_2 as industry };
            const is_freelancer_1: any;
            export { is_freelancer_1 as is_freelancer };
            const profession_2: any;
            export { profession_2 as profession };
            const no_work_experience_1: any;
            export { no_work_experience_1 as no_work_experience };
            const no_education_1: any;
            export { no_education_1 as no_education };
            const number_of_management_1: any;
            export { number_of_management_1 as number_of_management };
            const educations_3: any[];
            export { educations_3 as educations };
            const work_experiences_3: any[];
            export { work_experiences_3 as work_experiences };
            const unconfirmed_email_2: any;
            export { unconfirmed_email_2 as unconfirmed_email };
            const skill_list_1: any[];
            export { skill_list_1 as skill_list };
            const phone_1: any;
            export { phone_1 as phone };
            const expected_salary_min_1: any;
            export { expected_salary_min_1 as expected_salary_min };
            const expected_salary_max_1: any;
            export { expected_salary_max_1 as expected_salary_max };
            const expected_salary_currency_1: any;
            export { expected_salary_currency_1 as expected_salary_currency };
            const desired_location_google_place_ids_1: any[];
            export { desired_location_google_place_ids_1 as desired_location_google_place_ids };
            const desired_location_names_1: any[];
            export { desired_location_names_1 as desired_location_names };
            const desired_location_names_en_1: any[];
            export { desired_location_names_en_1 as desired_location_names_en };
            const desired_location_country_names_en_1: any[];
            export { desired_location_country_names_en_1 as desired_location_country_names_en };
            const desired_location_region_names_en_1: any[];
            export { desired_location_region_names_en_1 as desired_location_region_names_en };
            const languages_1: any[];
            export { languages_1 as languages };
            const most_recent_work_experience_1: any;
            export { most_recent_work_experience_1 as most_recent_work_experience };
            const most_recent_education_1: any;
            export { most_recent_education_1 as most_recent_education };
        }
        export const hasTalentSearchPermission: boolean;
        export const hasPremiumSnippetsPermission: boolean;
        export const isLogin: boolean;
        export const isViewAsGuest: boolean;
        export const progress: number;
        export const publishedResumes: any[];
        export const resumes: any[];
        export const userMeta: {};
        export const ownPages: any[];
        export namespace txns {
            const txns_1: any[];
            export { txns_1 as txns };
            const pagination_14: {};
            export { pagination_14 as pagination };
        }
        export namespace requestedFollowers {
            export const requested_followers: any[];
            const pagination_15: {};
            export { pagination_15 as pagination };
        }
        export namespace requestedFollowees {
            export const requested_followees: any[];
            const pagination_16: {};
            export { pagination_16 as pagination };
        }
        export namespace settings {
            export const notifications: any;
        }
    }
    export { user_1 as user };
}
