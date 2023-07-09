export interface ApiResponse {
    numFound:      number;
    start:         number;
    numFoundExact: boolean;
    docs:          Doc[];
    num_found:     number;
    q:             string;
    offset:        null;
}

export interface Doc {
    key:                      string;
    type:                     Type;
    seed:                     string[];
    title:                    string;
    title_suggest:            string;
    title_sort:               string;
    edition_count:            number;
    edition_key:              string[];
    publish_date?:            string[];
    publish_year?:            number[];
    first_publish_year?:      number;
    number_of_pages_median?:  number;
    lccn?:                    string[];
    publish_place?:           string[];
    lcc?:                     string[];
    ddc?:                     string[];
    isbn?:                    string[];
    last_modified_i:          number;
    ebook_count_i:            number;
    ebook_access:             EbookAccess;
    has_fulltext:             boolean;
    public_scan_b:            boolean;
    ia?:                      string[];
    ia_collection?:           string[];
    ia_collection_s?:         string;
    lending_edition_s?:       string;
    lending_identifier_s?:    string;
    printdisabled_s?:         string;
    ratings_count_1?:         number;
    ratings_count_2?:         number;
    ratings_count_3?:         number;
    ratings_count_4?:         number;
    ratings_count_5?:         number;
    ratings_average?:         number;
    ratings_sortable?:        number;
    ratings_count?:           number;
    readinglog_count?:        number;
    want_to_read_count?:      number;
    currently_reading_count?: number;
    already_read_count?:      number;
    cover_edition_key?:       string;
    cover_i?:                 number;
    publisher?:               string[];
    language?:                string[];
    author_key?:              string[];
    author_name?:             string[];
    subject?:                 string[];
    ia_box_id?:               string[];
    publisher_facet?:         string[];
    subject_facet?:           string[];
    _version_:                number;
    lcc_sort?:                string;
    author_facet?:            string[];
    subject_key?:             string[];
    ddc_sort?:                string;
    id_goodreads?:            string[];
    author_alternative_name?: string[];
    oclc?:                    string[];
    time?:                    string[];
    time_facet?:              string[];
    time_key?:                string[];
    id_librarything?:         string[];
    contributor?:             string[];
    place?:                   string[];
    place_key?:               string[];
    place_facet?:             string[];
    person?:                  string[];
    person_key?:              string[];
    person_facet?:            string[];
    first_sentence?:          string[];
}

export enum EbookAccess {
    Borrowable = "borrowable",
    NoEbook = "no_ebook",
}

export enum Type {
    Work = "work",
}
