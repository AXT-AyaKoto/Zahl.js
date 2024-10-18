// ts-check

/**
 * @type {Object} - ECMAScriptのMath相当の機能を提供するクラス
 */
const Zahlen_Math = class Zahlen_Math {
    /* ==== 定数 ==== */
    /** @type {Zahlen_Q} - 円周率 */
    static get PI() { }
    /** @type {Zahlen_Q} - 2の平方根 */
    static get SQRT2() { }
    /** @type {Zahlen_Q} - ½の平方根(`1/√2`) */
    static get SQRT1_2() { }
    /** @type {Zahlen_Q} - ネイピア数`e` */
    static get E() { }
    /** @type {Zahlen_Q} - 2の自然対数 */
    static get LN2() { }
    /** @type {Zahlen_Q} - 10の自然対数 */
    static get LN10() { }
    /** @type {Zahlen_Q} - `e`を底とする2の対数 */
    static get LOG2E() { }
    /** @type {Zahlen_Q} - `e`を底とする10の対数 */
    static get LOG10E() { }
    /* ==== 繰り上げ・繰り下げ・絶対値etc ==== */
    /**
     * @description - 繰り上げ(天井関数)
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Z} - `x`以上の最小の整数
     */
    static ceil(x) { }
    /**
     * @description - 繰り下げ(床関数)
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Z} - `x`以下の最大の整数
     */
    static floor(x) { }
    /**
     * @description - 四捨五入
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Z} - `x`に最も近い整数
     */
    static round(x) { }
    /**
     * @description - 整数部分
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Z} - `x`の整数部分
     */
    static trunc(x) { }
    /**
     * @description - 符号
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Z} - `x`の符号
     */
    static sign(x) { }
    /**
     * @description - 絶対値を計算する
     * @param {Zahlen_Qi} z - 絶対値を計算する対象の値
     * @returns {Zahlen_Q} - 絶対値
     */
    static abs(z) {


    }
    /**
     * @description - 絶対値の最大公約数を計算する
     * @param {Zahlen_Qi} a
     * @param {Zahlen_Qi} b
     * @returns {Zahlen_Z} - 絶対値の最大公約数
     */
    static gcd(a, b) {
        /** @type {Zahlen_Q} - aの絶対値 */
        const abs_a = Zahlen_Math.abs(a);
        /** @type {Zahlen_Q} - bの絶対値 */
        const abs_b = Zahlen_Math.abs(b);
        /** @type {Zahlen_Z} - aの絶対値の整数部分 */
        const int_a = Zahlen_Math.floor(abs_a);
        /** @type {Zahlen_Z} - bの絶対値の整数部分 */
        const int_b = Zahlen_Math.floor(abs_b);
        /** @type {Zahlen_Z} - aの絶対値の整数部分とbの絶対値の整数部分の最大公約数 */
    }
    /* ==== 四則演算 ==== */
    /**
     * @description - 加算
     * @param {Zahlen_Qi} x
     * @param {Zahlen_Qi} y
     * @returns {Zahlen_Qi} - `x + y`
     */
    static add(x, y) { }
    /**
     * @description - 減算
     * @param {Zahlen_Qi} x
     * @param {Zahlen_Qi} y
     * @returns {Zahlen_Qi} - `x - y`
     */
    static sub(x, y) { }
    /**
     * @description - 乗算
     * @param {Zahlen_Qi} x
     * @param {Zahlen_Qi} y
     * @returns {Zahlen_Qi} - `x * y`
     */
    static mul(x, y) { }
    /**
     * @description - 除算
     * @param {Zahlen_Qi} x
     * @param {Zahlen_Qi} y
     * @returns {Zahlen_Qi} - `x / y`
     */
    static div(x, y) { }
    /**
     * @description - 剰余
     * @param {Zahlen_Qi} x
     * @param {Zahlen_Qi} y
     * @returns {Zahlen_Qi} - `x % y`
     */
    static mod(x, y) { }
    /* ==== 比較演算子 ==== */
    /**
     * @description - 等価
     * @param {Zahlen_Qi} x
     * @param {Zahlen_Qi} y
     * @returns {boolean} - `x == y`
     */
    static eq(x, y) {
        // インスタンスプロパティをそれぞれ比べればOK
        return (
            x.r_sign === y.r_sign &&
            x.r_top === y.r_top &&
            x.r_bottom === y.r_bottom &&
            x.i_sign === y.i_sign &&
            x.i_top === y.i_top &&
            x.i_bottom === y.i_bottom
        );
    }
    /**
     * @description - 不等価
     * @param {Zahlen_Qi} x
     * @param {Zahlen_Qi} y
     * @returns {boolean} - `x != y`
     */
    static ne(x, y) {
        /** @description - eqの否定 */
        return !Zahlen_Math.eq(x, y);
    }
    /**
     * @description - 小なり
     * @param {Zahlen_Qi} x
     * @param {Zahlen_Qi} y
     * @returns {boolean} - `x < y`
     */
    static lt(x, y) {
        // xとyの絶対値をそれぞれ計算
        /** @type {Zahlen_Q} - xの絶対値 */
        const abs_x = Zahlen_Math.abs(x);
        /** @type {Zahlen_Q} - yの絶対値 */
        const abs_y = Zahlen_Math.abs(y);
        // 符号が異なる場合 → 符号だけで比較
        if (x.r_sign !== y.r_sign) return x.r_sign < y.r_sign;
        // 符号がともに0の場合 → 0 < 0 は成り立たない
        if (x.r_sign === 0n) return false;
        // 符号がともに正の場合 → 絶対値を通分して比較
        if (x.r_sign === 1n) {
            const x_reduction = {
                "top": abs_x.r_top * abs_y.r_bottom,
                "bottom": abs_x.r_bottom * abs_y.r_bottom
            }
            const y_reduction = {
                "top": abs_y.r_top * abs_x.r_bottom,
                "bottom": abs_y.r_bottom * abs_x.r_bottom
            }
            return x_reduction.top < y_reduction.top;
        }
        // 符号がともに負の場合 → xのほうが絶対値が大きいならtrue
        if (x.r_sign === -1n) {
            return Zahlen_Math.lt(abs_x, abs_y);
        }
    }
    /**
     * @description - 小なりイコール
     * @param {Zahlen_Qi} x
     * @param {Zahlen_Qi} y
     * @returns {boolean} - `x <= y`
     */
    static le(x, y) { }
    /**
     * @description - 大なり
     * @param {Zahlen_Qi} x
     * @param {Zahlen_Qi} y
     * @returns {boolean} - `x > y`
     */
    static gt(x, y) { }
    /**
     * @description - 大なりイコール
     * @param {Zahlen_Qi} x
     * @param {Zahlen_Qi} y
     * @returns {boolean} - `x >= y`
     */
    static ge(x, y) { }
    /* ==== 最大・最小 ==== */
    /**
     * @description - 最大値
     * @param  {...Zahlen_Qi} args
     * @returns {Zahlen_Qi} - 引数の中で最大の値
     */
    static max(...args) { }
    /**
     * @description - 最小値
     * @param  {...Zahlen_Qi} args
     * @returns {Zahlen_Qi} - 引数の中で最小の値
     */
    static min(...args) { }
    /* ==== べき乗・平方根・立方根 ==== */
    /**
     * @description - べき乗
     * @param {Zahlen_Qi} x
     * @param {Zahlen_Qi} y
     * @returns {Zahlen_Qi} - `x`の`y`乗
     */
    static pow(x, y) { }
    /**
     * @description - 平方根
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `x`の平方根
     */
    static sqrt(x) { }
    /**
     * @description - 立方根
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `x`の立方根
     */
    static cbrt(x) { }
    /* ==== 指数関数・対数関数 ==== */
    /**
     * @description - 指数関数
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `e`の`x`乗
     */
    static exp(x) { }
    /**
     * @description - 自然対数
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `e`を底とした`x`の対数
     */
    static log(x) { }
    /**
     * @description - 10を底とする対数
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `10`を底とした`x`の対数
     */
    static log10(x) { }
    /**
     * @description - 2を底とする対数
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `2`を底とした`x`の対数
     */
    static log2(x) { }
    /**
     * @description - `e`を底とした`1 + x`の対数
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `e`を底とした`1 + x`の対数
     */
    static log1p(x) { }
    /* ==== 三角関数・逆三角関数 ==== */
    /**
     * @description - 正弦
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `x`の正弦 ("十分な近似値")
     */
    static sin(x) { }
    /**
     * @description - 余弦
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `x`の余弦 ("十分な近似値")
     */
    static cos(x) { }
    /**
     * @description - 正接
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `x`の正接 ("十分な近似値")
     */
    static tan(x) { }
    /**
     * @description - 逆正弦
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `x`の逆正弦 ("十分な近似値")
     */
    static asin(x) { }
    /**
     * @description - 逆余弦
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `x`の逆余弦 ("十分な近似値")
     */
    static acos(x) { }
    /**
     * @description - 逆正接
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `x`の逆正接 ("十分な近似値")
     */
    static atan(x) { }
    /**
     * @description - 双曲線正弦
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `x`の双曲線正弦 ("十分な近似値")
     */
    static sinh(x) { }
    /**
     * @description - 双曲線余弦
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `x`の双曲線余弦 ("十分な近似値")
     */
    static cosh(x) { }
    /**
     * @description - 双曲線正接
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `x`の双曲線正接 ("十分な近似値")
     */
    static tanh(x) { }
    /**
     * @description - 逆双曲線正弦
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `x`の逆双曲線正弦 ("十分な近似値")
     */
    static asinh(x) { }
    /**
     * @description - 逆双曲線余弦
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `x`の逆双曲線余弦 ("十分な近似値")
     */
    static acosh(x) { }
    /**
     * @description - 逆双曲線正接
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `x`の逆双曲線正接 ("十分な近似値")
     */
    static atanh(x) { }
    /**
     * @description - atan2関数
     * @param {Zahlen_Qi} y
     * @param {Zahlen_Qi} x
     * @returns {Zahlen_Qi} - `x`軸の正の方向と点`(0, 0)`から点`(x, y)`への線分との角度(単位はラジアン) ("十分な近似値")
     */
    static atan2(y, x) { }
    /* ==== 乱数 ==== */
    /**
     * @description - 乱数
     * @returns {Zahlen_Q} - 0以上1未満の範囲の乱数
     */
    static random() {
        return new Zahlen_Q(Math.random());
    }
};

