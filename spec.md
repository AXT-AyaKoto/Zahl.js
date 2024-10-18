# AXT-AyaKoto/Zahlen.js Specification

このファイルは、`AXT-AyaKoto/Zahlen.js`の仕様を簡単にまとめたドキュメントです。

## globalThis.Zahlen

`AXT-AyaKoto/Zahlen.js`の機能へのアクセスは、`globalThis.Zahlen`を介して行います。
`globalThis.Zahlen`は、以下のプロパティを持ちます。

- `globalThis.Zahlen.Qi` : ガウス有理数を表すクラス(`Zahlen.Qi`)
- `globalThis.Zahlen.Q` : 有理数を表すクラス(`Zahlen.Q`)
- `globalThis.Zahlen.Z` : 整数を表すクラス(`Zahlen.Z`)
- `globalThis.Zahlen.Math` : ECMAScriptの`Math`に似たメソッド・定数を提供するオブジェクト(`Zahlen.Math`)

### 用語 "十分な近似値"

`AXT-AyaKoto/Zahlen.js`では、無理数である数学定数を"十分な近似値"で表現します。
"十分な近似値"は、有理数で表現される(無理数な)数学定数の近似値です。
"十分な近似値"は、「IEEE 754倍精度浮動小数点数」以上の精度を持つことが保証されます。

### `Zahlen.Qi`

ガウス有理数(実部と虚部がともに有理数な複素数)を表すクラスです。

- `Zahlen.Qi()` : ガウス有理数を表す`Zahlen.Qi`オブジェクトを生成します
    - `Zahlen.Qi(n)`
        - `n` : ガウス有理数を表す`{Zahlen.Qi}`
    - `Zahlen.Qi(r_top, r_bottom, i_top, i_bottom)`
        - `r_top` : 実部の分子を表す`{number|bigint}`
        - `r_bottom` : 実部の分母を表す`{number|bigint}`
        - `i_top` : 虚部の分子を表す`{number|bigint}`
        - `i_bottom` : 虚部の分母を表す`{number|bigint}`
- `Zahlen.Qi.prototype` : `Zahlen.Qi`インスタンスのプロトタイプ
    - インスタンスプロパティ (数値表現)
        - `Zahlen.Qi.prototype.r_sign` : 実部の符号を表す`BigInt` (`-1n`, `0n`, `1n`)
        - `Zahlen.Qi.prototype.r_top` : 実部の分子を表す`BigInt` (非負整数)
        - `Zahlen.Qi.prototype.r_bottom` : 実部の分母を表す`BigInt` (正整数)
        - `Zahlen.Qi.prototype.i_sign` : 虚部の符号を表す`BigInt` (`-1n`, `0n`, `1n`)
        - `Zahlen.Qi.prototype.i_top` : 虚部の分子を表す`BigInt` (非負整数)
        - `Zahlen.Qi.prototype.i_bottom` : 虚部の分母を表す`BigInt` (正整数)
        - 特殊な値は、以下のように表現されます
            - `0`の場合、`(r_sign, r_top, r_bottom, i_sign, i_top, i_bottom) = (0n, 0n, 1n, 0n, 0n, 1n)`
            - `Infinity`の場合、`(r_sign, r_top, r_bottom, i_sign, i_top, i_bottom) = (0n, 1n, 0n, 0n, 0n, 1n)`
                - `-Infinity`の場合、`(r_sign, r_top, r_bottom, i_sign, i_top, i_bottom) = (0n, -1n, 0n, 0n, 0n, 1n)`
            - `NaN`の場合、`(r_sign, r_top, r_bottom, i_sign, i_top, i_bottom) = (0n, 0n, 1n, 0n, 0n, 1n)`
    - インスタンスメソッド
        - `Zahlen.Qi.prototype.valueOf()` : `Zahlen.Qi`インスタンスを近似値の`number`に変換します

### `Zahlen.Q`

有理数を表すクラスです。
`Zahlen.Q`は`Zahlen.Qi`を継承しています。

- `Zahlen.Q()` : 有理数を表す`Zahlen.Q`オブジェクトを生成します
    - `Zahlen.Q(n)`
        - `n` : 有理数を表す`{Zahlen.Q|number|bigint}` (※`number`の場合は"十分な近似値"に丸められます)
    - `Zahlen.Q(top, bottom)`
        - `top` : 分子を表す`{number|bigint}`
        - `bottom` : 分母を表す`{number|bigint}`
- `Zahlen.Q.prototype` : `Zahlen.Q`オブジェクトのプロトタイプ

### `Zahlen.Z`

整数を表すクラスです。
`Zahlen.Z`は`Zahlen.Q`を継承しています。

- `Zahlen.Z()` : 整数を表す`Zahlen.Z`オブジェクトを生成します
    - `Zahlen.Z(n)`
        - `n` : 整数を表す`{Zahlen.Z|number|bigint}` (※整数でない`number`の場合は整数部分のみ取り出す形で丸められます)
- `Zahlen.Z.prototype` : `Zahlen.Z`オブジェクトのプロトタイプ

### `Zahlen.Math`

