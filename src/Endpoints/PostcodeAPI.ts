import { EndpointBase } from './EndpointBase';

/**
 * Endpoint Postcode API
 */
export class PostcodeAPI extends EndpointBase {
  /**
     * Contains all live and terminated (closed) postcodes within the UK.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodesCurrentAndTerminatedAPI(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/postcode`);
  }

  /**
     * The current county to which the postcode has been assigned.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeToCountyAPI(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/electoral-county`);
  }

  /**
     * Postcode to Local Authority District
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeToLocalAuthorityDistrict(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/local-authority-district`);
  }

  /**
     * There are 33 boroughs in London (Includes the City of London which is officially a separate entity despite being located in the centre of London). 
     * We’ve reversed engineered ONS data to identify the postcodes that represent each borough.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeToLondonBoroughAPI(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/london-borough`);
  }

  /**
     * Postcode to Electoral Ward / Division API.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeToElectoralWardDivisionAPI(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/electoral-ward`);
  }

  /**
     * Postcode to Civil Parish (England), Communities (Wales) API.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeToCivilParishCommunitiesAPI(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/civil-parish`);
  }

  /**
     * Shows the status of the assigned grid reference.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeToNationalGridReferenceAPI(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/national-grid-reference`);
  }

  /**
     * The health area code for the postcode. SHAs were abolished in England in 2013 but the codes remain as a ‘frozen’ geography. 
     * The field will otherwise be blank for postcodes with no grid reference. 
     * 36 areas across the UK.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeToFormerStrategicHealthAuthority(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/hlthau`);
  }

  /**
     * NHSERs (formerly NHS Commissioning Regions - NHS CR) are sub-divisions of the NHS commissioning board. 
     * There are four NHS ERs in England and they were renamed from NHS CRs in May 2017. 
     * The NHS CRs were formed on 1 April 2013, replacing pan SHAs, and are responsible for providing clinical and professional leadership at sub-national level. 
     * They are also responsible for the co-ordination of planning, operational management and emergency preparedness at sub-national level and undertaking direct commissioning functions and processes.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeToNHSEnglandRegionsAPI(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/nhser`);
  }

  /**
     * The code for the appropriate country (i.e. one of the four constituent countries of the UK or Crown 
     * dependencies - the Channel Islands or the Isle of Man) to which each postcode is assigned.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeToUKCountryNamesCodesAPI(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/uk-country-names`);
  }

  /**
     * The nine GORs were abolished on 1 April 2011 and are now known as "regions" for statistical purposes. 
     * They were the primary statistical subdivisions of England and also the areas in which the Government Offices for the Regions fulfilled their role. 
     * Each region covered a number of local authorities. The region code for each postcode. 
     * Pseudo codes are included for Wales, Scotland, Northern Ireland, Channel Island and Isle of Man. 
     * The field will be blank for postcodes in England with no grid reference
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeToRegionsAPI(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/region`);
  }

  /**
     * The 8 SSRs were the primary statistical subdivisions of England before the GORs were adopted for this purpose in 1996. They are now rarely used. 
     * The SSR code for the associated county or unitary authority to which each postcode is assigned. 
     * A pseudo code is included for postcodes not in England. The field will be blank for postcodes in England with no grid reference.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeToStandardStatisticalRegionsAPI(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/standard-statistical-regions`);
  }

  /**
     * England and Wales - Parliamentary constituencies relate to those defined by the Parliamentary 
     * Constituencies (England) Order 2007, the Parliamentary Constituencies (England) (Amendment) 
     * Order 2008 and the Parliamentary Constituencies (Wales) (Amendment) Order 2008, and which came 
     * into effect at the May 2010 General Election.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeToWestminsterParliamentaryConstituencyAPI(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/westminster-parliamentary-constituency`);
  }

  /**
     * EERs are as defined in the European Parliamentary Elections Bill (Bill 65, 1997) to amend 
     * the European Parliamentary Elections Act 1978 so as to alter the method used in Great 
     * Britain for electing Members of the European Parliament.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeToEuropeanElectoralRegionsAPI(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/european-electoral-regions`);
  }

  /**
     * The LLSC (England), DCELLS (Wales) or ER (Scotland) code for each postcode. 
     * Pseudo codes are included for Northern Ireland, Channel Islands and Isle of Man. 
     * The field will otherwise be blank for postcodes with no grid reference.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeToLocalLearningSkillsCouncil(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/postcode-to-local-learning-and-skills-council`);
  }

  /**
     * TTWAs are used in labour market analysis and reflect reasonably self-contained zones in which the bulk of the resident population also work.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeToTravelToWorkAreasAPI(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/travel-to-work-areas`);
  }

  /**
     * Postcodes on the ONSPD have been assigned PCO codes (England), LHB codes (Wales), CHP codes (Scotland), 
     * LCG codes (NI) or Primary Healthcare Directorate code (Isle of Man). 
     * Postcodes in the Channel Islands (for which there are no equivalent areas) have been assigned a pseudo code.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeToPrimaryCareTrusts(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/primary-care-trusts`);
  }

  /**
     * NUTS is a hierarchical classification of spatial units that provides a breakdown of the 
     * European Union’s territory for producing regional statistics that are comparable across the Union.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeToNomenclatureOfUnitsForTerritorialStatistics(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/nomenclature-of-units-for-territorial-statistics`);
  }

  /**
     * "Statistical" wards were those electoral wards promulgated in Statutory 
     * Instruments by the end of a calendar year and implemented for statistical purposes on 
     * 1 April in the following year, irrespective of the year of statutory operation.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeTo2005StatisticalWardsAPI(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/2005-statistical-wards`);
  }

  /**
     * The 2001 Census OAs were built from unit postcodes and constrained to 2003 ‘statistical’ wards, 
     * and they form the building bricks for defining higher level geographies. 
     * Pseudo codes are included for Channel Islands and Isle of Man. 
     * The field will otherwise be blank for postcodes with no grid reference. 
     * Includes OAC01, Supergroup, Group and Subgroup.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeTo2001NationalUKCensusOutputAreaClassificationNamesAPI(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/2001-national-uk-census-output-area`);
  }

  /**
     * In processing 2001 Census data for publication, 18 2003 statistical wards were identified as sub- threshold i.e. 
     * the count of population and households fell below the threshold for creating OAs and for the non-disclosive release of Census data.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeTo2001CensusAreaStatisticsWardsAPI(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/2001-census-area-statistics`);
  }

  /**
     * National parks are designed to conserve the natural beauty and cultural heritage of areas of outstanding landscape value, 
     * and to promote public understanding and enjoyment of these areas.
     * 
     * @param postcode Postcode of the current to lookup.
     * @returns AxiosResponse
     */
  public postcodeToNationalParkAPI(postcode: string): any {
    return this.client.get(`/api/v3/postcodes/${postcode}/national-park`);
  }
}