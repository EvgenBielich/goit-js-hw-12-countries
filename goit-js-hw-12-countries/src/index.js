import API from './js/fetchCountries.js';
import getRefs from './js/refs.js';
import countryInformation from './templates/country-information.hbs';
import countriesList from './templates/countries-list.hbs';
import debounce from 'lodash.debounce';
import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

const refs = getRefs();
