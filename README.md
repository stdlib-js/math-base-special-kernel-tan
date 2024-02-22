<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# kernelTan

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [tangent][tangent] of a double-precision floating-point number on `[-π/4, π/4]`.



<section class="usage">

## Usage

```javascript
import kernelTan from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-kernel-tan@esm/index.mjs';
```

#### kernelTan( x, y, k )

Computes the [tangent][tangent] of a double-precision floating-point number on `[-π/4, π/4]`.

```javascript
var out = kernelTan( 3.141592653589793/4.0, 0.0, 1 );
// returns ~1.0

out = kernelTan( 3.141592653589793/6.0, 0.0, 1 );
// returns ~0.577

out = kernelTan( 0.664, 5.288e-17, 1 );
// returns ~0.783
```

If `k = 1`, the function returns `tan(x+y)`. To return the negative inverse `-1/tan(x+y)`, set `k = -1`. 

```javascript
var out = kernelTan( 3.141592653589793/4.0, 0.0, -1 );
// returns ~-1.0
```

If either `x` or `y` is `NaN`, the function returns `NaN`.

```javascript
var out = kernelTan( NaN, 0.0, 1 );
// returns NaN

out = kernelTan( 3.0, NaN, 1 );
// returns NaN

out = kernelTan( NaN, NaN, 1 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For increased accuracy, the number for which the [tangent][tangent] should be evaluated can be supplied as a [double-double number][double-double-arithmetic] (i.e., a non-evaluated sum of two [double-precision floating-point numbers][ieee754] `x` and `y`).

-   As components of a [double-double number][double-double-arithmetic], the two [double-precision floating-point numbers][ieee754] `x` and `y` must satisfy 

    <!-- <equation class="equation" label="eq:double_double_inequality" align="center" raw="|y| \leq \frac{1}{2} \operatorname{ulp}(x)" alt="Inequality for the two components of a double-double number."> -->

    <div class="equation" align="center" data-raw-text="|y| \leq \frac{1}{2} \operatorname{ulp}(x)" data-equation="eq:double_double_inequality">
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/kernel-tan/docs/img/equation_double_double_inequality.svg" alt="Inequality for the two components of a double-double number.">
        <br>
    </div>

    <!-- </equation> -->

    where `ulp` stands for [units in the last place][ulp].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@esm/index.mjs';
var binomial = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-binomial' ).factory;
import PI from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@esm/index.mjs';
import kernelTan from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-kernel-tan@esm/index.mjs';

var x = linspace( -PI/4.0, PI/4.0, 100 );
var rbinom = binomial( 1, 0.5 );

var descr;
var i;
var k;

for ( i = 0; i < x.length; i++ ) {
    k = rbinom();
    descr = ( k === 1 ) ? 'tan(%d) = %d' : '-1/tan(%d) = %d';
    console.log( descr, x[ i ], kernelTan( x[ i ], 0.0, k ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/kernel-cos`][@stdlib/math/base/special/kernel-cos]</span><span class="delimiter">: </span><span class="description">compute the cosine of a double-precision floating-point number on \[-π/4, π/4].</span>
-   <span class="package-name">[`@stdlib/math-base/special/kernel-sin`][@stdlib/math/base/special/kernel-sin]</span><span class="delimiter">: </span><span class="description">compute the sine of a double-precision floating-point number on \[-π/4, π/4].</span>
-   <span class="package-name">[`@stdlib/math-base/special/tan`][@stdlib/math/base/special/tan]</span><span class="delimiter">: </span><span class="description">evaluate the tangent of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-kernel-tan.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-kernel-tan

[test-image]: https://github.com/stdlib-js/math-base-special-kernel-tan/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/math-base-special-kernel-tan/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-kernel-tan/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-kernel-tan?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-kernel-tan.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-kernel-tan/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-kernel-tan/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-kernel-tan/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-kernel-tan/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-kernel-tan/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-kernel-tan/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-kernel-tan/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-kernel-tan/blob/main/branches.md

[tangent]: https://en.wikipedia.org/wiki/Tangent

[double-double-arithmetic]: https://en.wikipedia.org/wiki/Quadruple-precision_floating-point_format#Double-double_arithmetic

[ieee754]: https://en.wikipedia.org/wiki/IEEE_floating_point

[ulp]: https://en.wikipedia.org/wiki/Unit_in_the_last_place

<!-- <related-links> -->

[@stdlib/math/base/special/kernel-cos]: https://github.com/stdlib-js/math-base-special-kernel-cos/tree/esm

[@stdlib/math/base/special/kernel-sin]: https://github.com/stdlib-js/math-base-special-kernel-sin/tree/esm

[@stdlib/math/base/special/tan]: https://github.com/stdlib-js/math-base-special-tan/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
