/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type InventoryResource = Resource & {
  /** @format int32 */
  id: number;
  /** @format date-time */
  starttime?: string | null;
  /** @format date-time */
  endtime?: string | null;
  name?: string | null;
  /** @format int32 */
  state?: number;
};

export type Resource = Link & object;

export interface Link {
  href?: string | null;
  /** @default "GET" */
  method?: string | null;
  rel?: string[] | null;
}

export type CollectionWithPagingOfInventoryResource = CollectionOfInventoryResource & {
  /** @format int32 */
  offset?: number | null;
  /** @format int32 */
  limit?: number | null;
  /** @format int64 */
  size?: number;
  first?: Link | null;
  previous?: Link | null;
  next?: Link | null;
  last?: Link | null;
};

export type CollectionOfInventoryResource = Resource & {
  value?: InventoryResource[] | null;
};

export type CollectionWithPagingOfInventoryDataResource = CollectionOfInventoryDataResource & {
  /** @format int32 */
  offset?: number | null;
  /** @format int32 */
  limit?: number | null;
  /** @format int64 */
  size?: number;
  first?: Link | null;
  previous?: Link | null;
  next?: Link | null;
  last?: Link | null;
};

export type CollectionOfInventoryDataResource = Resource & {
  value?: InventoryDataResource[] | null;
};

export type InventoryDataResource = Resource & {
  /** @format int32 */
  id: number;
  /** @format int32 */
  state?: number;
  /** @format int32 */
  inventoryid: number;
  /** @format int32 */
  movieid: number;
};

export interface InventoryRackModel {
  rackId?: string | null;
  rackState?: InventoryDataState;
  rackInventoryState?: InventoryState;
}

export enum InventoryDataState {
  NotChecked = 0,
  Found = 1,
  Missing = 2,
}

export enum InventoryState {
  NotStarted = 0,
  Started = 1,
  Finished = 2,
  Abandoned = 3,
}

export type CollectionWithPagingOfTupleOfIntegerAndString = CollectionOfTupleOfIntegerAndString & {
  /** @format int32 */
  offset?: number | null;
  /** @format int32 */
  limit?: number | null;
  /** @format int64 */
  size?: number;
  first?: Link | null;
  previous?: Link | null;
  next?: Link | null;
  last?: Link | null;
};

export type CollectionOfTupleOfIntegerAndString = Resource & {
  value?: TupleOfIntegerAndString[] | null;
};

export interface TupleOfIntegerAndString {
  /** @format int32 */
  item1?: number;
  item2?: string;
}

export interface MovieSeenOptions {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  date: string;
}

export type CollectionWithPagingAndDateFilterOfMovieDataSeenResource = CollectionOfMovieDataSeenResource & {
  /** @format int32 */
  offset?: number | null;
  /** @format int32 */
  limit?: number | null;
  /** @format int64 */
  size?: number;
  first?: Link | null;
  previous?: Link | null;
  next?: Link | null;
  last?: Link | null;
  /** @format date-time */
  fromDate?: string | null;
  /** @format date-time */
  toDate?: string | null;
};

export type CollectionOfMovieDataSeenResource = Resource & {
  value?: MovieDataSeenResource[] | null;
};

export type MovieDataSeenResource = Resource & {
  /** @format date-time */
  seenDate?: string;
  movie?: MovieDataResource | null;
};