ECMAScriptの`Math`に似たメソッド・定数を提供するオブジェクトです。

#### 定数

| プロパティ | 型 | 説明 | 正確性 |
|:-----------|:--:|:----:|:------:|
| `Zahlen.Math.PI` | `Zahlen.Q` | 円周率`π` | "十分な近似値" |
| `Zahlen.Math.SQRT2` | `Zahlen.Q` | 2の平方根 | "十分な近似値" |
| `Zahlen.Math.SQRT1_2` | `Zahlen.Q` | ½の平方根(`1/√2`) | "十分な近似値" |
| `Zahlen.Math.E` | `Zahlen.Q` | ネイピア数`e` | "十分な近似値" |
| `Zahlen.Math.LN2` | `Zahlen.Q` | 2の自然対数 | "十分な近似値" |
| `Zahlen.Math.LN10` | `Zahlen.Q` | 10の自然対数 | "十分な近似値" |
| `Zahlen.Math.LOG2E` | `Zahlen.Q` | `e`を底とする2の対数 | "十分な近似値" |
| `Zahlen.Math.LOG10E` | `Zahlen.Q` | `e`を底とする10の対数 | "十分な近似値" |

#### 繰り上げ・繰り下げ・絶対値etc

| メソッド | 引数の型 | 戻り値の型 | 説明 | 正確性 | 備考 |
|:---------|:--------:|:----------:|:----:|:------:|:----:|
| `Zahlen.Math.ceil(x)` | `Zahlen.Qi` | `Zahlen.Z` | `x`以上の最小の整数 | 正確 | ※1 |
| `Zahlen.Math.floor(x)` | `Zahlen.Qi` | `Zahlen.Z` | `x`以下の最大の整数 | 正確 | ※1 |
| `Zahlen.Math.round(x)` | `Zahlen.Qi` | `Zahlen.Z` | `x`に最も近い整数 | 正確 | ※1 |
| `Zahlen.Math.trunc(x)` | `Zahlen.Qi` | `Zahlen.Z` | `x`の整数部分 | 正確 | ※1 |
| `Zahlen.Math.sign(x)` | `Zahlen.Qi` | `Zahlen.Z` | `x`の符号 | 正確 | ※2 |
| `Zahlen.Math.abs(x)` | `Zahlen.Qi` | `Zahlen.Q` | `x`の絶対値 | 正確 | ※1 |
| `Zahlen.Math.gcd(x, y)` | `Zahlen.Qi` | `Zahlen.Z` | `x`と`y`(の絶対値)の最大公約数 | 正確 | ※3 |

> - ※1
>   - `Qi`の場合は虚部を無視して実部のみで計算します
> - ※2
>   - `x`が正の数なら`1`、`0`なら`0`、負の数なら`-1`を返します
>   - `x`が`Zahlen.Qi`の場合は、実部と虚部をそれぞれ比較して、`(-1|0|1)+(-1|0|1)i`を返します
> - ※3
>   - `x`, `y`が自然数でない場合は「絶対値の整数部分」を取り出してから最大公約数を求めます

#### 四則演算

| メソッド | 引数の型 | 戻り値の型 | 説明 | 正確性 | 備考 |
|:---------|:--------:|:----------:|:----:|:------:|:----:|
| `Zahlen.Math.add(x, y)` | `Zahlen.Qi` | `Zahlen.Qi` | `x + y`を返します | 正確 |  |
| `Zahlen.Math.sub(x, y)` | `Zahlen.Qi` | `Zahlen.Qi` | `x - y`を返します | 正確 |  |
| `Zahlen.Math.mul(x, y)` | `Zahlen.Qi` | `Zahlen.Qi` | `x * y`を返します | 正確 |  |
| `Zahlen.Math.div(x, y)` | `Zahlen.Qi` | `Zahlen.Qi` | `x / y`を返します | 正確 | ※1 |
| `Zahlen.Math.mod(x, y)` | `Zahlen.Qi` | `Zahlen.Qi` | `x % y`を返します | 正確 | ※2 |

> - ※1
>   - `y`が`0`の場合はエラーを返します
>   - 必ず整数とは限りません。整数部分のみを取り出したい場合は`Zahlen.Math.trunc(Zahlen.Math.div(x, y))`
> - ※2
>   - `y`が`0`の場合はエラーを返します
>   - これは`Zahlen.Math.sub(Zahlen.Math.div(x, y), Zahlen.Math.trunc(Zahlen.Math.div(x, y)))`と等価になります

#### 比較演算

