
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Pizza
 * 
 */
export type Pizza = $Result.DefaultSelection<Prisma.$PizzaPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model PizzaVariant
 * 
 */
export type PizzaVariant = $Result.DefaultSelection<Prisma.$PizzaVariantPayload>
/**
 * Model DoughType
 * 
 */
export type DoughType = $Result.DefaultSelection<Prisma.$DoughTypePayload>
/**
 * Model PizzaSize
 * 
 */
export type PizzaSize = $Result.DefaultSelection<Prisma.$PizzaSizePayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model CartItem
 * 
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pizza`: Exposes CRUD operations for the **Pizza** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pizzas
    * const pizzas = await prisma.pizza.findMany()
    * ```
    */
  get pizza(): Prisma.PizzaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pizzaVariant`: Exposes CRUD operations for the **PizzaVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PizzaVariants
    * const pizzaVariants = await prisma.pizzaVariant.findMany()
    * ```
    */
  get pizzaVariant(): Prisma.PizzaVariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doughType`: Exposes CRUD operations for the **DoughType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoughTypes
    * const doughTypes = await prisma.doughType.findMany()
    * ```
    */
  get doughType(): Prisma.DoughTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pizzaSize`: Exposes CRUD operations for the **PizzaSize** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PizzaSizes
    * const pizzaSizes = await prisma.pizzaSize.findMany()
    * ```
    */
  get pizzaSize(): Prisma.PizzaSizeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Pizza: 'Pizza',
    Category: 'Category',
    PizzaVariant: 'PizzaVariant',
    DoughType: 'DoughType',
    PizzaSize: 'PizzaSize',
    Cart: 'Cart',
    CartItem: 'CartItem',
    Order: 'Order',
    OrderItem: 'OrderItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "pizza" | "category" | "pizzaVariant" | "doughType" | "pizzaSize" | "cart" | "cartItem" | "order" | "orderItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Pizza: {
        payload: Prisma.$PizzaPayload<ExtArgs>
        fields: Prisma.PizzaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PizzaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PizzaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>
          }
          findFirst: {
            args: Prisma.PizzaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PizzaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>
          }
          findMany: {
            args: Prisma.PizzaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>[]
          }
          create: {
            args: Prisma.PizzaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>
          }
          createMany: {
            args: Prisma.PizzaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PizzaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>[]
          }
          delete: {
            args: Prisma.PizzaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>
          }
          update: {
            args: Prisma.PizzaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>
          }
          deleteMany: {
            args: Prisma.PizzaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PizzaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PizzaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>[]
          }
          upsert: {
            args: Prisma.PizzaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>
          }
          aggregate: {
            args: Prisma.PizzaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePizza>
          }
          groupBy: {
            args: Prisma.PizzaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PizzaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PizzaCountArgs<ExtArgs>
            result: $Utils.Optional<PizzaCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      PizzaVariant: {
        payload: Prisma.$PizzaVariantPayload<ExtArgs>
        fields: Prisma.PizzaVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PizzaVariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PizzaVariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaVariantPayload>
          }
          findFirst: {
            args: Prisma.PizzaVariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PizzaVariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaVariantPayload>
          }
          findMany: {
            args: Prisma.PizzaVariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaVariantPayload>[]
          }
          create: {
            args: Prisma.PizzaVariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaVariantPayload>
          }
          createMany: {
            args: Prisma.PizzaVariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PizzaVariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaVariantPayload>[]
          }
          delete: {
            args: Prisma.PizzaVariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaVariantPayload>
          }
          update: {
            args: Prisma.PizzaVariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaVariantPayload>
          }
          deleteMany: {
            args: Prisma.PizzaVariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PizzaVariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PizzaVariantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaVariantPayload>[]
          }
          upsert: {
            args: Prisma.PizzaVariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaVariantPayload>
          }
          aggregate: {
            args: Prisma.PizzaVariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePizzaVariant>
          }
          groupBy: {
            args: Prisma.PizzaVariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<PizzaVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.PizzaVariantCountArgs<ExtArgs>
            result: $Utils.Optional<PizzaVariantCountAggregateOutputType> | number
          }
        }
      }
      DoughType: {
        payload: Prisma.$DoughTypePayload<ExtArgs>
        fields: Prisma.DoughTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoughTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoughTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughTypePayload>
          }
          findFirst: {
            args: Prisma.DoughTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoughTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughTypePayload>
          }
          findMany: {
            args: Prisma.DoughTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughTypePayload>[]
          }
          create: {
            args: Prisma.DoughTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughTypePayload>
          }
          createMany: {
            args: Prisma.DoughTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoughTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughTypePayload>[]
          }
          delete: {
            args: Prisma.DoughTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughTypePayload>
          }
          update: {
            args: Prisma.DoughTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughTypePayload>
          }
          deleteMany: {
            args: Prisma.DoughTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoughTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoughTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughTypePayload>[]
          }
          upsert: {
            args: Prisma.DoughTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoughTypePayload>
          }
          aggregate: {
            args: Prisma.DoughTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoughType>
          }
          groupBy: {
            args: Prisma.DoughTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoughTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoughTypeCountArgs<ExtArgs>
            result: $Utils.Optional<DoughTypeCountAggregateOutputType> | number
          }
        }
      }
      PizzaSize: {
        payload: Prisma.$PizzaSizePayload<ExtArgs>
        fields: Prisma.PizzaSizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PizzaSizeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaSizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PizzaSizeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaSizePayload>
          }
          findFirst: {
            args: Prisma.PizzaSizeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaSizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PizzaSizeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaSizePayload>
          }
          findMany: {
            args: Prisma.PizzaSizeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaSizePayload>[]
          }
          create: {
            args: Prisma.PizzaSizeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaSizePayload>
          }
          createMany: {
            args: Prisma.PizzaSizeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PizzaSizeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaSizePayload>[]
          }
          delete: {
            args: Prisma.PizzaSizeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaSizePayload>
          }
          update: {
            args: Prisma.PizzaSizeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaSizePayload>
          }
          deleteMany: {
            args: Prisma.PizzaSizeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PizzaSizeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PizzaSizeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaSizePayload>[]
          }
          upsert: {
            args: Prisma.PizzaSizeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaSizePayload>
          }
          aggregate: {
            args: Prisma.PizzaSizeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePizzaSize>
          }
          groupBy: {
            args: Prisma.PizzaSizeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PizzaSizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PizzaSizeCountArgs<ExtArgs>
            result: $Utils.Optional<PizzaSizeCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>
        fields: Prisma.CartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    pizza?: PizzaOmit
    category?: CategoryOmit
    pizzaVariant?: PizzaVariantOmit
    doughType?: DoughTypeOmit
    pizzaSize?: PizzaSizeOmit
    cart?: CartOmit
    cartItem?: CartItemOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type PizzaCountOutputType
   */

  export type PizzaCountOutputType = {
    variants: number
  }

  export type PizzaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | PizzaCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * PizzaCountOutputType without action
   */
  export type PizzaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaCountOutputType
     */
    select?: PizzaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PizzaCountOutputType without action
   */
  export type PizzaCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaVariantWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    pizzas: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizzas?: boolean | CategoryCountOutputTypeCountPizzasArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPizzasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaWhereInput
  }


  /**
   * Count Type PizzaVariantCountOutputType
   */

  export type PizzaVariantCountOutputType = {
    cartItems: number
    orderItems: number
  }

  export type PizzaVariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartItems?: boolean | PizzaVariantCountOutputTypeCountCartItemsArgs
    orderItems?: boolean | PizzaVariantCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * PizzaVariantCountOutputType without action
   */
  export type PizzaVariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaVariantCountOutputType
     */
    select?: PizzaVariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PizzaVariantCountOutputType without action
   */
  export type PizzaVariantCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }

  /**
   * PizzaVariantCountOutputType without action
   */
  export type PizzaVariantCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type DoughTypeCountOutputType
   */

  export type DoughTypeCountOutputType = {
    variants: number
  }

  export type DoughTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | DoughTypeCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * DoughTypeCountOutputType without action
   */
  export type DoughTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughTypeCountOutputType
     */
    select?: DoughTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoughTypeCountOutputType without action
   */
  export type DoughTypeCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaVariantWhereInput
  }


  /**
   * Count Type PizzaSizeCountOutputType
   */

  export type PizzaSizeCountOutputType = {
    variants: number
  }

  export type PizzaSizeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | PizzaSizeCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * PizzaSizeCountOutputType without action
   */
  export type PizzaSizeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaSizeCountOutputType
     */
    select?: PizzaSizeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PizzaSizeCountOutputType without action
   */
  export type PizzaSizeCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaVariantWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    items: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CartCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    oauthId: string | null
    oauthProvider: string | null
    name: string | null
    surname: string | null
    email: string | null
    phone: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    oauthId: string | null
    oauthProvider: string | null
    name: string | null
    surname: string | null
    email: string | null
    phone: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    oauthId: number
    oauthProvider: number
    name: number
    surname: number
    email: number
    phone: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    oauthId?: true
    oauthProvider?: true
    name?: true
    surname?: true
    email?: true
    phone?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    oauthId?: true
    oauthProvider?: true
    name?: true
    surname?: true
    email?: true
    phone?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    oauthId?: true
    oauthProvider?: true
    name?: true
    surname?: true
    email?: true
    phone?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    oauthId: string
    oauthProvider: string
    name: string
    surname: string
    email: string
    phone: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oauthId?: boolean
    oauthProvider?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    phone?: boolean
    cart?: boolean | User$cartArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oauthId?: boolean
    oauthProvider?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oauthId?: boolean
    oauthProvider?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    oauthId?: boolean
    oauthProvider?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    phone?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "oauthId" | "oauthProvider" | "name" | "surname" | "email" | "phone", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | User$cartArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs> | null
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      oauthId: string
      oauthProvider: string
      name: string
      surname: string
      email: string
      phone: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends User$cartArgs<ExtArgs> = {}>(args?: Subset<T, User$cartArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly oauthId: FieldRef<"User", 'String'>
    readonly oauthProvider: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly surname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.cart
   */
  export type User$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Pizza
   */

  export type AggregatePizza = {
    _count: PizzaCountAggregateOutputType | null
    _avg: PizzaAvgAggregateOutputType | null
    _sum: PizzaSumAggregateOutputType | null
    _min: PizzaMinAggregateOutputType | null
    _max: PizzaMaxAggregateOutputType | null
  }

  export type PizzaAvgAggregateOutputType = {
    rating: number | null
    minPrice: number | null
  }

  export type PizzaSumAggregateOutputType = {
    rating: number | null
    minPrice: number | null
  }

  export type PizzaMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    overviewImageUrl: string | null
    categoryId: string | null
    rating: number | null
    minPrice: number | null
    slug: string | null
  }

  export type PizzaMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    overviewImageUrl: string | null
    categoryId: string | null
    rating: number | null
    minPrice: number | null
    slug: string | null
  }

  export type PizzaCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageUrl: number
    overviewImageUrl: number
    categoryId: number
    rating: number
    minPrice: number
    slug: number
    _all: number
  }


  export type PizzaAvgAggregateInputType = {
    rating?: true
    minPrice?: true
  }

  export type PizzaSumAggregateInputType = {
    rating?: true
    minPrice?: true
  }

  export type PizzaMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    overviewImageUrl?: true
    categoryId?: true
    rating?: true
    minPrice?: true
    slug?: true
  }

  export type PizzaMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    overviewImageUrl?: true
    categoryId?: true
    rating?: true
    minPrice?: true
    slug?: true
  }

  export type PizzaCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    overviewImageUrl?: true
    categoryId?: true
    rating?: true
    minPrice?: true
    slug?: true
    _all?: true
  }

  export type PizzaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pizza to aggregate.
     */
    where?: PizzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pizzas to fetch.
     */
    orderBy?: PizzaOrderByWithRelationInput | PizzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PizzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pizzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pizzas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pizzas
    **/
    _count?: true | PizzaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PizzaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PizzaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PizzaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PizzaMaxAggregateInputType
  }

  export type GetPizzaAggregateType<T extends PizzaAggregateArgs> = {
        [P in keyof T & keyof AggregatePizza]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePizza[P]>
      : GetScalarType<T[P], AggregatePizza[P]>
  }




  export type PizzaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaWhereInput
    orderBy?: PizzaOrderByWithAggregationInput | PizzaOrderByWithAggregationInput[]
    by: PizzaScalarFieldEnum[] | PizzaScalarFieldEnum
    having?: PizzaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PizzaCountAggregateInputType | true
    _avg?: PizzaAvgAggregateInputType
    _sum?: PizzaSumAggregateInputType
    _min?: PizzaMinAggregateInputType
    _max?: PizzaMaxAggregateInputType
  }

  export type PizzaGroupByOutputType = {
    id: string
    title: string
    description: string
    imageUrl: string
    overviewImageUrl: string
    categoryId: string
    rating: number
    minPrice: number
    slug: string
    _count: PizzaCountAggregateOutputType | null
    _avg: PizzaAvgAggregateOutputType | null
    _sum: PizzaSumAggregateOutputType | null
    _min: PizzaMinAggregateOutputType | null
    _max: PizzaMaxAggregateOutputType | null
  }

  type GetPizzaGroupByPayload<T extends PizzaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PizzaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PizzaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PizzaGroupByOutputType[P]>
            : GetScalarType<T[P], PizzaGroupByOutputType[P]>
        }
      >
    >


  export type PizzaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    overviewImageUrl?: boolean
    categoryId?: boolean
    rating?: boolean
    minPrice?: boolean
    slug?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    variants?: boolean | Pizza$variantsArgs<ExtArgs>
    _count?: boolean | PizzaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizza"]>

  export type PizzaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    overviewImageUrl?: boolean
    categoryId?: boolean
    rating?: boolean
    minPrice?: boolean
    slug?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizza"]>

  export type PizzaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    overviewImageUrl?: boolean
    categoryId?: boolean
    rating?: boolean
    minPrice?: boolean
    slug?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizza"]>

  export type PizzaSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    overviewImageUrl?: boolean
    categoryId?: boolean
    rating?: boolean
    minPrice?: boolean
    slug?: boolean
  }

  export type PizzaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "imageUrl" | "overviewImageUrl" | "categoryId" | "rating" | "minPrice" | "slug", ExtArgs["result"]["pizza"]>
  export type PizzaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    variants?: boolean | Pizza$variantsArgs<ExtArgs>
    _count?: boolean | PizzaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PizzaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type PizzaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $PizzaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pizza"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      variants: Prisma.$PizzaVariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      imageUrl: string
      overviewImageUrl: string
      categoryId: string
      rating: number
      minPrice: number
      slug: string
    }, ExtArgs["result"]["pizza"]>
    composites: {}
  }

  type PizzaGetPayload<S extends boolean | null | undefined | PizzaDefaultArgs> = $Result.GetResult<Prisma.$PizzaPayload, S>

  type PizzaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PizzaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PizzaCountAggregateInputType | true
    }

  export interface PizzaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pizza'], meta: { name: 'Pizza' } }
    /**
     * Find zero or one Pizza that matches the filter.
     * @param {PizzaFindUniqueArgs} args - Arguments to find a Pizza
     * @example
     * // Get one Pizza
     * const pizza = await prisma.pizza.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PizzaFindUniqueArgs>(args: SelectSubset<T, PizzaFindUniqueArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pizza that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PizzaFindUniqueOrThrowArgs} args - Arguments to find a Pizza
     * @example
     * // Get one Pizza
     * const pizza = await prisma.pizza.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PizzaFindUniqueOrThrowArgs>(args: SelectSubset<T, PizzaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pizza that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaFindFirstArgs} args - Arguments to find a Pizza
     * @example
     * // Get one Pizza
     * const pizza = await prisma.pizza.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PizzaFindFirstArgs>(args?: SelectSubset<T, PizzaFindFirstArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pizza that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaFindFirstOrThrowArgs} args - Arguments to find a Pizza
     * @example
     * // Get one Pizza
     * const pizza = await prisma.pizza.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PizzaFindFirstOrThrowArgs>(args?: SelectSubset<T, PizzaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pizzas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pizzas
     * const pizzas = await prisma.pizza.findMany()
     * 
     * // Get first 10 Pizzas
     * const pizzas = await prisma.pizza.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pizzaWithIdOnly = await prisma.pizza.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PizzaFindManyArgs>(args?: SelectSubset<T, PizzaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pizza.
     * @param {PizzaCreateArgs} args - Arguments to create a Pizza.
     * @example
     * // Create one Pizza
     * const Pizza = await prisma.pizza.create({
     *   data: {
     *     // ... data to create a Pizza
     *   }
     * })
     * 
     */
    create<T extends PizzaCreateArgs>(args: SelectSubset<T, PizzaCreateArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pizzas.
     * @param {PizzaCreateManyArgs} args - Arguments to create many Pizzas.
     * @example
     * // Create many Pizzas
     * const pizza = await prisma.pizza.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PizzaCreateManyArgs>(args?: SelectSubset<T, PizzaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pizzas and returns the data saved in the database.
     * @param {PizzaCreateManyAndReturnArgs} args - Arguments to create many Pizzas.
     * @example
     * // Create many Pizzas
     * const pizza = await prisma.pizza.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pizzas and only return the `id`
     * const pizzaWithIdOnly = await prisma.pizza.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PizzaCreateManyAndReturnArgs>(args?: SelectSubset<T, PizzaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pizza.
     * @param {PizzaDeleteArgs} args - Arguments to delete one Pizza.
     * @example
     * // Delete one Pizza
     * const Pizza = await prisma.pizza.delete({
     *   where: {
     *     // ... filter to delete one Pizza
     *   }
     * })
     * 
     */
    delete<T extends PizzaDeleteArgs>(args: SelectSubset<T, PizzaDeleteArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pizza.
     * @param {PizzaUpdateArgs} args - Arguments to update one Pizza.
     * @example
     * // Update one Pizza
     * const pizza = await prisma.pizza.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PizzaUpdateArgs>(args: SelectSubset<T, PizzaUpdateArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pizzas.
     * @param {PizzaDeleteManyArgs} args - Arguments to filter Pizzas to delete.
     * @example
     * // Delete a few Pizzas
     * const { count } = await prisma.pizza.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PizzaDeleteManyArgs>(args?: SelectSubset<T, PizzaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pizzas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pizzas
     * const pizza = await prisma.pizza.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PizzaUpdateManyArgs>(args: SelectSubset<T, PizzaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pizzas and returns the data updated in the database.
     * @param {PizzaUpdateManyAndReturnArgs} args - Arguments to update many Pizzas.
     * @example
     * // Update many Pizzas
     * const pizza = await prisma.pizza.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pizzas and only return the `id`
     * const pizzaWithIdOnly = await prisma.pizza.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PizzaUpdateManyAndReturnArgs>(args: SelectSubset<T, PizzaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pizza.
     * @param {PizzaUpsertArgs} args - Arguments to update or create a Pizza.
     * @example
     * // Update or create a Pizza
     * const pizza = await prisma.pizza.upsert({
     *   create: {
     *     // ... data to create a Pizza
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pizza we want to update
     *   }
     * })
     */
    upsert<T extends PizzaUpsertArgs>(args: SelectSubset<T, PizzaUpsertArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pizzas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaCountArgs} args - Arguments to filter Pizzas to count.
     * @example
     * // Count the number of Pizzas
     * const count = await prisma.pizza.count({
     *   where: {
     *     // ... the filter for the Pizzas we want to count
     *   }
     * })
    **/
    count<T extends PizzaCountArgs>(
      args?: Subset<T, PizzaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PizzaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pizza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PizzaAggregateArgs>(args: Subset<T, PizzaAggregateArgs>): Prisma.PrismaPromise<GetPizzaAggregateType<T>>

    /**
     * Group by Pizza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PizzaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PizzaGroupByArgs['orderBy'] }
        : { orderBy?: PizzaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PizzaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPizzaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pizza model
   */
  readonly fields: PizzaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pizza.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PizzaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    variants<T extends Pizza$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Pizza$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pizza model
   */
  interface PizzaFieldRefs {
    readonly id: FieldRef<"Pizza", 'String'>
    readonly title: FieldRef<"Pizza", 'String'>
    readonly description: FieldRef<"Pizza", 'String'>
    readonly imageUrl: FieldRef<"Pizza", 'String'>
    readonly overviewImageUrl: FieldRef<"Pizza", 'String'>
    readonly categoryId: FieldRef<"Pizza", 'String'>
    readonly rating: FieldRef<"Pizza", 'Float'>
    readonly minPrice: FieldRef<"Pizza", 'Int'>
    readonly slug: FieldRef<"Pizza", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pizza findUnique
   */
  export type PizzaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * Filter, which Pizza to fetch.
     */
    where: PizzaWhereUniqueInput
  }

  /**
   * Pizza findUniqueOrThrow
   */
  export type PizzaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * Filter, which Pizza to fetch.
     */
    where: PizzaWhereUniqueInput
  }

  /**
   * Pizza findFirst
   */
  export type PizzaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * Filter, which Pizza to fetch.
     */
    where?: PizzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pizzas to fetch.
     */
    orderBy?: PizzaOrderByWithRelationInput | PizzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pizzas.
     */
    cursor?: PizzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pizzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pizzas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pizzas.
     */
    distinct?: PizzaScalarFieldEnum | PizzaScalarFieldEnum[]
  }

  /**
   * Pizza findFirstOrThrow
   */
  export type PizzaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * Filter, which Pizza to fetch.
     */
    where?: PizzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pizzas to fetch.
     */
    orderBy?: PizzaOrderByWithRelationInput | PizzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pizzas.
     */
    cursor?: PizzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pizzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pizzas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pizzas.
     */
    distinct?: PizzaScalarFieldEnum | PizzaScalarFieldEnum[]
  }

  /**
   * Pizza findMany
   */
  export type PizzaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * Filter, which Pizzas to fetch.
     */
    where?: PizzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pizzas to fetch.
     */
    orderBy?: PizzaOrderByWithRelationInput | PizzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pizzas.
     */
    cursor?: PizzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pizzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pizzas.
     */
    skip?: number
    distinct?: PizzaScalarFieldEnum | PizzaScalarFieldEnum[]
  }

  /**
   * Pizza create
   */
  export type PizzaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pizza.
     */
    data: XOR<PizzaCreateInput, PizzaUncheckedCreateInput>
  }

  /**
   * Pizza createMany
   */
  export type PizzaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pizzas.
     */
    data: PizzaCreateManyInput | PizzaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pizza createManyAndReturn
   */
  export type PizzaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * The data used to create many Pizzas.
     */
    data: PizzaCreateManyInput | PizzaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pizza update
   */
  export type PizzaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pizza.
     */
    data: XOR<PizzaUpdateInput, PizzaUncheckedUpdateInput>
    /**
     * Choose, which Pizza to update.
     */
    where: PizzaWhereUniqueInput
  }

  /**
   * Pizza updateMany
   */
  export type PizzaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pizzas.
     */
    data: XOR<PizzaUpdateManyMutationInput, PizzaUncheckedUpdateManyInput>
    /**
     * Filter which Pizzas to update
     */
    where?: PizzaWhereInput
    /**
     * Limit how many Pizzas to update.
     */
    limit?: number
  }

  /**
   * Pizza updateManyAndReturn
   */
  export type PizzaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * The data used to update Pizzas.
     */
    data: XOR<PizzaUpdateManyMutationInput, PizzaUncheckedUpdateManyInput>
    /**
     * Filter which Pizzas to update
     */
    where?: PizzaWhereInput
    /**
     * Limit how many Pizzas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pizza upsert
   */
  export type PizzaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pizza to update in case it exists.
     */
    where: PizzaWhereUniqueInput
    /**
     * In case the Pizza found by the `where` argument doesn't exist, create a new Pizza with this data.
     */
    create: XOR<PizzaCreateInput, PizzaUncheckedCreateInput>
    /**
     * In case the Pizza was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PizzaUpdateInput, PizzaUncheckedUpdateInput>
  }

  /**
   * Pizza delete
   */
  export type PizzaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * Filter which Pizza to delete.
     */
    where: PizzaWhereUniqueInput
  }

  /**
   * Pizza deleteMany
   */
  export type PizzaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pizzas to delete
     */
    where?: PizzaWhereInput
    /**
     * Limit how many Pizzas to delete.
     */
    limit?: number
  }

  /**
   * Pizza.variants
   */
  export type Pizza$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaVariant
     */
    select?: PizzaVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaVariant
     */
    omit?: PizzaVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaVariantInclude<ExtArgs> | null
    where?: PizzaVariantWhereInput
    orderBy?: PizzaVariantOrderByWithRelationInput | PizzaVariantOrderByWithRelationInput[]
    cursor?: PizzaVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PizzaVariantScalarFieldEnum | PizzaVariantScalarFieldEnum[]
  }

  /**
   * Pizza without action
   */
  export type PizzaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    order: number | null
  }

  export type CategorySumAggregateOutputType = {
    order: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    order: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    order: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    order: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    order?: true
  }

  export type CategorySumAggregateInputType = {
    order?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    order?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    order?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    order?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    order: number
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    pizzas?: boolean | Category$pizzasArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    order?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "order", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizzas?: boolean | Category$pizzasArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      pizzas: Prisma.$PizzaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      order: number
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pizzas<T extends Category$pizzasArgs<ExtArgs> = {}>(args?: Subset<T, Category$pizzasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly order: FieldRef<"Category", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.pizzas
   */
  export type Category$pizzasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    where?: PizzaWhereInput
    orderBy?: PizzaOrderByWithRelationInput | PizzaOrderByWithRelationInput[]
    cursor?: PizzaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PizzaScalarFieldEnum | PizzaScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model PizzaVariant
   */

  export type AggregatePizzaVariant = {
    _count: PizzaVariantCountAggregateOutputType | null
    _avg: PizzaVariantAvgAggregateOutputType | null
    _sum: PizzaVariantSumAggregateOutputType | null
    _min: PizzaVariantMinAggregateOutputType | null
    _max: PizzaVariantMaxAggregateOutputType | null
  }

  export type PizzaVariantAvgAggregateOutputType = {
    price: number | null
  }

  export type PizzaVariantSumAggregateOutputType = {
    price: number | null
  }

  export type PizzaVariantMinAggregateOutputType = {
    id: string | null
    pizzaId: string | null
    doughTypeId: string | null
    pizzaSizeId: string | null
    price: number | null
  }

  export type PizzaVariantMaxAggregateOutputType = {
    id: string | null
    pizzaId: string | null
    doughTypeId: string | null
    pizzaSizeId: string | null
    price: number | null
  }

  export type PizzaVariantCountAggregateOutputType = {
    id: number
    pizzaId: number
    doughTypeId: number
    pizzaSizeId: number
    price: number
    _all: number
  }


  export type PizzaVariantAvgAggregateInputType = {
    price?: true
  }

  export type PizzaVariantSumAggregateInputType = {
    price?: true
  }

  export type PizzaVariantMinAggregateInputType = {
    id?: true
    pizzaId?: true
    doughTypeId?: true
    pizzaSizeId?: true
    price?: true
  }

  export type PizzaVariantMaxAggregateInputType = {
    id?: true
    pizzaId?: true
    doughTypeId?: true
    pizzaSizeId?: true
    price?: true
  }

  export type PizzaVariantCountAggregateInputType = {
    id?: true
    pizzaId?: true
    doughTypeId?: true
    pizzaSizeId?: true
    price?: true
    _all?: true
  }

  export type PizzaVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PizzaVariant to aggregate.
     */
    where?: PizzaVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaVariants to fetch.
     */
    orderBy?: PizzaVariantOrderByWithRelationInput | PizzaVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PizzaVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PizzaVariants
    **/
    _count?: true | PizzaVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PizzaVariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PizzaVariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PizzaVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PizzaVariantMaxAggregateInputType
  }

  export type GetPizzaVariantAggregateType<T extends PizzaVariantAggregateArgs> = {
        [P in keyof T & keyof AggregatePizzaVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePizzaVariant[P]>
      : GetScalarType<T[P], AggregatePizzaVariant[P]>
  }




  export type PizzaVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaVariantWhereInput
    orderBy?: PizzaVariantOrderByWithAggregationInput | PizzaVariantOrderByWithAggregationInput[]
    by: PizzaVariantScalarFieldEnum[] | PizzaVariantScalarFieldEnum
    having?: PizzaVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PizzaVariantCountAggregateInputType | true
    _avg?: PizzaVariantAvgAggregateInputType
    _sum?: PizzaVariantSumAggregateInputType
    _min?: PizzaVariantMinAggregateInputType
    _max?: PizzaVariantMaxAggregateInputType
  }

  export type PizzaVariantGroupByOutputType = {
    id: string
    pizzaId: string
    doughTypeId: string
    pizzaSizeId: string
    price: number
    _count: PizzaVariantCountAggregateOutputType | null
    _avg: PizzaVariantAvgAggregateOutputType | null
    _sum: PizzaVariantSumAggregateOutputType | null
    _min: PizzaVariantMinAggregateOutputType | null
    _max: PizzaVariantMaxAggregateOutputType | null
  }

  type GetPizzaVariantGroupByPayload<T extends PizzaVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PizzaVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PizzaVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PizzaVariantGroupByOutputType[P]>
            : GetScalarType<T[P], PizzaVariantGroupByOutputType[P]>
        }
      >
    >


  export type PizzaVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pizzaId?: boolean
    doughTypeId?: boolean
    pizzaSizeId?: boolean
    price?: boolean
    pizza?: boolean | PizzaDefaultArgs<ExtArgs>
    doughType?: boolean | DoughTypeDefaultArgs<ExtArgs>
    pizzaSize?: boolean | PizzaSizeDefaultArgs<ExtArgs>
    cartItems?: boolean | PizzaVariant$cartItemsArgs<ExtArgs>
    orderItems?: boolean | PizzaVariant$orderItemsArgs<ExtArgs>
    _count?: boolean | PizzaVariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizzaVariant"]>

  export type PizzaVariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pizzaId?: boolean
    doughTypeId?: boolean
    pizzaSizeId?: boolean
    price?: boolean
    pizza?: boolean | PizzaDefaultArgs<ExtArgs>
    doughType?: boolean | DoughTypeDefaultArgs<ExtArgs>
    pizzaSize?: boolean | PizzaSizeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizzaVariant"]>

  export type PizzaVariantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pizzaId?: boolean
    doughTypeId?: boolean
    pizzaSizeId?: boolean
    price?: boolean
    pizza?: boolean | PizzaDefaultArgs<ExtArgs>
    doughType?: boolean | DoughTypeDefaultArgs<ExtArgs>
    pizzaSize?: boolean | PizzaSizeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizzaVariant"]>

  export type PizzaVariantSelectScalar = {
    id?: boolean
    pizzaId?: boolean
    doughTypeId?: boolean
    pizzaSizeId?: boolean
    price?: boolean
  }

  export type PizzaVariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pizzaId" | "doughTypeId" | "pizzaSizeId" | "price", ExtArgs["result"]["pizzaVariant"]>
  export type PizzaVariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizza?: boolean | PizzaDefaultArgs<ExtArgs>
    doughType?: boolean | DoughTypeDefaultArgs<ExtArgs>
    pizzaSize?: boolean | PizzaSizeDefaultArgs<ExtArgs>
    cartItems?: boolean | PizzaVariant$cartItemsArgs<ExtArgs>
    orderItems?: boolean | PizzaVariant$orderItemsArgs<ExtArgs>
    _count?: boolean | PizzaVariantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PizzaVariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizza?: boolean | PizzaDefaultArgs<ExtArgs>
    doughType?: boolean | DoughTypeDefaultArgs<ExtArgs>
    pizzaSize?: boolean | PizzaSizeDefaultArgs<ExtArgs>
  }
  export type PizzaVariantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizza?: boolean | PizzaDefaultArgs<ExtArgs>
    doughType?: boolean | DoughTypeDefaultArgs<ExtArgs>
    pizzaSize?: boolean | PizzaSizeDefaultArgs<ExtArgs>
  }

  export type $PizzaVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PizzaVariant"
    objects: {
      pizza: Prisma.$PizzaPayload<ExtArgs>
      doughType: Prisma.$DoughTypePayload<ExtArgs>
      pizzaSize: Prisma.$PizzaSizePayload<ExtArgs>
      cartItems: Prisma.$CartItemPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pizzaId: string
      doughTypeId: string
      pizzaSizeId: string
      price: number
    }, ExtArgs["result"]["pizzaVariant"]>
    composites: {}
  }

  type PizzaVariantGetPayload<S extends boolean | null | undefined | PizzaVariantDefaultArgs> = $Result.GetResult<Prisma.$PizzaVariantPayload, S>

  type PizzaVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PizzaVariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PizzaVariantCountAggregateInputType | true
    }

  export interface PizzaVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PizzaVariant'], meta: { name: 'PizzaVariant' } }
    /**
     * Find zero or one PizzaVariant that matches the filter.
     * @param {PizzaVariantFindUniqueArgs} args - Arguments to find a PizzaVariant
     * @example
     * // Get one PizzaVariant
     * const pizzaVariant = await prisma.pizzaVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PizzaVariantFindUniqueArgs>(args: SelectSubset<T, PizzaVariantFindUniqueArgs<ExtArgs>>): Prisma__PizzaVariantClient<$Result.GetResult<Prisma.$PizzaVariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PizzaVariant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PizzaVariantFindUniqueOrThrowArgs} args - Arguments to find a PizzaVariant
     * @example
     * // Get one PizzaVariant
     * const pizzaVariant = await prisma.pizzaVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PizzaVariantFindUniqueOrThrowArgs>(args: SelectSubset<T, PizzaVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PizzaVariantClient<$Result.GetResult<Prisma.$PizzaVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PizzaVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaVariantFindFirstArgs} args - Arguments to find a PizzaVariant
     * @example
     * // Get one PizzaVariant
     * const pizzaVariant = await prisma.pizzaVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PizzaVariantFindFirstArgs>(args?: SelectSubset<T, PizzaVariantFindFirstArgs<ExtArgs>>): Prisma__PizzaVariantClient<$Result.GetResult<Prisma.$PizzaVariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PizzaVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaVariantFindFirstOrThrowArgs} args - Arguments to find a PizzaVariant
     * @example
     * // Get one PizzaVariant
     * const pizzaVariant = await prisma.pizzaVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PizzaVariantFindFirstOrThrowArgs>(args?: SelectSubset<T, PizzaVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__PizzaVariantClient<$Result.GetResult<Prisma.$PizzaVariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PizzaVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaVariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PizzaVariants
     * const pizzaVariants = await prisma.pizzaVariant.findMany()
     * 
     * // Get first 10 PizzaVariants
     * const pizzaVariants = await prisma.pizzaVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pizzaVariantWithIdOnly = await prisma.pizzaVariant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PizzaVariantFindManyArgs>(args?: SelectSubset<T, PizzaVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PizzaVariant.
     * @param {PizzaVariantCreateArgs} args - Arguments to create a PizzaVariant.
     * @example
     * // Create one PizzaVariant
     * const PizzaVariant = await prisma.pizzaVariant.create({
     *   data: {
     *     // ... data to create a PizzaVariant
     *   }
     * })
     * 
     */
    create<T extends PizzaVariantCreateArgs>(args: SelectSubset<T, PizzaVariantCreateArgs<ExtArgs>>): Prisma__PizzaVariantClient<$Result.GetResult<Prisma.$PizzaVariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PizzaVariants.
     * @param {PizzaVariantCreateManyArgs} args - Arguments to create many PizzaVariants.
     * @example
     * // Create many PizzaVariants
     * const pizzaVariant = await prisma.pizzaVariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PizzaVariantCreateManyArgs>(args?: SelectSubset<T, PizzaVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PizzaVariants and returns the data saved in the database.
     * @param {PizzaVariantCreateManyAndReturnArgs} args - Arguments to create many PizzaVariants.
     * @example
     * // Create many PizzaVariants
     * const pizzaVariant = await prisma.pizzaVariant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PizzaVariants and only return the `id`
     * const pizzaVariantWithIdOnly = await prisma.pizzaVariant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PizzaVariantCreateManyAndReturnArgs>(args?: SelectSubset<T, PizzaVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaVariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PizzaVariant.
     * @param {PizzaVariantDeleteArgs} args - Arguments to delete one PizzaVariant.
     * @example
     * // Delete one PizzaVariant
     * const PizzaVariant = await prisma.pizzaVariant.delete({
     *   where: {
     *     // ... filter to delete one PizzaVariant
     *   }
     * })
     * 
     */
    delete<T extends PizzaVariantDeleteArgs>(args: SelectSubset<T, PizzaVariantDeleteArgs<ExtArgs>>): Prisma__PizzaVariantClient<$Result.GetResult<Prisma.$PizzaVariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PizzaVariant.
     * @param {PizzaVariantUpdateArgs} args - Arguments to update one PizzaVariant.
     * @example
     * // Update one PizzaVariant
     * const pizzaVariant = await prisma.pizzaVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PizzaVariantUpdateArgs>(args: SelectSubset<T, PizzaVariantUpdateArgs<ExtArgs>>): Prisma__PizzaVariantClient<$Result.GetResult<Prisma.$PizzaVariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PizzaVariants.
     * @param {PizzaVariantDeleteManyArgs} args - Arguments to filter PizzaVariants to delete.
     * @example
     * // Delete a few PizzaVariants
     * const { count } = await prisma.pizzaVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PizzaVariantDeleteManyArgs>(args?: SelectSubset<T, PizzaVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PizzaVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PizzaVariants
     * const pizzaVariant = await prisma.pizzaVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PizzaVariantUpdateManyArgs>(args: SelectSubset<T, PizzaVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PizzaVariants and returns the data updated in the database.
     * @param {PizzaVariantUpdateManyAndReturnArgs} args - Arguments to update many PizzaVariants.
     * @example
     * // Update many PizzaVariants
     * const pizzaVariant = await prisma.pizzaVariant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PizzaVariants and only return the `id`
     * const pizzaVariantWithIdOnly = await prisma.pizzaVariant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PizzaVariantUpdateManyAndReturnArgs>(args: SelectSubset<T, PizzaVariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaVariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PizzaVariant.
     * @param {PizzaVariantUpsertArgs} args - Arguments to update or create a PizzaVariant.
     * @example
     * // Update or create a PizzaVariant
     * const pizzaVariant = await prisma.pizzaVariant.upsert({
     *   create: {
     *     // ... data to create a PizzaVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PizzaVariant we want to update
     *   }
     * })
     */
    upsert<T extends PizzaVariantUpsertArgs>(args: SelectSubset<T, PizzaVariantUpsertArgs<ExtArgs>>): Prisma__PizzaVariantClient<$Result.GetResult<Prisma.$PizzaVariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PizzaVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaVariantCountArgs} args - Arguments to filter PizzaVariants to count.
     * @example
     * // Count the number of PizzaVariants
     * const count = await prisma.pizzaVariant.count({
     *   where: {
     *     // ... the filter for the PizzaVariants we want to count
     *   }
     * })
    **/
    count<T extends PizzaVariantCountArgs>(
      args?: Subset<T, PizzaVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PizzaVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PizzaVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PizzaVariantAggregateArgs>(args: Subset<T, PizzaVariantAggregateArgs>): Prisma.PrismaPromise<GetPizzaVariantAggregateType<T>>

    /**
     * Group by PizzaVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaVariantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PizzaVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PizzaVariantGroupByArgs['orderBy'] }
        : { orderBy?: PizzaVariantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PizzaVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPizzaVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PizzaVariant model
   */
  readonly fields: PizzaVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PizzaVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PizzaVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pizza<T extends PizzaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PizzaDefaultArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doughType<T extends DoughTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoughTypeDefaultArgs<ExtArgs>>): Prisma__DoughTypeClient<$Result.GetResult<Prisma.$DoughTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pizzaSize<T extends PizzaSizeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PizzaSizeDefaultArgs<ExtArgs>>): Prisma__PizzaSizeClient<$Result.GetResult<Prisma.$PizzaSizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cartItems<T extends PizzaVariant$cartItemsArgs<ExtArgs> = {}>(args?: Subset<T, PizzaVariant$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItems<T extends PizzaVariant$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, PizzaVariant$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PizzaVariant model
   */
  interface PizzaVariantFieldRefs {
    readonly id: FieldRef<"PizzaVariant", 'String'>
    readonly pizzaId: FieldRef<"PizzaVariant", 'String'>
    readonly doughTypeId: FieldRef<"PizzaVariant", 'String'>
    readonly pizzaSizeId: FieldRef<"PizzaVariant", 'String'>
    readonly price: FieldRef<"PizzaVariant", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PizzaVariant findUnique
   */
  export type PizzaVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaVariant
     */
    select?: PizzaVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaVariant
     */
    omit?: PizzaVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaVariantInclude<ExtArgs> | null
    /**
     * Filter, which PizzaVariant to fetch.
     */
    where: PizzaVariantWhereUniqueInput
  }

  /**
   * PizzaVariant findUniqueOrThrow
   */
  export type PizzaVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaVariant
     */
    select?: PizzaVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaVariant
     */
    omit?: PizzaVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaVariantInclude<ExtArgs> | null
    /**
     * Filter, which PizzaVariant to fetch.
     */
    where: PizzaVariantWhereUniqueInput
  }

  /**
   * PizzaVariant findFirst
   */
  export type PizzaVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaVariant
     */
    select?: PizzaVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaVariant
     */
    omit?: PizzaVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaVariantInclude<ExtArgs> | null
    /**
     * Filter, which PizzaVariant to fetch.
     */
    where?: PizzaVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaVariants to fetch.
     */
    orderBy?: PizzaVariantOrderByWithRelationInput | PizzaVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PizzaVariants.
     */
    cursor?: PizzaVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PizzaVariants.
     */
    distinct?: PizzaVariantScalarFieldEnum | PizzaVariantScalarFieldEnum[]
  }

  /**
   * PizzaVariant findFirstOrThrow
   */
  export type PizzaVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaVariant
     */
    select?: PizzaVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaVariant
     */
    omit?: PizzaVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaVariantInclude<ExtArgs> | null
    /**
     * Filter, which PizzaVariant to fetch.
     */
    where?: PizzaVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaVariants to fetch.
     */
    orderBy?: PizzaVariantOrderByWithRelationInput | PizzaVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PizzaVariants.
     */
    cursor?: PizzaVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PizzaVariants.
     */
    distinct?: PizzaVariantScalarFieldEnum | PizzaVariantScalarFieldEnum[]
  }

  /**
   * PizzaVariant findMany
   */
  export type PizzaVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaVariant
     */
    select?: PizzaVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaVariant
     */
    omit?: PizzaVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaVariantInclude<ExtArgs> | null
    /**
     * Filter, which PizzaVariants to fetch.
     */
    where?: PizzaVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaVariants to fetch.
     */
    orderBy?: PizzaVariantOrderByWithRelationInput | PizzaVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PizzaVariants.
     */
    cursor?: PizzaVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaVariants.
     */
    skip?: number
    distinct?: PizzaVariantScalarFieldEnum | PizzaVariantScalarFieldEnum[]
  }

  /**
   * PizzaVariant create
   */
  export type PizzaVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaVariant
     */
    select?: PizzaVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaVariant
     */
    omit?: PizzaVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaVariantInclude<ExtArgs> | null
    /**
     * The data needed to create a PizzaVariant.
     */
    data: XOR<PizzaVariantCreateInput, PizzaVariantUncheckedCreateInput>
  }

  /**
   * PizzaVariant createMany
   */
  export type PizzaVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PizzaVariants.
     */
    data: PizzaVariantCreateManyInput | PizzaVariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PizzaVariant createManyAndReturn
   */
  export type PizzaVariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaVariant
     */
    select?: PizzaVariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaVariant
     */
    omit?: PizzaVariantOmit<ExtArgs> | null
    /**
     * The data used to create many PizzaVariants.
     */
    data: PizzaVariantCreateManyInput | PizzaVariantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaVariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PizzaVariant update
   */
  export type PizzaVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaVariant
     */
    select?: PizzaVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaVariant
     */
    omit?: PizzaVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaVariantInclude<ExtArgs> | null
    /**
     * The data needed to update a PizzaVariant.
     */
    data: XOR<PizzaVariantUpdateInput, PizzaVariantUncheckedUpdateInput>
    /**
     * Choose, which PizzaVariant to update.
     */
    where: PizzaVariantWhereUniqueInput
  }

  /**
   * PizzaVariant updateMany
   */
  export type PizzaVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PizzaVariants.
     */
    data: XOR<PizzaVariantUpdateManyMutationInput, PizzaVariantUncheckedUpdateManyInput>
    /**
     * Filter which PizzaVariants to update
     */
    where?: PizzaVariantWhereInput
    /**
     * Limit how many PizzaVariants to update.
     */
    limit?: number
  }

  /**
   * PizzaVariant updateManyAndReturn
   */
  export type PizzaVariantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaVariant
     */
    select?: PizzaVariantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaVariant
     */
    omit?: PizzaVariantOmit<ExtArgs> | null
    /**
     * The data used to update PizzaVariants.
     */
    data: XOR<PizzaVariantUpdateManyMutationInput, PizzaVariantUncheckedUpdateManyInput>
    /**
     * Filter which PizzaVariants to update
     */
    where?: PizzaVariantWhereInput
    /**
     * Limit how many PizzaVariants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaVariantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PizzaVariant upsert
   */
  export type PizzaVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaVariant
     */
    select?: PizzaVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaVariant
     */
    omit?: PizzaVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaVariantInclude<ExtArgs> | null
    /**
     * The filter to search for the PizzaVariant to update in case it exists.
     */
    where: PizzaVariantWhereUniqueInput
    /**
     * In case the PizzaVariant found by the `where` argument doesn't exist, create a new PizzaVariant with this data.
     */
    create: XOR<PizzaVariantCreateInput, PizzaVariantUncheckedCreateInput>
    /**
     * In case the PizzaVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PizzaVariantUpdateInput, PizzaVariantUncheckedUpdateInput>
  }

  /**
   * PizzaVariant delete
   */
  export type PizzaVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaVariant
     */
    select?: PizzaVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaVariant
     */
    omit?: PizzaVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaVariantInclude<ExtArgs> | null
    /**
     * Filter which PizzaVariant to delete.
     */
    where: PizzaVariantWhereUniqueInput
  }

  /**
   * PizzaVariant deleteMany
   */
  export type PizzaVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PizzaVariants to delete
     */
    where?: PizzaVariantWhereInput
    /**
     * Limit how many PizzaVariants to delete.
     */
    limit?: number
  }

  /**
   * PizzaVariant.cartItems
   */
  export type PizzaVariant$cartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * PizzaVariant.orderItems
   */
  export type PizzaVariant$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * PizzaVariant without action
   */
  export type PizzaVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaVariant
     */
    select?: PizzaVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaVariant
     */
    omit?: PizzaVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaVariantInclude<ExtArgs> | null
  }


  /**
   * Model DoughType
   */

  export type AggregateDoughType = {
    _count: DoughTypeCountAggregateOutputType | null
    _min: DoughTypeMinAggregateOutputType | null
    _max: DoughTypeMaxAggregateOutputType | null
  }

  export type DoughTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DoughTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DoughTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DoughTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DoughTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DoughTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DoughTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoughType to aggregate.
     */
    where?: DoughTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoughTypes to fetch.
     */
    orderBy?: DoughTypeOrderByWithRelationInput | DoughTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoughTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoughTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoughTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoughTypes
    **/
    _count?: true | DoughTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoughTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoughTypeMaxAggregateInputType
  }

  export type GetDoughTypeAggregateType<T extends DoughTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateDoughType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoughType[P]>
      : GetScalarType<T[P], AggregateDoughType[P]>
  }




  export type DoughTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoughTypeWhereInput
    orderBy?: DoughTypeOrderByWithAggregationInput | DoughTypeOrderByWithAggregationInput[]
    by: DoughTypeScalarFieldEnum[] | DoughTypeScalarFieldEnum
    having?: DoughTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoughTypeCountAggregateInputType | true
    _min?: DoughTypeMinAggregateInputType
    _max?: DoughTypeMaxAggregateInputType
  }

  export type DoughTypeGroupByOutputType = {
    id: string
    name: string
    _count: DoughTypeCountAggregateOutputType | null
    _min: DoughTypeMinAggregateOutputType | null
    _max: DoughTypeMaxAggregateOutputType | null
  }

  type GetDoughTypeGroupByPayload<T extends DoughTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoughTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoughTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoughTypeGroupByOutputType[P]>
            : GetScalarType<T[P], DoughTypeGroupByOutputType[P]>
        }
      >
    >


  export type DoughTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    variants?: boolean | DoughType$variantsArgs<ExtArgs>
    _count?: boolean | DoughTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doughType"]>

  export type DoughTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["doughType"]>

  export type DoughTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["doughType"]>

  export type DoughTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DoughTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["doughType"]>
  export type DoughTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | DoughType$variantsArgs<ExtArgs>
    _count?: boolean | DoughTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoughTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DoughTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DoughTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoughType"
    objects: {
      variants: Prisma.$PizzaVariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["doughType"]>
    composites: {}
  }

  type DoughTypeGetPayload<S extends boolean | null | undefined | DoughTypeDefaultArgs> = $Result.GetResult<Prisma.$DoughTypePayload, S>

  type DoughTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoughTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoughTypeCountAggregateInputType | true
    }

  export interface DoughTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoughType'], meta: { name: 'DoughType' } }
    /**
     * Find zero or one DoughType that matches the filter.
     * @param {DoughTypeFindUniqueArgs} args - Arguments to find a DoughType
     * @example
     * // Get one DoughType
     * const doughType = await prisma.doughType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoughTypeFindUniqueArgs>(args: SelectSubset<T, DoughTypeFindUniqueArgs<ExtArgs>>): Prisma__DoughTypeClient<$Result.GetResult<Prisma.$DoughTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoughType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoughTypeFindUniqueOrThrowArgs} args - Arguments to find a DoughType
     * @example
     * // Get one DoughType
     * const doughType = await prisma.doughType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoughTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, DoughTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoughTypeClient<$Result.GetResult<Prisma.$DoughTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoughType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoughTypeFindFirstArgs} args - Arguments to find a DoughType
     * @example
     * // Get one DoughType
     * const doughType = await prisma.doughType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoughTypeFindFirstArgs>(args?: SelectSubset<T, DoughTypeFindFirstArgs<ExtArgs>>): Prisma__DoughTypeClient<$Result.GetResult<Prisma.$DoughTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoughType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoughTypeFindFirstOrThrowArgs} args - Arguments to find a DoughType
     * @example
     * // Get one DoughType
     * const doughType = await prisma.doughType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoughTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, DoughTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoughTypeClient<$Result.GetResult<Prisma.$DoughTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoughTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoughTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoughTypes
     * const doughTypes = await prisma.doughType.findMany()
     * 
     * // Get first 10 DoughTypes
     * const doughTypes = await prisma.doughType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doughTypeWithIdOnly = await prisma.doughType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoughTypeFindManyArgs>(args?: SelectSubset<T, DoughTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoughTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoughType.
     * @param {DoughTypeCreateArgs} args - Arguments to create a DoughType.
     * @example
     * // Create one DoughType
     * const DoughType = await prisma.doughType.create({
     *   data: {
     *     // ... data to create a DoughType
     *   }
     * })
     * 
     */
    create<T extends DoughTypeCreateArgs>(args: SelectSubset<T, DoughTypeCreateArgs<ExtArgs>>): Prisma__DoughTypeClient<$Result.GetResult<Prisma.$DoughTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoughTypes.
     * @param {DoughTypeCreateManyArgs} args - Arguments to create many DoughTypes.
     * @example
     * // Create many DoughTypes
     * const doughType = await prisma.doughType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoughTypeCreateManyArgs>(args?: SelectSubset<T, DoughTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoughTypes and returns the data saved in the database.
     * @param {DoughTypeCreateManyAndReturnArgs} args - Arguments to create many DoughTypes.
     * @example
     * // Create many DoughTypes
     * const doughType = await prisma.doughType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoughTypes and only return the `id`
     * const doughTypeWithIdOnly = await prisma.doughType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoughTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, DoughTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoughTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoughType.
     * @param {DoughTypeDeleteArgs} args - Arguments to delete one DoughType.
     * @example
     * // Delete one DoughType
     * const DoughType = await prisma.doughType.delete({
     *   where: {
     *     // ... filter to delete one DoughType
     *   }
     * })
     * 
     */
    delete<T extends DoughTypeDeleteArgs>(args: SelectSubset<T, DoughTypeDeleteArgs<ExtArgs>>): Prisma__DoughTypeClient<$Result.GetResult<Prisma.$DoughTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoughType.
     * @param {DoughTypeUpdateArgs} args - Arguments to update one DoughType.
     * @example
     * // Update one DoughType
     * const doughType = await prisma.doughType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoughTypeUpdateArgs>(args: SelectSubset<T, DoughTypeUpdateArgs<ExtArgs>>): Prisma__DoughTypeClient<$Result.GetResult<Prisma.$DoughTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoughTypes.
     * @param {DoughTypeDeleteManyArgs} args - Arguments to filter DoughTypes to delete.
     * @example
     * // Delete a few DoughTypes
     * const { count } = await prisma.doughType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoughTypeDeleteManyArgs>(args?: SelectSubset<T, DoughTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoughTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoughTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoughTypes
     * const doughType = await prisma.doughType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoughTypeUpdateManyArgs>(args: SelectSubset<T, DoughTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoughTypes and returns the data updated in the database.
     * @param {DoughTypeUpdateManyAndReturnArgs} args - Arguments to update many DoughTypes.
     * @example
     * // Update many DoughTypes
     * const doughType = await prisma.doughType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoughTypes and only return the `id`
     * const doughTypeWithIdOnly = await prisma.doughType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoughTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, DoughTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoughTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoughType.
     * @param {DoughTypeUpsertArgs} args - Arguments to update or create a DoughType.
     * @example
     * // Update or create a DoughType
     * const doughType = await prisma.doughType.upsert({
     *   create: {
     *     // ... data to create a DoughType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoughType we want to update
     *   }
     * })
     */
    upsert<T extends DoughTypeUpsertArgs>(args: SelectSubset<T, DoughTypeUpsertArgs<ExtArgs>>): Prisma__DoughTypeClient<$Result.GetResult<Prisma.$DoughTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoughTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoughTypeCountArgs} args - Arguments to filter DoughTypes to count.
     * @example
     * // Count the number of DoughTypes
     * const count = await prisma.doughType.count({
     *   where: {
     *     // ... the filter for the DoughTypes we want to count
     *   }
     * })
    **/
    count<T extends DoughTypeCountArgs>(
      args?: Subset<T, DoughTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoughTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoughType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoughTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoughTypeAggregateArgs>(args: Subset<T, DoughTypeAggregateArgs>): Prisma.PrismaPromise<GetDoughTypeAggregateType<T>>

    /**
     * Group by DoughType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoughTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoughTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoughTypeGroupByArgs['orderBy'] }
        : { orderBy?: DoughTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoughTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoughTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoughType model
   */
  readonly fields: DoughTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoughType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoughTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variants<T extends DoughType$variantsArgs<ExtArgs> = {}>(args?: Subset<T, DoughType$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DoughType model
   */
  interface DoughTypeFieldRefs {
    readonly id: FieldRef<"DoughType", 'String'>
    readonly name: FieldRef<"DoughType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DoughType findUnique
   */
  export type DoughTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughType
     */
    select?: DoughTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughType
     */
    omit?: DoughTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoughTypeInclude<ExtArgs> | null
    /**
     * Filter, which DoughType to fetch.
     */
    where: DoughTypeWhereUniqueInput
  }

  /**
   * DoughType findUniqueOrThrow
   */
  export type DoughTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughType
     */
    select?: DoughTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughType
     */
    omit?: DoughTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoughTypeInclude<ExtArgs> | null
    /**
     * Filter, which DoughType to fetch.
     */
    where: DoughTypeWhereUniqueInput
  }

  /**
   * DoughType findFirst
   */
  export type DoughTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughType
     */
    select?: DoughTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughType
     */
    omit?: DoughTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoughTypeInclude<ExtArgs> | null
    /**
     * Filter, which DoughType to fetch.
     */
    where?: DoughTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoughTypes to fetch.
     */
    orderBy?: DoughTypeOrderByWithRelationInput | DoughTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoughTypes.
     */
    cursor?: DoughTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoughTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoughTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoughTypes.
     */
    distinct?: DoughTypeScalarFieldEnum | DoughTypeScalarFieldEnum[]
  }

  /**
   * DoughType findFirstOrThrow
   */
  export type DoughTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughType
     */
    select?: DoughTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughType
     */
    omit?: DoughTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoughTypeInclude<ExtArgs> | null
    /**
     * Filter, which DoughType to fetch.
     */
    where?: DoughTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoughTypes to fetch.
     */
    orderBy?: DoughTypeOrderByWithRelationInput | DoughTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoughTypes.
     */
    cursor?: DoughTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoughTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoughTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoughTypes.
     */
    distinct?: DoughTypeScalarFieldEnum | DoughTypeScalarFieldEnum[]
  }

  /**
   * DoughType findMany
   */
  export type DoughTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughType
     */
    select?: DoughTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughType
     */
    omit?: DoughTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoughTypeInclude<ExtArgs> | null
    /**
     * Filter, which DoughTypes to fetch.
     */
    where?: DoughTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoughTypes to fetch.
     */
    orderBy?: DoughTypeOrderByWithRelationInput | DoughTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoughTypes.
     */
    cursor?: DoughTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoughTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoughTypes.
     */
    skip?: number
    distinct?: DoughTypeScalarFieldEnum | DoughTypeScalarFieldEnum[]
  }

  /**
   * DoughType create
   */
  export type DoughTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughType
     */
    select?: DoughTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughType
     */
    omit?: DoughTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoughTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a DoughType.
     */
    data: XOR<DoughTypeCreateInput, DoughTypeUncheckedCreateInput>
  }

  /**
   * DoughType createMany
   */
  export type DoughTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoughTypes.
     */
    data: DoughTypeCreateManyInput | DoughTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoughType createManyAndReturn
   */
  export type DoughTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughType
     */
    select?: DoughTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoughType
     */
    omit?: DoughTypeOmit<ExtArgs> | null
    /**
     * The data used to create many DoughTypes.
     */
    data: DoughTypeCreateManyInput | DoughTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoughType update
   */
  export type DoughTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughType
     */
    select?: DoughTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughType
     */
    omit?: DoughTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoughTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a DoughType.
     */
    data: XOR<DoughTypeUpdateInput, DoughTypeUncheckedUpdateInput>
    /**
     * Choose, which DoughType to update.
     */
    where: DoughTypeWhereUniqueInput
  }

  /**
   * DoughType updateMany
   */
  export type DoughTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoughTypes.
     */
    data: XOR<DoughTypeUpdateManyMutationInput, DoughTypeUncheckedUpdateManyInput>
    /**
     * Filter which DoughTypes to update
     */
    where?: DoughTypeWhereInput
    /**
     * Limit how many DoughTypes to update.
     */
    limit?: number
  }

  /**
   * DoughType updateManyAndReturn
   */
  export type DoughTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughType
     */
    select?: DoughTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoughType
     */
    omit?: DoughTypeOmit<ExtArgs> | null
    /**
     * The data used to update DoughTypes.
     */
    data: XOR<DoughTypeUpdateManyMutationInput, DoughTypeUncheckedUpdateManyInput>
    /**
     * Filter which DoughTypes to update
     */
    where?: DoughTypeWhereInput
    /**
     * Limit how many DoughTypes to update.
     */
    limit?: number
  }

  /**
   * DoughType upsert
   */
  export type DoughTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughType
     */
    select?: DoughTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughType
     */
    omit?: DoughTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoughTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the DoughType to update in case it exists.
     */
    where: DoughTypeWhereUniqueInput
    /**
     * In case the DoughType found by the `where` argument doesn't exist, create a new DoughType with this data.
     */
    create: XOR<DoughTypeCreateInput, DoughTypeUncheckedCreateInput>
    /**
     * In case the DoughType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoughTypeUpdateInput, DoughTypeUncheckedUpdateInput>
  }

  /**
   * DoughType delete
   */
  export type DoughTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughType
     */
    select?: DoughTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughType
     */
    omit?: DoughTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoughTypeInclude<ExtArgs> | null
    /**
     * Filter which DoughType to delete.
     */
    where: DoughTypeWhereUniqueInput
  }

  /**
   * DoughType deleteMany
   */
  export type DoughTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoughTypes to delete
     */
    where?: DoughTypeWhereInput
    /**
     * Limit how many DoughTypes to delete.
     */
    limit?: number
  }

  /**
   * DoughType.variants
   */
  export type DoughType$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaVariant
     */
    select?: PizzaVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaVariant
     */
    omit?: PizzaVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaVariantInclude<ExtArgs> | null
    where?: PizzaVariantWhereInput
    orderBy?: PizzaVariantOrderByWithRelationInput | PizzaVariantOrderByWithRelationInput[]
    cursor?: PizzaVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PizzaVariantScalarFieldEnum | PizzaVariantScalarFieldEnum[]
  }

  /**
   * DoughType without action
   */
  export type DoughTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoughType
     */
    select?: DoughTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoughType
     */
    omit?: DoughTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoughTypeInclude<ExtArgs> | null
  }


  /**
   * Model PizzaSize
   */

  export type AggregatePizzaSize = {
    _count: PizzaSizeCountAggregateOutputType | null
    _avg: PizzaSizeAvgAggregateOutputType | null
    _sum: PizzaSizeSumAggregateOutputType | null
    _min: PizzaSizeMinAggregateOutputType | null
    _max: PizzaSizeMaxAggregateOutputType | null
  }

  export type PizzaSizeAvgAggregateOutputType = {
    size: number | null
  }

  export type PizzaSizeSumAggregateOutputType = {
    size: number | null
  }

  export type PizzaSizeMinAggregateOutputType = {
    id: string | null
    size: number | null
  }

  export type PizzaSizeMaxAggregateOutputType = {
    id: string | null
    size: number | null
  }

  export type PizzaSizeCountAggregateOutputType = {
    id: number
    size: number
    _all: number
  }


  export type PizzaSizeAvgAggregateInputType = {
    size?: true
  }

  export type PizzaSizeSumAggregateInputType = {
    size?: true
  }

  export type PizzaSizeMinAggregateInputType = {
    id?: true
    size?: true
  }

  export type PizzaSizeMaxAggregateInputType = {
    id?: true
    size?: true
  }

  export type PizzaSizeCountAggregateInputType = {
    id?: true
    size?: true
    _all?: true
  }

  export type PizzaSizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PizzaSize to aggregate.
     */
    where?: PizzaSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaSizes to fetch.
     */
    orderBy?: PizzaSizeOrderByWithRelationInput | PizzaSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PizzaSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PizzaSizes
    **/
    _count?: true | PizzaSizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PizzaSizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PizzaSizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PizzaSizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PizzaSizeMaxAggregateInputType
  }

  export type GetPizzaSizeAggregateType<T extends PizzaSizeAggregateArgs> = {
        [P in keyof T & keyof AggregatePizzaSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePizzaSize[P]>
      : GetScalarType<T[P], AggregatePizzaSize[P]>
  }




  export type PizzaSizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaSizeWhereInput
    orderBy?: PizzaSizeOrderByWithAggregationInput | PizzaSizeOrderByWithAggregationInput[]
    by: PizzaSizeScalarFieldEnum[] | PizzaSizeScalarFieldEnum
    having?: PizzaSizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PizzaSizeCountAggregateInputType | true
    _avg?: PizzaSizeAvgAggregateInputType
    _sum?: PizzaSizeSumAggregateInputType
    _min?: PizzaSizeMinAggregateInputType
    _max?: PizzaSizeMaxAggregateInputType
  }

  export type PizzaSizeGroupByOutputType = {
    id: string
    size: number
    _count: PizzaSizeCountAggregateOutputType | null
    _avg: PizzaSizeAvgAggregateOutputType | null
    _sum: PizzaSizeSumAggregateOutputType | null
    _min: PizzaSizeMinAggregateOutputType | null
    _max: PizzaSizeMaxAggregateOutputType | null
  }

  type GetPizzaSizeGroupByPayload<T extends PizzaSizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PizzaSizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PizzaSizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PizzaSizeGroupByOutputType[P]>
            : GetScalarType<T[P], PizzaSizeGroupByOutputType[P]>
        }
      >
    >


  export type PizzaSizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    size?: boolean
    variants?: boolean | PizzaSize$variantsArgs<ExtArgs>
    _count?: boolean | PizzaSizeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizzaSize"]>

  export type PizzaSizeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    size?: boolean
  }, ExtArgs["result"]["pizzaSize"]>

  export type PizzaSizeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    size?: boolean
  }, ExtArgs["result"]["pizzaSize"]>

  export type PizzaSizeSelectScalar = {
    id?: boolean
    size?: boolean
  }

  export type PizzaSizeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "size", ExtArgs["result"]["pizzaSize"]>
  export type PizzaSizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | PizzaSize$variantsArgs<ExtArgs>
    _count?: boolean | PizzaSizeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PizzaSizeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PizzaSizeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PizzaSizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PizzaSize"
    objects: {
      variants: Prisma.$PizzaVariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      size: number
    }, ExtArgs["result"]["pizzaSize"]>
    composites: {}
  }

  type PizzaSizeGetPayload<S extends boolean | null | undefined | PizzaSizeDefaultArgs> = $Result.GetResult<Prisma.$PizzaSizePayload, S>

  type PizzaSizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PizzaSizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PizzaSizeCountAggregateInputType | true
    }

  export interface PizzaSizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PizzaSize'], meta: { name: 'PizzaSize' } }
    /**
     * Find zero or one PizzaSize that matches the filter.
     * @param {PizzaSizeFindUniqueArgs} args - Arguments to find a PizzaSize
     * @example
     * // Get one PizzaSize
     * const pizzaSize = await prisma.pizzaSize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PizzaSizeFindUniqueArgs>(args: SelectSubset<T, PizzaSizeFindUniqueArgs<ExtArgs>>): Prisma__PizzaSizeClient<$Result.GetResult<Prisma.$PizzaSizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PizzaSize that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PizzaSizeFindUniqueOrThrowArgs} args - Arguments to find a PizzaSize
     * @example
     * // Get one PizzaSize
     * const pizzaSize = await prisma.pizzaSize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PizzaSizeFindUniqueOrThrowArgs>(args: SelectSubset<T, PizzaSizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PizzaSizeClient<$Result.GetResult<Prisma.$PizzaSizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PizzaSize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaSizeFindFirstArgs} args - Arguments to find a PizzaSize
     * @example
     * // Get one PizzaSize
     * const pizzaSize = await prisma.pizzaSize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PizzaSizeFindFirstArgs>(args?: SelectSubset<T, PizzaSizeFindFirstArgs<ExtArgs>>): Prisma__PizzaSizeClient<$Result.GetResult<Prisma.$PizzaSizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PizzaSize that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaSizeFindFirstOrThrowArgs} args - Arguments to find a PizzaSize
     * @example
     * // Get one PizzaSize
     * const pizzaSize = await prisma.pizzaSize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PizzaSizeFindFirstOrThrowArgs>(args?: SelectSubset<T, PizzaSizeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PizzaSizeClient<$Result.GetResult<Prisma.$PizzaSizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PizzaSizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaSizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PizzaSizes
     * const pizzaSizes = await prisma.pizzaSize.findMany()
     * 
     * // Get first 10 PizzaSizes
     * const pizzaSizes = await prisma.pizzaSize.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pizzaSizeWithIdOnly = await prisma.pizzaSize.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PizzaSizeFindManyArgs>(args?: SelectSubset<T, PizzaSizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PizzaSize.
     * @param {PizzaSizeCreateArgs} args - Arguments to create a PizzaSize.
     * @example
     * // Create one PizzaSize
     * const PizzaSize = await prisma.pizzaSize.create({
     *   data: {
     *     // ... data to create a PizzaSize
     *   }
     * })
     * 
     */
    create<T extends PizzaSizeCreateArgs>(args: SelectSubset<T, PizzaSizeCreateArgs<ExtArgs>>): Prisma__PizzaSizeClient<$Result.GetResult<Prisma.$PizzaSizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PizzaSizes.
     * @param {PizzaSizeCreateManyArgs} args - Arguments to create many PizzaSizes.
     * @example
     * // Create many PizzaSizes
     * const pizzaSize = await prisma.pizzaSize.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PizzaSizeCreateManyArgs>(args?: SelectSubset<T, PizzaSizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PizzaSizes and returns the data saved in the database.
     * @param {PizzaSizeCreateManyAndReturnArgs} args - Arguments to create many PizzaSizes.
     * @example
     * // Create many PizzaSizes
     * const pizzaSize = await prisma.pizzaSize.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PizzaSizes and only return the `id`
     * const pizzaSizeWithIdOnly = await prisma.pizzaSize.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PizzaSizeCreateManyAndReturnArgs>(args?: SelectSubset<T, PizzaSizeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaSizePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PizzaSize.
     * @param {PizzaSizeDeleteArgs} args - Arguments to delete one PizzaSize.
     * @example
     * // Delete one PizzaSize
     * const PizzaSize = await prisma.pizzaSize.delete({
     *   where: {
     *     // ... filter to delete one PizzaSize
     *   }
     * })
     * 
     */
    delete<T extends PizzaSizeDeleteArgs>(args: SelectSubset<T, PizzaSizeDeleteArgs<ExtArgs>>): Prisma__PizzaSizeClient<$Result.GetResult<Prisma.$PizzaSizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PizzaSize.
     * @param {PizzaSizeUpdateArgs} args - Arguments to update one PizzaSize.
     * @example
     * // Update one PizzaSize
     * const pizzaSize = await prisma.pizzaSize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PizzaSizeUpdateArgs>(args: SelectSubset<T, PizzaSizeUpdateArgs<ExtArgs>>): Prisma__PizzaSizeClient<$Result.GetResult<Prisma.$PizzaSizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PizzaSizes.
     * @param {PizzaSizeDeleteManyArgs} args - Arguments to filter PizzaSizes to delete.
     * @example
     * // Delete a few PizzaSizes
     * const { count } = await prisma.pizzaSize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PizzaSizeDeleteManyArgs>(args?: SelectSubset<T, PizzaSizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PizzaSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaSizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PizzaSizes
     * const pizzaSize = await prisma.pizzaSize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PizzaSizeUpdateManyArgs>(args: SelectSubset<T, PizzaSizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PizzaSizes and returns the data updated in the database.
     * @param {PizzaSizeUpdateManyAndReturnArgs} args - Arguments to update many PizzaSizes.
     * @example
     * // Update many PizzaSizes
     * const pizzaSize = await prisma.pizzaSize.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PizzaSizes and only return the `id`
     * const pizzaSizeWithIdOnly = await prisma.pizzaSize.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PizzaSizeUpdateManyAndReturnArgs>(args: SelectSubset<T, PizzaSizeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaSizePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PizzaSize.
     * @param {PizzaSizeUpsertArgs} args - Arguments to update or create a PizzaSize.
     * @example
     * // Update or create a PizzaSize
     * const pizzaSize = await prisma.pizzaSize.upsert({
     *   create: {
     *     // ... data to create a PizzaSize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PizzaSize we want to update
     *   }
     * })
     */
    upsert<T extends PizzaSizeUpsertArgs>(args: SelectSubset<T, PizzaSizeUpsertArgs<ExtArgs>>): Prisma__PizzaSizeClient<$Result.GetResult<Prisma.$PizzaSizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PizzaSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaSizeCountArgs} args - Arguments to filter PizzaSizes to count.
     * @example
     * // Count the number of PizzaSizes
     * const count = await prisma.pizzaSize.count({
     *   where: {
     *     // ... the filter for the PizzaSizes we want to count
     *   }
     * })
    **/
    count<T extends PizzaSizeCountArgs>(
      args?: Subset<T, PizzaSizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PizzaSizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PizzaSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaSizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PizzaSizeAggregateArgs>(args: Subset<T, PizzaSizeAggregateArgs>): Prisma.PrismaPromise<GetPizzaSizeAggregateType<T>>

    /**
     * Group by PizzaSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaSizeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PizzaSizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PizzaSizeGroupByArgs['orderBy'] }
        : { orderBy?: PizzaSizeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PizzaSizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPizzaSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PizzaSize model
   */
  readonly fields: PizzaSizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PizzaSize.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PizzaSizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variants<T extends PizzaSize$variantsArgs<ExtArgs> = {}>(args?: Subset<T, PizzaSize$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PizzaSize model
   */
  interface PizzaSizeFieldRefs {
    readonly id: FieldRef<"PizzaSize", 'String'>
    readonly size: FieldRef<"PizzaSize", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PizzaSize findUnique
   */
  export type PizzaSizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaSize
     */
    select?: PizzaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaSize
     */
    omit?: PizzaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaSizeInclude<ExtArgs> | null
    /**
     * Filter, which PizzaSize to fetch.
     */
    where: PizzaSizeWhereUniqueInput
  }

  /**
   * PizzaSize findUniqueOrThrow
   */
  export type PizzaSizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaSize
     */
    select?: PizzaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaSize
     */
    omit?: PizzaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaSizeInclude<ExtArgs> | null
    /**
     * Filter, which PizzaSize to fetch.
     */
    where: PizzaSizeWhereUniqueInput
  }

  /**
   * PizzaSize findFirst
   */
  export type PizzaSizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaSize
     */
    select?: PizzaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaSize
     */
    omit?: PizzaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaSizeInclude<ExtArgs> | null
    /**
     * Filter, which PizzaSize to fetch.
     */
    where?: PizzaSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaSizes to fetch.
     */
    orderBy?: PizzaSizeOrderByWithRelationInput | PizzaSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PizzaSizes.
     */
    cursor?: PizzaSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PizzaSizes.
     */
    distinct?: PizzaSizeScalarFieldEnum | PizzaSizeScalarFieldEnum[]
  }

  /**
   * PizzaSize findFirstOrThrow
   */
  export type PizzaSizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaSize
     */
    select?: PizzaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaSize
     */
    omit?: PizzaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaSizeInclude<ExtArgs> | null
    /**
     * Filter, which PizzaSize to fetch.
     */
    where?: PizzaSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaSizes to fetch.
     */
    orderBy?: PizzaSizeOrderByWithRelationInput | PizzaSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PizzaSizes.
     */
    cursor?: PizzaSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PizzaSizes.
     */
    distinct?: PizzaSizeScalarFieldEnum | PizzaSizeScalarFieldEnum[]
  }

  /**
   * PizzaSize findMany
   */
  export type PizzaSizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaSize
     */
    select?: PizzaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaSize
     */
    omit?: PizzaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaSizeInclude<ExtArgs> | null
    /**
     * Filter, which PizzaSizes to fetch.
     */
    where?: PizzaSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaSizes to fetch.
     */
    orderBy?: PizzaSizeOrderByWithRelationInput | PizzaSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PizzaSizes.
     */
    cursor?: PizzaSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaSizes.
     */
    skip?: number
    distinct?: PizzaSizeScalarFieldEnum | PizzaSizeScalarFieldEnum[]
  }

  /**
   * PizzaSize create
   */
  export type PizzaSizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaSize
     */
    select?: PizzaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaSize
     */
    omit?: PizzaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaSizeInclude<ExtArgs> | null
    /**
     * The data needed to create a PizzaSize.
     */
    data: XOR<PizzaSizeCreateInput, PizzaSizeUncheckedCreateInput>
  }

  /**
   * PizzaSize createMany
   */
  export type PizzaSizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PizzaSizes.
     */
    data: PizzaSizeCreateManyInput | PizzaSizeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PizzaSize createManyAndReturn
   */
  export type PizzaSizeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaSize
     */
    select?: PizzaSizeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaSize
     */
    omit?: PizzaSizeOmit<ExtArgs> | null
    /**
     * The data used to create many PizzaSizes.
     */
    data: PizzaSizeCreateManyInput | PizzaSizeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PizzaSize update
   */
  export type PizzaSizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaSize
     */
    select?: PizzaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaSize
     */
    omit?: PizzaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaSizeInclude<ExtArgs> | null
    /**
     * The data needed to update a PizzaSize.
     */
    data: XOR<PizzaSizeUpdateInput, PizzaSizeUncheckedUpdateInput>
    /**
     * Choose, which PizzaSize to update.
     */
    where: PizzaSizeWhereUniqueInput
  }

  /**
   * PizzaSize updateMany
   */
  export type PizzaSizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PizzaSizes.
     */
    data: XOR<PizzaSizeUpdateManyMutationInput, PizzaSizeUncheckedUpdateManyInput>
    /**
     * Filter which PizzaSizes to update
     */
    where?: PizzaSizeWhereInput
    /**
     * Limit how many PizzaSizes to update.
     */
    limit?: number
  }

  /**
   * PizzaSize updateManyAndReturn
   */
  export type PizzaSizeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaSize
     */
    select?: PizzaSizeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaSize
     */
    omit?: PizzaSizeOmit<ExtArgs> | null
    /**
     * The data used to update PizzaSizes.
     */
    data: XOR<PizzaSizeUpdateManyMutationInput, PizzaSizeUncheckedUpdateManyInput>
    /**
     * Filter which PizzaSizes to update
     */
    where?: PizzaSizeWhereInput
    /**
     * Limit how many PizzaSizes to update.
     */
    limit?: number
  }

  /**
   * PizzaSize upsert
   */
  export type PizzaSizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaSize
     */
    select?: PizzaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaSize
     */
    omit?: PizzaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaSizeInclude<ExtArgs> | null
    /**
     * The filter to search for the PizzaSize to update in case it exists.
     */
    where: PizzaSizeWhereUniqueInput
    /**
     * In case the PizzaSize found by the `where` argument doesn't exist, create a new PizzaSize with this data.
     */
    create: XOR<PizzaSizeCreateInput, PizzaSizeUncheckedCreateInput>
    /**
     * In case the PizzaSize was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PizzaSizeUpdateInput, PizzaSizeUncheckedUpdateInput>
  }

  /**
   * PizzaSize delete
   */
  export type PizzaSizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaSize
     */
    select?: PizzaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaSize
     */
    omit?: PizzaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaSizeInclude<ExtArgs> | null
    /**
     * Filter which PizzaSize to delete.
     */
    where: PizzaSizeWhereUniqueInput
  }

  /**
   * PizzaSize deleteMany
   */
  export type PizzaSizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PizzaSizes to delete
     */
    where?: PizzaSizeWhereInput
    /**
     * Limit how many PizzaSizes to delete.
     */
    limit?: number
  }

  /**
   * PizzaSize.variants
   */
  export type PizzaSize$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaVariant
     */
    select?: PizzaVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaVariant
     */
    omit?: PizzaVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaVariantInclude<ExtArgs> | null
    where?: PizzaVariantWhereInput
    orderBy?: PizzaVariantOrderByWithRelationInput | PizzaVariantOrderByWithRelationInput[]
    cursor?: PizzaVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PizzaVariantScalarFieldEnum | PizzaVariantScalarFieldEnum[]
  }

  /**
   * PizzaSize without action
   */
  export type PizzaSizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaSize
     */
    select?: PizzaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaSize
     */
    omit?: PizzaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaSizeInclude<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CartMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: string
    userId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CartCountAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Cart$userArgs<ExtArgs>
    items?: boolean | Cart$itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Cart$userArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Cart$userArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["cart"]>
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Cart$userArgs<ExtArgs>
    items?: boolean | Cart$itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Cart$userArgs<ExtArgs>
  }
  export type CartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Cart$userArgs<ExtArgs>
  }

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      items: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartCreateManyAndReturnArgs>(args?: SelectSubset<T, CartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartUpdateManyAndReturnArgs>(args: SelectSubset<T, CartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Cart$userArgs<ExtArgs> = {}>(args?: Subset<T, Cart$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends Cart$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Cart$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'String'>
    readonly userId: FieldRef<"Cart", 'String'>
    readonly createdAt: FieldRef<"Cart", 'DateTime'>
    readonly updatedAt: FieldRef<"Cart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart createManyAndReturn
   */
  export type CartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart updateManyAndReturn
   */
  export type CartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Cart.user
   */
  export type Cart$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Cart.items
   */
  export type Cart$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    amount: number | null
  }

  export type CartItemSumAggregateOutputType = {
    amount: number | null
  }

  export type CartItemMinAggregateOutputType = {
    id: string | null
    cartId: string | null
    pizzaVariantId: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: string | null
    cartId: string | null
    pizzaVariantId: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    cartId: number
    pizzaVariantId: number
    amount: number
    createdAt: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    amount?: true
  }

  export type CartItemSumAggregateInputType = {
    amount?: true
  }

  export type CartItemMinAggregateInputType = {
    id?: true
    cartId?: true
    pizzaVariantId?: true
    amount?: true
    createdAt?: true
  }

  export type CartItemMaxAggregateInputType = {
    id?: true
    cartId?: true
    pizzaVariantId?: true
    amount?: true
    createdAt?: true
  }

  export type CartItemCountAggregateInputType = {
    id?: true
    cartId?: true
    pizzaVariantId?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    id: string
    cartId: string
    pizzaVariantId: string
    amount: number
    createdAt: Date
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    pizzaVariantId?: boolean
    amount?: boolean
    createdAt?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    pizzaVariant?: boolean | PizzaVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    pizzaVariantId?: boolean
    amount?: boolean
    createdAt?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    pizzaVariant?: boolean | PizzaVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    pizzaVariantId?: boolean
    amount?: boolean
    createdAt?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    pizzaVariant?: boolean | PizzaVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectScalar = {
    id?: boolean
    cartId?: boolean
    pizzaVariantId?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type CartItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cartId" | "pizzaVariantId" | "amount" | "createdAt", ExtArgs["result"]["cartItem"]>
  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    pizzaVariant?: boolean | PizzaVariantDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    pizzaVariant?: boolean | PizzaVariantDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    pizzaVariant?: boolean | PizzaVariantDefaultArgs<ExtArgs>
  }

  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItem"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs>
      pizzaVariant: Prisma.$PizzaVariantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cartId: string
      pizzaVariantId: string
      amount: number
      createdAt: Date
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }

  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = $Result.GetResult<Prisma.$CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemFindUniqueArgs>(args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemFindFirstArgs>(args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartItemFindManyArgs>(args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
     */
    create<T extends CartItemCreateArgs>(args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemCreateManyArgs>(args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {CartItemCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CartItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
     */
    delete<T extends CartItemDeleteArgs>(args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemUpdateArgs>(args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemDeleteManyArgs>(args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemUpdateManyArgs>(args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {CartItemUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CartItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends CartItemUpsertArgs>(args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItem model
   */
  readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends CartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartDefaultArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pizzaVariant<T extends PizzaVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PizzaVariantDefaultArgs<ExtArgs>>): Prisma__PizzaVariantClient<$Result.GetResult<Prisma.$PizzaVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CartItem model
   */
  interface CartItemFieldRefs {
    readonly id: FieldRef<"CartItem", 'String'>
    readonly cartId: FieldRef<"CartItem", 'String'>
    readonly pizzaVariantId: FieldRef<"CartItem", 'String'>
    readonly amount: FieldRef<"CartItem", 'Int'>
    readonly createdAt: FieldRef<"CartItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }

  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItem createManyAndReturn
   */
  export type CartItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
  }

  /**
   * CartItem updateManyAndReturn
   */
  export type CartItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }

  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number
  }

  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    totalPrice: number | null
  }

  export type OrderSumAggregateOutputType = {
    totalPrice: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    totalPrice: number | null
    fullName: string | null
    email: string | null
    phone: string | null
    address: string | null
    comment: string | null
    createdAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    totalPrice: number | null
    fullName: string | null
    email: string | null
    phone: string | null
    address: string | null
    comment: string | null
    createdAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    totalPrice: number
    fullName: number
    email: number
    phone: number
    address: number
    comment: number
    createdAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    totalPrice?: true
  }

  export type OrderSumAggregateInputType = {
    totalPrice?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    totalPrice?: true
    fullName?: true
    email?: true
    phone?: true
    address?: true
    comment?: true
    createdAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    totalPrice?: true
    fullName?: true
    email?: true
    phone?: true
    address?: true
    comment?: true
    createdAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    totalPrice?: true
    fullName?: true
    email?: true
    phone?: true
    address?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string | null
    totalPrice: number
    fullName: string
    email: string
    phone: string
    address: string
    comment: string | null
    createdAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalPrice?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | Order$userArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalPrice?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | Order$userArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalPrice?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | Order$userArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    totalPrice?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "totalPrice" | "fullName" | "email" | "phone" | "address" | "comment" | "createdAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Order$userArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Order$userArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Order$userArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      items: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      totalPrice: number
      fullName: string
      email: string
      phone: string
      address: string
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Order$userArgs<ExtArgs> = {}>(args?: Subset<T, Order$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly totalPrice: FieldRef<"Order", 'Int'>
    readonly fullName: FieldRef<"Order", 'String'>
    readonly email: FieldRef<"Order", 'String'>
    readonly phone: FieldRef<"Order", 'String'>
    readonly address: FieldRef<"Order", 'String'>
    readonly comment: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.user
   */
  export type Order$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    amount: number | null
    priceAtOrder: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    amount: number | null
    priceAtOrder: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    pizzaVariantId: string | null
    amount: number | null
    priceAtOrder: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    pizzaVariantId: string | null
    amount: number | null
    priceAtOrder: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    pizzaVariantId: number
    amount: number
    priceAtOrder: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    amount?: true
    priceAtOrder?: true
  }

  export type OrderItemSumAggregateInputType = {
    amount?: true
    priceAtOrder?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    pizzaVariantId?: true
    amount?: true
    priceAtOrder?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    pizzaVariantId?: true
    amount?: true
    priceAtOrder?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    pizzaVariantId?: true
    amount?: true
    priceAtOrder?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    pizzaVariantId: string
    amount: number
    priceAtOrder: number
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    pizzaVariantId?: boolean
    amount?: boolean
    priceAtOrder?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    pizzaVariant?: boolean | PizzaVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    pizzaVariantId?: boolean
    amount?: boolean
    priceAtOrder?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    pizzaVariant?: boolean | PizzaVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    pizzaVariantId?: boolean
    amount?: boolean
    priceAtOrder?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    pizzaVariant?: boolean | PizzaVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    pizzaVariantId?: boolean
    amount?: boolean
    priceAtOrder?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "pizzaVariantId" | "amount" | "priceAtOrder", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    pizzaVariant?: boolean | PizzaVariantDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    pizzaVariant?: boolean | PizzaVariantDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    pizzaVariant?: boolean | PizzaVariantDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      pizzaVariant: Prisma.$PizzaVariantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      pizzaVariantId: string
      amount: number
      priceAtOrder: number
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pizzaVariant<T extends PizzaVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PizzaVariantDefaultArgs<ExtArgs>>): Prisma__PizzaVariantClient<$Result.GetResult<Prisma.$PizzaVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly pizzaVariantId: FieldRef<"OrderItem", 'String'>
    readonly amount: FieldRef<"OrderItem", 'Int'>
    readonly priceAtOrder: FieldRef<"OrderItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    oauthId: 'oauthId',
    oauthProvider: 'oauthProvider',
    name: 'name',
    surname: 'surname',
    email: 'email',
    phone: 'phone'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PizzaScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    overviewImageUrl: 'overviewImageUrl',
    categoryId: 'categoryId',
    rating: 'rating',
    minPrice: 'minPrice',
    slug: 'slug'
  };

  export type PizzaScalarFieldEnum = (typeof PizzaScalarFieldEnum)[keyof typeof PizzaScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    order: 'order'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const PizzaVariantScalarFieldEnum: {
    id: 'id',
    pizzaId: 'pizzaId',
    doughTypeId: 'doughTypeId',
    pizzaSizeId: 'pizzaSizeId',
    price: 'price'
  };

  export type PizzaVariantScalarFieldEnum = (typeof PizzaVariantScalarFieldEnum)[keyof typeof PizzaVariantScalarFieldEnum]


  export const DoughTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DoughTypeScalarFieldEnum = (typeof DoughTypeScalarFieldEnum)[keyof typeof DoughTypeScalarFieldEnum]


  export const PizzaSizeScalarFieldEnum: {
    id: 'id',
    size: 'size'
  };

  export type PizzaSizeScalarFieldEnum = (typeof PizzaSizeScalarFieldEnum)[keyof typeof PizzaSizeScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    id: 'id',
    cartId: 'cartId',
    pizzaVariantId: 'pizzaVariantId',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalPrice: 'totalPrice',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    address: 'address',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    pizzaVariantId: 'pizzaVariantId',
    amount: 'amount',
    priceAtOrder: 'priceAtOrder'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    oauthId?: StringFilter<"User"> | string
    oauthProvider?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null
    orders?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    oauthId?: SortOrder
    oauthProvider?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cart?: CartOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    oauthId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    oauthProvider?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null
    orders?: OrderListRelationFilter
  }, "id" | "oauthId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    oauthId?: SortOrder
    oauthProvider?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    oauthId?: StringWithAggregatesFilter<"User"> | string
    oauthProvider?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    surname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
  }

  export type PizzaWhereInput = {
    AND?: PizzaWhereInput | PizzaWhereInput[]
    OR?: PizzaWhereInput[]
    NOT?: PizzaWhereInput | PizzaWhereInput[]
    id?: StringFilter<"Pizza"> | string
    title?: StringFilter<"Pizza"> | string
    description?: StringFilter<"Pizza"> | string
    imageUrl?: StringFilter<"Pizza"> | string
    overviewImageUrl?: StringFilter<"Pizza"> | string
    categoryId?: StringFilter<"Pizza"> | string
    rating?: FloatFilter<"Pizza"> | number
    minPrice?: IntFilter<"Pizza"> | number
    slug?: StringFilter<"Pizza"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    variants?: PizzaVariantListRelationFilter
  }

  export type PizzaOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    overviewImageUrl?: SortOrder
    categoryId?: SortOrder
    rating?: SortOrder
    minPrice?: SortOrder
    slug?: SortOrder
    category?: CategoryOrderByWithRelationInput
    variants?: PizzaVariantOrderByRelationAggregateInput
  }

  export type PizzaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PizzaWhereInput | PizzaWhereInput[]
    OR?: PizzaWhereInput[]
    NOT?: PizzaWhereInput | PizzaWhereInput[]
    title?: StringFilter<"Pizza"> | string
    description?: StringFilter<"Pizza"> | string
    imageUrl?: StringFilter<"Pizza"> | string
    overviewImageUrl?: StringFilter<"Pizza"> | string
    categoryId?: StringFilter<"Pizza"> | string
    rating?: FloatFilter<"Pizza"> | number
    minPrice?: IntFilter<"Pizza"> | number
    slug?: StringFilter<"Pizza"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    variants?: PizzaVariantListRelationFilter
  }, "id">

  export type PizzaOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    overviewImageUrl?: SortOrder
    categoryId?: SortOrder
    rating?: SortOrder
    minPrice?: SortOrder
    slug?: SortOrder
    _count?: PizzaCountOrderByAggregateInput
    _avg?: PizzaAvgOrderByAggregateInput
    _max?: PizzaMaxOrderByAggregateInput
    _min?: PizzaMinOrderByAggregateInput
    _sum?: PizzaSumOrderByAggregateInput
  }

  export type PizzaScalarWhereWithAggregatesInput = {
    AND?: PizzaScalarWhereWithAggregatesInput | PizzaScalarWhereWithAggregatesInput[]
    OR?: PizzaScalarWhereWithAggregatesInput[]
    NOT?: PizzaScalarWhereWithAggregatesInput | PizzaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pizza"> | string
    title?: StringWithAggregatesFilter<"Pizza"> | string
    description?: StringWithAggregatesFilter<"Pizza"> | string
    imageUrl?: StringWithAggregatesFilter<"Pizza"> | string
    overviewImageUrl?: StringWithAggregatesFilter<"Pizza"> | string
    categoryId?: StringWithAggregatesFilter<"Pizza"> | string
    rating?: FloatWithAggregatesFilter<"Pizza"> | number
    minPrice?: IntWithAggregatesFilter<"Pizza"> | number
    slug?: StringWithAggregatesFilter<"Pizza"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    order?: IntFilter<"Category"> | number
    pizzas?: PizzaListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    pizzas?: PizzaOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    order?: IntFilter<"Category"> | number
    pizzas?: PizzaListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    order?: IntWithAggregatesFilter<"Category"> | number
  }

  export type PizzaVariantWhereInput = {
    AND?: PizzaVariantWhereInput | PizzaVariantWhereInput[]
    OR?: PizzaVariantWhereInput[]
    NOT?: PizzaVariantWhereInput | PizzaVariantWhereInput[]
    id?: StringFilter<"PizzaVariant"> | string
    pizzaId?: StringFilter<"PizzaVariant"> | string
    doughTypeId?: StringFilter<"PizzaVariant"> | string
    pizzaSizeId?: StringFilter<"PizzaVariant"> | string
    price?: IntFilter<"PizzaVariant"> | number
    pizza?: XOR<PizzaScalarRelationFilter, PizzaWhereInput>
    doughType?: XOR<DoughTypeScalarRelationFilter, DoughTypeWhereInput>
    pizzaSize?: XOR<PizzaSizeScalarRelationFilter, PizzaSizeWhereInput>
    cartItems?: CartItemListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }

  export type PizzaVariantOrderByWithRelationInput = {
    id?: SortOrder
    pizzaId?: SortOrder
    doughTypeId?: SortOrder
    pizzaSizeId?: SortOrder
    price?: SortOrder
    pizza?: PizzaOrderByWithRelationInput
    doughType?: DoughTypeOrderByWithRelationInput
    pizzaSize?: PizzaSizeOrderByWithRelationInput
    cartItems?: CartItemOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type PizzaVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PizzaVariantWhereInput | PizzaVariantWhereInput[]
    OR?: PizzaVariantWhereInput[]
    NOT?: PizzaVariantWhereInput | PizzaVariantWhereInput[]
    pizzaId?: StringFilter<"PizzaVariant"> | string
    doughTypeId?: StringFilter<"PizzaVariant"> | string
    pizzaSizeId?: StringFilter<"PizzaVariant"> | string
    price?: IntFilter<"PizzaVariant"> | number
    pizza?: XOR<PizzaScalarRelationFilter, PizzaWhereInput>
    doughType?: XOR<DoughTypeScalarRelationFilter, DoughTypeWhereInput>
    pizzaSize?: XOR<PizzaSizeScalarRelationFilter, PizzaSizeWhereInput>
    cartItems?: CartItemListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }, "id">

  export type PizzaVariantOrderByWithAggregationInput = {
    id?: SortOrder
    pizzaId?: SortOrder
    doughTypeId?: SortOrder
    pizzaSizeId?: SortOrder
    price?: SortOrder
    _count?: PizzaVariantCountOrderByAggregateInput
    _avg?: PizzaVariantAvgOrderByAggregateInput
    _max?: PizzaVariantMaxOrderByAggregateInput
    _min?: PizzaVariantMinOrderByAggregateInput
    _sum?: PizzaVariantSumOrderByAggregateInput
  }

  export type PizzaVariantScalarWhereWithAggregatesInput = {
    AND?: PizzaVariantScalarWhereWithAggregatesInput | PizzaVariantScalarWhereWithAggregatesInput[]
    OR?: PizzaVariantScalarWhereWithAggregatesInput[]
    NOT?: PizzaVariantScalarWhereWithAggregatesInput | PizzaVariantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PizzaVariant"> | string
    pizzaId?: StringWithAggregatesFilter<"PizzaVariant"> | string
    doughTypeId?: StringWithAggregatesFilter<"PizzaVariant"> | string
    pizzaSizeId?: StringWithAggregatesFilter<"PizzaVariant"> | string
    price?: IntWithAggregatesFilter<"PizzaVariant"> | number
  }

  export type DoughTypeWhereInput = {
    AND?: DoughTypeWhereInput | DoughTypeWhereInput[]
    OR?: DoughTypeWhereInput[]
    NOT?: DoughTypeWhereInput | DoughTypeWhereInput[]
    id?: StringFilter<"DoughType"> | string
    name?: StringFilter<"DoughType"> | string
    variants?: PizzaVariantListRelationFilter
  }

  export type DoughTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    variants?: PizzaVariantOrderByRelationAggregateInput
  }

  export type DoughTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DoughTypeWhereInput | DoughTypeWhereInput[]
    OR?: DoughTypeWhereInput[]
    NOT?: DoughTypeWhereInput | DoughTypeWhereInput[]
    name?: StringFilter<"DoughType"> | string
    variants?: PizzaVariantListRelationFilter
  }, "id">

  export type DoughTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DoughTypeCountOrderByAggregateInput
    _max?: DoughTypeMaxOrderByAggregateInput
    _min?: DoughTypeMinOrderByAggregateInput
  }

  export type DoughTypeScalarWhereWithAggregatesInput = {
    AND?: DoughTypeScalarWhereWithAggregatesInput | DoughTypeScalarWhereWithAggregatesInput[]
    OR?: DoughTypeScalarWhereWithAggregatesInput[]
    NOT?: DoughTypeScalarWhereWithAggregatesInput | DoughTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoughType"> | string
    name?: StringWithAggregatesFilter<"DoughType"> | string
  }

  export type PizzaSizeWhereInput = {
    AND?: PizzaSizeWhereInput | PizzaSizeWhereInput[]
    OR?: PizzaSizeWhereInput[]
    NOT?: PizzaSizeWhereInput | PizzaSizeWhereInput[]
    id?: StringFilter<"PizzaSize"> | string
    size?: IntFilter<"PizzaSize"> | number
    variants?: PizzaVariantListRelationFilter
  }

  export type PizzaSizeOrderByWithRelationInput = {
    id?: SortOrder
    size?: SortOrder
    variants?: PizzaVariantOrderByRelationAggregateInput
  }

  export type PizzaSizeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PizzaSizeWhereInput | PizzaSizeWhereInput[]
    OR?: PizzaSizeWhereInput[]
    NOT?: PizzaSizeWhereInput | PizzaSizeWhereInput[]
    size?: IntFilter<"PizzaSize"> | number
    variants?: PizzaVariantListRelationFilter
  }, "id">

  export type PizzaSizeOrderByWithAggregationInput = {
    id?: SortOrder
    size?: SortOrder
    _count?: PizzaSizeCountOrderByAggregateInput
    _avg?: PizzaSizeAvgOrderByAggregateInput
    _max?: PizzaSizeMaxOrderByAggregateInput
    _min?: PizzaSizeMinOrderByAggregateInput
    _sum?: PizzaSizeSumOrderByAggregateInput
  }

  export type PizzaSizeScalarWhereWithAggregatesInput = {
    AND?: PizzaSizeScalarWhereWithAggregatesInput | PizzaSizeScalarWhereWithAggregatesInput[]
    OR?: PizzaSizeScalarWhereWithAggregatesInput[]
    NOT?: PizzaSizeScalarWhereWithAggregatesInput | PizzaSizeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PizzaSize"> | string
    size?: IntWithAggregatesFilter<"PizzaSize"> | number
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: StringFilter<"Cart"> | string
    userId?: StringNullableFilter<"Cart"> | string | null
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    items?: CartItemListRelationFilter
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: CartItemOrderByRelationAggregateInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    items?: CartItemListRelationFilter
  }, "id" | "userId">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cart"> | string
    userId?: StringNullableWithAggregatesFilter<"Cart"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
  }

  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    id?: StringFilter<"CartItem"> | string
    cartId?: StringFilter<"CartItem"> | string
    pizzaVariantId?: StringFilter<"CartItem"> | string
    amount?: IntFilter<"CartItem"> | number
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    pizzaVariant?: XOR<PizzaVariantScalarRelationFilter, PizzaVariantWhereInput>
  }

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder
    cartId?: SortOrder
    pizzaVariantId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    cart?: CartOrderByWithRelationInput
    pizzaVariant?: PizzaVariantOrderByWithRelationInput
  }

  export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    cartId?: StringFilter<"CartItem"> | string
    pizzaVariantId?: StringFilter<"CartItem"> | string
    amount?: IntFilter<"CartItem"> | number
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    pizzaVariant?: XOR<PizzaVariantScalarRelationFilter, PizzaVariantWhereInput>
  }, "id">

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder
    cartId?: SortOrder
    pizzaVariantId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _avg?: CartItemAvgOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
    _sum?: CartItemSumOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    OR?: CartItemScalarWhereWithAggregatesInput[]
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CartItem"> | string
    cartId?: StringWithAggregatesFilter<"CartItem"> | string
    pizzaVariantId?: StringWithAggregatesFilter<"CartItem"> | string
    amount?: IntWithAggregatesFilter<"CartItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringNullableFilter<"Order"> | string | null
    totalPrice?: IntFilter<"Order"> | number
    fullName?: StringFilter<"Order"> | string
    email?: StringFilter<"Order"> | string
    phone?: StringFilter<"Order"> | string
    address?: StringFilter<"Order"> | string
    comment?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    items?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    totalPrice?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringNullableFilter<"Order"> | string | null
    totalPrice?: IntFilter<"Order"> | number
    fullName?: StringFilter<"Order"> | string
    email?: StringFilter<"Order"> | string
    phone?: StringFilter<"Order"> | string
    address?: StringFilter<"Order"> | string
    comment?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    items?: OrderItemListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    totalPrice?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    totalPrice?: IntWithAggregatesFilter<"Order"> | number
    fullName?: StringWithAggregatesFilter<"Order"> | string
    email?: StringWithAggregatesFilter<"Order"> | string
    phone?: StringWithAggregatesFilter<"Order"> | string
    address?: StringWithAggregatesFilter<"Order"> | string
    comment?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    pizzaVariantId?: StringFilter<"OrderItem"> | string
    amount?: IntFilter<"OrderItem"> | number
    priceAtOrder?: IntFilter<"OrderItem"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    pizzaVariant?: XOR<PizzaVariantScalarRelationFilter, PizzaVariantWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    pizzaVariantId?: SortOrder
    amount?: SortOrder
    priceAtOrder?: SortOrder
    order?: OrderOrderByWithRelationInput
    pizzaVariant?: PizzaVariantOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    pizzaVariantId?: StringFilter<"OrderItem"> | string
    amount?: IntFilter<"OrderItem"> | number
    priceAtOrder?: IntFilter<"OrderItem"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    pizzaVariant?: XOR<PizzaVariantScalarRelationFilter, PizzaVariantWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    pizzaVariantId?: SortOrder
    amount?: SortOrder
    priceAtOrder?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    pizzaVariantId?: StringWithAggregatesFilter<"OrderItem"> | string
    amount?: IntWithAggregatesFilter<"OrderItem"> | number
    priceAtOrder?: IntWithAggregatesFilter<"OrderItem"> | number
  }

  export type UserCreateInput = {
    id?: string
    oauthId: string
    oauthProvider: string
    name: string
    surname: string
    email: string
    phone: string
    cart?: CartCreateNestedOneWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    oauthId: string
    oauthProvider: string
    name: string
    surname: string
    email: string
    phone: string
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauthId?: StringFieldUpdateOperationsInput | string
    oauthProvider?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cart?: CartUpdateOneWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauthId?: StringFieldUpdateOperationsInput | string
    oauthProvider?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    oauthId: string
    oauthProvider: string
    name: string
    surname: string
    email: string
    phone: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauthId?: StringFieldUpdateOperationsInput | string
    oauthProvider?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauthId?: StringFieldUpdateOperationsInput | string
    oauthProvider?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type PizzaCreateInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    overviewImageUrl: string
    rating: number
    minPrice: number
    slug: string
    category: CategoryCreateNestedOneWithoutPizzasInput
    variants?: PizzaVariantCreateNestedManyWithoutPizzaInput
  }

  export type PizzaUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    overviewImageUrl: string
    categoryId: string
    rating: number
    minPrice: number
    slug: string
    variants?: PizzaVariantUncheckedCreateNestedManyWithoutPizzaInput
  }

  export type PizzaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    overviewImageUrl?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    minPrice?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutPizzasNestedInput
    variants?: PizzaVariantUpdateManyWithoutPizzaNestedInput
  }

  export type PizzaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    overviewImageUrl?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    minPrice?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    variants?: PizzaVariantUncheckedUpdateManyWithoutPizzaNestedInput
  }

  export type PizzaCreateManyInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    overviewImageUrl: string
    categoryId: string
    rating: number
    minPrice: number
    slug: string
  }

  export type PizzaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    overviewImageUrl?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    minPrice?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type PizzaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    overviewImageUrl?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    minPrice?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    order: number
    pizzas?: PizzaCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    order: number
    pizzas?: PizzaUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    pizzas?: PizzaUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    pizzas?: PizzaUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    order: number
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PizzaVariantCreateInput = {
    id?: string
    price: number
    pizza: PizzaCreateNestedOneWithoutVariantsInput
    doughType: DoughTypeCreateNestedOneWithoutVariantsInput
    pizzaSize: PizzaSizeCreateNestedOneWithoutVariantsInput
    cartItems?: CartItemCreateNestedManyWithoutPizzaVariantInput
    orderItems?: OrderItemCreateNestedManyWithoutPizzaVariantInput
  }

  export type PizzaVariantUncheckedCreateInput = {
    id?: string
    pizzaId: string
    doughTypeId: string
    pizzaSizeId: string
    price: number
    cartItems?: CartItemUncheckedCreateNestedManyWithoutPizzaVariantInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutPizzaVariantInput
  }

  export type PizzaVariantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    pizza?: PizzaUpdateOneRequiredWithoutVariantsNestedInput
    doughType?: DoughTypeUpdateOneRequiredWithoutVariantsNestedInput
    pizzaSize?: PizzaSizeUpdateOneRequiredWithoutVariantsNestedInput
    cartItems?: CartItemUpdateManyWithoutPizzaVariantNestedInput
    orderItems?: OrderItemUpdateManyWithoutPizzaVariantNestedInput
  }

  export type PizzaVariantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pizzaId?: StringFieldUpdateOperationsInput | string
    doughTypeId?: StringFieldUpdateOperationsInput | string
    pizzaSizeId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    cartItems?: CartItemUncheckedUpdateManyWithoutPizzaVariantNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutPizzaVariantNestedInput
  }

  export type PizzaVariantCreateManyInput = {
    id?: string
    pizzaId: string
    doughTypeId: string
    pizzaSizeId: string
    price: number
  }

  export type PizzaVariantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type PizzaVariantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pizzaId?: StringFieldUpdateOperationsInput | string
    doughTypeId?: StringFieldUpdateOperationsInput | string
    pizzaSizeId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type DoughTypeCreateInput = {
    id?: string
    name: string
    variants?: PizzaVariantCreateNestedManyWithoutDoughTypeInput
  }

  export type DoughTypeUncheckedCreateInput = {
    id?: string
    name: string
    variants?: PizzaVariantUncheckedCreateNestedManyWithoutDoughTypeInput
  }

  export type DoughTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variants?: PizzaVariantUpdateManyWithoutDoughTypeNestedInput
  }

  export type DoughTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    variants?: PizzaVariantUncheckedUpdateManyWithoutDoughTypeNestedInput
  }

  export type DoughTypeCreateManyInput = {
    id?: string
    name: string
  }

  export type DoughTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DoughTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PizzaSizeCreateInput = {
    id?: string
    size: number
    variants?: PizzaVariantCreateNestedManyWithoutPizzaSizeInput
  }

  export type PizzaSizeUncheckedCreateInput = {
    id?: string
    size: number
    variants?: PizzaVariantUncheckedCreateNestedManyWithoutPizzaSizeInput
  }

  export type PizzaSizeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    variants?: PizzaVariantUpdateManyWithoutPizzaSizeNestedInput
  }

  export type PizzaSizeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    variants?: PizzaVariantUncheckedUpdateManyWithoutPizzaSizeNestedInput
  }

  export type PizzaSizeCreateManyInput = {
    id?: string
    size: number
  }

  export type PizzaSizeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
  }

  export type PizzaSizeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
  }

  export type CartCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutCartInput
    items?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutCartNestedInput
    items?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    cart: CartCreateNestedOneWithoutItemsInput
    pizzaVariant: PizzaVariantCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateInput = {
    id?: string
    cartId: string
    pizzaVariantId: string
    amount: number
    createdAt?: Date | string
  }

  export type CartItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput
    pizzaVariant?: PizzaVariantUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    pizzaVariantId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateManyInput = {
    id?: string
    cartId: string
    pizzaVariantId: string
    amount: number
    createdAt?: Date | string
  }

  export type CartItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    pizzaVariantId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    totalPrice: number
    fullName: string
    email: string
    phone: string
    address: string
    comment?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    userId?: string | null
    totalPrice: number
    fullName: string
    email: string
    phone: string
    address: string
    comment?: string | null
    createdAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    userId?: string | null
    totalPrice: number
    fullName: string
    email: string
    phone: string
    address: string
    comment?: string | null
    createdAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    amount: number
    priceAtOrder: number
    order: OrderCreateNestedOneWithoutItemsInput
    pizzaVariant: PizzaVariantCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    pizzaVariantId: string
    amount: number
    priceAtOrder: number
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    priceAtOrder?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    pizzaVariant?: PizzaVariantUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    pizzaVariantId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    priceAtOrder?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    pizzaVariantId: string
    amount: number
    priceAtOrder: number
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    priceAtOrder?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    pizzaVariantId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    priceAtOrder?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CartNullableScalarRelationFilter = {
    is?: CartWhereInput | null
    isNot?: CartWhereInput | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    oauthId?: SortOrder
    oauthProvider?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    oauthId?: SortOrder
    oauthProvider?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    oauthId?: SortOrder
    oauthProvider?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type PizzaVariantListRelationFilter = {
    every?: PizzaVariantWhereInput
    some?: PizzaVariantWhereInput
    none?: PizzaVariantWhereInput
  }

  export type PizzaVariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PizzaCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    overviewImageUrl?: SortOrder
    categoryId?: SortOrder
    rating?: SortOrder
    minPrice?: SortOrder
    slug?: SortOrder
  }

  export type PizzaAvgOrderByAggregateInput = {
    rating?: SortOrder
    minPrice?: SortOrder
  }

  export type PizzaMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    overviewImageUrl?: SortOrder
    categoryId?: SortOrder
    rating?: SortOrder
    minPrice?: SortOrder
    slug?: SortOrder
  }

  export type PizzaMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    overviewImageUrl?: SortOrder
    categoryId?: SortOrder
    rating?: SortOrder
    minPrice?: SortOrder
    slug?: SortOrder
  }

  export type PizzaSumOrderByAggregateInput = {
    rating?: SortOrder
    minPrice?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PizzaListRelationFilter = {
    every?: PizzaWhereInput
    some?: PizzaWhereInput
    none?: PizzaWhereInput
  }

  export type PizzaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type PizzaScalarRelationFilter = {
    is?: PizzaWhereInput
    isNot?: PizzaWhereInput
  }

  export type DoughTypeScalarRelationFilter = {
    is?: DoughTypeWhereInput
    isNot?: DoughTypeWhereInput
  }

  export type PizzaSizeScalarRelationFilter = {
    is?: PizzaSizeWhereInput
    isNot?: PizzaSizeWhereInput
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PizzaVariantCountOrderByAggregateInput = {
    id?: SortOrder
    pizzaId?: SortOrder
    doughTypeId?: SortOrder
    pizzaSizeId?: SortOrder
    price?: SortOrder
  }

  export type PizzaVariantAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PizzaVariantMaxOrderByAggregateInput = {
    id?: SortOrder
    pizzaId?: SortOrder
    doughTypeId?: SortOrder
    pizzaSizeId?: SortOrder
    price?: SortOrder
  }

  export type PizzaVariantMinOrderByAggregateInput = {
    id?: SortOrder
    pizzaId?: SortOrder
    doughTypeId?: SortOrder
    pizzaSizeId?: SortOrder
    price?: SortOrder
  }

  export type PizzaVariantSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DoughTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DoughTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DoughTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PizzaSizeCountOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type PizzaSizeAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type PizzaSizeMaxOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type PizzaSizeMinOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type PizzaSizeSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CartScalarRelationFilter = {
    is?: CartWhereInput
    isNot?: CartWhereInput
  }

  export type PizzaVariantScalarRelationFilter = {
    is?: PizzaVariantWhereInput
    isNot?: PizzaVariantWhereInput
  }

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    pizzaVariantId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type CartItemAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    pizzaVariantId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    pizzaVariantId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type CartItemSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    totalPrice?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    totalPrice?: SortOrder
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    pizzaVariantId?: SortOrder
    amount?: SortOrder
    priceAtOrder?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    amount?: SortOrder
    priceAtOrder?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    pizzaVariantId?: SortOrder
    amount?: SortOrder
    priceAtOrder?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    pizzaVariantId?: SortOrder
    amount?: SortOrder
    priceAtOrder?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    amount?: SortOrder
    priceAtOrder?: SortOrder
  }

  export type CartCreateNestedOneWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    connect?: CartWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    connect?: CartWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CartUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    upsert?: CartUpsertWithoutUserInput
    disconnect?: CartWhereInput | boolean
    delete?: CartWhereInput | boolean
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutUserInput, CartUpdateWithoutUserInput>, CartUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CartUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    upsert?: CartUpsertWithoutUserInput
    disconnect?: CartWhereInput | boolean
    delete?: CartWhereInput | boolean
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutUserInput, CartUpdateWithoutUserInput>, CartUncheckedUpdateWithoutUserInput>
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutPizzasInput = {
    create?: XOR<CategoryCreateWithoutPizzasInput, CategoryUncheckedCreateWithoutPizzasInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPizzasInput
    connect?: CategoryWhereUniqueInput
  }

  export type PizzaVariantCreateNestedManyWithoutPizzaInput = {
    create?: XOR<PizzaVariantCreateWithoutPizzaInput, PizzaVariantUncheckedCreateWithoutPizzaInput> | PizzaVariantCreateWithoutPizzaInput[] | PizzaVariantUncheckedCreateWithoutPizzaInput[]
    connectOrCreate?: PizzaVariantCreateOrConnectWithoutPizzaInput | PizzaVariantCreateOrConnectWithoutPizzaInput[]
    createMany?: PizzaVariantCreateManyPizzaInputEnvelope
    connect?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
  }

  export type PizzaVariantUncheckedCreateNestedManyWithoutPizzaInput = {
    create?: XOR<PizzaVariantCreateWithoutPizzaInput, PizzaVariantUncheckedCreateWithoutPizzaInput> | PizzaVariantCreateWithoutPizzaInput[] | PizzaVariantUncheckedCreateWithoutPizzaInput[]
    connectOrCreate?: PizzaVariantCreateOrConnectWithoutPizzaInput | PizzaVariantCreateOrConnectWithoutPizzaInput[]
    createMany?: PizzaVariantCreateManyPizzaInputEnvelope
    connect?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneRequiredWithoutPizzasNestedInput = {
    create?: XOR<CategoryCreateWithoutPizzasInput, CategoryUncheckedCreateWithoutPizzasInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPizzasInput
    upsert?: CategoryUpsertWithoutPizzasInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPizzasInput, CategoryUpdateWithoutPizzasInput>, CategoryUncheckedUpdateWithoutPizzasInput>
  }

  export type PizzaVariantUpdateManyWithoutPizzaNestedInput = {
    create?: XOR<PizzaVariantCreateWithoutPizzaInput, PizzaVariantUncheckedCreateWithoutPizzaInput> | PizzaVariantCreateWithoutPizzaInput[] | PizzaVariantUncheckedCreateWithoutPizzaInput[]
    connectOrCreate?: PizzaVariantCreateOrConnectWithoutPizzaInput | PizzaVariantCreateOrConnectWithoutPizzaInput[]
    upsert?: PizzaVariantUpsertWithWhereUniqueWithoutPizzaInput | PizzaVariantUpsertWithWhereUniqueWithoutPizzaInput[]
    createMany?: PizzaVariantCreateManyPizzaInputEnvelope
    set?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    disconnect?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    delete?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    connect?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    update?: PizzaVariantUpdateWithWhereUniqueWithoutPizzaInput | PizzaVariantUpdateWithWhereUniqueWithoutPizzaInput[]
    updateMany?: PizzaVariantUpdateManyWithWhereWithoutPizzaInput | PizzaVariantUpdateManyWithWhereWithoutPizzaInput[]
    deleteMany?: PizzaVariantScalarWhereInput | PizzaVariantScalarWhereInput[]
  }

  export type PizzaVariantUncheckedUpdateManyWithoutPizzaNestedInput = {
    create?: XOR<PizzaVariantCreateWithoutPizzaInput, PizzaVariantUncheckedCreateWithoutPizzaInput> | PizzaVariantCreateWithoutPizzaInput[] | PizzaVariantUncheckedCreateWithoutPizzaInput[]
    connectOrCreate?: PizzaVariantCreateOrConnectWithoutPizzaInput | PizzaVariantCreateOrConnectWithoutPizzaInput[]
    upsert?: PizzaVariantUpsertWithWhereUniqueWithoutPizzaInput | PizzaVariantUpsertWithWhereUniqueWithoutPizzaInput[]
    createMany?: PizzaVariantCreateManyPizzaInputEnvelope
    set?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    disconnect?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    delete?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    connect?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    update?: PizzaVariantUpdateWithWhereUniqueWithoutPizzaInput | PizzaVariantUpdateWithWhereUniqueWithoutPizzaInput[]
    updateMany?: PizzaVariantUpdateManyWithWhereWithoutPizzaInput | PizzaVariantUpdateManyWithWhereWithoutPizzaInput[]
    deleteMany?: PizzaVariantScalarWhereInput | PizzaVariantScalarWhereInput[]
  }

  export type PizzaCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PizzaCreateWithoutCategoryInput, PizzaUncheckedCreateWithoutCategoryInput> | PizzaCreateWithoutCategoryInput[] | PizzaUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutCategoryInput | PizzaCreateOrConnectWithoutCategoryInput[]
    createMany?: PizzaCreateManyCategoryInputEnvelope
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
  }

  export type PizzaUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PizzaCreateWithoutCategoryInput, PizzaUncheckedCreateWithoutCategoryInput> | PizzaCreateWithoutCategoryInput[] | PizzaUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutCategoryInput | PizzaCreateOrConnectWithoutCategoryInput[]
    createMany?: PizzaCreateManyCategoryInputEnvelope
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
  }

  export type PizzaUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PizzaCreateWithoutCategoryInput, PizzaUncheckedCreateWithoutCategoryInput> | PizzaCreateWithoutCategoryInput[] | PizzaUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutCategoryInput | PizzaCreateOrConnectWithoutCategoryInput[]
    upsert?: PizzaUpsertWithWhereUniqueWithoutCategoryInput | PizzaUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PizzaCreateManyCategoryInputEnvelope
    set?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    disconnect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    delete?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    update?: PizzaUpdateWithWhereUniqueWithoutCategoryInput | PizzaUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PizzaUpdateManyWithWhereWithoutCategoryInput | PizzaUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PizzaScalarWhereInput | PizzaScalarWhereInput[]
  }

  export type PizzaUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PizzaCreateWithoutCategoryInput, PizzaUncheckedCreateWithoutCategoryInput> | PizzaCreateWithoutCategoryInput[] | PizzaUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutCategoryInput | PizzaCreateOrConnectWithoutCategoryInput[]
    upsert?: PizzaUpsertWithWhereUniqueWithoutCategoryInput | PizzaUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PizzaCreateManyCategoryInputEnvelope
    set?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    disconnect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    delete?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    update?: PizzaUpdateWithWhereUniqueWithoutCategoryInput | PizzaUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PizzaUpdateManyWithWhereWithoutCategoryInput | PizzaUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PizzaScalarWhereInput | PizzaScalarWhereInput[]
  }

  export type PizzaCreateNestedOneWithoutVariantsInput = {
    create?: XOR<PizzaCreateWithoutVariantsInput, PizzaUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: PizzaCreateOrConnectWithoutVariantsInput
    connect?: PizzaWhereUniqueInput
  }

  export type DoughTypeCreateNestedOneWithoutVariantsInput = {
    create?: XOR<DoughTypeCreateWithoutVariantsInput, DoughTypeUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: DoughTypeCreateOrConnectWithoutVariantsInput
    connect?: DoughTypeWhereUniqueInput
  }

  export type PizzaSizeCreateNestedOneWithoutVariantsInput = {
    create?: XOR<PizzaSizeCreateWithoutVariantsInput, PizzaSizeUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: PizzaSizeCreateOrConnectWithoutVariantsInput
    connect?: PizzaSizeWhereUniqueInput
  }

  export type CartItemCreateNestedManyWithoutPizzaVariantInput = {
    create?: XOR<CartItemCreateWithoutPizzaVariantInput, CartItemUncheckedCreateWithoutPizzaVariantInput> | CartItemCreateWithoutPizzaVariantInput[] | CartItemUncheckedCreateWithoutPizzaVariantInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutPizzaVariantInput | CartItemCreateOrConnectWithoutPizzaVariantInput[]
    createMany?: CartItemCreateManyPizzaVariantInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutPizzaVariantInput = {
    create?: XOR<OrderItemCreateWithoutPizzaVariantInput, OrderItemUncheckedCreateWithoutPizzaVariantInput> | OrderItemCreateWithoutPizzaVariantInput[] | OrderItemUncheckedCreateWithoutPizzaVariantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutPizzaVariantInput | OrderItemCreateOrConnectWithoutPizzaVariantInput[]
    createMany?: OrderItemCreateManyPizzaVariantInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutPizzaVariantInput = {
    create?: XOR<CartItemCreateWithoutPizzaVariantInput, CartItemUncheckedCreateWithoutPizzaVariantInput> | CartItemCreateWithoutPizzaVariantInput[] | CartItemUncheckedCreateWithoutPizzaVariantInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutPizzaVariantInput | CartItemCreateOrConnectWithoutPizzaVariantInput[]
    createMany?: CartItemCreateManyPizzaVariantInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutPizzaVariantInput = {
    create?: XOR<OrderItemCreateWithoutPizzaVariantInput, OrderItemUncheckedCreateWithoutPizzaVariantInput> | OrderItemCreateWithoutPizzaVariantInput[] | OrderItemUncheckedCreateWithoutPizzaVariantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutPizzaVariantInput | OrderItemCreateOrConnectWithoutPizzaVariantInput[]
    createMany?: OrderItemCreateManyPizzaVariantInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PizzaUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<PizzaCreateWithoutVariantsInput, PizzaUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: PizzaCreateOrConnectWithoutVariantsInput
    upsert?: PizzaUpsertWithoutVariantsInput
    connect?: PizzaWhereUniqueInput
    update?: XOR<XOR<PizzaUpdateToOneWithWhereWithoutVariantsInput, PizzaUpdateWithoutVariantsInput>, PizzaUncheckedUpdateWithoutVariantsInput>
  }

  export type DoughTypeUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<DoughTypeCreateWithoutVariantsInput, DoughTypeUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: DoughTypeCreateOrConnectWithoutVariantsInput
    upsert?: DoughTypeUpsertWithoutVariantsInput
    connect?: DoughTypeWhereUniqueInput
    update?: XOR<XOR<DoughTypeUpdateToOneWithWhereWithoutVariantsInput, DoughTypeUpdateWithoutVariantsInput>, DoughTypeUncheckedUpdateWithoutVariantsInput>
  }

  export type PizzaSizeUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<PizzaSizeCreateWithoutVariantsInput, PizzaSizeUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: PizzaSizeCreateOrConnectWithoutVariantsInput
    upsert?: PizzaSizeUpsertWithoutVariantsInput
    connect?: PizzaSizeWhereUniqueInput
    update?: XOR<XOR<PizzaSizeUpdateToOneWithWhereWithoutVariantsInput, PizzaSizeUpdateWithoutVariantsInput>, PizzaSizeUncheckedUpdateWithoutVariantsInput>
  }

  export type CartItemUpdateManyWithoutPizzaVariantNestedInput = {
    create?: XOR<CartItemCreateWithoutPizzaVariantInput, CartItemUncheckedCreateWithoutPizzaVariantInput> | CartItemCreateWithoutPizzaVariantInput[] | CartItemUncheckedCreateWithoutPizzaVariantInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutPizzaVariantInput | CartItemCreateOrConnectWithoutPizzaVariantInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutPizzaVariantInput | CartItemUpsertWithWhereUniqueWithoutPizzaVariantInput[]
    createMany?: CartItemCreateManyPizzaVariantInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutPizzaVariantInput | CartItemUpdateWithWhereUniqueWithoutPizzaVariantInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutPizzaVariantInput | CartItemUpdateManyWithWhereWithoutPizzaVariantInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutPizzaVariantNestedInput = {
    create?: XOR<OrderItemCreateWithoutPizzaVariantInput, OrderItemUncheckedCreateWithoutPizzaVariantInput> | OrderItemCreateWithoutPizzaVariantInput[] | OrderItemUncheckedCreateWithoutPizzaVariantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutPizzaVariantInput | OrderItemCreateOrConnectWithoutPizzaVariantInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutPizzaVariantInput | OrderItemUpsertWithWhereUniqueWithoutPizzaVariantInput[]
    createMany?: OrderItemCreateManyPizzaVariantInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutPizzaVariantInput | OrderItemUpdateWithWhereUniqueWithoutPizzaVariantInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutPizzaVariantInput | OrderItemUpdateManyWithWhereWithoutPizzaVariantInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutPizzaVariantNestedInput = {
    create?: XOR<CartItemCreateWithoutPizzaVariantInput, CartItemUncheckedCreateWithoutPizzaVariantInput> | CartItemCreateWithoutPizzaVariantInput[] | CartItemUncheckedCreateWithoutPizzaVariantInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutPizzaVariantInput | CartItemCreateOrConnectWithoutPizzaVariantInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutPizzaVariantInput | CartItemUpsertWithWhereUniqueWithoutPizzaVariantInput[]
    createMany?: CartItemCreateManyPizzaVariantInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutPizzaVariantInput | CartItemUpdateWithWhereUniqueWithoutPizzaVariantInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutPizzaVariantInput | CartItemUpdateManyWithWhereWithoutPizzaVariantInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutPizzaVariantNestedInput = {
    create?: XOR<OrderItemCreateWithoutPizzaVariantInput, OrderItemUncheckedCreateWithoutPizzaVariantInput> | OrderItemCreateWithoutPizzaVariantInput[] | OrderItemUncheckedCreateWithoutPizzaVariantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutPizzaVariantInput | OrderItemCreateOrConnectWithoutPizzaVariantInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutPizzaVariantInput | OrderItemUpsertWithWhereUniqueWithoutPizzaVariantInput[]
    createMany?: OrderItemCreateManyPizzaVariantInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutPizzaVariantInput | OrderItemUpdateWithWhereUniqueWithoutPizzaVariantInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutPizzaVariantInput | OrderItemUpdateManyWithWhereWithoutPizzaVariantInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PizzaVariantCreateNestedManyWithoutDoughTypeInput = {
    create?: XOR<PizzaVariantCreateWithoutDoughTypeInput, PizzaVariantUncheckedCreateWithoutDoughTypeInput> | PizzaVariantCreateWithoutDoughTypeInput[] | PizzaVariantUncheckedCreateWithoutDoughTypeInput[]
    connectOrCreate?: PizzaVariantCreateOrConnectWithoutDoughTypeInput | PizzaVariantCreateOrConnectWithoutDoughTypeInput[]
    createMany?: PizzaVariantCreateManyDoughTypeInputEnvelope
    connect?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
  }

  export type PizzaVariantUncheckedCreateNestedManyWithoutDoughTypeInput = {
    create?: XOR<PizzaVariantCreateWithoutDoughTypeInput, PizzaVariantUncheckedCreateWithoutDoughTypeInput> | PizzaVariantCreateWithoutDoughTypeInput[] | PizzaVariantUncheckedCreateWithoutDoughTypeInput[]
    connectOrCreate?: PizzaVariantCreateOrConnectWithoutDoughTypeInput | PizzaVariantCreateOrConnectWithoutDoughTypeInput[]
    createMany?: PizzaVariantCreateManyDoughTypeInputEnvelope
    connect?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
  }

  export type PizzaVariantUpdateManyWithoutDoughTypeNestedInput = {
    create?: XOR<PizzaVariantCreateWithoutDoughTypeInput, PizzaVariantUncheckedCreateWithoutDoughTypeInput> | PizzaVariantCreateWithoutDoughTypeInput[] | PizzaVariantUncheckedCreateWithoutDoughTypeInput[]
    connectOrCreate?: PizzaVariantCreateOrConnectWithoutDoughTypeInput | PizzaVariantCreateOrConnectWithoutDoughTypeInput[]
    upsert?: PizzaVariantUpsertWithWhereUniqueWithoutDoughTypeInput | PizzaVariantUpsertWithWhereUniqueWithoutDoughTypeInput[]
    createMany?: PizzaVariantCreateManyDoughTypeInputEnvelope
    set?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    disconnect?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    delete?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    connect?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    update?: PizzaVariantUpdateWithWhereUniqueWithoutDoughTypeInput | PizzaVariantUpdateWithWhereUniqueWithoutDoughTypeInput[]
    updateMany?: PizzaVariantUpdateManyWithWhereWithoutDoughTypeInput | PizzaVariantUpdateManyWithWhereWithoutDoughTypeInput[]
    deleteMany?: PizzaVariantScalarWhereInput | PizzaVariantScalarWhereInput[]
  }

  export type PizzaVariantUncheckedUpdateManyWithoutDoughTypeNestedInput = {
    create?: XOR<PizzaVariantCreateWithoutDoughTypeInput, PizzaVariantUncheckedCreateWithoutDoughTypeInput> | PizzaVariantCreateWithoutDoughTypeInput[] | PizzaVariantUncheckedCreateWithoutDoughTypeInput[]
    connectOrCreate?: PizzaVariantCreateOrConnectWithoutDoughTypeInput | PizzaVariantCreateOrConnectWithoutDoughTypeInput[]
    upsert?: PizzaVariantUpsertWithWhereUniqueWithoutDoughTypeInput | PizzaVariantUpsertWithWhereUniqueWithoutDoughTypeInput[]
    createMany?: PizzaVariantCreateManyDoughTypeInputEnvelope
    set?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    disconnect?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    delete?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    connect?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    update?: PizzaVariantUpdateWithWhereUniqueWithoutDoughTypeInput | PizzaVariantUpdateWithWhereUniqueWithoutDoughTypeInput[]
    updateMany?: PizzaVariantUpdateManyWithWhereWithoutDoughTypeInput | PizzaVariantUpdateManyWithWhereWithoutDoughTypeInput[]
    deleteMany?: PizzaVariantScalarWhereInput | PizzaVariantScalarWhereInput[]
  }

  export type PizzaVariantCreateNestedManyWithoutPizzaSizeInput = {
    create?: XOR<PizzaVariantCreateWithoutPizzaSizeInput, PizzaVariantUncheckedCreateWithoutPizzaSizeInput> | PizzaVariantCreateWithoutPizzaSizeInput[] | PizzaVariantUncheckedCreateWithoutPizzaSizeInput[]
    connectOrCreate?: PizzaVariantCreateOrConnectWithoutPizzaSizeInput | PizzaVariantCreateOrConnectWithoutPizzaSizeInput[]
    createMany?: PizzaVariantCreateManyPizzaSizeInputEnvelope
    connect?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
  }

  export type PizzaVariantUncheckedCreateNestedManyWithoutPizzaSizeInput = {
    create?: XOR<PizzaVariantCreateWithoutPizzaSizeInput, PizzaVariantUncheckedCreateWithoutPizzaSizeInput> | PizzaVariantCreateWithoutPizzaSizeInput[] | PizzaVariantUncheckedCreateWithoutPizzaSizeInput[]
    connectOrCreate?: PizzaVariantCreateOrConnectWithoutPizzaSizeInput | PizzaVariantCreateOrConnectWithoutPizzaSizeInput[]
    createMany?: PizzaVariantCreateManyPizzaSizeInputEnvelope
    connect?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
  }

  export type PizzaVariantUpdateManyWithoutPizzaSizeNestedInput = {
    create?: XOR<PizzaVariantCreateWithoutPizzaSizeInput, PizzaVariantUncheckedCreateWithoutPizzaSizeInput> | PizzaVariantCreateWithoutPizzaSizeInput[] | PizzaVariantUncheckedCreateWithoutPizzaSizeInput[]
    connectOrCreate?: PizzaVariantCreateOrConnectWithoutPizzaSizeInput | PizzaVariantCreateOrConnectWithoutPizzaSizeInput[]
    upsert?: PizzaVariantUpsertWithWhereUniqueWithoutPizzaSizeInput | PizzaVariantUpsertWithWhereUniqueWithoutPizzaSizeInput[]
    createMany?: PizzaVariantCreateManyPizzaSizeInputEnvelope
    set?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    disconnect?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    delete?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    connect?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    update?: PizzaVariantUpdateWithWhereUniqueWithoutPizzaSizeInput | PizzaVariantUpdateWithWhereUniqueWithoutPizzaSizeInput[]
    updateMany?: PizzaVariantUpdateManyWithWhereWithoutPizzaSizeInput | PizzaVariantUpdateManyWithWhereWithoutPizzaSizeInput[]
    deleteMany?: PizzaVariantScalarWhereInput | PizzaVariantScalarWhereInput[]
  }

  export type PizzaVariantUncheckedUpdateManyWithoutPizzaSizeNestedInput = {
    create?: XOR<PizzaVariantCreateWithoutPizzaSizeInput, PizzaVariantUncheckedCreateWithoutPizzaSizeInput> | PizzaVariantCreateWithoutPizzaSizeInput[] | PizzaVariantUncheckedCreateWithoutPizzaSizeInput[]
    connectOrCreate?: PizzaVariantCreateOrConnectWithoutPizzaSizeInput | PizzaVariantCreateOrConnectWithoutPizzaSizeInput[]
    upsert?: PizzaVariantUpsertWithWhereUniqueWithoutPizzaSizeInput | PizzaVariantUpsertWithWhereUniqueWithoutPizzaSizeInput[]
    createMany?: PizzaVariantCreateManyPizzaSizeInputEnvelope
    set?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    disconnect?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    delete?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    connect?: PizzaVariantWhereUniqueInput | PizzaVariantWhereUniqueInput[]
    update?: PizzaVariantUpdateWithWhereUniqueWithoutPizzaSizeInput | PizzaVariantUpdateWithWhereUniqueWithoutPizzaSizeInput[]
    updateMany?: PizzaVariantUpdateManyWithWhereWithoutPizzaSizeInput | PizzaVariantUpdateManyWithWhereWithoutPizzaSizeInput[]
    deleteMany?: PizzaVariantScalarWhereInput | PizzaVariantScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCartInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    connect?: UserWhereUniqueInput
  }

  export type CartItemCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutCartNestedInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    upsert?: UserUpsertWithoutCartInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartInput, UserUpdateWithoutCartInput>, UserUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartCreateNestedOneWithoutItemsInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput
    connect?: CartWhereUniqueInput
  }

  export type PizzaVariantCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<PizzaVariantCreateWithoutCartItemsInput, PizzaVariantUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: PizzaVariantCreateOrConnectWithoutCartItemsInput
    connect?: PizzaVariantWhereUniqueInput
  }

  export type CartUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput
    upsert?: CartUpsertWithoutItemsInput
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutItemsInput, CartUpdateWithoutItemsInput>, CartUncheckedUpdateWithoutItemsInput>
  }

  export type PizzaVariantUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<PizzaVariantCreateWithoutCartItemsInput, PizzaVariantUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: PizzaVariantCreateOrConnectWithoutCartItemsInput
    upsert?: PizzaVariantUpsertWithoutCartItemsInput
    connect?: PizzaVariantWhereUniqueInput
    update?: XOR<XOR<PizzaVariantUpdateToOneWithWhereWithoutCartItemsInput, PizzaVariantUpdateWithoutCartItemsInput>, PizzaVariantUncheckedUpdateWithoutCartItemsInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type PizzaVariantCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<PizzaVariantCreateWithoutOrderItemsInput, PizzaVariantUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: PizzaVariantCreateOrConnectWithoutOrderItemsInput
    connect?: PizzaVariantWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type PizzaVariantUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<PizzaVariantCreateWithoutOrderItemsInput, PizzaVariantUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: PizzaVariantCreateOrConnectWithoutOrderItemsInput
    upsert?: PizzaVariantUpsertWithoutOrderItemsInput
    connect?: PizzaVariantWhereUniqueInput
    update?: XOR<XOR<PizzaVariantUpdateToOneWithWhereWithoutOrderItemsInput, PizzaVariantUpdateWithoutOrderItemsInput>, PizzaVariantUncheckedUpdateWithoutOrderItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CartCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutUserInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    totalPrice: number
    fullName: string
    email: string
    phone: string
    address: string
    comment?: string | null
    createdAt?: Date | string
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    totalPrice: number
    fullName: string
    email: string
    phone: string
    address: string
    comment?: string | null
    createdAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CartUpsertWithoutUserInput = {
    update: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutUserInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
  }

  export type CartUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringNullableFilter<"Order"> | string | null
    totalPrice?: IntFilter<"Order"> | number
    fullName?: StringFilter<"Order"> | string
    email?: StringFilter<"Order"> | string
    phone?: StringFilter<"Order"> | string
    address?: StringFilter<"Order"> | string
    comment?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type CategoryCreateWithoutPizzasInput = {
    id?: string
    name: string
    order: number
  }

  export type CategoryUncheckedCreateWithoutPizzasInput = {
    id?: string
    name: string
    order: number
  }

  export type CategoryCreateOrConnectWithoutPizzasInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPizzasInput, CategoryUncheckedCreateWithoutPizzasInput>
  }

  export type PizzaVariantCreateWithoutPizzaInput = {
    id?: string
    price: number
    doughType: DoughTypeCreateNestedOneWithoutVariantsInput
    pizzaSize: PizzaSizeCreateNestedOneWithoutVariantsInput
    cartItems?: CartItemCreateNestedManyWithoutPizzaVariantInput
    orderItems?: OrderItemCreateNestedManyWithoutPizzaVariantInput
  }

  export type PizzaVariantUncheckedCreateWithoutPizzaInput = {
    id?: string
    doughTypeId: string
    pizzaSizeId: string
    price: number
    cartItems?: CartItemUncheckedCreateNestedManyWithoutPizzaVariantInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutPizzaVariantInput
  }

  export type PizzaVariantCreateOrConnectWithoutPizzaInput = {
    where: PizzaVariantWhereUniqueInput
    create: XOR<PizzaVariantCreateWithoutPizzaInput, PizzaVariantUncheckedCreateWithoutPizzaInput>
  }

  export type PizzaVariantCreateManyPizzaInputEnvelope = {
    data: PizzaVariantCreateManyPizzaInput | PizzaVariantCreateManyPizzaInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutPizzasInput = {
    update: XOR<CategoryUpdateWithoutPizzasInput, CategoryUncheckedUpdateWithoutPizzasInput>
    create: XOR<CategoryCreateWithoutPizzasInput, CategoryUncheckedCreateWithoutPizzasInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPizzasInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPizzasInput, CategoryUncheckedUpdateWithoutPizzasInput>
  }

  export type CategoryUpdateWithoutPizzasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUncheckedUpdateWithoutPizzasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PizzaVariantUpsertWithWhereUniqueWithoutPizzaInput = {
    where: PizzaVariantWhereUniqueInput
    update: XOR<PizzaVariantUpdateWithoutPizzaInput, PizzaVariantUncheckedUpdateWithoutPizzaInput>
    create: XOR<PizzaVariantCreateWithoutPizzaInput, PizzaVariantUncheckedCreateWithoutPizzaInput>
  }

  export type PizzaVariantUpdateWithWhereUniqueWithoutPizzaInput = {
    where: PizzaVariantWhereUniqueInput
    data: XOR<PizzaVariantUpdateWithoutPizzaInput, PizzaVariantUncheckedUpdateWithoutPizzaInput>
  }

  export type PizzaVariantUpdateManyWithWhereWithoutPizzaInput = {
    where: PizzaVariantScalarWhereInput
    data: XOR<PizzaVariantUpdateManyMutationInput, PizzaVariantUncheckedUpdateManyWithoutPizzaInput>
  }

  export type PizzaVariantScalarWhereInput = {
    AND?: PizzaVariantScalarWhereInput | PizzaVariantScalarWhereInput[]
    OR?: PizzaVariantScalarWhereInput[]
    NOT?: PizzaVariantScalarWhereInput | PizzaVariantScalarWhereInput[]
    id?: StringFilter<"PizzaVariant"> | string
    pizzaId?: StringFilter<"PizzaVariant"> | string
    doughTypeId?: StringFilter<"PizzaVariant"> | string
    pizzaSizeId?: StringFilter<"PizzaVariant"> | string
    price?: IntFilter<"PizzaVariant"> | number
  }

  export type PizzaCreateWithoutCategoryInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    overviewImageUrl: string
    rating: number
    minPrice: number
    slug: string
    variants?: PizzaVariantCreateNestedManyWithoutPizzaInput
  }

  export type PizzaUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    overviewImageUrl: string
    rating: number
    minPrice: number
    slug: string
    variants?: PizzaVariantUncheckedCreateNestedManyWithoutPizzaInput
  }

  export type PizzaCreateOrConnectWithoutCategoryInput = {
    where: PizzaWhereUniqueInput
    create: XOR<PizzaCreateWithoutCategoryInput, PizzaUncheckedCreateWithoutCategoryInput>
  }

  export type PizzaCreateManyCategoryInputEnvelope = {
    data: PizzaCreateManyCategoryInput | PizzaCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PizzaUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PizzaWhereUniqueInput
    update: XOR<PizzaUpdateWithoutCategoryInput, PizzaUncheckedUpdateWithoutCategoryInput>
    create: XOR<PizzaCreateWithoutCategoryInput, PizzaUncheckedCreateWithoutCategoryInput>
  }

  export type PizzaUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PizzaWhereUniqueInput
    data: XOR<PizzaUpdateWithoutCategoryInput, PizzaUncheckedUpdateWithoutCategoryInput>
  }

  export type PizzaUpdateManyWithWhereWithoutCategoryInput = {
    where: PizzaScalarWhereInput
    data: XOR<PizzaUpdateManyMutationInput, PizzaUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PizzaScalarWhereInput = {
    AND?: PizzaScalarWhereInput | PizzaScalarWhereInput[]
    OR?: PizzaScalarWhereInput[]
    NOT?: PizzaScalarWhereInput | PizzaScalarWhereInput[]
    id?: StringFilter<"Pizza"> | string
    title?: StringFilter<"Pizza"> | string
    description?: StringFilter<"Pizza"> | string
    imageUrl?: StringFilter<"Pizza"> | string
    overviewImageUrl?: StringFilter<"Pizza"> | string
    categoryId?: StringFilter<"Pizza"> | string
    rating?: FloatFilter<"Pizza"> | number
    minPrice?: IntFilter<"Pizza"> | number
    slug?: StringFilter<"Pizza"> | string
  }

  export type PizzaCreateWithoutVariantsInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    overviewImageUrl: string
    rating: number
    minPrice: number
    slug: string
    category: CategoryCreateNestedOneWithoutPizzasInput
  }

  export type PizzaUncheckedCreateWithoutVariantsInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    overviewImageUrl: string
    categoryId: string
    rating: number
    minPrice: number
    slug: string
  }

  export type PizzaCreateOrConnectWithoutVariantsInput = {
    where: PizzaWhereUniqueInput
    create: XOR<PizzaCreateWithoutVariantsInput, PizzaUncheckedCreateWithoutVariantsInput>
  }

  export type DoughTypeCreateWithoutVariantsInput = {
    id?: string
    name: string
  }

  export type DoughTypeUncheckedCreateWithoutVariantsInput = {
    id?: string
    name: string
  }

  export type DoughTypeCreateOrConnectWithoutVariantsInput = {
    where: DoughTypeWhereUniqueInput
    create: XOR<DoughTypeCreateWithoutVariantsInput, DoughTypeUncheckedCreateWithoutVariantsInput>
  }

  export type PizzaSizeCreateWithoutVariantsInput = {
    id?: string
    size: number
  }

  export type PizzaSizeUncheckedCreateWithoutVariantsInput = {
    id?: string
    size: number
  }

  export type PizzaSizeCreateOrConnectWithoutVariantsInput = {
    where: PizzaSizeWhereUniqueInput
    create: XOR<PizzaSizeCreateWithoutVariantsInput, PizzaSizeUncheckedCreateWithoutVariantsInput>
  }

  export type CartItemCreateWithoutPizzaVariantInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    cart: CartCreateNestedOneWithoutItemsInput
  }

  export type CartItemUncheckedCreateWithoutPizzaVariantInput = {
    id?: string
    cartId: string
    amount: number
    createdAt?: Date | string
  }

  export type CartItemCreateOrConnectWithoutPizzaVariantInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutPizzaVariantInput, CartItemUncheckedCreateWithoutPizzaVariantInput>
  }

  export type CartItemCreateManyPizzaVariantInputEnvelope = {
    data: CartItemCreateManyPizzaVariantInput | CartItemCreateManyPizzaVariantInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutPizzaVariantInput = {
    id?: string
    amount: number
    priceAtOrder: number
    order: OrderCreateNestedOneWithoutItemsInput
  }

  export type OrderItemUncheckedCreateWithoutPizzaVariantInput = {
    id?: string
    orderId: string
    amount: number
    priceAtOrder: number
  }

  export type OrderItemCreateOrConnectWithoutPizzaVariantInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutPizzaVariantInput, OrderItemUncheckedCreateWithoutPizzaVariantInput>
  }

  export type OrderItemCreateManyPizzaVariantInputEnvelope = {
    data: OrderItemCreateManyPizzaVariantInput | OrderItemCreateManyPizzaVariantInput[]
    skipDuplicates?: boolean
  }

  export type PizzaUpsertWithoutVariantsInput = {
    update: XOR<PizzaUpdateWithoutVariantsInput, PizzaUncheckedUpdateWithoutVariantsInput>
    create: XOR<PizzaCreateWithoutVariantsInput, PizzaUncheckedCreateWithoutVariantsInput>
    where?: PizzaWhereInput
  }

  export type PizzaUpdateToOneWithWhereWithoutVariantsInput = {
    where?: PizzaWhereInput
    data: XOR<PizzaUpdateWithoutVariantsInput, PizzaUncheckedUpdateWithoutVariantsInput>
  }

  export type PizzaUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    overviewImageUrl?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    minPrice?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutPizzasNestedInput
  }

  export type PizzaUncheckedUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    overviewImageUrl?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    minPrice?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type DoughTypeUpsertWithoutVariantsInput = {
    update: XOR<DoughTypeUpdateWithoutVariantsInput, DoughTypeUncheckedUpdateWithoutVariantsInput>
    create: XOR<DoughTypeCreateWithoutVariantsInput, DoughTypeUncheckedCreateWithoutVariantsInput>
    where?: DoughTypeWhereInput
  }

  export type DoughTypeUpdateToOneWithWhereWithoutVariantsInput = {
    where?: DoughTypeWhereInput
    data: XOR<DoughTypeUpdateWithoutVariantsInput, DoughTypeUncheckedUpdateWithoutVariantsInput>
  }

  export type DoughTypeUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DoughTypeUncheckedUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PizzaSizeUpsertWithoutVariantsInput = {
    update: XOR<PizzaSizeUpdateWithoutVariantsInput, PizzaSizeUncheckedUpdateWithoutVariantsInput>
    create: XOR<PizzaSizeCreateWithoutVariantsInput, PizzaSizeUncheckedCreateWithoutVariantsInput>
    where?: PizzaSizeWhereInput
  }

  export type PizzaSizeUpdateToOneWithWhereWithoutVariantsInput = {
    where?: PizzaSizeWhereInput
    data: XOR<PizzaSizeUpdateWithoutVariantsInput, PizzaSizeUncheckedUpdateWithoutVariantsInput>
  }

  export type PizzaSizeUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
  }

  export type PizzaSizeUncheckedUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemUpsertWithWhereUniqueWithoutPizzaVariantInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutPizzaVariantInput, CartItemUncheckedUpdateWithoutPizzaVariantInput>
    create: XOR<CartItemCreateWithoutPizzaVariantInput, CartItemUncheckedCreateWithoutPizzaVariantInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutPizzaVariantInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutPizzaVariantInput, CartItemUncheckedUpdateWithoutPizzaVariantInput>
  }

  export type CartItemUpdateManyWithWhereWithoutPizzaVariantInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutPizzaVariantInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    OR?: CartItemScalarWhereInput[]
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    id?: StringFilter<"CartItem"> | string
    cartId?: StringFilter<"CartItem"> | string
    pizzaVariantId?: StringFilter<"CartItem"> | string
    amount?: IntFilter<"CartItem"> | number
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutPizzaVariantInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutPizzaVariantInput, OrderItemUncheckedUpdateWithoutPizzaVariantInput>
    create: XOR<OrderItemCreateWithoutPizzaVariantInput, OrderItemUncheckedCreateWithoutPizzaVariantInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutPizzaVariantInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutPizzaVariantInput, OrderItemUncheckedUpdateWithoutPizzaVariantInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutPizzaVariantInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutPizzaVariantInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    pizzaVariantId?: StringFilter<"OrderItem"> | string
    amount?: IntFilter<"OrderItem"> | number
    priceAtOrder?: IntFilter<"OrderItem"> | number
  }

  export type PizzaVariantCreateWithoutDoughTypeInput = {
    id?: string
    price: number
    pizza: PizzaCreateNestedOneWithoutVariantsInput
    pizzaSize: PizzaSizeCreateNestedOneWithoutVariantsInput
    cartItems?: CartItemCreateNestedManyWithoutPizzaVariantInput
    orderItems?: OrderItemCreateNestedManyWithoutPizzaVariantInput
  }

  export type PizzaVariantUncheckedCreateWithoutDoughTypeInput = {
    id?: string
    pizzaId: string
    pizzaSizeId: string
    price: number
    cartItems?: CartItemUncheckedCreateNestedManyWithoutPizzaVariantInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutPizzaVariantInput
  }

  export type PizzaVariantCreateOrConnectWithoutDoughTypeInput = {
    where: PizzaVariantWhereUniqueInput
    create: XOR<PizzaVariantCreateWithoutDoughTypeInput, PizzaVariantUncheckedCreateWithoutDoughTypeInput>
  }

  export type PizzaVariantCreateManyDoughTypeInputEnvelope = {
    data: PizzaVariantCreateManyDoughTypeInput | PizzaVariantCreateManyDoughTypeInput[]
    skipDuplicates?: boolean
  }

  export type PizzaVariantUpsertWithWhereUniqueWithoutDoughTypeInput = {
    where: PizzaVariantWhereUniqueInput
    update: XOR<PizzaVariantUpdateWithoutDoughTypeInput, PizzaVariantUncheckedUpdateWithoutDoughTypeInput>
    create: XOR<PizzaVariantCreateWithoutDoughTypeInput, PizzaVariantUncheckedCreateWithoutDoughTypeInput>
  }

  export type PizzaVariantUpdateWithWhereUniqueWithoutDoughTypeInput = {
    where: PizzaVariantWhereUniqueInput
    data: XOR<PizzaVariantUpdateWithoutDoughTypeInput, PizzaVariantUncheckedUpdateWithoutDoughTypeInput>
  }

  export type PizzaVariantUpdateManyWithWhereWithoutDoughTypeInput = {
    where: PizzaVariantScalarWhereInput
    data: XOR<PizzaVariantUpdateManyMutationInput, PizzaVariantUncheckedUpdateManyWithoutDoughTypeInput>
  }

  export type PizzaVariantCreateWithoutPizzaSizeInput = {
    id?: string
    price: number
    pizza: PizzaCreateNestedOneWithoutVariantsInput
    doughType: DoughTypeCreateNestedOneWithoutVariantsInput
    cartItems?: CartItemCreateNestedManyWithoutPizzaVariantInput
    orderItems?: OrderItemCreateNestedManyWithoutPizzaVariantInput
  }

  export type PizzaVariantUncheckedCreateWithoutPizzaSizeInput = {
    id?: string
    pizzaId: string
    doughTypeId: string
    price: number
    cartItems?: CartItemUncheckedCreateNestedManyWithoutPizzaVariantInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutPizzaVariantInput
  }

  export type PizzaVariantCreateOrConnectWithoutPizzaSizeInput = {
    where: PizzaVariantWhereUniqueInput
    create: XOR<PizzaVariantCreateWithoutPizzaSizeInput, PizzaVariantUncheckedCreateWithoutPizzaSizeInput>
  }

  export type PizzaVariantCreateManyPizzaSizeInputEnvelope = {
    data: PizzaVariantCreateManyPizzaSizeInput | PizzaVariantCreateManyPizzaSizeInput[]
    skipDuplicates?: boolean
  }

  export type PizzaVariantUpsertWithWhereUniqueWithoutPizzaSizeInput = {
    where: PizzaVariantWhereUniqueInput
    update: XOR<PizzaVariantUpdateWithoutPizzaSizeInput, PizzaVariantUncheckedUpdateWithoutPizzaSizeInput>
    create: XOR<PizzaVariantCreateWithoutPizzaSizeInput, PizzaVariantUncheckedCreateWithoutPizzaSizeInput>
  }

  export type PizzaVariantUpdateWithWhereUniqueWithoutPizzaSizeInput = {
    where: PizzaVariantWhereUniqueInput
    data: XOR<PizzaVariantUpdateWithoutPizzaSizeInput, PizzaVariantUncheckedUpdateWithoutPizzaSizeInput>
  }

  export type PizzaVariantUpdateManyWithWhereWithoutPizzaSizeInput = {
    where: PizzaVariantScalarWhereInput
    data: XOR<PizzaVariantUpdateManyMutationInput, PizzaVariantUncheckedUpdateManyWithoutPizzaSizeInput>
  }

  export type UserCreateWithoutCartInput = {
    id?: string
    oauthId: string
    oauthProvider: string
    name: string
    surname: string
    email: string
    phone: string
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartInput = {
    id?: string
    oauthId: string
    oauthProvider: string
    name: string
    surname: string
    email: string
    phone: string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateWithoutCartInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    pizzaVariant: PizzaVariantCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateWithoutCartInput = {
    id?: string
    pizzaVariantId: string
    amount: number
    createdAt?: Date | string
  }

  export type CartItemCreateOrConnectWithoutCartInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateManyCartInputEnvelope = {
    data: CartItemCreateManyCartInput | CartItemCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCartInput = {
    update: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
  }

  export type UserUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauthId?: StringFieldUpdateOperationsInput | string
    oauthProvider?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauthId?: StringFieldUpdateOperationsInput | string
    oauthProvider?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithWhereWithoutCartInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartInput>
  }

  export type CartCreateWithoutItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateWithoutItemsInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartCreateOrConnectWithoutItemsInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
  }

  export type PizzaVariantCreateWithoutCartItemsInput = {
    id?: string
    price: number
    pizza: PizzaCreateNestedOneWithoutVariantsInput
    doughType: DoughTypeCreateNestedOneWithoutVariantsInput
    pizzaSize: PizzaSizeCreateNestedOneWithoutVariantsInput
    orderItems?: OrderItemCreateNestedManyWithoutPizzaVariantInput
  }

  export type PizzaVariantUncheckedCreateWithoutCartItemsInput = {
    id?: string
    pizzaId: string
    doughTypeId: string
    pizzaSizeId: string
    price: number
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutPizzaVariantInput
  }

  export type PizzaVariantCreateOrConnectWithoutCartItemsInput = {
    where: PizzaVariantWhereUniqueInput
    create: XOR<PizzaVariantCreateWithoutCartItemsInput, PizzaVariantUncheckedCreateWithoutCartItemsInput>
  }

  export type CartUpsertWithoutItemsInput = {
    update: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutItemsInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>
  }

  export type CartUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PizzaVariantUpsertWithoutCartItemsInput = {
    update: XOR<PizzaVariantUpdateWithoutCartItemsInput, PizzaVariantUncheckedUpdateWithoutCartItemsInput>
    create: XOR<PizzaVariantCreateWithoutCartItemsInput, PizzaVariantUncheckedCreateWithoutCartItemsInput>
    where?: PizzaVariantWhereInput
  }

  export type PizzaVariantUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: PizzaVariantWhereInput
    data: XOR<PizzaVariantUpdateWithoutCartItemsInput, PizzaVariantUncheckedUpdateWithoutCartItemsInput>
  }

  export type PizzaVariantUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    pizza?: PizzaUpdateOneRequiredWithoutVariantsNestedInput
    doughType?: DoughTypeUpdateOneRequiredWithoutVariantsNestedInput
    pizzaSize?: PizzaSizeUpdateOneRequiredWithoutVariantsNestedInput
    orderItems?: OrderItemUpdateManyWithoutPizzaVariantNestedInput
  }

  export type PizzaVariantUncheckedUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pizzaId?: StringFieldUpdateOperationsInput | string
    doughTypeId?: StringFieldUpdateOperationsInput | string
    pizzaSizeId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    orderItems?: OrderItemUncheckedUpdateManyWithoutPizzaVariantNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    oauthId: string
    oauthProvider: string
    name: string
    surname: string
    email: string
    phone: string
    cart?: CartCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    oauthId: string
    oauthProvider: string
    name: string
    surname: string
    email: string
    phone: string
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    amount: number
    priceAtOrder: number
    pizzaVariant: PizzaVariantCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    pizzaVariantId: string
    amount: number
    priceAtOrder: number
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauthId?: StringFieldUpdateOperationsInput | string
    oauthProvider?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cart?: CartUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauthId?: StringFieldUpdateOperationsInput | string
    oauthProvider?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutItemsInput = {
    id?: string
    totalPrice: number
    fullName: string
    email: string
    phone: string
    address: string
    comment?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string
    userId?: string | null
    totalPrice: number
    fullName: string
    email: string
    phone: string
    address: string
    comment?: string | null
    createdAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type PizzaVariantCreateWithoutOrderItemsInput = {
    id?: string
    price: number
    pizza: PizzaCreateNestedOneWithoutVariantsInput
    doughType: DoughTypeCreateNestedOneWithoutVariantsInput
    pizzaSize: PizzaSizeCreateNestedOneWithoutVariantsInput
    cartItems?: CartItemCreateNestedManyWithoutPizzaVariantInput
  }

  export type PizzaVariantUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    pizzaId: string
    doughTypeId: string
    pizzaSizeId: string
    price: number
    cartItems?: CartItemUncheckedCreateNestedManyWithoutPizzaVariantInput
  }

  export type PizzaVariantCreateOrConnectWithoutOrderItemsInput = {
    where: PizzaVariantWhereUniqueInput
    create: XOR<PizzaVariantCreateWithoutOrderItemsInput, PizzaVariantUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PizzaVariantUpsertWithoutOrderItemsInput = {
    update: XOR<PizzaVariantUpdateWithoutOrderItemsInput, PizzaVariantUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<PizzaVariantCreateWithoutOrderItemsInput, PizzaVariantUncheckedCreateWithoutOrderItemsInput>
    where?: PizzaVariantWhereInput
  }

  export type PizzaVariantUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: PizzaVariantWhereInput
    data: XOR<PizzaVariantUpdateWithoutOrderItemsInput, PizzaVariantUncheckedUpdateWithoutOrderItemsInput>
  }

  export type PizzaVariantUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    pizza?: PizzaUpdateOneRequiredWithoutVariantsNestedInput
    doughType?: DoughTypeUpdateOneRequiredWithoutVariantsNestedInput
    pizzaSize?: PizzaSizeUpdateOneRequiredWithoutVariantsNestedInput
    cartItems?: CartItemUpdateManyWithoutPizzaVariantNestedInput
  }

  export type PizzaVariantUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pizzaId?: StringFieldUpdateOperationsInput | string
    doughTypeId?: StringFieldUpdateOperationsInput | string
    pizzaSizeId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    cartItems?: CartItemUncheckedUpdateManyWithoutPizzaVariantNestedInput
  }

  export type OrderCreateManyUserInput = {
    id?: string
    totalPrice: number
    fullName: string
    email: string
    phone: string
    address: string
    comment?: string | null
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PizzaVariantCreateManyPizzaInput = {
    id?: string
    doughTypeId: string
    pizzaSizeId: string
    price: number
  }

  export type PizzaVariantUpdateWithoutPizzaInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doughType?: DoughTypeUpdateOneRequiredWithoutVariantsNestedInput
    pizzaSize?: PizzaSizeUpdateOneRequiredWithoutVariantsNestedInput
    cartItems?: CartItemUpdateManyWithoutPizzaVariantNestedInput
    orderItems?: OrderItemUpdateManyWithoutPizzaVariantNestedInput
  }

  export type PizzaVariantUncheckedUpdateWithoutPizzaInput = {
    id?: StringFieldUpdateOperationsInput | string
    doughTypeId?: StringFieldUpdateOperationsInput | string
    pizzaSizeId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    cartItems?: CartItemUncheckedUpdateManyWithoutPizzaVariantNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutPizzaVariantNestedInput
  }

  export type PizzaVariantUncheckedUpdateManyWithoutPizzaInput = {
    id?: StringFieldUpdateOperationsInput | string
    doughTypeId?: StringFieldUpdateOperationsInput | string
    pizzaSizeId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type PizzaCreateManyCategoryInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    overviewImageUrl: string
    rating: number
    minPrice: number
    slug: string
  }

  export type PizzaUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    overviewImageUrl?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    minPrice?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    variants?: PizzaVariantUpdateManyWithoutPizzaNestedInput
  }

  export type PizzaUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    overviewImageUrl?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    minPrice?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    variants?: PizzaVariantUncheckedUpdateManyWithoutPizzaNestedInput
  }

  export type PizzaUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    overviewImageUrl?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    minPrice?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type CartItemCreateManyPizzaVariantInput = {
    id?: string
    cartId: string
    amount: number
    createdAt?: Date | string
  }

  export type OrderItemCreateManyPizzaVariantInput = {
    id?: string
    orderId: string
    amount: number
    priceAtOrder: number
  }

  export type CartItemUpdateWithoutPizzaVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutPizzaVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyWithoutPizzaVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutPizzaVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    priceAtOrder?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutPizzaVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    priceAtOrder?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutPizzaVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    priceAtOrder?: IntFieldUpdateOperationsInput | number
  }

  export type PizzaVariantCreateManyDoughTypeInput = {
    id?: string
    pizzaId: string
    pizzaSizeId: string
    price: number
  }

  export type PizzaVariantUpdateWithoutDoughTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    pizza?: PizzaUpdateOneRequiredWithoutVariantsNestedInput
    pizzaSize?: PizzaSizeUpdateOneRequiredWithoutVariantsNestedInput
    cartItems?: CartItemUpdateManyWithoutPizzaVariantNestedInput
    orderItems?: OrderItemUpdateManyWithoutPizzaVariantNestedInput
  }

  export type PizzaVariantUncheckedUpdateWithoutDoughTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    pizzaId?: StringFieldUpdateOperationsInput | string
    pizzaSizeId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    cartItems?: CartItemUncheckedUpdateManyWithoutPizzaVariantNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutPizzaVariantNestedInput
  }

  export type PizzaVariantUncheckedUpdateManyWithoutDoughTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    pizzaId?: StringFieldUpdateOperationsInput | string
    pizzaSizeId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type PizzaVariantCreateManyPizzaSizeInput = {
    id?: string
    pizzaId: string
    doughTypeId: string
    price: number
  }

  export type PizzaVariantUpdateWithoutPizzaSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    pizza?: PizzaUpdateOneRequiredWithoutVariantsNestedInput
    doughType?: DoughTypeUpdateOneRequiredWithoutVariantsNestedInput
    cartItems?: CartItemUpdateManyWithoutPizzaVariantNestedInput
    orderItems?: OrderItemUpdateManyWithoutPizzaVariantNestedInput
  }

  export type PizzaVariantUncheckedUpdateWithoutPizzaSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    pizzaId?: StringFieldUpdateOperationsInput | string
    doughTypeId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    cartItems?: CartItemUncheckedUpdateManyWithoutPizzaVariantNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutPizzaVariantNestedInput
  }

  export type PizzaVariantUncheckedUpdateManyWithoutPizzaSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    pizzaId?: StringFieldUpdateOperationsInput | string
    doughTypeId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemCreateManyCartInput = {
    id?: string
    pizzaVariantId: string
    amount: number
    createdAt?: Date | string
  }

  export type CartItemUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pizzaVariant?: PizzaVariantUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    pizzaVariantId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    pizzaVariantId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    pizzaVariantId: string
    amount: number
    priceAtOrder: number
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    priceAtOrder?: IntFieldUpdateOperationsInput | number
    pizzaVariant?: PizzaVariantUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    pizzaVariantId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    priceAtOrder?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    pizzaVariantId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    priceAtOrder?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}