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
- `Zahlen.Qi.prototype` : `Zahlen.Qi`オブジェクトのプロトタイプ
    - `Zahlen.Qi.prototype.format()` : 整数なら`Zahlen.Z`、有理数なら`Zahlen.Q`に変換した値を返します。ガウス有理数なら値をそのまま返します。

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

- 定数
    - `Zahlen.Math.PI` : 円周率`π`の"十分な近似値"を表す`Zahlen.Q`
    - `Zahlen.Math.SQRT2` : 2の平方根の"十分な近似値"を表す`Zahlen.Q`
    - `Zahlen.Math.SQRT1_2` : ½の平方根(`1/√2`)の"十分な近似値"を表す`Zahlen.Q`
    - `Zahlen.Math.E` : 自然対数の底`e`の"十分な近似値"を表す`Zahlen.Q`
    - `Zahlen.Math.LN2` : 2の自然対数の"十分な近似値"を表す`Zahlen.Q`
    - `Zahlen.Math.LN10` : 10の自然対数の"十分な近似値"を表す`Zahlen.Q`
    - `Zahlen.Math.LOG2E` : `e`を底とする2の対数の"十分な近似値"を表す`Zahlen.Q`
    - `Zahlen.Math.LOG10E` : `e`を底とする10の対数の"十分な近似値"を表す`Zahlen.Q`
- 繰り上げ・繰り下げ・絶対値
    - `Zahlen.Math.ceil(x)` : `x`以上の最小の整数を`Zahlen.Z`で返します
        - `x` : 繰り上げる数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.floor(x)` : `x`以下の最大の整数を`Zahlen.Z`で返します
        - `x` : 繰り下げる数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.round(x)` : `x`に最も近い整数を`Zahlen.Z`で返します
        - `x` : 丸める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.trunc(x)` : `x`の整数部分を`Zahlen.Z`で返します
        - `x` : 整数部分を求める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.sign(x)` : `x`の符号を`Zahlen.Z`(0, 1, -1のいずれか)で返します
        - `x` : 符号を求める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.abs(x)` : 絶対値を`Zahlen.Q`で返します
        - `x` : 絶対値を求める数値を表す`{Zahlen.Qi}`
- 四則演算
    - `Zahlen.Math.add(x, y)` : 引数の和(`x + y`)を`Zahlen.Qi`で返します
        - `x` : 和を求める数値を表す`{Zahlen.Qi}`
        - `y` : 和を求める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.sub(x, y)` : 引数の差(`x - y`)を`Zahlen.Qi`で返します
        - `x` : 差を求める数値を表す`{Zahlen.Qi}`
        - `y` : 差を求める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.mul(x, y)` : 引数の積(`x * y`)を`Zahlen.Qi`で返します
        - `x` : 積を求める数値を表す`{Zahlen.Qi}`
        - `y` : 積を求める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.div(x, y)` : 引数の商(`x / y`)を`Zahlen.Qi`で返します
        - `x` : 商を求める数値を表す`{Zahlen.Qi}`
        - `y` : 商を求める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.mod(x, y)` : 引数の剰余(`x % y`)を`Zahlen.Qi`で返します
        - `x` : 剰余を求める数値を表す`{Zahlen.Qi}`
        - `y` : 剰余を求める数値を表す`{Zahlen.Qi}`
- 最大・最小
    - `Zahlen.Math.max(...args)` : 引数の中で最大の値をそのまま返します
        - `args` : 最大値を求める数値を表す`{Zahlen.Qi}`
        - `{Zahlen.Qi}`が含まれる場合は、絶対値と符号で比較します
    - `Zahlen.Math.min(...args)` : 引数の中で最小の値をそのまま返します
        - `args` : 最小値を求める数値を表す`{Zahlen.Qi}`
        - `{Zahlen.Qi}`が含まれる場合は、絶対値と符号で比較します
- べき乗・平方根・立方根
    - `Zahlen.Math.pow(x, y)` : `x`の`y`乗(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 底を表す`{Zahlen.Qi}`
        - `y` : 指数を表す`{Zahlen.Qi}`
    - `Zahlen.Math.sqrt(x)` : `x`の平方根(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 平方根を求める数値を表す`{Zahlen.Qi}`
        - ※`Zahlen.Math.pow(x, Zahlen.Q(1, 2))`と同じ
    - `Zahlen.Math.cbrt(x)` : `x`の立方根(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 立方根を求める数値を表す`{Zahlen.Qi}`
        - ※`Zahlen.Math.pow(x, Zahlen.Q(1, 3))`と同じ
- 指数関数・対数関数
    - `Zahlen.Math.exp(x)` : `e`の`x`乗(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 指数を表す`{Zahlen.Qi}`
    - `Zahlen.Math.log(x)` : `e`を底とした`x`の対数(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 対数を求める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.log10(x)` : `10`を底とした`x`の対数(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 対数を求める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.log2(x)` : `2`を底とした`x`の対数(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 対数を求める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.log1p(x)` : `e`を底とした`1 + x`の対数(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 対数を求める数値を表す`{Zahlen.Qi}`
        - ※`Zahlen.Math.log(Zahlen.Q(1).add(x))`と同じ
- 三角関数・逆三角関数
    - `Zahlen.Math.sin(x)` : `x`の正弦(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 正弦を求める数値を表す`{Zahlen.Qi}` (ラジアン)
    - `Zahlen.Math.cos(x)` : `x`の余弦(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 余弦を求める数値を表す`{Zahlen.Qi}` (ラジアン)
    - `Zahlen.Math.tan(x)` : `x`の正接(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 正接を求める数値を表す`{Zahlen.Qi}` (ラジアン)
    - `Zahlen.Math.asin(x)` : `x`の逆正弦(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 逆正弦を求める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.acos(x)` : `x`の逆余弦(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 逆余弦を求める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.atan(x)` : `x`の逆正接(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 逆正接を求める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.sinh(x)` : `x`の双曲線正弦(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 双曲線正弦を求める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.cosh(x)` : `x`の双曲線余弦(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 双曲線余弦を求める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.tanh(x)` : `x`の双曲線正接(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 双曲線正接を求める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.asinh(x)` : `x`の逆双曲線正弦(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 逆双曲線正弦を求める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.acosh(x)` : `x`の逆双曲線余弦(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 逆双曲線余弦を求める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.atanh(x)` : `x`の逆双曲線正接(の"十分な近似値")を`Zahlen.Qi`で返します
        - `x` : 逆双曲線正接を求める数値を表す`{Zahlen.Qi}`
    - `Zahlen.Math.atan2(y, x)` : x軸の正の方向と点`(0, 0)`から点`(x, y)`への線分との角度(の"十分な近似値", 単位はラジアン)を`Zahlen.Qi`で返します
        - `y` : y座標を表す`{Zahlen.Qi}`
        - `x` : x座標を表す`{Zahlen.Qi}`
- 乱数
    - `Zahlen.Math.random()` : 0以上1未満の範囲の乱数を`Zahlen.Q`で返します
        - ※`Zahlen.Q(Math.random())`と同じ
