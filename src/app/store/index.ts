import { CategoriesState } from './categories/categories.state';
import { categoriesReducer } from './categories/categories.reducer';
import { CategoriesEffects } from './categories/categories.effects';
import * as fromCategoriesSelectors from './categories/categories.selectors';

import { GenresState } from './genres/genres.state';
import { genresReducer } from './genres/genres.reducer';
import { GenresEffects } from './genres/genres.effects';
import * as fromGenresSelectors from './genres/genres.selectors';

import { NewReleasesState } from './new-releases/new-releases.state';
import { newReleasesReducer } from './new-releases/new-releases.reducer';
import { NewReleasesEffects } from './new-releases/new-releases.effects';
import * as fromNewReleasesSelectors from './new-releases/new-releases.selectors';

import { FeaturedPlaylistsState } from './featured-playlists/featured-playlists.state';
import { featuredPlaylistsReducer } from './featured-playlists/featured-playlists.reducer';
import { FeaturedPlaylistsEffects } from './featured-playlists/featured-playlists.effects';
import * as fromFeaturedPlaylistsSelectors from './featured-playlists/featured-playlists.selectors';

import { LoginState } from './login/login.state';
import { loginReducer } from './login/login.reducer';
import { LoginEffects } from './login/login.effects';
import * as fromLoginSelectors from './login/login.selectors';

import { ProfileState } from './profile/profile.state';
import { profileReducer } from './profile/profile.reducer';
import { ProfileEffects } from './profile/profile.effects';

import { SearchArtistsState } from './search-artists/search-artists.state';
import { searchArtistsReducer } from './search-artists/search-artists.reducer';
import { SearchArtistsEffects } from './search-artists/search-artists.effects';
import * as fromSearchArtistsSelectors from './search-artists/search-artists.selectors';

import { SearchAlbumsState } from './search-albums/search-albums.state';
import { searchAlbumsReducer } from './search-albums/search-albums.reducer';
import { SearchAlbumsEffects } from './search-albums/search-albums.effects';
import * as fromSearchAlbumsSelectors from './search-albums/search-albums.selectors';

export interface RootState {
  loggedIn: LoginState;
  categories: CategoriesState;
  genres: GenresState;
  newReleases: NewReleasesState;
  featuredPlaylists: FeaturedPlaylistsState;
  profile: ProfileState;
  searchArtists: SearchArtistsState;
  searchAlbums: SearchAlbumsState;
}

export const appReducer = {
  loggedIn: loginReducer,
  categories: categoriesReducer,
  genres: genresReducer,
  newReleases: newReleasesReducer,
  featuredPlaylists: featuredPlaylistsReducer,
  profile: profileReducer,
  searchArtists: searchArtistsReducer,
  searchAlbums: searchAlbumsReducer,
};

export const appEffects = [
  CategoriesEffects,
  GenresEffects,
  NewReleasesEffects,
  FeaturedPlaylistsEffects,
  LoginEffects,
  ProfileEffects,
  SearchArtistsEffects,
  SearchAlbumsEffects,
];

export const appSelectors = [
  fromCategoriesSelectors.selectCategoriesData,
  fromCategoriesSelectors.selectIsError,
  fromCategoriesSelectors.selectIsLoading,
  fromGenresSelectors.selectGenresData,
  fromGenresSelectors.selectIsError,
  fromGenresSelectors.selectIsLoading,
  fromNewReleasesSelectors.selectNewReleasesData,
  fromNewReleasesSelectors.selectIsError,
  fromNewReleasesSelectors.selectIsLoading,
  fromFeaturedPlaylistsSelectors.selectNewReleasesData,
  fromFeaturedPlaylistsSelectors.selectIsError,
  fromFeaturedPlaylistsSelectors.selectIsLoading,
  fromLoginSelectors.selectLogin,
  fromSearchArtistsSelectors.selectSearchArtistsData,
  fromSearchArtistsSelectors.selectIsError,
  fromSearchArtistsSelectors.selectIsLoading,
  fromSearchAlbumsSelectors.selectSearchAlbumsData,
  fromSearchAlbumsSelectors.selectIsError,
  fromSearchAlbumsSelectors.selectIsLoading,
];
