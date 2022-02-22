import { browser } from '$app/env';
import * as Types from "$lib/graphql/_kitql/graphqlTypes";
import { defaultStoreValue, RequestStatus, type RequestParameters, type RequestResult } from '@kitql/client';
import { writable } from 'svelte/store';
import { kitQLClient } from '../kitQLClient';
 
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
