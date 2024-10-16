# AXT-AyaKoto/Zahlen.js Specification

このファイルは、`AXT-AyaKoto/Zahlen.js`の仕様を簡単にまとめたドキュメントです。

## globalThis.Zahlen

`AXT-AyaKoto/Zahlen.js`の機能へのアクセスは、`globalThis.Zahlen`を介して行います。
`globalThis.Zahlen`は、以下のプロパティを持ちます。

- `globalThis.Zahlen.CONST` : 定数を提供するオブジェクト
- `globalThis.Zahlen.Z` : 整数を表すクラス(`Zahlen.Z`)
- `globalThis.Zahlen.Q` : 有理数を表すクラス(`Zahlen.Q`)
- `globalThis.Zahlen.Qi` : ガウス有理数を表すクラス(`Zahlen.Qi`)
- `globalThis.Zahlen.Math` : ECMAScriptの`Math`に似たメソッド・定数を提供するオブジェクト(`Zahlen.Math`)

### `Zahlen.CONST`

定数およびその近似値を提供するオブジェクトです。

- `Zahlen.CONST.ZERO` : `0`を表す`Zahlen.Z`オブジェクト
- `Zahlen.CONST.PI` : `π`の近似値を表す`Zahlen.Q`オブジェクト
- `Zahlen.CONST.E` : `e`の近似値を表す`Zahlen.Q`オブジェクト

### `Zahlen.Z`

整数を表すクラスです。

- `Zahlen.Z()` : 整数を表す`Zahlen.Z`オブジェクトを生成します
    - `Zahlen.Z(n)`
        - `n` : 整数を表す`{number|Zahlen.Z}`
- `Zahlen.Z.prototype` : `Zahlen.Z`オブジェクトのプロトタイプ

### `Zahlen.Q`

有理数を表すクラスです。

- `Zahlen.Q()` : 有理数を表す`Zahlen.Q`オブジェクトを生成します
    - `Zahlen.Q(n)`
        - `n` : 有理数を表す`{number|Zahlen.Q}`
    - `Zahlen.Q(n, d)`
        - `n` : 分子を表す`{number|Zahlen.Z}`
        - `d` : 分母を表す`{number|Zahlen.Z}`
- `Zahlen.Q.prototype` : `Zahlen.Q`オブジェクトのプロトタイプ

### `Zahlen.Qi`

ガウス有理数(実部と虚部がともに有理数な複素数)を表すクラスです。

- `Zahlen.Qi()` : ガウス有理数を表す`Zahlen.Qi`オブジェクトを生成します
    - `Zahlen.Qi(r, i)`
        - `r` : 実部を表す`{number|Zahlen.Q}`
        - `i` : 虚部を表す`{number|Zahlen.Q}`
- `Zahlen.Qi.prototype` : `Zahlen.Qi`オブジェクトのプロトタイプ

### `Zahlen.Math`

ECMAScriptの`Math`に似たメソッド・定数を提供するオブジェクトです。