export type MovieDataResource = Resource & {
  /** @format int32 */
  id: number;
  md5?: string | null;
  /** @minLength 1 */
  title: string;
  subtitle?: string | null;
  language?: string | null;
  diskid?: string | null;
  comment?: string | null;
  disklabel?: string | null;
  imdbID?: string | null;
  /** @format int32 */
  year?: number;
  imgurl?: string | null;
  director?: string | null;
  actors?: string | null;
  /** @format int32 */
  runtime?: number | null;
  country?: string | null;
  plot?: string | null;
  rating?: string | null;
  filename?: string | null;
  /** @format int64 */
  filesize?: number | null;
  /** @format date-time */
  filedate?: string | null;
  audio_codec?: string | null;
  video_codec?: string | null;
  /** @format int32 */
  video_width?: number | null;
  /** @format int32 */
  video_height?: number | null;
  istv?: boolean;
  /** @format date-time */
  lastupdate?: string;
  /** @format int32 */
  mediatype?: number;
  custom1?: string | null;
  custom2?: string | null;
  custom3?: string | null;
  custom4?: string | null;
  /** @format date-time */
  created?: string | null;
  /** @format int32 */
  owner_id: number;
  videoOwner?: string | null;
  genres?: MovieDataGenreResource[] | null;
  lastSeenInformation?: LastSeenInformation | null;
  isFavorite?: boolean;
  isFlagged?: boolean;
  /** @format byte */
  coverImageBase64Enc?: string | null;
  mediaTypeName?: string | null;
};

export type MovieDataGenreResource = Resource & {
  /** @format int32 */
  id?: number;
  name?: string | null;
};

export interface LastSeenInformation {
  /** @format date-time */
  lastSeenDate?: string;
  /** @format int32 */
  seenCount?: number;
  /** @format int32 */
  daysSinceLastView?: number;
  lastSeenSentence?: string | null;
  readableTimeSinceLastViewHtml?: string | null;
  allSeenDates?: string[] | null;
}

export enum MovieDataSortOrder {
  ByDiskIdAsc = 0,
  ByLastSeenDateAsc = 1,
}

export interface MovieDataOptions {
  diskid?: string | null;
  title?: string | null;
  search?: string | null;
  mediaTypes?: string | null;
  genres?: string | null;
  isTv?: string | null;
  isDeleted?: string | null;
  notSeen?: string | null;
  sortOrder?: MovieDataSortOrder;
  useInlineCoverImage?: boolean;
  exactMatch?: boolean;
}

export type CollectionWithPagingOfMovieDataResource = CollectionOfMovieDataResource & {
  /** @format int32 */
  offset?: number | null;
  /** @format int32 */
  limit?: number | null;
  /** @format int64 */
  size?: number;
  first?: Link | null;
  previous?: Link | null;
  next?: Link | null;
  last?: Link | null;
};

export type CollectionOfMovieDataResource = Resource & {
  value?: MovieDataResource[] | null;
};

export interface MovieUserSetting {
  isFavorite?: boolean;
  isFlagged?: boolean;
}

export type MovieMetaResource = Resource & {
  metaEngine?: string | null;
  reference?: string | null;
  title?: string | null;
  subTitle?: string | null;
  originalTitle?: string | null;
  year?: string | null;
  productionCountry?: string | null;
  imgUrl?: string | null;
  backgroundImgUrl?: string | null;
  length?: string | null;
  actors?: MovieMetaActorModel[] | null;
  plot?: string | null;
  rating?: string | null;
  editions?: MovieMetaEditionModel[] | null;
  genres?: string[] | null;
  barcode?: string | null;
};

export interface MovieMetaActorModel {
  metaEngine?: string | null;
  reference?: string | null;
  actorName?: string | null;
}

export interface MovieMetaEditionModel {
  metaEngine?: string | null;
  reference?: string | null;
  name?: string | null;
  country?: string | null;
  length?: string | null;
  barcode?: string | null;
}

export interface IdentityResult {
  succeeded?: boolean;
  errors?: IdentityError[];
}

export interface IdentityError {
  code?: string;
  description?: string;
}

export interface UserModel {
  name?: string | null;
  password?: string | null;
  groups?: string[] | null;
}

export type IdentityUser = IdentityUserOfString & object;

export interface IdentityUserOfString {
  id?: string;
  userName?: string | null;
  normalizedUserName?: string | null;
  email?: string | null;
  normalizedEmail?: string | null;
  emailConfirmed?: boolean;
  passwordHash?: string | null;
  securityStamp?: string | null;
  concurrencyStamp?: string | null;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
  twoFactorEnabled?: boolean;
  /** @format date-time */
  lockoutEnd?: string | null;
  lockoutEnabled?: boolean;
  /** @format int32 */
  accessFailedCount?: number;
}

