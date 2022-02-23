import { browser } from '$app/env';
import * as Types from "$lib/graphql/_kitql/graphqlTypes";
import { defaultStoreValue, RequestStatus, type RequestParameters, type RequestResult } from '@kitql/client';
import { writable } from 'svelte/store';
import { kitQLClient } from '../kitQLClient';
 
/**
 * KitQL Reset Cache for `AllPagesQuery` Operation
 */
export function AllPagesQueryCacheReset(
	variables: Types.AllPagesQueryVariables | null = null,
	allOperationKey: boolean = true,
	withResetStore: boolean = true
) {
	kitQLClient.cacheRemove('AllPagesQuery', { variables, allOperationKey });
	if (withResetStore) {
		AllPagesQueryStore.set(defaultStoreValue);
	}
}

/**
 * KitQL Svelte Store with the latest `AllPagesQuery` Operation
 */
export const AllPagesQueryStore = writable<RequestResult<Types.AllPagesQuery, Types.AllPagesQueryVariables>>(defaultStoreValue);

/**
 * For SSR, you need to provide 'fetch' from the load function
 * For the client you can avoid to provide the 'fetch' native function
 * @param params
 * @returns the latest AllPagesQuery operation and fill the AllPagesQueryStore
 */
// prettier-ignore
export async function AllPagesQuery(
  params?: RequestParameters<Types.AllPagesQueryVariables>
): Promise<RequestResult<Types.AllPagesQuery, Types.AllPagesQueryVariables>> {

  let storedVariables = null;
	AllPagesQueryStore.update((c) => {
		storedVariables = c.variables;
		return { ...c, status: RequestStatus.LOADING };
	});
	let { fetch, variables, settings } = params ?? {};
  let { cache } = settings ?? {};

  if (variables === undefined) {
    variables = storedVariables;
  }
	const res = await kitQLClient.request<Types.AllPagesQuery, Types.AllPagesQueryVariables>({
		document: Types.AllPagesDocument,
		variables,
		skFetch: fetch,
		cacheKey: "AllPagesQuery",
		cache,
		browser
	});
	const result = { status: RequestStatus.DONE, ...res, variables };
	AllPagesQueryStore.set(result);
	return result;
}

/**
 * KitQL Reset Cache for `AllPostsQuery` Operation
 */
export function AllPostsQueryCacheReset(
	variables: Types.AllPostsQueryVariables | null = null,
	allOperationKey: boolean = true,
	withResetStore: boolean = true
) {
	kitQLClient.cacheRemove('AllPostsQuery', { variables, allOperationKey });
	if (withResetStore) {
		AllPostsQueryStore.set(defaultStoreValue);
	}
}

/**
 * KitQL Svelte Store with the latest `AllPostsQuery` Operation
 */
export const AllPostsQueryStore = writable<RequestResult<Types.AllPostsQuery, Types.AllPostsQueryVariables>>(defaultStoreValue);

/**
 * For SSR, you need to provide 'fetch' from the load function
 * For the client you can avoid to provide the 'fetch' native function
 * @param params
 * @returns the latest AllPostsQuery operation and fill the AllPostsQueryStore
 */
// prettier-ignore
export async function AllPostsQuery(
  params?: RequestParameters<Types.AllPostsQueryVariables>
): Promise<RequestResult<Types.AllPostsQuery, Types.AllPostsQueryVariables>> {

  let storedVariables = null;
	AllPostsQueryStore.update((c) => {
		storedVariables = c.variables;
		return { ...c, status: RequestStatus.LOADING };
	});
	let { fetch, variables, settings } = params ?? {};
  let { cache } = settings ?? {};

  if (variables === undefined) {
    variables = storedVariables;
  }
	const res = await kitQLClient.request<Types.AllPostsQuery, Types.AllPostsQueryVariables>({
		document: Types.AllPostsDocument,
		variables,
		skFetch: fetch,
		cacheKey: "AllPostsQuery",
		cache,
		browser
	});
	const result = { status: RequestStatus.DONE, ...res, variables };
	AllPostsQueryStore.set(result);
	return result;
}

/**
 * KitQL Reset Cache for `GetPageQuery` Operation
 */
export function GetPageQueryCacheReset(
	variables: Types.GetPageQueryVariables | null = null,
	allOperationKey: boolean = true,
	withResetStore: boolean = true
) {
	kitQLClient.cacheRemove('GetPageQuery', { variables, allOperationKey });
	if (withResetStore) {
		GetPageQueryStore.set(defaultStoreValue);
	}
}

/**
 * KitQL Svelte Store with the latest `GetPageQuery` Operation
 */
export const GetPageQueryStore = writable<RequestResult<Types.GetPageQuery, Types.GetPageQueryVariables>>(defaultStoreValue);

/**
 * For SSR, you need to provide 'fetch' from the load function
 * For the client you can avoid to provide the 'fetch' native function
 * @param params
 * @returns the latest GetPageQuery operation and fill the GetPageQueryStore
 */
// prettier-ignore
export async function GetPageQuery(
  params?: RequestParameters<Types.GetPageQueryVariables>
): Promise<RequestResult<Types.GetPageQuery, Types.GetPageQueryVariables>> {

  let storedVariables = null;
	GetPageQueryStore.update((c) => {
		storedVariables = c.variables;
		return { ...c, status: RequestStatus.LOADING };
	});
	let { fetch, variables, settings } = params ?? {};
  let { cache } = settings ?? {};

  if (variables === undefined) {
    variables = storedVariables;
  }
	const res = await kitQLClient.request<Types.GetPageQuery, Types.GetPageQueryVariables>({
		document: Types.GetPageDocument,
		variables,
		skFetch: fetch,
		cacheKey: "GetPageQuery",
		cache,
		browser
	});
	const result = { status: RequestStatus.DONE, ...res, variables };
	GetPageQueryStore.set(result);
	return result;
}

/**
 * KitQL Reset Cache for `GetPostQuery` Operation
 */
export function GetPostQueryCacheReset(
	variables: Types.GetPostQueryVariables | null = null,
	allOperationKey: boolean = true,
	withResetStore: boolean = true
) {
	kitQLClient.cacheRemove('GetPostQuery', { variables, allOperationKey });
	if (withResetStore) {
		GetPostQueryStore.set(defaultStoreValue);
	}
}

/**
 * KitQL Svelte Store with the latest `GetPostQuery` Operation
 */
export const GetPostQueryStore = writable<RequestResult<Types.GetPostQuery, Types.GetPostQueryVariables>>(defaultStoreValue);

/**
 * For SSR, you need to provide 'fetch' from the load function
 * For the client you can avoid to provide the 'fetch' native function
 * @param params
 * @returns the latest GetPostQuery operation and fill the GetPostQueryStore
 */
// prettier-ignore
export async function GetPostQuery(
  params?: RequestParameters<Types.GetPostQueryVariables>
): Promise<RequestResult<Types.GetPostQuery, Types.GetPostQueryVariables>> {

  let storedVariables = null;
	GetPostQueryStore.update((c) => {
		storedVariables = c.variables;
		return { ...c, status: RequestStatus.LOADING };
	});
	let { fetch, variables, settings } = params ?? {};
  let { cache } = settings ?? {};

  if (variables === undefined) {
    variables = storedVariables;
  }
	const res = await kitQLClient.request<Types.GetPostQuery, Types.GetPostQueryVariables>({
		document: Types.GetPostDocument,
		variables,
		skFetch: fetch,
		cacheKey: "GetPostQuery",
		cache,
		browser
	});
	const result = { status: RequestStatus.DONE, ...res, variables };
	GetPostQueryStore.set(result);
	return result;
}