| メソッド | 引数の型 | 戻り値の型 | 説明 | 正確性 | 備考 |
|:---------|:--------:|:----------:|:----:|:------:|:----:|
| `Zahlen.Math.eq(x, y)` | `Zahlen.Qi` | `boolean` | `x == y`を返します | 正確 | ※1 |
| `Zahlen.Math.ne(x, y)` | `Zahlen.Qi` | ``boolean` | `x != y`を返します | 正確 | ※1 |
| `Zahlen.Math.lt(x, y)` | `Zahlen.Qi` | `boolean` | `x < y`を返します | 正確 | ※1 |
| `Zahlen.Math.le(x, y)` | `Zahlen.Qi` | `boolean` | `x <= y`を返します | 正確 | ※1 |
| `Zahlen.Math.gt(x, y)` | `Zahlen.Qi` | `boolean` | `x > y`を返します | 正確 | ※1 |
| `Zahlen.Math.ge(x, y)` | `Zahlen.Qi` | `boolean` | `x >= y`を返します | 正確 | ※1 |

> - ※1
>   - 実部と虚部をそれぞれ比較します

#### 最大・最小

| メソッド | 引数の型 | 戻り値の型 | 説明 | 正確性 | 備考 |
|:---------|:--------:|:----------:|:----:|:------:|:----:|
| `Zahlen.Math.max(...args)` | `Zahlen.Qi` | `Zahlen.Qi` | 引数の中で最大の値を返します | 正確 | ※1 |
| `Zahlen.Math.min(...args)` | `Zahlen.Qi` | `Zahlen.Qi` | 引数の中で最小の値を返します | 正確 | ※1 |

> - ※1
>   - 大小は絶対値と符号で比較します

#### べき乗・平方根・立方根

| メソッド | 引数の型 | 戻り値の型 | 説明 | 正確性 | 備考 |
|:---------|:--------:|:----------:|:----:|:------:|:----:|
| `Zahlen.Math.pow(x, y)` | `Zahlen.Qi` | `Zahlen.Qi` | `x`の`y`乗を返します | "十分な近似値" |  |
| `Zahlen.Math.sqrt(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `x`の平方根を返します | "十分な近似値" | ※1 |
| `Zahlen.Math.cbrt(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `x`の立方根を返します | "十分な近似値" | ※2 |

> - ※1
>   - `Zahlen.Math.pow(x, new Zahlen.Q(1, 2))`と等価になります
> - ※2
>   - `Zahlen.Math.pow(x, new Zahlen.Q(1, 3))`と等価になります

#### 指数関数・対数関数

| メソッド | 引数の型 | 戻り値の型 | 説明 | 正確性 | 備考 |
|:---------|:--------:|:----------:|:----:|:------:|:----:|
| `Zahlen.Math.exp(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `e`の`x`乗を返します | "十分な近似値" |  |
| `Zahlen.Math.log(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `e`を底とした`x`の対数を返します | "十分な近似値" |  |
| `Zahlen.Math.log10(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `10`を底とした`x`の対数を返します | "十分な近似値" |  |
| `Zahlen.Math.log2(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `2`を底とした`x`の対数を返します | "十分な近似値" |  |
| `Zahlen.Math.log1p(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `e`を底とした`1 + x`の対数を返します | "十分な近似値" | ※1 |

> - ※1
>   - `Zahlen.Math.log(new Zahlen.Q(1).add(x))`と等価になります

#### 三角関数・逆三角関数

| メソッド | 引数の型 | 戻り値の型 | 説明 | 正確性 | 備考 |
|:---------|:--------:|:----------:|:----:|:------:|:----:|
| `Zahlen.Math.sin(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `x`の正弦を返します | "十分な近似値" | ※1 |
| `Zahlen.Math.cos(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `x`の余弦を返します | "十分な近似値" | ※1 |
| `Zahlen.Math.tan(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `x`の正接を返します | "十分な近似値" | ※1 |
| `Zahlen.Math.asin(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `x`の逆正弦を返します | "十分な近似値" |  |
| `Zahlen.Math.acos(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `x`の逆余弦を返します | "十分な近似値" |  |
| `Zahlen.Math.atan(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `x`の逆正接を返します | "十分な近似値" |  |
| `Zahlen.Math.sinh(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `x`の双曲線正弦を返します | "十分な近似値" |  |
| `Zahlen.Math.cosh(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `x`の双曲線余弦を返します | "十分な近似値" |  |
| `Zahlen.Math.tanh(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `x`の双曲線正接を返します | "十分な近似値" |  |
| `Zahlen.Math.asinh(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `x`の逆双曲線正弦を返します | "十分な近似値" |  |
| `Zahlen.Math.acosh(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `x`の逆双曲線余弦を返します | "十分な近似値" |  |
| `Zahlen.Math.atanh(x)` | `Zahlen.Qi` | `Zahlen.Qi` | `x`の逆双曲線正接を返します | "十分な近似値" |  |
| `Zahlen.Math.atan2(y, x)` | `Zahlen.Qi` | `Zahlen.Qi` | ※2 | "十分な近似値" |  |

> - ※1
>   - 引数はラジアンで指定します
> - ※2
>   - `x`軸の正の方向と点`(0, 0)`から点`(x, y)`への線分との角度(単位はラジアン)を返します

#### 乱数

| メソッド | 引数の型 | 戻り値の型 | 説明 | 正確性 | 備考 |
|:---------|:--------:|:----------:|:----:|:------:|:----:|
| `Zahlen.Math.random()` | - | `Zahlen.Q` | 0以上1未満の範囲の乱数を返します | 正確 | ※1 |

> - ※1
>   - `new Zahlen.Q(Math.random())`と等価になります