export interface UserPasswordChangeModel {
  userName?: string | null;
  currentPassword?: string | null;
  newPassword?: string | null;
}

export interface RoleModel {
  roleName?: string | null;
}

export type IdentityRole = IdentityRoleOfString & object;

export interface IdentityRoleOfString {
  id?: string;
  name?: string | null;
  normalizedName?: string | null;
  concurrencyStamp?: string | null;
}

export interface LoginModel {
  username?: string | null;
  password?: string | null;
  group?: string | null;
  apiMasterkey?: string | null;
}

export interface RefreshTokenModel {
  token?: string | null;
  refreshToken?: string | null;
  refreshSessionIdentifier?: string | null;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title VideoDb API
 * @version 1.15.0
 * @baseUrl http://192.168.0.3:7071
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Root
   * @name RootGetRoot
   * @request GET:/
   * @secure
   */
  rootGetRoot = (params: RequestParams = {}) =>
    this.request<File, any>({
      path: `/`,
      method: "GET",
      secure: true,
      ...params,
    });

  inventory = {
    /**
     * @description Provide a name for the new inventory.
     *
     * @tags Inventory
     * @name InventoryCreateInventory
     * @summary Create a new inventory
     * @request POST:/inventory
     * @secure
     */
    inventoryCreateInventory: (
      query?: {
        name?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<InventoryResource, void>({
        path: `/inventory`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all recorded inventory.
     *
     * @tags Inventory
     * @name InventoryGetInventories
     * @summary Get all inventories
     * @request GET:/inventory
     * @secure
     */
    inventoryGetInventories: (
      query?: {
        nameFilter?: string | null;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<CollectionWithPagingOfInventoryResource, void>({
        path: `/inventory`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Return an inventory with the given id.
     *
     * @tags Inventory
     * @name InventoryGetInventory
     * @summary Get inventory by id
     * @request GET:/inventory/{Id}
     * @secure
     */
    inventoryGetInventory: (id: number, params: RequestParams = {}) =>
      this.request<InventoryResource, void>({
        path: `/inventory/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete the inventory with the given id.
     *
     * @tags Inventory
     * @name InventoryDeleteInventory
     * @summary Delete inventory
     * @request DELETE:/inventory/{Id}
     * @secure
     */
    inventoryDeleteInventory: (id: number, params: RequestParams = {}) =>
      this.request<boolean, void>({
        path: `/inventory/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a rack.
     *
     * @tags Inventory
     * @name InventoryGetInventoryRackDataForRack
     * @summary Get rack for inventory by id and rack id
     * @request GET:/inventory/{Id}/rack/{RackId}
     * @secure
     */
    inventoryGetInventoryRackDataForRack: (
      id: number,
      rackId: string,
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<CollectionWithPagingOfInventoryDataResource, void>({
        path: `/inventory/${id}/rack/${rackId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryPostInventoryRack
     * @summary Post rack for inventory by id and rack id
     * @request POST:/inventory/{Id}/rack/{RackId}
     * @secure
     */
    inventoryPostInventoryRack: (
      id: number,
      rackId: string,
      data: InventoryDataResource[],
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<CollectionWithPagingOfInventoryDataResource, void>({
        path: `/inventory/${id}/rack/${rackId}`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns racks and states.
     *
     * @tags Inventory
     * @name InventoryGetInventoryRacks
     * @summary Get all racks and bays from moviedata for inventory by id and state
     * @request GET:/inventory/{Id}/rack
     * @secure
     */
    inventoryGetInventoryRacks: (id: number, params: RequestParams = {}) =>
      this.request<InventoryRackModel[], void>({
        path: `/inventory/${id}/rack`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Finishs the inventory with the given id.
     *
     * @tags Inventory
     * @name InventoryFinishInventory
     * @summary Finish inventory
     * @request POST:/inventory/{Id}/finish
     * @secure
     */
    inventoryFinishInventory: (id: number, params: RequestParams = {}) =>
      this.request<InventoryResource, void>({
        path: `/inventory/${id}/finish`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Abandon the inventory with the given id.
     *
     * @tags Inventory
     * @name InventoryAbandonInventory
     * @summary Abandon inventory
     * @request POST:/inventory/{Id}/abandon
     * @secure
     */
    inventoryAbandonInventory: (id: number, params: RequestParams = {}) =>
      this.request<InventoryResource, void>({
        path: `/inventory/${id}/abandon`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  moviedata = {
    /**
     * @description Set a seen date for a movie, the current user and it's current view group. Movie id and the date have to to be passed with request content.User identiy and it's view group is evaluated from Bearer Token.It's not possible to mark a movie as seen twice per day and viewgroup
     *
     * @tags MovieData
     * @name MovieDataSetMovieSeen
     * @summary Set Seen Date
     * @request POST:/moviedata/seen
     * @secure
     */
    movieDataSetMovieSeen: (
      data: MovieSeenOptions,
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<CollectionWithPagingOfTupleOfIntegerAndString, any>({
        path: `/moviedata/seen`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Return all seen dates in desc order and the movie which was seen.
     *
     * @tags MovieData
     * @name MovieDataGetMovieSeen
     * @summary Get all Seen Dates
     * @request GET:/moviedata/seen
     * @secure
     */
    movieDataGetMovieSeen: (
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
        /** @format date-time */
        FromDate?: string | null;
        /** @format date-time */
        ToDate?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<CollectionWithPagingAndDateFilterOfMovieDataSeenResource, void>({
        path: `/moviedata/seen`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieData
     * @name MovieDataUnSetMovieSeen
     * @request DELETE:/moviedata/seen
     * @secure
     */
    movieDataUnSetMovieSeen: (
      data: MovieSeenOptions,
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/moviedata/seen`,
        method: "DELETE",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieData
     * @name MovieDataGetMovieData
     * @request GET:/moviedata
     * @secure
     */
    movieDataGetMovieData: (
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
        Diskid?: string | null;
        Title?: string | null;
        Search?: string | null;
        MediaTypes?: string | null;
        Genres?: string | null;
        IsTv?: string | null;
        IsDeleted?: string | null;
        NotSeen?: string | null;
        SortOrder?: MovieDataSortOrder;
        UseInlineCoverImage?: boolean;
        ExactMatch?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/moviedata`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieData
     * @name MovieDataGetMovieDataWithFilter
     * @request POST:/moviedata
     * @secure
     */
    movieDataGetMovieDataWithFilter: (
      data: MovieDataOptions,
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/moviedata`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieData
     * @name MovieDataGetMovieDataSurprise
     * @request GET:/moviedata/surprise
     * @secure
     */
    movieDataGetMovieDataSurprise: (
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
        Diskid?: string | null;
        Title?: string | null;
        Search?: string | null;
        MediaTypes?: string | null;
        Genres?: string | null;
        IsTv?: string | null;
        IsDeleted?: string | null;
        NotSeen?: string | null;
        SortOrder?: MovieDataSortOrder;
        UseInlineCoverImage?: boolean;
        ExactMatch?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/moviedata/surprise`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieData
     * @name MovieDataGetMovieDataExperiment
     * @request GET:/moviedata/experiment
     * @secure
     */
    movieDataGetMovieDataExperiment: (
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
        Diskid?: string | null;
        Title?: string | null;
        Search?: string | null;
        MediaTypes?: string | null;
        Genres?: string | null;
        IsTv?: string | null;
        IsDeleted?: string | null;
        NotSeen?: string | null;
        SortOrder?: MovieDataSortOrder;
        UseInlineCoverImage?: boolean;
        ExactMatch?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/moviedata/experiment`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieData
     * @name MovieDataGetMovieDataBgImg
     * @request GET:/moviedata/bgimg
     * @secure
     */
    movieDataGetMovieDataBgImg: (
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
        Diskid?: string | null;
        Title?: string | null;
        Search?: string | null;
        MediaTypes?: string | null;
        Genres?: string | null;
        IsTv?: string | null;
        IsDeleted?: string | null;
        NotSeen?: string | null;
        SortOrder?: MovieDataSortOrder;
        UseInlineCoverImage?: boolean;
        ExactMatch?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/moviedata/bgimg`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieData
     * @name MovieDataLoadBgImg
     * @request GET:/moviedata/loadbgimg
     * @secure
     */
    movieDataLoadBgImg: (
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
        Diskid?: string | null;
        Title?: string | null;
        Search?: string | null;
        MediaTypes?: string | null;
        Genres?: string | null;
        IsTv?: string | null;
        IsDeleted?: string | null;
        NotSeen?: string | null;
        SortOrder?: MovieDataSortOrder;
        UseInlineCoverImage?: boolean;
        ExactMatch?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/moviedata/loadbgimg`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieData
     * @name MovieDataGetMovieDataById
     * @request GET:/moviedata/{movieId}
     * @secure
     */
    movieDataGetMovieDataById: (movieId: number, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/moviedata/${movieId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieData
     * @name MovieDataUpdateOrCreateMovieDataById
     * @request POST:/moviedata/{movieId}
     * @secure
     */
    movieDataUpdateOrCreateMovieDataById: (movieId: number, data: MovieDataResource, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/moviedata/${movieId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get favourite movies for current user.
     *
     * @tags MovieData
     * @name MovieDataGetFavoriteMovies
     * @summary Get favorite movies
     * @request GET:/moviedata/favorites
     * @secure
     */
    movieDataGetFavoriteMovies: (
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<CollectionWithPagingOfMovieDataResource, void>({
        path: `/moviedata/favorites`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieData
     * @name MovieDataGetWatchAgainMovies
     * @request GET:/moviedata/watchagain
     * @secure
     */
    movieDataGetWatchAgainMovies: (
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/moviedata/watchagain`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieData
     * @name MovieDataSetWatchAgainMovies
     * @request POST:/moviedata/watchagain/{movieId}
     * @secure
     */
    movieDataSetWatchAgainMovies: (movieId: number, data: MovieUserSetting, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/moviedata/watchagain/${movieId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieData
     * @name MovieDataSetFavoriteMovies
     * @request POST:/moviedata/favorites/{movieId}
     * @secure
     */
    movieDataSetFavoriteMovies: (movieId: number, data: MovieUserSetting, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/moviedata/favorites/${movieId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieData
     * @name MovieDataGetAllMediaTypes
     * @request GET:/moviedata/mediatypes
     * @secure
     */
    movieDataGetAllMediaTypes: (params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/moviedata/mediatypes`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieData
     * @name MovieDataGetAllGenres
     * @request GET:/moviedata/genres
     * @secure
     */
    movieDataGetAllGenres: (params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/moviedata/genres`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieData
     * @name MovieDataGetNextFreeDiskId
     * @request GET:/moviedata/nextdiskid/{shelterandcompartment}
     * @secure
     */
    movieDataGetNextFreeDiskId: (shelterandcompartment: string, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/moviedata/nextdiskid/${shelterandcompartment}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns movie image as FileContentResult
     *
     * @tags MovieData
     * @name MovieDataGetMovieCoverImage
     * @summary Get image for the given id
     * @request GET:/moviedata/image/cover/{MovieId}
     * @secure
     */
    movieDataGetMovieCoverImage: (movieId: number, params: RequestParams = {}) =>
      this.request<CollectionWithPagingAndDateFilterOfMovieDataSeenResource, void>({
        path: `/moviedata/image/cover/${movieId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns movie image as FileContentResult
     *
     * @tags MovieData
     * @name MovieDataGetMovieBackgroundImage
     * @summary Get background image for the given id
     * @request GET:/moviedata/image/background/{MovieId}
     * @secure
     */
    movieDataGetMovieBackgroundImage: (movieId: number, params: RequestParams = {}) =>
      this.request<CollectionWithPagingAndDateFilterOfMovieDataSeenResource, void>({
        path: `/moviedata/image/background/${movieId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Return a flat list of all bays in all racks.
     *
     * @tags MovieData
     * @name MovieDataGetRacks
     * @summary Get all bays
     * @request GET:/moviedata/racks
     * @secure
     */
    movieDataGetRacks: (params: RequestParams = {}) =>
      this.request<string[], void>({
        path: `/moviedata/racks`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  moviemeta = {
    /**
     * No description
     *
     * @tags MovieMeta
     * @name MovieMetaGetMovieMeta
     * @request GET:/moviemeta/searchtitle/{title}
     * @secure
     */
    movieMetaGetMovieMeta: (
      title: string,
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
        Engine?: string | null;
        BackgroundImageEngine?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/moviemeta/searchtitle/${title}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieMeta
     * @name MovieMetaGetMovieMetaAsyncById
     * @request GET:/moviemeta/{reference}
     * @secure
     */
    movieMetaGetMovieMetaAsyncById: (
      reference: string,
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/moviemeta/${reference}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieMeta
     * @name MovieMetaGetMovieMetaByBarcode
     * @request GET:/moviemeta/searchbarcode/{barcode}
     * @secure
     */
    movieMetaGetMovieMetaByBarcode: (
      barcode: string,
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/moviemeta/searchbarcode/${barcode}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MovieMeta
     * @name MovieMetaConvertMovieMeta
     * @request POST:/moviemeta/convert
     * @secure
     */
    movieMetaConvertMovieMeta: (data: MovieMetaResource, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/moviemeta/convert`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  home = {
    /**
     * No description
     *
     * @tags Home
     * @name HomeIndex
     * @request GET:/home
     * @secure
     */
    homeIndex: (params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/home`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  identity = {
    /**
     * @description This api adds new user to user repository.
     *
     * @tags Identity
     * @name IdentityAddUser
     * @summary Add new user
     * @request POST:/identity/user
     * @secure
     */
    identityAddUser: (data: UserModel, params: RequestParams = {}) =>
      this.request<IdentityResult, any>({
        path: `/identity/user`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api adds new user to user repository.
     *
     * @tags Identity
     * @name IdentityGetUsers
     * @summary List all users
     * @request GET:/identity/user
     * @secure
     */
    identityGetUsers: (params: RequestParams = {}) =>
      this.request<IdentityUser[], any>({
        path: `/identity/user`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a user with given Id.
     *
     * @tags Identity
     * @name IdentityDeleteUser
     * @summary Delete user.
     * @request DELETE:/identity/user/{userId}
     * @secure
     */
    identityDeleteUser: (userId: string, params: RequestParams = {}) =>
      this.request<IdentityUser[], any>({
        path: `/identity/user/${userId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This api adds a role to a user repository.
     *
     * @tags Identity
     * @name IdentityAddUserToRole
     * @summary Add user to role
     * @request POST:/identity/user/role
     * @secure
     */
    identityAddUserToRole: (data: UserModel, params: RequestParams = {}) =>
      this.request<IdentityResult, any>({
        path: `/identity/user/role`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all roles for the given user.
     *
     * @tags Identity
     * @name IdentityGetRolesForUser
     * @summary Get Roles for use
     * @request GET:/identity/user/role/{username}
     * @secure
     */
    identityGetRolesForUser: (username: string, params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/identity/user/role/${username}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a role from user.
     *
     * @tags Identity
     * @name IdentityRemoveRoleFromUser
     * @summary Remove role from user.
     * @request DELETE:/identity/user/role/{username}/{rolename}
     * @secure
     */
    identityRemoveRoleFromUser: (username: string, rolename: string, params: RequestParams = {}) =>
      this.request<IdentityUser[], any>({
        path: `/identity/user/role/${username}/${rolename}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This api resets the password of a given user with a given new password.
     *
     * @tags Identity
     * @name IdentityResetPassword
     * @summary Reset the password of a user
     * @request PUT:/identity/password/reset
     * @secure
     */
    identityResetPassword: (data: UserModel, params: RequestParams = {}) =>
      this.request<IdentityResult, any>({
        path: `/identity/password/reset`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This api changes the password of a given user with a given new password. Old password is required.
     *
     * @tags Identity
     * @name IdentityChangePassword
     * @summary Changes the password of a user
     * @request PUT:/identity/password/change
     * @secure
     */
    identityChangePassword: (data: UserPasswordChangeModel, params: RequestParams = {}) =>
      this.request<IdentityResult, any>({
        path: `/identity/password/change`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds a new role to repository
     *
     * @tags Identity
     * @name IdentityAddRole
     * @summary Add role.
     * @request POST:/identity/role
     * @secure
     */
    identityAddRole: (data: RoleModel, params: RequestParams = {}) =>
      this.request<IdentityResult[], any>({
        path: `/identity/role`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets all roles from repository
     *
     * @tags Identity
     * @name IdentityGetRoles
     * @summary Get roles.
     * @request GET:/identity/role
     * @secure
     */
    identityGetRoles: (params: RequestParams = {}) =>
      this.request<IdentityRole[], any>({
        path: `/identity/role`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a role with given Id.
     *
     * @tags Identity
     * @name IdentityDeleteRole
     * @summary Delete role.
     * @request DELETE:/identity/role/{roleId}
     * @secure
     */
    identityDeleteRole: (roleId: string, params: RequestParams = {}) =>
      this.request<IdentityResult[], any>({
        path: `/identity/role/${roleId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  info = {
    /**
     * No description
     *
     * @tags Info
     * @name InfoIndex
     * @request GET:/info
     * @secure
     */
    infoIndex: (params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/info`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  token = {
    /**
     * @description This api returns a bearer token for given user information. If no password is given or password is emtpy, the apimasterkey will be used to authenticate the user.
     *
     * @tags Token
     * @name TokenCreate
     * @summary Request new bearer token.
     * @request POST:/token
     * @secure
     */
    tokenCreate: (data: LoginModel, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This api refreshs a token. The token may be expired. A valid refresh token must be provided.
     *
     * @tags Token
     * @name TokenRefresh
     * @summary Refresh a bearer token.
     * @request POST:/token/refresh
     * @secure
     */
    tokenRefresh: (data: RefreshTokenModel, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/token/refresh`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Token
     * @name TokenUserSignOut
     * @request POST:/token/signout
     * @secure
     */
    tokenUserSignOut: (params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/token/signout`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Token
     * @name TokenGetUserProfile
     * @request GET:/token/profile
     * @secure
     */
    tokenGetUserProfile: (params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/token/profile`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  galleryadmin = {
    /**
     * @description Returs all albums in gallery.
     *
     * @tags GalleryAdmin
     * @name GalleryAdminRenewThumbs
     * @summary Get all albums
     * @request GET:/galleryadmin/renew-thumbs
     * @secure
     */
    galleryAdminRenewThumbs: (params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/galleryadmin/renew-thumbs`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  gallery = {
    /**
     * @description Returs all albums in gallery.
     *
     * @tags Gallery
     * @name GalleryGetAlbum
     * @summary Get all albums
     * @request GET:/gallery/album
     * @secure
     */
    galleryGetAlbum: (
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/gallery/album`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Get all images from album.
     *
     * @tags Gallery
     * @name GalleryGetAlbumById
     * @summary Get all images from album.
     * @request GET:/gallery/album/{Id}
     * @secure
     */
    galleryGetAlbumById: (
      id: number,
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Offset?: number | null;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        Limit?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/gallery/album/${id}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returs a json containig a base64enc image.
     *
     * @tags Gallery
     * @name GalleryGetStreamingImage
     * @summary Get image
     * @request GET:/gallery/image/{Id}
     * @secure
     */
    galleryGetStreamingImage: (id: number, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/gallery/image/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
}
