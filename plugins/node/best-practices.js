/**
 * Copyright Dealicious, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  plugins: ['node'],
  rules: {
    // deprecated API 를 허용하지 않습니다.
    'node/no-deprecated-api': 2
  }
};