/**
 * @type {Object} - ガウス有理数(Gaussian Rational)を提供するクラス
 */
const Zahlen_Qi = class Zahlen_Qi {
    /**
     * @constructor
     * @param {number|bigint} r_top - 実部の分子
     * @param {number|bigint} r_bottom - 実部の分母
     * @param {number|bigint} i_top - 虚部の分子
     * @param {number|bigint} i_bottom - 虚部の分母
     */
    constructor(r_top, r_bottom, i_top, i_bottom) {
        /**
         * @description - 有理数の分子と分母を約分する
         */
        /** @type {bigint} - 実部の分子と分母の積 */
        const r_product = BigInt(r_top) * BigInt(r_bottom);
        /** @type {bigint} - 虚部の分子と分母の積 */
        const i_product = BigInt(i_top) * BigInt(i_bottom);
        /** @type {bigint} - 実部の符号(正なら1n, 負なら-1n, 0なら0n) */
        const r_sign = r_product > 0n ? 1n : r_product < 0n ? -1n : 0n;
        /** @type {bigint} - 虚部の符号(正なら1n, 負なら-1n, 0なら0n) */
        const i_sign = i_product > 0n ? 1n : i_product < 0n ? -1n : 0n;
        /** @type {bigint} - 実部の符号 */
        this.r_sign = r_sign;
        /** @type {bigint} - 実部の分子 */
        this.r_top = r_sign * BigInt(r_top);
        /** @type {bigint} - 実部の分母 */
        this.r_bottom = r_sign * BigInt(r_bottom);
        /** @type {bigint} - 虚部の符号 */
        this.i_sign = i_sign;
        /** @type {bigint} - 虚部の分子 */
        this.i_top = i_sign * BigInt(i_top);
        /** @type {bigint} - 虚部の分母 */
        this.i_bottom = i_sign * BigInt(i_bottom);
    }
    /**
     * @description - いけるところまで継承先クラスのインスタンスに変換する
     * @returns {Zahlen_Qi|Zahlen_Q|Zahlen_Z} - 整数ならZahlen_Z, 有理数ならZahlen_Q, それ以外ならZahlen_Qi
     */
    format() {
        // 虚部が0(分子が0) かつ 実部が整数(分母が1) → 整数 → Zahlen_Z
        if (this.i_top === 0n && this.r_bottom === 1n) return new Zahlen_Z(this.r_top);
        // 虚部が0(分子が0) → 有理数 → Zahlen_Q
        if (this.i_top === 0n) return new Zahlen_Q(this.r_top, this.r_bottom);
        // それ以外 → ガウス有理数 → Zahlen_Qi
        return this;
    }
};

/**
 * @type {Object} - 有理数(Rational)を提供するクラス。Zahlen.Qiのサブクラス
 */
const Zahlen_Q = class Zahlen_Q extends Zahlen_Qi {
    /**
     * @constructor
     * @param {number|bigint} top - 分子
     * @param {number|bigint} bottom - 分母
     */
    constructor(top, bottom) {
        super(top, bottom, 0, 1);
    }
};

/**
 * @type {Object} - 整数(Integer)を提供するクラス。Zahlen.Qのサブクラス
 */
const Zahlen_Z = class Zahlen_Z extends Zahlen_Q {
    /**
     * @constructor
     * @param {number|bigint} value - 整数
     */
    constructor(value) {
        super(value, 1);
    }
};


/**
 * @type {Object} - Zahlen.jsへのアクセスを提供するオブジェクト
 */
globalThis.Zahlen = {
    Math: Zahlen_Math,
    Qi: Zahlen_Qi,
    Q: Zahlen_Q,
    Z: Zahlen_Z
};
