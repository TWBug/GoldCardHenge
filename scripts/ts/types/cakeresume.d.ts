export namespace __APP_INITIAL_REDUX_STATE__ {

    export interface HierarchicalFacet {
        name: string;
        attributes: string[];
    }

    export interface FacetsRefinements {
    }

    export interface FacetsExcludes {
    }

    export interface DisjunctiveFacetsRefinements {
        location_list: any[];
        profession: any[];
        job_type: any[];
        seniority_level: string[];
        year_of_seniority: any[];
        number_of_management: any[];
        remote: any[];
        page.number_of_employees: any[];
        page.sector: any[];
        page.tech_labels: any[];
        lang_name: any[];
    }

    export interface SalaryRange {
        >=: number[];
    }

    export interface NumericRefinements {
        salary_range: SalaryRange;
    }

    export interface HierarchicalFacetsRefinements {
        salary_type: string[];
        salary_currency: any[];
    }

    export interface State {
        facets: any[];
        disjunctiveFacets: string[];
        hierarchicalFacets: HierarchicalFacet[];
        facetsRefinements: FacetsRefinements;
        facetsExcludes: FacetsExcludes;
        disjunctiveFacetsRefinements: DisjunctiveFacetsRefinements;
        numericRefinements: NumericRefinements;
        tagRefinements: any[];
        hierarchicalFacetsRefinements: HierarchicalFacetsRefinements;
        index: string;
        clickAnalytics: boolean;
        distinct: boolean;
        query: string;
        maxValuesPerFacet: number;
        page: number;
    }

    export interface Logo {
        tiny: string;
        thumb: string;
        medium: string;
        large: string;
    }

    export interface CoverImage {
        small_3_1: string;
        medium_3_1: string;
        large: string;
    }

    export interface Page {
        name: string;
        path: string;
        address: string;
        country: string;
        vertical_list?: any;
        funding_round_list?: any;
        unique_impressions_count: number;
        search_rank: number;
        created_at: Date;
        number_of_employees: string;
        aasm_state: string;
        featured: boolean;
        geo_street_address: string;
        geo_city: string;
        geo_state_name: string;
        geo_state_code: string;
        geo_zip: string;
        noindex: boolean;
        sector: string[];
        labels: any[];
        amount_of_capital?: number;
        id: number;
        last_active_at_by_week: number;
        content_updated_at: any;
        geo_region_l: string;
        logo: Logo;
        cover_image: CoverImage;
        tech_labels: string[];
    }

    export interface DescriptionPlainText {
        value: string;
        matchLevel: string;
    }

    export interface SnippetResult {
        description_plain_text: DescriptionPlainText;
    }

    export interface Title {
        value: string;
        matchLevel: string;
        fullyHighlighted: boolean;
        matchedWords: string[];
    }

    export interface Path {
        value: string;
        matchLevel: string;
        fullyHighlighted: boolean;
        matchedWords: string[];
    }

    export interface Category {
        value: string;
        matchLevel: string;
        matchedWords: any[];
    }

    export interface JobType {
        value: string;
        matchLevel: string;
        matchedWords: any[];
    }

    export interface SeniorityLevel {
        value: string;
        matchLevel: string;
        matchedWords: any[];
    }

    export interface DescriptionPlainText2 {
        value: string;
        matchLevel: string;
        fullyHighlighted: boolean;
        matchedWords: string[];
    }

    export interface Profession {
        value: string;
        matchLevel: string;
        matchedWords: any[];
    }

    export interface Name {
        value: string;
        matchLevel: string;
        matchedWords: any[];
    }

    export interface Path2 {
        value: string;
        matchLevel: string;
        matchedWords: any[];
    }

    export interface Address {
        value: string;
        matchLevel: string;
        matchedWords: any[];
    }

    export interface Page2 {
        name: Name;
        path: Path2;
        address: Address;
    }

    export interface TagList {
        value: string;
        matchLevel: string;
        matchedWords: string[];
        fullyHighlighted?: boolean;
    }

    export interface HighlightResult {
        title: Title;
        path: Path;
        category: Category;
        job_type: JobType;
        seniority_level: SeniorityLevel;
        description_plain_text: DescriptionPlainText2;
        profession: Profession[];
        page: Page2;
        tag_list: TagList[];
    }

    export interface Hit {
        title: string;
        path: string;
        tag_list: string[];
        unique_impressions_count: number;
        search_rank: number;
        created_at: Date;
        expired_at: Date;
        work_experience_list: any[];
        job_function_list: any[];
        category: string;
        job_type: string;
        seniority_level: string;
        aasm_state: string;
        sponsored?: any;
        signing_bonus: number;
        salary_type: string;
        salary_currency: string;
        number_of_openings: number;
        lang: string;
        remote: string;
        number_of_management: string;
        year_of_seniority: string;
        min_work_exp_year?: number;
        description_plain_text: string;
        requirements_plain_text: string;
        salary_min: number;
        salary_max: number;
        salary_range: number[];
        salary_score: number;
        lang_name: string;
        content_updated_at: any;
        noindex: boolean;
        location_list: string[];
        flat_location_list: string[];
        profession: string[];
        page: Page;
        fresh_score: number;
        unique_impressions_count_score: number;
        up_votes_score: number;
        job_applications_count_score: number;
        objectID: string;
        _snippetResult: SnippetResult;
        _highlightResult: HighlightResult;
    }

    export interface Remote {
        optional_remote_work: number;
    }

    export interface JobType2 {
        full_time: number;
    }

    export interface LangName {
        English: number;
    }

    export interface Profession2 {
        it: number;
        it_devops-system-admin: number;
    }

    export interface PageSector {
        tech: number;
        tech_consumer-electronics: number;
    }

    export interface SalaryType {
        per_year: number;
        per_month?: number;
    }

    export interface SalaryRange2 {
        0: number;
        800000: number;
        1800000: number;
    }

    export interface LocationList {
        Taipei, Taiwan: number;
        Taiwan: number;
        台北: number;
        台灣: number;
        台灣台北: number;
    }

    export interface SalaryCurrency {
        TWD: number;
    }

    export interface SeniorityLevel2 {
        mid_senior_level: number;
        associate?: number;
        director?: number;
        entry_level?: number;
    }

    export interface PageTechLabels {
        Amazon Web Services: number;
        Android: number;
        C: number;
        C++: number;
        GitHub: number;
        Go: number;
        MongoDB: number;
        Node.js: number;
        Python: number;
        React: number;
        Terraform: number;
    }

    export interface YearOfSeniority {
        3_5: number;
    }

    export interface NumberOfManagement {
        none: number;
    }

    export interface PageNumberOfEmployees {
        1001_5000: number;
        51_200: number;
    }

    export interface Facets {
        remote: Remote;
        job_type: JobType2;
        lang_name: LangName;
        profession: Profession2;
        page.sector: PageSector;
        salary_type: SalaryType;
        salary_range: SalaryRange2;
        location_list: LocationList;
        salary_currency: SalaryCurrency;
        seniority_level: SeniorityLevel2;
        page.tech_labels: PageTechLabels;
        year_of_seniority: YearOfSeniority;
        number_of_management: NumberOfManagement;
        page.number_of_employees: PageNumberOfEmployees;
    }

    export interface SalaryRange3 {
        min: number;
        max: number;
        avg: number;
        sum: number;
    }

    export interface FacetsStats {
        salary_range: SalaryRange3;
    }

    export interface RenderingContent {
    }

    export interface Result {
        hits: Hit[];
        nbHits: number;
        page: number;
        nbPages: number;
        hitsPerPage: number;
        facets: Facets;
        facets_stats: FacetsStats;
        exhaustiveFacetsCount: boolean;
        exhaustiveNbHits: boolean;
        exhaustiveTypo: boolean;
        query: string;
        params: string;
        index: string;
        queryID: string;
        renderingContent: RenderingContent;
        processingTimeMS: number;
    }

    export interface Job {
        state: State;
        results: Result[];
    }

    export interface InitialResults {
        Job: Job;
    }

    export interface ServerState {
        initialResults: InitialResults;
    }

    export interface Common {
        language.en: string;
        language.es: string;
        language.fr: string;
        language.id: string;
        language.ja: string;
        language.ko: string;
        language.vi: string;
        language.zh-CN: string;
        language.zh-TW: string;
        symbol.separator: string;
        symbol.comma: string;
        symbol.hyphen: string;
        time_format.time: string;
        time_format.weekday_time: string;
        time_format.weekday: string;
        time_format.month_day_time: string;
        time_format.month_day: string;
        time_format.year_day_time: string;
        time_format.year_day: string;
        time_format.year_month: string;
        time_format.present: string;
        time_format.n_year: string;
        time_format.n_year@one: string;
        time_format.n_year@other: string;
        time_format.n_month: string;
        time_format.n_month@one: string;
        time_format.n_month@other: string;
        terminology.job: string;
        terminology.company: string;
        terminology.resume_builder: string;
        terminology.resume_builder_plans: string;
        terminology.job_posting: string;
        terminology.job_posting_plans: string;
        terminology.talent_search: string;
        terminology.talent_search_plans: string;
        terminology.help_center: string;
        terminology.press_kit: string;
        terminology.terms_of_service: string;
        terminology.privacy_policy: string;
        terminology.app_job_search: string;
        terminology.employer_branding: string;
        status.following: string;
        status.saved: string;
        action.download_app_store: string;
        action.download_google_play: string;
        action.sign_in: string;
        action.sign_out: string;
        action.sign_up: string;
        action.add: string;
        action.create: string;
        action.update: string;
        action.save: string;
        action.delete: string;
        action.cancel: string;
        action.edit: string;
        action.confirm: string;
        action.previous: string;
        action.next: string;
        action.more: string;
        action.follow: string;
        action.unfollow: string;
        action.select: string;
        action.select_all: string;
        action.done: string;
        action.skip: string;
        action.close: string;
        action.search: string;
        action.share: string;
        action.publish: string;
        action.view_on_dashboard: string;
        action.back_to_dashboard: string;
        action.talk_to_our_consultants: string;
        action.reset: string;
        message.info: string;
        message.success: string;
        message.error: string;
        message.copied: string;
        message.updated: string;
        message.updating: string;
        message.no_results: string;
        header.find_jobs.title: string;
        header.find_jobs.job_search.title: string;
        header.find_jobs.job_search.subtitle: string;
        header.find_jobs.jobespresso_2c.title: string;
        header.find_jobs.jobespresso_2c.subtitle: string;
        header.find_jobs.app_job_search.title: string;
        header.find_jobs.app_job_search.subtitle: string;
        header.resume.title: string;
        header.resume.resume_all_examples: string;
        header.resume.resume_builder.title: string;
        header.resume.resume_builder.subtitle: string;
        header.resume.resume_ideas.title: string;
        header.resume.resume_ideas.subtitle: string;
        header.resume.resume_templates.title: string;
        header.resume.resume_templates.subtitle: string;
        header.resume.resume_examples.title: string;
        header.resume.resume_examples.subtitle: string;
        header.resume.resume_format.title: string;
        header.resume.resume_format.subtitle: string;
        header.resume.resume_how_to.title: string;
        header.resume.resume_how_to.subtitle: string;
        header.resume.resume_help.title: string;
        header.resume.resume_help.subtitle: string;
        header.resume.resume_builder_plans: string;
        header.cv.title: string;
        header.cv.cv_all_examples: string;
        header.cv.cv_builder.title: string;
        header.cv.cv_builder.subtitle: string;
        header.cv.cv_ideas.title: string;
        header.cv.cv_ideas.subtitle: string;
        header.cv.cv_templates.title: string;
        header.cv.cv_templates.subtitle: string;
        header.cv.cv_examples.title: string;
        header.cv.cv_examples.subtitle: string;
        header.cv.cv_format.title: string;
        header.cv.cv_format.subtitle: string;
        header.cv.cv_how_to.title: string;
        header.cv.cv_how_to.subtitle: string;
        header.cv.cv_help.title: string;
        header.cv.cv_help.subtitle: string;
        header.cv.cv_builder_plans: string;
        header.portfolio.title: string;
        header.portfolio.portfolio.title: string;
        header.portfolio.portfolio.subtitle: string;
        header.portfolio.portfolio_ideas.title: string;
        header.portfolio.portfolio_ideas.subtitle: string;
        header.articles.title: string;
        header.articles.talent_connect.title: string;
        header.articles.talent_connect.subtitle: string;
        header.articles.podcast_apple: string;
        header.articles.podcast_google: string;
        header.articles.podcast_spotify: string;
        header.articles.for_job_seekers: string;
        header.articles.for_recruiters: string;
        header.articles.article_all_categories: string;
        header.hire.title: string;
        header.hire.talent_search.title: string;
        header.hire.talent_search.subtitle: string;
        header.hire.job_posting.title: string;
        header.hire.job_posting.subtitle: string;
        header.hire.recruitment_service.title: string;
        header.hire.recruitment_service.subtitle: string;
        header.hire.employer_branding.title: string;
        header.hire.employer_branding.subtitle: string;
        header.hire.jobespresso_2b.title: string;
        header.hire.jobespresso_2b.subtitle: string;
        header.hire.job_posting_plans: string;
        header.hire.talent_search_plans: string;
        header.community.title: string;
        header.user.dashboard: string;
        header.user.my_resumes: string;
        header.user.my_portfolio: string;
        header.user.settings: string;
        header.user.plan_and_billing: string;
        header.user.free_upgrade: string;
        header.user.referral: string;
        header.user.account_and_billing: string;
        header.user.notification_settings: string;
        header.user.help_center: string;
        header.user.upgrade: string;
        header.user.page.applications: string;
        footer.company.title: string;
        footer.company.about: string;
        footer.company.resume_builder_plans: string;
        footer.company.job_posting_plans: string;
        footer.company.talent_search_plans: string;
        footer.company.press_kit: string;
        footer.company.hiring: string;
        footer.company.contact_us: string;
        footer.company.terms_of_service: string;
        footer.company.privacy_policy: string;
        footer.solutions.title: string;
        footer.solutions.resume_builder: string;
        footer.solutions.portfolio: string;
        footer.solutions.job_search: string;
        footer.solutions.job_posting: string;
        footer.solutions.talent_search: string;
        footer.solutions.recruitment_service: string;
        footer.solutions.employer_branding: string;
        footer.job_search.title: string;
        footer.job_search.categories: string;
        footer.job_search.remote: string;
        footer.job_search.internship: string;
        footer.job_search.part_time: string;
        footer.resources.title: string;
        footer.resources.articles: string;
        footer.resources.ebooks: string;
        footer.resources.resume_examples: string;
        footer.resources.resume_templates: string;
        footer.resources.help_center: string;
        footer.languages.title: string;
        footer.follow_us.title: string;
        footer.follow_us.description: string;
        footer.app_job_search.title: string;
        category.target_reader.job_seekers: string;
        category.target_reader.recruiters: string;
        category.article.all: string;
        category.article.resume: string;
        category.article.job_searching_guide: string;
        category.article.job_interview: string;
        category.article.career: string;
        category.article.job_searching_resource: string;
        category.article.company_interview: string;
        category.article.recruitment_guides: string;
        category.article.recruitment_partnership: string;
        category.resume_example.administrative: string;
        category.resume_example.design: string;
        category.resume_example.engineering: string;
        category.resume_example.finance: string;
        category.resume_example.management: string;
        category.resume_example.media: string;
        category.resume_example.sales: string;
        category.resume_example.service: string;
        category.resume_example.technology: string;
        flash_message.job_saved.follow_company_hint: string;
    }

    export interface Widget {
        messenger.title: string;
        messenger.message.new_message_document_title: string;
        messenger.message.my_message: string;
        messenger.message.new_message: string;
        messenger.message.attachment: string;
        messenger.message.empty: string;
        messenger.message.empty_description: string;
        messenger.message.job_preview_title: string;
        messenger.message.conversation_invited: string;
        messenger.message.conversation_declined: string;
        messenger.message.new_conversation_title: string;
        messenger.message.new_conversation_description: string;
        messenger.message.new_conversation_description_article: string;
        messenger.message.upgrade_hint_1: string;
        messenger.message.upgrade_hint_2: string;
        messenger.message.press_enter_to_send: string;
        messenger.message.search_hint: string;
        messenger.placeholder: string;
        messenger.action.search_companies: string;
        messenger.action.search_talents: string;
        messenger.action.send: string;
        messenger.action.accept_conversation: string;
        messenger.action.decline_conversation: string;
        messenger.action.resume_conversation: string;
        messenger.action.start_conversation: string;
        messenger.action.upgrade: string;
        message_channel_list.title: string;
        message_channel_list.action.view_all: string;
        notification.title: string;
        notification.message.empty: string;
        notification.message.empty_description: string;
        notification.action.view_all: string;
        notification.action.mark_all_as_read: string;
        connection.action.connect: string;
        connection.action.pending: string;
        connection.action.received: string;
        connection.action.connected: string;
        connection.action.accept: string;
        connection.action.reject: string;
        connection.action.cancel: string;
        connection.action.remove: string;
        recommendations.title: string;
        recommendations.action.view_all: string;
        network_import.title: string;
        network_import.description: string;
        profile_sidebar.current_job_progress: string;
        profile_sidebar.tooltip.completion_ratio: string;
        profile_sidebar.link.profile: string;
        profile_sidebar.link.resume: string;
        profile_sidebar.link.portfolio: string;
        profile_sidebar.link.recommendations: string;
        profile_sidebar.link.posts: string;
        profile_sidebar.link.profile_views: string;
        profile_sidebar.link.profile_views@one: string;
        profile_sidebar.link.profile_views@other: string;
        profile_sidebar.link.connections: string;
        profile_sidebar.link.connections@one: string;
        profile_sidebar.link.connections@other: string;
        profile_sidebar.link.mutual_connections: string;
        profile_sidebar.link.mutual_connections@one: string;
        profile_sidebar.link.mutual_connections@other: string;
        company_sidebar.link.applicants: string;
        company_sidebar.link.applicants@one: string;
        company_sidebar.link.applicants@other: string;
        company_sidebar.link.jobs: string;
        company_sidebar.link.jobs@one: string;
        company_sidebar.link.jobs@other: string;
        company_sidebar.link.page_views: string;
        company_sidebar.link.page_views@one: string;
        company_sidebar.link.page_views@other: string;
        hashtag_info.message.posts: string;
        hashtag_info.message.posts@one: string;
        hashtag_info.message.posts@other: string;
        hashtag_info.action.follow: string;
        hashtag_info.action.following: string;
        popular_hashtags.title: string;
        popular_hashtags.message.posts: string;
        popular_hashtags.message.posts@one: string;
        popular_hashtags.message.posts@other: string;
        dialog.action.cancel: string;
        dialog.action.proceed: string;
        recent_search.title: string;
        recent_search.action.clear_all: string;
        global_search.placeholder: string;
        user_card.message.present: string;
        user_card.message.high_completion_ratio: string;
        user_card.message.past_experience: string;
        user_card.message.past_experience_at: string;
        user_card.message.past_education: string;
        company_card.message.jobs: string;
        company_card.message.jobs@one: string;
        company_card.message.jobs@other: string;
        useful_links.title: string;
        useful_links.link.build_resume: string;
        useful_links.link.resume_examples: string;
        useful_links.link.job_search: string;
        useful_links.link.talent_search: string;
        confirm_email.title.verify_email: string;
        confirm_email.title.update_email: string;
        confirm_email.title.check_code: string;
        confirm_email.description.verify_email: string;
        confirm_email.description.check_code: string;
        confirm_email.field.code.label: string;
        confirm_email.field.code.placeholder: string;
        confirm_email.action.send_confirmation: string;
        confirm_email.action.resend_confirmation: string;
        confirm_email.action.update_email: string;
        confirm_email.footnote.not_your_email: string;
        confirm_email.footnote.did_not_get_email: string;
        promote_resume_builder.title: string;
        promote_resume_builder.description: string;
        promote_resume_builder.action.create_resume: string;
        popular_companies.title: string;
        popular_companies.description: string;
        popular_companies.jobs: string;
        popular_companies.jobs@one: string;
        popular_companies.jobs@other: string;
        popular_companies.action.browse: string;
        interview_invitation.title: string;
        interview_invitation.tooltip: string;
        interview_invitation.message.preview: string;
        interview_invitation.message.message_default: string;
        interview_invitation.message.message_description: string;
        interview_invitation.message.remaining_invitations: string;
        interview_invitation.message.remaining_invitations@one: string;
        interview_invitation.message.remaining_invitations@other: string;
        interview_invitation.message.hint_max_invitations: string;
        interview_invitation.message.hint_upgrade: string;
        interview_invitation.message.no_companies: string;
        interview_invitation.message.no_jobs: string;
        interview_invitation.message.success: string;
        interview_invitation.field.company: string;
        interview_invitation.field.job: string;
        interview_invitation.field.message: string;
        interview_invitation.placeholder.company: string;
        interview_invitation.placeholder.job: string;
        interview_invitation.action.post_jobs: string;
        interview_invitation.action.submit: string;
        auth_modal.title: string;
        auth_modal.message.or: string;
        auth_modal.message.forgot_password: string;
        auth_modal.message.already_signed_up: string;
        auth_modal.message.not_yet_signed_up: string;
        auth_modal.message.accept: string;
        auth_modal.message.accept_terms: string;
        auth_modal.message.accept_privacy: string;
        auth_modal.field.remember: string;
        auth_modal.placeholder.name: string;
        auth_modal.placeholder.email: string;
        auth_modal.placeholder.password: string;
        viewed_and_saved_jobs.viewed_jobs: string;
        viewed_and_saved_jobs.saved_jobs: string;
        image_upload_modal.title: string;
        image_upload_modal.dropzone_hint: string;
        image_edit_modal.title: string;
        image_edit_modal.cropping_option.original: string;
        image_edit_modal.cropping_option.wide: string;
        image_edit_modal.cropping_option.square: string;
        job_search_guest_hint.title: string;
        job_search_guest_hint.description: string;
        job_search_guest_hint.action.sign_up: string;
        job_search_guest_hint.action.post_jobs: string;
        tech_stack_list.title: string;
    }

    export interface Attribute {
        language_proficiency.0: string;
        language_proficiency.1: string;
        language_proficiency.2: string;
        language_proficiency.3: string;
        language_proficiency.4: string;
        salary_type.per_day: string;
        salary_type.per_hour: string;
        salary_type.per_month: string;
        salary_type.per_year: string;
        salary_type.piece_rate_pay: string;
        job_type.full_time: string;
        job_type.part_time: string;
        job_type.intern: string;
        job_type.internship: string;
        job_type.contract: string;
        job_type.freelance: string;
        job_type.temporary: string;
        job_type.volunteer: string;
        seniority_level.entry_level: string;
        seniority_level.mid_senior_level: string;
        seniority_level.internship_level: string;
        seniority_level.associate: string;
        seniority_level.director: string;
        seniority_level.executive: string;
        online_status.online: string;
        online_status.active: string;
        online_status.offline: string;
        folder_user_role.owner: string;
        folder_user_role.collaborator: string;
        folder_user_role.viewer: string;
        update_days_ago_level.7: string;
        update_days_ago_level.14: string;
        update_days_ago_level.30: string;
        update_days_ago_level.60: string;
        update_days_ago_level.90: string;
        update_days_ago_level.180: string;
        update_days_ago_level.365: string;
        update_days_ago_level.366: string;
        employment_status.employed: string;
        employment_status.unemployed: string;
        employment_status.studying: string;
        employment_status.in_military_service: string;
        job_search_progress.not_open_to_opportunities: string;
        job_search_progress.open_to_opportunities: string;
        job_search_progress.ready_to_interview: string;
        remote.not_interested: string;
        remote.interested: string;
        remote.remote_only: string;
        work_experience._one: string;
        work_experience.one_two: string;
        work_experience.two_four: string;
        work_experience.four_six: string;
        work_experience.six_ten: string;
        work_experience.ten_fifteen: string;
        work_experience.fifteen_: string;
        freelance.full_time_freelancer: string;
        freelance.part_time_freelancer: string;
        freelance.not_freelancer: string;
        degree_type.associate_s_degree: string;
        degree_type.bachelor_of_arts_ba: string;
        degree_type.bachelor_of_business_administration_bba: string;
        degree_type.bachelor_of_engineering_beng: string;
        degree_type.bachelor_of_fine_arts_bfa: string;
        degree_type.bachelor_of_science_bs: string;
        degree_type.bachelor_s_degree: string;
        degree_type.engineer_s_degree: string;
        degree_type.master_of_arts_ma: string;
        degree_type.master_of_business_administration_mba: string;
        degree_type.master_of_fine_arts_mfa: string;
        degree_type.master_of_science_ms: string;
        degree_type.master_s_degree: string;
        degree_type.doctor_of_philosophy_phd: string;
        degree_type.doctor_of_medicine_md: string;
        degree_type.juris_doctor_jd: string;
        degree_type.high_school_diploma: string;
        degree_type.non_degree_program_e_g_coursera_certificate: string;
        degree_type.other: string;
        read_status.read: string;
        read_status.unread: string;
        management.description: string;
        management.none: string;
        management.one_five: string;
        management.five_ten: string;
        management.ten_fifteen: string;
        management.fifteen_: string;
        work_exp_year.no_requirement: string;
        work_exp_year.n_years_required: string;
        year_of_seniority.0_1: string;
        year_of_seniority.1_3: string;
        year_of_seniority.3_5: string;
        year_of_seniority.5_10: string;
        year_of_seniority.10_: string;
        number_of_employees.1_10: string;
        number_of_employees.11_50: string;
        number_of_employees.51_200: string;
        number_of_employees.201_500: string;
        number_of_employees.501_1000: string;
        number_of_employees.1001_5000: string;
        number_of_employees.5001_: string;
    }

    export interface Sector {
        sector_groups.advertising-marketing-agency: string;
        sector_groups.agriculture: string;
        sector_groups.architecture: string;
        sector_groups.banking-insurance-finance: string;
        sector_groups.consulting-audit: string;
        sector_groups.corporate-services: string;
        sector_groups.culture-media-entertainment: string;
        sector_groups.design-art: string;
        sector_groups.distribution: string;
        sector_groups.education-training-recruitment: string;
        sector_groups.fashion-luxury-beauty-lifestyle: string;
        sector_groups.food-and-beverage: string;
        sector_groups.health-social-environment: string;
        sector_groups.hotel-tourism-leisure: string;
        sector_groups.industry: string;
        sector_groups.legal-law: string;
        sector_groups.medical: string;
        sector_groups.mobility-transport: string;
        sector_groups.non-profit-association: string;
        sector_groups.public-administration: string;
        sector_groups.real-estate: string;
        sector_groups.tech: string;
        sector_groups.service-industry: string;
        sector_groups.corporate-solutions: string;
        sectors.advertising-marketing-agency_adtech-martech: string;
        sectors.advertising-marketing-agency_advertising: string;
        sectors.advertising-marketing-agency_design: string;
        sectors.advertising-marketing-agency_digital: string;
        sectors.advertising-marketing-agency_event-management: string;
        sectors.advertising-marketing-agency_marketing-communications: string;
        sectors.advertising-marketing-agency_public-relations: string;
        sectors.agriculture_dairy: string;
        sectors.agriculture_farming: string;
        sectors.agriculture_fishery: string;
        sectors.architecture_architecture: string;
        sectors.architecture_interior-design: string;
        sectors.banking-insurance-finance_banking: string;
        sectors.banking-insurance-finance_finance: string;
        sectors.banking-insurance-finance_fintech-insurtech: string;
        sectors.banking-insurance-finance_insurance: string;
        sectors.banking-insurance-finance_investment-banking: string;
        sectors.banking-insurance-finance_investment-management: string;
        sectors.banking-insurance-finance_venture-capital-private-equity: string;
        sectors.consulting-audit_accounting: string;
        sectors.consulting-audit_audit: string;
        sectors.consulting-audit_change-management: string;
        sectors.consulting-audit_design-engineering-office: string;
        sectors.consulting-audit_digital-marketing-data-marketing: string;
        sectors.consulting-audit_events-services: string;
        sectors.consulting-audit_it-digital: string;
        sectors.consulting-audit_organization-management: string;
        sectors.consulting-audit_strategy: string;
        sectors.consulting-audit_supply-chain: string;
        sectors.consulting-audit_transaction-services: string;
        sectors.corporate-services_corporate-concierge-services: string;
        sectors.corporate-services_corporate-support: string;
        sectors.corporate-services_coworking: string;
        sectors.corporate-services_incubator-accelerator: string;
        sectors.culture-media-entertainment_film: string;
        sectors.culture-media-entertainment_media: string;
        sectors.culture-media-entertainment_museums-cultural-institutions: string;
        sectors.culture-media-entertainment_music: string;
        sectors.culture-media-entertainment_print-media: string;
        sectors.culture-media-entertainment_publishing: string;
        sectors.culture-media-entertainment_sports: string;
        sectors.culture-media-entertainment_television-film-production: string;
        sectors.culture-media-entertainment_theater: string;
        sectors.culture-media-entertainment_video-games: string;
        sectors.design-art_design: string;
        sectors.design-art_fine-art: string;
        sectors.design-art_graphic-design: string;
        sectors.design-art_performing-arts: string;
        sectors.design-art_photography: string;
        sectors.distribution_e-commerce: string;
        sectors.distribution_mass-distribution: string;
        sectors.distribution_selective-distribution: string;
        sectors.distribution_wholesale: string;
        sectors.distribution_retail: string;
        sectors.education-training-recruitment_edtech: string;
        sectors.education-training-recruitment_education: string;
        sectors.education-training-recruitment_human-resources: string;
        sectors.education-training-recruitment_job-training: string;
        sectors.education-training-recruitment_recruitment: string;
        sectors.fashion-luxury-beauty-lifestyle_cosmetics: string;
        sectors.fashion-luxury-beauty-lifestyle_fashion: string;
        sectors.fashion-luxury-beauty-lifestyle_jewelry: string;
        sectors.fashion-luxury-beauty-lifestyle_lifestyle: string;
        sectors.fashion-luxury-beauty-lifestyle_luxury: string;
        sectors.food-and-beverage_beverage: string;
        sectors.food-and-beverage_consumer-goods: string;
        sectors.food-and-beverage_food-craft: string;
        sectors.food-and-beverage_food-production: string;
        sectors.food-and-beverage_foodservice: string;
        sectors.food-and-beverage_foodtech: string;
        sectors.food-and-beverage_gourmet-grocery: string;
        sectors.health-social-environment_collaborative-economy: string;
        sectors.health-social-environment_environment-sustainable-development: string;
        sectors.health-social-environment_health: string;
        sectors.health-social-environment_home-care-services: string;
        sectors.health-social-environment_socialtech-greentech: string;
        sectors.hotel-tourism-leisure_hotel: string;
        sectors.hotel-tourism-leisure_leisure: string;
        sectors.hotel-tourism-leisure_tourism: string;
        sectors.industry_aeronautics-space: string;
        sectors.industry_agri-food-animal-nutrition: string;
        sectors.industry_automotive: string;
        sectors.industry_building-public-works: string;
        sectors.industry_chemicals: string;
        sectors.industry_electronics-telecommunications: string;
        sectors.industry_energy: string;
        sectors.industry_furniture: string;
        sectors.industry_manufacturing: string;
        sectors.industry_material-science: string;
        sectors.industry_mechanical-or-industrial-engineering: string;
        sectors.industry_metallurg: string;
        sectors.industry_mining-metals: string;
        sectors.industry_nanotechnology: string;
        sectors.industry_pharmaceutical-biotech: string;
        sectors.industry_rail: string;
        sectors.legal-law_law: string;
        sectors.legal-law_legal-department: string;
        sectors.medical_medical-devices: string;
        sectors.medical_medical-practice: string;
        sectors.medical_mental-health-care: string;
        sectors.mobility-transport_logistics: string;
        sectors.mobility-transport_mobility: string;
        sectors.mobility-transport_shipping-and-ground-transport: string;
        sectors.non-profit-association_foundation: string;
        sectors.non-profit-association_ngo: string;
        sectors.non-profit-association_nonprofit: string;
        sectors.public-administration_public-administration: string;
        sectors.public-administration_public-and-local-agencies: string;
        sectors.public-administration_unions-and-labor-organisation: string;
        sectors.real-estate_commercial-real-estate: string;
        sectors.real-estate_residential-real-estate: string;
        sectors.tech_artificial-intelligence-machine-learning: string;
        sectors.tech_automatic-control: string;
        sectors.tech_big-data: string;
        sectors.tech_blockchain: string;
        sectors.tech_computer-networking: string;
        sectors.tech_connected-objects: string;
        sectors.tech_consumer-electronics: string;
        sectors.tech_cyber-security: string;
        sectors.tech_gambling-casinos: string;
        sectors.tech_games: string;
        sectors.tech_hardware: string;
        sectors.tech_information-services: string;
        sectors.tech_ar-vr: string;
        sectors.tech_ecommerce: string;
        sectors.tech_internet: string;
        sectors.tech_mobile-apps: string;
        sectors.tech_robotics: string;
        sectors.tech_saas-cloud-services: string;
        sectors.tech_semiconductor: string;
        sectors.tech_software: string;
        sectors.service-industry_rental-and-leasing-services: string;
        sectors.service-industry_hairdressing-and-beauty-services: string;
        sectors.service-industry_housekeeping-services: string;
        sectors.service-industry_pet-care-services: string;
        sectors.service-industry_security-services: string;
        sectors.service-industry_private-detective-services: string;
        sectors.service-industry_car-maintenance-services-scooter-and-motorcycle-maintenance-services: string;
        sectors.corporate-solutions_recruitment-services-worker-dispatch: string;
    }

    export interface Profession3 {
        profession_groups.bio-medical: string;
        profession_groups.construction: string;
        profession_groups.customer-service: string;
        profession_groups.design: string;
        profession_groups.education: string;
        profession_groups.engineering: string;
        profession_groups.finance: string;
        profession_groups.food-beverage: string;
        profession_groups.game-production: string;
        profession_groups.hr: string;
        profession_groups.it: string;
        profession_groups.law: string;
        profession_groups.logistics-trade: string;
        profession_groups.management-business: string;
        profession_groups.manufacturing: string;
        profession_groups.marketing-advertising: string;
        profession_groups.marketing-communications: string;
        profession_groups.media-communication: string;
        profession_groups.other: string;
        profession_groups.public-social-work: string;
        profession_groups.sales: string;
        professions.bio-medical_aide: string;
        professions.bio-medical_bio-medical-other: string;
        professions.bio-medical_biotechnology-researcher: string;
        professions.bio-medical_caregiver: string;
        professions.bio-medical_case-manager: string;
        professions.bio-medical_clinical-psychologist: string;
        professions.bio-medical_clinical-trial-nurse: string;
        professions.bio-medical_clinical-trial-researcher: string;
        professions.bio-medical_dental-hygienist: string;
        professions.bio-medical_dentist: string;
        professions.bio-medical_doctor: string;
        professions.bio-medical_geneticist: string;
        professions.bio-medical_hospital-coordinator: string;
        professions.bio-medical_laboratory-technician: string;
        professions.bio-medical_medical-records-technician: string;
        professions.bio-medical_medical-technologist: string;
        professions.bio-medical_microbiologist: string;
        professions.bio-medical_nurse: string;
        professions.bio-medical_nurse-s-aide: string;
        professions.bio-medical_occupational-therapist: string;
        professions.bio-medical_optometrist: string;
        professions.bio-medical_oriental-medical-doctor: string;
        professions.bio-medical_personal-carer: string;
        professions.bio-medical_pharmaceutical-analytical-chemist: string;
        professions.bio-medical_pharmacist: string;
        professions.bio-medical_pharmacist-assistant: string;
        professions.bio-medical_physical-therapist: string;
        professions.bio-medical_radiology: string;
        professions.bio-medical_researcher: string;
        professions.bio-medical_respiratory-disorders-therapist: string;
        professions.bio-medical_veterinarian: string;
        professions.bio-medical_veterinary-specialist: string;
        professions.construction_architect: string;
        professions.construction_carpenter: string;
        professions.construction_construction-inspector: string;
        professions.construction_construction-manager: string;
        professions.construction_construction-other: string;
        professions.construction_electrician: string;
        professions.construction_estimation-engineer: string;
        professions.construction_heavy-equipment-technician: string;
        professions.construction_installer: string;
        professions.construction_interior-architecture: string;
        professions.construction_maintenance-manager: string;
        professions.construction_maintenance-technician: string;
        professions.construction_manager: string;
        professions.construction_mechanic: string;
        professions.construction_painter: string;
        professions.construction_plant-manager: string;
        professions.construction_plumber: string;
        professions.construction_sanitary-engineer: string;
        professions.construction_site-manager: string;
        professions.construction_surveying-engineer: string;
        professions.construction_welder: string;
        professions.customer-service_crm-specialist: string;
        professions.customer-service_cs-advisor: string;
        professions.customer-service_customer-service-manager: string;
        professions.customer-service_customer-service-other: string;
        professions.customer-service_customer-service-representative: string;
        professions.customer-service_customer-service-support: string;
        professions.customer-service_esthetician: string;
        professions.customer-service_event-planner: string;
        professions.customer-service_fashion-merchandiser: string;
        professions.customer-service_flight-attendant: string;
        professions.customer-service_florist: string;
        professions.customer-service_franchise-manager: string;
        professions.customer-service_goods-manager: string;
        professions.customer-service_hair-designer: string;
        professions.customer-service_hairdresser: string;
        professions.customer-service_healthcare-manager: string;
        professions.customer-service_hotel-cleaning-services: string;
        professions.customer-service_hotel-reception: string;
        professions.customer-service_inbound-telemarketer: string;
        professions.customer-service_merchandiser: string;
        professions.customer-service_outbound-telemarketer: string;
        professions.customer-service_pet-stylist: string;
        professions.customer-service_production: string;
        professions.customer-service_receptionist: string;
        professions.customer-service_retail-merchandiser: string;
        professions.customer-service_retail-salesperson: string;
        professions.customer-service_sales-clerk: string;
        professions.customer-service_sales-manager: string;
        professions.customer-service_service-technician: string;
        professions.customer-service_stock-management: string;
        professions.customer-service_store-manager-management: string;
        professions.customer-service_technical-customer-service-engineering: string;
        professions.customer-service_travel-agent: string;
        professions.customer-service_travel-consultant: string;
        professions.customer-service_visual-merchandiser: string;
        professions.customer-service_waitstaff: string;
        professions.design_2d-designer: string;
        professions.design_3d-designer: string;
        professions.design_ad-designer: string;
        professions.design_art-director: string;
        professions.design_bi-bx-designer: string;
        professions.design_character-designer: string;
        professions.design_creative-director: string;
        professions.design_design-other: string;
        professions.design_editorial-designer: string;
        professions.design_exhibition-designer: string;
        professions.design_fashion-design: string;
        professions.design_furniture-designer: string;
        professions.design_graph-design-illustration: string;
        professions.design_illustrator: string;
        professions.design_industrial-designer: string;
        professions.design_interior-designer: string;
        professions.design_landscape-designer: string;
        professions.design_mobile-designer: string;
        professions.design_model-maker: string;
        professions.design_motion-design-video: string;
        professions.design_packaging-designer: string;
        professions.design_product-designer: string;
        professions.design_product-manager: string;
        professions.design_purchases: string;
        professions.design_space-designer: string;
        professions.design_textile-designer: string;
        professions.design_ui-design-gui-design: string;
        professions.design_ui-ux-design: string;
        professions.design_ux-design: string;
        professions.design_vmd-designer: string;
        professions.design_web-designer: string;
        professions.education_certification-and-technical-training: string;
        professions.education_educational-instructor: string;
        professions.education_educational-publisher: string;
        professions.education_elementary-middle-high-school-teacher: string;
        professions.education_faculty-staff: string;
        professions.education_foreign-language-educator: string;
        professions.education_kindergarten-and-childcare-teacher: string;
        professions.education_private-tutor: string;
        professions.engineering_aerospace-engineer: string;
        professions.engineering_agricultural-engineer: string;
        professions.engineering_automotive-engineer: string;
        professions.engineering_biological-scientist: string;
        professions.engineering_boiler-engineer: string;
        professions.engineering_cad-3d-engineer: string;
        professions.engineering_ceramic-engineer: string;
        professions.engineering_chemical-engineer: string;
        professions.engineering_civil-engineer: string;
        professions.engineering_construction-engineer: string;
        professions.engineering_contracts-engineer: string;
        professions.engineering_control-engineer: string;
        professions.engineering_drafter: string;
        professions.engineering_drilling-engineer: string;
        professions.engineering_electrical-engineer: string;
        professions.engineering_electro-mechanical-engineer: string;
        professions.engineering_electronic-relay-engineer: string;
        professions.engineering_electronics-engineer: string;
        professions.engineering_engineering-other: string;
        professions.engineering_environmental-engineer: string;
        professions.engineering_environmental-safety-engineer: string;
        professions.engineering_equipment-engineer: string;
        professions.engineering_facility-engineering: string;
        professions.engineering_fae-engineering: string;
        professions.engineering_fire-protection-engineer: string;
        professions.engineering_floor-plan-creator: string;
        professions.engineering_geographer: string;
        professions.engineering_geographic-information-systems-specialist: string;
        professions.engineering_geological-engineer: string;
        professions.engineering_health-and-safety-engineer: string;
        professions.engineering_high-voltage-design-engineer: string;
        professions.engineering_i-c-engineer: string;
        professions.engineering_industrial-engineer: string;
        professions.engineering_licensing-engineer: string;
        professions.engineering_marine-engineer: string;
        professions.engineering_materials-engineer: string;
        professions.engineering_mechanical-engineer: string;
        professions.engineering_metal-engineer: string;
        professions.engineering_microelectromechanical-systems-engineering: string;
        professions.engineering_mine-engineer: string;
        professions.engineering_mine-safety-engineer: string;
        professions.engineering_nuclear-engineer: string;
        professions.engineering_packaging-engineering: string;
        professions.engineering_petroleum-engineer: string;
        professions.engineering_pipe-design-engineer: string;
        professions.engineering_plant-engineer: string;
        professions.engineering_plastic-engineer: string;
        professions.engineering_process-engineer: string;
        professions.engineering_product-engineer: string;
        professions.engineering_production-engineer: string;
        professions.engineering_project-engineer: string;
        professions.engineering_qa-engineer: string;
        professions.engineering_qc-engineer: string;
        professions.engineering_rfic-engineering: string;
        professions.engineering_robot-ai: string;
        professions.engineering_rotary-machine-engineer: string;
        professions.engineering_rt-engineer: string;
        professions.engineering_structural-engineer: string;
        professions.engineering_test-and-trials-engineer: string;
        professions.engineering_turbine-engineer: string;
        professions.engineering_water-treatment-process-engineer: string;
        professions.engineering_radio-frequency-engineer: string;
        professions.finance_accountant-treasurer: string;
        professions.finance_actuary: string;
        professions.finance_analyst: string;
        professions.finance_appraiser: string;
        professions.finance_asset-manager: string;
        professions.finance_auditor: string;
        professions.finance_claims-manager: string;
        professions.finance_compliance-manager: string;
        professions.finance_corporate-finance: string;
        professions.finance_cpa: string;
        professions.finance_damage-appraiser: string;
        professions.finance_finance-other: string;
        professions.finance_financial-advisor: string;
        professions.finance_financial-analyst: string;
        professions.finance_financial-engineer: string;
        professions.finance_funds-manager: string;
        professions.finance_insurance-agent: string;
        professions.finance_investment-banker: string;
        professions.finance_investment-stock-manager: string;
        professions.finance_ir: string;
        professions.finance_management-accounting: string;
        professions.finance_market-finance: string;
        professions.finance_property-manager: string;
        professions.finance_realtor: string;
        professions.finance_tax-accountant: string;
        professions.finance_trader: string;
        professions.finance_underwriter: string;
        professions.food-beverage_baker-pastry: string;
        professions.food-beverage_barista: string;
        professions.food-beverage_bartender: string;
        professions.food-beverage_chef: string;
        professions.food-beverage_food-md: string;
        professions.food-beverage_food-processing-development: string;
        professions.food-beverage_food-stylist: string;
        professions.food-beverage_kitchen-staff: string;
        professions.food-beverage_nutritionist: string;
        professions.food-beverage_restaurant-management: string;
        professions.food-beverage_restaurant-manager: string;
        professions.food-beverage_restaurant-worker: string;
        professions.food-beverage_sommelier: string;
        professions.game-production_game-artist: string;
        professions.game-production_game-client-developer: string;
        professions.game-production_game-graphic-designer: string;
        professions.game-production_game-master: string;
        professions.game-production_game-planner: string;
        professions.game-production_game-server-developer: string;
        professions.game-production_mobile-game-developer: string;
        professions.game-production_unity-game-developer: string;
        professions.game-production_unreal-developer: string;
        professions.hr_e-learning: string;
        professions.hr_headhunter: string;
        professions.hr_hr-business-partner: string;
        professions.hr_hr-consultant: string;
        professions.hr_hr-development-training: string;
        professions.hr_hr-manager: string;
        professions.hr_labor-and-management: string;
        professions.hr_lecturer: string;
        professions.hr_performance-evaluation: string;
        professions.hr_professor: string;
        professions.hr_recruiter: string;
        professions.hr_salary-compensation: string;
        professions.hr_teacher: string;
        professions.hr_technology-educator: string;
        professions.it_analog-ic-design: string;
        professions.it_android-developer: string;
        professions.it_app-developer: string;
        professions.it_assistant-engineer: string;
        professions.it_back-end-engineer: string;
        professions.it_bi-engineer: string;
        professions.it_big-data-engineer: string;
        professions.it_bios-engineering: string;
        professions.it_blockchain-platform-engineer: string;
        professions.it_c-c-developer: string;
        professions.it_chief-information-officer: string;
        professions.it_chief-technology-officer: string;
        professions.it_data-engineer: string;
        professions.it_data-scientist: string;
        professions.it_database: string;
        professions.it_development-manager: string;
        professions.it_devops-system-admin: string;
        professions.it_digital-ic-design: string;
        professions.it_embedded-developer: string;
        professions.it_firmware-engineering: string;
        professions.it_front-end-engineer: string;
        professions.it_full-stack-development: string;
        professions.it_graphics-engineer: string;
        professions.it_hardware-engineer: string;
        professions.it_ic-layout: string;
        professions.it_ios-developer: string;
        professions.it_it-other: string;
        professions.it_java-developer: string;
        professions.it_machine-learning-engineer: string;
        professions.it_net-developer: string;
        professions.it_node-js-developer: string;
        professions.it_optical-engineering: string;
        professions.it_opto-electronic-engineering: string;
        professions.it_php-developer: string;
        professions.it_project-product-management: string;
        professions.it_python-developer: string;
        professions.it_qa-test-engineer: string;
        professions.it_research-r-d: string;
        professions.it_ruby-on-rails-developer: string;
        professions.it_security-engineer: string;
        professions.it_semiconductor-engineering: string;
        professions.it_software-engineer: string;
        professions.it_system-architecture: string;
        professions.it_system-network-administrator: string;
        professions.it_technical-manager: string;
        professions.it_technical-support: string;
        professions.it_video-voice-engineer: string;
        professions.it_vr-engineer: string;
        professions.it_web-developer: string;
        professions.it_web-publisher: string;
        professions.law_legal-representative: string;
        professions.law_patent-administrator: string;
        professions.logistics-trade_air-transportation-specialist: string;
        professions.logistics-trade_bonded-transportation-specialist: string;
        professions.logistics-trade_cargo-truck-drivers: string;
        professions.logistics-trade_diesel-mechanic: string;
        professions.logistics-trade_dispatcher: string;
        professions.logistics-trade_distribution-manager: string;
        professions.logistics-trade_driver: string;
        professions.logistics-trade_forklift-driver: string;
        professions.logistics-trade_import-export-specialist: string;
        professions.logistics-trade_logistics-analyst: string;
        professions.logistics-trade_logistics-coordinator: string;
        professions.logistics-trade_logistics-customs-officer: string;
        professions.logistics-trade_logistics-manager: string;
        professions.logistics-trade_logistics-trade-other: string;
        professions.logistics-trade_marine-transportation-specialist: string;
        professions.logistics-trade_shipment-mailing-clerk: string;
        professions.logistics-trade_shipping-receiving-clerk: string;
        professions.logistics-trade_supply-chain-manager: string;
        professions.logistics-trade_trade-administration: string;
        professions.logistics-trade_transportation-manager: string;
        professions.logistics-trade_transports: string;
        professions.logistics-trade_warehouse-specialist: string;
        professions.management-business_accountant: string;
        professions.management-business_administrative-assistant: string;
        professions.management-business_agile-coach: string;
        professions.management-business_branch-manager: string;
        professions.management-business_business-development: string;
        professions.management-business_business-support-manager: string;
        professions.management-business_chief-executive-officer: string;
        professions.management-business_chief-financial-officer: string;
        professions.management-business_chief-operation-officer: string;
        professions.management-business_chief-strategy-officer: string;
        professions.management-business_communications: string;
        professions.management-business_consultant: string;
        professions.management-business_data-analyst: string;
        professions.management-business_eap-counselor: string;
        professions.management-business_event-management: string;
        professions.management-business_exhibition-planner: string;
        professions.management-business_finance-manager: string;
        professions.management-business_general-affairs: string;
        professions.management-business_global-business-development-manager: string;
        professions.management-business_guide: string;
        professions.management-business_innovation: string;
        professions.management-business_local-manager: string;
        professions.management-business_management-business-other: string;
        professions.management-business_management-control: string;
        professions.management-business_office-manager: string;
        professions.management-business_operations-manager: string;
        professions.management-business_organization-management: string;
        professions.management-business_project-manager: string;
        professions.management-business_purchasing: string;
        professions.management-business_purchasing-manager: string;
        professions.management-business_regulatory-officer: string;
        professions.management-business_risk-management-specialist: string;
        professions.management-business_sales: string;
        professions.management-business_secretary: string;
        professions.management-business_service-planner: string;
        professions.management-business_stage-producer: string;
        professions.management-business_strategic-planner: string;
        professions.manufacturing_assembly-technician: string;
        professions.manufacturing_chemist: string;
        professions.manufacturing_factory-manager-director: string;
        professions.manufacturing_machinery-equipment-operation: string;
        professions.manufacturing_manufacturing-director: string;
        professions.manufacturing_manufacturing-manager: string;
        professions.manufacturing_manufacturing-operator: string;
        professions.manufacturing_manufacturing-other: string;
        professions.manufacturing_manufacturing-technician: string;
        professions.manufacturing_materials-manager: string;
        professions.manufacturing_mechanical-production-technician: string;
        professions.manufacturing_mechanism-engineering: string;
        professions.manufacturing_process-manager: string;
        professions.manufacturing_production-manager: string;
        professions.manufacturing_production-worker: string;
        professions.manufacturing_quality-manager: string;
        professions.manufacturing_safety-manager: string;
        professions.manufacturing_test-engineer: string;
        professions.manufacturing_textile-clothing-maker: string;
        professions.marketing-advertising_account-executive: string;
        professions.marketing-advertising_atl-marketer: string;
        professions.marketing-advertising_brand-marketer: string;
        professions.marketing-advertising_btl-marketer: string;
        professions.marketing-advertising_chief-brand-officer: string;
        professions.marketing-advertising_chief-marketing-officer: string;
        professions.marketing-advertising_community-social-media: string;
        professions.marketing-advertising_content-marketer: string;
        professions.marketing-advertising_copywriter: string;
        professions.marketing-advertising_digital-marketer: string;
        professions.marketing-advertising_global-marketing-mgr: string;
        professions.marketing-advertising_growth-hacker: string;
        professions.marketing-advertising_market-researcher: string;
        professions.marketing-advertising_marketer: string;
        professions.marketing-advertising_marketing-advertising-other: string;
        professions.marketing-advertising_marketing-development: string;
        professions.marketing-advertising_marketing-director: string;
        professions.marketing-advertising_marketing-operations: string;
        professions.marketing-advertising_marketing-strategy-planner: string;
        professions.marketing-advertising_mobile-marketing-specialist: string;
        professions.marketing-advertising_partnership-specialist: string;
        professions.marketing-advertising_performance-marketing-manager: string;
        professions.marketing-advertising_pr-specialist: string;
        professions.marketing-advertising_seo-sem: string;
        professions.marketing-advertising_sports-specialist: string;
        professions.marketing-advertising_traffic-management: string;
        professions.media-communication_book-publisher: string;
        professions.media-communication_content-creator: string;
        professions.media-communication_curator: string;
        professions.media-communication_editor: string;
        professions.media-communication_film-tv-video-production: string;
        professions.media-communication_journalist: string;
        professions.media-communication_licence-manager: string;
        professions.media-communication_media-communication-other: string;
        professions.media-communication_photographer: string;
        professions.media-communication_producer: string;
        professions.media-communication_project-management: string;
        professions.media-communication_reporter: string;
        professions.media-communication_sound-engineer: string;
        professions.media-communication_strategic-planning: string;
        professions.media-communication_translator: string;
        professions.media-communication_video-editing-specialist: string;
        professions.media-communication_writer: string;
        professions.other_other-other: string;
        professions.public-social-work_caretaker: string;
        professions.public-social-work_counselor: string;
        professions.public-social-work_emergency-responders-emts: string;
        professions.public-social-work_environmental-specialist: string;
        professions.public-social-work_firefighter: string;
        professions.public-social-work_information-analyst: string;
        professions.public-social-work_lifeguard: string;
        professions.public-social-work_local-specialist: string;
        professions.public-social-work_professional-soldier: string;
        professions.public-social-work_public-officer: string;
        professions.public-social-work_social-worker: string;
        professions.public-social-work_volunteer: string;
        professions.sales_account-manager: string;
        professions.sales_customer-success-manager: string;
        professions.sales_enterprise-sales: string;
        professions.sales_inside-sales-specialist: string;
        professions.sales_international-sales-mgr: string;
        professions.sales_media-sales-manager: string;
        professions.sales_medical-device-sales-specialist: string;
        professions.sales_pharmaceutical-sales-specialist: string;
        professions.sales_sales-advisor: string;
        professions.sales_sales-engineer: string;
        professions.sales_sales-engineering: string;
        professions.sales_sales-specialist: string;
        professions.sales_sales-team-lead: string;
        professions.sales_solutions-consultant: string;
        professions.sales_technical-sales-specialist: string;
    }

    export interface Job2 {
        common.cakeresume_job_search: string;
        breadcrumbs.cakeresume_job_search: string;
        breadcrumbs.company_jobs: string;
        breadcrumbs.all_jobs: string;
        breadcrumbs.profession_jobs: string;
        admin_tool.saved: string;
        admin_tool.applied: string;
        admin_tool.label.hidden: string;
        admin_tool.label.paused: string;
        admin_tool.saved_modal.title: string;
        admin_tool.saved_modal.no_content: string;
        admin_tool.icon_tooltips.no_sufficient_permissions: string;
        admin_tool.icon_tooltips.suspended_tip: string;
        admin_tool.icon_tooltips.unsuspend: string;
        admin_tool.icon_tooltips.edit: string;
        admin_tool.icon_tooltips.copy: string;
        admin_tool.icon_tooltips.hide: string;
        admin_tool.icon_tooltips.unhide: string;
        admin_tool.icon_tooltips.pause: string;
        admin_tool.icon_tooltips.unpause: string;
        admin_tool.icon_tooltips.delete: string;
        admin_tool.delete_confirmation.title: string;
        admin_tool.delete_confirmation.body: string;
        admin_tool.flash_message.success.hide: string;
        admin_tool.flash_message.success.unhide: string;
        admin_tool.flash_message.success.pause: string;
        admin_tool.flash_message.success.unpause: string;
        admin_tool.flash_message.success.refresh: string;
        description.section_message.ask_expired_to_refresh: string;
        description.section_message.why_keep_updated: string;
        description.section_message.update_now: string;
        description.section_message.temporarily_close: string;
        description.section_message.need_to_reopen: string;
        description.section_message.paused_job_description: string;
        description.section_message.have_applied: string;
        description.section_message.cannot_reapply: string;
        description.section_message.reapply: string;
        description.updated_ago: string;
        description.expired_date: string;
        description.job_description: string;
        description.requirements: string;
        description.interview_process: string;
        description.view_all_jobs: string;
        description.regular_salary_4k: string;
        description.regular_salary_4k_description: string;
        description.number_of_management.not_specified: string;
        description.number_of_management.none: string;
        description.number_of_management.one_five: string;
        description.number_of_management.five_ten: string;
        description.number_of_management.ten_fifteen: string;
        description.number_of_management.fifteen_: string;
        description.personal_invitation_link: string;
        description.copy_invitation_link: string;
        description.referral_description: string;
        description.share_this_job: string;
        description.icon_tooltips.work_location: string;
        description.icon_tooltips.number_to_hire: string;
        description.icon_tooltips.experience_requirements: string;
        description.icon_tooltips.salary_range: string;
        description.icon_tooltips.accept_remote_work_or_not: string;
        description.icon_tooltips.number_of_management: string;
        404page.title: string;
        404page.description: string;
        404page.back_to_company: string;
        404page.jobs: string;
        404page.links_section.hint: string;
        404page.links_section.create_resume: string;
        404page.links_section.view_resume_examples: string;
        404page.links_section.search_jobs: string;
        404page.links_section.search_resumes: string;
        job_created_modal.congratulations: string;
        job_created_modal.successfully_posted_job: string;
        job_created_modal.description: string;
        job_created_modal.section_message: string;
        job_created_modal.share_this_job_post: string;
        apply_button.apply_now: string;
        apply_button.cannot_apply: string;
        apply_button.cannot_reapply_message: string;
        apply_button.have_applied_on: string;
        about_block.number_of_people: string;
        about_block.about_us: string;
        about_block.learn_more: string;
        about_block.team: string;
        other_popular_jobs_block.other_popular_jobs_at: string;
        other_popular_jobs_block.view_all_n_profession_jobs: string;
        recommendation_block.recommended_items_profession: string;
        recommendation_block.search_more_items: string;
        recommendation_block.view_resume: string;
        similar_jobs_block.similar_jobs: string;
        similar_jobs_block.job_search_block.title: string;
        similar_jobs_block.job_search_block.subtitle: string;
        similar_jobs_block.job_search_block.input_placeholder: string;
        similar_jobs_block.job_search_block.submit_button_text: string;
        similar_jobs_block.app_promotion_block.title: string;
        similar_jobs_block.app_promotion_block.subtitle: string;
        job_quota_hint_block.title: string;
        job_quota_hint_block.subtitle: string;
        job_quota_hint_block.button_text: string;
        remote.full_remote_work: string;
        remote.no_remote_work: string;
        remote.optional_remote_work: string;
        remote.partial_remote_work: string;
    }

    export interface JobSearch {
        page.title_location: string;
        page.title_adj: string;
        page.title_adj_location: string;
        page.description: string;
        page.description_location: string;
        page.description_adj: string;
        page.description_adj_location: string;
        page.site: string;
        page.site_with_description: string;
        page.meta.breadcrumb_title: string;
        page.meta.managerial: string;
        page.meta.non_managerial: string;
        page.meta.company_size: string;
        page.meta.noun: string;
        page.meta.noun@title: string;
        title: string;
        placeholder.query: string;
        result_empty.title: string;
        result_empty.description: string;
        filter.location_list: string;
        filter.profession: string;
        filter.job_type: string;
        filter.seniority_level: string;
        filter.year_of_seniority: string;
        filter.number_of_management: string;
        filter.remote: string;
        filter.salary: string;
        filter.salary_currency: string;
        filter.salary_type: string;
        filter.salary_range: string;
        filter.page_number_of_employees: string;
        filter.page_sector: string;
        filter.page_tech_labels: string;
        filter.lang_name: string;
        sort_by.popular: string;
        sort_by.latest: string;
        sort_by_description.popular: string;
        sort_by_description.latest: string;
        option.popular_professions: string;
        option.popular_keywords: string;
        option.related_keywords: string;
        option.advanced_filters: string;
        option.infinite_scroll: string;
        option.condensed_layout: string;
        option.hide_read_items: string;
        tooltip.popular: string;
        tooltip.impressions: string;
        tooltip.number_of_openings: string;
        tooltip.location_list: string;
        tooltip.salary_range: string;
        tooltip.year_of_seniority: string;
        tooltip.number_of_management: string;
        search_subscription.title: string;
        search_subscription.action.save_search: string;
        search_subscription.empty_title: string;
        search_subscription.form.title.create: string;
        search_subscription.form.title.update: string;
        search_subscription.form.description: string;
        search_subscription.form.notification_hint: string;
        search_subscription.form.field.name: string;
        search_subscription.form.field.enabled: string;
        search_subscription.list.saved_ago: string;
        search_share.title: string;
        search_share.action: string;
        search_share.social_description: string;
        category.page_sector.tech_semiconductor: string;
        category.profession.it: string;
        category.profession.marketing-advertising: string;
        category.profession.design: string;
        category.profession.sales: string;
        category.profession.hr: string;
        category.profession.engineering: string;
        category.profession.finance: string;
        category.profession.food-beverage: string;
        category.profession.manufacturing: string;
        category.profession.law: string;
        category.profession.bio-medical: string;
    }

    export interface En {
        common: Common;
        widget: Widget;
        attribute: Attribute;
        sector: Sector;
        profession: Profession3;
        job: Job2;
        job-search: JobSearch;
    }

    export interface InitialI18nStore {
        en: En;
    }

    export interface I18n {
        defaultLocale: string;
        locales: string[];
        localeDetection: boolean;
    }

    export interface I18n2 {
        defaultLocale: string;
        locales: string[];
        localeDetection: boolean;
    }

    export interface Default {
        i18n: I18n2;
        localePath: string;
        keySeparator: boolean;
        pluralSeparator: string;
        contextSeparator: string;
        simplifyPluralSuffix: boolean;
        saveMissingPlurals: boolean;
        reloadOnPrerender: boolean;
    }

    export interface UserConfig {
        i18n: I18n;
        localePath: string;
        keySeparator: boolean;
        pluralSeparator: string;
        contextSeparator: string;
        simplifyPluralSuffix: boolean;
        saveMissingPlurals: boolean;
        reloadOnPrerender: boolean;
        default: Default;
    }

    export interface NextI18Next {
        initialI18nStore: InitialI18nStore;
        initialLocale: string;
        userConfig: UserConfig;
    }

    export interface Api {
    }

    export interface AssetsPath {
        contentarea_css: string;
    }

    export interface Flash {
    }

    export interface Algolia {
        id: string;
        key: string;
        key_global_search: string;
        key_query_suggestions: string;
        key_users: string;
        key_jobs_and_pages: string;
        key_featured_pages: string;
        key_featured_jobs: string;
        key_published_posts: string;
        key_organizations: string;
        key_activities: string;
        key_articles: string;
    }

    export interface TrackingTraits {
    }

    export interface Kickoff {
        assets_path: AssetsPath;
        flash: Flash;
        algolia: Algolia;
        user?: any;
        tracking_traits: TrackingTraits;
        imp: boolean;
        google_client_id: string;
        is_premium: boolean;
    }

    export interface Auth {
        kickoff: Kickoff;
        pending: boolean;
        jwt: string;
        ip: string;
    }

    export interface Can {
        hover?: any;
    }

    export interface Lte {
        xs?: any;
        sm?: any;
        md?: any;
        lg?: any;
        xl?: any;
    }

    export interface Gte {
        xs?: any;
        sm?: any;
        md?: any;
        lg?: any;
        xl?: any;
    }

    export interface Eq {
        xs?: any;
        sm?: any;
        md?: any;
        lg?: any;
        xl?: any;
    }

    export interface Size {
        lte: Lte;
        gte: Gte;
        eq: Eq;
    }

    export interface Browser {
        currentTime: number;
        locale: string;
        ipCountry: string;
        isBot?: any;
        can: Can;
        size: Size;
    }

    export interface Editor {
        entity?: any;
        processingImages: any[];
        deletingDraftImages: any[];
        deletingProcessingImages: any[];
    }

    export interface Query {
    }

    export interface Mention {
        current?: any;
        query: Query;
    }

    export interface Query2 {
    }

    export interface Hashtag {
        current?: any;
        query: Query2;
    }

    export interface Suggestions {
        mention: Mention;
        hashtag: Hashtag;
    }

    export interface Hashtags {
    }

    export interface ActivityFeeds {
    }

    export interface TimelineFeeds {
    }

    export interface Comments {
    }

    export interface Meta {
    }

    export interface NetworkImport {
        lastInvitedCount?: any;
    }

    export interface Community {
        editor: Editor;
        viewSingle?: any;
        suggestions: Suggestions;
        hashtags: Hashtags;
        popularHashtags?: any;
        activityFeeds: ActivityFeeds;
        timelineFeeds: TimelineFeeds;
        comments: Comments;
        meta: Meta;
        networkImport: NetworkImport;
    }

    export interface Meta2 {
    }

    export interface OtherPage {
    }

    export interface Company {
        meta: Meta2;
        otherPage: OtherPage;
        popularCompanies?: any;
    }

    export interface Status {
    }

    export interface Connection {
        recommendations?: any;
        status: Status;
    }

    export interface Condition {
        filter?: any;
        sort?: any;
    }

    export interface Entities {
    }

    export interface Collection {
        condition: Condition;
        list: any[];
        entities: Entities;
        pagination?: any;
    }

    export interface AuditLogs {
    }

    export interface Comments2 {
    }

    export interface Folder {
        collection: Collection;
        viewSingle?: any;
        auditLogs: AuditLogs;
        comments: Comments2;
    }

    export interface JobData {
    }

    export interface JobMetaData {
    }

    export interface UserJobMetaData {
    }

    export interface PreviewList {
        viewedJobs?: any;
        savedJobs?: any;
    }

    export interface Job3 {
        jobData: JobData;
        jobMetaData: JobMetaData;
        userJobMetaData: UserJobMetaData;
        previewList: PreviewList;
        subscriptions?: any;
        canRestoreSearch: boolean;
    }

    export interface Entities2 {
    }

    export interface Queries {
    }

    export interface Channels {
        list: any[];
        entities: Entities2;
        pagination?: any;
        remainingNewConversationCount?: any;
        queries: Queries;
    }

    export interface Messages {
    }

    export interface Entities3 {
    }

    export interface TemporaryChannels {
        list: any[];
        entities: Entities3;
    }

    export interface Message {
        unreadCount: number;
        activeChannelKey?: any;
        channels: Channels;
        messages: Messages;
        temporaryChannels: TemporaryChannels;
    }

    export interface Entities4 {
    }

    export interface Collection2 {
        list: any[];
        entities: Entities4;
        pagination?: any;
    }

    export interface Notification {
        unreadCount: number;
        collection: Collection2;
    }

    export interface Meta3 {
    }

    export interface Portfolio {
        meta: Meta3;
    }

    export interface Index {
    }

    export interface Entities5 {
    }

    export interface Popular {
    }

    export interface Latest {
    }

    export interface Editors {
    }

    export interface Resource {
        index: Index;
        entities: Entities5;
        popular: Popular;
        latest: Latest;
        editors: Editors;
    }

    export interface Entities6 {
    }

    export interface Meta4 {
    }

    export interface DisplayedEntities {
    }

    export interface Download {
    }

    export interface DraftEntities {
    }

    export interface Resume {
        entities: Entities6;
        meta: Meta4;
        displayedEntities: DisplayedEntities;
        download: Download;
        draftEntities: DraftEntities;
    }

    export interface Route {
        isDirectRequest: boolean;
        isStaticGeneratedRoute: boolean;
        url: string;
    }

    export interface RecentSearch {
        records?: any;
        impressions?: any;
    }

    export interface Search {
        recentSearch: RecentSearch;
    }

    export interface Menu {
        pages: any[];
    }

    export interface Dashboard {
        insightsOverview?: any;
    }

    export interface ProfileCompletionRatio {
    }

    export interface User {
        menu: Menu;
        profile?: any;
        dashboard: Dashboard;
        profileCompletionRatio: ProfileCompletionRatio;
    }

    export interface InitialState {
        api: Api;
        auth: Auth;
        browser: Browser;
        community: Community;
        company: Company;
        connection: Connection;
        folder: Folder;
        job: Job3;
        message: Message;
        notification: Notification;
        portfolio: Portfolio;
        resource: Resource;
        resume: Resume;
        route: Route;
        search: Search;
        user: User;
    }

    export interface PageProps {
        serverState: ServerState;
        serverInfiniteScroll: boolean;
        _nextI18Next: NextI18Next;
        initialState: InitialState;
    }

    export interface Props {
        pageProps: PageProps;
        __N_SSP: boolean;
    }

    export interface Query3 {
        q: string;
        locale: string;
        refinementList[seniority_level][0]: string;
        refinementList[salary_type]: string;
        range[salary_range][min]: string;
    }

    export interface RootObject {
        props: Props;
        page: string;
        query: Query3;
        buildId: string;
        isFallback: boolean;
        dynamicIds: number[];
        gssp: boolean;
        customServer: boolean;
        locale: string;
        locales: string[];
        defaultLocale: string;
        scriptLoader: any[];
    }

}
